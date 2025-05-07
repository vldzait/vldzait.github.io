import type { Meta, StoryObj } from '@storybook/react';
import ShortProductView from './ShortProductView';
import { Product } from 'src/types/Product.type';
import React from 'react';

const meta: Meta<typeof ShortProductView> = {
  title: 'Product/ShortProductView',
  component: ShortProductView,
};

export default meta;

export const ShortProductViewDemo: StoryObj<typeof ShortProductView> = {
  render: (args: Product) => <ShortProductView {...args} />,
  args: {
    id: 'dksdkf23',
    name: 'Product 1',
    photo: 'https://i.pinimg.com/736x/4a/ad/a7/4aada7610c2007931039b3c6a26e63fd.jpg',
    desc: 'desc product',
    price: 199,
    createdAt: 'vchera',
    category: {
      id: 'dksdkf23',
      name: 'string',
      photo: 'https://i.pinimg.com/736x/4a/ad/a7/4aada7610c2007931039b3c6a26e63fd.jpg',
    },
  },
};
