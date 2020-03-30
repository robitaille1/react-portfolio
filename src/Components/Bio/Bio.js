import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const bio = () => (
  <Content name="Bio">
    <Fade up>
      <h2>About Me</h2>
      <p>
        I am a creative, problem solving web developer. I love working in teams
        and contributing to projects that I feel passionate about. Creating
        dynamic, responsive, and interactive web design is what I do best.
      </p>
      <p>
        I also love sports (Go Chelsea!), tea, and traveling to experience
        different cultures through food.
      </p>
    </Fade>
  </Content>
);

export default bio;

const Content = styled.div`
  padding: 30px 1em 50px 1em;
  text-align: left;
  /* color: ${({ theme }) => theme.primaryDark}; */
  color: ${({ theme }) => theme.primaryLight};
  /* background: lightgrey; */
  margin-bottom: -1px;
  margin-top: -1px;
  @media (min-width: ${({ theme }) => theme.mobile}) {
    padding: 50px 8em 100px 8em;
  }
  h2 {
    font-size: 2.3rem;
    /* color: ${({ theme }) => theme.primaryDark}; */
     color: ${({ theme }) => theme.primaryLight};
    text-align: center;
  }
  p {
    font-size: 1.5rem;
    margin-top: 5px;
  }
`;
