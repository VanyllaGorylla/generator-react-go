import React, { Component } from 'react';

const wrapWithData = Cmp => {
  return class Wrapper extends Component {
    componentDidMount() {
      this.props.getData();
    }

    render() {
      return <Cmp {...this.props} />;
    }
  };
};

export default wrapWithData;
