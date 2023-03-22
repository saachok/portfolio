import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconButton, Stack, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Navigation.scss';

const Navigation = () => {
  return (
    <>
      <Stack className="navbar" direction="row" gap={6}>
        <NavLink to="/home">
          <HomeIcon className="icon" />
        </NavLink>

        <Stack alignItems="inherit" direction="row" gap="inherit">
          <NavLink to="/work" className="link">
            <Typography variant="h6">Work</Typography>
          </NavLink>
          <NavLink to="/resume" className="link">
            <Typography variant="h6">Resume</Typography>
          </NavLink>
          <NavLink to="/contact" className="link">
            <Typography variant="h6">Contact</Typography>
          </NavLink>
        </Stack>
        <IconButton
          disableRipple
          onClick={() => {
            window.location.href = 'https://github.com/saachok';
          }}
        >
          <GitHubIcon className="icon" />
        </IconButton>
      </Stack>
    </>
  );
};

export default Navigation;
