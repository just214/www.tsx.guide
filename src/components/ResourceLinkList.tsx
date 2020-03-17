import React from "react";

import { ResourceLink } from "./ResourceLink";
import { Flex } from "./Flex";

export type ResourceLinkListProps = {
  links: any[];
};

export const ResourceLinkList: React.FC<ResourceLinkListProps> = ({
  links
}) => {
  return (
    <Flex>
      {links.map(link => {
        const [label, url] = link;
        return (
          <ResourceLink key={label} href={url}>
            {label}
          </ResourceLink>
        );
      })}
    </Flex>
  );
};
