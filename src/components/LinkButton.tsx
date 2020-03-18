import React from "react";

type Props = {
  href: string;
};
export const LinkButton: React.FC<Props> = ({ href, children }) => {
  return (
    <a
      className="button button--outline button--primary margin--sm"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </a>
  );
};
