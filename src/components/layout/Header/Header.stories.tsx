import type { Meta, StoryObj } from '@storybook/react';
import Header from './index';

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
};
