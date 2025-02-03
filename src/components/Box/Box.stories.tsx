import type {Meta, StoryObj} from '@storybook/react';

import {Box} from "./Box.tsx";
import {Display} from "../Display/Display.tsx";
import {Count} from "../Count/Count.tsx";
import {Controls} from "../Controls/Controls.tsx";
import {DisplayMessage} from "../DisplayMessage/DisplayMessage.tsx";
import {Settings} from "../Settings/Settings.tsx";

const meta: Meta<typeof Box> = {
  component: Box,
};

export default meta;

type Story = StoryObj<typeof Box>;


export const BoxDefault: Story = {
  args: {
    children: null
  }
}

export const BoxCount: Story = {
  args: {
    children: [Display({
      children: Count({
        settingsMode: null,
        value: 5,
        valueError: null,
        generalError: null,
      })
    }),
      Controls({
        settings: false,
        generalError: null,
      })
    ],
  },
};

export const BoxCountWithMessage: Story = {
  args: {
    children: [Display({
      children: DisplayMessage({
        title: 'enter values and press \'set\'',
        error: null,
      })
    }),
      Controls({
        settings: false,
        generalError: null,
        settingsMode: "mode",
      })
    ],
  },
};


export const BoxCountWithErrorMessage: Story = {
  args: {
    children: [Display({
      children: DisplayMessage({
        title: 'incorrect value',
        error: 'error',
      })
    }),
      Controls({
        settings: false,
        generalError: null,
        settingsMode: "mode",
      })
    ],
  },
};

export const BoxSettings: Story = {
  args: {
    children: [Display({
      children: Settings({
        maxValue: 7,
        startValue: 4,
        maxValueError:  null,
        startValueError: null,
        startValueHandler: () => {},
        maxValueHandler: () => {}
      })
    }),
      Controls({
        settings: true,
        generalError: null,
        settingsMode: "mode",
      })
    ],
  },
};
