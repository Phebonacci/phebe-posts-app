import React from 'react';

const Avatar = ({ src, alt }) => {
  return (
    <span className='ui tiny image'>
      <img alt={alt} src={src} />
    </span>
  );
};

export default Avatar;
