import React from 'react';
import { Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { title } from './animations';

const WorkPageTitle = () => {
  return (
    <motion.div
      variants={title}
      initial={title.initial}
      animate={title.animate}
      transition={{ duration: 0.8 }}
    >
      <Stack direction="column" alignItems="center">
        <Typography variant="h3">Work</Typography>
        <Typography variant="body1" textAlign="center">
          Check list of my non commercial projects.
        </Typography>
      </Stack>
    </motion.div>
  );
};

export default WorkPageTitle;
