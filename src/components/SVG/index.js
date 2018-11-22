import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from '../Box';

const Container = styled(Box)`
  svg {
    width: 100%;
    ${({ height }) => height && `
      height: 100%;
      width: auto;
    `}
  }
`;

const SVG = ({ viewBox, children, ...props }) => {
  // const dimension = /0 0 (\d+(\.\d+)?) (\d+(\.\d+)?)/.exec(viewBox);
  // const width = parseFloat(dimension[1]);
  // const height = parseFloat(dimension[3]);
  return (
    <Container {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        // width={width}
        // height={height}
      >
        {children}
      </svg>
    </Container>
  );
}

SVG.propTypes = {
  viewBox: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SVG;
