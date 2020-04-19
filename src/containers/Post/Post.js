import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import List from '../../components/List/List';
import PostCommentItem from './components/PostCommentItem';

import { fetchSelectedPostComments } from '../../actions';

class Post extends React.Component {

  componentDidMount() {
    this.props.fetchSelectedPostComments();
  }

  renderCommentItem = (comment) => {
    return <PostCommentItem key={comment.id} comment={comment} />;
  }

  render() {
    const { post, comments, spinnerLoading, history } = this.props;
    return (
      <div className="ui container">
        <button
          className="ui button"
          onClick={history.goBack}
        >
          Back
        </button>
        <h1 className="ui header">{post.title}</h1>
        <p>{post.body}</p>

        <div className="ui divider"></div>
        <h2 className="ui header">Comments</h2>
        <List isLoading={spinnerLoading}>
          { comments.map(this.renderCommentItem) }
        </List>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    body: PropTypes.string,
  })),
  spinnerLoading: PropTypes.bool,
  fetchSelectedPostComments: PropTypes.func,
};

const mapStateToProps = (state) => ({
  post: state.selectedPost,
  comments: state.selectedPostComments,
  spinnerLoading: state.spinnerLoading,
});
const mapDispatchToProps = {
  fetchSelectedPostComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
