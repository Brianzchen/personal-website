import React from 'react';

const year = new Date().getFullYear();

const Copyright = () => (
  <div>
    Brian Chen
    {' '}
    <i className="mdi mdi-copyright" />
    {' '}
    {year}
  </div>
);

export default Copyright;
