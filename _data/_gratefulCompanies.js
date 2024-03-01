// ----------------------------------------------------------------------

function removeSpacesAndQuotesFn(companyName) {
  return companyName.normalize('NFC').replace(/[\s"«»]/g, '');
}

const COMPANIES_NAME = [
  'МАДОУ "Детский Сад №74"',
  'МБУ "САТО"',
  'МАОУОО "Школа №15"',
  'ГБСОУ КО "Госпиталь для ветеранов"',

  'ООО Специализированный Застройщик "ИК "Авангардинвестпроект"',
  'УО ООО «Европейские кондитерские»',
  'Храм святого благоверного князя Александра Невского',
  'ООО "Курган-Балт"',
  
  'ГБСОУ "Госпиталь для ветеранов войн"',
  'МБОУСО "Школа №3"',
  'ГБСУСО "Новые горизонты"',
  'МКУ "Калининградская служба заказчика"',
];

const _gratefulCompanies = COMPANIES_NAME.map((company, index) => {
  const companyNameForFileName = removeSpacesAndQuotesFn(company);
  return {
    id: index,
    companyName: company,
    thankYouPhoto: `images/gratefullImg/${companyNameForFileName}.webp`,
    altTag: `Благодарность от компании ${company}`
  };
});

export default _gratefulCompanies