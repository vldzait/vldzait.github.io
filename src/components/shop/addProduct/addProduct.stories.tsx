import type { Meta, StoryObj } from '@storybook/react';
import AddProduct, { AddProductProps } from './AddProduct';
import React from 'react';
import { createRandomProduct } from '../../../services/service';

const meta: Meta<typeof AddProduct> = {
  title: 'Product/AddProduct',
  component: AddProduct,
};

export default meta;

export const AddProductDemo: StoryObj<typeof AddProduct> = {
  render: (args: AddProductProps) => <AddProduct {...args} />,
  args: {
    label: 'Показать еще',
    onClick: createRandomProduct,
  },
};
