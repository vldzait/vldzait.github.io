import type { Meta, StoryObj } from '@storybook/react';
import Modal, { ModalProps } from './Modal';
import React from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
};

export default meta;

export const openModal: StoryObj<typeof Modal> = {
  render: (args: ModalProps) => <Modal {...args} />,
  args: {
    visible: true,
    children: <div>2</div>,
  },
};
