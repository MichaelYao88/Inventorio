import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tabs, { Tab } from 'react-awesome-tabs';
import './menu.css'

export class Menu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="booty">
              <button>Current Inventory</button>
              <button>Order Report</button>
              <button>Order Received</button>
              <button>Usage Report</button>
              <button>Adjustments Report</button>
            </div>
        );
    }
}
