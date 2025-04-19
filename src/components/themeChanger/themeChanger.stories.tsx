import type { Meta, StoryObj } from '@storybook/react';
import Header from '../header/Header';
import React from 'react';
import ThemeProvider from '../themeProvider/ThemeProvider';

const meta: Meta<typeof Header> = {
  title: 'ThemeChanger',
  component: Header,
};

export default meta;

export const ThemeChangerDemo: StoryObj<typeof Header> = {
  render: () => (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  ),
  args: {},
};
