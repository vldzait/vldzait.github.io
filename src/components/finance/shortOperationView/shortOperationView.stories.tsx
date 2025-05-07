import type { Meta, StoryObj } from '@storybook/react';
import ShortOperationView from './ShortOperationView';
import { Operation } from 'src/types/Operation.type';
import React from 'react';

const meta: Meta<typeof ShortOperationView> = {
  title: 'Operation/ShortOperationView',
  component: ShortOperationView,
};

export default meta;

export const ShortOperationViewDemo: StoryObj<typeof ShortOperationView> = {
  render: (args: Operation) => <ShortOperationView {...args} />,
  args: {
    id: 'dksdkf233',
    amount: 199,
    category: {
      id: 'dksdkf23',
      name: 'string',
      photo: 'https://i.pinimg.com/736x/4a/ad/a7/4aada7610c2007931039b3c6a26e63fd.jpg',
    },
    name: 'Operaton 1',
    desc: 'Pokypka sigaretki. trata denyak ne razymnai!',
    type: 'Profit',
    createdAt: 'vchera',
  },
};
