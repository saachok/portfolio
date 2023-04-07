import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Chip, Stack, Typography, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { galleryItem } from './animations';

import './styles/GridItem.scss';

const GridItem = ({ project }) => {
  return (
    <Box className="container">
      <motion.div
        variants={galleryItem}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: project.delay }}
      >
        <Stack gap={1}>
          {project.path === 'spotify-playlist-creator' ? (
            <Link href="https://playlist-creator-spotify.herokuapp.com/">
              <img
                className="project-cover"
                src={project.img}
                alt="project cover"
              />
            </Link>
          ) : (
            <NavLink to={project.path}>
              <img
                className="project-cover"
                src={project.img}
                alt="project cover"
              />
            </NavLink>
          )}
          <Typography variant="h6">{project.title}</Typography>
          <Stack
            direction="row"
            sx={{ maxWidth: '285px', flexWrap: 'wrap' }}
            gap={1}
          >
            {project.tools.map((tool) => (
              <Chip label={tool} key={tool} />
            ))}
          </Stack>
        </Stack>
      </motion.div>
    </Box>
  );
};

export default GridItem;
