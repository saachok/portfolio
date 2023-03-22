import { Routes, Route, Navigate } from 'react-router-dom';

import { Container } from '@mui/material';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Work from './pages/Work';

function App() {
  return (
    <Container
      disableGutters
      maxWidth="true"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: 'rgb(222, 234, 248)',
      }}
    >
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </Container>
  );
}

export default App;
