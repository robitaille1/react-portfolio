import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import Social from "../Social/Social";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (name) => (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setValues({
      name: "",
      email: "",
      message: "",
    });
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail2", "portfolio", e.target, "user_geNX8Vvwl4xmoVyHFINWi")
      .then(
        (result) => {
          console.log(result.text);
          resetForm();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <Wrapper name="Contact">
      <Social />
      <h2>Contact Me!</h2>
      <ContactForm onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="John Smith"
          required
          onChange={handleChange()}
          value={values.name}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="name@email.com"
          required
          onChange={handleChange()}
          value={values.email}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          placeholder="Enter message....."
          onChange={handleChange()}
          value={values.message}
        />
        <button type="submit">Send</button>
      </ContactForm>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.section`
  text-align: center;
  padding: 0px 1em 5em 1em;
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

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  @media (min-width: ${({ theme }) => theme.mobile}) {
    width: 50%;
  }
  label {
    text-align: left;
    margin-top: 10px;
  }
  input {
    padding: 10px;
    border-radius: 5px;
    border: none;
  }

  textarea {
    height: 100px;
    resize: none;
    padding: 10px;
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    border: 2px solid #45ff4d;
    background: ${({ theme }) => theme.accent};
    font-size: 20px;
    color: ${({ theme }) => theme.primaryDark};
    transition: 0.3s;
    &:hover {
      cursor: pointer;
      background: #279c2c;
      border: 2px solid #279c2c;
    }
  }
`;
