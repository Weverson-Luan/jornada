/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Modal } from '@presentation/components/modal/modal';
import { ModalActivity } from '@presentation/view/home/components/modal-activity/modal-activity';
import { type Meta, type StoryObj } from '@storybook/react';

// components

// styles

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
  component: Modal,
  title: 'Modal Change Activity',
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
} as Meta<typeof Modal>;

/**
 * Typings StoryObje
 */
type Story = StoryObj<typeof Modal>;

export const ModalActivityChange: Story = {
  name: 'Modal - Open',
  args: {
    isVisible: true,
    onClosedModal: () => {},
    children: <ModalActivity onClosedModal={() => {}} />,
  },
};

export const ModalActivityChangeClosed: Story = {
  name: 'Modal - Closed',
  args: {
    isVisible: false,
    onClosedModal: () => {},
    children: <ModalActivity onClosedModal={() => {}} />,
  },
};
