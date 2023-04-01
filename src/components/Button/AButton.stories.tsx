import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AButton } from './AButton';

export default {
  title: 'Botão',
  component: AButton,
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof AButton>;

export const Default: ComponentStory<typeof AButton> = () => (
  <>
    <h2>Botão</h2>
    <p>
      Utilize as variações do componente <strong>Button</strong> em modais, formulários, etc. Este componente possui
      diferentes estilos e variações.
    </p>
    <div style={{ padding: '5rem' }}>
      <AButton>Default</AButton>
    </div>
  </>
);

export const Warning: ComponentStory<typeof AButton> = () => <AButton type="warning">Warning</AButton>;

export const Black: ComponentStory<typeof AButton> = () => <AButton type="black">Black</AButton>;

export const Outlined: ComponentStory<typeof AButton> = () => <AButton type="outlined">Outlined</AButton>;

export const Disabled: ComponentStory<typeof AButton> = () => <AButton disabled>Disabled</AButton>;
