import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tabs, { Tab } from 'react-awesome-tabs';
import './menu.css'
import {Change} from './xtab.js'

export class Menu extends Component {
  handleClick = () => {
    this.props.fnct(this.props.tabs);
  }


  render() {
      return (
          <div className="booty">
            <button onClick={this.handleClick}>Current Inventory</button>
            <button>New Purchase Order</button>
            <button>Manage Active Orders</button>
            <button>Usage Report</button>
            <button>Adjustments Report</button>
            <div>{this.props.tabs.yo}</div>
          </div>
      );
  }


}
