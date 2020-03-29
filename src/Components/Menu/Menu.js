import React from "react";
import styled from "styled-components";
import resume from "../../Assets/LucasRobitaille-Web-Developer-Resume.pdf";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="#About">
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        About me
      </a>
      <a href="#Projects">
        <span role="img" aria-label="projects">
          &#x1F4BB;
        </span>
        Projects
      </a>
      <a href="#Contact">
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Contact
      </a>
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
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
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
