/**
 * IMPORTS
 */
import React from 'react';

// styles
import {useTheme} from 'styled-components/native';

// components
import {Box} from '@presentation/components/box/box';
import {Typography} from '@presentation/components/typography/typography';

import {type IInputCustomProps} from './interface';

// styles
import {Container, InputCustom} from './styles';

/**
 *
 * Componente Input para a interação do usuário com ui.
 */
const Input = ({
  name,
  textLabel,
  messageError,
  width,
  height,
  backgroundColor,
  borderWidth,
  borderBottom,
  borderBottomWidth,
  borderColor,
  borderTopWidth,
  borderLeftWidth,
  borderRightWidth,
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
  ...restInputProps
}: IInputCustomProps) => {
  const theme = useTheme();
  return (
    <Box
      width={'100%'}
      flexDirection={'column'}
      alignItems={'flex-start'}
      marginBottom={46}>
      {Boolean(textLabel) && (
        <Typography
          text={`${textLabel}:` ?? 'Text Label'}
          fontSize={16}
          fontFamily="inter_regular_400"
          color={theme.colors.black100 ?? '#FFFFFF'}
          lineHeight={24}
          letterSpacing={0.5}
        />
      )}
      <Container>
        <InputCustom
          {...restInputProps}
          name={name}
          width={width}
          height={height}
          backgroundColor={backgroundColor}
          borderWidth={borderWidth}
          borderBottom={borderBottom}
          borderBottomWidth={borderBottomWidth}
          borderColor={borderColor}
          borderTopWidth={borderTopWidth}
          borderLeftWidth={borderLeftWidth}
          borderRightWidth={borderRightWidth}
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
        />
      </Container>

      {Boolean(messageError) && (
        <Typography
          text={messageError}
          fontSize={14}
          fontFamily="inter_regular_400"
          color={theme.colors.red900 ?? '#FFFFFF'}
          lineHeight={24}
          letterSpacing={0.5}
        />
      )}
    </Box>
  );
};

/**
 * EXPORTS
 */
export {Input};
