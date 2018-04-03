import React, { Component } from 'react';
import { connect } from 'react-redux';
import { change } from 'redux-form';
import _ from 'lodash';
import { toast } from 'react-toastify';
import { Container } from 'react-materialize';

import PostForm, { formName } from './PostForm.cmp';
import { createPosts, getPostById, updatePost } from './posts.actions';

class PostEditCmp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: !_.isNil(this.props.match.params.id)
    };
  }

  componentDidMount() {
    if (this.state.editMode) {
      this.props.getPostById(+this.props.match.params.id).then(
        response => {
          let { id, title, content } = response.value.data;
          this.props.changeFormValue('id', id);
          this.props.changeFormValue('title', title);
          this.props.changeFormValue('content', content);
        },
        e => {
          toast.error(e.toString());
          this.props.history.push('/posts');
          toast.error('An error has occured.');
        }
      );
    }
  }

  handleSubmit = formValues => {
    let operation = this.state.editMode
      ? this.props.updatePost
      : this.props.createPosts;
    operation(formValues).then(() => {
      this.props.history.push('/posts');
    });
  };

  render() {
    let editMode = this.state.editMode;
    return (
      <Container>
        <PostForm editMode={editMode} onSubmit={this.handleSubmit} />
      </Container>
    );
  }
}

const mapDispatchToPros = dispatch => ({
  createPosts: ({ title, content }) =>
    dispatch(createPosts({ title, content })),
  getPostById: id => dispatch(getPostById(id)),
  updatePost: post => dispatch(updatePost(post)),
  changeFormValue: (field, value) => dispatch(change(formName, field, value))
});

export { PostEditCmp };
export default connect(null, mapDispatchToPros)(PostEditCmp);
