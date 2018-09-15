import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tabs, { Tab } from 'react-awesome-tabs';
import './menu.css'
import {Change} from './xtab.js'

export class Menu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="booty">
              <button>Current Inventory</button>
              <button>New Purchase Order</button>
              <button>Manage Active Orders</button>
              <button>Usage Report</button>
              <button>Adjustments Report</button>
              <div>Order and Reports History</div>
            </div>
        );
    }
}
