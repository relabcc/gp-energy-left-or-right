import { createElement } from 'react';
import fromPairs from 'lodash/fromPairs';

import AiCanvas from './AiCanvas';
import BackgroundImage from '../components/BackgroundImage';
import Text from '../components/Text';

const percents = (num) => `${num * 100}%`;

const styleParser = ({ width, height, x, y }, { width: canvasWidth, height: canvasHeight }) => ({
  top: percents(y / canvasHeight),
  left: percents(x / canvasWidth),
  width: percents(width / canvasWidth),
  ratio: height / width,
});

export const texParser = (txt) => {
  const re = /txt\|([^[]+)\[([^\]]+)/g;
  const [, children, props] = re.exec(txt);
  const attrs = fromPairs(props.split(',').map((p) => p.split(':')));
  return {
    children,
    fontWeight: 700,
    ...attrs,
    f: `${attrs['f']}em`,
    whiteSpace: 'nowrap',
    lineHeight: 1,
  };
};

export default (data, images) => {
  const { width, height, layers } = data;
  return () => createElement(AiCanvas, {
    ratio: height / width,
    canvasWidth: width,
    layers: layers.slice().reverse().map((d) => {
      const { ratio, ...attr } = styleParser(d, { width, height });
      const { name } = d;
      return {
        name,
        layer: name.startsWith('txt')
          ? createElement(Text, texParser(name))
          : createElement(BackgroundImage, {
            src: images[name],
            ratio,
          }),
        attr,
      };
    }),
  });
};
