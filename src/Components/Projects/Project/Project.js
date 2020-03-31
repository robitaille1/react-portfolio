import React from "react";
import styled from "styled-components";

const project = props => (
  <Card>
    <ImgDiv>
      <h3>{props.data.title}</h3>
      <p>{props.data.description}</p>
      <p>Built with: {props.data.tech}</p>
    </ImgDiv>
    <ImgDiv>
      <div style={{ textAlign: "center" }}>
        <img src={props.data.image} alt={props.data.title + "image"} />
      </div>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <a href={props.data.link}>Live Link</a>
        <a href={props.data.clientRepo}>Client Repo</a>
        {props.data.apiRepo ? <a href={props.data.apiRepo}>Api Repo</a> : null}
      </div>
    </ImgDiv>
  </Card>
);

export default project;

const Card = styled.div`
  width: 100%;
  background: lightgrey;
  color: ${({ theme }) => theme.primaryDark};
  padding: 2rem 1rem;
  margin-bottom: 1rem;
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

  a {
    border: 1px solid #374458;
    color: white;
    background: ${({ theme }) => theme.primaryDark};
    padding: 10px;
    border-radius: 5px;
    margin: 0px 5px;

    &:hover {
      background: ${({ theme }) => theme.primaryHover};
    }
  }
`;

const ImgDiv = styled.div`
  text-align: center;
  @media (min-width: ${({ theme }) => theme.mobile}) {
    width: 50%;
  }
  img {
    width: 75%;
    @media (min-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
    }
  }
`;
