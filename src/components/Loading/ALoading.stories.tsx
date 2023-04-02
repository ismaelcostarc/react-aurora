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

export const Loading: ComponentStory<typeof ALoading> = ({ type, color }) => (
  <>
    <h2>Loading</h2>
    <p>
      Utilize as variações do componente <strong>Loading</strong> para mostrar carregamento de dados em janelas, botões,
      etc.
    </p>

    <div style={componentContainerStyle}>
      <ALoading type={type} color={color} />
    </div>
  </>
);

Loading.args = {
  type: 'ring',
  color: 'black',
};

export const Types: ComponentStory<typeof ALoading> = () => (
  <>
    <h3>Variações de tipos</h3>

    <div style={componentContainerStyle}>
      <h4>Ring</h4>
      <ALoading type="ring" />

      <h4>Spinner</h4>
      <ALoading type="spinner" />

      <h4>Roller</h4>
      <ALoading type="roller" />

      <h4>Ellipsis</h4>
      <ALoading type="ellipsis" />
    </div>
  </>
);

export const Colors: ComponentStory<typeof ALoading> = () => (
  <>
    <h3>Variações de cores</h3>

    <div style={componentContainerStyle}>
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
    </div>
  </>
);
