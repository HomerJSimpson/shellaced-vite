import './App.css';

import { LoremIpsum } from 'react-lorem-ipsum';

import CssBaseline from '@mui/material/CssBaseline';

import Footer from './Footer';
import Header from './Header';

// <ul>{Object.keys(window).map((e, i) => <li key={i}>{e} - {typeof window[e]}</li>)}</ul>
function App() {
  return (
    <>
      <CssBaseline />
      <header>
        <Header />
      </header>
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
