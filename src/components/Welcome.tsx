import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";

const URL =
  "https://res.cloudinary.com/gojutin/image/upload/v1584291258/www.tsx.guide/undraw_welcome_cats.svg";

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

export const Welcome = () => <SVG src={URL} />;
