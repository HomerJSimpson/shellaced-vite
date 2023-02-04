import "./App.css";

import { LoremIpsum } from "react-lorem-ipsum";

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Header from "./Header";
import Typography from "@mui/material/Typography";

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
        <Container maxWidth="lg" disableGutters>
          <Divider variant="fullWidth" />
          <Typography component="div" align="center" variant="caption">
            &copy; 2023. All Rights Reserved
          </Typography>
        </Container>
      </footer>
    </>
  );
}

export default App;
