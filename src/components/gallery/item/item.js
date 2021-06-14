import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { Title, Copy } from './item.css';

const Item = ({ fields, frontmatter }) => {
  let link;

  if (fields.slug.includes('private')) {
    link = (
      <a href={fields.slug}>
        <GatsbyImage
          image={getImage(frontmatter.cover)}
          alt={frontmatter.title}
        />
      </a>
    );
  } else {
    link = (
      <Link to={fields.slug}>
        <GatsbyImage
          image={getImage(frontmatter.cover)}
          alt={frontmatter.title}
        />
      </Link>
    );
  }

  return (
    <figure>
      {link}
      <figcaption>
        <Title>{frontmatter.title}</Title>
        <Copy>{frontmatter.description}</Copy>
      </figcaption>
    </figure>
  );
};

Item.propTypes = {
  fields: PropTypes.object.isRequired,
  frontmatter: PropTypes.object.isRequired,
};

export default Item;
