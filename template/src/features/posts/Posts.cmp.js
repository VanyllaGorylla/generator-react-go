import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoadingWrapper from '@/components/LoadingWrapper/LoadingWrapper.cmp';
import { getPosts, deletePost, updatePost } from './posts.actions';
import PostsList from './PostsList.cmp';

class PostsCmp extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onDeletePostClick = this.onDeletePostClick.bind(this);
  }

  componentDidMount() {
    this.props.getPosts();
  }

  onDeletePostClick(e) {
    e.preventDefault();
    this.props.deletePost(parseInt(e.target.getAttribute('data-id'), 0));
  }

  render() {
    let { data, dataLoading } = this.props.posts;

    return (
      <div className="container">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Posts</span>
            <LoadingWrapper isLoading={dataLoading}>
              <PostsList
                items={data}
                onDeletePostClick={this.onDeletePostClick}
              />
            </LoadingWrapper>
            <div className="card-action">
              <a href="/posts/new">Create new</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts()),
  deletePost: id => dispatch(deletePost(id)),
  updatePost: post => dispatch(updatePost(post))
});

export { PostsCmp };
export default connect(mapStateToProps, mapDispatchToProps)(PostsCmp);
