import React from "react";
import styled from "styled-components";
import reactLogo from "../../Assets/icons/React.svg";
import htmlLogo from "../../Assets/icons/HTML5.svg";
import cssLogo from "../../Assets/icons/CSS3.svg";
import jsLogo from "../../Assets/icons/JS.svg";
import es6Logo from "../../Assets/icons/ES6.svg";
import reduxLogo from "../../Assets/icons/Redux.svg";
import nodeLogo from "../../Assets/icons/Node.svg";
import expressLogo from "../../Assets/icons/Express.svg";
import mongoLogo from "../../Assets/icons/Mongo.svg";
import postLogo from "../../Assets/icons/PostgreSQL.svg";
import jqueryLogo from "../../Assets/icons/jQuery.svg";

const tech = () => (
  <Wrapper>
    <h2>Technologies</h2>

    <Tech>
      <TechWrapper>
        <h4>Frontend</h4>
        <Frontend>
          <img src={htmlLogo} alt="Html Logo" />
          <img src={cssLogo} alt="CSS Logo" />
          <img src={jsLogo} alt="Javascript Logo" />
          <img src={es6Logo} alt="ES6 Logo" />
          <img src={jqueryLogo} alt="jQuery Logo" />
          <img src={reactLogo} alt="React Logo" />
          <img src={reduxLogo} alt="Redux Logo" />
        </Frontend>
      </TechWrapper>

      <TechWrapper style={{ marginRight: "0px" }}>
        <h4>Backend</h4>
        <Backend>
          <img src={nodeLogo} alt="Nodejs Logo" />
          <img src={expressLogo} alt="Express Logo" />
          <img src={postLogo} alt="PostgreSQL Logo" />
          <img src={mongoLogo} alt="Mongo Logo" />
        </Backend>
      </TechWrapper>
    </Tech>
  </Wrapper>
);

export default tech;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0px 1em 50px 1em;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.mobile}) {
    padding: 50px 8em 100px 8em;
  }

  h2 {
    font-size: 2.3rem;
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.primaryLight};
  }
  h4 {
    margin: 0px;
    background: white;
    border-radius: 1rem 1rem 0px 0px;
    padding: 10px;
    text-align: center;
    font-size: 30px;
    /* border-bottom: 1px solid darkgrey; */
    color: ${({ theme }) => theme.primaryDark};
  }
`;

const Tech = styled.div`
  text-align: center;
  border-radius: 5px;
  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    /* flex-direction: column; */
    flex-direction: row;
  }
`;

const TechWrapper = styled.div`
  background: lightgrey;
  border-right: 1px solid lightgrey;
  border-radius: 1rem;
  width: 100%;
  margin-bottom: 1rem;
  @media (min-width: ${({ theme }) => theme.mobile}) {
    width: 50%;
    margin-right: 10px;
  }
`;

const Frontend = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (min-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 10px;
  }
  img {
    width: 75%;
    margin: 20px auto;
    @media (min-width: ${({ theme }) => theme.mobile}) {
      margin: 20px 10px;
    }
  }
`;

const Backend = styled.div`
  display: grid;
  padding-bottom: 20px;
  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  img {
    width: 80%;
    margin: 20px auto;
    @media (min-width: ${({ theme }) => theme.mobile}) {
      width: 20%;
      margin: 30px auto;
    }
  }
  & :nth-child(3) {
    width: 40%;
    @media (min-width: ${({ theme }) => theme.mobile}) {
      width: 20%;
    }
  }
`;
