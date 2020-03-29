import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const bio = () => (
  <Content>
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
  padding: 0px 3em 50px 3em;
  text-align: left;
  color: ${({ theme }) => theme.primaryDark};
  background: lightgrey;
  margin-bottom: 20px;
  margin-top: -1px;
  @media (min-width: ${({ theme }) => theme.mobile}) {
    padding: 50px 8em 100px 8em;
    margin-bottom: 0px;
  }
  h2 {
    font-size: 2.3rem;
    color: ${({ theme }) => theme.primaryDark};
    margin: 0px;
  }
  p {
    font-size: 1.5rem;
    margin-top: 5px;
  }
`;
