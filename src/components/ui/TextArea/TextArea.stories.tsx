import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import Textarea from '.';

const meta = {
  title: 'Design System/Components/Textarea',
  component: Textarea,
  args: {
    label: 'Textarea Label',
    placeholder: 'Enter some text here…',
    disabled: false,
    required: false,
  },
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      description: 'Label of the text area',
    },
    placeholder: {
      name: 'Placeholder',
      control: 'text',
      description: 'Placeholder text of the text area',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disables the text area',
    },
    required: {
      name: 'Required',
      control: 'boolean',
      description: 'Marks the text area as required',
    },
  },
} as Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    await userEvent.type(textArea, 'Hello, world!');
    expect(textArea).toHaveValue('Hello, world!');
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    expect(textArea).toBeDisabled();

    await userEvent.type(textArea, 'Hello, world!');
    expect(textArea).toHaveValue('');
  },
};

export const WithCount: Story = {
  args: {
    maxLength: 100,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    await userEvent.type(textArea, 'Hello, world!');
    expect(textArea).toHaveValue('Hello, world!');

    // The text area should be valid
    expect(textArea).toHaveAttribute('aria-invalid', 'false');

    // The text area should be invalid
    await userEvent.type(
      textArea,
      'This text is too long and will surpass the max length and be invalid. It should trigger the invalid state.',
    );
    const charCount = canvas.getByTestId('length');
    expect(charCount).toHaveTextContent('119');

    expect(textArea).toHaveAttribute('aria-invalid', 'true');
  },
};
