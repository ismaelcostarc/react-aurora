var y=Object.defineProperty;var l=(o,t)=>y(o,"name",{value:t,configurable:!0});import{r as b}from"./index-945219e4.js";import"./iframe-0d708b5d.js";var u={},g={get exports(){return u},set exports(o){u=o}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=b,B=Symbol.for("react.element"),_=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,k=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function d(o,t,a){var e,n={},r=null,p=null;a!==void 0&&(r=""+a),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(p=t.ref);for(e in t)x.call(t,e)&&!h.hasOwnProperty(e)&&(n[e]=t[e]);if(o&&o.defaultProps)for(e in t=o.defaultProps,t)n[e]===void 0&&(n[e]=t[e]);return{$$typeof:B,type:o,key:r,ref:p,props:n,_owner:k.current}}l(d,"q");i.Fragment=_;i.jsx=d;i.jsxs=d;(function(o){o.exports=i})(g);const m=u.jsx;const s=l(({primary:o=!1,size:t="medium",backgroundColor:a,label:e,...n})=>{const r=o?"storybook-button--primary":"storybook-button--secondary";return m("button",{type:"button",className:["storybook-button",`storybook-button--${t}`,r].join(" "),style:{backgroundColor:a},...n,children:e})},"Button");try{s.displayName="Button",s.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const O={parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
`,locationsMap:{primary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},secondary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},large:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},small:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}}}}},title:"Example/Button",component:s,argTypes:{backgroundColor:{control:"color"}}},c=l(o=>m(s,{...o}),"Template"),v=c.bind({});v.args={primary:!0,label:"Button"};const S=c.bind({});S.args={label:"Button"};const L=c.bind({});L.args={size:"large",label:"Button"};const j=c.bind({});j.args={size:"small",label:"Button"};const P=["Primary","Secondary","Large","Small"];export{L as Large,v as Primary,S as Secondary,j as Small,P as __namedExportsOrder,O as default};
//# sourceMappingURL=Button.stories-d08f0275.js.map
