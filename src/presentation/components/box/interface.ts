/* eslint-disable @typescript-eslint/ban-ts-comment */
import type React from 'react';

import { type ThemeType } from 'styled-components';

import {
  type ResponsiveValue,
  type BackgroundColorProps,
  type BorderProps,
  type BorderRadiusProps,
  type BorderWidthProps,
  type ColorProps,
  type DisplayProps,
  type FlexboxProps,
  type HeightProps,
  type MinHeightProps,
  type MinWidthProps,
  type PositionProps,
  type ShadowProps,
  type SizeProps,
  type SpaceProps,
  type WidthProps,
} from 'styled-system';

// theme
import { type theme } from '../../../styles/theme/theme';

// @ts-expect-error
export interface BoxProps
  extends FlexboxProps<typeof theme>,
    SpaceProps<typeof theme>,
    PositionProps<typeof theme>,
    ColorProps<typeof theme>,
    BackgroundColorProps<typeof theme>,
    BorderProps<typeof theme>,
    BorderWidthProps<typeof theme>,
    SizeProps<typeof theme>,
    WidthProps<typeof theme>,
    HeightProps<typeof theme>,
    MinHeightProps<typeof theme>,
    MinWidthProps<typeof theme>,
    ShadowProps<typeof theme>,
    BorderRadiusProps<typeof theme>,
    DisplayProps<typeof theme> {
  children?: React.ReactNode;
  backgroundColor?: string;
  borderRadius?: number;
  borderColor?: string;

  /**
   * A propriedade CSS define como os flex items são colocados no flex container definindo o eixo principal e a direção (normal ou invertida).flex-direction.
   */
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';

  /**
   * A propriedade CSS align-items define o align-selfvalor de todos os filhos diretos como um grupo. No Flexbox, ele controla o alinhamento dos itens no eixo cruzado . No Layout de Grade, ele controla o alinhamento dos itens no Eixo do Bloco dentro de sua área de grade.
   */
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch';

  /**
   * A propriedade CSS justify-content define como o navegador distribui o espaço entre e ao redor dos itens de conteúdo ao longo do eixo principal de um contêiner flexível e do eixo embutido de um contêiner de grade.
   */
  justifyContent?: 'flex-start' | 'center' | 'space-between' | 'space-around' | 'space-evenly';

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
