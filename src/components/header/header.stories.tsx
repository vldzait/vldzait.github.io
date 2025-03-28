import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import React from 'react';

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
};

export default meta;

export const HeaderDemo: StoryObj<typeof Header> = {
  render: () => <Header />,
  args: {},
};
