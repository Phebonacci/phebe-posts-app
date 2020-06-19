import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import List from '../../components/List/List';
import UserPostItem from './components/UserPostItem';

import {
  fetchSelectedUserPosts,
  selectUserPost,
  deleteUserPost,
} from '../../actions';
import Container from '../../components/Container/Container';

class UserPosts extends React.Component {

  componentDidMount() {
    this.props.fetchSelectedUserPosts();
  }

  renderUserPostItem = (post) => {
    const { selectUserPost, deleteUserPost } = this.props;
    return (
      <UserPostItem
        key={post.id}
        post={post}
        onViewClick={selectUserPost}
        onDeleteClick={deleteUserPost}
      />
    );
  }

  render() {
    const { user = {}, posts, spinnerLoading, history } = this.props;
    return (
      <Container>
        <button
          className='ui button'
          onClick={history.goBack}
        >
          Back
        </button>
        <h1>{user.name}'s Posts</h1>
        <Link
          className='fluid ui button'
          to={`/users/${user.id}/post-form`}>
          Create New Post
        </Link>
        <List isLoading={spinnerLoading}>
          { posts.map(this.renderUserPostItem) }
        </List>
      </Container>
    );
  }
}

UserPosts.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  })),
  spinnerLoading: PropTypes.bool,
  fetchSelectedUserPosts: PropTypes.func,
  selectUserPost: PropTypes.func,
  deleteUserPost: PropTypes.func,
};

const mapStateToProps = (state) => ({
  user: state.selectedUser,
  posts: state.userPosts,
  spinnerLoading: state.spinnerLoading,
});
const mapDispatchToProps = {
  fetchSelectedUserPosts,
  selectUserPost,
  deleteUserPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);
