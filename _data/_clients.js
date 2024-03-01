// ----------------------------------------------------------------------

const CLIENTS_NAME = [
  'chistograd',
  'konigsquash',
  'tdstroitel',
  're',
  'seltgroup',
  'rsk',
  'titan',
  'bin',
  'kpd',
];

const _clients = CLIENTS_NAME.map((client, index) => ({
  id: index,
  name: client,
  image: `/clients/${client}.svg`,
}));


export default _clients