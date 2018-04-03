import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Card, Row, Col } from 'react-materialize';
import PropTypes from 'prop-types';

import LoadingWrapper from '@/components/LoadingWrapper/LoadingWrapper.cmp';
import { getPosts } from './posts.actions';
import PostsList from './PostsList.cmp';

import wrapWithData from './hocs/wrapWithData.hoc';

const PostsCmp = ({ dataLoading, data, loadingError }) => {
  const actions = [
    <Link key="new" to="/posts/new">
      Create new
    </Link>
  ];

  return (
    <Container>
      <Card title="Posts" actions={actions}>
        <Row>
          <Col l={12} s={12} m={12}>
            <LoadingWrapper isLoading={dataLoading} error={loadingError}>
              <PostsList items={data} />
            </LoadingWrapper>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

PostsCmp.propTypes = {
  dataLoading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  data: state.posts.data,
  dataLoading: state.posts.dataLoading,
  loadingError: state.posts.error
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getPosts())
});

export { PostsCmp };
export default connect(mapStateToProps, mapDispatchToProps)(
  wrapWithData(PostsCmp)
);
