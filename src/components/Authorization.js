import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import AppState from "../stores/AppState";

@inject("store")
@observer
export default class Authorization extends Component {
	constructor(props) {
		super(props);
        this.store = this.props.store;
        this.state = {
            login: "",
            password: ""
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        event.preventDefault();
        if (this.login == this.store.trueLogin && this.password == this.store.truePassword) {
            AppState.authenticate();
        } 
    }
    
    handleLogin(event) {
        this.setState({login: event.target.value});
    }
    handlePassword(event) {
        this.setState({password: event.target.value});
    }

	render() {
		const store = this.store;
		return (
			<div>
				<input type="text" placeholder="login" onChange={this.handleLogin}/>   
                <input type="password" placeholder="password" onChange={this.handlePassword}/>  
                <input type="submit" value="log in"/>
			</div>
		);
	}
}
