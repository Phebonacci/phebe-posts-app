import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Title from '../../../components/Title/Title';
import Avatar from '../../../components/Avatar/Avatar';
import TextContent from '../../../components/TextContent/TextContent';
import Content from '../../../components/Content/Content';

import userIcon from '../../../icons/user.svg';

const UserItem = (props) => {
  const { user, onClick } = props;
  return (
    <Link
      key={user.id}
      className='item'
      to={`/users/${user.id}`}
      onClick={() => onClick(user)}
      data-testid='user-item'
    >
      <Content>
        <Title>{user.name}</Title>
        <TextContent>{user.company && user.company.name}</TextContent>
      </Content>

      <Avatar
        src={user.avatar || userIcon}
        alt={user.name}
      />
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
