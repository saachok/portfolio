import React from 'react';
import { Stack } from '@mui/material';

import Navigation from '../components/Navigation';
import PageWrapper from '../components/UI/PageWrapper';

import Projects from '../components/work page/Projects';
import WorkPageTitle from '../components/work page/WorkPageTitle';

import { Route, Routes } from 'react-router-dom';
import BreakingBadCharacters from './BreakingBadCharacters';
import FoodOrderApp from './FoodOrderApp';
import RussianLossesTracker from './RussianLossesTracker';

const WorkPage = () => {
  return (
    <PageWrapper>
      <Navigation />
      <Stack direction="column" gap={2} alignItems="center">
        <WorkPageTitle />
        <Projects />
      </Stack>
    </PageWrapper>
  );
};

const Work = () => {
  return (
    // +1 route for Spotify Playlist Creator that hosted on Heroku
    <Routes>
      <Route path="/" exact element={<WorkPage />} />
      <Route path="/food-order-app" element={<FoodOrderApp />} />
      <Route
        path="/russian-losses-tracker"
        element={<RussianLossesTracker />}
      />
      <Route
        path="/breaking-bad-characters/*"
        element={<BreakingBadCharacters />}
      />
      <Route path="/calculator" element={<h1>Calculator page</h1>} />
      <Route path="/weather-tracker" element={<h1>Weather tracker page</h1>} />
    </Routes>
  );
};

export default Work;
