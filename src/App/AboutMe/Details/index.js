import React from 'react';

import Info from './Info';
import Photo from './Photo';

const style = {
  display: 'flex',
  alignItems: 'center',
  padding: '0 24px',
};

const Details = () => (
  <div style={style}>
    <Photo />
    <Info />
  </div>
);

export default Details;
