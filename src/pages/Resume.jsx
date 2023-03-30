import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import samplePDF from '../Resume.pdf';

import Navigation from '../components/Navigation';
import PageWrapper from '../components/UI/PageWrapper';

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <PageWrapper>
      <Navigation />
      <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} />
      </Document>
    </PageWrapper>
  );
};

export default Resume;
