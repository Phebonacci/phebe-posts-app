import { USER_SELECTED } from '../actions'

export default (selectedUser = null, action) => {
  if (action.type === USER_SELECTED) {
    return action.payload;
  }
  return selectedUser;
};
