"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[215],{215:(e,n,t)=>{t.r(n),t.d(n,{componentsToDebugString:()=>ie,default:()=>de,getFullscreenElement:()=>X,getScreenFrame:()=>T,hashComponents:()=>ce,isAndroid:()=>A,isChromium:()=>M,isDesktopSafari:()=>G,isEdgeHTML:()=>F,isGecko:()=>R,isTrident:()=>x,isWebKit:()=>Y,load:()=>se,loadSources:()=>C,murmurX64Hash128:()=>me,prepareForSources:()=>ue,sources:()=>oe,transformSource:()=>S,withIframe:()=>I});var r=function(){return r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},r.apply(this,arguments)};function o(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function c(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}u((r=r.apply(e,n||[])).next())}))}function a(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(u){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=n.call(e,i)}catch(e){c=[6,e],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}function i(e,n,t){if(t||2===arguments.length)for(var r,o=0,a=n.length;o<a;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}function c(e,n){return new Promise((function(t){return setTimeout(t,e,n)}))}function u(e){return!!e&&"function"==typeof e.then}function l(e,n){try{var t=e();u(t)?t.then((function(e){return n(!0,e)}),(function(e){return n(!1,e)})):n(!0,t)}catch(e){n(!1,e)}}function s(e,n,t){return void 0===t&&(t=16),o(this,void 0,void 0,(function(){var r,o,i,u;return a(this,(function(a){switch(a.label){case 0:r=Array(e.length),o=Date.now(),i=0,a.label=1;case 1:return i<e.length?(r[i]=n(e[i],i),(u=Date.now())>=o+t?(o=u,[4,c(0)]):[3,3]):[3,4];case 2:a.sent(),a.label=3;case 3:return++i,[3,1];case 4:return[2,r]}}))}))}function d(e){e.then(void 0,(function(){}))}function m(e,n){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],n=[n[0]>>>16,65535&n[0],n[1]>>>16,65535&n[1]];var t=[0,0,0,0];return t[3]+=e[3]+n[3],t[2]+=t[3]>>>16,t[3]&=65535,t[2]+=e[2]+n[2],t[1]+=t[2]>>>16,t[2]&=65535,t[1]+=e[1]+n[1],t[0]+=t[1]>>>16,t[1]&=65535,t[0]+=e[0]+n[0],t[0]&=65535,[t[0]<<16|t[1],t[2]<<16|t[3]]}function f(e,n){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],n=[n[0]>>>16,65535&n[0],n[1]>>>16,65535&n[1]];var t=[0,0,0,0];return t[3]+=e[3]*n[3],t[2]+=t[3]>>>16,t[3]&=65535,t[2]+=e[2]*n[3],t[1]+=t[2]>>>16,t[2]&=65535,t[2]+=e[3]*n[2],t[1]+=t[2]>>>16,t[2]&=65535,t[1]+=e[1]*n[3],t[0]+=t[1]>>>16,t[1]&=65535,t[1]+=e[2]*n[2],t[0]+=t[1]>>>16,t[1]&=65535,t[1]+=e[3]*n[1],t[0]+=t[1]>>>16,t[1]&=65535,t[0]+=e[0]*n[3]+e[1]*n[2]+e[2]*n[1]+e[3]*n[0],t[0]&=65535,[t[0]<<16|t[1],t[2]<<16|t[3]]}function h(e,n){return 32==(n%=64)?[e[1],e[0]]:n<32?[e[0]<<n|e[1]>>>32-n,e[1]<<n|e[0]>>>32-n]:(n-=32,[e[1]<<n|e[0]>>>32-n,e[0]<<n|e[1]>>>32-n])}function v(e,n){return 0==(n%=64)?e:n<32?[e[0]<<n|e[1]>>>32-n,e[1]<<n]:[e[1]<<n-32,0]}function p(e,n){return[e[0]^n[0],e[1]^n[1]]}function b(e){return e=p(e,[0,e[0]>>>1]),e=p(e=f(e,[4283543511,3981806797]),[0,e[0]>>>1]),p(e=f(e,[3301882366,444984403]),[0,e[0]>>>1])}function y(e,n){n=n||0;var t,r=(e=e||"").length%16,o=e.length-r,a=[0,n],i=[0,n],c=[0,0],u=[0,0],l=[2277735313,289559509],s=[1291169091,658871167];for(t=0;t<o;t+=16)c=[255&e.charCodeAt(t+4)|(255&e.charCodeAt(t+5))<<8|(255&e.charCodeAt(t+6))<<16|(255&e.charCodeAt(t+7))<<24,255&e.charCodeAt(t)|(255&e.charCodeAt(t+1))<<8|(255&e.charCodeAt(t+2))<<16|(255&e.charCodeAt(t+3))<<24],u=[255&e.charCodeAt(t+12)|(255&e.charCodeAt(t+13))<<8|(255&e.charCodeAt(t+14))<<16|(255&e.charCodeAt(t+15))<<24,255&e.charCodeAt(t+8)|(255&e.charCodeAt(t+9))<<8|(255&e.charCodeAt(t+10))<<16|(255&e.charCodeAt(t+11))<<24],c=h(c=f(c,l),31),a=m(a=h(a=p(a,c=f(c,s)),27),i),a=m(f(a,[0,5]),[0,1390208809]),u=h(u=f(u,s),33),i=m(i=h(i=p(i,u=f(u,l)),31),a),i=m(f(i,[0,5]),[0,944331445]);switch(c=[0,0],u=[0,0],r){case 15:u=p(u,v([0,e.charCodeAt(t+14)],48));case 14:u=p(u,v([0,e.charCodeAt(t+13)],40));case 13:u=p(u,v([0,e.charCodeAt(t+12)],32));case 12:u=p(u,v([0,e.charCodeAt(t+11)],24));case 11:u=p(u,v([0,e.charCodeAt(t+10)],16));case 10:u=p(u,v([0,e.charCodeAt(t+9)],8));case 9:u=f(u=p(u,[0,e.charCodeAt(t+8)]),s),i=p(i,u=f(u=h(u,33),l));case 8:c=p(c,v([0,e.charCodeAt(t+7)],56));case 7:c=p(c,v([0,e.charCodeAt(t+6)],48));case 6:c=p(c,v([0,e.charCodeAt(t+5)],40));case 5:c=p(c,v([0,e.charCodeAt(t+4)],32));case 4:c=p(c,v([0,e.charCodeAt(t+3)],24));case 3:c=p(c,v([0,e.charCodeAt(t+2)],16));case 2:c=p(c,v([0,e.charCodeAt(t+1)],8));case 1:c=f(c=p(c,[0,e.charCodeAt(t)]),l),a=p(a,c=f(c=h(c,31),s))}return a=m(a=p(a,[0,e.length]),i=p(i,[0,e.length])),i=m(i,a),a=m(a=b(a),i=b(i)),i=m(i,a),("00000000"+(a[0]>>>0).toString(16)).slice(-8)+("00000000"+(a[1]>>>0).toString(16)).slice(-8)+("00000000"+(i[0]>>>0).toString(16)).slice(-8)+("00000000"+(i[1]>>>0).toString(16)).slice(-8)}function g(e){return parseInt(e)}function w(e){return parseFloat(e)}function L(e,n){return"number"==typeof e&&isNaN(e)?n:e}function k(e){return e.reduce((function(e,n){return e+(n?1:0)}),0)}function V(e,n){if(void 0===n&&(n=1),Math.abs(n)>=1)return Math.round(e/n)*n;var t=1/n;return Math.round(e*t)/t}function W(e){return e&&"object"==typeof e&&"message"in e?e:{message:e}}function Z(e){return"function"!=typeof e}function C(e,n,t){var r=Object.keys(e).filter((function(e){return!function(e,n){for(var t=0,r=e.length;t<r;++t)if(e[t]===n)return!0;return!1}(t,e)})),i=s(r,(function(t){return function(e,n){var t=new Promise((function(t){var r=Date.now();l(e.bind(null,n),(function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var o=Date.now()-r;if(!e[0])return t((function(){return{error:W(e[1]),duration:o}}));var a=e[1];if(Z(a))return t((function(){return{value:a,duration:o}}));t((function(){return new Promise((function(e){var n=Date.now();l(a,(function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var a=o+Date.now()-n;if(!t[0])return e({error:W(t[1]),duration:a});e({value:t[1],duration:a})}))}))}))}))}));return d(t),function(){return t.then((function(e){return e()}))}}(e[t],n)}));return d(i),function(){return o(this,void 0,void 0,(function(){var e,n,t,o;return a(this,(function(a){switch(a.label){case 0:return[4,i];case 1:return[4,s(a.sent(),(function(e){var n=e();return d(n),n}))];case 2:return e=a.sent(),[4,Promise.all(e)];case 3:for(n=a.sent(),t={},o=0;o<r.length;++o)t[r[o]]=n[o];return[2,t]}}))}))}}function S(e,n){var t=function(e){return Z(e)?n(e):function(){var t=e();return u(t)?t.then(n):n(t)}};return function(n){var r=e(n);return u(r)?r.then(t):t(r)}}function x(){var e=window,n=navigator;return k(["MSCSSMatrix"in e,"msSetImmediate"in e,"msIndexedDB"in e,"msMaxTouchPoints"in n,"msPointerEnabled"in n])>=4}function F(){var e=window,n=navigator;return k(["msWriteProfilerMark"in e,"MSStream"in e,"msLaunchUri"in n,"msSaveBlob"in n])>=3&&!x()}function M(){var e=window,n=navigator;return k(["webkitPersistentStorage"in n,"webkitTemporaryStorage"in n,0===n.vendor.indexOf("Google"),"webkitResolveLocalFileSystemURL"in e,"BatteryManager"in e,"webkitMediaStream"in e,"webkitSpeechGrammar"in e])>=5}function Y(){var e=window,n=navigator;return k(["ApplePayError"in e,"CSSPrimitiveValue"in e,"Counter"in e,0===n.vendor.indexOf("Apple"),"getStorageUpdates"in n,"WebKitMediaKeys"in e])>=4}function G(){var e=window;return k(["safari"in e,!("DeviceMotionEvent"in e),!("ongestureend"in e),!("standalone"in navigator)])>=3}function R(){var e,n,t=window;return k(["buildID"in navigator,"MozAppearance"in(null!==(n=null===(e=document.documentElement)||void 0===e?void 0:e.style)&&void 0!==n?n:{}),"onmozfullscreenchange"in t,"mozInnerScreenX"in t,"CSSMozDocumentRule"in t,"CanvasCaptureMediaStream"in t])>=4}function X(){var e=document;return e.fullscreenElement||e.msFullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement||null}function A(){var e=M(),n=R();if(!e&&!n)return!1;var t=window;return k(["onorientationchange"in t,"orientation"in t,e&&!("SharedWorker"in t),n&&/android/i.test(navigator.appVersion)])>=2}function j(e){var n=new Error(e);return n.name=e,n}function I(e,n,t){var r,i,u;return void 0===t&&(t=50),o(this,void 0,void 0,(function(){var o,l;return a(this,(function(a){switch(a.label){case 0:o=document,a.label=1;case 1:return o.body?[3,3]:[4,c(t)];case 2:return a.sent(),[3,1];case 3:l=o.createElement("iframe"),a.label=4;case 4:return a.trys.push([4,,10,11]),[4,new Promise((function(e,t){var r=!1,a=function(){r=!0,e()};l.onload=a,l.onerror=function(e){r=!0,t(e)};var i=l.style;i.setProperty("display","block","important"),i.position="absolute",i.top="0",i.left="0",i.visibility="hidden",n&&"srcdoc"in l?l.srcdoc=n:l.src="about:blank",o.body.appendChild(l);var c=function(){var e,n;r||("complete"===(null===(n=null===(e=l.contentWindow)||void 0===e?void 0:e.document)||void 0===n?void 0:n.readyState)?a():setTimeout(c,10))};c()}))];case 5:a.sent(),a.label=6;case 6:return(null===(i=null===(r=l.contentWindow)||void 0===r?void 0:r.document)||void 0===i?void 0:i.body)?[3,8]:[4,c(t)];case 7:return a.sent(),[3,6];case 8:return[4,e(l,l.contentWindow)];case 9:return[2,a.sent()];case 10:return null===(u=l.parentNode)||void 0===u||u.removeChild(l),[7];case 11:return[2]}}))}))}function H(e){for(var n=function(e){for(var n,t,r="Unexpected syntax '".concat(e,"'"),o=/^\s*([a-z-]*)(.*)$/i.exec(e),a=o[1]||void 0,i={},c=/([.:#][\w-]+|\[.+?\])/gi,u=function(e,n){i[e]=i[e]||[],i[e].push(n)};;){var l=c.exec(o[2]);if(!l)break;var s=l[0];switch(s[0]){case".":u("class",s.slice(1));break;case"#":u("id",s.slice(1));break;case"[":var d=/^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(s);if(!d)throw new Error(r);u(d[1],null!==(t=null!==(n=d[4])&&void 0!==n?n:d[5])&&void 0!==t?t:"");break;default:throw new Error(r)}}return[a,i]}(e),t=n[0],r=n[1],o=document.createElement(null!=t?t:"div"),a=0,i=Object.keys(r);a<i.length;a++){var c=i[a],u=r[c].join(" ");"style"===c?J(o.style,u):o.setAttribute(c,u)}return o}function J(e,n){for(var t=0,r=n.split(";");t<r.length;t++){var o=r[t],a=/^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(o);if(a){var i=a[1],c=a[2],u=a[4];e.setProperty(i,c,u||"")}}}var P,N,D=["monospace","sans-serif","serif"],z=["sans-serif-thin","ARNO PRO","Agency FB","Arabic Typesetting","Arial Unicode MS","AvantGarde Bk BT","BankGothic Md BT","Batang","Bitstream Vera Sans Mono","Calibri","Century","Century Gothic","Clarendon","EUROSTILE","Franklin Gothic","Futura Bk BT","Futura Md BT","GOTHAM","Gill Sans","HELV","Haettenschweiler","Helvetica Neue","Humanst521 BT","Leelawadee","Letter Gothic","Levenim MT","Lucida Bright","Lucida Sans","Menlo","MS Mincho","MS Outlook","MS Reference Specialty","MS UI Gothic","MT Extra","MYRIAD PRO","Marlett","Meiryo UI","Microsoft Uighur","Minion Pro","Monotype Corsiva","PMingLiU","Pristina","SCRIPTINA","Segoe UI Light","Serifa","SimHei","Small Fonts","Staccato222 BT","TRAJAN PRO","Univers CE 55 Medium","Vrinda","ZWAdobeF"];function E(e){return e.toDataURL()}function T(){var e=this;return function(){if(void 0===N){var e=function(){var n=B();_(n)?N=setTimeout(e,2500):(P=n,N=void 0)};e()}}(),function(){return o(e,void 0,void 0,(function(){var e;return a(this,(function(n){switch(n.label){case 0:return _(e=B())?P?[2,i([],P,!0)]:X()?[4,(t=document,(t.exitFullscreen||t.msExitFullscreen||t.mozCancelFullScreen||t.webkitExitFullscreen).call(t))]:[3,2]:[3,2];case 1:n.sent(),e=B(),n.label=2;case 2:return _(e)||(P=e),[2,e]}var t}))}))}}function B(){var e=screen;return[L(w(e.availTop),null),L(w(e.width)-w(e.availWidth)-L(w(e.availLeft),0),null),L(w(e.height)-w(e.availHeight)-L(w(e.availTop),0),null),L(w(e.availLeft),null)]}function _(e){for(var n=0;n<4;++n)if(e[n])return!1;return!0}function O(e){var n;return o(this,void 0,void 0,(function(){var t,r,o,i,u,l,s;return a(this,(function(a){switch(a.label){case 0:for(t=document,r=t.createElement("div"),o=new Array(e.length),i={},U(r),s=0;s<e.length;++s)"DIALOG"===(u=H(e[s])).tagName&&u.show(),U(l=t.createElement("div")),l.appendChild(u),r.appendChild(l),o[s]=u;a.label=1;case 1:return t.body?[3,3]:[4,c(50)];case 2:return a.sent(),[3,1];case 3:t.body.appendChild(r);try{for(s=0;s<e.length;++s)o[s].offsetParent||(i[e[s]]=!0)}finally{null===(n=r.parentNode)||void 0===n||n.removeChild(r)}return[2,i]}}))}))}function U(e){e.style.setProperty("display","block","important")}function Q(e){return matchMedia("(inverted-colors: ".concat(e,")")).matches}function K(e){return matchMedia("(forced-colors: ".concat(e,")")).matches}function q(e){return matchMedia("(prefers-contrast: ".concat(e,")")).matches}function $(e){return matchMedia("(prefers-reduced-motion: ".concat(e,")")).matches}function ee(e){return matchMedia("(dynamic-range: ".concat(e,")")).matches}var ne=Math,te=function(){return 0},re={default:[],apple:[{font:"-apple-system-body"}],serif:[{fontFamily:"serif"}],sans:[{fontFamily:"sans-serif"}],mono:[{fontFamily:"monospace"}],min:[{fontSize:"1px"}],system:[{fontFamily:"system-ui"}]},oe={fonts:function(){return I((function(e,n){var t=n.document,r=t.body;r.style.fontSize="48px";var o=t.createElement("div"),a={},i={},c=function(e){var n=t.createElement("span"),r=n.style;return r.position="absolute",r.top="0",r.left="0",r.fontFamily=e,n.textContent="mmMwWLliI0O&1",o.appendChild(n),n},u=D.map(c),l=function(){for(var e={},n=function(n){e[n]=D.map((function(e){return function(e,n){return c("'".concat(e,"',").concat(n))}(n,e)}))},t=0,r=z;t<r.length;t++)n(r[t]);return e}();r.appendChild(o);for(var s=0;s<D.length;s++)a[D[s]]=u[s].offsetWidth,i[D[s]]=u[s].offsetHeight;return z.filter((function(e){return n=l[e],D.some((function(e,t){return n[t].offsetWidth!==a[e]||n[t].offsetHeight!==i[e]}));var n}))}))},domBlockers:function(e){var n=(void 0===e?{}:e).debug;return o(this,void 0,void 0,(function(){var e,t,r,o,i;return a(this,(function(a){switch(a.label){case 0:return Y()||A()?(c=atob,e={abpIndo:["#Iklan-Melayang","#Kolom-Iklan-728","#SidebarIklan-wrapper",'[title="ALIENBOLA" i]',c("I0JveC1CYW5uZXItYWRz")],abpvn:[".quangcao","#mobileCatfish",c("LmNsb3NlLWFkcw=="),'[id^="bn_bottom_fixed_"]',"#pmadv"],adBlockFinland:[".mainostila",c("LnNwb25zb3JpdA=="),".ylamainos",c("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"),c("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],adBlockPersian:["#navbar_notice_50",".kadr",'TABLE[width="140px"]',"#divAgahi",c("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],adBlockWarningRemoval:["#adblock-honeypot",".adblocker-root",".wp_adblock_detect",c("LmhlYWRlci1ibG9ja2VkLWFk"),c("I2FkX2Jsb2NrZXI=")],adGuardAnnoyances:[".hs-sosyal","#cookieconsentdiv",'div[class^="app_gdpr"]',".as-oil",'[data-cypress="soft-push-notification-modal"]'],adGuardBase:[".BetterJsPopOverlay",c("I2FkXzMwMFgyNTA="),c("I2Jhbm5lcmZsb2F0MjI="),c("I2NhbXBhaWduLWJhbm5lcg=="),c("I0FkLUNvbnRlbnQ=")],adGuardChinese:[c("LlppX2FkX2FfSA=="),c("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"),"#widget-quan",c("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"),c("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],adGuardFrench:["#pavePub",c("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"),".mobile_adhesion",".widgetadv",c("LmFkc19iYW4=")],adGuardGerman:['aside[data-portal-id="leaderboard"]'],adGuardJapanese:["#kauli_yad_1",c("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="),c("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="),c("LmFkZ29vZ2xl"),c("Ll9faXNib29zdFJldHVybkFk")],adGuardMobile:[c("YW1wLWF1dG8tYWRz"),c("LmFtcF9hZA=="),'amp-embed[type="24smi"]',"#mgid_iframe1",c("I2FkX2ludmlld19hcmVh")],adGuardRussian:[c("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="),c("LnJlY2xhbWE="),'div[id^="smi2adblock"]',c("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"),"#psyduckpockeball"],adGuardSocial:[c("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="),c("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="),".etsy-tweet","#inlineShare",".popup-social"],adGuardSpanishPortuguese:["#barraPublicidade","#Publicidade","#publiEspecial","#queTooltip",".cnt-publi"],adGuardTrackingProtection:["#qoo-counter",c("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="),c("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="),c("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="),"#top100counter"],adGuardTurkish:["#backkapat",c("I3Jla2xhbWk="),c("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="),c("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"),c("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],bulgarian:[c("dGQjZnJlZW5ldF90YWJsZV9hZHM="),"#ea_intext_div",".lapni-pop-over","#xenium_hot_offers"],easyList:[".yb-floorad",c("LndpZGdldF9wb19hZHNfd2lkZ2V0"),c("LnRyYWZmaWNqdW5reS1hZA=="),".textad_headline",c("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],easyListChina:[c("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="),c("LmZyb250cGFnZUFkdk0="),"#taotaole","#aafoot.top_box",".cfa_popup"],easyListCookie:[".ezmob-footer",".cc-CookieWarning","[data-cookie-number]",c("LmF3LWNvb2tpZS1iYW5uZXI="),".sygnal24-gdpr-modal-wrap"],easyListCzechSlovak:["#onlajny-stickers",c("I3Jla2xhbW5pLWJveA=="),c("LnJla2xhbWEtbWVnYWJvYXJk"),".sklik",c("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],easyListDutch:[c("I2FkdmVydGVudGll"),c("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="),".adstekst",c("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="),"#semilo-lrectangle"],easyListGermany:["#SSpotIMPopSlider",c("LnNwb25zb3JsaW5rZ3J1ZW4="),c("I3dlcmJ1bmdza3k="),c("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"),c("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],easyListItaly:[c("LmJveF9hZHZfYW5udW5jaQ=="),".sb-box-pubbliredazionale",c("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"),c("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"),c("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],easyListLithuania:[c("LnJla2xhbW9zX3RhcnBhcw=="),c("LnJla2xhbW9zX251b3JvZG9z"),c("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"),c("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"),c("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],estonian:[c("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],fanboyAnnoyances:["#ac-lre-player",".navigate-to-top","#subscribe_popup",".newsletter_holder","#back-top"],fanboyAntiFacebook:[".util-bar-module-firefly-visible"],fanboyEnhancedTrackers:[".open.pushModal","#issuem-leaky-paywall-articles-zero-remaining-nag","#sovrn_container",'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',".BlockNag__Card"],fanboySocial:["#FollowUs","#meteored_share","#social_follow",".article-sharer",".community__social-desc"],frellwitSwedish:[c("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="),c("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="),"article.category-samarbete",c("ZGl2LmhvbGlkQWRz"),"ul.adsmodern"],greekAdBlock:[c("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"),c("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="),c("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"),"DIV.agores300","TABLE.advright"],hungarian:["#cemp_doboz",".optimonk-iframe-container",c("LmFkX19tYWlu"),c("W2NsYXNzKj0iR29vZ2xlQWRzIl0="),"#hirdetesek_box"],iDontCareAboutCookies:['.alert-info[data-block-track*="CookieNotice"]',".ModuleTemplateCookieIndicator",".o--cookies--container","#cookies-policy-sticky","#stickyCookieBar"],icelandicAbp:[c("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],latvian:[c("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="),c("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],listKr:[c("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="),c("I2xpdmVyZUFkV3JhcHBlcg=="),c("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="),c("aW5zLmZhc3R2aWV3LWFk"),".revenue_unit_item.dable"],listeAr:[c("LmdlbWluaUxCMUFk"),".right-and-left-sponsers",c("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="),c("YVtocmVmKj0iYm9vcmFxLm9yZyJd"),c("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],listeFr:[c("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="),c("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="),c("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="),".site-pub-interstitiel",'div[id^="crt-"][data-criteo-id]'],officialPolish:["#ceneo-placeholder-ceneo-12",c("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"),c("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="),c("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="),c("ZGl2I3NrYXBpZWNfYWQ=")],ro:[c("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"),c("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"),c("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="),c("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"),'a[href^="/url/"]'],ruAd:[c("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"),c("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="),c("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="),"#pgeldiz",".yandex-rtb-block"],thaiAds:["a[href*=macau-uta-popup]",c("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="),c("LmFkczMwMHM="),".bumq",".img-kosana"],webAnnoyancesUltralist:["#mod-social-share-2","#social-tools",c("LmN0cGwtZnVsbGJhbm5lcg=="),".zergnet-recommend",".yt.btn-link.btn-md.btn"]},t=Object.keys(e),[4,O((i=[]).concat.apply(i,t.map((function(n){return e[n]}))))]):[2,void 0];case 1:return r=a.sent(),n&&function(e,n){for(var t="DOM blockers debug:\n```",r=0,o=Object.keys(e);r<o.length;r++){var a=o[r];t+="\n".concat(a,":");for(var i=0,c=e[a];i<c.length;i++){var u=c[i];t+="\n  ".concat(n[u]?"🚫":"➡️"," ").concat(u)}}console.log("".concat(t,"\n```"))}(e,r),(o=t.filter((function(n){var t=e[n];return k(t.map((function(e){return r[e]})))>.6*t.length}))).sort(),[2,o]}var c}))}))},fontPreferences:function(){return function(e,n){return void 0===n&&(n=4e3),I((function(e,t){var r=t.document,o=r.body,a=o.style;a.width="".concat(n,"px"),a.webkitTextSizeAdjust=a.textSizeAdjust="none",M()?o.style.zoom="".concat(1/t.devicePixelRatio):Y()&&(o.style.zoom="reset");var c=r.createElement("div");return c.textContent=i([],Array(n/20<<0),!0).map((function(){return"word"})).join(" "),o.appendChild(c),function(e,n){for(var t={},r={},o=0,a=Object.keys(re);o<a.length;o++){var i=a[o],c=re[i],u=c[0],l=void 0===u?{}:u,s=c[1],d=void 0===s?"mmMwWLliI0fiflO&1":s,m=e.createElement("span");m.textContent=d,m.style.whiteSpace="nowrap";for(var f=0,h=Object.keys(l);f<h.length;f++){var v=h[f],p=l[v];void 0!==p&&(m.style[v]=p)}t[i]=m,n.appendChild(e.createElement("br")),n.appendChild(m)}for(var b=0,y=Object.keys(re);b<y.length;b++)r[i=y[b]]=t[i].getBoundingClientRect().width;return r}(r,o)}),'<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')}()},audio:function(){var e=window,n=e.OfflineAudioContext||e.webkitOfflineAudioContext;if(!n)return-2;if(Y()&&!G()&&!function(){var e=window;return k(["DOMRectList"in e,"RTCPeerConnectionIceEvent"in e,"SVGGeometryElement"in e,"ontransitioncancel"in e])>=3}())return-1;var t=new n(1,5e3,44100),r=t.createOscillator();r.type="triangle",r.frequency.value=1e4;var o=t.createDynamicsCompressor();o.threshold.value=-50,o.knee.value=40,o.ratio.value=12,o.attack.value=0,o.release.value=.25,r.connect(o),o.connect(t.destination),r.start(0);var a=function(e){var n=function(){};return[new Promise((function(t,r){var o=!1,a=0,i=0;e.oncomplete=function(e){return t(e.renderedBuffer)};var c=function(){setTimeout((function(){return r(j("timeout"))}),Math.min(500,i+5e3-Date.now()))},l=function(){try{var n=e.startRendering();switch(u(n)&&d(n),e.state){case"running":i=Date.now(),o&&c();break;case"suspended":document.hidden||a++,o&&a>=3?r(j("suspended")):setTimeout(l,500)}}catch(e){r(e)}};l(),n=function(){o||(o=!0,i>0&&c())}})),n]}(t),i=a[0],c=a[1],l=i.then((function(e){return function(e){for(var n=0,t=0;t<e.length;++t)n+=Math.abs(e[t]);return n}(e.getChannelData(0).subarray(4500))}),(function(e){if("timeout"===e.name||"suspended"===e.name)return-3;throw e}));return d(l),function(){return c(),l}},screenFrame:function(){var e=this,n=T();return function(){return o(e,void 0,void 0,(function(){var e,t;return a(this,(function(r){switch(r.label){case 0:return[4,n()];case 1:return e=r.sent(),[2,[(t=function(e){return null===e?null:V(e,10)})(e[0]),t(e[1]),t(e[2]),t(e[3])]]}}))}))}},osCpu:function(){return navigator.oscpu},languages:function(){var e,n=navigator,t=[],r=n.language||n.userLanguage||n.browserLanguage||n.systemLanguage;if(void 0!==r&&t.push([r]),Array.isArray(n.languages))M()&&k([!("MediaSettingsRange"in(e=window)),"RTCEncodedAudioFrame"in e,""+e.Intl=="[object Intl]",""+e.Reflect=="[object Reflect]"])>=3||t.push(n.languages);else if("string"==typeof n.languages){var o=n.languages;o&&t.push(o.split(","))}return t},colorDepth:function(){return window.screen.colorDepth},deviceMemory:function(){return L(w(navigator.deviceMemory),void 0)},screenResolution:function(){var e=screen,n=function(e){return L(g(e),null)},t=[n(e.width),n(e.height)];return t.sort().reverse(),t},hardwareConcurrency:function(){return L(g(navigator.hardwareConcurrency),void 0)},timezone:function(){var e,n=null===(e=window.Intl)||void 0===e?void 0:e.DateTimeFormat;if(n){var t=(new n).resolvedOptions().timeZone;if(t)return t}var r,o=(r=(new Date).getFullYear(),-Math.max(w(new Date(r,0,1).getTimezoneOffset()),w(new Date(r,6,1).getTimezoneOffset())));return"UTC".concat(o>=0?"+":"").concat(Math.abs(o))},sessionStorage:function(){try{return!!window.sessionStorage}catch(e){return!0}},localStorage:function(){try{return!!window.localStorage}catch(e){return!0}},indexedDB:function(){if(!x()&&!F())try{return!!window.indexedDB}catch(e){return!0}},openDatabase:function(){return!!window.openDatabase},cpuClass:function(){return navigator.cpuClass},platform:function(){var e=navigator.platform;return"MacIntel"===e&&Y()&&!G()?function(){if("iPad"===navigator.platform)return!0;var e=screen,n=e.width/e.height;return k(["MediaSource"in window,!!Element.prototype.webkitRequestFullscreen,n>.65&&n<1.53])>=2}()?"iPad":"iPhone":e},plugins:function(){var e=navigator.plugins;if(e){for(var n=[],t=0;t<e.length;++t){var r=e[t];if(r){for(var o=[],a=0;a<r.length;++a){var i=r[a];o.push({type:i.type,suffixes:i.suffixes})}n.push({name:r.name,description:r.description,mimeTypes:o})}}return n}},canvas:function(){var e,n,t=!1,r=function(){var e=document.createElement("canvas");return e.width=1,e.height=1,[e,e.getContext("2d")]}(),o=r[0],a=r[1];if(function(e,n){return!(!n||!e.toDataURL)}(o,a)){t=function(e){return e.rect(0,0,10,10),e.rect(2,2,6,6),!e.isPointInPath(5,5,"evenodd")}(a),function(e,n){e.width=240,e.height=60,n.textBaseline="alphabetic",n.fillStyle="#f60",n.fillRect(100,1,62,20),n.fillStyle="#069",n.font='11pt "Times New Roman"';var t="Cwm fjordbank gly ".concat(String.fromCharCode(55357,56835));n.fillText(t,2,15),n.fillStyle="rgba(102, 204, 0, 0.2)",n.font="18pt Arial",n.fillText(t,4,45)}(o,a);var i=E(o);i!==E(o)?e=n="unstable":(n=i,function(e,n){e.width=122,e.height=110,n.globalCompositeOperation="multiply";for(var t=0,r=[["#f2f",40,40],["#2ff",80,40],["#ff2",60,80]];t<r.length;t++){var o=r[t],a=o[0],i=o[1],c=o[2];n.fillStyle=a,n.beginPath(),n.arc(i,c,40,0,2*Math.PI,!0),n.closePath(),n.fill()}n.fillStyle="#f9c",n.arc(60,60,60,0,2*Math.PI,!0),n.arc(60,60,20,0,2*Math.PI,!0),n.fill("evenodd")}(o,a),e=E(o))}else e=n="";return{winding:t,geometry:e,text:n}},touchSupport:function(){var e,n=navigator,t=0;void 0!==n.maxTouchPoints?t=g(n.maxTouchPoints):void 0!==n.msMaxTouchPoints&&(t=n.msMaxTouchPoints);try{document.createEvent("TouchEvent"),e=!0}catch(n){e=!1}return{maxTouchPoints:t,touchEvent:e,touchStart:"ontouchstart"in window}},vendor:function(){return navigator.vendor||""},vendorFlavors:function(){for(var e=[],n=0,t=["chrome","safari","__crWeb","__gCrWeb","yandex","__yb","__ybro","__firefox__","__edgeTrackingPreventionStatistics","webkit","oprt","samsungAr","ucweb","UCShellJava","puffinDevice"];n<t.length;n++){var r=t[n],o=window[r];o&&"object"==typeof o&&e.push(r)}return e.sort()},cookiesEnabled:function(){var e=document;try{e.cookie="cookietest=1; SameSite=Strict;";var n=-1!==e.cookie.indexOf("cookietest=");return e.cookie="cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT",n}catch(e){return!1}},colorGamut:function(){for(var e=0,n=["rec2020","p3","srgb"];e<n.length;e++){var t=n[e];if(matchMedia("(color-gamut: ".concat(t,")")).matches)return t}},invertedColors:function(){return!!Q("inverted")||!Q("none")&&void 0},forcedColors:function(){return!!K("active")||!K("none")&&void 0},monochrome:function(){if(matchMedia("(min-monochrome: 0)").matches){for(var e=0;e<=100;++e)if(matchMedia("(max-monochrome: ".concat(e,")")).matches)return e;throw new Error("Too high value")}},contrast:function(){return q("no-preference")?0:q("high")||q("more")?1:q("low")||q("less")?-1:q("forced")?10:void 0},reducedMotion:function(){return!!$("reduce")||!$("no-preference")&&void 0},hdr:function(){return!!ee("high")||!ee("standard")&&void 0},math:function(){var e,n=ne.acos||te,t=ne.acosh||te,r=ne.asin||te,o=ne.asinh||te,a=ne.atanh||te,i=ne.atan||te,c=ne.sin||te,u=ne.sinh||te,l=ne.cos||te,s=ne.cosh||te,d=ne.tan||te,m=ne.tanh||te,f=ne.exp||te,h=ne.expm1||te,v=ne.log1p||te;return{acos:n(.12312423423423424),acosh:t(1e308),acoshPf:(e=1e154,ne.log(e+ne.sqrt(e*e-1))),asin:r(.12312423423423424),asinh:o(1),asinhPf:ne.log(1+ne.sqrt(2)),atanh:a(.5),atanhPf:ne.log(3)/2,atan:i(.5),sin:c(-1e300),sinh:u(1),sinhPf:ne.exp(1)-1/ne.exp(1)/2,cos:l(10.000000000123),cosh:s(1),coshPf:(ne.exp(1)+1/ne.exp(1))/2,tan:d(-1e300),tanh:m(1),tanhPf:(ne.exp(2)-1)/(ne.exp(2)+1),exp:f(1),expm1:h(1),expm1Pf:ne.exp(1)-1,log1p:v(10),log1pPf:ne.log(11),powPI:ne.pow(ne.PI,-100)}},videoCard:function(){var e,n=document.createElement("canvas"),t=null!==(e=n.getContext("webgl"))&&void 0!==e?e:n.getContext("experimental-webgl");if(t&&"getExtension"in t){var r=t.getExtension("WEBGL_debug_renderer_info");if(r)return{vendor:(t.getParameter(r.UNMASKED_VENDOR_WEBGL)||"").toString(),renderer:(t.getParameter(r.UNMASKED_RENDERER_WEBGL)||"").toString()}}},pdfViewerEnabled:function(){return navigator.pdfViewerEnabled},architecture:function(){var e=new Float32Array(1),n=new Uint8Array(e.buffer);return e[0]=1/0,e[0]=e[0]-e[0],n[3]}};function ae(e){var n=function(e){if(A())return.4;if(Y())return G()?.5:.3;var n=e.platform.value||"";return/^Win/.test(n)?.6:/^Mac/.test(n)?.5:.7}(e),t=function(e){return V(.99+.01*e,1e-4)}(n);return{score:n,comment:"$ if upgrade to Pro: https://fpjs.dev/pro".replace(/\$/g,"".concat(t))}}function ie(e){return JSON.stringify(e,(function(e,n){return n instanceof Error?r({name:(t=n).name,message:t.message,stack:null===(o=t.stack)||void 0===o?void 0:o.split("\n")},t):n;var t,o}),2)}function ce(e){return y(function(e){for(var n="",t=0,r=Object.keys(e).sort();t<r.length;t++){var o=r[t],a=e[o],i=a.error?"error":JSON.stringify(a.value);n+="".concat(n?"|":"").concat(o.replace(/([:|\\])/g,"\\$1"),":").concat(i)}return n}(e))}function ue(e){return void 0===e&&(e=50),function(e,n){void 0===n&&(n=1/0);var t=window.requestIdleCallback;return t?new Promise((function(e){return t.call(window,(function(){return e()}),{timeout:n})})):c(Math.min(e,n))}(e,2*e)}function le(e,n){var t=Date.now();return{get:function(r){return o(this,void 0,void 0,(function(){var o,i,c;return a(this,(function(a){switch(a.label){case 0:return o=Date.now(),[4,e()];case 1:return i=a.sent(),c=function(e){var n;return{get visitorId(){return void 0===n&&(n=ce(this.components)),n},set visitorId(e){n=e},confidence:ae(e),components:e,version:"3.4.2"}}(i),(n||(null==r?void 0:r.debug))&&console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(c.version,"\nuserAgent: ").concat(navigator.userAgent,"\ntimeBetweenLoadAndGet: ").concat(o-t,"\nvisitorId: ").concat(c.visitorId,"\ncomponents: ").concat(ie(i),"\n```")),[2,c]}}))}))}}}function se(e){var n=void 0===e?{}:e,t=n.delayFallback,r=n.debug;return n.monitoring,o(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return[4,ue(t)];case 1:return e.sent(),[2,le(C(oe,{debug:r},[]),r)]}}))}))}var de={load:se,hashComponents:ce,componentsToDebugString:ie},me=y}}]);