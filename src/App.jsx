import { Routes, Route, Navigate } from 'react-router-dom';

import { Container, ThemeProvider } from '@mui/material';
import { theme } from './theme';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Work from './pages/Work';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth="true"
        sx={{
          height: '100vh',
        }}
      >
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
