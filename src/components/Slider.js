import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import {
  color,
  themeGet,
} from 'styled-system';

import Box from './Box';
import Flex from './Flex';
import Text from './Text';
import Button from './Button';
import nativeInputValueSetter from './utils/nativeInputValueSetter';

const thumb = css`
  width: 1.25em;
  height: 1.25em;
  border-radius: 50%;
  background: ${themeGet('colors.cyan')};
  cursor: pointer;
`;

const RangeInput = styled.input.attrs({ type: 'range' })`
  appearance: none;
  width: 100%;
  ${color}
  outline: none;
  height: 2px;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    ${thumb}
  }
  &::-moz-range-thumb {
    ${thumb}
  }
`;

const LabelButton = (props) => (
  <Button
    bg="transparent"
    color="input.main"
    border="none"
    hoverColor="input.main"
    f="1em"
    px="0.25em"
    type="button"
    {...props}
  />
);

class Slider extends PureComponent {
  onEdgeClick = (edge) => () => {
    const value = this.props[edge];
    nativeInputValueSetter.call(this.input, value);
    this.input.dispatchEvent(new Event('input', { bubbles: true }));
  }

  inputSetter = (ref) => {
    this.input = ref;
  }

  render() {
    const {
      value,
      error,
      min,
      max,
      name,
      onChange,
      onBlur,
      label,
      minLabel,
      maxLabel,
      ...props
    } = this.props;

    return (
      <Box {...props}>
        <Text px="0.25rem" f="0.8em" lineHeight="2rem" color="input.main">{label}</Text>
        <Flex px="0.25em" mt="0.25em" align="center">
          <LabelButton onClick={this.onEdgeClick('min')}>{minLabel}</LabelButton>
          <Box flex={1} px="0.5em" pb="0.5em">
            <RangeInput
              innerRef={this.inputSetter}
              bg="input.main"
              min={min}
              max={max}
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
          </Box>
          <LabelButton onClick={this.onEdgeClick('max')}>{maxLabel}</LabelButton>
        </Flex>
        {error && (
          <Text f="0.8em" pt="0.25em" color="input.error">{error}</Text>
        )}
      </Box>
    );
  }
}


Slider.propTypes = {
  value: PropTypes.number,
  error: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  label: PropTypes.string,
  minLabel: PropTypes.string,
  maxLabel: PropTypes.string,
};

Slider.defaultProps = {
  min: 0,
  max: 100,
};

export default Slider;
