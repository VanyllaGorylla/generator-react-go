import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { deletePost } from './posts.actions';

class PostsListItem extends Component {
  onDelete = e => {
    e.preventDefault();
    this.props.deletePost(parseInt(e.target.getAttribute('data-id'), 0));
  };

  render() {
    const { post } = this.props;
    const editUrl = `/posts/edit/${post.id}`;

    return (
      <li className="collection-item">
        {post.title}
        <div className="right">
          <span
            onClick={this.onDelete}
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
  }
}

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(deletePost(id))
});

export { PostsListItem };
export default connect(null, mapDispatchToProps)(PostsListItem);
