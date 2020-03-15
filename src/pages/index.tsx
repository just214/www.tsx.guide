import React from "react";
import { Helmet } from "react-helmet";

import { Redirect } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";

function Home() {
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
}

export default Home;
