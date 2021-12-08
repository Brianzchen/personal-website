import React from 'react';
import PropTypes from 'prop-types';

import Text from '@lib/components/Text';

const Body = function (props) {
  return (
    <Text>
      {props.value}
    </Text>
  );
};

Body.propTypes = {
  value: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Body;
