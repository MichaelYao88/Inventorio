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
  }

  state={yo:5}



  render() {

    const handleClick = (id) => {
      console.log(this)
      this.setState({yo:19})
    }

    return (
      <div>
        <div style={{textAlign:'center',margin:'1%'}}>simple bar inventory {this.tabList}</div>


        <SplitPane split="vertical" defaultSize={'50%'}>

          <Menu fnct={handleClick} tabs={this.state}></Menu>
          <Change></Change>
        </SplitPane>


      </div>
    );
  }
}

export default App;
