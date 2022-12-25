(function(){"use strict";var t={5148:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(8935),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navbar navbar-expand navbar-dark bg-dark"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("SimpleDMS")]),n("div",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item dropdown"},[n("a",{staticClass:"nav-link dropdown-toggle",attrs:{"data-bs-toggle":"dropdown",href:"#",role:"button","aria-expanded":"false"}},[t._v("Department Info")]),n("ul",{staticClass:"dropdown-menu"},[n("li",[n("router-link",{staticClass:"dropdown-item",attrs:{to:"/dept"}},[t._v("Dept")])],1),n("li",[n("router-link",{staticClass:"dropdown-item",attrs:{to:"/add/dept"}},[t._v("Add")])],1)])]),n("li",{staticClass:"nav-item dropdown"},[n("a",{staticClass:"nav-link dropdown-toggle",attrs:{"data-bs-toggle":"dropdown",href:"#",role:"button","aria-expanded":"false"}},[t._v("Employee Info")]),n("ul",{staticClass:"dropdown-menu"},[n("li",[n("router-link",{staticClass:"dropdown-item",attrs:{to:"/emp"}},[t._v("Emp")])],1),n("li",[n("router-link",{staticClass:"dropdown-item",attrs:{to:"/add/emp"}},[t._v("Add")])],1)])]),n("li",{staticClass:"nav-item dropdown"},[n("a",{staticClass:"nav-link dropdown-toggle",attrs:{"data-bs-toggle":"dropdown",href:"#",role:"button","aria-expanded":"false"}},[t._v("Faq Info")]),n("ul",{staticClass:"dropdown-menu"},[n("li",[n("router-link",{staticClass:"dropdown-item",attrs:{to:"/faq"}},[t._v("Faq")])],1),n("li",[n("router-link",{staticClass:"dropdown-item",attrs:{to:"/add/faq"}},[t._v("Add")])],1)])])])],1),n("div",{staticClass:"container mt-3"},[n("router-view")],1)])},a=[],i={name:"app"},u=i,d=n(1001),s=(0,d.Z)(u,o,a,!1,null,null,null),l=s.exports,c=(n(3276),n(7806)),f=(n(44),n(1539),n(8783),n(3948),n(2809));r["default"].use(f.Z);var p=[{path:"/",alias:"/dept",name:"dept",component:function(){return Promise.all([n.e(599),n.e(442)]).then(n.bind(n,442))}},{path:"/dept/:dno",name:"dept-details",component:function(){return Promise.all([n.e(599),n.e(957)]).then(n.bind(n,6957))}},{path:"/add/dept",name:"add-dept",component:function(){return Promise.all([n.e(599),n.e(934)]).then(n.bind(n,8934))}},{path:"/emp",name:"emp",component:function(){return Promise.all([n.e(599),n.e(610)]).then(n.bind(n,3610))}},{path:"/emp/:eno",name:"emp-details",component:function(){return Promise.all([n.e(599),n.e(807)]).then(n.bind(n,6807))}},{path:"/add/emp",name:"add-emp",component:function(){return Promise.all([n.e(599),n.e(298)]).then(n.bind(n,7298))}},{path:"/faq",name:"faq",component:function(){return Promise.all([n.e(599),n.e(281)]).then(n.bind(n,4281))}},{path:"/faq/:no",name:"faq-details",component:function(){return Promise.all([n.e(599),n.e(459)]).then(n.bind(n,6459))}},{path:"/add/faq",name:"add-faq",component:function(){return Promise.all([n.e(599),n.e(518)]).then(n.bind(n,8518))}}],m=new f.Z({mode:"history",base:"/",routes:p}),v=m,b=n(4665);r["default"].use(b.ZP);var h=new b.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});r["default"].use(c.XG7),r["default"].config.productionTip=!1,new r["default"]({router:v,store:h,render:function(t){return t(l)}}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],a=t[l][2];for(var u=!0,d=0;d<r.length;d++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[d])}))?r.splice(d--,1):(u=!1,a<i&&(i=a));if(u){t.splice(l--,1);var s=o();void 0!==s&&(e=s)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"-legacy."+{281:"b6992917",298:"db877622",442:"39833bf7",459:"88264bf0",518:"c956ace9",599:"cf8ba836",610:"7e0dacae",807:"4a9eb2fe",934:"c7358b89",957:"a9cea267"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{281:"4445956f",298:"d2108c4b",442:"4445956f",459:"ba9419c9",518:"d2108c4b",610:"4445956f",807:"ba9419c9",934:"d2108c4b",957:"ba9419c9"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="front-end:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var u,d;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var c=s[l];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==e+a){u=c;break}}u||(d=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+a),u.src=r),t[r]=[o];var f=function(e,n){u.onerror=u.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),d&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||e,d=new Error("Loading CSS chunk "+t+" failed.\n("+u+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=u,o.parentNode.removeChild(o),r(d)}};return o.onerror=o.onload=a,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===t||a===e)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(e(i,u))return o();t(r,u,o,a)}))},o={143:0};n.f.miniCss=function(t,e){var n={281:1,298:1,442:1,459:1,518:1,610:1,807:1,934:1,957:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),u=new Error,d=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,d,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],u=r[1],d=r[2],s=0;if(i.some((function(e){return 0!==t[e]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(d)var l=d(n)}for(e&&e(r);s<i.length;s++)a=i[s],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},r=self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5148)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.2d187da6.js.map