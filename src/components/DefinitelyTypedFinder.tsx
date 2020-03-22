import React, { useState, useEffect } from "react";
import { FaFileCode, FaFolderOpen } from "react-icons/fa";
import { Flex } from "./Flex";
import { Show } from "./Show";
import { SearchInput } from "./SearchInput";
import { Alert } from "./Alert";
import { useDefinitelyTypedSearch } from "../hooks/useDefinitelyTypedSearch";
import { formatBytes } from "../utils";
// @ts-ignore
import Link from "@docusaurus/link";
// @ts-ignore
import useBaseUrl from "@docusaurus/useBaseUrl";

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
          to learn about other options.
        </Alert>
      </Show>

      <Show when={!contents.length && !error}>
        <Alert type="info" message="FIND A TYPE">
          DefinitelyTyped is holding place for the type definitions of thousands
          of open-sourced JavaScript projects. Use this tool to quickly find out
          if a package exists.
        </Alert>
      </Show>

      <Show when={contents.length}>
        <div>
          <Alert type="success" message="MATCH!" />

          <h4>GitHub Link:</h4>
          <p>
            <a href={pathToLib}>{pathToLib}</a>
          </p>
          <h4>Installation:</h4>
          <div style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
            <code>yarn add -D @types/{lastSearchValue.toLowerCase()}</code> -or-{" "}
            <code>npm install -D @types/{lastSearchValue.toLowerCase()}</code>
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
