import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from './Box';

const ObjectContainer = styled.object`
  width: 100%;
  height: 100%;
`;

const EmbedSVG = ({ ratio, src, ...props }) => (
  <Box pt={`${ratio * 100}%`} position="relative" {...props}>
    <Box position="absolute" top="0" left="0" bottom="0" right="0">
      <ObjectContainer type="image/svg+xml" data={src} />
    </Box>
  </Box>
);

EmbedSVG.propTypes = {
  ratio: PropTypes.number,
  src: PropTypes.string,
};

export default EmbedSVG;
