import React from "react";

import { Link } from "./Link";
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
      <Link href={url} key={label} variant="button">
        {label}
      </Link>
    );
  });

  return <Flex>{renderLinks}</Flex>;
};
