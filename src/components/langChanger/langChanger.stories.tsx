import type { Meta, StoryObj } from '@storybook/react';
import Header from './../header/Header';
import React from 'react';
import ThemeProvider from '../themeProvider/ThemeProvider';

const meta: Meta<typeof Header> = {
  title: 'LangChanger',
  component: Header,
};

export default meta;

export const LangChangerDemo: StoryObj<typeof Header> = {
  render: () => (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  ),
  args: {},
};
