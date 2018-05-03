import styled from 'styled-components';
import Box from '../../Box';

import grain from './grain-pattern.svg';

export default styled(Box)`
  background-image: url(${grain});
  background-size: 236px 356px;
  background-repeat: repeat;
  background-position: 50% 50%;
  pointer-events: none;
`;
