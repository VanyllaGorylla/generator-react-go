import React from 'react'


const LoadingWrapper = ({ isLoading, children }) => (
	<div>
		{isLoading ? <div className="progress">
			<div className="indeterminate"></div>
		</div> : children}
	</div>);

LoadingWrapper.defaultProps = {
	isLoading: false
};

export default LoadingWrapper;
