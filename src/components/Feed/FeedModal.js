import React from 'react';

const FeedModal = () => (
	<div
  className="modal fade" id="userModal" tabIndex="-1" role="dialog" aria-labelledby="userModal"
  aria-hidden="true"
	>
		<div className="modal-dialog">
			<div className="modal-content">
				<div className="modal-header">
					<h4 className="modal-title">Users</h4>
					<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>

				<div className="modal-body p-0">
					<div className="modal-body-scroller">
						<ul className="media-list media-list-users list-group">
							<li className="list-group-item">
								<div className="media w-100">
									<img className="media-object d-flex align-self-start mr-3" src="assets/img/avatar-fat.jpg" />
									<div className="media-body">
										<button className="btn btn-secondary btn-sm float-right">
											<span className="glyphicon glyphicon-user" /> Follow
											</button>
										<strong>Jacob Thornton</strong>
										<p>@fat - San Francisco</p>
									</div>
								</div>
							</li>
							<li className="list-group-item">
								<div className="media w-100">
									<img className="media-object d-flex align-self-start mr-3" src="assets/img/avatar-dhg.png" />
									<div className="media-body">
										<button className="btn btn-secondary btn-sm float-right">
											<span className="glyphicon glyphicon-user" /> Follow
											</button>
										<strong>Dave Gamache</strong>
										<p>@dhg - Palo Alto</p>
									</div>
								</div>
							</li>
							<li className="list-group-item">
								<div className="media w-100">
									<img className="media-object d-flex align-self-start mr-3" src="assets/img/avatar-mdo.png" />
									<div className="media-body">
										<button className="btn btn-secondary btn-sm float-right">
											<span className="glyphicon glyphicon-user" /> Follow
											</button>
										<strong>Mark Otto</strong>
										<p>@mdo - San Francisco</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	);

export default FeedModal;
