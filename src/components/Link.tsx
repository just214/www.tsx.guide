import React from "react";
// @ts-ignore
import DocLink from "@docusaurus/Link";

type LinkProps = {
  to?: string;
  href?: string;
  variant?: "text" | "button";
};

export const Link: React.FC<LinkProps> = ({ href, to, children, variant }) => {
  const buttonClassNames = "button button--outline button--primary margin--sm";
  if (to) {
    return <DocLink to={to}>{children}</DocLink>;
  }
  return (
    <a
      className={variant === "button" ? buttonClassNames : ""}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </a>
  );
};
