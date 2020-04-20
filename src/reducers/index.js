import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import usersReducer from './usersReducer';
import userPosts from './userPostsReducer';
import selectedUserReducer from './selectedUserReducer';
import selectedPostReducer from './selectedPostReducer';
import spinnerReducer from './spinnerLoadingReducer';
import selectedPostCommentsReducer from './selectedPostCommentsReducer';

export default combineReducers({
  users: usersReducer,
  userPosts: userPosts,
  selectedUser: selectedUserReducer,
  selectedPost: selectedPostReducer,
  selectedPostComments: selectedPostCommentsReducer,
  spinnerLoading: spinnerReducer,
  form: formReducer,
});
