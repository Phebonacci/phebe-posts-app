import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import userIcon from '../../../icons/user.svg';

const UserItem = (props) => {
  const { user, onClick } = props;
  return (
    <Link
      key={user.id}
      className="item"
      to={`/users/${user.id}`}
      onClick={() => onClick(user)}
    >
      <div className="content">
        <div className="header">{user.name}</div>
        <div className="description">
          <p>{user.company && user.company.name}</p>
        </div>
      </div>

      <span className="ui tiny image">
        <img alt={user.name} src={user.avatar || userIcon} />
      </span>
    </Link>
  );
};

UserItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    company: PropTypes.shape({
      name: PropTypes.string,
    }),
    avatar: PropTypes.string,
  }),
  onClick: PropTypes.func,
};

export default UserItem;
