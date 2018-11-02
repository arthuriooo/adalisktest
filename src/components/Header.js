import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link, withRouter } from "react-router-dom";

import Button from "./ui/Button";
import AppState from "../stores/AppState";

@withRouter
@inject("store")
@observer
export default class Header extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store.appState;
	}

	authenticate(e) {
		if (e) e.preventDefault();
		console.log("CLICKED BUTTON");
		this.store.authenticate();
	}

	render() {
        const { authenticated } = this.store;
        if (this.store.authenticated) {
            return (
                <div className="header">  
                    <p>{this.store.trueLogin}</p>
                    <button onClick={AppState.authenticate()}></button>
                </div>
            );
        } 
		
	}
}
