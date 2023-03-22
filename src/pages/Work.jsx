import React from 'react';
import { Typography, Grid, Stack, Box } from '@mui/material';
import Projects from '../components/work page/Projects';
import WorkPageTitle from '../components/work page/WorkPageTitle';

const Work = () => {
  return (
    <Stack direction="column" gap={2} alignItems="center">
      <WorkPageTitle />
      <Projects />
    </Stack>
  );
};

export default Work;
