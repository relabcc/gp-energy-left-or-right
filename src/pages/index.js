import React, { PureComponent } from 'react';
import { Fullpage, Slide } from 'fullpage-react';

import withHeader from '../hoc/withHeader';

import Title from '../components/Title';
import Box from '../components/Box';
import Intro from '../containers/Intro';
import Cost from '../containers/Cost';
import System from '../containers/System';
import People from '../containers/People';
import Why from '../containers/Why';
import Potential from '../containers/Potential';
import SideNav from '../containers/SideNav';

import { titles } from '../text';

const { changeFullpageSlide } = Fullpage;

const Sections = [
  Intro,
  Cost,
  System,
  People,
  Why,
  Potential,
];

class Index extends PureComponent {
  state = {
    active: 0,
  }

  onChangeStart = () => {
    this.setState({ animating: true });
  }

  onChangeEnd = (name, props, state, nextState) => {
    this.setState({ active: nextState.activeSlide, animating: false });
  }

  render() {
    const { active, animating } = this.state;
    const title = titles[active];
    return (
      <Box position="relatvie" height="100vh" {...this.props}>
        <Fullpage
          scrollSensitivity={20}
          onSlideChangeStart={this.onChangeStart}
          onSlideChangeEnd={this.onChangeEnd}
          slides={Sections.map((Content, index) => (
            <Slide key={index}>
              <Content active={index === active} title={titles[index]} animating={animating} />
            </Slide>
          ))}
        />
        <SideNav
          active={active}
          onSetActive={changeFullpageSlide}
        />
        <Title active={!animating}>
          {title}
        </Title>
      </Box>
    );
  }
}

export default withHeader(Index);
