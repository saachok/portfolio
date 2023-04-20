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
      'This project was created for practice with Spotify for Developers API. You need to wait a few minutes after clicking on the image because it’s a free hosting site and application rebuilt after 15 minutes inactive mode.',
    tools: ['React', 'Express', 'MUI', 'JavaScript'],
  },

  {
    img: './projects images/react-food-order.png',
    path: 'food-order-app',
    title: 'React Food Order',
    description:
      'App was created for practice with a connection to own remote database (e.g. FireBase). As an alternative was connected to Redux instead of sending HTTP requests.',
    tools: ['React', 'Redux', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    img: './projects images/russian-losses-tracker.png',
    path: 'russian-losses-tracker',
    title: 'Russian Losses Tracker',
    description:
      'Main goal of this app is to insert a graph that based on dynamic data. GET request was created by date-range-picker that set an offset for custom amount of days. Information fetched by several APIs.',

    tools: ['React', 'Chart.js', 'MUI', 'JavaScript', 'CSS'],
  },
  {
    img: './projects images/breaking-bad-characters.png',
    path: 'breaking-bad-characters/characters',
    title: 'Breaking Bad Characters',
    description:
      'The goal of this project was to practice with React Router and set different animations to elements. In example I used Material UI components and Motion library to animate these elements.',

    tools: ['React', 'Router', 'Motion', 'JavaScript', 'CSS', 'MUI'],
  },
  {
    img: './projects images/calculator.png',
    path: 'calculator',
    title: 'Calculator',
    description:
      'This project was created a few years ago without using React. After this time has been successfully imported into React app. Main goal was to practice DOM manipulation via JavaScript.',

    tools: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    img: './projects images/weather-tracker.png',
    path: 'weather-tracker',
    title: 'Weather Tracker',
    description:
      'Main goal of this project was to practice sending HTTP requests to remote storage via API. This app has a complete layout in HTML and modifies content of dozen elements by using JavaScript DOM manipulation.',

    tools: ['JavaScript', 'HTML', 'CSS'],
  },
];

const ProjectsList = () => {
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

export default ProjectsList;
