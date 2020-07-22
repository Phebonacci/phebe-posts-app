import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import App from './App';
import thunk from 'redux-thunk';
import moxios from 'moxios';

const mockUser = {
  id: 2123,
  name: 'Tony Mawk',
};
const mockHistory = {
  goBack: jest.fn(),
};

const setup = () => {
  // NOTE: cleanup is called by default when react testing library is paired with
  // a testing framework that supports afterEach, such as jest
  const initialState = {
    users: [mockUser],
    userPosts: [],
    selectedUser: mockUser,
    spinnerLoading: false,
  };

  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);
  const props = {
    history: mockHistory,
  };
  render(
    <Provider store={store}>
      <App {...props} />
    </Provider>
  );
};

beforeEach(() => {
  moxios.install();
});
afterEach(() => {
  moxios.uninstall();
})

test('clicking a user navigates to user posts', () => {
  setup();
  const element = screen.getByTestId('user-item');
  userEvent.click(element);
  expect(window.location.href).toEqual(`http://localhost/users/${mockUser.id}`);
});
