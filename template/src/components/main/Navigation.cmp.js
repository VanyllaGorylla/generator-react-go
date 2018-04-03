import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo ">
        <%= appName %>
      </Link>
      <ul className="right hide-on-med-and-down">
        <li>
          <Link to="/">Index</Link>
        </li>
        <li>
          <Link to="/todo-example">Todo Example</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
