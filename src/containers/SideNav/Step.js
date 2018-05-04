import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Box from 'components/Box';
import Button from 'components/Button';
import Text from 'components/Text';
import SideDot from 'components/SVG/SideDot';

const size = '0.5em';

const ToolTip = styled(Box)`
  ${({ active }) => `
    opacity: ${+active};
    ${active && `
      pointer-events: none;
    `}
  `}
  transition: opacity 0.5s;
  right: 1em;
  bottom: -0.5em;
  ${({ theme }) => theme.mq.md`
    top: -3em;
    left: 50%;
    right: auto;
    bottom: auto;
    transform: translateX(-50%);
    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      bottom: -${size};
      transform: translateX(-50%);
      border-left: ${size} solid transparent;
      border-right: ${size} solid transparent;
      border-top: ${size} solid currentColor;
    }
  `}
`;

export default class Step extends PureComponent {
  state = {
    hover: false,
  }

  componentDidMount() {
    const { isSm, active } = this.props;
    if (!isSm && active) this.showTag();
  }

  componentWillReceiveProps({ active, isSm }) {
    if (!this.props.active && active && !isSm) this.showTag();
  }

  handleMouseEnter = () => this.showTag()
  handleMouseLeave = () => this.setState({ hover: false })

  showTag = () => {
    this.setState({ hover: true, hideSm: false });
  }

  render() {
    const { hover, hideSm } = this.state;
    const {
      active,
      title,
      onClick,
      isSm,
      ...props
    } = this.props;
    return (
      <Box f="0.75em" {...props}>
        <Box w={['0.75em', null, '1em']}>
          <ToolTip active={(isSm || !hideSm) && (active || hover)} w="5em" py="0.25em" bg="blue" color="blue">
            <Text f="1em" center color="white">
              {title}
            </Text>
          </ToolTip>
          <Button.icon
            onMouseEnter={this.handleMouseEnter}
            onFocus={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            onBlur={this.handleMouseLeave}
            onClick={onClick}
          >
            <SideDot color={active ? 'orange' : 'white'} />
          </Button.icon>
        </Box>
      </Box>
    );
  }
}

Step.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string,
  to: PropTypes.string,
  target: PropTypes.string,
  onSetActive: PropTypes.func,
  isSm: PropTypes.bool,
};
