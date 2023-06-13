import { useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Box, Stack, Drawer } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// config
import { HEADER, NAV } from '../../../config-global';
// components
import Logo from '../../../components/logo';
import Scrollbar from '../../../components/scrollbar';
import { NavSectionVertical } from '../../../components/nav-section';
//
import { navTopMenuList, navBottomMenuList } from './config-navigation';
import NavDocs from './NavDocs';
import NavAccount from './NavAccount';
import NavToggleButton from './NavToggleButton';
import NavSupscription from './NavSubscription';

// ----------------------------------------------------------------------

type Props = {
  openNav: boolean;
  onCloseNav: VoidFunction;
};

export default function NavVertical({ openNav, onCloseNav }: Props) {
  const { pathname } = useRouter();

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: `calc(100% - ${HEADER.H_DASHBOARD_DESKTOP}px)`,
        py: 1.25,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          '&:before, &:after': {
            content: 'unset',
            display: 'none',
          },
        },
      }}
    >
      <Box>
        <NavSectionVertical data={navTopMenuList} />
      </Box>
      <Box sx={{ mb: '96px' }}>
        <NavSupscription />
        <NavSectionVertical data={navBottomMenuList} />
      </Box>
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_DASHBOARD },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              zIndex: 0,
              width: NAV.W_DASHBOARD,
              bgcolor: 'transparent',
              top: HEADER.H_DASHBOARD_DESKTOP,
              bottom: 0,
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              width: NAV.W_DASHBOARD,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
