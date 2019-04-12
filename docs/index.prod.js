!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var r in t)("object"==typeof exports?exports:e)[r]=t[r]}}(window,function(){return function(H){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!B[e]||!f[e])return;for(var t in f[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(M[t]=n[t]);0==--s&&0===l&&y()}(e,n),t&&t(e,n)};var i,r=!0,P="7dda5a8a963a98c71838",n=1e4,k={},S=[],o=[];function c(n){var t=U[n];if(!t)return R;var r=function(e){return t.hot.active?(U[e]?-1===U[e].parents.indexOf(n)&&U[e].parents.push(n):(S=[n],i=e),-1===t.children.indexOf(e)&&t.children.push(e)):(console.warn("[HMR] unexpected require("+e+") from disposed module "+n),S=[]),R(e)},e=function(n){return{configurable:!0,enumerable:!0,get:function(){return R[n]},set:function(e){R[n]=e}}};for(var o in R)Object.prototype.hasOwnProperty.call(R,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(r,o,e(o));return r.e=function(e){return"ready"===L&&q("prepare"),l++,R.e(e).then(n,function(e){throw n(),e});function n(){l--,"prepare"===L&&(u[e]||h(e),0===l&&0===s&&y())}},r.t=function(e,n){return 1&n&&(e=r(e)),R.t(e,-2&n)},r}var d=[],L="idle";function q(e){L=e;for(var n=0;n<d.length;n++)d[n].call(null,e)}var a,M,T,s=0,l=0,u={},f={},B={};function N(e){return+e+""===e?+e:e}function p(e){if("idle"!==L)throw new Error("check() is only allowed in idle status");return r=e,q("check"),function(e){return e=e||1e4,new Promise(function(n,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=R.p+""+P+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)n();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void t(e)}n(e)}}})}(n).then(function(e){if(!e)return q("idle"),null;f={},u={},B=e.c,T=e.h,q("prepare");var n=new Promise(function(e,n){a={resolve:e,reject:n}});M={};return h(0),"prepare"===L&&0===l&&0===s&&y(),n})}function h(e){B[e]?(f[e]=!0,s++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=R.p+""+e+"."+P+".hot-update.js",document.head.appendChild(n)}(e)):u[e]=!0}function y(){q("ready");var n=a;if(a=null,n)if(r)Promise.resolve().then(function(){return v(r)}).then(function(e){n.resolve(e)},function(e){n.reject(e)});else{var e=[];for(var t in M)Object.prototype.hasOwnProperty.call(M,t)&&e.push(N(t));n.resolve(e)}}function v(t){if("ready"!==L)throw new Error("apply() is only allowed in ready status");var e,n,r,l,o;function i(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});0<r.length;){var o=r.pop(),i=o.id,c=o.chain;if((l=U[i])&&!l.hot._selfAccepted){if(l.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(l.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var d=0;d<l.parents.length;d++){var a=l.parents[d],s=U[a];if(s){if(s.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([a]),moduleId:i,parentId:a};-1===n.indexOf(a)&&(s.hot._acceptedDependencies[i]?(t[a]||(t[a]=[]),u(t[a],[i])):(delete t[a],n.push(a),r.push({chain:c.concat([a]),id:a})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var c={},d=[],a={},s=function(){console.warn("[HMR] unexpected require("+p.moduleId+") to disposed module")};for(var f in M)if(Object.prototype.hasOwnProperty.call(M,f)){var p;o=N(f);var h=!1,y=!1,v=!1,m="";switch((p=M[f]?i(o):{type:"disposed",moduleId:f}).chain&&(m="\nUpdate propagation: "+p.chain.join(" -> ")),p.type){case"self-declined":t.onDeclined&&t.onDeclined(p),t.ignoreDeclined||(h=new Error("Aborted because of self decline: "+p.moduleId+m));break;case"declined":t.onDeclined&&t.onDeclined(p),t.ignoreDeclined||(h=new Error("Aborted because of declined dependency: "+p.moduleId+" in "+p.parentId+m));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(p),t.ignoreUnaccepted||(h=new Error("Aborted because "+o+" is not accepted"+m));break;case"accepted":t.onAccepted&&t.onAccepted(p),y=!0;break;case"disposed":t.onDisposed&&t.onDisposed(p),v=!0;break;default:throw new Error("Unexception type "+p.type)}if(h)return q("abort"),Promise.reject(h);if(y)for(o in a[o]=M[o],u(d,p.outdatedModules),p.outdatedDependencies)Object.prototype.hasOwnProperty.call(p.outdatedDependencies,o)&&(c[o]||(c[o]=[]),u(c[o],p.outdatedDependencies[o]));v&&(u(d,[p.moduleId]),a[o]=s)}var g,b=[];for(n=0;n<d.length;n++)o=d[n],U[o]&&U[o].hot._selfAccepted&&b.push({module:o,errorHandler:U[o].hot._selfAccepted});q("dispose"),Object.keys(B).forEach(function(e){!1===B[e]&&function(e){delete installedChunks[e]}(e)});for(var w,O,j=d.slice();0<j.length;)if(o=j.pop(),l=U[o]){var _={},E=l.hot._disposeHandlers;for(r=0;r<E.length;r++)(e=E[r])(_);for(k[o]=_,l.hot.active=!1,delete U[o],delete c[o],r=0;r<l.children.length;r++){var D=U[l.children[r]];D&&(0<=(g=D.parents.indexOf(o))&&D.parents.splice(g,1))}}for(o in c)if(Object.prototype.hasOwnProperty.call(c,o)&&(l=U[o]))for(O=c[o],r=0;r<O.length;r++)w=O[r],0<=(g=l.children.indexOf(w))&&l.children.splice(g,1);for(o in q("apply"),P=T,a)Object.prototype.hasOwnProperty.call(a,o)&&(H[o]=a[o]);var I=null;for(o in c)if(Object.prototype.hasOwnProperty.call(c,o)&&(l=U[o])){O=c[o];var x=[];for(n=0;n<O.length;n++)if(w=O[n],e=l.hot._acceptedDependencies[w]){if(-1!==x.indexOf(e))continue;x.push(e)}for(n=0;n<x.length;n++){e=x[n];try{e(O)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:o,dependencyId:O[n],error:e}),t.ignoreErrored||I||(I=e)}}}for(n=0;n<b.length;n++){var A=b[n];o=A.module,S=[o];try{R(o)}catch(n){if("function"==typeof A.errorHandler)try{A.errorHandler(n)}catch(e){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:o,error:e,originalError:n}),t.ignoreErrored||I||(I=e),I||(I=n)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:o,error:n}),t.ignoreErrored||I||(I=n)}}return I?(q("fail"),Promise.reject(I)):(q("idle"),new Promise(function(e){e(d)}))}var U={};function R(e){if(U[e])return U[e].exports;var n=U[e]={i:e,l:!1,exports:{},hot:function(e){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:i!==e,active:!0,accept:function(e,n){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._acceptedDependencies[e[t]]=n||function(){};else r._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._declinedDependencies[e[n]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=r._disposeHandlers.indexOf(e);0<=n&&r._disposeHandlers.splice(n,1)},check:p,apply:v,status:function(e){if(!e)return L;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var n=d.indexOf(e);0<=n&&d.splice(n,1)},data:k[e]};return i=void 0,r}(e),parents:(o=S,S=[],o),children:[]};return H[e].call(n.exports,n,n.exports,c(e)),n.l=!0,n.exports}return R.m=H,R.c=U,R.d=function(e,n,t){R.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},R.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},R.t=function(n,e){if(1&e&&(n=R(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(R.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)R.d(t,r,function(e){return n[e]}.bind(null,r));return t},R.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return R.d(n,"a",n),n},R.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},R.p="",R.h=function(){return P},c(0)(R.s=0)}([function(e,n,t){"use strict";t.r(n);t(1);function i(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}document.getElementById("navigationButton").addEventListener("click",function(e){document.getElementById("navigationButton").firstChild.classList.toggle("c-hamburger--isActive"),document.getElementById("headerNavigation").classList.toggle("o-header--navigation__opened")}),window.addEventListener("load",function(){var e=document.getElementById("navigationButton");e.addEventListener("click",function(){e.parentNode.parentNode.parentNode.classList.toggle("o-header--isActive")});var n=innerHeight+100,t=function(e,n){e.classList.add(n)},r=[document.querySelector(".o-firstIntro-plant"),document.querySelector(".o-firstIntro-heading"),document.querySelector(".o-body-secondIntro")].concat(i(document.querySelectorAll(".c-project")),i(document.querySelectorAll(".c-skill")),[document.querySelector(".o-footer")]),o=[];r.forEach(function(e){e.classList.contains("c-project")?o.push(e.offsetTop+e.offsetHeight+e.parentNode.offsetTop):o.push(e.offsetTop+e.offsetHeight)}),console.log(o,r),window.addEventListener("scroll",function(e){r.forEach(function(e){o[r.indexOf(e)]<=pageYOffset+n&&(e.classList.contains("c-skill")?t(e,"c-skill-progress--isLoaded"):e.classList.contains("c-project")?t(e,"c-project--isActive"):t(e,"u-animation-fadeInto-direction--isActive"))})})})},function(e,n,t){}])});