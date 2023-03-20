import React from 'react';
import { Stack } from '@mui/material';

import UserDescription from '../components/UserDescription';
import CustomButton from '../components/UI/CustomButton';

const Home = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" gap={4}>
      <img
        src="./photo-1.jpg"
        width="350px"
        alt="user"
        style={{ borderRadius: '4px' }}
      />
      <Stack direction="column" gap={1}>
        <UserDescription />
        <Stack direction="row" gap={2} marginTop="1rem">
          <CustomButton
            sx={{
              backgroundColor: 'darkgreen',
              color: 'white',
              '&:hover': {
                backgroundColor: 'green',
              },
            }}
          >
            Contact me
          </CustomButton>
          <CustomButton
            sx={{
              backgroundColor: 'inherit',
              border: '1px solid darkgreen',
              color: 'black',
              '&:hover': {
                backgroundColor: 'rgb(164, 199, 157)',
              },
            }}
          >
            Check my work
          </CustomButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Home;
