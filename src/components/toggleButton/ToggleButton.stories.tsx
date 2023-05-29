import type { Meta, StoryObj } from '@storybook/react';
import ToggleButton from './ToggleButton';

const meta: Meta<typeof ToggleButton> = {
    title: 'ATOMS/Toggle Button',
    component: ToggleButton,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const Default: Story = {};
