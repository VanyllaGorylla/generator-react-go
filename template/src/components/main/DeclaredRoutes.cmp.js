import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Index } from '@/features/index';
import { TodoExample } from '@/features/todo-example';
import { PostsEdit, Posts } from '@/features/posts';
import Error404Handler from '@/components/404/Error404.cmp';

const DeclaredRoutes = () => (
  <Switch>
    <Route exact path="/" component={Index} />
    <Route exact path="/todo-example" component={TodoExample} />
    <Route exact path="/posts" component={Posts} />
    <Route exact path="/posts/new" component={PostsEdit} />
    <Route exact path="/posts/edit/:id" component={PostsEdit} />
    <Route component={Error404Handler} />
  </Switch>
);

export default DeclaredRoutes;
