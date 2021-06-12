import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import loadable from '@loadable/component';

const SlidesFrame = loadable(() => import('components/slide'), {
  fallback: <div>Loading...</div>,
});

const Post = ({ data }) => (
  <Layout>
    <Head pageTitle={data.markdownRemark.frontmatter.title} />
    {data.markdownRemark.frontmatter.slides && (
      <SlidesFrame frontmatter={data.markdownRemark.frontmatter} />
    )}
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Post.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Post;

export const query = graphql`
  query PostBySlugQuery(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        cover {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 90)
          }
        }
        slides
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
