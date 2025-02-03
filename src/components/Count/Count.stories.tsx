import type { Meta, StoryObj } from '@storybook/react';

import { Count} from "./Count.tsx";

const meta: Meta<typeof Count> = {
  component: Count,
};

export default meta;
type Story = StoryObj<typeof Count>;

export const CountDefault: Story = {
  args: {
    settingsMode: null,
    value: 5,
    valueError: null,
    generalError: null,
  },
};

export const CountError: Story = {
  args: {
    settingsMode: null,
    value: 5,
    valueError: 'error',
    generalError: null,
  },
};
