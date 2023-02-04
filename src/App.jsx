import './App.css';

import { LoremIpsum } from 'react-lorem-ipsum';

import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';

import Footer from './Footer';
import Header from './Header';

function App() {
  const drawerWidth = 250;
  return (
    <>
      <CssBaseline />
      <header>
        <Header />
      </header>
      <Drawer variant="permanent" open anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <ul>{Object.keys(window).map((e, i) => <li key={i}>{e} - {typeof window[e]}</li>)}</ul>
      </Drawer>
      <main>
        <section>
          <LoremIpsum p={14} />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
