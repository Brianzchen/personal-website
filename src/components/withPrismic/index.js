import React from 'react';

import { getSingle, getList } from 'lib/prismicGateway';

const withPrismic = (payload, type) => Component => (
  class extends React.Component {
    constructor(props) {
      super(props);

      const query = payload === 'single'
        ? getSingle
        : getList;

      query(type).then(res => {
        this.setState({
          ...res,
        });
      });
    }

    render() {
      return (
        <Component
          {...this.state}
          {...this.props}
        />
      );
    }
  }
);

export default withPrismic;
