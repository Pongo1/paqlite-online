import React, { Component } from 'react';

class AuthenticationPage extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 offset-md-3">
				<div style={style.mainContainer}>
					<div className="card text-center">
						<div className="card-header">
							<ul className="nav nav-pills card-header-pills">
								<li className="nav-item">
									<a className="nav-link active" style={style.loginTabButton} href="/login">
										Login
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/signup">
										Sign Up
									</a>
								</li>
							</ul>
						</div>
						<div className="card-body clearfix">
							<input
								style={style.inputs}
								type="email"
								name="email"
								placeholder="email"
								className="form-control"
							/>
							<input
								style={style.inputs}
								type="password"
								name="password"
								placeholder="password"
								className="form-control"
							/>

							<button className="btn btn-success float-right">Login</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
var style = {
	mainContainer: {
		margin: '150px 50px'
	},
	inputs: {
		margin: 10
	},
	loginTabButton: {
		borderRadius: 55
	}
};
export default AuthenticationPage;
