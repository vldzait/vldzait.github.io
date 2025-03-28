import type { Meta, StoryObj } from '@storybook/react';
import BasketItem, { BasketItemProps } from './BasketItem';
import React from 'react';

const meta: Meta<typeof BasketItem> = {
  title: 'BasketItem',
  component: BasketItem,
};

export default meta;

export const BasketItemDemo: StoryObj<typeof BasketItem> = {
  render: (args: BasketItemProps) => <BasketItem {...args} />,
  args: {
    sum: 1,
    category: 'Category 1',
    name: 'item 1',
    desc: 'Kypili item1. pokypka pokypochka!',
    date: '09.08.2003',
  },
};
