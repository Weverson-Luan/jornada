/**
 * IMPORTS
 */
import { type TextInputProps } from 'react-native';

import {
  type BorderRadiusProps,
  type BorderColorProps,
  type BorderWidthProps,
  type BorderBottomProps,
  type HeightProps,
  type WidthProps,
  type PaddingProps,
  type TextColorProps,
  type MarginProps,
  type FlexboxProps,
  type FlexDirectionProps,
} from 'styled-system';

import { type theme } from '../../../styles/theme/theme';

interface IInputCustomProps
  extends TextInputProps,
    TextColorProps<typeof theme>,
    PaddingProps<typeof theme>,
    MarginProps<typeof theme>,
    WidthProps<typeof theme>,
    HeightProps<typeof theme>,
    BorderColorProps<typeof theme>,
    BorderRadiusProps<typeof theme>,
    BorderBottomProps<typeof theme>,
    FlexboxProps<typeof theme>,
    FlexDirectionProps<typeof theme>,
    BorderWidthProps,
    TextInputProps {
  name: string;
  textLabel?: string;
  messageError?: string;
  backgroundColor?: string;
  borderBottomWidth?: number;
}

/**
 * EXPORTS
 */
export type { IInputCustomProps };
