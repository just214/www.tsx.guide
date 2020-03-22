import React from "react";

type ShowProps = {
  when: boolean | number | string;
};

export const Show: React.FC<ShowProps> = ({ when, children }) => {
  return <>{!!when && children}</>;
};
