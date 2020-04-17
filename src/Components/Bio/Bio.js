import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const bio = () => (
  <Content name="Bio">
    <Fade duration={2000}>
      <h2>About Me</h2>
      <div style={{ display: "flex" }}>
        <Pic
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGA0HOg9Hc0yQ/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=Wx7_gH6zbLsH_YcAArWYiuqLt8Dt-vp7w6Ljkht9gOg"
          alt="A Picture of Me!"
        />
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

  @media (min-width: ${({ theme }) => theme.mobile}) {
    padding: 50px 4em 100px 4em;
    clip-path: polygon(0 0, 100% 4vw, 100% 100%, 0 calc(100% - 4vw));
  }
  @media (min-width: ${({ theme }) => theme.medium}) {
    padding: 60px 8em 120px 8em;
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
  width: 30%;
  margin-right: 40px;
  margin-top: 10px;
  display: none;

  @media (min-width: 1000px) {
    display: block;
  }
`;
