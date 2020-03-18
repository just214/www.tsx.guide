import React from "react";

import { ResourceLink } from "./ResourceLink";
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
      <ResourceLink key={label} href={url}>
        {label}
      </ResourceLink>
    );
  });

  return <Flex>{renderLinks}</Flex>;
};
