/*! For license information please see fd41f787.4ca39e45.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[51230],{475544:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var t=r(824246),o=r(511151);const i={id:"backend-openapi-utils.internal.mapdiscriminatedunion",title:"internal.MapDiscriminatedUnion",description:"API reference for internal.MapDiscriminatedUnion"},a=void 0,c={unversionedId:"reference/backend-openapi-utils.internal.mapdiscriminatedunion",id:"reference/backend-openapi-utils.internal.mapdiscriminatedunion",title:"internal.MapDiscriminatedUnion",description:"API reference for internal.MapDiscriminatedUnion",source:"@site/../docs/reference/backend-openapi-utils.internal.mapdiscriminatedunion.md",sourceDirName:"reference",slug:"/reference/backend-openapi-utils.internal.mapdiscriminatedunion",permalink:"/docs/reference/backend-openapi-utils.internal.mapdiscriminatedunion",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-openapi-utils.internal.mapdiscriminatedunion.md",tags:[],version:"current",frontMatter:{id:"backend-openapi-utils.internal.mapdiscriminatedunion",title:"internal.MapDiscriminatedUnion",description:"API reference for internal.MapDiscriminatedUnion"}},u={},s=[];function f(e){const n=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils",children:(0,t.jsx)(n.code,{children:"@backstage/backend-openapi-utils"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils.internal",children:(0,t.jsx)(n.code,{children:"internal"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils.internal.mapdiscriminatedunion",children:(0,t.jsx)(n.code,{children:"MapDiscriminatedUnion"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export type MapDiscriminatedUnion<T extends Record<K, string>, K extends keyof T> = {\n    [V in T[K]]: DiscriminateUnion<T, K, V>;\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"References:"})," ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils.internal.discriminateunion",children:"DiscriminateUnion"})]})]})}const l=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(f,e)})):f(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var s in i=Object(arguments[u]))r.call(i,s)&&(c[s]=i[s]);if(n){a=n(i);for(var f=0;f<a.length;f++)t.call(i,a[f])&&(c[a[f]]=i[a[f]])}}return c}},371426:(e,n,r)=>{r(862525);var t=r(827378),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),n.Fragment=i("react.fragment")}var a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,r){var t,i={},s=null,f=null;for(t in void 0!==r&&(s=""+r),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(f=n.ref),n)c.call(n,t)&&!u.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:o,type:e,key:s,ref:f,props:i,_owner:a.current}}n.jsx=s,n.jsxs=s},541535:(e,n,r)=>{var t=r(862525),o=60103,i=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var a=60109,c=60110,u=60112;n.Suspense=60113;var s=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),i=l("react.portal"),n.Fragment=l("react.fragment"),n.StrictMode=l("react.strict_mode"),n.Profiler=l("react.profiler"),a=l("react.provider"),c=l("react.context"),u=l("react.forward_ref"),n.Suspense=l("react.suspense"),s=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,n,r){this.props=e,this.context=n,this.refs=m,this.updater=r||y}function v(){}function b(e,n,r){this.props=e,this.context=n,this.refs=m,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,n,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var _=b.prototype=new v;_.constructor=b,t(_,h.prototype),_.isPureReactComponent=!0;var g={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function O(e,n,r){var t,i={},a=null,c=null;if(null!=n)for(t in void 0!==n.ref&&(c=n.ref),void 0!==n.key&&(a=""+n.key),n)j.call(n,t)&&!k.hasOwnProperty(t)&&(i[t]=n[t]);var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){for(var s=Array(u),f=0;f<u;f++)s[f]=arguments[f+2];i.children=s}if(e&&e.defaultProps)for(t in u=e.defaultProps)void 0===i[t]&&(i[t]=u[t]);return{$$typeof:o,type:e,key:a,ref:c,props:i,_owner:g.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var x=/\/+/g;function S(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function C(e,n,r,t,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u=!1;if(null===e)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case i:u=!0}}if(u)return a=a(u=e),e=""===t?"."+S(u,0):t,Array.isArray(a)?(r="",null!=e&&(r=e.replace(x,"$&/")+"/"),C(a,n,r,"",(function(e){return e}))):null!=a&&(w(a)&&(a=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(x,"$&/")+"/")+e)),n.push(a)),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var s=0;s<e.length;s++){var f=t+S(c=e[s],s);u+=C(c,n,r,f,a)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(c=e.next()).done;)u+=C(c=c.value,n,r,f=t+S(c,s++),a);else if("object"===c)throw n=""+e,Error(d(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return u}function E(e,n,r){if(null==e)return e;var t=[],o=0;return C(e,t,"","",(function(e){return n.call(r,e,o++)})),t}function P(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(d(321));return e}var U={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:t};n.Children={map:E,forEach:function(e,n,r){E(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return E(e,(function(){n++})),n},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(d(143));return e}},n.Component=h,n.PureComponent=b,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,n.cloneElement=function(e,n,r){if(null==e)throw Error(d(267,e));var i=t({},e.props),a=e.key,c=e.ref,u=e._owner;if(null!=n){if(void 0!==n.ref&&(c=n.ref,u=g.current),void 0!==n.key&&(a=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(f in n)j.call(n,f)&&!k.hasOwnProperty(f)&&(i[f]=void 0===n[f]&&void 0!==s?s[f]:n[f])}var f=arguments.length-2;if(1===f)i.children=r;else if(1<f){s=Array(f);for(var l=0;l<f;l++)s[l]=arguments[l+2];i.children=s}return{$$typeof:o,type:e.type,key:a,ref:c,props:i,_owner:u}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:c,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=O,n.createFactory=function(e){var n=O.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:u,render:e}},n.isValidElement=w,n.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:P}},n.memo=function(e,n){return{$$typeof:s,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return $().useCallback(e,n)},n.useContext=function(e,n){return $().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return $().useEffect(e,n)},n.useImperativeHandle=function(e,n,r){return $().useImperativeHandle(e,n,r)},n.useLayoutEffect=function(e,n){return $().useLayoutEffect(e,n)},n.useMemo=function(e,n){return $().useMemo(e,n)},n.useReducer=function(e,n,r){return $().useReducer(e,n,r)},n.useRef=function(e){return $().useRef(e)},n.useState=function(e){return $().useState(e)},n.version="17.0.2"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Zo:()=>c,ah:()=>i});var t=r(667294);const o=t.createContext({});function i(e){const n=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function c({components:e,children:n,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||a:i(e),t.createElement(o.Provider,{value:c},n)}}}]);