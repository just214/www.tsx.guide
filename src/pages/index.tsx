/*
  This page just redirects to the https://tsx.guide/introduction/welcome. 
  
  react-helmet is used to provide meta data for when people share a link
  for https://tsx.guide so that they get nice unfurling, Twitter card, etc.
*/
import React from "react";
// @ts-ignore
import Head from "@docusaurus/Head";
import { Redirect } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";

const TITLE = "tsx.guide";
const URL = "https://www.tsx.guide";
const DESCRIPTION =
  "A guide and cheatsheet for writing React apps with TypeScript";
const KEYWORDS =
  "typescript, react, tsx, reacttypescript, guide, cheatsheet, docs";
const IMAGE =
  "https://res.cloudinary.com/gojutin/image/upload/v1584239143/www.tsx.guide/tsx-guide-logo.png";

const App = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{TITLE}</title>
        <link rel="canonical" href={URL} />

        <meta name="title" content={TITLE} />
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content={KEYWORDS}></meta>

        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={IMAGE} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={URL} />
        <meta property="twitter:title" content={TITLE} />
        <meta property="twitter:description" content={DESCRIPTION} />
        <meta property="twitter:image" content={IMAGE} />
      </Head>

      <Redirect to={useBaseUrl("/introduction/welcome")} />
    </>
  );
};

export default App;
