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
  padding: 30px 1em 50px 1em;
  text-align: left;
  color: ${({ theme }) => theme.primaryLight};
  margin-bottom: -1px;
  margin-top: -1px;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    padding: 50px 4em 100px 4em;
  }
  @media (min-width: ${({ theme }) => theme.medium}) {
    padding: 50px 8em 100px 8em;
  }
  h2 {
    font-size: 2.3rem;
    color: ${({ theme }) => theme.primaryLight};
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
  display: none;

  @media (min-width: 1000px) {
    display: block;
  }
`;
