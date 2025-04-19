import type { Meta, StoryObj } from '@storybook/react';
import AdditionalComponent from './AdditionalComponent';
import React from 'react';

const meta: Meta<typeof AdditionalComponent> = {
  title: 'AdditionalComponent',
  component: AdditionalComponent,
};

export default meta;

export const openModal: StoryObj<typeof AdditionalComponent> = {
  render: () => <AdditionalComponent />,
};
