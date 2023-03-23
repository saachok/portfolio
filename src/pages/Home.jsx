import React from 'react';
import { Stack } from '@mui/material';

import UserDescription from '../components/home page/UserDescription';
import CustomButton from '../components/UI/CustomButton';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { img, buttons } from '../components/home page/animations';

const Home = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" gap={4}>
      <motion.div
        initial={img.initial}
        animate={img.animate}
        transition={img.transition}
      >
        <img
          src="./photo-2.jpg"
          width="350px"
          alt="user"
          style={{ borderRadius: '4px' }}
        />
      </motion.div>
      <Stack direction="column" gap={1}>
        <UserDescription />
        <motion.div
          initial={buttons.initial}
          animate={buttons.animate}
          transition={buttons.transition}
        >
          <Stack direction="row" gap={2} marginTop="1rem">
            <Link
              to="/contact"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <CustomButton
                sx={{
                  backgroundColor: 'rgb(132,168,192)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgb(118, 152, 176)',
                  },
                }}
              >
                Contact me
              </CustomButton>
            </Link>
            <Link
              to="/work"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <CustomButton
                sx={{
                  backgroundColor: 'inherit',
                  border: '1px solid darkgreen',
                  color: 'black',
                  '&:hover': {
                    backgroundColor: 'rgb(193, 207, 220)',
                  },
                }}
              >
                Check my work
              </CustomButton>
            </Link>
          </Stack>
        </motion.div>
      </Stack>
    </Stack>
  );
};

export default Home;
