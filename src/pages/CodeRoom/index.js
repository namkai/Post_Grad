import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/theme/monokai.css';
// src/components/Room.js
import React, { Component } from 'react';
import Codemirror from 'react-codemirror';
import io from 'socket.io-client';
import CodeResult from './CodeResult';
const socket = io();
import '../../../style/CodeRoom.css'

class Room extends Component {
	constructor(props) {
		super(props);

		this.state = { code: '' };

		socket.on('receive code', (payload) => {
			this.updateCodeFromSockets(payload);
		});
	}

	updateCodeFromSockets(payload) {
		this.setState({ code: payload.newCode });
	}

	componentDidMount() {
		socket.emit('room', { room: 'test' });
	}

	componentWillUnmount() {
		socket.emit('leave room', {
			room: 'test',
		});
	}


	updateCodeInState = (code) => {
		this.setState({ code });

		socket.emit('coding event', {
			room: 'test',
			newCode: code,
		});
	};

	render() {
		const options = {
			lineNumbers: true,
			mode: 'javascript',
			theme: 'monokai',
		};
		return (
			<div className="container">
				<h1>Code Challenge</h1>
				<p>Solve this challenge</p>
				<div className="row">
					<div className="col-md-6">
						<Codemirror
							value={ this.state.code}
							onChange={this.updateCodeInState}
							options={ options }
						/>
						<CodeResult code={this.state.code}/>
					</div>
					<div className="col-md-6">
						<h1>Test</h1>
					</div>
				</div>
			</div>
		);
	}
}


export default Room;
