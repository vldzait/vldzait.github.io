import type { Meta, StoryObj } from '@storybook/react';
import Logo from './Logo';
import React from 'react';

const meta: Meta<typeof Logo> = {
  title: 'Logo',
  component: Logo,
};

export default meta;

export const LogoDemo: StoryObj<typeof Logo> = {
  render: () => <Logo />,
  args: {},
};
