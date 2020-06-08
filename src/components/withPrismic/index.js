import React from 'react';

import { getSingle, getList } from 'lib/prismicGateway';

const withPrismic = (payload, type) => (Component) => (
  class extends React.Component {
    constructor(props) {
      super(props);

      const isSingle = payload === 'single';

      const query = isSingle
        ? getSingle
        : getList;

      query(type).then((res) => {
        this.setState(
          isSingle
            ? {
              ...res,
            }
            : {
              list: res,
            },
        );
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
