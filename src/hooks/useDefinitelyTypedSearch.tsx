import { useState } from "react";

type Repo = {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  _links: {
    self: string;
    git: string;
    html: string;
  };
};

export function useDefinitelyTypedSearch() {
  const [lastSearchValue, setLastSearchValue] = useState("");
  const [contents, setContents] = useState<Repo[]>([]);
  const [error, setError] = useState(false);

  function search(searchValue) {
    setLastSearchValue(searchValue);
    fetch(
      `https://api.github.com/repos/DefinitelyTyped/DefinitelyTyped/contents/types/${searchValue.toLowerCase()}`
    )
      .then(res => {
        if (res.status === 404) {
          setContents([]);
          setError(true);
        } else {
          setError(false);
          res.json().then(value => {
            setContents(value);
          });
        }
      })
      .catch(e => {
        setError(true);
      });
  }

  function clear() {
    setContents([]);
    setError(false);
    setLastSearchValue("");
  }

  return { search, clear, contents, error, lastSearchValue } as const;
}
