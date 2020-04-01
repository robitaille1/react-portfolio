import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import resume from "../../Assets/LucasRobitaille-Web-Developer-Resume.pdf";

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link
        to="Bio"
        spy={true}
        smooth={true}
        duration={1000}
        onClick={() => setOpen(!open)}
      >
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        About me
      </Link>
      <Link
        to="Projects"
        spy={true}
        smooth={true}
        duration={2000}
        onClick={() => setOpen(!open)}
      >
        <span role="img" aria-label="projects">
          &#x1F4BB;
        </span>
        Projects
      </Link>
      <Link
        to="Contact"
        spy={true}
        smooth={true}
        duration={3000}
        onClick={() => setOpen(!open)}
      >
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Contact
      </Link>
      <a href={resume} target="_blank" rel="noopener noreferrer">
        <span role="img" aria-label="resume">
          &#x1F4C4;
        </span>
        Resume
      </a>
    </StyledMenu>
  );
};
export default Menu;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  & :nth-child(1) {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
  & :nth-child(2) {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
  & :nth-child(3) {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
