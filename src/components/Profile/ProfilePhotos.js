import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Photo from './Photo';

class ProfilePhotos extends Component {
	componentDidMount() {

	}

	render() {
		const generatePhotos = this.props.user.photos.map(photo => (<Photo photo={ photo } />));
		return (
			<div className="card visible-md-block visible-lg-block">
				<div className="card-block">
					<h6 className="mb-3">Photos
						<small>· <a href="#">Edit</a></small>
					</h6>

					<div className="row">
						<div data-grid="images" data-target-height="150">
							{generatePhotos}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(({ user }) => ({ user }))(ProfilePhotos);
