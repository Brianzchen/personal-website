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

    if (container.y > window.innerHeight / 2) {
      this.setState({ scale: 1.4 });
    } else {
      this.setState({ scale: 1 });
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
        background: 'url("public/images/test.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        MozTransition: 'transform 0.3s',
        WebkitTransition: 'transform 0.3s',
        transition: 'transform 0.3s',
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
