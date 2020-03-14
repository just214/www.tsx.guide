module.exports = {
  title: "tsx.guide",
  tagline: "A guide for writing React apps with TypeScript",
  url: "https://www.tsx.guide",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "", // Usually your GitHub org/user name.
  projectName: "www.tsx.guide", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "",
      logo: {
        alt: "Site Logo",
        src: "img/logo.svg"
      },
      hideOnScroll: true,
      links: [
        {
          to: "https://github.com/gojutin/www.tsx.guide",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    prism: {
      defaultLanguage: "tsx"
    },
    algolia: {
      apiKey: "api-key",
      indexName: "index-name",
      algoliaOptions: {} // Optional, if provided by Algolia
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "",
          sidebarPath: require.resolve("./sidebars.ts"),
          editUrl: "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
