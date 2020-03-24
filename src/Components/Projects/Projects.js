import React from "react";
import "./Projects.scss";

const projects = () => (
  <section className="projects" id="Projects">
    <h2 className="heading proj-head">Projects</h2>
    <div>
      <div className="project-item">
        <p className="project-title">PUERH / CAFE</p>
        <p className="app-desc">Organize puerh teas in your collection. </p>
        <p className="app-desc">
          Created with React, Redux, Node, Express, PostgreSQL, and CSS.
        </p>
        {/* <img
          className="project-image"
          src="assets/dash.PNG"
          alt="PUERH / CAFE app"
        /> */}
        <a
          href="https://github.com/robitaille1/puerh-cafe"
          target="_blank"
          rel="noopener noreferrer"
        >
          Client - Github
        </a>
        <a
          href="https://github.com/robitaille1/puerh-cafe-api"
          target="_blank"
          rel="noopener noreferrer"
        >
          Api - Github
        </a>
        <a
          href="https://puerh-cafe.lucasrobitaille.now.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Link
        </a>
      </div>
      <hr />
      <div className="project-item">
        <p className="project-title">Hot Takes</p>
        <p className="app-desc">
          An app to keep track of all the 'hot takes' sports commentators have,
          in order to see who is the most reliable.
        </p>
        <p className="app-desc">
          Created with React, Redux, Node, Express, PostgreSQL, and CSS.
        </p>
        {/* <img
          className="project-image"
          src="assets/HotTakes.PNG"
          alt="Hot Takes App"
        /> */}
        <a
          href="https://github.com/robitaille1/hot-takes-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Client - Github
        </a>
        <a
          href="https://github.com/robitaille1/hot-takes-api"
          target="_blank"
          rel="noopener noreferrer"
        >
          Api - Github
        </a>
        <a
          href="https://hot-takes-app.lucasrobitaille.now.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Link
        </a>
      </div>
      <hr />
      <div className="project-item">
        <p className="project-title">Travel TV Search</p>
        <p className="app-desc">
          Search for travel shows based on an input destination.
        </p>
        <p className="app-desc">
          Created with Javascript, CSS, HTML, GoogleMaps Api, and TVMaze Api.
        </p>
        {/* <img
          className="project-image"
          src="assets/Travel_Home2.png"
          alt="Travel TV Search App"
        /> */}
        <a
          href="https://github.com/robitaille1/Travel-TV-Search"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href="https://robitaille1.github.io/Travel-TV-Search/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Link
        </a>
      </div>
    </div>
  </section>
);

export default projects;
