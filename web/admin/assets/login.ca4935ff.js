import{d as w,dB as y,r as E,cg as S,q as V,dC as h,o as C,e as I,g as n,f as s,w as a,u as _,dD as b,b0 as k,dE as x,i as D,c as N,p as T,j as q,_ as K}from"./index.60950ea4.js";import{E as U,a as $}from"./el-form-item.54858948.js";import{E as j}from"./el-input.890ceaee.js";import{E as g}from"./index.2123f30a.js";import"./isEqual.5ca5e5f7.js";import"./event.776e7e11.js";const f=r=>(T("data-v-ac4ad590"),r=r(),q(),r),A={class:"login-wrap"},J={class:"ms-login"},L=f(()=>n("div",{class:"ms-title"},"\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF",-1)),M={class:"login-btn"},O=D("\u767B\u5F55"),P=f(()=>n("p",{class:"login-tips"},"Tips : \u7528\u6237\u540D\u548C\u5BC6\u7801\u968F\u4FBF\u586B\u3002",-1)),R=w({__name:"login",setup(r){const F=y(),o=E({username:"admin",password:"123123"}),B={username:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"}]},i=S(),l=V(),p=d=>{!d||d.validate(e=>{if(e){g.success("\u767B\u5F55\u6210\u529F"),localStorage.setItem("ms_username",o.username);const t=i.defaultList[o.username=="admin"?"admin":"user"];i.handleSet(t),localStorage.setItem("ms_keys",JSON.stringify(t)),F.push("/")}else return g.error("\u767B\u5F55\u6210\u529F"),!1})};return h().clearTags(),(d,e)=>{const t=N,m=j,c=U,v=$;return C(),I("div",A,[n("div",J,[L,s(v,{model:o,rules:B,ref_key:"login",ref:l,"label-width":"0px",class:"ms-content"},{default:a(()=>[s(c,{prop:"username"},{default:a(()=>[s(m,{modelValue:o.username,"onUpdate:modelValue":e[0]||(e[0]=u=>o.username=u),placeholder:"username"},{prepend:a(()=>[s(t,{icon:_(b)},null,8,["icon"])]),_:1},8,["modelValue"])]),_:1}),s(c,{prop:"password"},{default:a(()=>[s(m,{type:"password",placeholder:"password",modelValue:o.password,"onUpdate:modelValue":e[1]||(e[1]=u=>o.password=u),onKeyup:e[2]||(e[2]=k(u=>p(l.value),["enter"]))},{prepend:a(()=>[s(t,{icon:_(x)},null,8,["icon"])]),_:1},8,["modelValue"])]),_:1}),n("div",M,[s(t,{type:"primary",onClick:e[3]||(e[3]=u=>p(l.value))},{default:a(()=>[O]),_:1})]),P]),_:1},8,["model"])])])}}});const Z=K(R,[["__scopeId","data-v-ac4ad590"]]);export{Z as default};
