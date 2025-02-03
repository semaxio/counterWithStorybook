import type {Meta, StoryObj} from '@storybook/react';
import {DisplayMessage} from "./DisplayMessage.tsx";

const meta: Meta<typeof DisplayMessage> = {
  component: DisplayMessage,
};

export default meta;
type Story = StoryObj<typeof DisplayMessage>;

export const DisplayMessageDefault: Story = {
  args: {
    title: "enter values and press 'set'",
    error: null
  },
};

export const DisplayMessageWithError: Story = {
  args: {
    title: 'incorrect value',
    error: 'incorrect value'
  },
};