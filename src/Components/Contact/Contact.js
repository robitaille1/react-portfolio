import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import Social from "../Social/Social";
import Recaptcha from "react-recaptcha";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [verified, setVerified] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = name => e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setValues({
      name: "",
      email: "",
      message: ""
    });
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail2", "portfolio", e.target, "user_geNX8Vvwl4xmoVyHFINWi")
      .then(
        result => {
          console.log(result.text);
          resetForm();
          setSuccess(true);
        },
        error => {
          console.log(error.text);
        }
      );
  }

  const recaptchaLoaded = () => {
    console.log("captcha loaded");
  };

  const verifyCallback = response => {
    if (response) {
      setVerified(true);
    }
  };

  return (
    <Wrapper name="Contact">
      <Social />
      <h2>Contact Me!</h2>
      {success ? <p>Your message was sent!</p> : null}
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
        {verified === true ? (
          <button type="submit">Send</button>
        ) : (
          <button disabled type="submit">
            Send
          </button>
        )}
        <Recapt>
          <Recaptcha
            sitekey="6Lez_f8UAAAAAFEnFdLK_q-kYhHxCPxqyPMGZ9TZ"
            render="explicit"
            verifyCallback={verifyCallback}
            onloadCallback={recaptchaLoaded}
            theme="dark"
          />
        </Recapt>
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
    margin-bottom: 0px;
  }
  p {
    color: ${({ theme }) => theme.accent};
    margin: 0px;
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
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;

const Recapt = styled.div`
  margin: 10px auto;
`;
