import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';

import { ALoading } from './ALoading';

export default {
  title: 'Loading',
  component: ALoading,
  parameters: {
    docs: {
      description: {
        component:
          'Utilize as variações do componente Loading para mostrar carregamento de dados em janelas, botões, etc.',
      },
    },
  },
} as ComponentMeta<typeof ALoading>;

const ComponentContainer = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Loading: ComponentStory<typeof ALoading> = ({ type, color }) => (
  <ComponentContainer>
    <ALoading type={type} color={color} />
  </ComponentContainer>
);

Loading.args = {
  type: 'ring',
  color: 'black',
};

export const Types: ComponentStory<typeof ALoading> = () => (
  <ComponentContainer>
    <h4>Ring</h4>
    <ALoading type="ring" />

    <h4>Spinner</h4>
    <ALoading type="spinner" />

    <h4>Roller</h4>
    <ALoading type="roller" />

    <h4>Ellipsis</h4>
    <ALoading type="ellipsis" />
  </ComponentContainer>
);

Types.parameters = {
  docs: {
    storyDescription: 'Variações de tipos',
  },
};

export const Colors: ComponentStory<typeof ALoading> = () => (
  <ComponentContainer>
    <h4>Black</h4>
    <ALoading color="black" />

    <h4>Blue</h4>
    <ALoading color="blue" />

    <h4>Dark blue</h4>
    <ALoading color="dark-blue" />

    <h4>Light Blue</h4>
    <ALoading color="light-blue" />

    <h4>Red</h4>
    <ALoading color="red" />

    <h4>Light red</h4>
    <ALoading color="light-red" />

    <h4>Dark red</h4>
    <ALoading color="dark-red" />

    <h4>Yellow</h4>
    <ALoading color="yellow" />

    <h4>Green</h4>
    <ALoading color="green" />

    <h4>Grey</h4>
    <ALoading color="grey" />

    <h4>Black</h4>
    <ALoading color="black" />

    <h4>White</h4>
    <ALoading color="white" />
  </ComponentContainer>
);

Colors.parameters = {
  docs: {
    storyDescription: 'Variações de cores',
  },
};
