import React from 'react';
import { map } from 'lodash';

import locations from 'lib/locations';

import Link from './Link';

const style = {
  display: 'flex',
  alignItems: 'center',
  position: 'fixed',
  padding: '0 8px',
  top: 0,
  left: 0,
  right: 0,
  background: 'rgba(0, 0, 0, 0.8)', // TODO replace
};

const NavBar = () => (
  <div style={style}>
    {
      map(
        locations,
        ({ name, link }) => (
          <Link key={link} name={name} link={link} />
        ),
      )
    }
  </div>
);

export default NavBar;
