import React from "react";
import styled from "styled-components";
import { ReactTypeMember } from "./ReactTypeMember";
import { Result } from "./ReactTypesExplorer";
import { Show } from "./Show";

export type ReactTypeResultProps = {
  result: Result;
};

const Title = styled.h4`
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const ReactTypeResult: React.FC<ReactTypeResultProps> = ({ result }) => {
  const { name, signature, extends: ext, members, extendedMembers } = result;
  const numberOfMembers = members.length;
  const numberOfExtendedMembers = Object.values(extendedMembers).reduce(
    (acc, value) => {
      return acc + value.length;
    },
    0
  );

  return (
    <div>
      <h2>{name}</h2>

      <Show when={!!signature.length}>
        <div>
          <Title>Signature:</Title>
          <code>{signature}</code>
        </div>
      </Show>
      {/* 
      {!!ext.length && (
        <div>
          <Title>Extends:</Title>
          {ext.map(e => (
            <Code key={e}>{e}</Code>
          ))}
        </div>
      )} */}

      <Title>
        {numberOfMembers} Member{members.length === 1 ? "" : "s"} and{" "}
        {numberOfExtendedMembers} Extended Members:
      </Title>

      {members.map(member => {
        return <ReactTypeMember key={member.name} member={member} />;
      })}

      <div>
        {Object.keys(extendedMembers).map(key => {
          return (
            <div key={key}>
              {extendedMembers[key].map(member => {
                return (
                  <ReactTypeMember
                    key={member.name}
                    member={{ ...member, extendedFrom: key }}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
