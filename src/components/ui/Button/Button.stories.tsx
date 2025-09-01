import type { Meta, StoryObj } from '@storybook/react-vite';
import { PlusIcon } from 'lucide-react';

import Button from '.';

const meta = {
  title: 'Design System/Components/Button',
  component: Button,
  argTypes: {
    type: {
      name: 'type',
      control: {
        type: 'radio' as const,
      },
      options: ['button', 'submit', 'reset'] as const,
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    children: 'Click me!',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Button {...args} />,
};

export const WithEdgeCases: Story = {
  name: '...with edge cases',
  render: (args) => (
    <div className="flex max-w-[300px] content-normal items-start gap-2 flex-wrap">
      <Button {...args}>This text is too long to and will overflow the button</Button>
      <Button {...args} disabled>
        Disabled
      </Button>
      <Button {...args} isLoading>
        Loading
      </Button>
    </div>
  ),
};

export const WithAppearances: Story = {
  name: '...with appearances',
  args: {
    onClick: () => console.log('clicked'),
  },
  render: (args) => (
    <div className="flex gap-2">
      <Button {...args}>Default</Button>
      <Button {...args} appearance="secondary">
        Secondary
      </Button>
      <Button {...args} appearance="warning">
        Warning
      </Button>
      <Button {...args} appearance="destructive">
        Destructive
      </Button>
      <Button {...args} appearance="link">
        Link
      </Button>
    </div>
  ),
};

export const WithSizes: Story = {
  name: '...with sizes',
  args: {
    onClick: () => console.log('clicked'),
  },
  render: (args) => (
    <div className="flex items-start gap-2">
      <Button {...args} size="small">
        Small
      </Button>
      <Button {...args} size="small" isIconOnly>
        <PlusIcon />
      </Button>
      <Button {...args} size="medium">
        Medium
      </Button>
      <Button {...args} size="medium" isIconOnly>
        <PlusIcon />
      </Button>
      <Button {...args} size="large">
        Large
      </Button>
      <Button {...args} size="large" isIconOnly>
        <PlusIcon />
      </Button>
    </div>
  ),
};
