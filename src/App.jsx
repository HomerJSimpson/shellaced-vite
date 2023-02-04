import './App.css';

import { LoremIpsum } from 'react-lorem-ipsum';

import Menu from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// <ul>{Object.keys(window).map((e, i) => <li key={i}>{e} - {typeof window[e]}</li>)}</ul>
function App() {
  return (
    <>
      <CssBaseline />
      <header>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <Menu />
            </IconButton>
            <Typography variant="h6">
              Shell<sup>aced</sup>
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
      <main>
        <section>
          <LoremIpsum p={14} />
        </section>
      </main>
      <footer>
        <Container maxWidth="lg" disableGutters>
          <Divider variant="fullWidth" />
          <Typography component="div" align="center" variant="caption">&copy; 2023. All Rights Reserved</Typography>
        </Container>
      </footer>
    </>
  );
}

export default App;
