/* eslint-disable import/named */
/**
 * IMPORTS
 */

import { Text } from 'react-native';

import styled from 'styled-components/native';

import {
  color,
  fontSize,
  fontFamily,
  size,
  lineHeight,
  letterSpacing,
  margin,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  padding,
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom,
} from 'styled-system';

// typings
import { type TextProps } from './interface';

const TypographyComponent = styled(Text)<TextProps>`
  ${color};
  ${fontFamily};
  ${fontSize};
  ${size};
  ${lineHeight}
  ${letterSpacing};
  ${padding};
  ${paddingTop};
  ${paddingLeft};
  ${paddingRight};
  ${paddingBottom};
  ${margin};
  ${marginTop};
  ${marginLeft};
  ${marginRight};
  ${marginBottom};
  text-align: justify;
`;

/**
 * EXPORTS
 */
export { TypographyComponent };
