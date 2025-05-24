import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Resizer from './Resizer';
import img from './img.gif';
import ComponentInfo from '../componentInfo/ComponentInfo';

const Wrapper = () => (
  <ComponentInfo title="Resizer" desc={`При нажатии на зеленый квадрат можно изменять размеры элементов`}>
    <Resizer initialHeight={100} initialWidth={320}>
      {() => (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at, dolore earum enim est eveniet facilis
          illo impedit in, itaque maxime necessitatibus nesciunt nihil non officiis placeat provident quasi reiciendis.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at, dolore earum enim est eveniet facilis
          illo impedit in, itaque maxime necessitatibus nesciunt nihil non officiis placeat provident quasi reiciendis.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at, dolore earum enim est eveniet facilis
          illo impedit in, itaque maxime necessitatibus nesciunt nihil non officiis placeat provident quasi reiciendis.
        </div>
      )}
    </Resizer>
    <br />
    <br />
    <div>
      <Resizer initialHeight={108 * 3} initialWidth={144 * 3}>
        {(size) => <img src={img} alt="" width={size.width} height={size.height} style={{ objectFit: 'cover' }} />}
      </Resizer>
    </div>
  </ComponentInfo>
);

const meta: Meta<typeof Resizer> = {
  title: 'Resizer',
  component: Wrapper,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {};
