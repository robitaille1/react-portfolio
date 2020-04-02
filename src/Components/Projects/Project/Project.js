import React from "react";
import styled from "styled-components";

const project = props => (
  <Card>
    <DescDiv>
      <h3>{props.data.title}</h3>
      <p>{props.data.description}</p>
      <p>Built with: {props.data.tech}</p>
    </DescDiv>
    <ImgDiv>
      <div style={{ textAlign: "center" }}>
        <img src={props.data.image} alt={props.data.title + "image"} />
      </div>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Button
          active="true"
          href={props.data.link}
          target="_blank"
          rel="noopener noreferrer"
          primary="true"
        >
          Live Link
        </Button>
        <Button
          href={props.data.clientRepo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Client Repo
        </Button>
        {props.data.apiRepo ? (
          <Button
            href={props.data.apiRepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Api Repo
          </Button>
        ) : null}
      </div>
    </ImgDiv>
  </Card>
);

export default project;

const Card = styled.div`
  width: 100%;
  background: lightgrey;
  color: ${({ theme }) => theme.primaryDark};
  margin-bottom: 2rem;
  border-radius: 1rem;
  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: flex;
  }

  h3 {
    font-size: 25px;
    margin-top: 0px;
  }
  p {
    font-size: 20px;
  }
`;

const Button = styled.a`
  background: ${props => (props.primary ? "#3af542" : "#2b343f")};
  border: ${props =>
    props.primary ? "1px solid #3af542" : "1px solid #374458"};
  color: ${props => (props.primary ? "#2b343f" : "white")};
  padding: 10px;
  border-radius: 5px;
  margin: 0px 5px;
  transition: 0.3s;
  font-weight: ${props => (props.primary ? "bold" : "normal")};
  box-shadow: ${props =>
    props.primary ? "0px 0px 3px -1px rgba(0,0,0,0.75);" : null};
  &:hover {
    cursor: pointer;
    background: ${props => (props.primary ? "#35cc3b" : "#374458")};
    border: ${props =>
      props.primary ? "1px solid #35cc3b" : "1px solid #374458"};
  }
`;

const DescDiv = styled.div`
  text-align: left;
  width: 100%;
  padding: 5rem 2rem;
  background: white;
  border-radius: 1rem 0px 0px 1rem;
  @media (min-width: ${({ theme }) => theme.mobile}) {
    text-align: left;
    width: 50%;
  }
`;

const ImgDiv = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  @media (min-width: ${({ theme }) => theme.mobile}) {
    width: 50%;
  }
  img {
    width: 100%;
  }
`;
