import React from "react";

export type ShowProps = {
  when: boolean;
};

export const Show: React.FC<ShowProps> = ({ when, children }) => {
  return <>{when && children}</>;
};
