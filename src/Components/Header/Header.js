import React from "react";
import styled from "styled-components";
import { Zoom, Fade } from "react-reveal";

const header = () => (
  <main>
    <Navigation role="navigation">
      <a href="#About">About</a>
      <a href="#Projects">Projects</a>
      <a href="#Contact">Contact</a>
      {/* <a
        className="resume-link"
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a> */}
    </Navigation>

    <Wrapper id="About">
      <div>
        <Zoom>
          <h1>Lucas Robitaille</h1>
        </Zoom>
        <Fade up>
          <p>
            Fullstack Developer <span>|</span> Austin, Texas
          </p>
        </Fade>
      </div>
    </Wrapper>
  </main>
);

export default header;

const Wrapper = styled.section`
  padding: 4em;
`;

const Navigation = styled.nav`
  padding: 1em;
  a {
    margin: 10px;
    text-decoration: none;
    color: rgb(77, 90, 152);

    &:hover {
      color: black;
    }
  }
`;
