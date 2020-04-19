import React from 'react';
import PropTypes from 'prop-types';
import './List.css';

const List = (props) => {
  const activeLoaderClassName = props.isLoading ? 'active' : '';
  return (
    <div className="ui container list">
      <div className={`ui ${activeLoaderClassName} inverted dimmer`}>
        <div className="ui text loader">Loading</div>
      </div>
      <div className="ui divided items comments">
        { props.children }
      </div>
    </div>
  );
};

List.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node,
};

export default List;
