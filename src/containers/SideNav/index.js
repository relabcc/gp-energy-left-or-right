import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Box from '../../components/Box';
import Step from './Step';

const navs = [

];

class SideNav extends PureComponent {
  static propTypes = {
    isSm: PropTypes.bool,
  }

  state = {
    active: 0,
  }

  handleActive = (active) => {
    this.setState({ active });
  }

  render() {
    const { active } = this.state;
    return (
      <Box position="fixed" top="50%" right="0" transform="translateY(-50%)" pr={['10px', null, '2.5em']} z={100}>
        {navs.map(({ name, to, target }, index) => (
          <Step
            key={name}
            to={to}
            active={index === active}
            first={!index}
            name={name}
            target={target}
            onSetActive={() => this.handleActive(index)}
            isSm={this.props.isSm}
          />
        ))}
      </Box>
    );
  }
}

export default (SideNav);
