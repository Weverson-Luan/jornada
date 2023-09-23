/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {Box} from '@presentation/components/box/box';
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

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  component: Box,
  title: 'Box',
  decorators: [
    Story => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
} as Meta<typeof Box>;

/**
 * Typings StoryObje
 */
type Story = StoryObj<typeof Box>;

export const BoxDefault: Story = {
  name: 'Box - Simple',
  args: {
    width: '240px',
    height: '100px',
    backgroundColor: theme.colors.neutral25,
    children: <Text>Hi, I'm the Box!!!</Text>,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export const BoxWithBackground: Story = {
  name: 'Box With - Background',
  args: {
    width: '240px',
    height: '100px',
    backgroundColor: theme.colors.blue500,
    children: <Text style={{color: '#fff'}}>Hi, I'm the Box!!!</Text>,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export const BoxWithBorder: Story = {
  name: 'Box With - Border',
  args: {
    width: '240px',
    height: '100px',
    backgroundColor: theme.colors.neutral25,
    children: <Text>Hi, I'm the Box!!!</Text>,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: theme.borderWidths.thin as any,
    borderColor: theme.colors.black100,
  },
};

export const BoxWithBorderRadius: Story = {
  name: 'Box With - BorderRadius',
  args: {
    width: '240px',
    height: '100px',
    backgroundColor: theme.colors.neutral25,
    children: <Text>Hi, I'm the Box!!!</Text>,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: theme.borderWidths.thin as any,
    borderRadius: 8,
    borderColor: theme.colors.blue500,
  },
};
