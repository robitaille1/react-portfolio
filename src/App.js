import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import {
  Burger,
  Menu,
  Header,
  Bio,
  Tech,
  Projects,
  Contact,
  Footer,
} from "./Components";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles open={open} />
        <Wrap>
          <Header />
        </Wrap>
        <Bio />
        <Wrap>
          <Tech />
          <Projects />
          <Contact />
          <Footer />
        </Wrap>
        <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;

const Wrap = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;
