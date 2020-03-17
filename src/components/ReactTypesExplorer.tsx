import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Select from "react-select";
import { Show } from "./Show";
import { ReactTypeResult } from "./ReactTypeResult";
import { Flex } from "./Flex";
import { useReactTypesExplorer } from "../hooks/useReactTypesExplorer";

const IS_DEV = false;

const StyledSelect = styled(Select)`
  width: 100%;
`;

const options = [
  "Select a Type",
  "AllHTMLAttributes",
  "AriaAttributes",
  "AnchorHTMLAttributes",
  "DOMAttributes",
  "HTMLAttributes"
].map(v => ({ value: v, label: v }));

type Member = {
  name: string;
  required: boolean;
  type: string;
};

type ExtendedMembers = {
  [key in string]: Member[];
};

export type Result = {
  name: string;
  extends: string[];
  signature: string;
  members: Member[];
  extendedMembers: ExtendedMembers;
};

export const ReactTypesExplorer = () => {
  const { selection, setSelection, value } = useReactTypesExplorer();

  return (
    <>
      <Flex>
        <StyledSelect
          value={selection}
          onChange={(opt: any) => setSelection(opt)}
          options={options}
          style={{ width: "100%" }}
          isSearchable={true}
        />
      </Flex>
      <br />
      <Show when={!!value}>
        <ReactTypeResult result={value as Result} />
      </Show>
      <Show when={!value}>
        <p>Select a React Type Definition to explore it's properties.</p>
      </Show>
    </>
  );
};
