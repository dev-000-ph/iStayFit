(function(e){function n(n){for(var r,c,a=n[0],i=n[1],f=n[2],l=0,s=[];l<a.length;l++)c=a[l],Object.prototype.hasOwnProperty.call(u,c)&&u[c]&&s.push(u[c][0]),u[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(s.length)s.shift()();return o.push.apply(o,f||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,c=1;c<t.length;c++){var a=t[c];0!==u[a]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},c={app:0},u={app:0},o=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0377fc36":"e9854105","chunk-0a482964":"27851eaf","chunk-1621b6ea":"adcdf3f9","chunk-25ec7cef":"43e25831","chunk-2d225bf7":"6da4dc8d","chunk-59ec2c30":"bdc538e7","chunk-70d37160":"7cf14ce9","chunk-71b3bd80":"641cecd0","chunk-bf1764ca":"0e66d7e2"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-0377fc36":1,"chunk-0a482964":1,"chunk-1621b6ea":1,"chunk-25ec7cef":1,"chunk-59ec2c30":1,"chunk-70d37160":1,"chunk-71b3bd80":1,"chunk-bf1764ca":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-0377fc36":"c4b8cc97","chunk-0a482964":"e3b48d2c","chunk-1621b6ea":"429e0b04","chunk-25ec7cef":"e6b0f037","chunk-2d225bf7":"31d6cfe0","chunk-59ec2c30":"b5cb4ad3","chunk-70d37160":"e1eab7c8","chunk-71b3bd80":"e3e0eb00","chunk-bf1764ca":"fc6f9a41"}[e]+".css",u=i.p+r,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var f=o[a],l=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===r||l===u))return n()}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){f=s[a],l=f.getAttribute("data-href");if(l===r||l===u)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||u,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],d.parentNode.removeChild(d),t(o)},d.href=u;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){c[e]=0})));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,t){r=u[e]=[n,t]}));n.push(r[2]=o);var f,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=a(e);var s=new Error;f=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,t[1](s)}u[e]=void 0}};var d=setTimeout((function(){f({type:"timeout",target:l})}),12e4);l.onerror=l.onload=f,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/iStayFit/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],l=f.push.bind(f);f.push=n,f=f.slice();for(var s=0;s<f.length;s++)n(f[s]);var d=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},2395:function(e,n,t){},"3db4":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view",{attrs:{name:"navigation"}}),t("router-view",{staticClass:"main-body-container"}),t("router-view",{attrs:{name:"footer"}}),t("router-view",{attrs:{name:"ScrollTop"}})],1)},u=[],o=t("1da1"),a=(t("96cf"),t("b0c0"),{name:"App",components:{},data:function(){return{}},methods:{SystemInfo:function(){var e=this,n={request:1,data:{}};this.http.post(this.api.SystemInfoService,n).then((function(n){"string"==typeof n.data?e.$swal({icon:"error",title:"Oops...",text:"Server Error! Failed to connect to MySQL."}):localStorage.setItem("system_info",JSON.stringify(n.data[0]))})).catch((function(n){console.log(n),e.$swal({icon:"error",title:"Oops...",text:"Server Error!"})}))}},watch:{$route:function(e){document.title="iStayFit",document.title=document.title+" | "+e.name}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return document.title="iStayFit",document.title=document.title+" | "+e.$route.name,n.next=4,e.SystemInfo();case 4:case"end":return n.stop()}}),n)})))()}}),i=a,f=(t("7c55"),t("2877")),l=Object(f["a"])(i,c,u,!1,null,null,null),s=l.exports,d=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f")),h=d["a"].prototype.push;d["a"].prototype.push=function(e){return h.call(this,e).catch((function(e){return e}))},r["default"].use(d["a"]);var p=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",components:{default:function(){return t.e("chunk-1621b6ea").then(t.bind(null,"bb51"))},navigation:function(){return t.e("chunk-25ec7cef").then(t.bind(null,"216c"))},footer:function(){return t.e("chunk-59ec2c30").then(t.bind(null,"fd2d"))},ScrollTop:function(){return t.e("chunk-2d225bf7").then(t.bind(null,"e65e"))}}},{path:"/aboutUs",name:"AboutUs",components:{default:function(){return t.e("chunk-70d37160").then(t.bind(null,"f820"))},navigation:function(){return t.e("chunk-25ec7cef").then(t.bind(null,"216c"))},footer:function(){return t.e("chunk-59ec2c30").then(t.bind(null,"fd2d"))},ScrollTop:function(){return t.e("chunk-2d225bf7").then(t.bind(null,"e65e"))}}},{path:"/contactUs",name:"ContactUs",components:{default:function(){return t.e("chunk-0377fc36").then(t.bind(null,"e9bb"))},navigation:function(){return t.e("chunk-25ec7cef").then(t.bind(null,"216c"))},footer:function(){return t.e("chunk-59ec2c30").then(t.bind(null,"fd2d"))},ScrollTop:function(){return t.e("chunk-2d225bf7").then(t.bind(null,"e65e"))}}},{path:"/nutrition",name:"Nutrition",components:{default:function(){return t.e("chunk-0a482964").then(t.bind(null,"07ce"))},navigation:function(){return t.e("chunk-25ec7cef").then(t.bind(null,"216c"))},footer:function(){return t.e("chunk-59ec2c30").then(t.bind(null,"fd2d"))},ScrollTop:function(){return t.e("chunk-2d225bf7").then(t.bind(null,"e65e"))}}},{path:"/exercises",name:"Exercises",components:{default:function(){return t.e("chunk-71b3bd80").then(t.bind(null,"b280"))},navigation:function(){return t.e("chunk-25ec7cef").then(t.bind(null,"216c"))},footer:function(){return t.e("chunk-59ec2c30").then(t.bind(null,"fd2d"))},ScrollTop:function(){return t.e("chunk-2d225bf7").then(t.bind(null,"e65e"))}}},{path:"/fitnessCalculator/:name",name:"FitnessCalculator",components:{default:function(){return t.e("chunk-bf1764ca").then(t.bind(null,"ed9d"))},navigation:function(){return t.e("chunk-25ec7cef").then(t.bind(null,"216c"))},footer:function(){return t.e("chunk-59ec2c30").then(t.bind(null,"fd2d"))},ScrollTop:function(){return t.e("chunk-2d225bf7").then(t.bind(null,"e65e"))}}}],b=new d["a"]({mode:"history",base:"/",routes:p}),m=b,v=t("2f62");r["default"].use(v["a"]);var k=new v["a"].Store({state:{},mutations:{},actions:{},modules:{}}),g=(t("3db4"),t("f9d5")),y=t.n(g),w=(t("4413"),t("d4ec")),S=t("bee2"),O=t("bc3a"),j=t.n(O),x=j.a.create({baseURL:"https://joribesramel.online/server",timeout:6e3}),T=function(){function e(){Object(w["a"])(this,e)}return Object(S["a"])(e,null,[{key:"get",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(n,t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.get(n,{params:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function n(n,t){return e.apply(this,arguments)}return n}()},{key:"post",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(n,t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.post(n,JSON.stringify(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function n(n,t){return e.apply(this,arguments)}return n}()}]),e}(),E=T,_={SystemInfoService:"services/SystemInfoService.php"},C=t("f825"),P=t.n(C),A=(t("f8ce"),t("3250")),N=t.n(A);r["default"].config.productionTip=!1,r["default"].use(y.a),r["default"].prototype.http=E,r["default"].prototype.api=_,Object(C["locale"])(N.a),r["default"].use(P.a),new r["default"]({router:m,store:k,render:function(e){return e(s)}}).$mount("#app")},"7c55":function(e,n,t){"use strict";t("2395")}});
//# sourceMappingURL=app.c0706fa7.js.map