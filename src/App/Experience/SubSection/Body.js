import React from 'react';
import PropTypes from 'prop-types';

import Text from 'components/Text';

const Body = (props) => (
  <Text>
    {props.value}
  </Text>
);

Body.propTypes = {
  value: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Body;
