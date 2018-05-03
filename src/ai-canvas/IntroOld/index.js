
import { createElement } from 'react';

import images from './images';
import data from './data.json';
import dataParser from '../dataParser';

export default (props) => createElement(dataParser(data, images), props);
