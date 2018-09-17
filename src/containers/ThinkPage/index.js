import React from 'react';
import PropTypes from 'prop-types';
import random from 'lodash/random';

import Flex from '../../components/Flex';
import Box from '../../components/Box';
import Image from '../../components/Image';
import theme from '../../components/ThemeProvider/theme';

import withResponsive from '../../hoc/withResponsive';
import { firebase } from '../../services/firebase';

import Header from './Header';
import OpenModal from './OpenModal';
import WantEmail from './WantEmail';
import ScoreSurvey from './ScoreSurvey';
import QuestionTitle from './QuestionTitle';

import scenes from '../../scenes';
import pics from '../../scenes/pics';

const database = firebase.database();

class ThinkPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.sceneIndex = props.pathContext.id || random(1, scenes.length);
  }

  state = {
    isOpen: false,
    scoreAnswered: false,
  }

  handleOpen = () => this.setState({ isOpen: true })
  handleClose = () => this.setState({ isOpen: false })

  handleScoreSubmit = (score) =>
    database.ref('qa')
      .push({
        score,
        index: this.sceneIndex,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      })
      .then(({ key }) => this.setState({ surveyKey: key, scoreAnswered: true }));

  render() {
    const { browser } = this.props;
    const { isOpen, scoreAnswered } = this.state;
    const scene = scenes[this.sceneIndex - 1];
    const image = <Image src={pics[this.sceneIndex - 1]} />;
    const form = (
      <Box>
        <QuestionTitle scene={scene} />
        <ScoreSurvey onSubmit={this.handleScoreSubmit} submitted={scoreAnswered} />
        {scoreAnswered && (
          <WantEmail />
        )}
      </Box>
    );
    return (
      <div>
        <Header />
        <Box pt={theme.headerHeight}>
          {browser.greaterThan.sm && (
            <Flex p="2em">
              <Box w={1 / 3}>
                {image}
              </Box>
              <Box w={2 / 3} pl="3em">
                {form}
              </Box>
            </Flex>
          )}
          {browser.lessThan.md && (
            <Box>
              {image}
              <Box px="1em" py="2em" w={1}>
                {form}
              </Box>
            </Box>
          )}
          <OpenModal isOpen={isOpen} onRequestClose={this.handleClose} />
        </Box>
      </div>
    );
  }
}

ThinkPage.propTypes = {
  browser: PropTypes.shape(),
};

export default withResponsive(ThinkPage);
