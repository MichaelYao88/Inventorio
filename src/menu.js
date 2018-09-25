import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tabs, { Tab } from 'react-awesome-tabs';
import './menu.css'
import {Change} from './xtab.js'

export class Menu extends Component {

  constructor(props) {
      super(props);
      this.state = {
          yo: this.props.tabs.yo
      };
  }

  handleClick() {
    console.log(this.state.yo)
    this.state.yo=19
  }

  render() {
      return (
          <div className="booty">
            <button onClick={this.handleClick.bind(this)}>Current Inventory</button>
            <button>New Purchase Order</button>
            <button>Manage Active Orders</button>
            <button>Usage Report</button>
            <button>Adjustments Report</button>
            <div>{this.state.yo}</div>
          </div>
      );
  }


}
