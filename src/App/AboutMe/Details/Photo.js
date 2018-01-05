import React from 'react';


class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scale: 1,
    };

    window.addEventListener('scroll', this.scroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll);
  }

  scroll = () => {
    const container = this.container.getBoundingClientRect();
    const base = 1;
    const maxAdd = 0.4;
    const lowestPoint = window.innerHeight / 1.5;

    if (container.top <= 0) {
      this.setState({ scale: base });
    } else if (container.top > lowestPoint) {
      this.setState({ scale: base + maxAdd });
    } else {
      const ratio = (container.top / (lowestPoint)) * maxAdd;
      this.setState({ scale: base + ratio });
    }
  }

  render() {
    const transform = `scale(${this.state.scale})`;

    const styles = {
      container: {
        height: '128px',
        width: '128px',
        marginLeft: 'auto',
        borderRadius: '99px',
        overflow: 'hidden',
      },
      img: {
        height: '100%',
        width: '100%',
        background: 'url("public/images/profile.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        MozTransform: transform,
        WebkitTransform: transform,
        transform,
      },
    };

    return (
      <div
        ref={o => { this.container = o; }}
        style={styles.container}
      >
        <div style={styles.img} />
      </div>
    );
  }
}

export default Photo;
