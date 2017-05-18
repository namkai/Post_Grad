import React, { Component } from 'react';

class SubmitPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
		};
	}
	updateQuery = (event) => {
		this.setState({
			query: event.target.value
		})
	}
	render() {
		return (
			<li className="media list-group-item p-4">
				<div className="input-group">
					<input type="text" className="form-control" placeholder="Message" onChange={this.updateQuery} value={this.state.query} />
					<div className="input-group-btn">
						<button type="button" className="btn btn-secondary">
							<span className="icon icon-add-to-list"/>
						</button>
					</div>
				</div>
			</li>
		);
	}
}

export default SubmitPost;