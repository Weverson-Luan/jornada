/**
 * IMPORTS
 */
import React from 'react';

import { type ButtonProps, type ButtonStyleProps } from './interface';

import { ButtonStyled } from './styles';

/**
 *
 * Componente Button para a interação do usuário com ui.
 */
const Button = ({
  width = '50%',
  height = 40,
  backgroundColor,
  color = 'neutral25',
  borderRadius,
  borderWidth,
  borderLeftWidth,
  borderRightWidth,
  borderColor,
  borderBottomColor,
  borderTopColor,
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
  testID,
  opacity = 10,
  children,
  style,
  ...props
}: ButtonProps) => {
  const styleProps: ButtonStyleProps = props;

  return (
    <ButtonStyled
      {...styleProps}
      testID={testID}
      opacity={opacity}
      style={style}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      borderLeftWidth={borderLeftWidth}
      borderRightWidth={borderRightWidth}
      borderColor={borderColor}
      borderBottomColor={borderBottomColor}
      borderTopColor={borderTopColor}
      color={color}
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
    </ButtonStyled>
  );
};

/**
 * EXPORTS
 */
export { Button };
