import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserPostItem = (props) => {
  const { post, onViewClick, onDeleteClick } = props;
  const { title, body } = post;
  return (
    <div className="item">
      <div className="middle aligned content">
        <div className="header">
          {title}
        </div>
        <div className="description">
          <p>{body}</p>
        </div>
        <div className="extra">
          <button
            type="button"
            className="ui right floated button"
            onClick={() => onDeleteClick(post)}
          >
            Delete
          </button>
          <Link
            className="ui right floated button"
            to={`/users/${post.userId}/posts/${post.id}`}
            onClick={() => onViewClick(post)}
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

UserPostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
  onViewClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};

export default UserPostItem;
