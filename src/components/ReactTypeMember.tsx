import React from "react";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0px;
`;

const Name = styled.h3`
  margin: 5px;
  color: #4d73ff;
`;

const Pill = styled.span<{ bg: string }>`
  background: ${p => p.bg};
  color: white;
  border-radius: 10px;
  padding: 2px 5px;
  font-size: 10px;
  margin: 5px;
`;

const Code = styled.code`
  display: inline-block;
  margin: 5px;
  font-size: 12px;
`;

const Divider = styled.div`
  height: 1px;
  background: lightgray;
`;

type Member = {
  name: string;
  required: boolean;
  type: string;
  extendedFrom?: string;
};

type MemberProps = {
  member: Member;
};

export const ReactTypeMember: React.FC<MemberProps> = ({ member }) => {
  const { name, required, type, extendedFrom } = member;
  return (
    <>
      <Flex>
        <Name>
          {name}
          {required ? "!" : ""}
        </Name>
        {extendedFrom && <Pill bg="orange">{extendedFrom}</Pill>}
      </Flex>
      <Code>{type}</Code>
      <Divider />
    </>
  );
};
