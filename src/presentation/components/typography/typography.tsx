/**
 * IMPORTS
 */

import React from 'react';

import { type TextProps } from './interface';

import { TypographyComponent } from './styles';

/**
 * Componente Typography para a interação da  ui.
 */
const Typography = ({
  text,
  color,
  fontSize,
  fontFamily,
  margin,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  padding,
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom,
  lineHeight,
  letterSpacing,
  ...res
}: TextProps) => {
  return (
    <TypographyComponent
      {...res}
      color={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      margin={margin}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginBottom={marginBottom}
      padding={padding}
      paddingTop={paddingTop}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      lineHeight={`${lineHeight}px`}
      letterSpacing={letterSpacing}
    >
      {text ?? 'not text'}
    </TypographyComponent>
  );
};

/**
 * EXPORTS
 */
export { Typography };
