import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/theme/monokai.css';
// src/components/Room.js
import React, { Component } from 'react';
import Codemirror from 'react-codemirror';

class Room extends Component {
	constructor(props) {
		super(props);

		this.state = { code: '' };
	}

	updateCodeInState = code => this.setState({ code });

	render() {
		const options = {
			lineNumbers: true,
			mode: 'javascript',
			theme: 'monokai',
		};
		console.log(this.state.code)
		return (
			<div className="container">
				<h1>Code Challenge</h1>
				<p>Solve this challenge</p>
				<Codemirror
					value={ this.state.code}
					onChange={this.updateCodeInState}
					options={ options }
				/>
			</div>
		);
	}
}


export default Room;
