import type { Meta, StoryObj } from '@storybook/react';
import ShortOperationView, { ShortOperationViewProps } from './ShortOperationView';
import React from 'react';

const meta: Meta<typeof ShortOperationView> = {
  title: 'Operation/ShortOperationView',
  component: ShortOperationView,
};

export default meta;

export const ShortOperationViewDemo: StoryObj<typeof ShortOperationView> = {
  render: (args: ShortOperationViewProps) => <ShortOperationView {...args} />,
  args: {
    sum: 199,
    category: 'Category 1',
    name: 'Operaton 1',
    desc: 'Pokypka sigaretki. trata denyak ne razymnai!',
  },
};
