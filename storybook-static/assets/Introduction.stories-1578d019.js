var p=Object.defineProperty;var e=(o,a)=>p(o,"name",{value:a,configurable:!0});import{c as s,A as d,M as m}from"./Props-330c65dd.js";import"./index-1a4f2307.js";import"./iframe-ef21d30f.js";import"./string-ba413569.js";import"./es.map.constructor-04e748ce.js";import"./es.number.to-fixed-ad10ff9a.js";const c="/assets/arrow-0bbc757c.svg",u="/assets/badge-ded54685.svg",g="/assets/card-f0ff3354.svg",x="/assets/checkbox-803a9956.svg",b="/assets/chevron-248dea1d.svg",h="/assets/input-3c7634fb.svg",f="/assets/tooltip-88f1a42d.svg",k="/assets/radio-e557eb53.svg";function i(){return i=Object.assign?Object.assign.bind():function(o){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(o[n]=r[n])}return o},i.apply(this,arguments)}e(i,"_extends");const y={},v="wrapper";function l({components:o,...a}){return s(v,i({},y,a,{components:o,mdxType:"MDXLayout"}),s(m,{title:"Introdução",mdxType:"Meta"}),s("style",null,`
    .subheading {
      --mediumdark: '#999999';
      font-weight: 900;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px 30px 20px 15px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span {
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  `),s("h1",null,"React Aurora"),s("p",null,"React Aurora é uma biblioteca de componentes React em Typescript criados de forma a serem o mais simples, enxutos possíveis. Os componente foram pensados de forma a serem utilizados em qualquer contexto, de forma rápida, seja para um MVP ou aplicação em produção. Sugestões, issues e PRs são bem-vindas."),s("div",{className:"subheading"},"Componentes"),s("div",{className:"link-list"},s("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},s("img",{src:c,alt:"Pointer"}),s("span",null,s("strong",null,"Button"),"Utilize as variações do componente ",s("b",null,"Button")," em Modais, Formulários, etc.")),s("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},s("img",{src:u,alt:"Badge"}),s("span",null,s("strong",null,"Badge"),s("b",null,"Badges")," usadas para criar labels e tags em outros componentes.")),s("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},s("img",{src:g,alt:"Card"}),s("span",null,s("strong",null,"Card"),s("b",null,"Cards")," são excelentes containers para conter informações de algum tipo de dado.")),s("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},s("img",{src:x,alt:"Checkbox"}),s("span",null,s("strong",null,"Checkbox"),s("b",null,"Checkboxes")," são utilizados para marcar uma opção ou várias em uma lista.")),s("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},s("img",{src:k,alt:"Radio"}),s("span",null,s("strong",null,"Radio"),"Componentes do tipo ",s("b",null,"Radio")," são utilizados para marcar uma única opção em uma lista.")),s("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},s("img",{src:b,alt:"Chevron"}),s("span",null,s("strong",null,"Select"),"O componente ",s("b",null,"Select")," abre um menu com diversas opções.")),s("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},s("img",{src:h,alt:"Input"}),s("span",null,s("strong",null,"Input"),s("b",null,"Inputs")," são componentes com diversas variações para receber dados inseridos pelo usuário.")),s("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},s("img",{src:f,alt:"Tooltip"}),s("span",null,s("strong",null,"Tooltip"),s("b",null,"Tooltips")," são pequenos modais com dicas quando o usuário passar o mouse por cima de algum componente."))),s("div",{className:"subheading"},"Links"),s("div",{className:"tip-wrapper"},s("div",null,s("span",{className:"tip"},"Repositório"),s("a",{href:"https://github.com/ismaelcostarc/react-aurora"},"Github")),s("div",null,s("span",{className:"tip"},"Pacote"),s("a",{href:"https://www.npmjs.com/package/react-aurora-ts"},"npm"))),s("div",{className:"subheading"},"Autor"),s("a",{href:"https://www.linkedin.com/in/ismaelcostarc/"},"Ismael Assunção Costa"))}e(l,"MDXContent");l.isMDXComponent=!0;const E=e(()=>{throw new Error("Docs-only story")},"__page");E.parameters={docsOnly:!0};const t={title:"Introdução",tags:["stories-mdx"],includeStories:["__page"]},w={};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:()=>s(d,{mdxStoryNameToKey:w,mdxComponentAnnotations:t},s(l,null))};const D=["__page"];export{D as __namedExportsOrder,E as __page,t as default};
//# sourceMappingURL=Introduction.stories-1578d019.js.map
