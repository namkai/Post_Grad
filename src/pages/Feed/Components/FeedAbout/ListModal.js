import React from 'react';
import ListItem from './ListItem';

const ListModal = ({ title, list, id }) => {
	const renderList = list.map(item => <ListItem {...item} />);
	return (
  <div
    className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby="userModal"
    aria-hidden="true"
		>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">{ title }</h4>
          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        </div>
        <div className="modal-body p-0">
          <div className="modal-body-scroller">
            <ul className="media-list media-list-users list-group">
              {renderList}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
	);
};

export default ListModal;
