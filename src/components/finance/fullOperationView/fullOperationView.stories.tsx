import type { Meta, StoryObj } from '@storybook/react';
import FullOperationView, { FullOperationViewProps } from './FullOperationView';
import React from 'react';

const meta: Meta<typeof FullOperationView> = {
  title: 'Operation/FullOperationView',
  component: FullOperationView,
};

export default meta;

export const FullOperationViewDemo: StoryObj<typeof FullOperationView> = {
  render: (args: FullOperationViewProps) => <FullOperationView {...args} />,
  args: {
    sum: 1,
    category: 'Category 1',
    name: 'Operaton 1',
    desc: 'Pokypka pokypochka',
    date: '09.08.2003',
  },
};
