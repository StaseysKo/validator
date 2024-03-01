import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Card, Stack, Grid, Typography, Divider, Box } from '@mui/material';

import locationIcon from '@iconify/icons-carbon/location';
import calendar from '@iconify/icons-carbon/calendar';

import { TextMaxLine, TextIconLabel, Image } from 'src/components';
import { Iconify } from 'src/components/iconify';

import Routes from 'src/routes';


ProjectCard.propTypes = {
    result: PropTypes.object.isRequired,
};

const getServicesText = function (count) {
    if (count % 10 === 1 && count % 100 !== 11) {
        return "услуга";
    } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
        return "услуги";
    } else {
        return "услуг";
    }
}



export default function ProjectCard({ result, onClose }) {

    const { projectLink, projectName, mainProjectImg, servicesProvided, industryOfWork, adressOfTheObject, yearOfWork } = result;

    const MAX_CHARACTERS = 124; // Установленный лимит символов
    let displayedServices = servicesProvided;
    let moreServicesText = '';

    // Обработка списка услуг для отображения
    if (servicesProvided.join(', ').length > MAX_CHARACTERS) {
        let totalChars = 0;
        displayedServices = servicesProvided.filter((service, index) => {
            totalChars += service.length + (index > 0 ? 2 : 0); // Учитываем запятые и пробелы
            return totalChars <= MAX_CHARACTERS;
        });

        const hiddenServicesCount = servicesProvided.length - displayedServices.length;
        moreServicesText = (
            <span style={{ textDecoration: 'underline', color: 'rgb(34, 184, 207)' }}>
                {` и еще ${hiddenServicesCount} ${getServicesText(hiddenServicesCount)}`}
            </span>
        );
    }

    const handleClick = () => {
        if (onClose) {
            setTimeout(() => {
                onClose(); // Закрываем модальное окно поиска после задержки
            }, 2500); // 500 мс задержка
        }
    };

    return (
        <Card
            sx={{
                backgroundColor: '#252c35',
                boxShadow: (theme) => theme.customShadows.z8,
                "&:hover": {
                    boxShadow: (theme) => theme.customShadows.z24,
                },
                position: "relative",

            }}
        >
            <div onClick={handleClick}>
                <Stack >
                    <Box
                        sx={{
                            cursor: 'pointer',

                        }}
                    >
                        <NextLink
                            as={Routes.portfolio.project(projectLink)}
                            href={Routes.portfolio.project(projectLink)}
                            passHref
                        >

                            <Image
                                alt={projectName}
                                src={mainProjectImg}
                                ratio="16/9"
                                sx={{
                                    borderRadius: '10px, 0px'
                                }}
                            />
                        </NextLink>
                    </Box>

                    <Stack spacing={0.5} sx={{ p: 2.5, pb: 0 }}>
                        <NextLink
                            as={Routes.portfolio.project(projectLink)}
                            href={Routes.portfolio.project(projectLink)}
                            passHref
                        >
                            <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                                {industryOfWork}
                            </Typography>
                        </NextLink>
                        <NextLink
                            as={Routes.portfolio.project(projectLink)}
                            href={Routes.portfolio.project(projectLink)}
                            passHref
                        >
                            <TextMaxLine variant="h6" persistent>
                                {projectName}
                            </TextMaxLine>
                        </NextLink>
                    </Stack>

                    <Stack
                        spacing={0.5}
                        sx={{
                            p: 2.5,
                            pt: 2,
                            minHeight: {
                                xs: '120px',
                                sm: '120px',
                                md: '120px',
                                lg: '110px',
                                xl: '100px'
                            },
                            cursor: 'pointer'
                        }}
                    >
                        <NextLink as={Routes.portfolio.project(projectLink)} href={Routes.portfolio.project(projectLink)} passHref>
                            <Typography sx={{ typography: 'body3', color: 'text.secondary' }}>
                                {displayedServices
                                    .map((service, index) => index === 0 ? service.charAt(0).toUpperCase() + service.slice(1).toLowerCase() : service.toLowerCase())
                                    .join(', ')}
                                {moreServicesText}
                            </Typography>
                        </NextLink>
                    </Stack>

                    <Divider sx={{ borderStyle: 'dashed' }} />

                    <Stack sx={{ p: 3, pt: 0, pb: 0 }}>

                        <Stack sx={{ mt: 3, mb: 2 }}>

                            <Grid
                                sx={{
                                    pt: 0,
                                    typography: "p",
                                    color: "text.secondary",
                                }}
                            >
                                <Grid item xs={6}>
                                    <NextLink
                                        as={Routes.portfolio.project(projectLink)}
                                        href={Routes.portfolio.project(projectLink)}
                                        passHref
                                    >
                                        <TextIconLabel
                                            sx={{
                                                typography: "body3",
                                            }}
                                            icon={
                                                <Iconify
                                                    icon={locationIcon}
                                                    sx={{ mr: 0.5, width: 18, height: 18 }}
                                                />
                                            }
                                            value={adressOfTheObject}
                                        />
                                    </NextLink>
                                </Grid>
                                <Grid item xs={6}>
                                    <NextLink
                                        as={Routes.portfolio.project(projectLink)}
                                        href={Routes.portfolio.project(projectLink)}
                                        passHref
                                    >
                                        <TextIconLabel
                                            sx={{
                                                typography: "body3",
                                            }}
                                            icon={
                                                <Iconify
                                                    icon={calendar}
                                                    sx={{ mr: 0.5, width: 18, height: 18 }}
                                                />
                                            }
                                            value={yearOfWork}
                                        />
                                    </NextLink>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Stack>
                </Stack>

            </div>
        </Card>
    )
}