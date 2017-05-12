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
					<div className="form-group">
						<label htmlFor="result"></label>
					<textarea  id="result" readOnly={true} type="text" className="form-control" rows="5" value={this.state.codeResult} />
				</div>
			</div>
		);
	};
}
export default CodeResult;

