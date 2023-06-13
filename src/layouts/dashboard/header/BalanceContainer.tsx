import { Avatar, Box, MenuItem, Select, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Image from 'src/components/image/Image';

const StyledBox = styled(Box)(({ theme }) => ({
  height: 40,
  borderRadius: '14px',
  background: '#1A1B1F',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  alignItems: 'center',
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  height: '100%',
  background: 'transparent',
  border: 0,
  '.MuiOutlinedInput-notchedOutline': { border: 0 },
  '& .MuiSelect-select': { padding: '8px', paddingRight: '32px' },
  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' },
  '& .MuiSvgIcon-root': { color: theme.palette.common.white },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: '700',
  lineHeight: '20px',
  color: theme.palette.common.white,
}));

function BalanceContainer() {
  const networks = [
    {
      id: 1,
      icon: '/assets/icons/coin/ic_ethereum.png',
      name: 'Ethereum',
    },
  ];
  const accounts = [
    {
      id: 1,
      address: '0x3935828253553',
      balance: 42.069,
    },
    {
      id: 2,
      avatar: '/assets/images/portraits/portrait_1.jpg',
      address: '0x646363464',
      balance: 10.069,
    },
  ];
  const avatar = '/assets/images/portraits/portrait_6.jpg';
  const [currentNetwork, setCurrentNetwork] = useState<number>(1);
  const [currentAccount, setCurrentAccount] = useState<number>(1);

  const handleNetworkChange = (e: any) => {
    setCurrentNetwork(Number(e.target.value));
  };

  return (
    <Stack direction="row" spacing={1}>
      <StyledBox>
        <StyledSelect value={currentNetwork} onChange={handleNetworkChange}>
          {networks &&
            networks.map((network) => (
              <MenuItem key={network.id} value={network.id}>
                <Box display="flex" alignItems="center">
                  <Image src={network.icon} />
                  <StyledTypography
                    sx={{
                      ml: 1,
                    }}
                  >
                    {network.name}
                  </StyledTypography>
                </Box>
              </MenuItem>
            ))}
        </StyledSelect>
      </StyledBox>
      <StyledBox>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ px: 0.25 }}>
          <StyledTypography sx={{ ml: 1.25 }}>42.069 ETH</StyledTypography>
          <StyledBox
            sx={{
              background: 'rgba(255, 255, 255, 0.06)',
              borderRadius: '13px',
              pl: '8px',
              pr: '0px',
              height: 36,
            }}
          >
            <Avatar src={avatar} sx={{ width: 24, height: 24 }} />
            <StyledSelect
              value={currentAccount}
              onChange={(e) => setCurrentAccount(Number(e.target.value))}
            >
              {accounts &&
                accounts.map((account) => (
                  <MenuItem key={account.id} value={account.id}>
                    <StyledTypography>{account.address}</StyledTypography>
                  </MenuItem>
                ))}
            </StyledSelect>
          </StyledBox>
        </Stack>
      </StyledBox>
    </Stack>
  );
}

export default BalanceContainer;
