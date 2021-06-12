import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './slide.css';

const Slides = ({ frontmatter }) => (
  <Container>
    <iframe
      src={`${frontmatter.slides}` + '/embed'}
      title={frontmatter.title}
      width="700"
      height="400"
      scrolling="no"
      frameBorder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowFullScreen
    ></iframe>
  </Container>
);

Slides.propTypes = {
  frontmatter: PropTypes.object.isRequired,
};

export default Slides;
