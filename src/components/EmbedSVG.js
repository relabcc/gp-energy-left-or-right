import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from './Box';

const Container = styled(Box)`
  > svg {
    width: auto;
    height: 100%;
  }
`;

class EmbedSVG extends PureComponent {
  constructor(props) {
    super(props);
    this.loadSvg(props.src);
  }

  componentWillReceiveProps({ src }) {
    if (src !== this.props.src) this.loadSvg(src);
  }

  loadSvg = (src) => fetch(src)
    .then((response) => response.text()).then(this.handleOnLoad)
    .catch(console.error);

  handleOnLoad = (svgContent) => {
    if (!this.container) {
      setTimeout(() => this.handleOnLoad(svgContent), 100);
    } else {
      this.container.innerHTML = svgContent;
    }
  }

  handleRef = (ref) => {
    this.container = ref;
  }

  render() {
    const {
      ratio,
      ...props
    } = this.props;
    return (
      <Box pt={`${ratio * 100}%`} position="relative" {...props}>
        <Container
          position="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          innerRef={this.handleRef}
        />
      </Box>
    );
  }
}

EmbedSVG.propTypes = {
  ratio: PropTypes.number,
  src: PropTypes.string,
};

export default EmbedSVG;
