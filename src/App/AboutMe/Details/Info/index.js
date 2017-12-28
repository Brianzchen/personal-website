import React from 'react';

import Details from './Detail';

const getAge = () => {
  const bday = new Date(1993, 7, 28);
  const now = new Date();

  const difference = now.getTime() - bday.getTime();

  return parseInt(difference / 3.154e+10, 10);
};

const style = {
  marginLeft: '64px',
};

const Info = () => (
  <div style={style}>
    <Details name="Age" value={getAge()} />
    <Details name="Location" value="Auckland, NZ" />
  </div>
);

export default Info;
