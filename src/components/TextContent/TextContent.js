import React from 'react';

const TextContent = ({ children }) => {
  return (
    <div className='description'>
      <p>{children}</p>
    </div>
  );
};

export default TextContent;
