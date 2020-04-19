import { FETCH_POST_COMMENTS } from '../actions';

export default (selectedPostComments = [], action) => {
  if (action.type === FETCH_POST_COMMENTS) {
    return action.payload;
  }
  return selectedPostComments;
};
