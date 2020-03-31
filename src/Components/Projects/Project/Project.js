import React from "react";
import styled from "styled-components";

const project = props => (
  <Card>
    <div>
      <h3>{props.data.title}</h3>
      <p>{props.data.description}</p>
      <p>Built with: {props.data.tech}</p>
      <a href={props.data.link}>Live Link</a>
      <a href={props.data.clientRepo}>Client Repo</a>
      {props.data.apiRepo ? <a href={props.data.apiRepo}>Api Repo</a> : null}
    </div>
    <div>
      <img src={props.data.image} alt={props.data.title + "image"} />
    </div>
  </Card>
);

export default project;

const Card = styled.div``;
