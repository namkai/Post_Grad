import React, { Component } from 'react';

class CodeResult extends Component {
	constructor(props) {
		super(props);

		this.state = {
			codeResult: 0,
		}
	}
	runCode = (func) => {
		let testFunc = new Function(`return ${func}`)
		this.setState({codeResult: testFunc()()})
	};
	render() {
		return (
			<div>
				<button onClick={() => this.runCode(this.props.code)}>Run Code</button>
				<div>
					<textarea  readOnly={true} type="text" value={this.state.codeResult} />
				</div>
			</div>
		);
	};
}
export default CodeResult;

