import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const LoadingWrapper = ({ isLoading, children, error }) => {
  let result;

  if (isLoading) {
    result = (
      <div className="progress">
        <div className="indeterminate" />
      </div>
    );
  } else if (!_.isNil(error)) {
    result = <span className="red">Loading Error {error.toString()}</span>;
  } else {
    result = children;
  }
  return result;
};

LoadingWrapper.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.element.isRequired,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
};

LoadingWrapper.defaultProps = {
  isLoading: false,
  error: null
};

export default LoadingWrapper;
