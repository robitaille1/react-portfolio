import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
import resume from "../../Assets/LucasRobitaille-Web-Developer-Resume.pdf";

const header = () => (
  <Wrapper>
    <Navigation role="navigation">
      <a href="#About">About</a>
      <a href="#Projects">Projects</a>
      <a href="#Contact">Contact</a>
      <a
        className="resume-link"
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </Navigation>

    <Header>
      <div>
        <Fade up>
          <h1>Lucas Robitaille</h1>
          <p>
            Fullstack Developer
            <Location>
              <span role="img" aria-label="pin">
                &#x1F4CD;
              </span>
              Austin, Texas
            </Location>
          </p>
        </Fade>
      </div>
    </Header>
  </Wrapper>
);

export default header;

const Wrapper = styled.div`
  text-align: center;
`;

const Header = styled.section`
  /* margin: 70px auto 0px auto; */
  padding: 4em 4em 0px 4em;
  height: 100vh;
  h1 {
    margin-top: 160px;
    margin-bottom: 0px;
    font-size: 3em;
    @media (min-width: ${({ theme }) => theme.mobile}) {
      font-size: 4em;
      margin-top: 100px;
    }
  }
  p {
    margin: 0px;
    font-size: 2em;
  }
`;

const Navigation = styled.nav`
  padding: 1em;
  display: none;
  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: block;
  }
  a {
    font-size: 1.2em;
    margin: 15px 25px;
    text-decoration: none;
    color: ${({ theme }) => theme.primaryLight};

    &:hover {
      color: ${({ theme }) => theme.accent};
    }
  }
`;

const Location = styled.span`
  display: block;
  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: inline;
  }
`;
