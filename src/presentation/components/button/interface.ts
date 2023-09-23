/**
 * IMPORTS
 */

import { type TouchableOpacityProps } from 'react-native';

import { type ThemeType } from 'styled-components';

import type * as CSS from 'csstype';
import {
  type BorderRadiusProps,
  type BorderWidthProps,
  type HeightProps,
  type WidthProps,
  type PaddingProps,
  type TextColorProps,
  type MarginProps,
  type FlexboxProps,
  type ShadowProps,
  type FlexDirectionProps,
  type ResponsiveValue,
} from 'styled-system';

import { type theme } from '../../../styles/theme/theme';

interface ButtonStyleProps
  extends TouchableOpacityProps,
    TextColorProps<typeof theme>,
    PaddingProps<typeof theme>,
    MarginProps<typeof theme>,
    WidthProps<typeof theme>,
    HeightProps<typeof theme>,
    BorderRadiusProps<typeof theme>,
    FlexboxProps<typeof theme>,
    ShadowProps<typeof theme>,
    FlexDirectionProps<typeof theme>,
    BorderWidthProps {
  fontSize?: number;
  fontFamily?: keyof typeof theme.fonts;
  letterSpacing?: number;
  boxShadow?: keyof typeof theme.shadows | null;
  backgroundColor?: string;
  borderColor?: string;
  borderBottomColor?: string;
  borderTopColor?: string;
  opacity?: number;
}

interface ButtonProps extends ButtonStyleProps {
  width: string;
  height: string | number;
  backgroundColor?: string;
  color?: keyof typeof theme.colors;
  borderRadius?: ResponsiveValue<any, ThemeType> | undefined;
  borderWidth?: number | string;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  borderColor?: string;
  borderBottomColor?: string;
  borderTopColor?: string;
  children: React.ReactNode;
  flexDirection?: ResponsiveValue<CSS.Property.FlexDirection, ThemeType> | undefined;
  alignItems?: ResponsiveValue<CSS.Property.AlignItems, ThemeType> | undefined;
  justifyContent?: ResponsiveValue<CSS.Property.JustifyContent, ThemeType> | undefined;
  padding?: ResponsiveValue<any, ThemeType> | undefined;
  paddingLeft?: ResponsiveValue<any, ThemeType> | undefined;
  paddingRight?: ResponsiveValue<any, ThemeType> | undefined;
  paddingBottom?: ResponsiveValue<any, ThemeType> | undefined;
  paddingTop?: ResponsiveValue<any, ThemeType> | undefined;
  margin?: ResponsiveValue<any, ThemeType> | undefined;
  marginTop?: ResponsiveValue<any, ThemeType> | undefined;
  marginLeft?: ResponsiveValue<any, ThemeType> | undefined;
  marginRight?: ResponsiveValue<any, ThemeType> | undefined;
  marginBottom?: ResponsiveValue<any, ThemeType> | undefined;
}

/**
 * EXPORT
 */
export type { ButtonStyleProps, ButtonProps };
