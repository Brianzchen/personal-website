import React from 'react';

import Copyright from './Copyright';
import SourceCode from './SourceCode';

const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '16px',
  textAlign: 'right',
  fontSize: '12px',
  boxSizing: 'border-box',
};

const Footer = () => (
  <div style={style} className="max-width">
    <Copyright />
    <SourceCode />
  </div>
);

export default Footer;
