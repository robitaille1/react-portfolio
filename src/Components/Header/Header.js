import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
import { Link } from "react-scroll";
import resume from "../../Assets/LucasRobitaille-Web-Developer-Resume.pdf";

const header = () => (
  <Wrapper>
    <Navigation role="navigation">
      <Link to="Bio" spy={true} smooth={true} duration={1000}>
        About
      </Link>
      <Link to="Projects" spy={true} smooth={true} duration={2000}>
        Projects
      </Link>
      <Link to="Contact" spy={true} smooth={true} duration={3000}>
        Contact
      </Link>
      <a href={resume} target="_blank" rel="noopener noreferrer">
        Resume
      </a>
    </Navigation>

    <Social>
      <a
        href="https://github.com/robitaille1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
      <a href="mailto:lucas.robitaille@yahoo.com">
        <i className="link far fa-envelope"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/lucas-robitaille/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="link fab fa-linkedin"></i>
      </a>
      <a
        href="https://angel.co/lucas-robitaille"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="link fab fa-angellist"></i>
      </a>
    </Social>

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
  padding: 4em 1em 0px 1em;
  height: 70vh;
  margin-left: 30px;
  h1 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 3em;
    @media (min-width: ${({ theme }) => theme.mobile}) {
      font-size: 4em;
      margin-top: 50px;
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
    width: 100%;
    margin: 0px auto;
  }
  a {
    font-size: 1.2em;
    margin: 15px 25px;
    text-decoration: none;
    color: ${({ theme }) => theme.primaryLight};
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

const Location = styled.span`
  display: block;
  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: inline;
  }
`;

const Social = styled.div`
  margin-top: 90px;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.mobile}) {
    margin-top: 0px;
  }
  a {
    margin: 25px;
    font-size: 30px;
    color: ${({ theme }) => theme.primaryLight};
    @media (min-width: ${({ theme }) => theme.mobile}) {
      margin-top: 0px;
      transition: 0.3s;
      color: ${({ theme }) => theme.primaryHover};
      &:hover {
        color: ${({ theme }) => theme.primaryLight};
      }
    }
  }
`;
