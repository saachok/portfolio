import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Stack, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Navigation.scss';

const Navigation = () => {
  return (
    <>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        gap={6}
        height="4rem"
        width="100%"
        sx={{ position: 'fixed', top: '0' }}
      >
        <Link to="/home" className="link">
          <HomeIcon sx={{ fontSize: '28px', margin: '0 2rem' }} />
        </Link>

        <Stack alignItems="inherit" direction="row" gap="inherit">
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
        <IconButton
          disableRipple
          onClick={() => {
            window.location.href = 'https://github.com/saachok';
          }}
        >
          <GitHubIcon
            sx={{ fontSize: '28px', margin: '0 2rem', color: 'black' }}
          />
        </IconButton>
      </Stack>
    </>
  );
};

export default Navigation;
