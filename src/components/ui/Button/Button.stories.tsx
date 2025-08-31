import type { Meta, StoryObj } from '@storybook/react-vite'
import { PlusIcon } from 'lucide-react'
import Button from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onClick: () => console.log('clicked'),
  },
  render: (args) => <Button {...args}>Click me</Button>,
  parameters: {
    docs: {
      description: {
        component: 'Button',
      },
      story: 'Default',
      name: 'Button',
      parameters: {
        docs: {
          description: {
            component: 'Button',
          },
        },
      },
    },
  },
}

export const WithEdgeCases: Story = {
  render: (args) => (
    <div className="flex max-w-[500px] content-normal items-start gap-2">
      <Button {...args}>
        This text is too long to and will overflow the button
      </Button>
      <Button {...args} disabled>
        Disabled
      </Button>
      <Button {...args} isLoading>
        Loading
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        component: 'Button',
      },
      story: 'Default',
      name: 'Button',
      parameters: {
        docs: {
          description: {
            component: 'Button',
          },
        },
      },
    },
  },
}

export const WithIntents: Story = {
  args: {
    onClick: () => console.log('clicked'),
  },
  render: (args) => (
    <div className="flex gap-2">
      <Button {...args}>Default</Button>
      <Button {...args} intent="secondary">
        Secondary
      </Button>
      <Button {...args} intent="warning">
        Warning
      </Button>
      <Button {...args} intent="destructive">
        Destructive
      </Button>
      <Button {...args} intent="link">
        Link
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        component: 'Button',
      },
      story: 'WithIntents',
      name: 'Button',
      parameters: {
        docs: {
          description: {
            component: 'Button',
          },
        },
      },
    },
  },
}

export const WithSizes: Story = {
  args: {
    onClick: () => console.log('clicked'),
  },
  render: (args) => (
    <div className="flex items-start gap-2">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="sm" isIconOnly>
        <PlusIcon />
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="md" isIconOnly>
        <PlusIcon />
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
      <Button {...args} size="lg" isIconOnly>
        <PlusIcon />
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        component: 'Button',
      },
      story: 'WithSizes',
      name: 'Button',
      parameters: {
        docs: {
          description: {
            component: 'Button',
          },
        },
      },
    },
  },
}
