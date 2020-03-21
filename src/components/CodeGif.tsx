import React from "react";

export type CodeGifProps = {
  src: string;
};

export const CodeGif: React.FC<CodeGifProps> = ({ src }) => {
  return <img style={{ borderRadius: "8px" }} alt="Code Example" src={src} />;
};
