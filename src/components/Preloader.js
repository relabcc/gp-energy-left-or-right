import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BackgroundImage from './BackgroundImage';

const Wrapper = styled.div`
  position: absolute;
  top: -9999px;
  left: -9999px;
  z-index: -999;
  width: 1px;
`;

class Preloader extends PureComponent {
  constructor(props) {
    super(props);
    if (typeof Image !== 'undefined') {
      Promise.all(props.images.map((src) => new Promise((resolve) => {
        const image = new Image();
        image.onload = resolve;
        image.onerror = resolve;
        image.src = src;
      }))).then(props.onLoaded);
    }
  }

  render() {
    const { images } = this.props;
    return (
      <Wrapper>
        {images && images.map((src, index) => (
          <BackgroundImage
            key={index + src}
            src={src}
          />
        ))}
      </Wrapper>
    );
  }
}

Preloader.propTypes = {
  images: PropTypes.array,
  onLoaded: PropTypes.func,
};

export default Preloader;
