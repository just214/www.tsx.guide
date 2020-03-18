import React from "react";

import { LinkButton } from "./LinkButton";
import { Flex } from "./Flex";

type Link = [string, string];

export type ResourceLinkListProps = {
  links: Link[];
};

export const ResourceLinkList: React.FC<ResourceLinkListProps> = ({
  links
}) => {
  const renderLinks = links.map(link => {
    const [label, url] = link;
    return (
      <LinkButton href={url} key={label}>
        {label}
      </LinkButton>
    );
  });

  return <Flex>{renderLinks}</Flex>;
};
