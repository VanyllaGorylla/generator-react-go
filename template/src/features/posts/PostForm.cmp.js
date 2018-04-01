import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';

import LoadingWrapper from '@/components/LoadingWrapper/LoadingWrapper.cmp';

const formName = 'postForm';

const validate = values => {
  let errors = {};

  if (_.trim(values.title).length === 0) {
    errors.title = 'Enter title title';
  }

  if (_.trim(values.content).length === 0) {
    errors.content = 'Enter post content';
  }

  return errors;
};

const renderInput = field => (
  <div className="input-row">
    <label className="label">{field.label}</label>
    <input {...field.input} type="text" />
    {field.meta.touched &&
      field.meta.error && (
        <span className="error red-text">{field.meta.error}</span>
      )}
  </div>
);

const renderTextarea = field => (
  <div className="input-row">
    <label className="label">{field.label}</label>
    <textarea
      {...field.input}
      type="text"
      className="textarea materialize-textarea"
    />
    {field.meta.touched &&
      field.meta.error && (
        <span className="error red-text">{field.meta.error}</span>
      )}
  </div>
);

class PostForm extends Component {
  componentDidUpdate() {
    if (typeof window.Materialize.updateTextFields === 'function') {
      window.Materialize.updateTextFields();
    }
  }

  render() {
    let { handleSubmit, posts: { crudLoading }, editMode } = this.props;
    let title = editMode ? 'Update' : 'Create';

    return (
      <div className="posts-create">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{title}</span>
            <LoadingWrapper isLoading={crudLoading}>
              <form className="form" onSubmit={handleSubmit}>
                <Field name="id" component="input" type="hidden" />

                <div className="row">
                  <div className="input-field col s12">
                    <Field
                      name="title"
                      component={renderInput}
                      label="First Name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <Field
                      label="Content"
                      name="content"
                      component={renderTextarea}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    {!crudLoading ? (
                      <button type="submit" className="btn">
                        Submit
                      </button>
                    ) : (
                      <button type="submit" className="btn" disabled>
                        Submit
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </LoadingWrapper>
          </div>
          <div className="card-action">
            <a href="/posts">Back to list</a>
          </div>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  posts: PropTypes.shape({
    crudLoading: PropTypes.bool.isRequired
  }).isRequired,
  editMode: PropTypes.bool
};

PostForm.defaultProps = {
  editMode: false
};

const mapStateToProps = state => ({
  posts: state.posts
});

export { PostForm, formName };
export default connect(mapStateToProps)(
  reduxForm({ validate, form: formName })(PostForm)
);
