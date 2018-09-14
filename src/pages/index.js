import React, { PureComponent, createElement } from 'react';
import { compose } from 'redux';
import { withContentRect } from 'react-measure';
import TWEEN from '@tweenjs/tween.js';

import { FullPage, Slide } from '../vendor/FullPage';
import withHeader from '../hoc/withHeader';
import withResponsive from '../hoc/withResponsive';
import withConnect from '../containers/DualBg/withConnect';

import Title from '../components/Title';
import StepPreloader from '../components/StepPreloader';
// import Text from '../components/Text';
// import Flex from '../components/Flex';
import Box from '../components/Box';

import Intro from '../containers/Sections/Intro';
import Cost from '../containers/Sections/Cost';
import System from '../containers/Sections/System';
import People from '../containers/Sections/People';
import Why from '../containers/Sections/Why';
import Potential from '../containers/Sections/Potential';
import Actions from '../containers/Sections/Actions';
import SideNav from '../containers/SideNav';
// import RatioToggle from '../containers/RatioToggle';

import { titles } from '../text';
import preload from '../preload';
import sections from '../sections';

const Sections = {
  Intro,
  Cost,
  System,
  People,
  Why,
  Potential,
  Actions,
};

const last = sections.length - 1;
const isServer = typeof window === 'undefined';

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
}

class Index extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
      isDesktop: !isServer && window.innerWidth > props.browser.breakpoints.sm,
    }
  }

  componentDidMount() {
    this.props.measure();
  }

  componentWillReceiveProps({ inited }) {
    this.setState({
      allInited: inited && inited.every(Boolean),
    });
  }

  onChangeStart = (slider) => {
    if (this.state.active === last && slider.from > slider.to) return true;
    this.setState({ animating: true });
  }

  onChangeEnd = (slider) => {
    this.setState({ active: slider.to, animating: false });
  }

  playIntro = () => {
    const tween = new TWEEN.Tween({ ratio: 1 })
    tween
      .to({ ratio: [0.5, 0, 0.5] }, 2000)
      .delay(1000)
      .onUpdate(({ ratio }) => this.props.updateRatio(ratio))
      .onComplete(this.props.introPlayFinished)
      .start();

    animate();
  }

  handleFirstLoaded = () => {
    this.setState({ firstLoaded: true });

    this.props.playIntro();
    this.playIntro();
  }

  handleLoaded = (index) => {
    this.props.setInited(index);
  }

  render() {
    const {
      measure,
      measureRef,
      contentRect: { bounds: { width } },
      browser,
      setInited,
      inited,
      dispatch,
      ratioSync,
      updateRatio,
      toggleSyncRatio,
      showHint,
      firstDragged,
      introPlayed,
      introPlayRequested,
      playIntro,
      introPlayFinished,
      right,
      left,
      ...props,
    } = this.props;
    const { active, animating, isDesktop, firstLoaded } = this.state;
    const title = titles[active];
    return (
      <Box position="relative" height="100vh" zIndex={0} innerRef={measureRef} {...props}>
        <Box height="100%" opacity={Number(firstLoaded)} transition="opacity 0.5s">
          <FullPage
            beforeChange={this.onChangeStart}
            afterChange={this.onChangeEnd}
            controls={SideNav}
            duration={1500}
          >
            {sections.map((key, index) => (
              <Slide key={key}>
                {inited && inited.get(index) ? createElement(Sections[key], {
                  active: index === active,
                  animating,
                  windowWidth: width,
                  isMobile: browser.lessThan.md,
                }) : <Box height="100vh" />}
              </Slide>
            ))}
          </FullPage>
        </Box>
        <StepPreloader
          list={preload[isDesktop ? 'desktop' : 'mobile']}
          onFirstLoaded={this.handleFirstLoaded}
          onLoaded={this.handleLoaded}
          pause={introPlayRequested && !introPlayed}
        />
        <Title active={!animating}>
          {title}
        </Title>
      </Box>
    );
  }
}

// <Box is={Flex} position="fixed" left={['0.5em', null, '1em']} bottom={['0.5em', null, '1em']}>
//           <RatioToggle id="bg-ratio-toggle" />
//           <label htmlFor="bg-ratio-toggle">
//             <Text.span f="0.8em" ml="0.25em">
//               背景同步
//             </Text.span>
//           </label>
//         </Box>

export default compose(
  withHeader,
  withResponsive,
  withContentRect('bounds'),
  withConnect,
)(Index);
