import React, { Component } from "react"
import Loadable from "@loadable/component";
import { Container } from './p5.css';
import Sketch from './sketch';

const P5Wrapper = Loadable(() => import('react-p5-wrapper'));

export default class App extends Component{
    
  render() {
    return <Container><P5Wrapper sketch={Sketch} /></Container>
  }
}