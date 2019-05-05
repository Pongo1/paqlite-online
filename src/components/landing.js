import React, { Component } from 'react';

export default class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div style={style.mainContainer}>
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-lg-6 offset-md-3">
							<center>
								<h3>This is the landing Page, stay tuned for stuff</h3>
								<a className="btn btn-danger" href="/login" style={{ color: 'white' }}>
									Login
								</a>
							</center>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

var style = {
	mainContainer: {
		padding: 20,
		margin: '160px 10px'
	}
};
