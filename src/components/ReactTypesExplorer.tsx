import React, { useState, useEffect } from "react";
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
  return (
    <iframe
      style={{ width: "78vw", height: "100vh", border: "none" }}
      src="https://happy-panini-df7563.netlify.com/"
    />
  );
};
