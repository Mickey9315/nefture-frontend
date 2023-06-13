// routes
import { PATH } from '../../../routes/paths';
// components
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  dashboard: icon('dashboard'),
  wallets: icon('wallets'),
  nefture: icon('nefture'),
  networks: icon('networks'),
  settings: icon('settings'),
  faq: icon('faq'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'Top',
    items: [
      { title: 'Dashboard', path: PATH.dashboard, icon: ICONS.dashboard },
      { title: 'Wallets', path: PATH.wallets, icon: ICONS.wallets },
      { title: 'Nefture +', path: PATH.nefture, icon: ICONS.nefture },
    ],
  },
  {
    subheader: 'Bottom',
    items: [
      { title: 'Networks', path: PATH.networks, icon: ICONS.networks },
      { title: 'Settings', path: PATH.settings, icon: ICONS.settings },
      { title: 'FAQ', path: PATH.faq, icon: ICONS.faq },
    ],
  },
];

export default navConfig;
