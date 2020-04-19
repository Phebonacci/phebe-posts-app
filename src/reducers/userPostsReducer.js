import { FETCH_USER_POSTS } from "../actions";

export default (userPosts = [], action) => {
  if (action.type === FETCH_USER_POSTS) {
    return action.payload;
  }
  return userPosts;
};
