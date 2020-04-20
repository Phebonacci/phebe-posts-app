import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { createUserPost } from '../../actions';

class PostForm extends React.Component {

  onSubmit = (formValues) => {
    const { createUserPost, user } = this.props;
    createUserPost({ ...formValues, userId: user.id });
  }

  render() {
    const { user, history, handleSubmit, spinnerLoading } = this.props;
    const activeLoaderClassName = spinnerLoading ? 'active' : '';
    return (
      <div className="ui container">
        <button
          type="button"
          className="ui button"
          onClick={history.goBack}
        >
          Back
        </button>
        <h1 className="ui header">Create new post for {user.name}</h1>
        <div className="ui divider"></div>
        <form className="ui form" onSubmit={handleSubmit(this.onSubmit)}>
          <div className="field">
            <label>Title</label>
            <Field
              name="title"
              component="input"
              placeholder="Title"
              type="text"
              required
            />
          </div>

          <div className="field">
            <label>Content</label>
            <Field
              name="body"
              component="textarea"
              required
            />
          </div>

          <button className="ui button primary" type="submit">Submit</button>
        </form>
        <div className={`ui ${activeLoaderClassName} inverted dimmer`}>
          <div className="ui text loader">Loading</div>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  spinnerLoading: PropTypes.bool,
  createUserPost: PropTypes.func,
}

const mapStateToProps = (state) => ({
  user: state.selectedUser,
  spinnerLoading: state.spinnerLoading,
});
const mapDispatchToProps = {
  createUserPost,
};

const Form = connect(mapStateToProps, mapDispatchToProps)(PostForm);
export default reduxForm({
  form: 'postCreate',
})(Form);
