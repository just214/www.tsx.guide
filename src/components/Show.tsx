import React from "react";

type ShowProps = {
  when: boolean;
};

export const Show: React.FC<ShowProps> = ({ when, children }) => {
  return <>{when && children}</>;
};
