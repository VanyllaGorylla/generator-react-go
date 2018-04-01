import React from 'react';
import { Link } from 'react-router-dom';

const PostsListItem = ({ post, onDelete }) => {
  const editUrl = `/posts/edit/${post.id}`;

  return (
    <li className="collection-item">
      {post.title}
      <div className="right">
        <span
          onClick={onDelete}
          className="action-element action-element__delete"
        >
          <i className="fa fa-trash" aria-hidden="true" data-id={post.id} />
        </span>
        <span className="action-element ">
          <Link to={editUrl}>
            <i className="fa fa-pencil " aria-hidden="true" />
          </Link>
        </span>
      </div>
    </li>
  );
};

export default PostsListItem;
