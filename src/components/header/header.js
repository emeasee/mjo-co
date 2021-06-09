import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container } from './header.css';
import Title from 'components/title';
import Nav from 'components/header/nav';
import { timeout } from 'constants/transition';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
    },
    delay: timeout*2
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeInOut',
    },
    delay: timeout*2
  },
});

const Header = ({ title }) => (
  <AnimatedContainer>
    <Container>
      <Link to="/">
        <Title as="h1">{title}</Title>
      </Link>

      <Nav />
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
