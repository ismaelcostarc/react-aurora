import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AButton } from './AButton';

export default {
  title: 'Button',
  component: AButton,
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof AButton>;

const groupButtonStyle = {
  padding: '3rem',
  display: 'flex',
  'justify-content': 'start',
  'flex-direction': 'column',
  gap: '1rem',
};

export const Colors: ComponentStory<typeof AButton> = () => (
  <>
    <h2>Button</h2>
    <p>
      Utilize as variações do componente <strong>Button</strong> em modais, formulários, etc. Este componente possui
      diferentes estilos e variações.
    </p>

    <h3>Variações de cores</h3>

    <div style={groupButtonStyle}>
      <AButton>Default</AButton>
      <AButton type="warning">Warning</AButton>
      <AButton type="black">Black</AButton>
      <AButton type="outlined">Outlined</AButton>
    </div>
  </>
);

export const Disabled: ComponentStory<typeof AButton> = () => (
  <>
    <h3>Versão desabilitada</h3>

    <div style={groupButtonStyle}>
      <AButton disabled>Disabled</AButton>
    </div>
  </>
);

export const Size: ComponentStory<typeof AButton> = () => (
  <>
    <h3>Variações de tamanhos</h3>

    <div style={groupButtonStyle}>
      <AButton size="small">Small</AButton>
      <AButton size="medium">Medium</AButton>
      <AButton size="large">Large</AButton>
    </div>
  </>
);
