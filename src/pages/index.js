import React, { PureComponent } from 'react';

import { FullPage, Slide } from '../vendor/FullPage';
import withHeader from '../hoc/withHeader';

import Title from '../components/Title';
import Box from '../components/Box';
import Intro from '../containers/Intro';
import Cost from '../containers/Cost';
import System from '../containers/System';
import People from '../containers/People';
import Why from '../containers/Why';
import Potential from '../containers/Potential';
import Actions from '../containers/Actions';
import SideNav from '../containers/SideNav';

import { titles } from '../text';

const Sections = [
  Intro,
  Cost,
  System,
  People,
  Why,
  Potential,
  Actions,
];

const last = Sections.length - 1;

class Index extends PureComponent {
  state = {
    active: 0,
  }

  onChangeStart = (slider) => {
    if (this.state.active === last && slider.from > slider.to) return true;
    this.setState({ animating: true });
  }

  onChangeEnd = (slider) => {
    this.setState({ active: slider.to, animating: false });
  }

  render() {
    const { active, animating } = this.state;
    const title = titles[active];
    return (
      <Box position="relative" height="100vh" zIndex={0} {...this.props}>
        <FullPage
          beforeChange={this.onChangeStart}
          afterChange={this.onChangeEnd}
          controls={SideNav}
        >
          {Sections.map((Content, index) => (
            <Slide key={index}>
              <Content active={index === active} title={titles[index]} animating={animating} />
            </Slide>
          ))}
        </FullPage>

        <Title active={!animating}>
          {title}
        </Title>
      </Box>
    );
  }
}

export default withHeader(Index);
