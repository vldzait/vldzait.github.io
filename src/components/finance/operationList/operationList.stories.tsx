import type { Meta, StoryObj } from '@storybook/react';
import OperationList, { OperationListProps } from './OperationList';
import React from 'react';

const meta: Meta<typeof OperationList> = {
  title: 'Operation/OperationListDemo',
  component: OperationList,
};

export default meta;

export const OperationListDemo: StoryObj<typeof OperationList> = {
  render: (args: OperationListProps) => <OperationList {...args} />,
  args: {
    operations: [
      {
        id: 'dksdkf23',
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
      {
        id: 'dksdkf3',
        amount: 100,
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
      {
        id: 'dksdkf3',
        amount: 200,
        category: {
          id: 'dksdkf23',
          name: 'string',
          photo: 'https://i.pinimg.com/736x/4a/ad/a7/4aada7610c2007931039b3c6a26e63fd.jpg',
        },
        name: 'Operaton 1',
        desc: 'Pokypka sigaretki. trata denyak ne razymnai!',
        type: 'Cost',
        createdAt: 'vchera',
      },
    ],
  },
};
