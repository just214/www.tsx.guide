import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import useBaseUrl from "@docusaurus/useBaseUrl";

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

export const UnderConstruction = () => (
  <div>
    <h3>This page is not quite ready yet. Please check back soon.</h3>
    <br />
    <SVG src={useBaseUrl("img/undraw_under_construction.svg")} />
  </div>
);
