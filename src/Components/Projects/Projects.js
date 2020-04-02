import React from "react";
import styled from "styled-components";
import Project from "./Project/Project";
import puerhImg from "../../Assets/mockups/puerh-mockup.png";
import hotImg from "../../Assets/mockups/hot-takes-mockup.png";
import travelImg from "../../Assets/mockups/travel-mockup.png";

const projectItm = [
  {
    title: "PUERH / CAFE",
    description:
      "An app that helps users organize their pu’erh teas by adding collections and tasting notes. Keep track of how your teas age, and how the flavor profile changes over time",
    link: "https://puerh-cafe.lucasrobitaille.now.sh/",
    clientRepo: "https://github.com/robitaille1/puerh-cafe",
    apiRepo: "https://github.com/robitaille1/puerh-cafe-api",
    image: puerhImg,
    tech: "React, Redux, Node, Express, PostgreSQL, and CSS."
  },
  {
    title: "Hot Takes",
    description:
      "An app to keep track of all the 'hot takes' sports commentators have, in order to see who is the most reliable. It allows users to add commentators and their takes, providing a platform to decide which commentators they should trust.",
    link: "https://hot-takes-app.lucasrobitaille.now.sh/",
    clientRepo: "https://github.com/robitaille1/hot-takes-app",
    apiRepo: "https://github.com/robitaille1/hot-takes-api",
    image: hotImg,
    tech: "React, Redux, Node, Express, PostgreSQL, and CSS."
  },
  {
    title: "Travel TV Search",
    description:
      "A search engine for finding travel tv shows based on an input location. Are you planning a vacation or a trip? Use this app to find shows that will inspire your travel plans",
    link: "https://robitaille1.github.io/Travel-TV-Search/",
    clientRepo: "https://github.com/robitaille1/Travel-TV-Search",
    apiRepo: null,
    image: travelImg,
    tech: "Javascript, CSS, HTML, GoogleMaps Api, and TVMaze Api."
  }
];

const projects = () => (
  <Wrapper name="Projects">
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
  padding: 0px 1em 00px 1em;
  @media (min-width: ${({ theme }) => theme.mobile}) {
    padding: 0px 4em 100px 4em;
  }
  @media (min-width: ${({ theme }) => theme.medium}) {
    padding: 50px 8em 100px 8em;
  }

  h2 {
    font-size: 2.3rem;
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.primaryLight};
  }
`;
