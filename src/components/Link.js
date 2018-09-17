import React from 'react';
import styled from 'styled-components';
import {
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color,
  letterSpacing,
} from 'styled-system';
import tag from 'clean-tag';
import GatsbyLink from 'gatsby-link';

import blacklist from './utils/blacklist';
import { getColorByPropKey } from './utils/getColor';

const LinkBase = styled(tag.a)`
  ${fontSize}
  ${space}
  ${color}
  ${fontWeight}
  ${lineHeight}
  ${letterSpacing}
  text-decoration: none;
  &:hover {
    color: ${getColorByPropKey('hoverColor')};
    text-decoration: underline;
  }
`;

const Link = ({ to, ...props }) => {
  if (to) {
    return <LinkBase is={GatsbyLink} to={to} {...props} />;
  }
  return <LinkBase target="_blank" {...props} />
};

Link.defaultProps = {
  blacklist,
  color: 'primary',
  hoverColor: 'primary',
  fontWeight: 'bold',
};

export default Link;
