import{_ as T,D as se,o as C,c as k,G as w,B as g,a as E,F as U,d as R,j as p,a5 as M,a6 as _e,z as v,t as B,h as ye,e as ge,g as he,b as we,m as Ce,p as W,Y as ae,l as O,w as F,A as be,a7 as xe,N as ke,n as I,a8 as Ee,a9 as re,u as le,x as Oe,aa as Ie,ab as $e,r as D,C as Te,T as N,ac as z,a2 as Ae,M as V,ad as De,ae as Pe,af as Se,ag as Be,ah as Re,ai as Le,aj as Ne,ak as He,al as Me,am as Fe,J as Ve,k as Qe,an as je,ao as Ue,ap as We}from"./chunks/framework.61a71222.js";import{t as J}from"./chunks/theme.20ffc516.js";const Ge={};function ze(e,t){const n=se("xl-button");return C(),k(U,null,[w(n,null,{default:g(()=>[E("默认按钮")]),_:1}),w(n,{type:"primary"},{default:g(()=>[E("主要按钮")]),_:1}),w(n,{type:"success"},{default:g(()=>[E("成功按钮")]),_:1}),w(n,{type:"info"},{default:g(()=>[E("信息按钮")]),_:1}),w(n,{type:"warning"},{default:g(()=>[E("警告按钮")]),_:1}),w(n,{type:"danger"},{default:g(()=>[E("危险按钮")]),_:1})],64)}const Je=T(Ge,[["render",ze]]);const Ke=R({name:"InputDemo",setup(){const e=p(),t=p();function n(){t.value=e.value}return{input:e,content:t,onSubmit:n}}}),Xe={style:{"margin-top":"16px"}};function Ye(e,t,n,o,a,s){const r=se("xl-button");return C(),k(U,null,[M(v("input",{class:"input",type:"text","onUpdate:modelValue":t[0]||(t[0]=l=>e.input=l)},null,512),[[_e,e.input]]),w(r,{type:"primary",onClick:e.onSubmit},{default:g(()=>[E("提交")]),_:1},8,["onClick"]),v("div",Xe,"输出内容："+B(e.content),1)],64)}const qe=T(Ke,[["render",Ye]]);var K;const L=typeof window<"u",Ze=e=>typeof e=="string",Q=()=>{};L&&((K=window==null?void 0:window.navigator)!=null&&K.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function P(e){return typeof e=="function"?e():ge(e)}function et(e,t){function n(...o){return new Promise((a,s)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(a).catch(s)})}return n}function tt(e,t=!0,n=!0,o=!1){let a=0,s,r=!0,l=Q,c;const d=()=>{s&&(clearTimeout(s),s=void 0,l(),l=Q)};return _=>{const f=P(e),m=Date.now()-a,b=()=>c=_();return d(),f<=0?(a=Date.now(),b()):(m>f&&(n||!r)?(a=Date.now(),b()):t&&(c=new Promise((x,u)=>{l=o?u:x,s=setTimeout(()=>{a=Date.now(),r=!0,x(b()),d()},Math.max(0,f-m))})),!n&&!s&&(s=setTimeout(()=>r=!0,f)),r=!1,c)}}function nt(e){return e}function ie(e){return he()?(we(e),!0):!1}function ot(e,t=200,n=!1,o=!0,a=!1){return et(tt(t,n,o,a),e)}function st(e,t=!0){Ce()?W(e):t?e():ae(e)}function at(e,t,n={}){const{immediate:o=!0}=n,a=p(!1);let s=null;function r(){s&&(clearTimeout(s),s=null)}function l(){a.value=!1,r()}function c(...d){r(),a.value=!0,s=setTimeout(()=>{a.value=!1,s=null,e(...d)},P(t))}return o&&(a.value=!0,L&&c()),ie(l),{isPending:ye(a),start:c,stop:l}}function rt(e){var t;const n=P(e);return(t=n==null?void 0:n.$el)!=null?t:n}const lt=L?window:void 0,it=L?window.navigator:void 0;function ut(...e){let t,n,o,a;if(Ze(e[0])||Array.isArray(e[0])?([n,o,a]=e,t=lt):[t,n,o,a]=e,!t)return Q;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const s=[],r=()=>{s.forEach(i=>i()),s.length=0},l=(i,_,f,m)=>(i.addEventListener(_,f,m),()=>i.removeEventListener(_,f,m)),c=F(()=>[rt(t),P(a)],([i,_])=>{r(),i&&s.push(...n.flatMap(f=>o.map(m=>l(i,f,m,_))))},{immediate:!0,flush:"post"}),d=()=>{c(),r()};return ie(d),d}function ct(e,t=!1){const n=p(),o=()=>n.value=!!e();return o(),st(o,t),n}function dt(e={}){const{navigator:t=it,read:n=!1,source:o,copiedDuring:a=1500,legacy:s=!1}=e,r=["copy","cut"],l=ct(()=>t&&"clipboard"in t),c=O(()=>l.value||s),d=p(""),i=p(!1),_=at(()=>i.value=!1,a);function f(){l.value?t.clipboard.readText().then(u=>{d.value=u}):d.value=x()}if(c.value&&n)for(const u of r)ut(u,f);async function m(u=P(o)){c.value&&u!=null&&(l.value?await t.clipboard.writeText(u):b(u),d.value=u,i.value=!0,_.start())}function b(u){const y=document.createElement("textarea");y.value=u??"",y.style.position="absolute",y.style.opacity="0",document.body.appendChild(y),y.select(),document.execCommand("copy"),y.remove()}function x(){var u,y,S;return(S=(y=(u=document==null?void 0:document.getSelection)==null?void 0:u.call(document))==null?void 0:y.toString())!=null?S:""}return{isSupported:c,text:d,copied:i,copy:m}}const X=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Y="__vueuse_ssr_handlers__";X[Y]=X[Y]||{};var q;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(q||(q={}));var pt=Object.defineProperty,Z=Object.getOwnPropertySymbols,ft=Object.prototype.hasOwnProperty,mt=Object.prototype.propertyIsEnumerable,ee=(e,t,n)=>t in e?pt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,vt=(e,t)=>{for(var n in t||(t={}))ft.call(t,n)&&ee(e,n,t[n]);if(Z)for(var n of Z(t))mt.call(t,n)&&ee(e,n,t[n]);return e};const _t={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};vt({linear:nt},_t);let yt=0;function gt(){return"message_"+yt++}const ht=R({setup(){const e=p([]);function t(o){const a=gt(),s={name:a,...o};e.value.push(s);const r=o.duration;setTimeout(()=>{n(a)},r*1e3)}function n(o){for(const[a,s]of e.value.entries())if(s.name===o){e.value.splice(a,1);break}}return{messages:e,add:t,remove:n}}}),wt={class:"demoblock-message-content"};function Ct(e,t,n,o,a,s){return C(),be(xe,{name:"demoblock-fade",tag:"div",class:"demoblock-message-wrap"},{default:g(()=>[(C(!0),k(U,null,ke(e.messages,r=>(C(),k("div",{key:r.name,class:I(["demoblock-message",r.type?`demoblock-message-${r.type}`:""])},[v("div",wt,B(r.content),1)],2))),128))]),_:1})}const j=T(ht,[["render",Ct],["__scopeId","data-v-113231ea"]]);j.newInstance=(e={})=>{const t=document.createElement("div"),a=Ee({render(){return re(j,{...e,ref:"messageRef"})}}).mount(t).$refs.messageRef;return document.body.appendChild(t.firstElementChild),{add(s){a.add(s)},remove(s){a.remove(s)}}};let H;function bt(){return H=H||j.newInstance(),H}function te(e,{duration:t=3,type:n=""}){bt().add({content:e,duration:t,type:n})}const ne={info(e,t){return te(e,{...t})},error(e,t){return te(e,{...t,type:"error"})}};const xt={name:"Demo",props:{customClass:String,sourceCode:String},setup(e){const{copy:t}=dt(),n=le(),o=Oe(),a=p(!1),s=p(!1),r=p(!1),l=p(null),c=p(null),d=p(null),i=p(null),_=p(null);F(r,h=>{if(d.value.style.height=h?`${pe.value+1}px`:"0",!h){s.value=!1,i.value.style.left="0",i.value.style.width="auto",b();return}setTimeout(()=>{window.addEventListener("scroll",m),window.addEventListener("resize",m),f()},300)}),W(()=>{ae(()=>{c.value||(l.value.style.width="100%")})}),Ie(()=>{b()});const f=()=>{const{top:h,bottom:fe,left:me}=d.value.getBoundingClientRect(),G=window.innerHeight||document.body.clientHeight;s.value=fe>G&&h+44<=G,i.value.style.left=s.value?`${me}px`:"0";const ve=s.value?1:2;i.value.style.width=`${_.value.offsetWidth-ve}px`},m=ot(f,200),b=()=>{window.removeEventListener("scroll",m),window.removeEventListener("resize",m)};F(()=>o.path,h=>{x.value=h.split("/")});const x=p(o.path.split("/")),u=O(()=>x.value[x.value.length-1].split(".")[0]),y=O(()=>`demo-${u.value}`);$e({});const S=()=>{},ce=()=>{r.value=!r.value,a.value=r.value},A=O(()=>{var h;return((h=n.theme.value.demoblock)==null?void 0:h[n.localePath.value])??{"hide-text":"隐藏代码","show-text":"显示代码","copy-button-text":"复制代码片段","copy-success-text":"复制成功"}}),de=O(()=>r.value?A.value["hide-text"]:A.value["show-text"]),pe=O(()=>c.value?c.value.clientHeight+l.value.clientHeight+20:l.value.clientHeight);return{blockClass:y,hover:a,fixedControl:s,isExpanded:r,locale:A,controlText:de,onClickControl:ce,highlight:l,description:c,meta:d,control:i,onCopy:async()=>{try{t(e.sourceCode),ne.info(A.value["copy-success-text"])}catch{ne.error(A.value["copy-success-text"])}},goCodepen:S,demoBlock:_}}},kt={class:"source"},Et={ref:"meta",class:"meta"},Ot={key:0,ref:"description",class:"description"},It={ref:"highlight",class:"highlight"},$t={class:"control-button-wrap"};function Tt(e,t,n,o,a,s){return C(),k("div",{ref:"demoBlock",class:I(["demo-block",o.blockClass,n.customClass?n.customClass:"",{hover:o.hover}]),onMouseenter:t[2]||(t[2]=r=>o.hover=!0),onMouseleave:t[3]||(t[3]=r=>o.hover=!1)},[v("div",kt,[D(e.$slots,"default",{},void 0,!0)]),v("div",Et,[e.$slots.description?(C(),k("div",Ot,[D(e.$slots,"description",{},void 0,!0)],512)):Te("",!0),v("div",It,[D(e.$slots,"highlight",{},void 0,!0)],512)],512),v("div",{ref:"control",class:I(["demo-block-control",{"is-fixed":o.fixedControl,"is-expanded":o.isExpanded}]),onClick:t[1]||(t[1]=(...r)=>o.onClickControl&&o.onClickControl(...r))},[w(N,{name:"arrow-slide"},{default:g(()=>[v("i",{class:I(["control-icon",{"icon-caret-down":!o.isExpanded,"icon-caret-up":o.isExpanded,hovering:o.hover}])},null,2)]),_:1}),w(N,{name:"text-slide"},{default:g(()=>[M(v("span",{class:"control-text"},B(o.controlText),513),[[z,o.hover]])]),_:1}),v("div",$t,[w(N,{name:"text-slide"},{default:g(()=>[M(v("span",{class:"control-button copy-button",onClick:t[0]||(t[0]=Ae((...r)=>o.onCopy&&o.onCopy(...r),["stop"]))},B(o.locale&&o.locale["copy-button-text"]),513),[[z,o.isExpanded]])]),_:1})])],2)],34)}const At=T(xt,[["render",Tt],["__scopeId","data-v-b8649709"]]);const Dt=R({name:"DemoBlock",props:{customClass:String}}),Pt={class:"source"};function St(e,t,n,o,a,s){return C(),k("div",{class:I(["demo-block",[e.customClass?e.customClass:""]])},[v("div",Pt,[D(e.$slots,"default",{},void 0,!0)])],2)}const Bt=T(Dt,[["render",St],["__scopeId","data-v-d3a119a6"]]);function Rt(e){e.component("ButtonDemo",Je),e.component("InputDemo",qe),e.component("Demo",At),e.component("DemoBlock",Bt)}const Lt={name:"XlButton",props:{type:{type:String,default:"default"}}};function Nt(e,t,n,o,a,s){return C(),k("button",{class:I(["xl-button",n.type?"xl-button--"+n.type:""])},[D(e.$slots,"default")],2)}const oe=T(Lt,[["render",Nt]]);const Ht={...J,enhanceApp(e){J.enhanceApp(e),Rt(e.app),e.app.component(oe.name,oe)}};function ue(e){if(e.extends){const t=ue(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const $=ue(Ht),Mt=R({name:"VitePressApp",setup(){const{site:e}=le();return W(()=>{Qe(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),je(),Ue(),We(),$.setup&&$.setup(),()=>re($.Layout)}});async function Ft(){const e=Qt(),t=Vt();t.provide(Pe,e);const n=Se(e.route);return t.provide(Be,n),t.component("Content",Re),t.component("ClientOnly",Le),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),$.enhanceApp&&await $.enhanceApp({app:t,router:e,siteData:Ne}),{app:t,router:e,data:n}}function Vt(){return He(Mt)}function Qt(){let e=V,t;return Me(n=>{let o=Fe(n);return e&&(t=o),(e||t===o)&&(o=o.replace(/\.js$/,".lean.js")),V&&(e=!1),Ve(()=>import(o),[])},$.NotFound)}V&&Ft().then(({app:e,router:t,data:n})=>{t.go().then(()=>{De(t.route,n.site),e.mount("#app")})});export{Ft as createApp};