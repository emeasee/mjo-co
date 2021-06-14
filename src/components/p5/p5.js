import React, { Component } from 'react';
import { Container } from './p5.css';
import { loadableP5 as P5Wrapper } from './loadable';
import Sketch from './sketch';

export default class App extends Component {
  render() {
    if (typeof window !== 'undefined') {
      return (
        <Container>
          <P5Wrapper sketch={Sketch} />
        </Container>
      );
    } else {
      return null;
    }
  }
}
