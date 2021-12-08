import React from 'react';
import PropTypes from 'prop-types';

const Detail = function (props) {
  return (
    <div>
      <strong>
        {props.name}
      </strong>
      <p>
        {props.value}
      </p>
    </div>
  );
};

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Detail;
