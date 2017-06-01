import React from 'react';
import Message from './Message';

const MessageList = ({ messages }) => {
	console.log(`i'm the messages!`, messages)
	const messageList = messages.map((msg, idx) => <Message { ...msg } key={idx} />);
	return (
		<div>{messageList}</div>
	);
};

export default MessageList;
