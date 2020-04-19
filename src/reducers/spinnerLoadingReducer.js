import { SPINNER_LOADING } from "../actions"


export default (spinnerLoading = false, action) => {
  if (action.type === SPINNER_LOADING) {
    return action.payload;
  }
  return spinnerLoading;
};
