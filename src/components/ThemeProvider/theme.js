import merge from 'lodash/merge';
import constants from 'styled-system/dist/constants';

const emToPx = (em) => em * 16;

export const breakpoints = [36, 48, 62, 90, 120].map(emToPx);
export const containerWidth = [36, 46, 58].map(emToPx);

const font = 'Arial, "PingFang TC", "HeiTi TC", "Microsoft JhengHei", sans-serif';

const white = '#fff';
const black = '#000';
const lightGray = '#DEDFDF';
const gray = '#95989A';
const blue = '#89CBE1';

export default merge(constants, {
  colors: {
    white,
    black,
    primary: 'teal',
    secondary: 'orange',
    lightGray,
    gray,
    blue,
  },
  breakpoints,
  containerWidth,
  font,
  duration: 250,
  headerHeight: ['3em'],
});
