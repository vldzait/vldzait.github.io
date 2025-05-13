import type { Meta, StoryObj } from '@storybook/react';

import Collapse, { CollapseProps } from './Collapse';
import ComponentInfo from '../componentInfo/ComponentInfo';
import React from 'react';

const Wrapper = (props: CollapseProps) => (
  <ComponentInfo title="Collapse" desc={`Компонент использует useLayoutEffect, ResizeObserver и onTransitionEnd.`}>
    <Collapse {...props} />
  </ComponentInfo>
);

const meta: Meta<typeof Collapse> = {
  title: 'Collapse',
  component: Wrapper,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    isOpen: true,
    children: `Это компонент Collapse. Он принимает только opened, duration и children.`,
    duration: 100,
  },
};
