import type { Meta, StoryObj } from '@storybook/react';
import Selector from './Selector';

const meta: Meta<typeof Selector> = {
  title: 'PROVIDER/Selector',
  component: Selector,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Selector>;

export const Default: Story = {};
