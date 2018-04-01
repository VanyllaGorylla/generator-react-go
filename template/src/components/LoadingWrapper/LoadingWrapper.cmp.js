import React from 'react';
import PropTypes from 'prop-types';

const LoadingWrapper = ({ isLoading, children }) => (
  <div>
    {isLoading ? (
      <div className="progress">
        <div className="indeterminate" />
      </div>
    ) : (
      children
    )}
  </div>
);

LoadingWrapper.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.element.isRequired
};

LoadingWrapper.defaultProps = {
  isLoading: false
};

export default LoadingWrapper;
