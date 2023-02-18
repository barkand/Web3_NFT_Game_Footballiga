import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Trans } from "gatsby-plugin-react-i18next";

import Layout from "../../components/layout";

const BlogPost = ({ data, children }: any) => {
  const { mdx, locales } = data;
  const { frontmatter } = mdx;
  let lang = locales.edges[0].node.language;

  return (
    <Layout language={lang}>
      <main
        style={{
          direction: lang === "en" ? "ltr" : "rtl",
          minHeight: "94vh",
        }}
        className={lang}
      >
        <center>
          <br />
          <GatsbyImage
            image={getImage(frontmatter.page_image)}
            alt={frontmatter.page_image_alt}
          />
          <h1>
            <Trans>{frontmatter.title}</Trans>
          </h1>
          <p>{frontmatter.date}</p>
          {children}
        </center>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String, $language: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        page_image_alt
        page_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    locales: allLocale(
      filter: { ns: { in: ["blog"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export const Head = ({ data }: any) => (
  <title>{data.mdx.frontmatter.title.replace("-title", "")}</title>
);

export default BlogPost;
