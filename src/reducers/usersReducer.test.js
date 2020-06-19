import * as actions from '../actions';
import usersReducers from './usersReducer';

describe('users reducer', () => {
  const initialState = [];
  test('returns the initial state which is an empty array', () => {
    expect(usersReducers(undefined, {})).toEqual(initialState);
  });
  test('handles FETCH_USERS_SUCCESS', () => {
    const fetchedUsers = [
      { id: 2, name: 'Mo' },
      { id: 3, name: 'Larry' },
      { id: 1, name: 'Curly' },
    ]
    const actionDispatched = {
      type: actions.FETCH_USERS_SUCCESS,
      payload: fetchedUsers,
    };
    expect(usersReducers([], actionDispatched)).toEqual(fetchedUsers);
  });
});
