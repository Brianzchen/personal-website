import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import hexRgb from 'hex-rgb';

import colors from 'lib/colors';
import locations from 'lib/locations';

import Link from './Link';
import ProgressBar from './ProgressBar';

const hexArray = hexRgb(colors.primary);

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
      background: `rgba(${hexArray[0]}, ${hexArray[1]}, ${hexArray[2]}, 0.8)`,
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
        <ProgressBar />
      </div>
    );
  }
}

NavBar.propTypes = {
  setNavBarHeight: PropTypes.func.isRequired,
};

export default NavBar;
