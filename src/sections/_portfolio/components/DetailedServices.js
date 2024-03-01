import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Tooltip, IconButton, useTheme, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { TextMaxLine } from 'src/components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// ----------------------------------------------------------------------

DetailedServices.propTypes = {
    metadata: PropTypes.shape({
        detailedServicesInfo: PropTypes.array.isRequired,
    }),
};

export default function DetailedServices({ metadata }) {
    const theme = useTheme();
    const isWideScreen = useMediaQuery(theme.breakpoints.up('md'));
    const { detailedServicesInfo } = metadata;
    const scrollRef = useRef(null);
    const [showScrollLeft, setShowScrollLeft] = useState(false);
    const [showScrollRight, setShowScrollRight] = useState(true);

    const scroll = (scrollOffset) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        const isScrolledToLeft = scrollRef.current.scrollLeft > 0;
        const isScrolledToRight = scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

        setShowScrollLeft(isScrolledToLeft);
        setShowScrollRight(isScrolledToRight);
    };

    return (
        <Box sx={{ position: 'relative' }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: { xs: 5, md: 4 },
                }}
            >
                <Typography variant="h3" paragraph
                    sx={{
                        marginTop: { xs: '40px', sm: '40px', md: '0px', lg: '0px', xl: '0px', },
                        marginBottom: 0
                    }}
                >
                    Реализованные услуги
                </Typography>
                {isWideScreen && (
                    <Box>
                        <IconButton
                            onClick={() => scroll(-440)}
                        >
                            <ArrowBackIosIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => scroll(440)}
                        >
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Box>
                )}
            </Box>
            <Box
                ref={scrollRef}
                sx={{
                    overflowX: 'auto',
                    display: 'flex',
                    scrollBehavior: 'smooth',
                    '&::-webkit-scrollbar': {
                        display: 'none'
                    },
                    '-ms-overflow-style': 'none',
                    'scrollbar-width': 'none',
                }}
                onScroll={handleScroll}
            >
                <Grid container spacing={4} alignItems="left" wrap="nowrap">
                    {detailedServicesInfo.map((service, index) => (
                        <Grid item key={service.name} sx={{ minWidth: 115 }}>
                            <Box
                                sx={{
                                    p: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'left',
                                    minHeight: 140,
                                }}
                            >
                                <Tooltip
                                    arrow
                                    title={
                                        <React.Fragment>
                                            <TextMaxLine color="inherit">{service.name}</TextMaxLine>
                                            <br />
                                            <em>{service.property1}</em>
                                            <br />
                                            <em>{service.property2}</em>
                                            <br />
                                            <em>{service.property3}</em>
                                            <br />
                                            <em>{service.property4}</em>
                                        </React.Fragment>
                                    }
                                    enterDelay={300}
                                    leaveDelay={200}
                                    PopperProps={{
                                        sx: {
                                            '.MuiTooltip-tooltip': {
                                                // backgroundColor: '#212B36',
                                            },
                                        },
                                    }}
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.name}
                                        width={85}
                                        height={85}
                                        style={{ borderRadius: '50%' }}
                                    />
                                    <TextMaxLine
                                        variant="body2"
                                        persistent
                                        sx={{
                                            fontSize: "0.80rem",
                                            color: 'text.secondary',
                                            mt: 1,
                                            textAlign: 'left',
                                        }}
                                    >
                                        {service.name}
                                    </TextMaxLine>
                                </Tooltip>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}