import TWEEN from '@tweenjs/tween.js';

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
}

const rule = /translateY\(-([^p]+)/;

const getTranslateHeight = (transformString) => {
  if (!transformString) return 0;
  const [, height] = rule.exec(transformString);
  return +height;
}

const doScroll = (to, container) => {
  if (container) {
    container.style.transform = `translateY(-${to}px)`;
  } else {
    window.scrollTo(0, to);
  }
};

export default function animatedScrollTo(scrollTop, duration, callback, container) {
  if (duration === 0) {
    if (callback) callback();
    return doScroll(scrollTop, container);
  }

  setTimeout(() => {
    const tween = new TWEEN.Tween({
      scrollTop: container ? getTranslateHeight(container.style.transform) : window.scrollY
    })
    tween
      .to({ scrollTop }, duration)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate((object) => {
        doScroll(object.scrollTop, container);
      })
      .onComplete(callback)
      .start();

    animate();
  });
}
