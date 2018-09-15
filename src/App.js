import React, { Component } from 'react';
import SplitPane from 'react-split-pane'
import Pane from 'react-split-pane'
import Tabs, { Tab } from 'react-awesome-tabs';
import {Change, Simple} from './Xtab'
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (

      <SplitPane split="vertical" defaultSize={'50%'}>
      <div>yoo</div>
      <Change></Change>
      </SplitPane>
    );
  }
}

export default App;
