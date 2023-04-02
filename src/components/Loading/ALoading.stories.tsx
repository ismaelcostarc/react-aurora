import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ALoading } from './ALoading';

export default {
  title: 'Loading',
  component: ALoading,
} as ComponentMeta<typeof ALoading>;

const componentContainerStyle = {
  padding: '3rem',
  display: 'flex',
  'flex-direction': 'column',
  gap: '1rem',
};

export const Loading: ComponentStory<typeof ALoading> = ({ type }) => (
  <>
    <h2>Loading</h2>
    <p>
      Utilize as variações do componente <strong>Loading</strong> para mostrar carregamento de dados em janelas, botões,
      etc.
    </p>

    <div style={componentContainerStyle}>
      <ALoading type={type} />
    </div>
  </>
);

Loading.args = {
  type: 'spinner',
  color: 'black',
};

export const Colors: ComponentStory<typeof ALoading> = () => (
  <>
    <h3>Variações de cores</h3>

    <div style={componentContainerStyle}>
      <ALoading />
    </div>
  </>
);
