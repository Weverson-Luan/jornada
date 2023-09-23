import React from 'react';

import {useTheme} from 'styled-components/native';

// components
import {Typography} from '@presentation/components/typography/typography';

// typings
import {ToastMessageCustoProps} from './interface';

// styles
import {
  BorderCustomToash,
  WrapperBorderCistomToash,
  WrapperTextToash,
  WrapperToash,
} from './styles';

const ToastMessageCustom = ({
  text1,
  text2,
  options,
}: ToastMessageCustoProps) => {
  const theme = useTheme();
  return (
    <WrapperToash>
      <WrapperBorderCistomToash>
        <BorderCustomToash options={options} />
      </WrapperBorderCistomToash>

      <WrapperTextToash>
        <Typography
          text={`${text1}`}
          fontFamily="inter_regular_400"
          color={theme.colors?.blue500}
          fontSize={12}
          lineHeight={22}
          letterSpacing={0.5}
        />

        <Typography
          text={`${text2}`}
          fontFamily="inter_regular_400"
          color={theme.colors?.black25}
          fontSize={12}
          lineHeight={22}
          letterSpacing={0.5}
        />
      </WrapperTextToash>
    </WrapperToash>
  );
};

/**
 * EXPORT
 */

export {ToastMessageCustom};
