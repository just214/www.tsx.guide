import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Select from "react-select";
import { Show } from "./Show";
import { ReactTypeResult } from "./ReactTypeResult";

const IS_DEV = false;

const StyledSelect = styled(Select)`
  width: 100%;
`;

const options = [
  "Select a Type",
  "AriaAttributes",
  "AnchorHTMLAttributes",
  "HTMLAttributes",
  "AllHTMLAttributes"
].map(v => ({ value: v, label: v }));

const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 25px;
`;

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
  const [choice, setChoice] = useState({
    value: "Select a Type",
    label: "Select a Type"
  });
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setResult(null);
    if (choice.label) {
      if (choice.label === "Select a Type") {
        return;
      }
      setLoading(true);
      const apiPath = `/.netlify/functions/reactTypesExplorer?type=${choice.value}`;
      const basePath = IS_DEV ? "http://localhost:34567" : "";
      fetch(`${basePath}${apiPath}`)
        .then(response => response.json())
        .then(json => {
          setResult(json);
        })
        .catch(error => {
          console.log("ERROR::: ", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [choice]);

  return (
    <>
      <Flex>
        <StyledSelect
          value={choice}
          onChange={opt => setChoice(opt)}
          options={options}
          style={{ width: "100%" }}
          isSearchable={true}
        />
      </Flex>
      <Show when={!!result}>
        <ReactTypeResult result={result as Result} />
      </Show>
      <Show when={!result}>
        <p>Select a React Type Definition to explore it's properties.</p>
      </Show>
    </>
  );
};
