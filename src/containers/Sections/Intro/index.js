import React, { PureComponent } from 'react';
import TWEEN from '@tweenjs/tween.js';

import Old from './intro-dt-2017.svg';
import New from './intro-dt-2035.svg';
import NewMobile from './intro-mb-2035.svg';
import OldMobile from './intro-mb-2017.svg';

import creatSection from '../creatSection';
import withConnect from '../../DualBg/withConnect';

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
}

const withIntroPlay = (Intro) => {
  class WithIntro extends PureComponent {
    state = {
      ratio: 1
    }

    componentDidMount() {
      const { playIntro, introPlayRequested } = this.props;
      if (!introPlayRequested) {
        this.playIntro();
        playIntro();
      }
    }

    componentWillUnmount() {
      if (this.tween) {
        this.tween.stop();
      }
    }

    playIntro = () => {
      this.tween = new TWEEN.Tween({ ratio: 1 })
      this.tween
        .to({ ratio: [0.5, 0, 0.5] }, 2000)
        .delay(1000)
        .onUpdate(({ ratio }) => this.setState({ ratio }))
        .onComplete(this.props.introPlayFinished)
        .start();

      animate();
    }

    render() {
      const {
        firstLoaded,
        introPlayRequested,
        introPlayed,
        playIntro,
        ratio,
        ...props
      } = this.props;
      return <Intro {...props} ratio={this.state.ratio} />;
    }
  }

  return withConnect(WithIntro);
}

export default withIntroPlay(creatSection([Old, New], [OldMobile, NewMobile]));
