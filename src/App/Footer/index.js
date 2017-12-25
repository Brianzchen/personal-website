import React from 'react';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '64px',
};

const Footer = () => (
  <div style={style}>
    <a
      href="https://github.com/Brianzchen/personal-website"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i>
        Source code
      </i>
    </a>
  </div>
);

export default Footer;
