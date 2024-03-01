// ----------------------------------------------------------------------

const PARTNERS_NAME = [
  'gk',
  'megapolis',
  'kyrganbalt',
  'kldsnab',
  'marcopol',
  'bmk',
  'elmemetal',
  'glenar',
  'baucenter',
  'evrosteklo',
];

const _partners = PARTNERS_NAME.map((partner, index) => ({
  id: index,
  name: partner,
  image: `/partners/${partner}.svg`,
}));

export default _partners