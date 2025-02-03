import type {Meta, StoryObj} from '@storybook/react';
import {Display} from "./Display.tsx";
import {Count} from "../Count/Count.tsx";
import {Settings} from "../Settings/Settings.tsx";
import {DisplayMessage} from "../DisplayMessage/DisplayMessage.tsx";

const meta: Meta<typeof Display> = {
  component: Display,
};

export default meta;
type Story = StoryObj<typeof Display>;

export const DisplayDefault: Story = {
  args: {},
};

export const DisplayWithCount: Story = {
  args: {
    children: Count({
      settingsMode: null,
      value: 5,
      valueError: null,
      generalError: null
    }),
  },
};


export const DisplayWithCountError: Story = {
  args: {
    children: Count({
      settingsMode: null,
      value: 5,
      valueError: 'error',
      generalError: null
    }),
  },
};

export const DisplayWithSetting: Story = {
  args: {
    children: Settings({
      maxValue: 10,
      startValue: 1,
      maxValueError: null,
      startValueError: null,
      startValueHandler: () => {
      },
      maxValueHandler: () => {
      },
    })
  }
};

export const DisplayWithMaxValueError: Story = {
  args: {
    children: Settings({
      maxValue: 1,
      startValue: 1,
      maxValueError: 'error',
      startValueError: null,
      startValueHandler: () => {
      },
      maxValueHandler: () => {
      },
    }),
  },
};

export const DisplayWithMessage: Story = {
  args: {
    children: DisplayMessage({
      title: 'enter values and press \'set\'',
      error: null,
    })
  }
};

export const DisplayWithErrorMessage: Story = {
  args: {
    children: DisplayMessage({
      title: 'incorrect value',
      error: 'incorrect value',
    })
  }
};


