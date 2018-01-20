import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';

import Navigation from '../navigation/Navigation.cmp.jsx';
import combinedReducers from './combinedReducers';

const composeEnhancers =
	typeof window === 'object' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancers = composeEnhancers(applyMiddleware(
	thunkMiddleware,
	promiseMiddleware()
));

let store = createStore(combinedReducers, enhancers);

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
