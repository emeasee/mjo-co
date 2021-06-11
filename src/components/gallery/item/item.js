import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { Title, Copy } from './item.css';

const Item = ({ fields, frontmatter }) => (
  <figure>
    <Link to={fields.slug}><Img fluid={frontmatter.cover ? frontmatter.cover.childImageSharp.fluid : {}} alt={frontmatter.title} /></Link>
    <figcaption>
      <Title>{frontmatter.title}</Title>
      <Copy>{frontmatter.description}</Copy>
    </figcaption>
  </figure>
); 

Item.propTypes = {
  fields: PropTypes.object.isRequired,
  frontmatter: PropTypes.object.isRequired
};

export default Item;
