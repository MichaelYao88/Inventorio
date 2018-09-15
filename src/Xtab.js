import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tabs, { Tab } from 'react-awesome-tabs';
import './App.css'

export class Simple extends Component {
    handleTabSwitch(active) {
        this.setState({ activeTab: active });
    }

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    render() {
        return (
            <Tabs
                active={ this.state.activeTab }
                onTabSwitch={ this.handleTabSwitch.bind(this) }
            >
                <Tab title="yo">foo</Tab>
                <Tab title="yo1">bar</Tab>
                <Tab title="yo2">baz</Tab>
            </Tabs>
        );
    }
}


export class Change extends Component {
	tabs = [];

	handleTabSwitch(active) {
		this.setState({ activeTab: active });
	}

	handleTabPositionChange(a, b) {
		let c = this.tabs[a];
		this.tabs[a] = this.tabs[b];
		this.tabs[b] = c;

		if(this.state.activeTab == a) {
			this.setState({ activeTab: b });
		}else if(this.state.activeTab == b) {
			this.setState({ activeTab: a });
		}

		this.forceUpdate()
	}

	handleTabClose(index) {
		this.tabs.splice(index, 1);

		if(this.state.activeTab >= this.tabs.length) {
			this.setState({ activeTab: this.tabs.length - 1 });
		}

		this.forceUpdate();
	}

	handleTabAdd() {
		this.tabs.push({
			title: 'New Tab',
			content: 'Hey Buddy!'
		});

		this.setState({
			activeTab: this.tabs.length - 1
		});
	}

	constructor(props) {
		super(props);
		this.state = {
			activeTab: 0
		};

		this.tabs = [
			{
				title: 'Tab1',
				content: 'foo'
			},
			{
				title: 'Tab2',
				content: 'bar'
			},
			{

				title: 'Tab3',
				content: 'baz'
			},
		];
	}

	render() {
		return (
			<Tabs
				active={ this.state.activeTab }
				onTabSwitch={ this.handleTabSwitch.bind(this) }
				onTabPositionChange={ this.handleTabPositionChange.bind(this) }
				onTabClose={ this.handleTabClose.bind(this) }
				onTabAdd={ this.handleTabAdd.bind(this) }
				draggable={ true }
				showAdd={ true }
			>
				{
					this.tabs.map((value, index) => {
						return (
							<Tab
								key={ index }
								title={ value.title }
								showClose={ true }
							>
								{ value.content }
							</Tab>
						);
					})
				}
			</Tabs>
		);
	}
}
