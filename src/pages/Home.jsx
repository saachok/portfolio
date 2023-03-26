import React from 'react';
import { Stack, Button } from '@mui/material';

import UserDescription from '../components/home page/UserDescription';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { img, buttons } from '../components/home page/animations';
import '../components/home page/styles/Home.scss';

const Home = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      direction={{
        xs: 'column',
        lg: 'row',
      }}
      gap={{
        xs: 1,
        lg: 4,
      }}
    >
      <motion.div
        initial={img.initial}
        animate={img.animate}
        transition={img.transition}
        className="photo-wrapper"
      >
        <img src="./photo-2.jpg" alt="user" className="user-photo" />
      </motion.div>
      <Stack
        direction="column"
        alignItems={{
          xs: 'center',
          lg: 'start',
        }}
        gap={1}
      >
        <UserDescription />
        <motion.div
          initial={buttons.initial}
          animate={buttons.animate}
          transition={buttons.transition}
        >
          <Stack
            direction={'row'}
            gap={{
              xs: 1,
              lg: 2,
            }}
            justifyContent={{
              xs: 'center',
              lg: 'start',
            }}
            alignItems={{
              xs: 'center',
              lg: 'start',
            }}
            marginTop={{
              xs: '0.5rem',
              lg: '1rem',
            }}
            marginBottom={{
              xs: '1rem',
              lg: '0rem',
            }}
          >
            <Link to="/contact" className="link">
              <Button
                sx={{
                  backgroundColor: 'rgb(132,168,192)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgb(118, 152, 176)',
                  },
                  fontSize: {
                    xs: '1rem',
                    lg: '1.5rem',
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
                  fontSize: {
                    xs: '1rem',
                    lg: '1.5rem',
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
