import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

import Box from './Box';

const Container = styled(Box)`
  > svg {
    width: auto;
    height: 100%;
  }
`;

class EmbedSVG extends PureComponent {
  render() {
    const {
      ratio,
      src,
      ...props
    } = this.props;
    return (
      <Box pt={`${ratio * 100}%`} position="relative" {...props}>
        <Container
          is={SVG}
          src={src}
          position="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
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
