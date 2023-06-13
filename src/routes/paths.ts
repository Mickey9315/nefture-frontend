// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  login: '/login',
};

export const PATH = {
  root: ROOTS_DASHBOARD,
  dashboard: '/dashboard',
  wallets: '/wallets',
  nefture: '/nefture',
  networks: '/networks',
  settings: '/settings',
  faq: '/faq',
};
