import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

import Box from './Box';
import BackgroundImage from './BackgroundImage';

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
      bg,
      ...props
    } = this.props;
    return (
      <Box pt={`${ratio * 100}%`} position="relative" {...props}>
        {bg && (
          <BackgroundImage
            top="0"
            left="0"
            right="0"
            position="absolute"
            src={bg}
            ratio={ratio}
          />
        )}
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
