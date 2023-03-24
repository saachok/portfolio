import React from 'react';
import { Stack, Button } from '@mui/material';

import UserDescription from '../components/home page/UserDescription';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { img, buttons } from '../components/home page/animations';
import '../components/home page/styles/Home.scss';

const Home = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" gap={4}>
      <motion.div
        initial={img.initial}
        animate={img.animate}
        transition={img.transition}
      >
        <img src="./photo-2.jpg" alt="user" className="user-photo" />
      </motion.div>
      <Stack direction="column" gap={1}>
        <UserDescription />
        <motion.div
          initial={buttons.initial}
          animate={buttons.animate}
          transition={buttons.transition}
        >
          <Stack direction="row" gap={2} marginTop="1rem">
            <Link to="/contact" className="link">
              <Button
                sx={{
                  backgroundColor: 'rgb(132,168,192)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgb(118, 152, 176)',
                  },
                }}
              >
                Contact me
              </Button>
            </Link>
            <Link to="/work" className="link">
              <Button
                sx={{
                  backgroundColor: 'inherit',
                  border: '1px solid black',
                  color: 'black',
                  '&:hover': {
                    backgroundColor: 'rgb(193, 207, 220)',
                  },
                }}
              >
                Check my work
              </Button>
            </Link>
          </Stack>
        </motion.div>
      </Stack>
    </Stack>
  );
};

export default Home;
