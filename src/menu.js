import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tabs, { Tab } from 'react-awesome-tabs';
import './menu.css'
import {Change} from './xtab.js'

export class Menu extends Component {

    render() {
        return (
            <div className="booty">
              <button onClick={this.handleClik()}>Current Inventory</button>
              <button>New Purchase Order</button>
              <button>Manage Active Orders</button>
              <button>Usage Report</button>
              <button>Adjustments Report</button>
              <div>{this.props.tabs.yo}</div>
            </div>
        );
    }

    handleClik() {
      this.props.tabs.yo=9
    }
}
