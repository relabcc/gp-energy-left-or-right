import PropTypes from 'prop-types';
import React from 'react';
import throttle from 'lodash/throttle';

import animatedScrollTo from '../utils/animated-scroll-to';
import isMobileDevice from '../utils/is-mobile';
import Slide from './Slide';
import Controls from './Controls';

const getChildrenCount = (children) => {
  const childrenArr = React.Children.toArray(children);
  const slides = childrenArr;
  return slides.length;
};

export default class FullPage extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    controls: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.element,
      PropTypes.func,
    ]),
    controlsProps: PropTypes.object,
    duration: PropTypes.number,
    initialSlide: PropTypes.number,
    beforeChange: PropTypes.func,
    afterChange: PropTypes.func,
  }

  static defaultProps = {
    controls: false,
    controlsProps: {},
    duration: 700,
    initialSlide: 0,
    beforeChange: () => {},
    afterChange: () => {},
  }

  constructor(props) {
    super(props);

    this._isScrollPending = false;
    this._isScrolledAlready = false;
    this._slides = [];
    this._slidesCount = getChildrenCount(this.props.children);
    this._scrollSensitivity = 10;
    this._touchSensitivity = 7;
    this._touchStart = 0;
    this._isMobile = null;

    this.state = {
      activeSlide: props.initialSlide,
    };
  }

  componentDidMount() {
    if (typeof window === 'undefined') return;
    this._isMobile = isMobileDevice();
    if (this._isMobile) {
      document.addEventListener('touchmove', this.onTouchMove);
      document.addEventListener('touchstart', this.onTouchStart);
    } else {
      this.scrollToSlide = throttle(this.scrollToSlide, 1500);
      document.addEventListener('wheel', this.onScroll);
    }
    window.addEventListener('resize', this.onResize);
    this.onResize();
    // this.scrollToSlide(this.props.initialSlide);
  }

  // componentWillReceiveProps({ allInited }) {
  //   if (!this.props.allInited && allInited) this.checkChildrenOverflow();
  // }

  componentWillUnmount() {
    if (typeof window === 'undefined') return;
    if (this._isMobile) {
      document.removeEventListener('touchmove', this.onTouchMove);
      document.removeEventListener('touchstart', this.onTouchStart);
    } else {
      document.removeEventListener('wheel', this.onScroll);
    }
    window.removeEventListener('resize', this.onResize);
  }

  onResize = (restore) => {
    if (this._isScrollPending) {
      this.deplayedOnresize = true;
      return;
    }
    this._slides = [];

    for (let i = 0; i < this._slidesCount; i++) {
      this._slides.push(window.innerHeight * i);
    }
    this.checkChildrenOverflow();

    this.setState({
      height: window.innerHeight,
    });
    this.deplayedOnresize = false;
    if (restore) this.requestSrcollAdjust();
  }

  onTouchStart = (evt) => {
    if (evt.target.classList.contains('ratio-hanlde')) return;
    this._touchStart = evt.touches[0].clientY;
    this._isScrolledAlready = false;
  }

  onTouchMove = (evt) => {
    if (evt.target.classList.contains('ratio-hanlde')) return;
    const touchEnd = evt.changedTouches[0].clientY;
    if (!this._isScrollPending && !this._isScrolledAlready) {
      if (this._touchStart > touchEnd + this._touchSensitivity) {
        if (this.checkOverflowScrolling(true, evt.target)) {
          evt.preventDefault();
          this.scrollToSlide(this.state.activeSlide + 1);
        } else return;
      } else if (this._touchStart < touchEnd - this._touchSensitivity) {
        if (this.checkOverflowScrolling(false, evt.target)) {
          evt.preventDefault();
          this.scrollToSlide(this.state.activeSlide - 1);
        } else return;
      }
    }
    evt.preventDefault();
  }

  onScroll = (evt) => {
    const amount = (evt.wheelDelta || -evt.deltaY || -evt.detail);
    const scrollDown = amount < 0;
    if (this.checkOverflowScrolling(scrollDown, evt.target)) {
      evt.preventDefault();

      if (this._isScrollPending) {
        return;
      }
      if (Math.abs(amount) < this._scrollSensitivity) return;

      let { activeSlide } = this.state;

      if (scrollDown) {
        activeSlide++;
      } else {
        activeSlide--;
      }

      this.scrollToSlide(activeSlide);
    }
  }

  requestSrcollAdjust = (slide = this.state.activeSlide) => {
    this.scrollToSlide(slide, true);
  }

  getSlidesCount = () => this._slidesCount

  getCurrentSlideIndex = () => this.state.activeSlide

  checkChildrenOverflow = () => {
    this.chidrenOverflow = [];
    this.chidrenRef = [];
    this._container.childNodes.forEach((slide, index) => {
      if (index > 0) {
        this.chidrenRef.push(slide);
        this.chidrenOverflow.push(slide.firstChild.clientHeight - window.innerHeight);
        /* eslint-disable no-param-reassign */
        if (slide.firstChild.clientHeight > window.innerHeight) {
          slide.style.touchAction = 'pan-y';
          slide.style.overflowY = 'scroll';
        } else {
          slide.style.touchAction = 'none';
          slide.style.overflowY = 'unset';
        }
        /* eslint-enable no-param-reassign */
      }
    });
  }

  checkOverflowScrolling = (scrollDown, target) => {
    const overflow = this.chidrenOverflow[this.state.activeSlide];

    const slide = this.chidrenRef[this.state.activeSlide];
    if (overflow > 0 && slide.contains(target)) {
      return scrollDown ? slide.scrollTop >= overflow : slide.scrollTop <= 0;
    }
    return true;
  }

  handleRef = (ref) => {
    this._container = ref;
  }

  scrollNext = () => {
    this.scrollToSlide(this.state.activeSlide + 1);
  }

  scrollPrev = () => {
    this.scrollToSlide(this.state.activeSlide - 1);
  }

  scrollToSlide = (slide, force) => {
    if (this._isScrollPending) return slide;
    if (slide >= 0 && slide < this._slidesCount) {
      const currentSlide = this.state.activeSlide;
      if (currentSlide === slide) {
        if (!force) return;
        return animatedScrollTo(this._slides[slide], 0);
      }

      this.props.beforeChange({ from: currentSlide, to: slide });

      this.setState({
        activeSlide: slide,
      });

      this._isScrollPending = true;
      animatedScrollTo(this._slides[slide], this.props.duration, () => {
        this._isScrollPending = false;
        this._isScrolledAlready = true;

        this.props.afterChange({ from: currentSlide, to: slide });
        if (this.deplayedOnresize) this.onResize(true);
      });
    }
  }

  renderControls() {
    const { controls, controlsProps } = this.props;
    if (!controls) {
      return null;
    }

    const controlsBasicProps = {
      getCurrentSlideIndex: this.getCurrentSlideIndex,
      activeSlide: this.getCurrentSlideIndex(),
      onNext: this.scrollNext,
      onPrev: this.scrollPrev,
      scrollToSlide: this.scrollToSlide,
      slidesCount: this.getSlidesCount(),
    };

    if (controls === true) {
      return (
        <Controls
          className="full-page-controls"
          {...controlsBasicProps}
          {...controlsProps}
        />
      );
    }

    const CustomControls = controls;
    return (
      <CustomControls {...controlsBasicProps} {...controlsProps} />
    );
  }

  render() {
    return (
      <div style={{ height: this.state.height }} ref={this.handleRef}>
        {this.renderControls()}
        {this.props.children}
      </div>
    );
  }
}
