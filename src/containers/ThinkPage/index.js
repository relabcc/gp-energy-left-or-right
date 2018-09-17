import React from 'react';
import PropTypes from 'prop-types';
import sample from 'lodash/sample';
import queryString from 'query-string';

import Flex from '../../components/Flex';
import Box from '../../components/Box';
import Image from '../../components/Image';
import theme from '../../components/ThemeProvider/theme';

import withResponsive from '../../hoc/withResponsive';

import OpenModal from './OpenModal';
import Form from './Form';
import Header from './Header';

import scenes from './scenes';

class ThinkPage extends React.PureComponent {
  state = { isOpen: false }

  handleOpen = () => this.setState({ isOpen: true })
  handleClose = () => this.setState({ isOpen: false })

  render() {
    const { browser } = this.props;
    const { isOpen } = this.state;
    const parsed = queryString.parse(typeof window === 'object' ? window.location.search : '');
    const sceneKey = parsed.scene;
    const scene = (sceneKey && scenes[sceneKey]) || sample(scenes);
    const form = <Form scene={scene} />;
    return (
      <div>
        <Header />
        <Box pt={theme.headerHeight}>
          {browser.greaterThan.sm && (
            <Flex p="2em">
              <Box w={1 / 3}>
                <Image src={scene.image} />
              </Box>
              <Box w={2 / 3} pl="3em">
                {form}
              </Box>
            </Flex>
          )}
          {browser.lessThan.md && (
            <Box>
              <Image src={scene.image} />
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
