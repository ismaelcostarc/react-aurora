import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AButton } from './AButton';

import styled from 'styled-components';

export default {
  title: 'Button',
  component: AButton,
  parameters: {
    docs: {
      description: {
        component:
          'Use as variations of the <strong>Button</strong> component in modals, forms, etc. This component has different styles and variations.',
      },
    },
  },
} as ComponentMeta<typeof AButton>;

const ComponentContainer = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Button: ComponentStory<typeof AButton> = ({ type, size, disabled, width }) => (
  <ComponentContainer>
    <AButton
      size={size}
      disabled={disabled}
      type={type}
      width={width}
      key={Math.random()}
      clickCb={() => alert('Botão foi clicado')}
    >
      Botão
    </AButton>
  </ComponentContainer>
);

Button.args = {
  type: 'default',
  size: 'medium',
  disabled: false,
  width: 'children',
};

export const Colors: ComponentStory<typeof AButton> = () => (
  <ComponentContainer>
    <AButton>Default</AButton>
    <AButton type="warning">Warning</AButton>
    <AButton type="black">Black</AButton>
    <AButton type="outlined">Outlined</AButton>
  </ComponentContainer>
);

Colors.parameters = {
  docs: {
    storyDescription: 'Variações de cores',
  },
};

export const Disabled: ComponentStory<typeof AButton> = () => (
  <ComponentContainer>
    <AButton disabled>Disabled</AButton>
  </ComponentContainer>
);

Disabled.parameters = {
  docs: {
    storyDescription: 'Versão desabilitada',
  },
};

export const Size: ComponentStory<typeof AButton> = () => (
  <ComponentContainer>
    <AButton size="small">Small</AButton>
    <AButton size="medium">Medium</AButton>
    <AButton size="large">Large</AButton>
  </ComponentContainer>
);

Size.parameters = {
  docs: {
    storyDescription: 'Variações de tamanhos',
  },
};

export const Width: ComponentStory<typeof AButton> = () => (
  <ComponentContainer>
    <AButton width="children">Children</AButton>
    <AButton width="block">Block</AButton>
  </ComponentContainer>
);

Width.parameters = {
  docs: {
    storyDescription: 'Variações de comprimento',
  },
};
