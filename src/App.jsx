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
        backgroundColor: 'rgb(210, 255, 200)',
      }}
    >
      <Navigation />
      <Home />
    </Container>
  );
}

export default App;
