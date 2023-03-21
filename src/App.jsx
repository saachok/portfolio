import { Routes, Route, Navigate } from 'react-router-dom';

import { Container } from '@mui/material';

import Navigation from './components/Navigation';
import Home from './pages/Home';

function App() {
  return (
    <Container
      disableGutters
      maxWidth="true"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'rgb(222, 234, 248)',
      }}
    >
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Container>
  );
}

export default App;
