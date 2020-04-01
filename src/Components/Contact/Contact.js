import React from "react";
import styled from "styled-components";
import Social from "../Social/Social";

const contact = () => (
  <Wrapper name="Contact">
    <Social />

    <form name="contact" method="POST" data-netlify="true">
      <label htmlFor="name">Name:</label>
      <input type="text" name="text" placeholder="John Smith" required />

      <label htmlFor="email">Email:</label>
      <input type="email" name="email" placeholder="name@email.com" required />
      <label htmlFor="message">Message:</label>
      <input type="text" name="message" placeholder="Enter message....." />
      <button type="submit">Send</button>
    </form>
  </Wrapper>
);

export default contact;

const Wrapper = styled.section`
  text-align: center;
`;
