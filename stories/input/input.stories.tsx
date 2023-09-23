/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Input} from '@presentation/components/form/input/input';
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
  component: Input,
  title: 'Input',
  decorators: [
    Story => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
} as Meta<typeof Input>;

/**
 * Typings StoryObje
 */
type Story = StoryObj<typeof Input>;

export const TextThin100: Story = {
  name: 'Input - Simple',
  args: {
    name: 'cpf',
    textLabel: 'CPF',
    width: '100%',
    height: '45px',
    backgroundColor: '#fafa',
    borderWidth: 1,
    borderColor: theme.colors.gray900,
    borderRadius: 8,
    paddingLeft: 16,
    placeholder: 'Text Input...',
    placeholderTextColor: theme.colors.gray900,
  },
};
