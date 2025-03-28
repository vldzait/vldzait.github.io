import type { Meta, StoryObj } from '@storybook/react';
import FullProductView, { FullProductViewProps } from './FullProductView';
import React from 'react';

const meta: Meta<typeof FullProductView> = {
  title: 'Product/FullProductView',
  component: FullProductView,
};

export default meta;

export const FullProductViewDemo: StoryObj<typeof FullProductView> = {
  render: (args: FullProductViewProps) => <FullProductView {...args} />,
  args: {
    price: 199,
    photo: 'Category 1',
    category: 'Category 1',
    name: 'Operaton 1',
    desc: 'Pokypka sigaretki. trata denyak ne razymnai',
  },
};
