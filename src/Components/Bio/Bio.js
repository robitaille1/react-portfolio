import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const bio = () => (
  <div style={{ filter: "drop-shadow(black 0px 5px 10px)" }}>
    <Content name="Bio">
      <Fade duration={2000}>
        <h2>About Me</h2>
        <div style={{ display: "flex", maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ textAlign: "left" }}>
            <p>
              I am a creative, problem solving web developer. I love working in
              teams and contributing to projects that I feel passionate about.
              Creating dynamic, responsive, and interactive web design is what I
              do best.
            </p>
            <p>
              I also love sports (Go Chelsea!), tea, and traveling to experience
              different cultures through food.
            </p>
          </div>
        </div>
      </Fade>
    </Content>
  </div>
);

export default bio;

const Content = styled.div`
  padding: 2em 1em 4em 1em;
  text-align: left;
  color: ${({ theme }) => theme.primaryDark};
  margin-bottom: -1px;
  margin-top: 40px;
  clip-path: polygon(0 0, 100% 6vw, 100% 100%, 0 calc(100% - 6vw));
  background: lightgray;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    padding: 50px 4em 100px 4em;
    clip-path: polygon(0 0, 100% 4vw, 100% 100%, 0 calc(100% - 4vw));
  }
  @media (min-width: ${({ theme }) => theme.medium}) {
    padding: 60px 8em 120px 8em;
  }

  @media (min-width: 1550px) {
    padding: 10rem 6rem;
  }

  h2 {
    font-size: 2.3rem;
    color: ${({ theme }) => theme.primaryDark};
    text-align: center;
  }
  p {
    font-size: 1.5rem;
    margin-top: 5px;
  }
`;

const Pic = styled.img`
  height: 50%;
  margin-right: 40px;
  margin-top: 10px;
  border-radius: 100px;
  display: none;

  @media (min-width: 1000px) {
    display: block;
  }
  @media (min-width: 1550px) {
    margin-top: -30px;
  }
`;
