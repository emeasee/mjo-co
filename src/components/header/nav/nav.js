import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a href="mailto:hello@m-jo.co">Say hi</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
