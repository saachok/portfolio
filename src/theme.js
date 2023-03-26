import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          overflowX: 'hidden',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '24px',
          padding: '4px 2rem',
        },
      },
    },
  },
});

theme.typography.h3 = {
  fontSize: '3rem',
  // '@media (max-width:599px)': {
  //   fontSize: '1.5rem',
  // },
  [theme.breakpoints.down('lg')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
};
