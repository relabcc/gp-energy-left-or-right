import {
  border,
  borderColor,
  borderWidth,
  borderBottom,
  borderLeft,
  borderRight,
  borderTop,
  borderRadius,
} from 'styled-system';
import styled from 'styled-components';

import Box from './Box';

export default styled(Box)`
  ${border}
  ${borderWidth}
  ${borderBottom}
  ${borderLeft}
  ${borderRight}
  ${borderTop}
  ${borderRadius}
  ${borderColor}
`;
