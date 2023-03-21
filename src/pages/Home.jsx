import React from 'react';
import { Stack } from '@mui/material';

import UserDescription from '../components/UserDescription';
import CustomButton from '../components/UI/CustomButton';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" gap={4}>
      <img
        src="./photo-2.jpg"
        width="350px"
        alt="user"
        style={{ borderRadius: '4px' }}
      />
      <Stack direction="column" gap={1}>
        <UserDescription />
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
          <Link to="/work" style={{ textDecoration: 'none', color: 'inherit' }}>
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
      </Stack>
    </Stack>
  );
};

export default Home;
