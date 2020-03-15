module.exports = {
  title: "tsx.guide",
  tagline: "A guide for writing React apps with TypeScript",
  url: "https://www.tsx.guide",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "gojutin", // Usually your GitHub org/user name.
  projectName: "www.tsx.guide", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "",
      logo: {
        alt: "Site Logo",
        src: "img/tsx-guide-logo.png",
        srcDark: "img/tsx-guide-logo-dark.png"
      },
      // The srcDark image is not working with this feature. Bug?
      hideOnScroll: false
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Site",
          items: [
            {
              label: "About this Site",
              to: "site/about-site"
            },

            {
              label: "Contributing",
              to: "site/contributing"
            },
            {
              label: "Code of Conduct",
              to: "site/code-of-conduct"
            },
            {
              label: "GitHub",
              to: "https://github.com/gojutin/www.tsx.guide"
            }
          ]
        }
      ],
      logo: {
        alt: "tsx.guide logo",
        src: "img/logo.png"
      },
      copyright: `${new Date().getFullYear()}` // You can also put own HTML here
    },
    prism: {
      defaultLanguage: "tsx"
    }
    // Awaiting approval for Algolia DocSearch
    // algolia: {
    //   apiKey: "api-key",
    //   indexName: "index-name",
    //   algoliaOptions: {} // Optional, if provided by Algolia
    // }
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
  ],
  plugins: [
    "@docusaurus/plugin-sitemap",
    {
      cacheTime: 600 * 1000, // 600 sec - cache purge period
      changefreq: "weekly",
      priority: 0.5
    }
  ]
};
