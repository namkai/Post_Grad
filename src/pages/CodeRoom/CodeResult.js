import React, { Component } from 'react';

class CodeResult extends Component {
	constructor(props) {
		super(props);

		this.state = {
			codeResult: 0,
		};
	}

	runCode = (func) => {
		this.setState({ codeResult: eval(func) });
	};

	render() {
		return (
			<div>
				<button onClick={() => this.runCode(this.props.code)}>Run Code</button>
				<div className="form-group">
					<label htmlFor="result"/>
					<textarea id="result" readOnly={true} type="text" className="form-control" rows="5"
					          value={this.state.codeResult}/>
				</div>
			</div>
		);
	};
}
export default CodeResult;

