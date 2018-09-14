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
  state = {
    currentSlide: 0
  }

  handleChange = (ls, currentSlide) => this.setState({ currentSlide })

  render() {
    const { currentSlide, loaded } = this.state;
    const { browser, ...props } = this.props;
    return (
      <Box overflow="hidden" {...props}>
        <Box position="relative">
          <Box w={[1, null, '160%']} ml={[0, 0, '-30%']}>
            <Slider
              ref={(slick) => { this.slickRef = slick; }}
              onInit={() => this.setState({ loaded: true })}
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
                  }
                }
              ]}
            >
              {pics.map((src, index) => (
                <Box key={index} px="2.5%">
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
              {browser.greaterThan.sm && <div />}
              {browser.greaterThan.sm && <div />}
            </Slider>
          </Box>
          {loaded && (
            <ArrowButton
              transform="translate(-50%,-50%)"
              left={['calc(36px + (100% - 72px) * 0.025)', null, 'calc((160% - 72px) / 6 * 0.975)']}
              onClick={this.slickRef.slickPrev}
            >
              <FaAngleLeft />
            </ArrowButton>
          )}
          {loaded && (
            <ArrowButton
              transform="translate(50%,-50%)"
              right={['calc(36px + (100% - 72px) * 0.025)', null, 'calc((160% - 72px) / 6 * 0.975)']}
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
