import React from "react";
import styled from "styled-components";
import Project from "./Project/Project";
import puerhImg from "../../Assets/mockups/puerh-mockup.png";
import hotImg from "../../Assets/mockups/hot-takes-mockup.png";
import travelImg from "../../Assets/mockups/travel-mockup.png";

const projectItm = [
  {
    title: "PUERH / CAFE",
    description: "Organize puerh teas in your collection.",
    link: "https://puerh-cafe.lucasrobitaille.now.sh/",
    clientRepo: "https://github.com/robitaille1/puerh-cafe",
    apiRepo: "https://github.com/robitaille1/puerh-cafe-api",
    image: puerhImg,
    tech: "React, Redux, Node, Express, PostgreSQL, and CSS."
  },
  {
    title: "Hot Takes",
    description:
      "An app to keep track of all the 'hot takes' sports commentators have, in order to see who is the most reliable.",
    link: "https://hot-takes-app.lucasrobitaille.now.sh/",
    clientRepo: "https://github.com/robitaille1/hot-takes-app",
    apiRepo: "https://github.com/robitaille1/hot-takes-api",
    image: hotImg,
    tech: "React, Redux, Node, Express, PostgreSQL, and CSS."
  },
  {
    title: "Travel TV Search",
    description: "Search for travel shows based on an input destination.",
    link: "https://robitaille1.github.io/Travel-TV-Search/",
    clientRepo: "https://github.com/robitaille1/Travel-TV-Search",
    apiRepo: null,
    image: travelImg,
    tech: "Javascript, CSS, HTML, GoogleMaps Api, and TVMaze Api."
  }
];

const projects = () => (
  <Wrapper>
    <h2>Projects</h2>
    <div>
      {projectItm.map((project, i) => (
        <Project data={project} key={i} />
      ))}
    </div>
  </Wrapper>
);

export default projects;

const Wrapper = styled.section`
  h2 {
    font-size: 2.3rem;
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.primaryLight};
  }
`;
