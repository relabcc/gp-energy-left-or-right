import React from 'react';
import PropTypes from 'prop-types';
import random from 'lodash/random';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';

import Flex from '../../components/Flex';
import Box from '../../components/Box';
import Image from '../../components/Image';
import theme from '../../components/ThemeProvider/theme';
import BackgroundImage from '../../components/BackgroundImage';

import withResponsive from '../../hoc/withResponsive';
import { firebase } from '../../services/firebase';

import Header from './Header';
import OpenModal from './OpenModal';
import QuestionTitle from './QuestionTitle';
import CombineForm from './CombineForm';
import Thanks from './OpenModal/Thanks';

import flowerdecoration from './flowerdecoration.svg';
import scenes from '../../scenes';
import pics from '../../scenes/pics';

const database = firebase.database();

class ThinkPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.sceneIndex = get(props, 'match.params.id') || random(1, scenes.length);
  }

  state = {
    isOpen: false,
    scoreAnswered: false,
  }

  handleOpen = () => this.setState({ isOpen: true })

  handleScoreSubmit = (score) => {
    ReactGA.event({
      action: '有沒有幫助',
      category: '評分',
      label: `${scenes[this.sceneIndex - 1].title}`,
      value: score,
    });
    return database.ref('qa')
      .push({
        score,
        index: this.sceneIndex,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      })
      .then(({ key }) => this.setState({ surveyKey: key, scoreAnswered: true }));
  }

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
    const content = noHeader && scoreAnswered ? <Thanks /> : (
      <Box>
        <QuestionTitle scene={scene} />
        <CombineForm noEmail={noEmail} onSubmit={this.handleSubmit} />
        <Box ml="auto" w="25%">
          <BackgroundImage src={flowerdecoration} ratio={107 / 206.227} />
        </Box>
      </Box>
    );
    return (
      <Box>
        <Helmet
          title={scene.title}
          meta={[
            { name: 'description', content: scene.sub },
          ]}
        />
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
          <OpenModal isOpen={!noHeader && isOpen} />
        </Box>
      </Box>
    );
  }
}

ThinkPage.propTypes = {
  browser: PropTypes.shape(),
};

export default withResponsive(ThinkPage);
