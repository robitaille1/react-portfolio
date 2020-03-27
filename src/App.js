import React, { useState, useRef } from "react";
import { useOnClickOutside } from "./hooks";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Burger, Menu, Header, Bio, Tech } from "./Components";

function App() {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles open={open} />
        <Header />
        <FadeDiv />
        <Bio />
        <Tech />
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;

const FadeDiv = styled.div`
  width: 100%;
  height: 200px;
  background-image: linear-gradient(#2b343f, lightGrey);
`;
