import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Chip, Stack, Typography, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { galleryItem } from './animations';

import './styles/GridItem.scss';

const GridItem = ({ project }) => {
  const { img, path, title, description, tools, href, external, delay } =
    project;

  return (
    <Box className="container">
      <motion.div
        variants={galleryItem}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: delay }}
      >
        <Stack gap={1} sx={{ maxWidth: '285px' }}>
          {external ? (
            <Link href={href}>
              <img className="project-cover" src={img} alt="project cover" />
            </Link>
          ) : (
            <NavLink to={path}>
              <img className="project-cover" src={img} alt="project cover" />
            </NavLink>
          )}
          <Typography variant="h6">{title}</Typography>
          <Typography>{description}</Typography>
          <Stack
            direction="row"
            sx={{ maxWidth: '285px', flexWrap: 'wrap' }}
            gap={1}
          >
            {tools.map(tool => (
              <Chip label={tool} key={tool} />
            ))}
          </Stack>
        </Stack>
      </motion.div>
    </Box>
  );
};

export default GridItem;
