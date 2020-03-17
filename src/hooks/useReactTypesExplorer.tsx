import { useEffect, useState } from "react";

const IS_DEV = true;

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

export function useReactTypesExplorer() {
  const [selection, setSelection] = useState({
    value: "Select a Type",
    label: "Select a Type"
  });
  const [value, setValue] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setValue(null);
    if (selection.label) {
      if (selection.label === "Select a Type") {
        return;
      }
      setLoading(true);
      const apiPath = `/.netlify/functions/reactTypesExplorer?type=${selection.value}`;
      const basePath = IS_DEV ? "http://localhost:34567" : "";
      fetch(`${basePath}${apiPath}`)
        .then(response => response.json())
        .then(json => {
          setValue(json);
        })
        .catch(error => {
          console.log("ERROR::: ", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [selection]);

  return { selection, setSelection, value, loading } as const;
}
