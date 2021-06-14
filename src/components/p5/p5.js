import React, { Component } from 'react';
import { Helmet } from "react-helmet"
import { Container } from './p5.css';
import { loadableP5 as P5Wrapper } from './loadable';
import Sketch from './sketch';

export default class App extends Component {
  render() {
    if (typeof window !== 'undefined') {
      return (
        <Helmet>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js"></script>
            <script src="https://cdn.rawgit.com/MAKIO135/73e5cb2c456084a9c356f9c3f89f8803/raw/3f4d08bf3c88c326702eff34bb621019b1ae5581/gfont.min.js"></script>
        </Helmet>
        <Container>
          <P5Wrapper sketch={Sketch} />
        </Container>
      );
    } else {
      return null;
    }
  }
}
