import React from 'react';
import MessageList from './MessageList';

const Messages = ({ messages }) => {
	console.log(`i'm the messages in MESSAGE`, messages)
	return (
	<div className="hidden-xs-up m-3 js-conversation">
		<ul className="media-list media-list-conversation">
			<MessageList messages={ messages }/>
			<li className="media mb-4">
				<img
					className="rounded-circle media-object d-flex align-self-start mr-3"
					src="assets/img/avatar-fat.jpg"
				/>
				<div className="media-body">
					<div className="media-body-text">
						Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo
						luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus
						magna, vel scelerisque nisl consectetur et.
					</div>
					<div className="media-body-text">
						Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed
						consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
						porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
						nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus,
						porta ac consectetur ac, vestibulum at eros.
					</div>
					<div className="media-body-text">
						Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Integer posuere erat a
						ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Donec
						id elit non mi porta gravida at eget metus.
					</div>
					<div className="media-footer">
						<small className="text-muted">
							<a href="#">Fat</a> at 4:28PM
						</small>
					</div>
				</div>
			</li>
		</ul>
	</div>
	)
};

export default Messages;
