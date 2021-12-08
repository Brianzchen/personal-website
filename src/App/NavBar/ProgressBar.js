import React from 'react';

import colors from '@lib/utils/colors';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    window.addEventListener('scroll', this.scroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll);
  }

  scroll = () => {
    this.forceUpdate();
  };

  render() {
    const progress = (window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100;

    const styles = {
      container: {
        position: 'absolute',
        top: '100%',
        left: 0,
        width: '100%',
        height: '4px',
      },
      bar: {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: colors.secondary,
      },
    };

    return (
      <div style={styles.container}>
        <div style={styles.bar} />
      </div>
    );
  }
}

export default ProgressBar;
