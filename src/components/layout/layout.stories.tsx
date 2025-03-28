import type { Meta, StoryObj } from '@storybook/react';
import Layout from './Layout';
import React from 'react';

const meta: Meta<typeof Layout> = {
  title: 'Layout',
  component: Layout,
};

export default meta;

export const LayoutDemo: StoryObj<typeof Layout> = {
  render: () => <Layout />,
  args: {},
};
