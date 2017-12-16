import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Index from '../../../components/features/index/Index.cmp.jsx';
import TodoExample from '../../../components/features/todo-example/TodoExample.cmp.jsx';
import Posts from '../../../components/features/posts/Posts.cmp.jsx';
import PostsEdit from '../../../components/features/posts/PostsEdit.cmp.jsx';
import Error404Handler from '../404/Error404.cmp.jsx';

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
			<ToastContainer />
			<Switch>
				<Route exact path="/" component={Index} />
				<Route exact path="/todo-example" component={TodoExample} />
				<Route exact path="/posts" component={Posts} />
				<Route exact path="/posts/new" component={PostsEdit} />
				<Route exact path="/posts/edit/:id" component={PostsEdit} />
				<Route component={Error404Handler} />
			</Switch>
		</div>
	</div>
</Router>;

export default Navigation;
