import { Routes, Route, Navigate } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

import Home from './pages/Home';
import Work from './pages/Work';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" exact element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/work/*" element={<Work />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
