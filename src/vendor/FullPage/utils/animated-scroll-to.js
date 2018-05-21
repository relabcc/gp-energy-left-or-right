import TWEEN from '@tweenjs/tween.js';

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
}

export default function animatedScrollTo(scrollTop, duration, callback) {
  if (duration === 0) {
    if (callback) callback();
    return window.scrollTo(0, scrollTop);
  }

  setTimeout(() => {
    const tween = new TWEEN.Tween({ scrollTop: window.scrollY })
    tween
      .to({ scrollTop }, duration)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate((object) => {
        window.scrollTo(0, object.scrollTop);
      })
      .onComplete(callback)
      .start();

    animate();
  });
}
