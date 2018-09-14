import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SplitPane from 'react-split-pane'
import Pane from 'react-split-pane'

class App extends Component {
  render() {
    return (
      <SplitPane split="vertical" defaultSize={'50%'}>
      <div>yoo</div>
      <div>This is a Pane</div>
      </SplitPane>
    );
  }
}

export default App;
