const easeInOutCubic = require('./ease-in-out-cubic');

export default function animatedScrollTo(scrollTo, duration, callback) {
  const scrollFrom = window.scrollY;
  const scrollDiff = scrollTo - scrollFrom;
  let startTime;
  let currentTime;

  function animateScroll(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }
    currentTime = timestamp - startTime;
    const newScrollPos = easeInOutCubic(currentTime, scrollFrom, scrollDiff, duration);

    window.scrollTo(0, newScrollPos);
    if (currentTime > duration) {
      callback();
      startTime = null;
      return;
    }

    requestAnimationFrame(animateScroll);
  }
  requestAnimationFrame(animateScroll);
}
