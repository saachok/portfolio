import React from 'react';
import Navigation from '../components/Navigation';
import { Paper, Typography, Button, Container } from '@mui/material';
import { AlternateEmail, Telegram, LinkedIn } from '@mui/icons-material';
import '../components/contact page/Contact.scss';
import { motion } from 'framer-motion';
import {
  wrapper,
  title,
  linkedIn,
  telegram,
  email,
} from '../components/contact page/animations';

const LinkButton = ({ startIcon, href, children }) => {
  return (
    <Button
      fullWidth
      variant="outlined"
      startIcon={startIcon}
      href={href}
      sx={{
        color: 'black',
        borderColor: 'black',

        '&:hover': {
          backgroundColor: 'rgb(193, 207, 220)',
          borderColor: 'black',
        },
      }}
    >
      {children}
    </Button>
  );
};

const Contact = () => {
  const LINKEDIN_URL = 'https://www.linkedin.com/in/andrii-sachok-91a086265/';
  const TELEGRAM_URL = 'https://t.me/andr_sachok';
  const GMAIL_URL = 'mailto:andriy.sachok@gmail.com';

  return (
    <Container
      disableGutters
      maxWidth="true"
      sx={{
        height: '100vh',
      }}
    >
      <Navigation />
      <motion.div
        initial={wrapper.initial}
        animate={wrapper.animate}
        transition={wrapper.transition}
      >
        <Paper
          elevation={4}
          sx={{
            backgroundColor: 'rgb(223, 233, 245)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            padding: '1rem',
          }}
        >
          <motion.div
            initial={title.initial}
            animate={title.animate}
            transition={title.transition}
          >
            <Typography variant="h4" textAlign="center">
              Contact me!
            </Typography>
          </motion.div>
          <motion.div
            initial={linkedIn.initial}
            animate={linkedIn.animate}
            transition={linkedIn.transition}
            className="button-animation"
          >
            <LinkButton
              startIcon={<LinkedIn className="contact-icon" />}
              href={LINKEDIN_URL}
            >
              LinkedIn
            </LinkButton>
          </motion.div>
          <motion.div
            initial={telegram.initial}
            animate={telegram.animate}
            transition={telegram.transition}
            className="button-animation"
          >
            <LinkButton
              startIcon={<Telegram className="contact-icon" />}
              href={TELEGRAM_URL}
            >
              Telegram
            </LinkButton>
          </motion.div>
          <motion.div
            initial={email.initial}
            animate={email.animate}
            transition={email.transition}
            className="button-animation"
          >
            <LinkButton
              startIcon={<AlternateEmail className="contact-icon" />}
              href={GMAIL_URL}
            >
              Email
            </LinkButton>
          </motion.div>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default Contact;
