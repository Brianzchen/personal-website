import React from 'react';
import PropTypes from 'prop-types';

import Info from './Info';
import Photo from './Photo';

const style = {
  display: 'flex',
  alignItems: 'center',
  padding: '0 24px',
};

const Details = function (props) {
  return (
    <div style={style}>
      <Photo
        url={props.profilePicUrl}
      />
      <Info
        location={props.location}
      />
    </div>
  );
};

Details.propTypes = {
  profilePicUrl: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Details;
