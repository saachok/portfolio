import React from 'react';
import { Grid } from '@mui/material';
import GridItem from './GridItem';
import { motion } from 'framer-motion';
import './styles/Projects.scss';
import { REPOS } from '../../constants';

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
        {REPOS.map(proj => {
          delay += 0.2;
          return { ...proj, delay };
        }).map(proj => (
          <Grid item lg={4} sm={6} xs={12} key={proj.title}>
            <GridItem project={proj} />
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default ProjectsList;
