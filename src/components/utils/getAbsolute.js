import isUndefined from 'lodash/isUndefined';
import { css } from 'styled-components';

const undefinedOr = (a, b) => isUndefined(a) ? b : a;

export default (...args) => css`
  position: absolute;
  top: ${args[0]};
  right: ${undefinedOr(args[1], args[0])};
  bottom: ${undefinedOr(args[2], args[0])};
  left: ${undefinedOr(args[3], undefinedOr(args[1], args[0]))};
`;
