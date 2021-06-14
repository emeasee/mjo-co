import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { Container } from './header.css';
import Title from 'components/title';
import Nav from 'components/header/nav';
import { timeout } from 'constants/transition';

const Header = ({ title }) => (
  <motion.div
    initial={{
      opacity: 0
    }}
    animate= {{
      opacity: 1,
      delay: timeout * 2,
    }}
    exit= {{
      opacity: 0,
      delay: timeout * 2,
    }}
    transition= {{
      type: "easeInOut",
      duration: 0.6
    }}
  >
    <Container>
      <Link to="/">
        <Title as="h1">{title}</Title>
      </Link>

      <Nav />
    </Container>
  </motion.div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
