import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';


import Index from '../../../components/features/index/index.cmp.jsx';
import TodoExample from '../../../components/features/todo-example/todoExample.cmp.jsx';
import Posts from '../../../components/features/posts/posts.cmp.jsx';

const Navigation = () => <Router>
	<div>
		<nav>
			<div className="nav-wrapper">
				<a href="/" className="brand-logo "><%= appName %></a>
				<ul className="right hide-on-med-and-down">
					<li><Link to="/">Index</Link></li>
					<li><Link to="/todo-example">Todo Example</Link></li>
					<li><Link to="/posts">Posts</Link></li>
				</ul>
			</div>
		</nav>
		<div className="container">
			<Route exact path="/" component={Index} />
			<Route exact path="/todo-example" component={TodoExample} />
			<Route exact path="/posts" component={Posts} />
		</div>
	</div>
</Router>;

export default Navigation;
