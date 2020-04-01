import React from "react";
import styled from "styled-components";

const footer = () => (
  <Wrapper>
    <p>© {new Date().getFullYear()} Lucas Robitaille</p>
  </Wrapper>
);

export default footer;

const Wrapper = styled.div`
  text-align: center;
`;
