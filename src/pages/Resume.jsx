import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Container } from '@mui/material';

import Navigation from '../components/Navigation';

const Resume = () => {
  const PDF_PATH = 'Resume.pdf';
  return (
    <Container disableGutters maxWidth="true">
      <Navigation />
      <Document file={PDF_PATH}>
        <Page pageNumber={1} />
      </Document>
    </Container>
  );
};

export default Resume;
