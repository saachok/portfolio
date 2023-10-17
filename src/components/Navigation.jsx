import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconButton, Stack, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Navigation.scss';

const Navigation = () => {
<<<<<<< HEAD
  const resume_page_url = 'https://saachok.github.io/portfolio/#/resume';
  const contact_page_url = 'https://saachok.github.io/portfolio/#/contact';
  const projects_page_url = 'https://saachok.github.io/portfolio/#/projects';
=======
  const resume_page_url = 'http://localhost:3000/resume';
  const contact_page_url = 'http://localhost:3000/contact';
  const projects_page_url = 'http://localhost:3000/projects';
>>>>>>> main
  return (
    <Stack
      className={`navbar${
        window.location.href === resume_page_url
          ? ' resume'
          : window.location.href === contact_page_url
          ? ' contact'
          : window.location.href === projects_page_url
          ? ' projects'
          : ''
      }`}
      direction="row"
      gap={{
        xs: 2,
        sm: 4,
        lg: 6,
      }}
    >
      <NavLink to="/home">
        <HomeIcon className="icon" />
      </NavLink>

      <Stack alignItems="inherit" direction="row" gap="inherit">
        <NavLink to="/projects" className="link">
          <Typography variant="h6">Projects</Typography>
        </NavLink>
        <NavLink to="/resume" className="link">
          <Typography variant="h6">Resume</Typography>
        </NavLink>
        <NavLink to="/contact" className="link">
          <Typography variant="h6">Contact</Typography>
        </NavLink>
      </Stack>
      <IconButton
        sx={{ padding: 0 }}
        disableRipple
        onClick={() => {
          window.location.href = 'https://github.com/saachok';
        }}
      >
        <GitHubIcon className="icon" />
      </IconButton>
    </Stack>
  );
};

export default Navigation;
