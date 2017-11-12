import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';

import Navigation from '../navigation/navigation.cmp.jsx';
import combinedReducers from './combinedReducers';

const store = createStore(combinedReducers, applyMiddleware(promiseMiddleware));

class MainCmp extends Component {
	constructor(props) { super(props); }

	render() {
		return (
			<Provider store={store}>
				<Navigation />
			</Provider>
		);
	}
}

export default MainCmp;
