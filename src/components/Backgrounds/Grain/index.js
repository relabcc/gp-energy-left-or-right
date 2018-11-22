import styled from 'styled-components';
import Box from '../../Box';

import grain from './grain-pattern.svg';

export default styled(Box)`
  background-image: url(${grain});
  background-size: 236px 356px;
  background-repeat: repeat;
  background-position: 50% 50%;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
