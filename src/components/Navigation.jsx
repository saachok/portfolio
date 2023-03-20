import React from 'react';
import { Stack, Typography } from '@mui/material';

const Navigation = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      direction="row"
      gap={6}
      height="4rem"
      sx={{ position: 'absolute', top: '0' }}
    >
      <Typography variant="h6">Work</Typography>
      <Typography variant="h6">Resume</Typography>
      <Typography variant="h6">Contact</Typography>
    </Stack>
  );
};

export default Navigation;
