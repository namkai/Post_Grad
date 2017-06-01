import React from 'react';
import { connect } from 'react-redux';
import { selectedConversation } from './Actions/index';
import ConversationList from './Components/ConversationList';
import Messages from './Components/Messages';

const Conversations = ({ conversations, messages }) => {
  console.log('i\'m the messages! in CONVO', messages);
  return (
    <div className="modal fade" id="msgModal" tabIndex="-1" role="dialog" aria-labelledby="msgModal" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Conversations</h5>
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          </div>

          <div className="modal-body p-0 js-modalBody">
            <div className="modal-body-scroller">
              <div className="media-list media-list-users list-group js-msgGroup">
                <ConversationList conversations={conversations} selectedConversation={selectedConversation} />
              </div>
              <Messages messages={messages} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
	({ conversations, user, messages }) => ({ conversations, user, messages }),
	{ selectedConversation })(Conversations);
