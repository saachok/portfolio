import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Container, Button } from '@mui/material';
import { saveAs } from 'file-saver';
import ResumePDF from '../Resume.pdf';

import Navigation from '../components/Navigation';

const Resume = () => {
  const PDF_PATH = process.env.PUBLIC_URL + '/Resume.pdf';

  const handleDownload = async () => {
    try {
      saveAs(ResumePDF, 'Andrii Sachok');
    } catch (e) {
      console.error('Error downloading PDF file', e);
    }
  };

  return (
    <Container disableGutters maxWidth="true">
      <Navigation />
      <Document file={PDF_PATH} disableAnnotationLayer={true}>
        <Page height={1200} pageNumber={1} />
      </Document>
      <Button
        onClick={handleDownload}
        sx={{
          margin: '2rem',
          backgroundColor: 'inherit',
          border: '1px solid black',
          color: 'black',
          '&:hover': {
            backgroundColor: 'rgb(193, 207, 220)',
          },
        }}
      >
        Download PDF
      </Button>
    </Container>
  );
};

export default Resume;
