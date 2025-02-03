import type {Meta, StoryObj} from '@storybook/react';

import {Input} from "./Input.tsx";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputDefault: Story = {
  args: {
    value: 4,
    error: null,
    callback: () => {}
  },
};

export const InputError: Story = {
  args: {
    value: 0,
    error: 'Error',
    callback: () => {}
  },
};