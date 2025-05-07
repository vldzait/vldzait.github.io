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
    // products: [
    //   {
    //     id: 'dksdkf23',
    //     name: 'Product 1',
    //     photo: 'https://i.pinimg.com/736x/4a/ad/a7/4aada7610c2007931039b3c6a26e63fd.jpg',
    //     desc: 'desc product',
    //     price: 199,
    //     createdAt: 'vchera',
    //     category: {
    //       id: 'dksdkf23',
    //       name: 'string',
    //       photo: 'https://i.pinimg.com/736x/4a/ad/a7/4aada7610c2007931039b3c6a26e63fd.jpg',
    //     },
    //   },
    //   {
    //     id: 'dksdkf22',
    //     name: 'Product 2',
    //     photo: 'https://i.pinimg.com/736x/4a/ad/a7/4aada7610c2007931039b3c6a26e63fd.jpg',
    //     desc: 'desc product',
    //     price: 199,
    //     createdAt: 'vchera',
    //     category: {
    //       id: 'dksdkf23',
    //       name: 'string',
    //       photo: 'https://i.pinimg.com/736x/4a/ad/a7/4aada7610c2007931039b3c6a26e63fd.jpg',
    //     },
    //   },
    //   {
    //     id: 'dksdkf233',
    //     name: 'Product 3',
    //     photo: 'https://i.pinimg.com/736x/4a/ad/a7/4aada7610c2007931039b3c6a26e63fd.jpg',
    //     desc: 'desc product',
    //     price: 199,
    //     createdAt: 'vchera',
    //     category: {
    //       id: 'dksdkf23',
    //       name: 'string',
    //       photo: 'https://i.pinimg.com/736x/4a/ad/a7/4aada7610c2007931039b3c6a26e63fd.jpg',
    //     },
    //   },
    // ],
  },
};
