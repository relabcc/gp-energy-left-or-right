export default function isMobileDevice() {
  if (typeof window === 'undefined') return;
  return (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);
}
