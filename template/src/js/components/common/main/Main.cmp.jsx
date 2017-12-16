import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';

import Navigation from '../navigation/Navigation.cmp.jsx';
import combinedReducers from './combinedReducers';

const store = createStore(
	combinedReducers,
	applyMiddleware(
		thunkMiddleware,
		promiseMiddleware()
	)
);

class MainCmp extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Provider store={store}>
				<Navigation />
			</Provider>
		);
	}
}

export { MainCmp };
export default MainCmp;
