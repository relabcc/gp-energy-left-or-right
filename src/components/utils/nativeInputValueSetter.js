import noop from 'lodash/noop';

export default typeof window === 'object'
  ? Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set
  : noop;
