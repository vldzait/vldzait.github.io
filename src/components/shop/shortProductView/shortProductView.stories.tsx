import type { Meta, StoryObj } from '@storybook/react';
import ShortProductView, { ShortProductViewProps } from './ShortProductView';
import React from 'react';

const meta: Meta<typeof ShortProductView> = {
  title: 'Product/ShortProductView',
  component: ShortProductView,
};

export default meta;

export const ShortProductViewDemo: StoryObj<typeof ShortProductView> = {
  render: (args: ShortProductViewProps) => <ShortProductView {...args} />,
  args: {
    price: 199,
    photo: 'Category 1',
    name: 'Operaton 1',
    desc: 'Pokypka sigaretki. trata denyak ne razymnai',
  },
};
