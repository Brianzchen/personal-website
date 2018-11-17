import React from 'react';
import PropTypes from 'prop-types';

import Info from './Info';
import Photo from './Photo';

const style = {
  display: 'flex',
  alignItems: 'center',
  padding: '0 24px',
};

const Details = props => (
  <div style={style}>
    <Photo
      url={props.profilePicUrl}
    />
    <Info />
  </div>
);

Details.propTypes = {
  profilePicUrl: PropTypes.string.isRequired,
};

export default Details;
