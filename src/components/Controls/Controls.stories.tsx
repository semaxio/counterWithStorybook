import type {Meta, StoryObj} from '@storybook/react';
import {Controls} from "./Controls.tsx";


const meta: Meta<typeof Controls> = {
  component: Controls,
};

export default meta;
type Story = StoryObj<typeof Controls>;

export const OnSettings: Story = {
  args: {
    settings: true
  }
};

export const OffSettings: Story = {
  args: {
    settings: false
  }
};