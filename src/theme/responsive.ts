import { Dimensions, PixelRatio, Platform } from 'react-native';

// Base design dimensions (standard mobile design at 375x812 - iPhone X/11/12)
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Scale based on width (for horizontal elements, fonts, paddings)
export const scale = (size: number): number => {
  const ratio = SCREEN_WIDTH / BASE_WIDTH;
  const newSize = size * ratio;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Scale based on height (for vertical spacing, heights)
export const verticalScale = (size: number): number => {
  const ratio = SCREEN_HEIGHT / BASE_HEIGHT;
  const newSize = size * ratio;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Moderate scale - less aggressive scaling (good for fonts, paddings)
// factor controls how much scaling is applied (0 = no scaling, 1 = full scaling)
export const moderateScale = (size: number, factor: number = 0.5): number => {
  const newSize = size + (scale(size) - size) * factor;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Font scale that respects pixel density
export const fontScale = (size: number): number => {
  return moderateScale(size, 0.4);
};

// Screen dimensions
export const screenWidth = SCREEN_WIDTH;
export const screenHeight = SCREEN_HEIGHT;

// Check if small device (width < 360)
export const isSmallDevice = SCREEN_WIDTH < 360;
// Check if large device (width >= 414)
export const isLargeDevice = SCREEN_WIDTH >= 414;

export default {
  scale,
  verticalScale,
  moderateScale,
  fontScale,
  screenWidth,
  screenHeight,
  isSmallDevice,
  isLargeDevice,
};
