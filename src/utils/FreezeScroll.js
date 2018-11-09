import scroll from 'window-scroll';

export default class FreezeScroll {
  freeze() {
    this.scrollY = scroll.getScrollY();
    document.body.style.setProperty('position', 'fixed');
    document.body.style.setProperty('top', `-${this.scrollY}px`);
  }

  unfreeze() {
    document.body.style.setProperty('position', 'static');
    document.body.style.setProperty('top', 'auto');
    setTimeout(() => {
      window.scrollTo(0, this.scrollY);
    });
  }
}
