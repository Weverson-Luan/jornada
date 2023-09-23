/**
 * IMPORTS
 */
import React from 'react';

import { useTheme } from 'styled-components/native';

// constants
import { ACTIVITY_MODAL_COMPONENT } from '../../../../../common/constants';
// components
import { Box } from '../../../../components/box/box';
import { Button } from '../../../../components/button/button';
import { Typography } from '../../../../components/typography/typography';
// interface
import { type IModalProps } from './interface';

// styles
import { TitleColor } from './styles';

/**
 *
 * Componente ModalActivity para a interação do usuário com ui.
 */
const ModalActivity = ({ onClosedModal }: IModalProps) => {
  const theme = useTheme();
  return (
    <Box
      width={'100%'}
      minHeight={'100px'}
      flexDirection='column'
      alignItems='flex-start'
      backgroundColor={theme.colors.orange500 ?? '#FC5701'}
      borderRadius={8}
      padding={12}
    >
      <Box
        width={'100%'}
        height={40}
        flexDirection='row'
        alignItems='flex-start'
        justifyContent='flex-start'
      >
        <Typography
          text={'⚠️'}
          fontSize={18}
          fontFamily='inter_semi_bold_600'
          color={theme.colors.black180}
          lineHeight={24}
          letterSpacing={0.5}
        />

        <Typography
          text={ACTIVITY_MODAL_COMPONENT.titleConfirmation}
          fontSize={18}
          fontFamily='inter_bold'
          color={theme.colors.neutral25 ?? '#FFFFFF'}
          lineHeight={24}
          letterSpacing={0.5}
          marginLeft={2}
        />
      </Box>

      <Box
        width={'100%'}
        backgroundColor={theme.colors.neutral25 ?? '#FFFFFF'}
        borderRadius={8}
        paddingLeft={16}
        paddingRight={4}
        paddingTop={16}
      >
        <Box>
          <TitleColor>
            <Typography
              text={ACTIVITY_MODAL_COMPONENT.description}
              fontSize={14}
              fontFamily='inter_semi_bold_600'
              color={theme.colors.black180 ?? '#35302B'}
              lineHeight={18}
              letterSpacing={0.5}
            />{' '}
            {ACTIVITY_MODAL_COMPONENT.descriptionRest}
          </TitleColor>
        </Box>

        <Box
          width={'100%'}
          height={60}
          flexDirection='row'
          alignItems='center'
          justifyContent='space-between'
          marginTop={50}
          marginBottom={2}
        >
          <Button
            activeOpacity={0.7}
            onPress={onClosedModal}
            width='128px'
            height={36}
            backgroundColor='transparent'
            borderWidth={1}
            borderColor={theme.colors.blue500 ?? '#050022'}
            borderRadius={6}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Typography
              text={ACTIVITY_MODAL_COMPONENT.confirmCancellButton}
              fontSize={12}
              fontFamily='inter_semi_bold_600'
              color={theme.colors.black180 ?? '#35302B'}
              lineHeight={18}
              letterSpacing={0.5}
            />
          </Button>
          <Button
            onPress={onClosedModal}
            activeOpacity={0.7}
            width='128px'
            height={36}
            backgroundColor={theme.colors.blue500 ?? '#050022'}
            borderWidth={1}
            borderColor={theme.colors.blue500 ?? '#050022'}
            borderRadius={6}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Typography
              text={ACTIVITY_MODAL_COMPONENT.confirmButton}
              fontSize={12}
              fontFamily='inter_semi_bold_600'
              color={theme.colors.neutral25 ?? '#FFFFFF'}
              lineHeight={18}
              letterSpacing={0.5}
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

/**
 * EXPORTS
 */
export { ModalActivity };
