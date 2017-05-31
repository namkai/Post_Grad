import React from 'react';

const Conversation = ({ name, messages, selectedConversation }) => (
	<a href="#" className="list-group-item list-group-item-action" onClick={ () => selectedConversation(messages) }>
		<div className="media">
			<img
				className="rounded-circle media-object d-flex align-self-start mr-3"
				src="assets/img/avatar-fat.jpg"
			/>
			<div className="media-body">
				<strong>{name}</strong>
				<div className="media-body-secondary">
					{messages[0].text} &hellip;
				</div>
			</div>
		</div>
	</a>
);

export default Conversation;
