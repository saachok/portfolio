import React from 'react';
import { Box, Chip, Stack, Typography } from '@mui/material';

import './styles/GridItem.scss';

const GridItem = ({ project }) => {
  const getToolsList = (arr) => {
    const cuttedToolsList = [];
    for (let i = 0; i <= 2; i++) {
      cuttedToolsList.push(arr[i]);
    }
    const otherTools = `+${arr.length - cuttedToolsList.length}`;
    if (otherTools !== '+0') {
      cuttedToolsList.push(otherTools);
    }
    return cuttedToolsList;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        // backgroundColor: 'lightpink',
        height: '16rem',
        // borderRadius: '1rem',
      }}
    >
      <Stack gap={1}>
        <img className="project-cover" src={project.img} alt="project cover" />
        <Typography variant="h6">{project.title}</Typography>
        <Stack direction="row" gap={1}>
          {getToolsList(project.tools).map((tool) => (
            <Chip label={tool} key={tool} />
          ))}
        </Stack>
      </Stack>
      {/* <Typography variant="body1">{project.description}</Typography> */}
    </Box>
  );
};

export default GridItem;
