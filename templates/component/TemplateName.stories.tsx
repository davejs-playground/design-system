import type { Meta, StoryObj } from '@storybook/react-vite';

import TemplateName from './TemplateName';

const meta = {
  title: 'Components/TemplateName',
  component: TemplateName,
} satisfies Meta<typeof TemplateName>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // args
  },
  render: (args) => <TemplateName {...args} />,
  parameters: {
    docs: {
      description: {
        component: 'TemplateName',
      },
      story: 'Primary',
      name: 'TemplateName',
      parameters: {
        docs: {
          description: {
            component: 'TemplateName',
          },
        },
      },
    },
  },
};
