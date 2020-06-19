import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import List from '../../components/List/List';
import UserItem from './components/UserItem';
import PrimaryHeader from '../../components/PrimaryHeader/PrimaryHeader';
import Container from '../../components/Container/Container';

import { fetchUsers, selectUser } from '../../actions';

class Users extends React.Component {

  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUserItem = (user) => {
    return (
      <UserItem
        key={user.id}
        user={user}
        onClick={this.props.selectUser}
      />
    );
  };

  render() {
    const { users, spinnerLoading } = this.props;
    return (
      <Container>
        <PrimaryHeader>Members</PrimaryHeader>
        <List isLoading={spinnerLoading}>
          { users.map(this.renderUserItem)}
        </List>
      </Container>
    );
  }
}

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    company: PropTypes.shape({
      name: PropTypes.string,
    }),
  })),
  spinnerLoading: PropTypes.bool,
  fetchUsers: PropTypes.func,
  selectUser: PropTypes.func,
};

const mapStateToProps = (state) => ({
  users: state.users,
  spinnerLoading: state.spinnerLoading,
});
const mapDispatchToProps = { fetchUsers, selectUser };

export default connect(mapStateToProps, mapDispatchToProps)(Users);
