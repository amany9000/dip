import React, { Component } from 'react';
import Login from './components/login/Login';
import './App.css'

class App extends Component {
	render() {
		return (
				<div>
				<div align="center" className="head1">
				<h2><b>Welcome !! Create an account</b></h2>
				</div>
				<Login />
			</div>
		);
	}
}

export default App;
