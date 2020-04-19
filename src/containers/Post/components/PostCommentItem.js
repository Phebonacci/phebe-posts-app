import React from 'react';
import PropTypes from 'prop-types';

import UserIcon from '../../../icons/user.svg';

const PostCommentItem = (props) => {
  const { name, body } = props.comment;
  return (
    <div class="comment">
      <span class="avatar">
        <img alt={name} src={UserIcon} />
      </span>
      <div class="content">
        <span class="author">{name}</span>
        <div class="text">
          {body}
        </div>
      </div>
    </div>
  );
};

PostCommentItem.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number,
    postId: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
  }),
};

export default PostCommentItem;
