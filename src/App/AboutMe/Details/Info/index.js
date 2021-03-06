import React from 'react';
import PropTypes from 'prop-types';

import Details from './Detail';

const getAge = () => {
  const bday = new Date(1993, 7, 28);
  const now = new Date();

  const difference = now.getTime() - bday.getTime();

  return parseInt(difference / 3.154e+10, 10);
};

const style = {
  marginLeft: '32px',
  marginRight: 'auto',
};

const Info = (props) => (
  <div style={style}>
    <Details name="Age" value={getAge()} />
    <Details name="Location" value={props.location} />
  </div>
);

Info.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Info;
