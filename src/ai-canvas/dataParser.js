import { createElement } from 'react';

import AiCanvas from './AiCanvas';
import BackgroundImage from '../components/BackgroundImage';
import InlineStyleText from './InlineStyleText';

import parseProps from './parseProps';

const percents = (num) => `${num * 100}%`;

const styleParser = ({ width, height, x, y }, { width: canvasWidth, height: canvasHeight }) => ({
  top: percents(y / canvasHeight),
  left: percents(x / canvasWidth),
  width: percents(width / canvasWidth),
  ratio: height / width,
});

const texParser = (txt) => {
  const re = /txt\|([^[]+)\[([^\]]+)/g;
  const [, children, props] = re.exec(txt);
  return {
    children,
    fontWeight: 700,
    lineHeight: 1,
    ...parseProps(props),
  };
};

export default (data, images) => {
  const { width, height, layers } = data;
  return (props) => createElement(AiCanvas, {
    ratio: height / width,
    canvasWidth: width,
    layers: layers.slice().reverse().map((d) => {
      const { ratio, ...attr } = styleParser(d, { width, height });
      const { name, layername } = d;
      return {
        name,
        layer: layername.startsWith('txt')
          ? createElement(InlineStyleText, texParser(layername))
          : createElement(BackgroundImage, {
            src: images[name],
            ratio,
          }),
        attr,
      };
    }),
    ...props,
  });
};
