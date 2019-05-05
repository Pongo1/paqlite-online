import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import firebaseApp from './firebase/app';
import Landing from './components/landing.js';
import AuthenticatePage from './components/authentication';
import SignUpPage from './components/Signup';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { user: null };
	}
	authListener() {
		firebaseApp.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ user: user });
			} else {
				this.setState({ user: null });
			}
		});
	}

	componentDidMount() {
		this.authListener();
		firebaseApp
			.auth()
			.signInWithEmailAndPassword('New@yahoo.com', 'New123')
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	render() {
		return (
			<Router>
				<div className="App">
					<Route
						path="/"
						exact
						render={() => {
							return <Landing />;
						}}
					/>
					<Route
						path="/loose"
						exact
						render={() => {
							return <h1>This is the center</h1>;
						}}
					/>
					<Route
						path="/login"
						exact
						render={() => {
							return <AuthenticatePage />;
						}}
					/>
					<Route
						path="/signup"
						exact
						render={() => {
							return <SignUpPage />;
						}}
					/>
				</div>
			</Router>
		);
	}
}

export default App;
