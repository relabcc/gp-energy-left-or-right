import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { themeGet } from 'styled-system';

import getAbsolute from './utils/getAbsolute';
import Box from './Box';

const Input = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const LabelBox = styled(Box.inline)`
  cursor: pointer;
  padding-left: 1.5em;
  position: relative;
  .checkmark {
    ${getAbsolute(0, null, 0, 0)}
    margin: auto;
    height: 1em;
    width: 1em;
    box-sizing: border-box;
    border: 1.5px solid ${(props) => themeGet(`colors.${props.borderColor}`, props.borderColor)(props)};
    &::after {
      opacity: 0;
      content: "";
      display: block;
      ${getAbsolute('-1px')}
      background-color: ${themeGet('colors.input.active')};
    }

  }
  input:checked + .checkmark {
    border-color: ${themeGet('colors.input.active')};
    &::after {
      opacity: 1;
    }
  }
`;

function Checkbox({
  children,
  value,
  onChange,
  borderColor,
  name,
  checked,
  ...props
}) {
  return (
    <LabelBox borderColor={borderColor} is="label" {...props}>
      <Input name={name} onChange={onChange} value={value} checked={checked} />
      <span className="checkmark" />
      {children}
    </LabelBox>
  );
}

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
  borderColor: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
};

Checkbox.defaultProps = {
  borderColor: 'input.main',
};

export default Checkbox;

