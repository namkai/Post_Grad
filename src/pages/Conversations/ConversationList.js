import React from 'react';
import Conversation from './Conversation';

const ConversationList = ({ conversations, selectedConversation }) => {
	const conversationList = conversations.map(convo => <Conversation { ...convo } selectedConversation={ selectedConversation } />);
	return (
		<div>
			{conversationList}
		</div>
	);
};

export default ConversationList;
