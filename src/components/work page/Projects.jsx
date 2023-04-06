import React from 'react';
import { Grid } from '@mui/material';
import GridItem from './GridItem';
import { motion } from 'framer-motion';
import './styles/Projects.scss';

const repos = [
  {
    img: './projects images/spotify-playlist-creator.png',
    path: 'spotify-playlist-creator',
    title: 'Spotify Playlist Creator',
    description:
      'Description description description description description description description description.',
    tools: ['React', 'Express', 'MUI', 'JavaScript'],
  },

  {
    img: './projects images/react-food-order.png',
    path: 'food-order-app',
    title: 'React Food Order',
    description: '',
    tools: ['React', 'Redux', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    img: './projects images/russian-losses-tracker.png',
    path: 'russian-losses-tracker',
    title: 'Russian Losses Tracker',
    description: '',
    tools: ['React', 'Chart.js', 'MUI', 'JavaScript', 'CSS'],
  },
  {
    img: './projects images/breaking-bad-characters.png',
    path: 'breaking-bad-characters/characters',
    title: 'Breaking Bad Characters',
    description: '',
    tools: ['React', 'Router', 'Motion', 'JavaScript', 'CSS', 'MUI'],
  },
  {
    img: './projects images/calculator.png',
    path: 'calculator',
    title: 'Calculator',
    description: '',
    tools: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    img: './projects images/weather-tracker.png',
    path: 'weather-tracker',
    title: 'Weather Tracker',
    description: '',
    tools: ['JavaScript', 'HTML', 'CSS'],
  },
];

const Projects = () => {
  let delay = 0;

  return (
    <motion.div className="motion-wrapper">
      <Grid
        container
        width={{
          xs: 'auto',
          md: '80%',
        }}
      >
        {repos
          .map((proj) => {
            delay += 0.2;
            return { ...proj, delay };
          })
          .map((proj) => (
            <Grid item lg={4} sm={6} xs={12} key={proj.title}>
              <GridItem project={proj} />
            </Grid>
          ))}
      </Grid>
    </motion.div>
  );
};

export default Projects;
