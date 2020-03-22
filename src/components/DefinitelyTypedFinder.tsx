import React, { useState, useEffect } from "react";
import { FaFileCode, FaFolderOpen } from "react-icons/fa";
import { Flex } from "./Flex";
import { Show } from "./Show";
import { SearchInput } from "./SearchInput";
import { Alert } from "./Alert";
import { Link } from "./Link";
import { useDefinitelyTypedSearch, useBaseUrl } from "../hooks";
import { formatBytes } from "../utils";

export const DefinitelyTypedFinder = () => {
  const {
    search,
    contents,
    error,
    clear,
    lastSearchValue
  } = useDefinitelyTypedSearch();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (!searchValue.length) {
      clear();
    }
  }, [searchValue]);

  function handleSetSearchValue(e: any) {
    setSearchValue(e.target.value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!searchValue.length) return;
    search(searchValue);
  }

  const pathToLib = `https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/${lastSearchValue.toLowerCase()}`;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <SearchInput
          type="search"
          value={searchValue}
          onChange={handleSetSearchValue}
          placeholder={`Try "react"`}
        />
      </form>

      <Show when={error}>
        <Alert type="danger" message={`No "${lastSearchValue}" package.`}>
          See{" "}
          <Link to={useBaseUrl("tsx-files/using-untyped-libraries")}>
            Using Untyped Libraries
          </Link>{" "}
          to learn ways to used libraries without type definitions.
        </Alert>
      </Show>

      <Show when={!contents.length && !error}>
        <p>
          <Link href="https://github.com/DefinitelyTyped/DefinitelyTyped">
            DefinitelyTyped
          </Link>{" "}
          is holding place for the type definitions of thousands of open-sourced
          projects. Use this tool to quickly find out if a package exists.
        </p>
      </Show>

      <Show when={contents.length}>
        <div>
          <Alert type="success" message="MATCH!" />

          <h4>GitHub Link:</h4>
          <p>
            <a href={pathToLib}>{pathToLib}</a>
          </p>
          <h4>Installation:</h4>
          <div style={{ fontSize: "1.3rem" }}>
            <pre>yarn add -D @types/{lastSearchValue.toLowerCase()}</pre>
          </div>
          <br />
          <h4>Contents:</h4>
          {contents.map(d => {
            return (
              <Flex key={d.name}>
                <Show when={d.type === "file"}>
                  <FaFileCode
                    style={{ color: "var(--ifm-color-emphasis-700)" }}
                    size={16}
                  />
                </Show>
                <Show when={d.type === "dir"}>
                  <FaFolderOpen
                    style={{ color: "var(--ifm-color-emphasis-700)" }}
                    size={16}
                  />
                </Show>

                <a href={d.html_url} style={{ margin: "0px 5px" }}>
                  {d.name}
                </a>
                <Show when={d.type === "file"}>
                  <small>({formatBytes(d.size)})</small>
                </Show>
              </Flex>
            );
          })}
        </div>
      </Show>
    </>
  );
};
