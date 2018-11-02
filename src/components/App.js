import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import LazyRoute from "lazy-route";
import DevTools from "mobx-react-devtools";
import Table from "./Table"

@withRouter
@inject("store")
@observer
export default class App extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}
	componentDidMount() {
		this.authenticate();
	}
	authenticate(e) {
		if (e) e.preventDefault();
		this.store.appState.authenticate();
	}
	render() {
		const {
			authenticated
		} = this.store.appState;
		return (
			<div className="wrapper">
				<Route
					exact
					path="/"
					render={props => (
						<LazyRoute {...props} component={import("./Home")} />
					)}
				/>
				<Route
					exact
					path="/table"
					render={props => (
						<LazyRoute {...props} component={import("./Table")} />
					)}
				/>
				<Route
					exact
					path="/table/case"
					render={props => (
						<LazyRoute {...props} component={import("./Case")} />
					)}
				/>
				<Route
					exact
					path="/table/case"
					render={props => (
						<LazyRoute {...props} component={import("./Case")} />
					)}
				/>
			</div>
		);
	}
}
