import type { Meta, StoryObj } from '@storybook/react';
import BasketBtn, { BasketBtnProps } from './BasketBtn';
import React from 'react';

const meta: Meta<typeof BasketBtn> = {
  title: 'BasketBtn',
  component: BasketBtn,
};

export default meta;

export const countEmpty: StoryObj<typeof BasketBtn> = {
  render: (args: BasketBtnProps) => <BasketBtn {...args} />,
  args: {
    count: 0,
  },
};

export const countNotEmpty: StoryObj<typeof BasketBtn> = {
  render: (args: BasketBtnProps) => <BasketBtn {...args} />,
  args: {
    count: 2,
  },
};
