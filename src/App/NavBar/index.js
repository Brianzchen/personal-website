import React from 'react';
import PropTypes from 'prop-types';
import { get, map } from 'lodash';

import colors from 'lib/colors';
import locations from 'lib/locations';

import Link from './Link';
import ProgressBar from './ProgressBar';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false,
      hideNavBar: false,
    };

    this.scrollPos = 0;
    window.addEventListener('scroll', this.scroll);
  }

  componentDidMount() {
    this.props.setNavBarHeight(this.container.offsetHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll);
  }

  scroll = () => {
    const scrollPos = document.documentElement.scrollTop;
    this.setState({
      hideNavBar: this.scrollPos < scrollPos,
    });
    this.scrollPos = scrollPos;

    if (window.scrollY > 0 && !this.state.scrolled) {
      this.setState({ scrolled: true });
    } else if (window.scrollY === 0) {
      this.setState({ scrolled: false });
    }
  }

  render() {
    const top = this.state.hideNavBar ? `-${get(this.container, 'offsetHeight', 0)}px` : 0;

    const floatInKeyFrame = {
      '0%': {
        top: '-100%',
      },
      '100%': {
        top,
      },
    };

    const style = {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      position: 'fixed',
      padding: '0 8px',
      top,
      left: 0,
      right: 0,
      background: colors.primary,
      zIndex: 1500,
      animationName: [floatInKeyFrame],
      animationDuration: '1s',
      animationTimingFunction: 'ease-out',
      animationDelay: '0.2s',
      animationFillMode: 'both',
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
              <Link key={link} name={name} link={link} /> // eslint-disable-line
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
