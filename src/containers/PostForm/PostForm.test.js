import React from 'react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';

import PostForm from './PostForm';

expect.extend({ toBeInTheDocument });

const mockUser = {
  id: 1,
  name: 'Tony Mawk',
};
const mockHistory = {
  goBack: jest.fn(),
};

const setup = (customProps = {}, customState = {}) => {
  const initialState = {
    selectedUser: mockUser,
    spinnerLoading: false,
    ...customState,
  };

  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);
  const props = {
    history: mockHistory,
  };
  render(
    <Provider store={store}>
        <PostForm { ...props } { ...customProps } />
    </Provider>
  );
};

describe('rendering', () => {
  test('renders without an error', () => {
    setup();
    const element = screen.queryByTestId('component-post-form');
    expect(element).toBeInTheDocument();
  });
  test('renders back button', () => {
    setup();
    const element = screen.queryByTestId('back-button');
    expect(element).toBeInTheDocument();
  });
  test('renders primary header with the user name', () => {
    setup();
    const element = screen.getByText(`Create new post for ${mockUser.name}`);
    expect(element).toBeInTheDocument();
  });
  test('renders the form', () => {
    setup();
    const element = screen.queryByTestId('form');
    expect(element).toBeInTheDocument();
  });
  test('renders the Title input field', () => {
    setup();
    const element = screen.queryByTestId('title-input');
    expect(element).toBeInTheDocument();
  });
  test('renders the Content textarea field', () => {
    setup();
    const element = screen.queryByTestId('content-textarea');
    expect(element).toBeInTheDocument();
  });
  test('renders the submit button', () => {
    setup();
    const element = screen.queryByTestId('submit-button');
    expect(element).toBeInTheDocument();
  });
  test('renders the loader when spinnerLoading is true', () => {
    setup({}, { spinnerLoading: true });
    const element = screen.queryByTestId('loader');
    expect(element).toBeInTheDocument();
  });
  test('does not render the loader when spinnerLoading is false', () => {
    setup();
    const element = screen.queryByTestId('loader');
    expect(element).not.toBeInTheDocument();
  });
});

describe('user actions', () => {
  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });
  test('clicking back button calls history.goBack', () => {
    setup();
    const element = screen.getByTestId('back-button');
    userEvent.click(element);
    expect(mockHistory.goBack).toHaveBeenCalledTimes(1);
  });
});
