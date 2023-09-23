import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Box} from '@presentation/components/box/box';
import {Button} from '@presentation/components/button/button';
import {Typography} from '@presentation/components/typography/typography';
import {type Meta, type StoryObj} from '@storybook/react';

// components

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
  component: Button,
  title: 'Button',
  decorators: [
    Story => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Button>;

/**
 * Typings StoryObje
 */
type Story = StoryObj<typeof Button>;

export const ButtonSimple: Story = {
  name: 'Button - Simple',
  args: {
    activeOpacity: 0.7,
    width: '100%',
    height: 40,
    color: 'black100',
    backgroundColor: theme.colors.blue525,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors.blue525,
    children: (
      <Typography
        text="Faça Login"
        fontSize={18}
        fontFamily="inter_medium_500"
        color={theme.colors.neutral25}
        lineHeight={24}
        letterSpacing={0.5}
      />
    ),
  },
};

export const ButtonSimpleWithIcon: Story = {
  name: 'Button - Simple With Icon',
  args: {
    activeOpacity: 0.7,
    width: '100%',
    height: 40,
    color: 'black100',
    backgroundColor: theme.colors.blue525,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors.blue525,
    children: (
      <Box
        width={'100%'}
        backgroundColor={theme.colors.transparent}
        flexDirection="row"
        alignItems="center"
        justifyContent="center">
        <Typography
          text="➕"
          fontSize={18}
          fontFamily="inter_medium_500"
          color={theme.colors.black100}
          lineHeight={24}
          letterSpacing={0.5}
        />
        <Typography
          text="Texto"
          fontSize={18}
          fontFamily="inter_medium_500"
          color={theme.colors.neutral25}
          lineHeight={24}
          letterSpacing={0.5}
          marginLeft={2}
        />
      </Box>
    ),
  },
};

export const ButtonOtline: Story = {
  name: 'Button - Outline',
  args: {
    activeOpacity: 0.7,
    width: '100%',
    height: 40,
    color: 'black100',
    backgroundColor: theme.colors.transparent,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors.blue500,
    children: (
      <Typography
        text="Faça Login"
        fontSize={18}
        fontFamily="inter_medium_500"
        color={theme.colors.black100}
        lineHeight={24}
        letterSpacing={0.5}
      />
    ),
  },
};

export const ButtonOtlineWithIcon: Story = {
  name: 'Button - Outline With Icon',
  args: {
    activeOpacity: 0.7,
    width: '100%',
    height: 40,
    color: 'black100',
    backgroundColor: theme.colors.transparent,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors.blue500,
    children: (
      <Box
        width={'100%'}
        backgroundColor={theme.colors.transparent}
        flexDirection="row"
        alignItems="center"
        justifyContent="center">
        <Typography
          text="➕"
          fontSize={18}
          fontFamily="inter_medium_500"
          color={theme.colors.black100}
          lineHeight={24}
          letterSpacing={0.5}
        />
        <Typography
          text="Texto"
          fontSize={18}
          fontFamily="inter_medium_500"
          color={theme.colors.black100}
          lineHeight={24}
          letterSpacing={0.5}
          marginLeft={2}
        />
      </Box>
    ),
  },
};

export const ButtonGhost: Story = {
  name: 'Button - Ghost',
  args: {
    activeOpacity: 0.7,
    width: '100%',
    height: 40,
    color: 'black100',
    backgroundColor: theme.colors.transparent,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    children: (
      <Typography
        text="Texto"
        fontSize={18}
        fontFamily="inter_medium_500"
        color={theme.colors.black100}
        lineHeight={24}
        letterSpacing={0.5}
      />
    ),
  },
};

export const ButtonGhostWithIcon: Story = {
  name: 'Button - Ghost With Icon',
  args: {
    activeOpacity: 0.7,
    width: '100%',
    height: 40,
    color: 'black100',
    backgroundColor: theme.colors.transparent,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    children: (
      <Box
        width={'100%'}
        backgroundColor={theme.colors.transparent}
        flexDirection="row"
        alignItems="center"
        justifyContent="center">
        <Typography
          text="➕"
          fontSize={18}
          fontFamily="inter_medium_500"
          color={theme.colors.black100}
          lineHeight={24}
          letterSpacing={0.5}
        />
        <Typography
          text="Texto"
          fontSize={18}
          fontFamily="inter_medium_500"
          color={theme.colors.black100}
          lineHeight={24}
          letterSpacing={0.5}
          marginLeft={2}
        />
      </Box>
    ),
  },
};

export const ButtonDisabled: Story = {
  name: 'Button - Disabled',
  args: {
    activeOpacity: 0.7,
    disabled: true,
    width: '100%',
    height: 40,
    color: 'black100',
    backgroundColor: theme.colors.neutral200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors.neutral200,
    children: (
      <Typography
        text="Texto"
        fontSize={18}
        fontFamily="inter_medium_500"
        color={theme.colors.black100}
        lineHeight={24}
        letterSpacing={0.5}
        marginLeft={2}
      />
    ),
  },
};

export const ButtonDisabledWithIcon: Story = {
  name: 'Button - Disabled With Icon',
  args: {
    activeOpacity: 0.7,
    disabled: true,
    width: '100%',
    height: 40,
    color: 'black100',
    backgroundColor: theme.colors.neutral200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors.neutral200,
    children: (
      <Box
        width={'100%'}
        backgroundColor={theme.colors.transparent}
        flexDirection="row"
        alignItems="center"
        justifyContent="center">
        <Typography
          text="➕"
          fontSize={18}
          fontFamily="inter_medium_500"
          color={theme.colors.black100}
          lineHeight={24}
          letterSpacing={0.5}
        />
        <Typography
          text="Texto"
          fontSize={18}
          fontFamily="inter_medium_500"
          color={theme.colors.black100}
          lineHeight={24}
          letterSpacing={0.5}
          marginLeft={2}
        />
      </Box>
    ),
  },
};
