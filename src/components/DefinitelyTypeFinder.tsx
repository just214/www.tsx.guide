import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 10px 12px;
  border-radius: 8px;
  width: 100%;

  appearance: none;
  border: 1px solid lightgray;
  font-size: 20px;
  margin-bottom: 20px;
`;

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

export const DefinitelyTypeFinder = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const [notFound, setNotFound] = useState(false);

  function handleSetSearchValue(e: any) {
    setSearchValue(e.target.value);
  }

  function handleSubmit(e: React.FormEvent) {
    if (!searchValue) return;
    setNotFound(false);

    e.preventDefault();
    fetch(
      `https://api.github.com/repos/DefinitelyTyped/DefinitelyTyped/contents/types/${searchValue}`
    )
      .then(res => {
        console.log("RES", res);
        if (res.status === 404) {
          setData([]);
          setNotFound(true);
        } else {
          res.json().then(value => {
            setData(value as any);
          });
        }
      })
      .catch(e => {
        console.log("Error", e);
        setData([]);
      });
  }

  const pathToLib = `https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/
  ${searchValue.toLowerCase()}`;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          value={searchValue}
          onChange={handleSetSearchValue}
          placeholder="react"
        />
      </form>
      {notFound && (
        <p>
          DefinitelyTyped does not have a <b>{searchValue}</b> package.
        </p>
      )}
      {!!data.length && (
        <div>
          <h3>Match!</h3>
          <pre>yarn add -D @types/{searchValue.toLowerCase()}</pre> or{" "}
          <pre>npm install -D @types/{searchValue.toLowerCase()}</pre>
          <p>
            <a href={pathToLib}>{pathToLib}</a>
          </p>
          <h4>Contents:</h4>
          {data.map((d: Repo) => {
            return (
              <div key={d.name}>
                <a href={d.html_url}>{d.name}</a>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
