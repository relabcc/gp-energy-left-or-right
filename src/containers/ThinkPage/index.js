import React from 'react';
import PropTypes from 'prop-types';
import random from 'lodash/random';
import queryString from 'query-string';

import Flex from '../../components/Flex';
import Box from '../../components/Box';
import Image from '../../components/Image';
import Text from '../../components/Text';
import theme from '../../components/ThemeProvider/theme';
import BackgroundImage from '../../components/BackgroundImage';

import withResponsive from '../../hoc/withResponsive';
import { firebase } from '../../services/firebase';

import Header from './Header';
import OpenModal from './OpenModal';
import WantEmail from './WantEmail';
import ScoreSurvey from './ScoreSurvey';
import QuestionTitle from './QuestionTitle';
import CombineForm from './CombineForm';

import flowerdecoration from './flowerdecoration.svg';
import scenes from '../../scenes';
import pics from '../../scenes/pics';

const database = firebase.database();

class ThinkPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.sceneIndex = props.pathContext.id || random(1, scenes.length);
    const parsed = queryString.parse(typeof window === 'undefined' ? '' : window.location.search);
    this.twoStep = Boolean(parsed.twoStep);
  }

  state = {
    isOpen: false,
    scoreAnswered: false,
  }

  handleOpen = () => this.setState({ isOpen: true })

  handleScoreSubmit = (score) =>
    database.ref('qa')
      .push({
        score,
        index: this.sceneIndex,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      })
      .then(({ key }) => this.setState({ surveyKey: key, scoreAnswered: true }));

  handleEmailSubmit = (email) =>
    database.ref('subscribe')
      .push({
        email,
        key: this.state.surveyKey,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      })
      .then(this.handleOpen);

  handleSubmit = (score, email) =>
    this.handleScoreSubmit(score)
      .then(() => email ? this.handleEmailSubmit(email) : this.handleOpen());

  render() {
    const { browser, noHeader, noEmail } = this.props;
    const { isOpen, scoreAnswered } = this.state;
    const scene = scenes[this.sceneIndex - 1];
    const image = <Image src={pics[this.sceneIndex - 1]} />;
    const form = (
      <div>
        {scoreAnswered ? (
          <Box py="1em">
            <Text py="0.5em">謝謝您的回饋!</Text>
            <Text py="0.5em">此外，我們也想知道，<strong>您是否願意收到能源轉型計畫相關信息呢?</strong></Text>
          </Box>
        ) : (
          <ScoreSurvey onSubmit={this.handleScoreSubmit} />
        )}
        {scoreAnswered && (
          <WantEmail onNo={this.handleOpen} onSubmit={this.handleEmailSubmit} />
        )}
      </div>
    );
    const content = (
      <Box>
        <QuestionTitle scene={scene} />
        {this.twoStep ? form : (
          <CombineForm noEmail={noEmail} onSubmit={this.handleSubmit} />
        )}
        <Box ml="auto" w="25%">
          <BackgroundImage src={flowerdecoration} ratio={107 / 206.227} />
        </Box>
      </Box>
    );
    return (
      <Box>
        {!noHeader && <Header />}
        <Box pt={[0,0,theme.headerHeight]}>
          {browser.greaterThan.sm && (
            <Flex p="2em">
              <Box w={1 / 3}>
                {image}
              </Box>
              <Box w={2 / 3} pl="3em">
                {content}
              </Box>
            </Flex>
          )}
          {browser.lessThan.md && (
            <Box position="relative">
              {image}
              <Box px="1em" py="2em" w={1}>
                {content}
              </Box>
            </Box>
          )}
          <OpenModal isOpen={isOpen} />
        </Box>
      </Box>
    );
  }
}

ThinkPage.propTypes = {
  browser: PropTypes.shape(),
};

export default withResponsive(ThinkPage);
