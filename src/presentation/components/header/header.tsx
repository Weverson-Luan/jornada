/**
 * IMPORTS
 */
import React from 'react';

// styles
import {useTheme} from 'styled-components';

import {Box} from '../box/box';
import {Typography} from '../typography/typography';

import {Container} from './styles';
import {IHeaderProps} from './interface';

/**
 *
 * Componente Header para a interação do usuário com ui.
 */
const Header = ({title}: IHeaderProps) => {
  const theme = useTheme();
  return (
    <Container>
      <Box
        width={'100%'}
        height={'45px'}
        backgroundColor="#2D3748"
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent="center">
        <Typography
          text={title ? title : 'Login'}
          fontSize={16}
          fontFamily="inter_bold"
          color={theme.colors.neutral25}
          lineHeight={24}
          letterSpacing={0.5}
        />
      </Box>
    </Container>
  );
};

/**
 * EXPORTS
 */
export {Header};
