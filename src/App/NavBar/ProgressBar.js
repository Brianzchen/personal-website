import React from 'react';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
    };

    window.addEventListener('scroll', this.scroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll);
  }

  scroll = () => {
    this.setState({
      progress: (window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100,
    });
  }

  render() {
    const styles = {
      container: {
        position: 'absolute',
        top: '100%',
        left: 0,
        width: '100%',
        height: '12px',
      },
      bar: {
        height: '100%',
        width: `${this.state.progress}%`,
        backgroundColor: 'black',
      },
    };

    return (
      <div style={styles.container}>
        <div style={styles.bar} />
      </div>
    );
  };
}

export default ProgressBar;
