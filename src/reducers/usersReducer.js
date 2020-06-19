import { FETCH_USERS } from '../actions';

export default (users = [], action) => {
  if (action.type === FETCH_USERS) {
    return action.payload;
  }
  return users;
};
