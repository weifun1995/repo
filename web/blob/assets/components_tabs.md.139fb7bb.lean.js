import{a4 as i,_ as b,D as p,o as F,c as x,G as d,B as y,z as t,R as A,a as o}from"./chunks/framework.7d7370a4.js";const{defineComponent:B}=i,_=B({name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:l,resolveComponent:E,withCtx:s,createVNode:e,Fragment:r,openBlock:c,createElementBlock:u}=i;function a(N,V){const n=E("xl-button");return c(),u(r,null,[e(n,null,{default:s(()=>[l("默认按钮")]),_:1}),e(n,{type:"primary"},{default:s(()=>[l("主要按钮")]),_:1}),e(n,{type:"success"},{default:s(()=>[l("成功按钮")]),_:1}),e(n,{type:"info"},{default:s(()=>[l("信息按钮")]),_:1}),e(n,{type:"warning"},{default:s(()=>[l("警告按钮")]),_:1}),e(n,{type:"danger"},{default:s(()=>[l("危险按钮")]),_:1})],64)}return{render:a,...{}}}()}}),T=JSON.parse('{"title":"Tabs 标签页","description":"","frontmatter":{},"headers":[],"relativePath":"components/tabs.md","filePath":"components/tabs.md","lastUpdated":null}'),m=t("h1",{id:"tabs-标签页",tabindex:"-1"},"Tabs 标签页",-1),h=t("p",null,"分隔内容上有关联但属于不同类别的数据集合。",-1),C=t("h2",{id:"基础用法",tabindex:"-1"},"基础用法",-1),D=t("p",null,"基础的、简洁的标签页。",-1),f=t("div",{class:"language-vue"},[t("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"<"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"  <"),t("span",{style:{color:"#85E89D"}},"xl-button"),t("span",{style:{color:"#E1E4E8"}},">默认按钮</"),t("span",{style:{color:"#85E89D"}},"xl-button"),t("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"  <"),t("span",{style:{color:"#85E89D"}},"xl-button"),t("span",{style:{color:"#E1E4E8"}}," "),t("span",{style:{color:"#B392F0"}},"type"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"primary"'),t("span",{style:{color:"#E1E4E8"}},">主要按钮</"),t("span",{style:{color:"#85E89D"}},"xl-button"),t("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"  <"),t("span",{style:{color:"#85E89D"}},"xl-button"),t("span",{style:{color:"#E1E4E8"}}," "),t("span",{style:{color:"#B392F0"}},"type"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"success"'),t("span",{style:{color:"#E1E4E8"}},">成功按钮</"),t("span",{style:{color:"#85E89D"}},"xl-button"),t("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"  <"),t("span",{style:{color:"#85E89D"}},"xl-button"),t("span",{style:{color:"#E1E4E8"}}," "),t("span",{style:{color:"#B392F0"}},"type"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"info"'),t("span",{style:{color:"#E1E4E8"}},">信息按钮</"),t("span",{style:{color:"#85E89D"}},"xl-button"),t("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"  <"),t("span",{style:{color:"#85E89D"}},"xl-button"),t("span",{style:{color:"#E1E4E8"}}," "),t("span",{style:{color:"#B392F0"}},"type"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"warning"'),t("span",{style:{color:"#E1E4E8"}},">警告按钮</"),t("span",{style:{color:"#85E89D"}},"xl-button"),t("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"  <"),t("span",{style:{color:"#85E89D"}},"xl-button"),t("span",{style:{color:"#E1E4E8"}}," "),t("span",{style:{color:"#B392F0"}},"type"),t("span",{style:{color:"#E1E4E8"}},"="),t("span",{style:{color:"#9ECBFF"}},'"danger"'),t("span",{style:{color:"#E1E4E8"}},">危险按钮</"),t("span",{style:{color:"#85E89D"}},"xl-button"),t("span",{style:{color:"#E1E4E8"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#E1E4E8"}},"</"),t("span",{style:{color:"#85E89D"}},"template"),t("span",{style:{color:"#E1E4E8"}},">")])])]),t("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#24292E"}},"<"),t("span",{style:{color:"#22863A"}},"template"),t("span",{style:{color:"#24292E"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#24292E"}},"  <"),t("span",{style:{color:"#22863A"}},"xl-button"),t("span",{style:{color:"#24292E"}},">默认按钮</"),t("span",{style:{color:"#22863A"}},"xl-button"),t("span",{style:{color:"#24292E"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#24292E"}},"  <"),t("span",{style:{color:"#22863A"}},"xl-button"),t("span",{style:{color:"#24292E"}}," "),t("span",{style:{color:"#6F42C1"}},"type"),t("span",{style:{color:"#24292E"}},"="),t("span",{style:{color:"#032F62"}},'"primary"'),t("span",{style:{color:"#24292E"}},">主要按钮</"),t("span",{style:{color:"#22863A"}},"xl-button"),t("span",{style:{color:"#24292E"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#24292E"}},"  <"),t("span",{style:{color:"#22863A"}},"xl-button"),t("span",{style:{color:"#24292E"}}," "),t("span",{style:{color:"#6F42C1"}},"type"),t("span",{style:{color:"#24292E"}},"="),t("span",{style:{color:"#032F62"}},'"success"'),t("span",{style:{color:"#24292E"}},">成功按钮</"),t("span",{style:{color:"#22863A"}},"xl-button"),t("span",{style:{color:"#24292E"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#24292E"}},"  <"),t("span",{style:{color:"#22863A"}},"xl-button"),t("span",{style:{color:"#24292E"}}," "),t("span",{style:{color:"#6F42C1"}},"type"),t("span",{style:{color:"#24292E"}},"="),t("span",{style:{color:"#032F62"}},'"info"'),t("span",{style:{color:"#24292E"}},">信息按钮</"),t("span",{style:{color:"#22863A"}},"xl-button"),t("span",{style:{color:"#24292E"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#24292E"}},"  <"),t("span",{style:{color:"#22863A"}},"xl-button"),t("span",{style:{color:"#24292E"}}," "),t("span",{style:{color:"#6F42C1"}},"type"),t("span",{style:{color:"#24292E"}},"="),t("span",{style:{color:"#032F62"}},'"warning"'),t("span",{style:{color:"#24292E"}},">警告按钮</"),t("span",{style:{color:"#22863A"}},"xl-button"),t("span",{style:{color:"#24292E"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#24292E"}},"  <"),t("span",{style:{color:"#22863A"}},"xl-button"),t("span",{style:{color:"#24292E"}}," "),t("span",{style:{color:"#6F42C1"}},"type"),t("span",{style:{color:"#24292E"}},"="),t("span",{style:{color:"#032F62"}},'"danger"'),t("span",{style:{color:"#24292E"}},">危险按钮</"),t("span",{style:{color:"#22863A"}},"xl-button"),t("span",{style:{color:"#24292E"}},">")]),o(`
`),t("span",{class:"line"},[t("span",{style:{color:"#24292E"}},"</"),t("span",{style:{color:"#22863A"}},"template"),t("span",{style:{color:"#24292E"}},">")])])])],-1),g=A('<h2 id="attributes" tabindex="-1">Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value / v-model</td><td>绑定值，选中选项卡的 name</td><td>string</td><td>—</td><td>第一个选项卡的 name</td></tr><tr><td>type</td><td>风格类型</td><td>string</td><td>card/border-card</td><td>—</td></tr><tr><td>closable</td><td>标签是否可关闭</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>addable</td><td>标签是否可增加</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>标签是否同时可增加和关闭</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>tab-position</td><td>选项卡所在位置</td><td>string</td><td>top/right/bottom/left</td><td>top</td></tr><tr><td>stretch</td><td>标签的宽度是否自撑开</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table>',2);function v(l,E,s,e,r,c){const u=p("render-demo-0"),a=p("demo");return F(),x("div",null,[m,h,C,D,d(a,{customClass:"undefined",sourceCode:`<template>
  <xl-button>默认按钮</xl-button>
  <xl-button type="primary">主要按钮</xl-button>
  <xl-button type="success">成功按钮</xl-button>
  <xl-button type="info">信息按钮</xl-button>
  <xl-button type="warning">警告按钮</xl-button>
  <xl-button type="danger">危险按钮</xl-button>
</template>
`},{highlight:y(()=>[f]),default:y(()=>[d(u)]),_:1}),g])}const $=b(_,[["render",v]]);export{T as __pageData,$ as default};