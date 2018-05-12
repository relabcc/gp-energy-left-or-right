const easeInOutCubic = require('./ease-in-out-cubic');

export default function animatedScrollTo(scrollTo, duration, callback) {
  if (duration === 0) {
    if (callback) callback();
    return window.scrollTo(0, scrollTo);
  }

  let scrollFrom;
  let scrollDiff;
  let startTime;
  let currentTime;

  function animateScroll(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }
    if (!scrollFrom) {
      scrollFrom = window.scrollY;
      scrollDiff = scrollTo - scrollFrom;
    }
    currentTime = timestamp - startTime;
    const newScrollPos = easeInOutCubic(currentTime, scrollFrom, scrollDiff, duration);

    window.scrollTo(0, newScrollPos);
    if (currentTime > duration) {
      if (callback) callback();
      startTime = null;
      return;
    }

    requestAnimationFrame(animateScroll);
  }
  setTimeout(() => requestAnimationFrame(animateScroll));
}
