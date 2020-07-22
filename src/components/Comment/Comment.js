import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '../Avatar/Avatar';
import Content from '../Content/Content';
import UserIcon from '../../icons/user.svg';

const Comment = (props) => {
  const { name, avatar, body } = props.comment;
  return (
    <div className='comment'>
      <Avatar
        src={avatar || UserIcon}
        alt={name}
      />
      <Content>
        <span className='author'>{name}</span>
        <div className='text'>
          {body}
        </div>
      </Content>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
  }),
};

export default Comment;
