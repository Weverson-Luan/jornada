/* eslint-disable import/named */
import { View } from 'react-native';

import styled from 'styled-components/native';

import {
  border,
  borderColor,
  borderRadius,
  borderWidth,
  backgroundColor,
  color,
  flexDirection,
  justifyContent,
  alignItems,
  height,
  margin,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  minHeight,
  minWidth,
  padding,
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom,
  position,
  shadow,
  space,
  width,
} from 'styled-system';

import { type BoxProps } from './interface';

const BoxStyles = styled(View)<BoxProps>`
  ${width}
  ${height}
  ${minHeight}
  ${minWidth}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
  ${color}
  ${space}
  ${padding};
  ${paddingTop};
  ${paddingLeft}
  ${paddingRight}
  ${paddingBottom}
  ${margin};
  ${marginTop};
  ${marginLeft};
  ${marginRight};
  ${marginBottom};
  ${position}
  ${backgroundColor}
  ${borderColor}
  ${borderRadius}
  ${borderWidth}
  ${border}
  ${shadow}
`;

export { BoxStyles };
