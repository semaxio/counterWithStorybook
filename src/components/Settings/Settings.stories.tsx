import type {Meta, StoryObj} from '@storybook/react';
import {Settings} from "./Settings.tsx";

const meta: Meta<typeof Settings> = {
  component: Settings,
};

export default meta;
type Story = StoryObj<typeof Settings>;

export const SettingsDefault: Story = {
  args: {
    maxValue: 10,
    startValue: 1,
    maxValueError: null,
    startValueError: null,
    startValueHandler: () => {
    },
    maxValueHandler: () => {
    }
  },
};

export const SettingsBothError: Story = {
  args: {
    maxValue: 1,
    startValue: 1,
    maxValueError: 'error',
    startValueError: 'error',
    startValueHandler: () => {
    },
    maxValueHandler: () => {
    }
  },
};

export const SettingsMaxValueError: Story = {
  args: {
    maxValue: 0,
    startValue: 1,
    maxValueError: 'error',
    startValueError: null,
    startValueHandler: () => {
    },
    maxValueHandler: () => {
    }
  },
};

export const SettingsStartValueError: Story = {
  args: {
    maxValue: 10,
    startValue: -1,
    maxValueError: null,
    startValueError: 'error',
    startValueHandler: () => {
    },
    maxValueHandler: () => {
    }
  },
};