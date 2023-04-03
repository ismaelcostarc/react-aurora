var y=Object.defineProperty;var e=(o,i)=>y(o,"name",{value:i,configurable:!0});import{j as t,s as B,a as d}from"./styled-components.browser.esm-80f031ed.js";import{r as h}from"./index-1a4f2307.js";import"./iframe-ef21d30f.js";const f="_button_18o36_1",a={button:f,"button--default":"_button--default_18o36_13","button--warning":"_button--warning_18o36_17","button--black":"_button--black_18o36_21","button--outlined":"_button--outlined_18o36_25","button--disabled":"_button--disabled_18o36_33","button--small":"_button--small_18o36_37","button--medium":"_button--medium_18o36_41","button--large":"_button--large_18o36_45","button--block":"_button--block_18o36_49"},n=e(({type:o,disabled:i,size:r,width:s,clickCb:c,children:u})=>{const m=e(b=>{b.stopPropagation(),c&&c()},"handleClick"),p=h.useMemo(()=>`
  ${a.button} 
  ${a["button--"+o]} 
  ${a["button--"+r]} 
  ${a["button--"+s]} 
  ${i&&a["button--disabled"]} 
  `,[o]);return t("button",{className:p,disabled:i,onClick:m,children:u})},"AButton");n.defaultProps={type:"default",disabled:!1,size:"medium",width:"children"};try{n.displayName="AButton",n.__docgenInfo={description:"",displayName:"AButton",props:{type:{defaultValue:{value:"default"},description:"O tipo de botão.",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"warning"'},{value:'"black"'},{value:'"outlined"'}]}},disabled:{defaultValue:{value:"false"},description:"A versão desabilitada do botão.",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"Tamanho do botão.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},width:{defaultValue:{value:"children"},description:"Comprimento do botão, se ele será do tamanho do conteúdo filho, ou irá ocupar o block de linha inteiro.",name:"width",required:!1,type:{name:"enum",value:[{value:'"children"'},{value:'"block"'}]}},clickCb:{defaultValue:null,description:"Callback que será disparado ao clicar no botão.",name:"clickCb",required:!1,type:{name:"(() => void)"}}}}}catch{}const x={title:"Button",component:n,parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AButton } from './AButton';

import styled from 'styled-components';

export default {
  title: 'Button',
  component: AButton,
  parameters: {
    docs: {
      description: {
        component:
          'Utilize as variações do componente <strong>Button</strong> em modais, formulários, etc. Este componente possui diferentes estilos e variações.',
      },
    },
  },
} as ComponentMeta<typeof AButton>;

const ComponentContainer = styled.div\`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
\`;

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
`,locationsMap:{button:{startLoc:{col:54,line:27},endLoc:{col:1,line:40},startBody:{col:54,line:27},endBody:{col:1,line:40}},colors:{startLoc:{col:54,line:49},endLoc:{col:1,line:56},startBody:{col:54,line:49},endBody:{col:1,line:56}},disabled:{startLoc:{col:56,line:64},endLoc:{col:1,line:68},startBody:{col:56,line:64},endBody:{col:1,line:68}},size:{startLoc:{col:52,line:76},endLoc:{col:1,line:82},startBody:{col:52,line:76},endBody:{col:1,line:82}},width:{startLoc:{col:53,line:90},endLoc:{col:1,line:95},startBody:{col:53,line:90},endBody:{col:1,line:95}}}},docs:{description:{component:"Utilize as variações do componente <strong>Button</strong> em modais, formulários, etc. Este componente possui diferentes estilos e variações."}}}},l=B.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,C=e(({type:o,size:i,disabled:r,width:s})=>t(l,{children:t(n,{size:i,disabled:r,type:o,width:s,clickCb:()=>alert("Botão foi clicado"),children:"Botão"},Math.random())}),"Button");C.args={type:"default",size:"medium",disabled:!1,width:"children"};const _=e(()=>d(l,{children:[t(n,{children:"Default"}),t(n,{type:"warning",children:"Warning"}),t(n,{type:"black",children:"Black"}),t(n,{type:"outlined",children:"Outlined"})]}),"Colors");_.parameters={docs:{storyDescription:"Variações de cores"}};const A=e(()=>t(l,{children:t(n,{disabled:!0,children:"Disabled"})}),"Disabled");A.parameters={docs:{storyDescription:"Versão desabilitada"}};const g=e(()=>d(l,{children:[t(n,{size:"small",children:"Small"}),t(n,{size:"medium",children:"Medium"}),t(n,{size:"large",children:"Large"})]}),"Size");g.parameters={docs:{storyDescription:"Variações de tamanhos"}};const v=e(()=>d(l,{children:[t(n,{width:"children",children:"Children"}),t(n,{width:"block",children:"Block"})]}),"Width");v.parameters={docs:{storyDescription:"Variações de comprimento"}};const E=["Button","Colors","Disabled","Size","Width"];export{C as Button,_ as Colors,A as Disabled,g as Size,v as Width,E as __namedExportsOrder,x as default};
//# sourceMappingURL=AButton.stories-872e77b8.js.map
