import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Stack, Box, Typography, Grid, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

import { updateIndustryCounts } from 'src/utils/industryLogic';

import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT, MARGIN_BOTTOM_DESKTOP } from 'src/config';

import { SearchByPortfolio, SortingByService, SortedByIndustries } from '../components';
import { ProjectCard } from 'src/components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  marginBottom: MARGIN_BOTTOM_DESKTOP,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

const staticServices = [
  "Ограждающие конструкции из ч/м",
  "Ограждающие конструкции из н/с",
  "Ограждающие конструкции из стекла",
  "Перила",
  "Поручни",
  "Металлоконструкции навесов",
  "Вентиляционные системы и дымоходы",
  "Конструкции кровли",
  "Переходные мостики",
  "Площадки обслуживания",
  "Пожарные лестницы",
  "Эвакуационные лестницы",
  "Стремянки",
  "Металлоконструкции зданий",
  "Металлоконструкции дверей",
  "Фермы",
  "Ангары",
  "Склады",
  "Перекрытия",
  "Анкерные блоки",
  "Остановки",
  "Лавочки",
  "Скамейки",
  "Велопарковки",
  "Болларды",
  "Урны",
  "Контейнерные площадки",
  "Малые архитектурные формы",
  "Спорткомплексы",
  "Торгово-развлекательные комплексы",
  "Трибуны",
  "Фанзоны",
  "Бассейны",
  "Раздевалки",
  "Душевые",
  "Обвязка трубопровода",
  "Эстакады для трубопроводов",
  "Котельные",
  "Трубопроводы пожаротушения",
  "Технические резервуары",
  "Лифты",
  "Подъемники",
  "Лифтовые порталы",
  "Лифтовые кабины",
  "Интерьерные решения",
  "Декоративные элементы",
  "Нестандартные металлоконструкции",
  "Стеклодержатели",
];

// ----------------------------------------------------------------------

export default function PortfolioView() {
  const router = useRouter();

  const [searchText, setSearchText] = useState('');
  const [shownCards, setShownCards] = useState(6);
  const [filters, setFilters] = useState({
    filterCategories: null,
    filterLocation: null,
  });
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [arrOfIndustriesNames, setArrOfIndustriesNames] = useState([]);
  const [initialCategoryFromUrl, setInitialCategoryFromUrl] = useState(null); // Для сохранения категории из URL

  useEffect(() => {
    if (router.isReady) {
      const categoryFromUrl = router.query.category;
      setInitialCategoryFromUrl(categoryFromUrl); // Сохранение категории из URL
    }
  }, [router.isReady, router.query.category]);

  // Функция для асинхронной загрузки проектов
  async function fetchProjects() {
    try {
      const response = await fetch('/api/projects');
      if (!response.ok) {
        throw new Error('Обнаружена ошибка сети');
      }
      const data = await response.json();
      setProjects(data);
      const updatedIndustries = updateIndustryCounts(data);
      setArrOfIndustriesNames(updatedIndustries.map(el => el.name));

      // Извлечение и приведение к нижнему регистру всех услуг из проектов
      const projectServices = new Set(data.flatMap(project => project.servicesProvided.map(service => service.toLowerCase())));
      const filteredServices = staticServices.filter(service => projectServices.has(service.toLowerCase()));
      setServices(filteredServices);
    } catch (error) {
      console.error('Обнаружена ошибка:', error.message);
    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (projects.length > 0 && initialCategoryFromUrl) {
      if (services.includes(initialCategoryFromUrl)) {
        setFilters({ filterLocation: initialCategoryFromUrl, filterCategories: null });
      } else if (arrOfIndustriesNames.includes(initialCategoryFromUrl)) {
        setFilters({ filterLocation: null, filterCategories: initialCategoryFromUrl });
      }
    }
  }, [projects, services, arrOfIndustriesNames, initialCategoryFromUrl]);

  const handleFilterChange = (type, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [type]: value }));
  };

  const filteredProjectArray = projects.filter(project => {
    const normalizedFilterLocation = filters.filterLocation?.toLowerCase();
    const servicesProvidedNormalized = project.servicesProvided.map(service => service.toLowerCase());

    return (
      (!filters.filterCategories || filters.filterCategories === project.industryOfWork) &&
      (!normalizedFilterLocation || servicesProvidedNormalized.includes(normalizedFilterLocation)) &&
      (searchText === '' || project.projectName.toLowerCase().includes(searchText.toLowerCase()))
    );
  });

  return (
    <RootStyle>
      <Container>
        <Box sx={{ pt: 5 }}>
          <Stack pb={5} spacing={3} direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'row' }} alignItems="center">

            <SearchByPortfolio
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <SortingByService
              arrOfServicesNames={services}
              filterLocation={filters.filterLocation}
              onChangeLocation={(value) => handleFilterChange('filterLocation', value)}
            />
            <SortedByIndustries
              arrOfIndustriesNames={arrOfIndustriesNames}
              filterCategories={filters.filterCategories}
              onChangeCategory={(value) => handleFilterChange('filterCategories', value)}
            />
          </Stack>

          <Box
            sx={{
              display: "grid",
              rowGap: { xs: 4, md: 5 },
              columnGap: 3,
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
            }}
          >
            {filteredProjectArray.length === 0 ? (
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                direction="column"
                sx={{ gridColumn: '1 / -1' }}
              >
                <Typography variant="h6" mt={2}>Ничего не найдено</Typography>
              </Grid>
            ) : (
              filteredProjectArray.slice(0, shownCards).map((result) => (
                <ProjectCard key={result.id} result={result} />
              ))
            )}
          </Box>

          {shownCards < filteredProjectArray.length && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
              <Button size="large" variant="outlined" onClick={() => setShownCards(filteredProjectArray.length)}>Показать все</Button>
            </Box>
          )}
        </Box>
      </Container>
    </RootStyle>
  );
}
