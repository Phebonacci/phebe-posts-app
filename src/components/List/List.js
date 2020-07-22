import React from 'react';
import PropTypes from 'prop-types';
import './List.css';
import Container from '../Container/Container';
import Loader from '../Loader/Loader';

const List = ({ children, isLoading }) => {
  return (
    <Container theme='list'>
      { isLoading && <Loader /> }
      <div className='ui divided items comments'>
        { children }
      </div>
    </Container>
  );
};

List.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node,
};

export default List;
