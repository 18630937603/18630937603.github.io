(function(e){function t(t){for(var o,c,a=t[0],u=t[1],l=t[2],s=0,d=[];s<a.length;s++)c=a[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function c(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"278c3bc0"}[e]+".js"}function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=c(e);var l=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}r[e]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},7714:function(e,t,n){"use strict";n("f216")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={id:"nav"},i=Object(o["f"])("Home"),c=Object(o["f"])(" | "),a=Object(o["f"])("About");function u(e,t){var n=Object(o["t"])("router-link"),u=Object(o["t"])("router-view");return Object(o["p"])(),Object(o["d"])(o["a"],null,[Object(o["e"])("div",r,[Object(o["g"])(n,{to:"/"},{default:Object(o["y"])((function(){return[i]})),_:1}),c,Object(o["g"])(n,{to:"/about"},{default:Object(o["y"])((function(){return[a]})),_:1})]),Object(o["g"])(u)],64)}n("7714");var l=n("6b0d"),s=n.n(l);const f={},d=s()(f,[["render",u]]);var b=d,p=n("9483");Object(p["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var v=n("6c02"),g={class:"home"};function j(e,t,n,r,i,c){var a;return Object(o["p"])(),Object(o["d"])("div",g,[Object(o["e"])("button",{onClick:t[0]||(t[0]=function(t){return e.changeColor()})},"更改主题颜色为红色"),Object(o["e"])("button",{onClick:t[1]||(t[1]=function(t){return e.getGeoLocation()})},"获取地理位置"),Object(o["e"])("button",{onClick:t[2]||(t[2]=function(t){return e.askForPermission()})},"请求通知权限"),Object(o["e"])("button",{onClick:t[3]||(t[3]=function(t){return e.notify()})},"2秒后弹出一条通知"),Object(o["e"])("div",null,"经度："+Object(o["v"])(e.state.latitude),1),Object(o["e"])("div",null,"纬度："+Object(o["v"])(e.state.longitude),1),Object(o["e"])("div",null,"通知："+Object(o["v"])(e.state.notification),1),Object(o["e"])("div",null,"当前通知权限："+Object(o["v"])((null===(a=e.Notification)||void 0===a?void 0:a.permission)||e.state.allowNotification),1),Object(o["e"])("div",null,"控制台错误："+Object(o["v"])(e.state.errorMsg),1)])}var m=Object(o["h"])({name:"Home",setup:function(){var e=Object(o["r"])({latitude:"",longitude:"",errorMsg:"",notification:"",allowNotification:""});function t(){navigator.geolocation.getCurrentPosition((function(t){e.latitude=""+t.coords.latitude,e.longitude=""+t.coords.longitude}),(function(t){alert("定位获取失败！"),e.errorMsg=""+t}))}function n(){Notification?"granted"!==Notification.permission?alert("您拒绝了通知权限"):setTimeout((function(){navigator.serviceWorker.ready.then((function(e){e.showNotification("我是通知的标题",{body:"我是通知的内容",icon:"../../public/img/icons/favicon-16x16.png"})}))}),2e3):alert("您的浏览器不支持通知")}function r(){Notification?"default"!==Notification.permission?(alert("您已经设置过了通知权限，现在的状态为".concat(Notification.permission)),e.allowNotification=Notification.permission):Notification.requestPermission().then((function(t){e.allowNotification=t})):alert("您的浏览器不支持通知")}return{state:e,getGeoLocation:t,notify:n,askForPermission:r}},methods:{changeColor:function(){var e,t;null===(e=document)||void 0===e||null===(t=e.querySelector('meta[name="theme-color"]'))||void 0===t||t.setAttribute("content","#FF0000")}}});const O=s()(m,[["render",j]]);var h=O,y=[{path:"/",name:"Home",component:h},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],w=Object(v["a"])({history:Object(v["b"])(),routes:y}),k=w,N=n("5502"),P=Object(N["a"])({state:{},mutations:{},actions:{},modules:{}});Object(o["c"])(b).use(P).use(k).mount("#app")},f216:function(e,t,n){}});
//# sourceMappingURL=app.6caccc47.js.map