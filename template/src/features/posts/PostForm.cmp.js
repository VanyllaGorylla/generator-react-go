import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Card, Row, Col, Container } from 'react-materialize';

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

    const actions = [
      <Link key="back-to-list" to="/posts">
        Back to list
      </Link>
    ];

    return (
      <Container className="posts-create">
        <Card title={title} actions={actions}>
          <LoadingWrapper isLoading={crudLoading}>
            <form className="form" onSubmit={handleSubmit}>
              <Field name="id" component="input" type="hidden" />

              <Row>
                <Col l={12} s={12} m={12}>
                  <Field
                    name="title"
                    component={renderInput}
                    label="First Name"
                  />
                </Col>
              </Row>
              <Row>
                <Col l={12} s={12} m={12}>
                  <Field
                    label="Content"
                    name="content"
                    component={renderTextarea}
                  />
                </Col>
              </Row>
              <Row>
                <Col l={12} s={12} m={12}>
                  {!crudLoading ? (
                    <button type="submit" className="btn">
                      Submit
                    </button>
                  ) : (
                    <button type="submit" className="btn" disabled>
                      Submit
                    </button>
                  )}
                </Col>
              </Row>
            </form>
          </LoadingWrapper>
        </Card>
      </Container>
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
