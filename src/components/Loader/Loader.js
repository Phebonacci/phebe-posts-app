import React from 'react';

const Loader = ({ text = 'Loading' }) => {
  return (
    <div
      data-testid='loader'
      className={`ui active inverted dimmer`}>
      <div className='ui text loader'>{text}</div>
    </div>
  );
};

export default Loader;
