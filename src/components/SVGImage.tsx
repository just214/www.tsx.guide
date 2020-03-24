import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";

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

const LoadingBox = styled.div`
  width: 70%;
  height: 300px;

  @media (max-width: 500px) {
    width: 100%;
    height: 200px;
  }
`;

export const SVGImage = ({ url }: { url: string }) => (
  <SVG src={url} loading={LoadingBox} />
);
