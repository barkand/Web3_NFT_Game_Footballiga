import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Trans } from "gatsby-plugin-react-i18next";

import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from "@mui/material";

import Layout from "../../components/layout";

function CardPage({ node }: any) {
  return (
    <Card sx={{ Width: 503 }} key={node.id}>
      <CardActionArea>
        <Link to={`/blog/${node.frontmatter.slug}`}>
          <GatsbyImage
            image={getImage(node.frontmatter.page_image)}
            alt={node.frontmatter.page_image_alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <Trans>{node.frontmatter.title}</Trans>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {node.frontmatter.page_image_desc}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}

const BlogPage = ({ data }: any) => {
  return (
    <Layout language="en">
      <Grid
        container
        rowSpacing={5}
        spacing={5}
        justifyContent="center"
        sx={{ mt: 5, pl: { md: 20, sm: 0 }, pr: { md: 20, sm: 0 } }}
      >
        {data.allMdx.nodes.map((node: any) => (
          <Grid item xs={12} md={6} lg={4} key={node.id}>
            <CardPage node={node} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          slug
          date(formatString: "MMMM DD, YYYY")
          page_image_alt
          page_image_desc
          page_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export const Head = () => <title>{process.env.GATSBY_COMPANY_NAME} Blog</title>;

export default BlogPage;
