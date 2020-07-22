import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import List from '../../components/List/List';
import Comment from '../../components/Comment/Comment';
import Divider from '../../components/Divider/Divider';

import { fetchSelectedPostComments } from '../../actions';
import PrimaryHeader from '../../components/PrimaryHeader/PrimaryHeader';
import SecondaryHeader from '../../components/SecondaryHeader/SecondaryHeader';
import Container from '../../components/Container/Container';

class Post extends React.Component {

  componentDidMount() {
    this.props.fetchSelectedPostComments();
  }

  renderCommentItem = (comment) => {
    return <Comment key={comment.id} comment={comment} />;
  }

  render() {
    const { post, comments, spinnerLoading, history } = this.props;
    return (
      <Container>
        <button
          className='ui button'
          onClick={history.goBack}
        >
          Back
        </button>

        <PrimaryHeader>{post.title}</PrimaryHeader>
        <p>{post.body}</p>

        <Divider />

        <SecondaryHeader>Comments</SecondaryHeader>
        <List isLoading={spinnerLoading}>
          { comments.map(this.renderCommentItem) }
        </List>
      </Container>
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
