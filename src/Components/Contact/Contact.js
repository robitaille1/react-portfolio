import React from "react";
import "./Contact.scss";

const contact = () => (
  <section role="form" className="contact" id="Contact">
    <h2 className="heading">Contact</h2>
    <div className="contact-icons">
      <div className="contact-i">
        <a href="mailto:lucas.robitaille@yahoo.com" className="link">
          <i className="link far fa-envelope"></i>
        </a>
        <a
          className="link"
          href="https://github.com/robitaille1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="link fab fa-github"></i>
        </a>
      </div>
      <div className="contact-i">
        <a
          className="link"
          href="https://www.linkedin.com/in/lucas-robitaille/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="link fab fa-linkedin"></i>
        </a>
        <a
          className="link"
          href="https://angel.co/lucas-robitaille"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="link fab fa-angellist"></i>
        </a>
      </div>
    </div>

    <form name="contact" method="POST" data-netlify="true">
      <label htmlFor="name">Name:</label>
      <input type="text" name="text" placeholder="John Smith" required />

      <label htmlFor="email">Email:</label>
      <input type="email" name="email" placeholder="name@email.com" required />
      <label htmlFor="message">Message:</label>
      <input type="text" name="message" placeholder="Enter message....." />
      <button type="submit">Send</button>
    </form>
  </section>
);

export default contact;
