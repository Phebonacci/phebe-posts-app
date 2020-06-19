import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './index';
import * as jsonPlaceholdersAPI from '../apis/jsonPlaceholder';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchUsers', () => {
  beforeEach(() => {
    jest.spyOn(jsonPlaceholdersAPI, 'getUsers').mockImplementation(
      jest.fn().mockResolvedValue({ data: [] }),
    );
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('creates FETCH_USERS_SUCCESS when fetching users has been done', () => {
    const expectedActions = [
      { type: actions.SPINNER_LOADING, payload: true },
      { type: actions.FETCH_USERS_SUCCESS, payload: [] },
      { type: actions.SPINNER_LOADING, payload: false },
    ];
    const store = mockStore({ users: [] })

    return store.dispatch(actions.fetchUsers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
});
