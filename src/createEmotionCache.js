import createCache from '@emotion/cache';

export default function createEmotionCache() {
  const cache = createCache({ key: 'css' });
  console.log(cache); // Выведет объект кэша в консоль
  console.log('ну, хуй'); // еще выведет в консоль слово хуй
  return cache;
}
