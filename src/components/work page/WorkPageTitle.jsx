import React from 'react';
import { Stack, Typography } from '@mui/material';

const WorkPageTitle = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      // textAlign="center"
      // gap={2}
    >
      <Typography variant="h3">Work</Typography>
      <Typography variant="body1" textAlign="center">
        Check list of my non commercial projects.
      </Typography>
    </Stack>
  );
};

export default WorkPageTitle;
