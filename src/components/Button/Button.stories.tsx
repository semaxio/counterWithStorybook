import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button.tsx'

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Inc: Story = {
  args: {
    title: 'inc',
    disabled: false,
  },
};

export const Reset: Story = {
  args: {
    title: 'reset',
    disabled: false,
  },
};

export const Set: Story = {
  args: {
    title: 'set',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: 'inc',
    disabled: true,
  },
};