import React from 'react';

import PostsListItem from './PostsListItem.cmp.jsx';

const PostsList = ({ items, onDeletePostClick }) => {
	let posts = items.map(p => (
		<PostsListItem
			key={p.id}
			post={p}
			onDelete={onDeletePostClick} />));

	return <ul className="collection">{posts}</ul>;
};

export default PostsList;
