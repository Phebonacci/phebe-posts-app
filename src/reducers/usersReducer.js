import { FETCH_USERS_SUCCESS } from '../actions';

export default (users = [], action) => {
  if (action.type === FETCH_USERS_SUCCESS) {
    return action.payload;
  }
  return users;
};
