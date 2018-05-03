import { injectGlobal } from 'styled-components';
import boldWoff from './minified/GenJyuuGothicX-Monospace-Bold.woff';
import boldTtf from './minified/GenJyuuGothicX-Monospace-Bold.ttf';

import heavyWoff from './minified/GenJyuuGothicX-Monospace-Heavy.woff';
import heavyTtf from './minified/GenJyuuGothicX-Monospace-Heavy.ttf';

injectGlobal`
  @font-face {
    font-family: 'Gen Jyuu Gothic X Monospace';
    src: local("Gen Jyuu Gothic X Monospace Black"),
      url(${heavyWoff}),
      url(${heavyTtf});
    font-weight: 900;
  }

  @font-face {
    font-family: 'Gen Jyuu Gothic X Monospace';
    src: local("Gen Jyuu Gothic X Monospace Bold"),
      url(${boldWoff}),
      url(${boldTtf});
    font-weight: 700;
  }
`;
