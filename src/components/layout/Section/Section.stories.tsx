import type { Meta, StoryObj } from '@storybook/react';
import Section from './index';

const meta: Meta<typeof Section> = {
  title: 'Layout/Section',
  component: Section,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    className: 'p-4 bg-gray-100',
    children: 'Este é um conteúdo dentro da Section',
  },
};

export const ComTituloEParagrafo: Story = {
  args: {
    className: 'p-6 bg-blue-100',
    children: (
      <div>
        <h2 className="text-xl font-bold">Título</h2>
        <p>Texto da section</p>
      </div>
    ),
  },
};
