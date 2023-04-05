var h=Object.defineProperty;var t=(r,l)=>h(r,"name",{value:l,configurable:!0});import{s as p,a as i,j as n,F as g}from"./styled-components.browser.esm-80f031ed.js";import"./index-1a4f2307.js";import"./iframe-ef21d30f.js";const y="_ring_14u58_5",m="_spinner_14u58_43",u="_roller_14u58_133",L="_ellipsis_14u58_234",v="_ellipsis1_14u58_1",_="_ellipsis2_14u58_1",A="_ellipsis3_14u58_1",d={ring:y,spinner:m,roller:u,ellipsis:L,ellipsis1:v,ellipsis2:_,ellipsis3:A},e=t(({type:r,color:l})=>{const s={background:`var(--${l})`},a={borderColor:`var(--${l}) transparent transparent transparent`},o=p.div`
    &:after {
      background: var(--${l});
    }
  `;return r==="ring"?i("div",{className:d.ring,style:a,children:[n("div",{style:a}),n("div",{style:a}),n("div",{style:a}),n("div",{style:a})]}):r==="spinner"?i("div",{className:d.spinner,children:[n(o,{}),n(o,{}),n(o,{}),n(o,{}),n(o,{}),n(o,{}),n(o,{}),n(o,{}),n(o,{}),n(o,{}),n(o,{}),n(o,{})]}):r==="roller"?i("div",{className:d.roller,children:[n(o,{}),n(o,{}),n(o,{}),n(o,{}),n(o,{}),n(o,{}),n(o,{}),n(o,{})]}):r==="ellipsis"?i("div",{className:d.ellipsis,children:[n("div",{style:s}),n("div",{style:s}),n("div",{style:s}),n("div",{style:s})]}):n(g,{})},"ALoading");e.defaultProps={type:"ring",color:"black"};try{e.displayName="ALoading",e.__docgenInfo={description:"",displayName:"ALoading",props:{type:{defaultValue:{value:"ring"},description:"O tipo de formato do loading.",name:"type",required:!1,type:{name:"enum",value:[{value:'"ring"'},{value:'"spinner"'},{value:'"roller"'},{value:'"ellipsis"'}]}},color:{defaultValue:{value:"black"},description:"A cor do loading.",name:"color",required:!1,type:{name:"enum",value:[{value:'"black"'},{value:'"blue"'},{value:'"dark-blue"'},{value:'"light-blue"'},{value:'"red"'},{value:'"light-red"'},{value:'"dark-red"'},{value:'"yellow"'},{value:'"green"'},{value:'"grey"'},{value:'"white"'}]}}}}}catch{}const w={title:"Loading",component:e,parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
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

const ComponentContainer = styled.div\`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
\`;

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
`,locationsMap:{loading:{startLoc:{col:56,line:26},endLoc:{col:1,line:30},startBody:{col:56,line:26},endBody:{col:1,line:30}},types:{startLoc:{col:54,line:37},endLoc:{col:1,line:51},startBody:{col:54,line:37},endBody:{col:1,line:51}},colors:{startLoc:{col:55,line:59},endLoc:{col:1,line:97},startBody:{col:55,line:59},endBody:{col:1,line:97}}}},docs:{description:{component:"Utilize as variações do componente Loading para mostrar carregamento de dados em janelas, botões, etc."}}}},c=p.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,k=t(({type:r,color:l})=>n(c,{children:n(e,{type:r,color:l})}),"Loading");k.args={type:"ring",color:"black"};const C=t(()=>i(c,{children:[n("h4",{children:"Ring"}),n(e,{type:"ring"}),n("h4",{children:"Spinner"}),n(e,{type:"spinner"}),n("h4",{children:"Roller"}),n(e,{type:"roller"}),n("h4",{children:"Ellipsis"}),n(e,{type:"ellipsis"})]}),"Types");C.parameters={docs:{storyDescription:"Variações de tipos"}};const b=t(()=>i(c,{children:[n("h4",{children:"Black"}),n(e,{color:"black"}),n("h4",{children:"Blue"}),n(e,{color:"blue"}),n("h4",{children:"Dark blue"}),n(e,{color:"dark-blue"}),n("h4",{children:"Light Blue"}),n(e,{color:"light-blue"}),n("h4",{children:"Red"}),n(e,{color:"red"}),n("h4",{children:"Light red"}),n(e,{color:"light-red"}),n("h4",{children:"Dark red"}),n(e,{color:"dark-red"}),n("h4",{children:"Yellow"}),n(e,{color:"yellow"}),n("h4",{children:"Green"}),n(e,{color:"green"}),n("h4",{children:"Grey"}),n(e,{color:"grey"}),n("h4",{children:"Black"}),n(e,{color:"black"}),n("h4",{children:"White"}),n(e,{color:"white"})]}),"Colors");b.parameters={docs:{storyDescription:"Variações de cores"}};const R=["Loading","Types","Colors"];export{b as Colors,k as Loading,C as Types,R as __namedExportsOrder,w as default};
//# sourceMappingURL=ALoading.stories-dd1dd4d2.js.map
