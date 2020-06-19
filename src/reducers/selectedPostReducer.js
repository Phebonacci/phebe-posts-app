import { USER_POST_SELECTED } from '../actions'

export default (selectedPost = null, action) => {
  if (action.type === USER_POST_SELECTED) {
    return action.payload;
  }
  return selectedPost;
};
