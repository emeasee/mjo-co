import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import { graphql } from 'gatsby';
import P5 from 'components/p5';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        <div
          dangerouslySetInnerHTML={{
            __html: data.homeJson.content.childMarkdownRemark.html,
          }}
        />
      </Title>
    </Box>
    <Gallery items={data.allMarkdownRemark.nodes} />
    <P5/>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(posts)/" } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          cover {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, height: 500, quality: 90)
            }
          }
        }
      }
    }
  }
`;
