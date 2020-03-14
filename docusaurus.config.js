module.exports = {
  title: "tsx.guide",
  tagline: "The tagline of my site",
  url: "https://www.tsx.guide",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "tsx.guide",
      logo: {
        alt: "Site Logo",
        src: "img/logo.png"
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
