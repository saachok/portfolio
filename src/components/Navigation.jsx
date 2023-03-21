import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import './Navigation.scss';

const Navigation = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      direction="row"
      gap={6}
      height="4rem"
      sx={{ position: 'absolute', top: '0' }}
    >
      <Link to="/work" className="link">
        <Typography variant="h6">Work</Typography>
      </Link>
      <Link to="/resume" className="link">
        <Typography variant="h6">Resume</Typography>
      </Link>
      <Link to="/contact" className="link">
        <Typography variant="h6">Contact</Typography>
      </Link>
    </Stack>
  );
};

export default Navigation;
