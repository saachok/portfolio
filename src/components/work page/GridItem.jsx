import React from 'react';
import { Box, Chip, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { galleryItem } from './animations';

import './styles/GridItem.scss';

const GridItem = ({ project }) => {
  const getToolsList = (arr) => {
    const cuttedToolsList = [];
    for (let i = 0; i <= 2; i++) {
      cuttedToolsList.push(arr[i]);
    }
    const otherTools = `+${arr.length - cuttedToolsList.length}`;
    if (otherTools !== '+0') {
      cuttedToolsList.push(otherTools);
    }
    return cuttedToolsList;
  };

  return (
    <Box className="container">
      <motion.div
        variants={galleryItem}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: project.delay }}
      >
        <Stack gap={1}>
          <img
            className="project-cover"
            src={project.img}
            alt="project cover"
          />
          <Typography variant="h6">{project.title}</Typography>
          <Stack direction="row" gap={1}>
            {getToolsList(project.tools).map((tool) => (
              <Chip label={tool} key={tool} />
            ))}
          </Stack>
        </Stack>
        {/* <Typography variant="body1">
        Description description description description description description
        description description.
      </Typography> */}
      </motion.div>
    </Box>
  );
};

export default GridItem;
