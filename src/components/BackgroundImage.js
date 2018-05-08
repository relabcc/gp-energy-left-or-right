import PropTypes from 'prop-types';
import { ratio } from 'styled-system';

import Box from './Box';

const BackgroundImage = Box.extend`
  background-image: url(${({ src }) => src});
  background-size: ${({ backgroundSize }) => backgroundSize};
  background-position: ${({ backgroundPosition }) => backgroundPosition};
  background-repeat: no-repeat;
  ${ratio}
`;

BackgroundImage.propTypes = {
  src: PropTypes.string,
  backgroundSize: PropTypes.string,
  position: PropTypes.string,
};

BackgroundImage.defaultProps = {
  ratio: 1,
  backgroundSize: 'cover',
  backgroundPosition: '50% 50%',
  position: 'relative',
};

BackgroundImage.displayName = 'BackgroundImage';

export default BackgroundImage;
