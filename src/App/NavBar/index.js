import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { get, map } from 'lodash';

import { boxShadow } from 'css';

import colors from 'lib/colors';
import locations from 'lib/locations';

import Link from './Link';
import ProgressBar from './ProgressBar';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolledPastTop: false,
      hideNavBar: false,
    };

    this.scrollPos = 0;
    window.addEventListener('scroll', this.scroll);
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

    if (window.scrollY > 0 && !this.state.scrolledPastTop) {
      this.setState({ scrolledPastTop: true });
    } else if (window.scrollY === 0) {
      this.setState({ scrolledPastTop: false });
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

    const styles = StyleSheet.create({
      container: {
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
      },
    });

    return (
      <div
        ref={o => { this.container = o; }}
        className={
          `float-in ${css(styles.container, this.state.scrolledPastTop && boxShadow)}`
        }
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

export default NavBar;
