import React from 'react';

const PostsListItem = ({ post, onDelete }) => {
	let editUrl = `/posts/edit/${post.id}`;
	return <li className="collection-item">
		{post.title}
		<div className="right">
			<a href="#"
				onClick={onDelete}
				className="right">
				<i className="material-icons" data-id={post.id}>delete</i>
			</a>
			<a href={editUrl}
				className="right">
				<i className="material-icons">edit</i>
			</a>
		</div>
	</li>;
};

export default PostsListItem;