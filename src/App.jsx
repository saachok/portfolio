import { Routes, Route, Navigate } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

import Home from './pages/Home';
import Work from './pages/Work';
import Resume from './pages/Resume';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" exact element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/work/*" element={<Work />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
