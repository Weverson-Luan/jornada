import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Meta, StoryObj} from '@storybook/react';

// components
import {Typography} from '@presentation/components/typography/typography';

// styles
import {theme} from '../../../controle-de-jornada/src/styles/theme/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
  },
});

export default {
  component: Typography,
  title: 'Typography',
  decorators: [
    Story => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
} as Meta<typeof Typography>;

/**
 * Typings StoryObje
 */
type Story = StoryObj<typeof Typography>;

export const TextThin100: Story = {
  name: 'Simple - 100',
  args: {
    text: 'Simple Fig',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    fontFamily: 'inter_thin_100',
    color: theme.colors.gray700,
  },
};

export const TextExtraLight200: Story = {
  name: 'Extra Light - 200',
  args: {
    text: 'Simple Fig',
    fontSize: 20,
    fontFamily: 'inter_extra_light_200',
    color: theme.colors.gray700,
  },
};

export const TextExtraLight300: Story = {
  name: 'Simple Ligh - 300',
  args: {
    text: 'Simple Fig',
    fontSize: 24,
    lineHeight: 24,
    letterSpacing: 0.5,
    fontFamily: 'inter_light_300',
    color: theme.colors.gray700,
  },
};

export const TextRegular400: Story = {
  name: 'Simple Regular - 400',
  args: {
    text: 'Simple Fig',
    fontSize: 26,
    lineHeight: 24,
    letterSpacing: 0.5,
    fontFamily: 'inter_regular_400',
    color: theme.colors.gray700,
  },
};

export const TextMedium500: Story = {
  name: 'Simple Medium - 500',
  args: {
    text: 'Simple Fig',
    fontSize: 30,
    lineHeight: 24,
    letterSpacing: 0.5,
    fontFamily: 'inter_medium_500',
    color: theme.colors.gray700,
  },
};

export const TextSemiBold600: Story = {
  name: 'Simple Semi Bold - 600',
  args: {
    text: 'Simple Fig',
    fontSize: 34,
    lineHeight: 24,
    letterSpacing: 0.5,
    fontFamily: 'inter_semi_bold_600',
    color: theme.colors.gray700,
  },
};

export const TextBoldMedium700: Story = {
  name: 'Simple Bold Medium - 700',
  args: {
    text: 'Simple Fig',
    fontSize: 38,
    lineHeight: 24,
    letterSpacing: 0.5,
    fontFamily: 'inter_bold_700',
    color: theme.colors.gray700,
  },
};

export const TextExtraBold800: Story = {
  name: 'Simple Extra Bold - 800',
  args: {
    text: 'Simple Fig',
    fontSize: 42,
    lineHeight: 24,
    letterSpacing: 0.5,
    fontFamily: 'inter_extra_bold_800',
    color: theme.colors.gray700,
  },
};

export const TextExtraBold900: Story = {
  name: 'Simple Bold- 900',
  args: {
    text: 'Simple Fig',
    fontSize: 46,
    lineHeight: 24,
    letterSpacing: 0.5,
    fontFamily: 'inter_bold',
    color: theme.colors.gray700,
  },
};
