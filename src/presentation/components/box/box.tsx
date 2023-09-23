import React from 'react';

import { type BoxProps } from './interface';

import { BoxStyles } from './styles';

/**
 * Componente Box para a interação da  ui.
 */
const Box = ({
  width,
  height,
  minWidth,
  minHeight,
  flexDirection,
  alignItems,
  justifyContent,
  padding,
  paddingLeft,
  paddingRight,
  paddingBottom,
  paddingTop,
  margin,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  backgroundColor,
  border,
  borderWidth,
  borderRadius,
  borderColor,
  position,
  children,
  ...res
}: BoxProps) => {
  return (
    <BoxStyles
      {...res}
      width={width}
      minWidth={minWidth}
      height={height}
      minHeight={minHeight}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      backgroundColor={backgroundColor}
      border={border}
      borderWidth={borderWidth}
      borderRadius={borderRadius}
      borderColor={borderColor}
      position={position}
      padding={padding}
      paddingTop={paddingTop}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      margin={margin}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginBottom={marginBottom}
    >
      {children}
    </BoxStyles>
  );
};

export { Box };
