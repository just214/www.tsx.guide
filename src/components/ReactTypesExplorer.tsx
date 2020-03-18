import React from "react";
import styled from "styled-components";

const Frame = styled.iframe`
  width: 78vw;
  height: 100vh;
  border: none;

  @media (max-width: 500px) {
    width: 100vw;
  }
`;

export const ReactTypesExplorer = () => {
  return <Frame src="https://happy-panini-df7563.netlify.com/" />;
};
