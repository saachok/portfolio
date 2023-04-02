import React from 'react';
import Navigation from '../components/Navigation';
import {
  Stack,
  Paper,
  Typography,
  Button,
  Container,
  Link,
} from '@mui/material';
import { AlternateEmail, Telegram, LinkedIn } from '@mui/icons-material';
import '../components/contact page/Contact.scss';

const LinkButton = ({ startIcon, href, children }) => {
  return (
    <Button
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
      <Paper
        elevation={4}
        sx={{
          backgroundColor: 'rgb(223, 233, 245)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '1rem',
        }}
        // direction="column"
        // gap={2}
      >
        {/* <Link href={LINKEDIN_URL} className="contact-link" variant="h5">
          <Stack direction="row" alignItems="center">
            <LinkedIn className="contact-icon" />
            LindenIn
          </Stack>
        </Link> */}
        <Typography variant="h4" textAlign="center">
          Contact me!
        </Typography>
        <LinkButton
          startIcon={<LinkedIn className="contact-icon" />}
          href={LINKEDIN_URL}
        >
          LinkedIn
        </LinkButton>
        <LinkButton
          startIcon={<Telegram className="contact-icon" />}
          href={TELEGRAM_URL}
        >
          Telegram
        </LinkButton>
        <LinkButton
          startIcon={<AlternateEmail className="contact-icon" />}
          href={GMAIL_URL}
        >
          Email
        </LinkButton>
        {/* 
        <Link href={TELEGRAM_URL} className="contact-link" variant="h5">
          <Stack direction="row" alignItems="center">
            <Telegram className="contact-icon" />
            Telegram
          </Stack>
        </Link>
        <Link href={GMAIL_URL} className="contact-link" variant="h5">
          <Stack direction="row" alignItems="center">
            <AlternateEmail className="contact-icon" />
            Gmail
          </Stack>
        </Link> */}
      </Paper>
    </Container>
  );
};

export default Contact;
