import React, { Component } from 'react';
import SplitPane from 'react-split-pane'
import Pane from 'react-split-pane'
import Tabs, { Tab } from 'react-awesome-tabs';
import {Change, Simple} from './xtab'
import {Menu} from './menu'
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
      super(props);
      this.tabs = {yo:5};
  }

  render() {
    return (
      <div>
        <div style={{textAlign:'center',margin:'1%'}}>simple bar inventory</div>


        <SplitPane split="vertical" defaultSize={'50%'}>

          <Menu tabs={this.tabs}></Menu>
          <Change></Change>
        </SplitPane>


      </div>
    );
  }
}

export default App;
