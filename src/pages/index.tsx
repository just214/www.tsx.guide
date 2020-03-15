/*
  This page just redirects to the https://tsx.guide/introduction/welcome. 
  
  react-helmet is used to provide meta data for when people share a link
  for https://tsx.guide so that they get nice unfurling, Twitter card, etc.
*/
import React from "react";
import { Helmet } from "react-helmet";

import { Redirect } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";

const App = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>tsx.guide</title>
        <link rel="canonical" href="https://www.tsx.guide" />

        <meta name="title" content="tsx.guide" />
        <meta
          name="description"
          content="A guide and cheatsheet for writing React apps with TypeScript"
        />
        <meta
          name="keywords"
          content="typescript, react, tsx, reacttypescript, guide, cheatsheet, docs"
        ></meta>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tsx.guide/" />
        <meta property="og:title" content="tsx.guide" />
        <meta
          property="og:description"
          content="A guide and cheatsheet for writing React apps with TypeScript"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/gojutin/image/upload/v1584239143/www.tsx.guide/tsx-guide-logo.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.tsx.guide/" />
        <meta property="twitter:title" content="tsx.guide" />
        <meta
          property="twitter:description"
          content="A guide and cheatsheet for writing React apps with TypeScript"
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/gojutin/image/upload/v1584239143/www.tsx.guide/tsx-guide-logo.png"
        />
      </Helmet>
      <Redirect to={useBaseUrl("/introduction/welcome")} />
    </>
  );
};

export default App;
