import React from 'react';
import { Stack, Typography } from '@mui/material';

const UserDescription = () => {
  const bgStyles = {
    backgroundColor: 'rgb(132,168,192)',
    color: 'white',
    padding: '0 6px 3px 1px',
  };
  return (
    <Stack direction="column" gap={1} width="650px">
      <Typography variant="h3" fontWeight="bold">
        Hi, I'm Andrii and I'm <br />a
        <em style={bgStyles}>Frontend Web Developer</em>.
      </Typography>
      <Stack direction="column" gap="inherit" width="560px">
        <Typography variant="body1">
          I'm a young web developer who likes to create useful products and
          share them with others on the Internet. My strengths are teamwork,
          finding alternative ways to solve problems, focus on achieving the
          best final result.
        </Typography>
        <Typography variant="body1">
          Every day I'm improving my knowledge and I'll be glad to build more
          and more interesting projects that let me become a master of web
          development :)
        </Typography>
      </Stack>
    </Stack>
  );
};

export default UserDescription;
