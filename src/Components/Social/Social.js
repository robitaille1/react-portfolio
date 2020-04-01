import React from "react";
import styled from "styled-components";

const social = () => (
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
);

export default social;

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
