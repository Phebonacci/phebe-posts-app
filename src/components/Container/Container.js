import React from 'react';
import './Container.css';

const Container = ({ children, testId, theme = '' }) => {
  const classNames = `ui container ${theme}`.trim();
  return <div data-testid={testId} className={classNames}>{children}</div>;
};

export default Container;
