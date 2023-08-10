/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Deep Lake",
  tagline: "Deep Lake GraphQL Bitcoin API",
  url: "https://deeplake.finance",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
  organizationName: "deep-lake-finance", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Deep Lake",
      logo: {
        alt: "Deep Lake Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "API",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/deep-lake-finance/docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/deeplake",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/deeplake",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/deeplakefi",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/deep-lake-finance/docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Deep Lake, Inc. Built with Docusaurus.`,
    },
  },
  plugins: [
    [
      require.resolve("@edno/docusaurus2-graphql-doc-generator"),
      {
        schema: "./schema.graphql",
        rootPath: ".", // docs will be generated under './docs/swapi' (rootPath/baseURL)
        baseURL: "/api",
        linkRoot: "/",
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/deep-lake-finance/docs/edit/main/api/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/deep-lake-finance/docs/edit/main/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
