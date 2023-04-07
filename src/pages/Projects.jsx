import React from 'react';
import { Stack } from '@mui/material';

import Navigation from '../components/Navigation';
import PageWrapper from '../components/UI/PageWrapper';

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
    <PageWrapper>
      <Navigation />
      <Stack direction="column" gap={2} alignItems="center">
        <ProjectsPageTitle />
        <ProjectsList />
      </Stack>
    </PageWrapper>
  );
};

const Projects = () => {
  return (
    // +1 route for Spotify Playlist Creator that hosted on Heroku
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
