import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => <Button type="primary">Primeiro</Button>;

export const Secondary: ComponentStory<typeof Button> = () => <Button type="primary">Segundo</Button>;

export const Tertiary: ComponentStory<typeof Button> = () => <Button type="primary">Terceiro</Button>;
