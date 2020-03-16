import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";

const URL =
  "https://res.cloudinary.com/gojutin/image/upload/v1584291258/www.tsx.guide/undraw_under_construction.svg";

const SVG = styled(ReactSVG)`
  svg {
    width: 70%;
    height: auto;
  }

  @media (max-width: 500px) {
    svg {
      width: 100%;
    }
  }
`;

async function triggerEvent() {
  fetch("/.netlify/functions/getReactType")
    .then(response => response.json())
    .then(json => console.log(json));
}

export const UnderConstruction = () => (
  <div>
    <button onClick={triggerEvent}>Trigger Event</button>
    <h3>This page is not quite ready yet. Please check back soon.</h3>
    <br />
    <SVG src={URL} />
  </div>
);
