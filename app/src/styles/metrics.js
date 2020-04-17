import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
  XSMALL: 5,
  SMALL: 10,
  MEDIUM: 15,
  BIG: 20,
  XBIG: 25,
  XXBIG: 30,
  RADIUS: 4,
};

export default metrics;
