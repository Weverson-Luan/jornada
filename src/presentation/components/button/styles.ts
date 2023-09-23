/* eslint-disable import/named */
import { TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';

import {
  borderColor,
  borderRadius,
  borderWidth,
  backgroundColor,
  color,
  flexbox,
  height,
  letterSpacing,
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
  shadow,
  space,
  width,
} from 'styled-system';

import { type ButtonStyleProps } from './interface';

export const ButtonStyled = styled(TouchableOpacity)<ButtonStyleProps>`
  ${width};
  ${height};
  ${backgroundColor};
  ${color};
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
  ${minWidth};
  ${minHeight};
  ${borderRadius};
  ${borderWidth};
  ${borderColor};
  ${space};
  ${flexbox};
  ${shadow};
  ${letterSpacing};
  opacity: ${({ opacity }) => `${opacity}` ?? 9};
`;
