import * as React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";

import { Layout, GridHeader, GridItem } from "../components";
import {
  MainHeader,
  MainField,
  MainFeatures,
  MainTopBlog,
  MainFooter,
} from "../components/layout/main/gadget";
import { LeftShape, RightShape } from "../components/layout/shape";

const IndexPage: React.FC<PageProps> = ({ data }: any) => {
  let Lang = data.locales.edges[0].node.language;

  return (
    <>
      <Layout language={Lang}>
        <GridHeader textAlign="center" rowSpacing={10}>
          <MainHeader language={Lang} />
          <MainField />
          <MainFeatures />

          <LeftShape />
          <RightShape />

          <GridItem xs={12}>
            <MainTopBlog language={Lang} />
          </GridItem>

          <GridItem xs={12}>
            <MainFooter />
          </GridItem>
        </GridHeader>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>{process.env.GATSBY_COMPANY_NAME}</title>
);

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
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
