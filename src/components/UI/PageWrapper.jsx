import React from 'react';
import { Container } from '@mui/material';

const PageWrapper = ({ children }) => {
  return (
    <Container
      disableGutters
      maxWidth="true"
      sx={{
        height: {
          xs: 'auto',
          lg: '100vh',
        },
      }}
    >
      {children}
    </Container>
  );
};

export default PageWrapper;
