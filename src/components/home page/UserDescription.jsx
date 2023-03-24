import React from 'react';
import { Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { title, firstParagraph, secondParagraph } from './animations';
import './styles/UserDescription.scss';

const UserDescription = () => {
  return (
    <Stack direction="column" gap={1} width="650px">
      <motion.div
        initial={title.initial}
        animate={title.animate}
        transition={title.transition}
      >
        <Typography variant="h3" fontWeight="bold">
          Hi, I'm Andrii and I'm a<br />
          <em className="styled-bg">Frontend Web Developer</em>.
        </Typography>
      </motion.div>
      <Stack direction="column" gap="inherit" width="560px">
        <motion.div
          initial={firstParagraph.initial}
          animate={firstParagraph.animate}
          transition={firstParagraph.transition}
        >
          <Typography variant="body1">
            I'm a young web developer who likes to create useful products and
            share them with others on the Internet. My strengths are teamwork,
            finding alternative ways to solve problems, focus on achieving the
            best final result.
          </Typography>
        </motion.div>
        <motion.div
          initial={secondParagraph.initial}
          animate={secondParagraph.animate}
          transition={secondParagraph.transition}
        >
          <Typography variant="body1">
            Every day I'm improving my knowledge and I'll be glad to build more
            and more interesting projects that let me become a master of web
            development :)
          </Typography>
        </motion.div>
      </Stack>
    </Stack>
  );
};

export default UserDescription;
