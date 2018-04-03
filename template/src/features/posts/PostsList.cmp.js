import React from 'react';
import PropTypes from 'prop-types';

import PostsListItem from './PostsListItem.cmp';

const PostsList = ({ items }) => {
  let posts = items.map(p => <PostsListItem key={p.id} post={p} />);

  return <ul className="collection">{posts}</ul>;
};

PostsList.propTypes = {
  items: PropTypes.array.isRequired
};

export default PostsList;
