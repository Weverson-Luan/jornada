import { Dimensions, PixelRatio, NativeModules } from 'react-native';

const { StatusBarManager } = NativeModules;

const StatusBarHeight = StatusBarManager.HEIGHT;

const wp = (widthPercent: string): number => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel((screenWidth * parseFloat(widthPercent)) / 100);
};

const hp = (heightPercent: string): number => {
  const screenHeight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel((screenHeight * parseFloat(heightPercent)) / 100);
};

export const useDimensions = () => {
  return { wp, hp, StatusBarHeight };
};
