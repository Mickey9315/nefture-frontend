import { noCase } from 'change-case';
import { useState } from 'react';
// @mui
import {
  Box,
  Stack,
  List,
  Badge,
  Button,
  Avatar,
  Tooltip,
  Divider,
  IconButton,
  Typography,
  ListItemText,
  ListSubheader,
  ListItemAvatar,
  ListItemButton,
} from '@mui/material';
// utils
import { fToNow } from '../../../utils/formatTime';
// _mock_
import { _notifications } from '../../../_mock/arrays';
// components
import Iconify from '../../../components/iconify';
import Scrollbar from '../../../components/scrollbar';
import MenuPopover from '../../../components/menu-popover';
import { IconButtonAnimate } from '../../../components/animate';

// ----------------------------------------------------------------------

export default function HelpPopover() {
  const [faqs, setFaqs] = useState(_notifications);

  const [openPopover, setOpenPopover] = useState<HTMLElement | null>(null);

  const handleOpenPopover = (event: React.MouseEvent<HTMLElement>) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  return (
    <>
      <IconButtonAnimate
        color={openPopover ? 'primary' : 'default'}
        onClick={handleOpenPopover}
        sx={{ width: 40, height: 40, mx: '-8px' }}
      >
        <Iconify icon="mingcute:question-fill" />
      </IconButtonAnimate>

      <MenuPopover open={openPopover} onClose={handleClosePopover} sx={{ width: 360, p: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">FAQ</Typography>
          </Box>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Scrollbar sx={{ height: { xs: 340, sm: 'auto' } }}>
          <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                New
              </ListSubheader>
            }
          >
            {faqs.slice(0, 2).map((notification) => (
              <FaqItem key={notification.id} faq={notification} />
            ))}
          </List>

          <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                Before that
              </ListSubheader>
            }
          >
            {faqs.slice(2, 5).map((notification) => (
              <FaqItem key={notification.id} faq={notification} />
            ))}
          </List>
        </Scrollbar>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Box sx={{ p: 1 }}>
          <Button fullWidth disableRipple>
            View All
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}

// ----------------------------------------------------------------------

type FaqItemProps = {
  id: string;
  title: string;
  description: string;
  avatar: string | null;
  type: string;
  createdAt: Date;
  isUnRead: boolean;
};

function FaqItem({ faq }: { faq: FaqItemProps }) {
  const { avatar, title } = renderContent(faq);

  return (
    <ListItemButton
      sx={{
        py: 1.5,
        px: 2.5,
        mt: '1px',
        ...(faq.isUnRead && {
          bgcolor: 'action.selected',
        }),
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: 'background.neutral' }}>{avatar}</Avatar>
      </ListItemAvatar>

      <ListItemText
        disableTypography
        primary={title}
        secondary={
          <Stack direction="row" sx={{ mt: 0.5, typography: 'caption', color: 'text.disabled' }}>
            <Iconify icon="eva:clock-fill" width={16} sx={{ mr: 0.5 }} />
            <Typography variant="caption">{fToNow(faq.createdAt)}</Typography>
          </Stack>
        }
      />
    </ListItemButton>
  );
}

// ----------------------------------------------------------------------

function renderContent(faq: FaqItemProps) {
  const title = (
    <Typography variant="subtitle2">
      {faq.title}
      <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
        &nbsp; {noCase(faq.description)}
      </Typography>
    </Typography>
  );

  if (faq.type === 'order_placed') {
    return {
      avatar: <img alt={faq.title} src="/assets/icons/notification/ic_package.svg" />,
      title,
    };
  }
  if (faq.type === 'order_shipped') {
    return {
      avatar: <img alt={faq.title} src="/assets/icons/notification/ic_shipping.svg" />,
      title,
    };
  }
  if (faq.type === 'mail') {
    return {
      avatar: <img alt={faq.title} src="/assets/icons/notification/ic_mail.svg" />,
      title,
    };
  }
  if (faq.type === 'chat_message') {
    return {
      avatar: <img alt={faq.title} src="/assets/icons/notification/ic_chat.svg" />,
      title,
    };
  }
  return {
    avatar: faq.avatar ? <img alt={faq.title} src={faq.avatar} /> : null,
    title,
  };
}
