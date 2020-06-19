import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import Divider from '../../components/Divider/Divider';
import PrimaryHeader from '../../components/PrimaryHeader/PrimaryHeader';
import Container from '../../components/Container/Container';
import Loader from '../../components/Loader/Loader';

import { createUserPost } from '../../actions';

export class PostForm extends React.Component {

  onSubmit = (formValues) => {
    const { createUserPost, user } = this.props;
    createUserPost({ ...formValues, userId: user.id });
  }

  render() {
    const { user, history, handleSubmit, spinnerLoading } = this.props;
    return (
      <Container testId='component-post-form'>
        <button
          type='button'
          className='ui button'
          data-testid='back-button'
          onClick={history.goBack}
        >
          Back
        </button>
        <PrimaryHeader>Create new post for {user.name}</PrimaryHeader>
        <Divider />
        <form
          data-testid='form'
          className='ui form'
          onSubmit={handleSubmit(this.onSubmit)}
        >
          <div className='field'>
            <label htmlFor='title'>Title</label>
            <Field
              id='title'
              name='title'
              data-testid='title-input'
              component='input'
              placeholder='Title'
              type='text'
              required
            />
          </div>

          <div className='field'>
            <label htmlFor='body'>Content</label>
            <Field
              id='body'
              name='body'
              data-testid='content-textarea'
              component='textarea'
              required
            />
          </div>

          <button
            data-testid='submit-button'
            className='ui button primary'
            type='submit'>
            Submit
          </button>
        </form>
        { spinnerLoading && <Loader text='Saving' /> }
      </Container>
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
