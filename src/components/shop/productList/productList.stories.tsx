import type { Meta, StoryObj } from '@storybook/react';
import ProductList, { ProductListProps } from './ProductList';
import React from 'react';

const meta: Meta<typeof ProductList> = {
  title: 'Product/ProductListDemo',
  component: ProductList,
};

export default meta;

export const ProductListDemo: StoryObj<typeof ProductList> = {
  render: (args: ProductListProps) => <ProductList {...args} />,
  args: {
    products: [],
  },
};
