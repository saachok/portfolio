import React from 'react';
import { Grid, Typography, Box, Stack } from '@mui/material';
import GridItem from './GridItem';

const repos = [
  {
    img: './projects images/spotify-playlist-creator.png',
    title: 'Spotify Playlist Creator',
    description:
      'Description description description description description description description description.',
    tools: ['React', 'Express', 'MUI', 'JavaScript'],
  },

  {
    img: './projects images/react-food-order.png',
    title: 'React Food Order',
    description: '',
    tools: ['React', 'Redux', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    img: './projects images/russian-losses-tracker.png',
    title: 'Russian Losses Tracker',
    description: '',
    tools: ['React', 'Chart.js', 'MUI', 'JavaScript', 'CSS'],
  },
  {
    img: './projects images/breaking-bad-characters.png',
    title: 'Breaking Bad Characters',
    description: '',
    tools: ['React', 'Router', 'Motion', 'JavaScript', 'CSS', 'MUI'],
  },
  {
    img: './projects images/calculator.png',
    title: 'Calculator',
    description: '',
    tools: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    img: './projects images/weather-tracker.png',
    title: 'Weather Tracker',
    description: '',
    tools: ['JavaScript', 'HTML', 'CSS'],
  },
  // 'dnu-example',
];

const Projects = () => {
  return (
    <Grid
      container
      sx={{
        width: '80%',
        padding: '0 1.5rem',
      }}
    >
      {repos.map((proj) => (
        <Grid item md={4} sm={6} xs={12} key={proj.title}>
          <GridItem project={proj} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
