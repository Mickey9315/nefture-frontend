import { Box, Button, Typography } from '@mui/material';

function NavSupscription() {
  return (
    <Box px={1}>
      <Box
        sx={{
          background: 'linear-gradient(100.11deg, #0EAE88 0%, #1350C7 100%)',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '11px',
          p: '13px 11px 18px 11px',
          mb: '20px',
        }}
      >
        <Typography
          sx={{
            fontSize: '15px',
            lineHeight: '20px',
            fontWeight: '500',
            mb: '36px',
            color: 'white',
            letterSpacing: '0.34px',
            px: '10px',
          }}
        >
          Upgrade your
          <br />
          wallet security
        </Typography>
        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: 'white',
            color: '#286CED',
            '&:hover': { bgcolor: '#286CED', color: 'white' },
          }}
        >
          Upgrade to pro
        </Button>
      </Box>
    </Box>
  );
}

export default NavSupscription;
