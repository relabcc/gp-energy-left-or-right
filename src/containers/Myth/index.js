import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';

import withResponsive from '../../hoc/withResponsive';
import Box from '../../components/Box';
import Text from '../../components/Text';
import Circle from '../../components/Circle';
import BackgroundImage from '../../components/BackgroundImage';
import { breakpoints } from '../../components/ThemeProvider/theme';

import virtualPageview from '../../utils/virtualPageview';
import pics from './pics';

const ArrowButton = ({ left, right, transform, ...props }) => (
  <Box
    w="2em"
    f={['1em', null, '1.5em']}
    position="absolute"
    top="50%"
    left={left}
    right={right}
    transform={transform}
  >
    <Circle bg="cyan" color="white" {...props} />
  </Box>
);

class MythSlick extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: props.pathContext.index || 0,
    };
  }

  componentDidMount() {
    if (typeof document !== 'undefined') {
      this.keyListener = document.addEventListener('keyup', this.handleKeyUp);
    }
  }

  componentWillUnmount() {
    if (this.keyListener) {
      document.removeEventListener('keyup', this.handleKeyUp);
    }
  }

  handleKeyUp = ({ keyCode }) => {
    if (keyCode === 37) this.slickRef.slickPrev();
    if (keyCode === 39) this.slickRef.slickNext();
  }

  handleChange = (ls, currentSlide) => {
    this.setState({ currentSlide });
    virtualPageview(`/myth/${currentSlide + 1}`);
  }

  render() {
    const { currentSlide, loaded } = this.state;
    const { browser, pathContext, ...props } = this.props;
    const isDesktop = browser.greaterThan.sm;
    const arrowPos = ['1em', null, 'calc((160% - 72px) / 6 * 0.975)'];
    return (
      <Box overflow="hidden" {...props}>
        <Box position="relative">
          <Box w={[1, null, '160%']} ml={[0, 0, '-30%']}>
            <Slider
              ref={(slick) => { this.slickRef = slick; }}
              initialSlide={currentSlide}
              onInit={() => this.setState({ loaded: true })}
              accessibility={false}
              slidesToShow={3}
              arrows={false}
              centerMode
              centerPadding="36px"
              infinite={false}
              beforeChange={this.handleChange}
              responsive={[
                {
                  breakpoint: breakpoints[1],
                  settings: {
                    slidesToShow: 1,
                    centerPadding: '4px',
                  }
                }
              ]}
            >
              {pics.map((src, index) => (
                <Box key={index} px={['6px', null, '2.5%']}>
                  <Box position="relative">
                    <BackgroundImage
                      ratio={1875 / 2500}
                      src={src}
                    />
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      right="0"
                      bottom="0"
                      bg="black"
                      opacity={index === currentSlide ? 0 : 0.5}
                      transition="opacity 0.5s"
                    />
                  </Box>
                </Box>
              ))}
              {isDesktop && <div />}
              {isDesktop && <div />}
            </Slider>
          </Box>
          {loaded && (
            <ArrowButton
              transform="translate(-50%,-50%)"
              left={arrowPos}
              onClick={this.slickRef.slickPrev}
            >
              <FaAngleLeft />
            </ArrowButton>
          )}
          {loaded && (
            <ArrowButton
              transform="translate(50%,-50%)"
              right={arrowPos}
              onClick={this.slickRef.slickNext}
            >
              <FaAngleRight />
            </ArrowButton>
          )}
        </Box>
        <Text my="1em">
          {currentSlide + 1} / {pics.length}
        </Text>
      </Box>
    );
  }
}

export default withResponsive(MythSlick);
