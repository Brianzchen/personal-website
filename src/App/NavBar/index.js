import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import locations from 'lib/locations';

import Link from './Link';

class NavBar extends React.Component {
  componentDidMount() {
    this.props.setNavBarHeight(this.container.offsetHeight);
  }

  render() {
    const style = {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      position: 'fixed',
      padding: '0 8px',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(0, 0, 0, 0.8)', // TODO replace
    };

    return (
      <div ref={o => { this.container = o; }} style={style}>
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
  }
}

NavBar.propTypes = {
  setNavBarHeight: PropTypes.func.isRequired,
};

export default NavBar;
