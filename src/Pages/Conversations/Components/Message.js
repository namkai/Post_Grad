import React from 'react';

const Message = ({ name, text, timestamp }) => (
	<li className="media media-current-user mb-4">
		<div className="media-body">
			<div className="media-body-text">
				{text}
			</div>
			<div className="media-footer">
				<small className="text-muted">
					<a href="#">{name}</a> at PM
				</small>
			</div>
		</div>
		<img
			className="rounded-circle media-object d-flex align-self-start mr-3"
			src="assets/img/avatar-dhg.png"
		/>
	</li>
);

export default Message;
