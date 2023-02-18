import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Footballiga a NFT Game`,
    siteUrl: `https://footballiga.com`,
  },
  graphqlTypegen: true,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/locales/resources`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `fa`],
        defaultLanguage: `en`,
        siteUrl: `https://footballiga.com`,
        trailingSlash: "always",
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "google-ID",
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Footballiga`,
        short_name: `Footballiga`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: "src/static/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `./blog/`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/static/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

export default config;
