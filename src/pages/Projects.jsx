import React from 'react';
import { Stack, Container } from '@mui/material';

import Navigation from '../components/Navigation';

import ProjectsList from '../components/work page/ProjectsList';
import ProjectsPageTitle from '../components/work page/ProjectsPageTitle';

import { Route, Routes } from 'react-router-dom';
import BreakingBadCharacters from './apps/BreakingBadCharacters';
import FoodOrderApp from './apps/FoodOrderApp';
import RussianLossesTracker from './apps/RussianLossesTracker';
import Calculator from './apps/Calculator';
import WeatherTracker from './apps/WeatherTracker';

const ProjectsPage = () => {
  return (
    <Container disableGutters maxWidth="true">
      <Navigation />
      <Stack
        direction="column"
        sx={{
          gap: {
            xs: '0',
            sm: '0.5rem',
            lg: '1rem',
          },
        }}
        alignItems="center"
        marginBottom="1rem"
      >
        <ProjectsPageTitle />
        <ProjectsList />
      </Stack>
    </Container>
  );
};

const Projects = () => {
  return (
    // +1 route for Spotify Playlist Creator that hosted on Render.com
    <Routes>
      <Route path="/" exact element={<ProjectsPage />} />
      <Route path="/food-order-app" element={<FoodOrderApp />} />
      <Route
        path="/russian-losses-tracker"
        element={<RussianLossesTracker />}
      />
      <Route
        path="/breaking-bad-characters/*"
        element={<BreakingBadCharacters />}
      />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/weather-tracker" element={<WeatherTracker />} />
    </Routes>
  );
};

export default Projects;
