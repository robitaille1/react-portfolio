import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Burger, Menu, Header, Bio, Tech } from "./Components";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles open={open} />
        <Header />
        {/* <FadeDiv /> */}
        <Bio />
        <Tech />
        <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;

// const FadeDiv = styled.div`
//   width: 100%;
//   height: 200px;
//   background-image: linear-gradient(#2b343f, lightGrey);
// `;
