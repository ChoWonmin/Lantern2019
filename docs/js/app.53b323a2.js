(function(t){function e(e){for(var o,i,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)i=s[u],a[i]&&d.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},r=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f526c89a"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,o){n=a[t]=[e,o]});e.push(n[2]=o);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t),r=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+o+": "+r+")");i.type=o,i.request=r,n[1](i)}a[t]=void 0}};var l=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/Lantern2019/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"03f4":function(t,e,n){},"15e1":function(t,e,n){"use strict";var o=n("4070"),a=n.n(o);a.a},"16d2":function(t,e,n){},4070:function(t,e,n){},"45b7":function(t,e,n){t.exports=n.p+"img/lanternlogosimple2.0485de75.svg"},"54ab":function(t,e,n){"use strict";var o=n("5820"),a=n.n(o);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),a=n("bb71");n("da64");o["a"].use(a["a"],{iconfont:"md"});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"app-root"},[n("Header"),n("div",{staticClass:"content-wrapper"},[n("router-view",{staticClass:"pa-0 ma-0"})],1),n("BottomNav")],1)},i=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header grey lighten-4"},[o("v-flex",[o("v-img",{attrs:{src:n("a391"),height:"40",contain:""}})],1)],1)},c=[],l={data:function(){return{}},methods:{}},u=l,f=(n("c813"),n("2877")),d=n("6544"),p=n.n(d),v=n("0e8f"),g=n("adda"),h=Object(f["a"])(u,s,c,!1,null,"aed4bad4",null),m=h.exports;p()(h,{VFlex:v["a"],VImg:g["a"]});var b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-bottom-nav",{staticClass:"bottom-nav"},[o("v-btn",{attrs:{to:"/"}},[o("v-img",{staticClass:"logo-icon",attrs:{src:n("45b7"),width:"14",contain:""}})],1),o("v-btn",{attrs:{to:"lanternList"}},[o("v-icon",[t._v("view_list")])],1),o("v-btn",[o("v-icon",[t._v("sms")])],1),o("v-btn",[o("v-icon",[t._v("home")])],1)],1)},w=[],y={data:function(){return{}},methods:{}},_=y,x=(n("15e1"),n("887a")),C=n("8336"),j=n("132d"),k=Object(f["a"])(_,b,w,!1,null,"5625623a",null),V=k.exports;p()(k,{VBottomNav:x["a"],VBtn:C["a"],VIcon:j["a"],VImg:g["a"]});var L=n("8aa5"),S=n.n(L),O={apiKey:"AIzaSyD8ZQicwgLvXPSiNS9ykAScBJ3wbJPPfho",authDomain:"lantern2019-607ba.firebaseapp.com",databaseURL:"https://Lantern2019.firebaseio.com",storageBucket:"lantern2019-607ba.appspot.com",projectId:"lantern2019-607ba"},E=O;S.a.initializeApp(E);var P={auth:S.a.auth(),provider:new S.a.auth.GoogleAuthProvider,database:S.a.firestore().collection("test"),storage:S.a.storage()},A=new S.a.auth.FacebookAuthProvider;A.addScope("user_birthday"),A.addScope("user_gender");var B={googleLogin:function(){P.auth.signInWithPopup(P.provider).then(function(t){console.log(t)}).catch(function(t){console.error(t)})},facebookLogin:function(){S.a.auth().signInWithPopup(A).then(function(t){var e=t.user;console.log(e)}).catch(function(t){console.error(t)})}},K={authModule:B,resources:P},N={name:"App",components:{Header:m,BottomNav:V},data:function(){return{email:void 0,password:void 0}},methods:{clickBtn:function(){K.facebookLogin()}}},I=N,T=(n("cf25"),n("7496")),$=Object(f["a"])(I,r,i,!1,null,null,null),D=$.exports;p()($,{VApp:T["a"]});var F=n("8c4f"),J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"align-center":"true"}},[n("Header"),n("v-layout",{attrs:{"align-center":"","justify-center":"",column:"","fill-height":""}},[n("v-card",[n("v-flex",[n("v-btn",{staticClass:"font-weight-bold",attrs:{color:"#3b5998"}},[n("div",{staticClass:"login-btn"},[t._v("sign in with Facebook")])])],1),n("v-flex",[n("v-btn",{staticClass:"font-weight-bold",attrs:{color:"#dd4b39"}},[n("div",{staticClass:"login-btn"},[t._v("sign in with Google")])])],1),n("v-flex",[n("v-btn",{staticClass:"font-weight-bold",attrs:{color:"#dd4b39"}},[n("div",{staticClass:"login-btn"},[t._v("sign in with Google")])])],1)],1)],1)],1)},H=[],M={name:"Login",components:{Header:m},data:function(){return{}}},q=M,G=(n("54ab"),n("b0af")),R=n("a523"),z=n("a722"),U=Object(f["a"])(q,J,H,!1,null,"1edc697a",null),W=U.exports;p()(U,{VBtn:C["a"],VCard:G["a"],VContainer:R["a"],VFlex:v["a"],VLayout:z["a"]});var Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{"fill-height":"",column:""}},[n("Search"),n("Swiper")],1)],1)},X=[],Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-autocomplete",{attrs:{box:"","background-color":"white","full-width":"",items:t.states,placeholder:"지역을 입력하세요","item-text":"name",label:"location"}})],1)},Y=[],tt={data:function(){return{isEditing:!1,model:null,states:["Seoul, Republic of Korea","Osaka, Japan","Tokyo, Japan","Barcelona, Spain","Taipei, Taiwan","Jeju, Republic of Korea","London, UK"]}},methods:{}},et=tt,nt=n("c6a6"),ot=Object(f["a"])(et,Z,Y,!1,null,"0ae3a702",null),at=ot.exports;p()(ot,{VAutocomplete:nt["a"],VLayout:z["a"]});var rt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"touch",rawName:"v-touch",value:{left:function(){return t.swipe("left")},right:function(){return t.swipe("right")},up:function(){return t.swipe("up")},down:function(){return t.swipe("down")}},expression:"{left: () => swipe('left'), right: () => swipe('right'), up: () => swipe('up'),down: () => swipe('down')}"}],staticClass:"swiper grey lighten-2",on:{click:function(e){t.swipeDirection="None"}}},[t._v(t._s(t.swipeDirection)),o("v-card",{staticClass:"swiper-card",class:t.swipeDirection,attrs:{width:"100%",height:"100%"}},[o("v-img",{attrs:{src:n("bb9e"),height:"100%"}})],1)],1)},it=[],st={data:function(){return{swipeDirection:"None"}},methods:{swipe:function(t){switch(t){case"left":this.swipeDirection=t;break;case"right":this.swipeDirection=t;break}}}},ct=st,lt=(n("dd1f"),n("269a")),ut=n.n(lt),ft=n("c341"),dt=Object(f["a"])(ct,rt,it,!1,null,"4d54a90b",null),pt=dt.exports;p()(dt,{VCard:G["a"],VImg:g["a"]}),ut()(dt,{Touch:ft["a"]});var vt={components:{Header:m,Search:at,Swiper:pt},data:function(){return{}},methods:{},mounted:function(){}},gt=vt,ht=Object(f["a"])(gt,Q,X,!1,null,"60207b7d",null),mt=ht.exports;p()(ht,{VContainer:R["a"],VLayout:z["a"]});var bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"overflow-y":"scroll"},attrs:{"align-center":"","fill-height":"",fluid:""}},[n("v-layout",[n("v-flex",{attrs:{xs12:""}},[n("ListViewer",{attrs:{title:"나와 가장 잘 맞는 랜턴",items:t.list}}),n("ListViewer",{attrs:{title:"내가 좋아요한 카드",items:t.list}}),n("ListViewer",{attrs:{title:"내가 좋아요한 카드",items:t.list}})],1)],1)],1)},wt=[],yt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-content",[o("v-content",{staticClass:"list-header"},[o("div",{staticClass:"list-header-text"},[t._v(t._s(t.title))])]),o("v-content",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"lantern-list"},t._l(t.items,function(e,a){return t.listCount>a?o("v-card",[o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{"align-self-center":"",xs6:""}},[o("v-img",{attrs:{src:n("bb9e"),height:"180"}})],1),o("v-flex",{attrs:{xs6:""}},[o("v-card-title",[o("v-layout",{attrs:{column:""}},[o("div",{staticClass:"headline name"},[t._v(t._s(e.name))]),o("div",{staticClass:"font-weight-light body-2"},[o("div",{staticClass:"infomation"},[t._v(t._s("( "+e.age+", "+e.sex+" )"))])]),o("v-layout",[o("v-icon",{attrs:{small:""}},[t._v("language")]),o("div",{staticClass:"font-weight-light font-italic caption"},[o("div",{staticClass:"keywords"},[t._v(t._s(e.language.join(" ")))])])],1),o("v-layout",[o("v-icon",{attrs:{small:"",color:"yellow"}},[t._v("star")]),o("div",[t._v("4.5")])],1)],1)],1)],1)],1)],1):t._e()}),1),o("v-content",[o("v-icon",{staticClass:"icon-more",staticStyle:{},on:{click:function(e){return t.openList()}}},[t._v("keyboard_arrow_down")])],1)],1)},_t=[],xt={props:{title:{type:String,required:!0},items:{type:Array,required:!0},open:{type:Boolean,default:!0}},data:function(){return{listCount:2}},methods:{openList:function(){this.listCount+=10}}},Ct=xt,jt=(n("e1da"),n("12b2")),kt=n("549c"),Vt=Object(f["a"])(Ct,yt,_t,!1,null,"2e85d122",null),Lt=Vt.exports;p()(Vt,{VCard:G["a"],VCardTitle:jt["a"],VContent:kt["a"],VFlex:v["a"],VIcon:j["a"],VImg:g["a"],VLayout:z["a"]});var St={components:{ListViewer:Lt},data:function(){return{list:[{photo:"",name:"wonmin",age:26,keywords:["soccer","soju","computer"],sex:"male",language:["Korean","English"]},{photo:"",name:"wonmin",age:26,keywords:["soccer","soju","computer"],sex:"male",language:["Korean","English"]},{photo:"",name:"wonmin",age:26,keywords:["soccer","soju","computer"],sex:"male",language:["Korean","English"]},{photo:"",name:"wonmin",age:26,keywords:["soccer","soju","computer"],sex:"male",language:["Korean","English"]},{photo:"",name:"wonmin",age:26,keywords:["soccer","soju","computer"],sex:"male",language:["Korean","English"]},{photo:"",name:"wonmin",age:26,keywords:["soccer","soju","computer"],sex:"male",language:["Korean","English"]},{photo:"",name:"wonmin",age:26,keywords:["soccer","soju","computer"],sex:"male",language:["Korean","English"]}],isOpen:!1}}},Ot=St,Et=Object(f["a"])(Ot,bt,wt,!1,null,null,null),Pt=Et.exports;p()(Et,{VContainer:R["a"],VFlex:v["a"],VLayout:z["a"]}),o["a"].use(F["a"]);var At=new F["a"]({mode:"history",base:"/Lantern2019/",routes:[{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"login",component:W},{path:"/",name:"main",component:mt},{path:"/lanternList",name:"lanternList",component:Pt}]}),Bt=n("2f62");o["a"].use(Bt["a"]);var Kt=new Bt["a"].Store({state:{},mutations:{},actions:{}}),Nt=n("9483");Object(Nt["a"])("".concat("/Lantern2019/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),o["a"].config.productionTip=!1,new o["a"]({router:At,store:Kt,render:function(t){return t(D)}}).$mount("#app")},5820:function(t,e,n){},a391:function(t,e,n){t.exports=n.p+"img/logo_lantern.195b0e1e.svg"},bb93:function(t,e,n){},bb9e:function(t,e,n){t.exports=n.p+"img/profile01.1a9dca4e.jpg"},c813:function(t,e,n){"use strict";var o=n("f57f"),a=n.n(o);a.a},cf25:function(t,e,n){"use strict";var o=n("bb93"),a=n.n(o);a.a},dd1f:function(t,e,n){"use strict";var o=n("03f4"),a=n.n(o);a.a},e1da:function(t,e,n){"use strict";var o=n("16d2"),a=n.n(o);a.a},f57f:function(t,e,n){}});
//# sourceMappingURL=app.53b323a2.js.map