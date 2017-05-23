import React from 'react';
import Conversation from './Conversation';

const ConversationList = ({ conversations }) => {
	console.log(conversations, `i'm the conversations`)
	const convos = conversations.map(convo => <Conversation { ...convo } />);
	return (
		<div>
			{convos}
		</div>
	);
};

export default ConversationList;
