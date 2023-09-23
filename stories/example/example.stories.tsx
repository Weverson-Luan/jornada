import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Meta, StoryObj} from '@storybook/react';

// components
import {Example} from '@presentation/components/example/example';

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
  component: Example,
  title: 'Example',
  decorators: [
    Story => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
} as Meta<typeof Example>;

/**
 * Typings StoryObje
 */
type Story = StoryObj<typeof Example>;

export const TextThin100: Story = {
  name: 'Example - Simple',
  args: {
    text: 'Expresso figueiredo',
    color: theme.colors.gray700,
  },
};
