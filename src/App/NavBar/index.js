import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import colors from 'lib/colors';
import locations from 'lib/locations';

import Link from './Link';
import ProgressBar from './ProgressBar';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false,
    };

    window.addEventListener('scroll', this.scroll);
  }

  componentDidMount() {
    this.props.setNavBarHeight(this.container.offsetHeight);
  }

  scroll = () => {
    if (window.scrollY > 0 && !this.state.scrolled) {
      this.setState({ scrolled: true });
    } else if (window.scrollY === 0) {
      this.setState({ scrolled: false });
    }
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
      background: colors.primary,
      zIndex: 1500,
    };

    return (
      <div
        ref={o => { this.container = o; }}
        style={style}
        className={`float-in ${this.state.scrolled ? 'box-shadow' : ''}`}
      >
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
