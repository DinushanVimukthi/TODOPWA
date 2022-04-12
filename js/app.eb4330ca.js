(()=>{"use strict";var e={335:(e,t,o)=>{o(702),o(8964);var r=o(1957),n=o(1947),a=o(499),i=o(9835);function s(e,t,o,r,n,a){const s=(0,i.up)("router-view"),l=(0,i.up)("Loading");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(s),(0,i.Wm)(l)],64)}var l=o(397),u=o(338),d=o(8570),c=o(482),f=o(1653),p=o(1669),v=o(4727),h=function(e,t,o,r){function n(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,a){function i(e){try{l(r.next(e))}catch(t){a(t)}}function s(e){try{l(r["throw"](e))}catch(t){a(t)}}function l(e){e.done?o(e.value):n(e.value).then(i,s)}l((r=r.apply(e,t||[])).next())}))};function b(){return h(this,void 0,void 0,(function*(){v._.value=!0;const e=yield(0,c.L)(),t=yield(0,f.z)();(0,l.Aj)(u.fauth,(o=>{if(o){const r=(0,d.iH)(u.fdb,"Users/"+o.uid+"/UserInfo"),n=(0,d.iH)(u.fdb,"Users/"+o.uid+"/UserToDO"),a=(0,d.iH)(u.fdb,"Users/"+o.uid+"/UserBin/ToDOBin");(0,d.U2)(r).then((t=>{e.useruid=o.uid,t.val()?(e.user={email:t.val().email,username:t.val().username,profileurl:t.val().profileImage},p.F.push("/dash")):p.F.push("/dash")})).catch((e=>{console.log(e)})),(0,d.Jr)(n,(e=>{const o=e.val().ID;t.todos[o]=e.val()})),(0,d.yv)(n,(e=>h(this,void 0,void 0,(function*(){if(e.val()){const o=yield e.val().ID;t.todos[o]=e.val()}})))),(0,d.MQ)(n,(e=>{const o=e.val().ID;delete t.todos[o]})),(0,d.U2)(n).then((e=>{e.val()&&(t.todos=e.val())})),(0,d.U2)(a).then((e=>{e.val()&&(t.todobin=e.val())})),(0,d.Jr)(a,(e=>{const o=e.val().ID;t.todobin[o]=e.val()})),(0,d.yv)(a,(e=>h(this,void 0,void 0,(function*(){if(e.val()){const o=yield e.val().ID;t.todobin[o]=e.val()}})))),(0,d.MQ)(a,(e=>h(this,void 0,void 0,(function*(){const o=yield e.val().ID;delete t.todobin[o]}))))}else t.todos={},e.user={},e.useruid="";v._.value=!1}))}))}var m=o(5610);const g=(0,i.aZ)({name:"App",mounted(){b()},components:{Loading:m.Z}});var y=o(1639);const w=(0,y.Z)(g,[["render",s]]),j=w;var O=o(3340),P=o(7363);const k=(0,O.h)((()=>{const e=(0,P.WB)();return e}));async function _(e,t){const o=e(j);o.use(n.Z,t);const r="function"===typeof k?await k({}):k;o.use(r);const i=(0,a.Xl)("function"===typeof p.Z?await(0,p.Z)({store:r}):p.Z);return r.use((({store:e})=>{e.router=i})),{app:o,store:r,router:i}}var D=o(6827);const A={config:{},plugins:{Notify:D.Z}};var C=o(368);(0,C.z)("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&o.e(736).then(o.t.bind(o,4848,23));const E="";async function I({app:e,router:t,store:o},r){let n=!1;const a=e=>{try{return t.resolve(e).href}catch(o){}return Object(e)===e?null:e},i=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=a(e);null!==t&&(window.location.href=t,window.location.reload())},s=window.location.href.replace(window.location.origin,"");for(let u=0;!1===n&&u<r.length;u++)try{await r[u]({app:e,router:t,store:o,ssrContext:null,redirect:i,urlPath:s,publicPath:E})}catch(l){return l&&l.url?void i(l.url):void console.error("[Quasar] boot error:",l)}!0!==n&&(e.use(t),e.mount("#q-app"))}_(r.ri,A).then((e=>Promise.all([Promise.resolve().then(o.bind(o,4136)),Promise.resolve().then(o.bind(o,338))]).then((t=>{const o=t.map((e=>e.default)).filter((e=>"function"===typeof e));I(e,o)}))))},2849:(e,t,o)=>{o.d(t,{I:()=>a,j:()=>i});var r=o(338),n=o(499);const a=(0,n.iH)(!1);function i(){return r.fauth.currentUser?(a.value=!0,!0):(a.value=!1,!1)}},4727:(e,t,o)=>{o.d(t,{_:()=>n});var r=o(499);const n=(0,r.iH)(!1)},4136:(e,t,o)=>{o.r(t),o.d(t,{api:()=>i,default:()=>s});var r=o(3340),n=o(9981),a=o.n(n);const i=a().create({baseURL:"https://api.example.com"}),s=(0,r.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},338:(e,t,o)=>{o.r(t),o.d(t,{fauth:()=>u,fdb:()=>d,fst:()=>c});var r=o(222),n=o(397),a=o(8570),i=o(2373);const s={apiKey:"AIzaSyAjhhqQuK3QTkhcVtkK11TaqdPIFQAcucw",authDomain:"todo-d8169.firebaseapp.com",projectId:"todo-d8169",storageBucket:"todo-d8169.appspot.com",messagingSenderId:"549734860802",appId:"1:549734860802:web:f4db17b5e4d3c1a01c3f1b"},l=(0,r.ZF)(s),u=(0,n.v0)(l),d=(0,a.N8)(l),c=(0,i.cF)(l)},1669:(e,t,o)=>{o.d(t,{F:()=>u,Z:()=>d});var r=o(3340),n=o(8910),a=o(2849);const i=[{path:"/",component:()=>Promise.all([o.e(736),o.e(365)]).then(o.bind(o,9365)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(57)]).then(o.bind(o,9057)),beforeEnter:()=>!(0,a.j)()},{path:"/dash",name:"dashboard",component:()=>Promise.all([o.e(736),o.e(885)]).then(o.bind(o,4885)),beforeEnter:()=>(0,a.j)()},{path:"/auth",component:()=>Promise.all([o.e(736),o.e(424)]).then(o.bind(o,3424)),beforeEnter:()=>!(0,a.j)()}]},{path:"/:catchAll(.*)*",component:()=>o.e(431).then(o.bind(o,9431))}],s=i,l=n.r5,u=(0,n.p7)({scrollBehavior:()=>({left:0,top:0}),routes:s,history:l("")}),d=(0,r.BC)((function(){return u}))},1653:(e,t,o)=>{o.d(t,{z:()=>n});var r=o(7363);const n=(0,r.Q_)("todostore",{state:()=>({todos:{},todobin:{}}),getters:{getDates:e=>Object.values(e.todos).filter((e=>!e.Done)).map((e=>e.Date.split("-").join("/"))),getTodoByDate:e=>t=>Object.values(e.todos).filter((e=>!e.Done&&e.Date===t.split("-").join("/")))},actions:{}})},482:(e,t,o)=>{o.d(t,{L:()=>l});var r=o(7363),n=o(397),a=o(338),i=o(3477),s=o(8570);const l=(0,r.Q_)("user",{state:()=>({counter:0,useruid:"",user:{}}),getters:{doubleCount:e=>2*e.counter},actions:{increment(){this.counter++},setUser(e){this.useruid=e},HandleAuthenticationState(){(0,n.Aj)(a.fauth,(e=>{if(e){const t=(0,i.iH)(a.fdb,"Users/"+e.uid);(0,s.U2)(t).then((t=>{this.useruid=e.uid,this.user=t.val()}))}else console.log("user is not logged in")}))}}})},5610:(e,t,o)=>{o.d(t,{Z:()=>p});var r=o(9835);const n={key:0,class:"full-height fullscreen full-width absolute-center",style:{"z-index":"9997",background:"rgba(23, 22, 21,0.6)","min-height":"5000%"}};function a(e,t,o,a,i,s){const l=(0,r.up)("q-spinner-gears");return a.loader?((0,r.wg)(),(0,r.iD)("div",n,[(0,r.Wm)(l,{style:{"z-index":"9998"},class:"absolute-center",color:"cyan",size:"20em"})])):(0,r.kq)("",!0)}var i=o(4727);const s={name:"LoadingPanel",setup(){return{loader:i._}}};var l=o(1639),u=o(9120),d=o(9984),c=o.n(d);const f=(0,l.Z)(s,[["render",a]]),p=f;c()(s,"components",{QSpinnerGears:u.Z})}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,o),a.exports}o.m=e,(()=>{var e=[];o.O=(t,r,n,a)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,n,a]=e[d],s=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](r[l])))?r.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(d--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,n,a]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;o.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"===typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"===typeof r.then)return r}var a=Object.create(null);o.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&n&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>r[e]));return i["default"]=()=>r,o.d(a,i),a}})(),(()=>{o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{57:"65e1fb77",365:"56e88187",424:"a8be2cfd",431:"5e648272",885:"39148bc2"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"31d6cfe0",365:"1fcb2b48",736:"b264cb36",885:"f40b24fb"}[e]+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="todo-project:";o.l=(r,n,a,i)=>{if(e[r])e[r].push(n);else{var s,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var c=u[d];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==t+a){s=c;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[n];var f=(t,o)=>{s.onerror=s.onload=null,clearTimeout(p);var n=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(o))),t)return t(o)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p=""})(),(()=>{var e=(e,t,o,r)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)o();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,n.parentNode.removeChild(n),r(l)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var n=o[r],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){n=i[r],a=n.getAttribute("data-href");if(a===e||a===t)return n}},r=r=>new Promise(((n,a)=>{var i=o.miniCssF(r),s=o.p+i;if(t(i,s))return n();e(r,s,n,a)})),n={143:0};o.f.miniCss=(e,t)=>{var o={365:1,885:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=r(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((o,r)=>n=e[t]=[o,r]));r.push(n[2]=a);var i=o.p+o.u(t),s=new Error,l=r=>{if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};o.l(i,l,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[i,s,l]=r,u=0;if(i.some((t=>0!==e[t]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(l)var d=l(o)}for(t&&t(r);u<i.length;u++)a=i[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},r=self["webpackChunktodo_project"]=self["webpackChunktodo_project"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=o.O(void 0,[736],(()=>o(335)));r=o.O(r)})();