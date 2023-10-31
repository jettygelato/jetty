var BABEL_POLYFILL_MODULES={}
function __babelPolyfillDefine(t,e,n){var r={},o=e.map((function(t){return"exports"===t?r:BABEL_POLYFILL_MODULES[t]}))
n.apply(null,o),BABEL_POLYFILL_MODULES[t]=r}__babelPolyfillDefine("shared.js",["exports"],(function(t){"use strict"
var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function n(t,e){return t(e={exports:{}},e.exports),e.exports}var r=function(t){return t&&t.Math==Math&&t},o=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||function(){return this}()||Function("return this")(),u=function(t){try{return!!t()}catch(e){return!0}},i=!u((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),f={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,c={f:a&&!f.call({1:2},1)?function(t){var e=a(this,t)
return!!e&&e.enumerable}:f},l=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},s={}.toString,p=function(t){return s.call(t).slice(8,-1)},d="".split,y=u((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==p(t)?d.call(t,""):Object(t)}:Object,h=function(t){if(null==t)throw TypeError("Can't call method on "+t)
return t},g=function(t){return y(h(t))},m=function(t){return"object"==typeof t?null!==t:"function"==typeof t},v=function(t,e){if(!m(t))return t
var n,r
if(e&&"function"==typeof(n=t.toString)&&!m(r=n.call(t)))return r
if("function"==typeof(n=t.valueOf)&&!m(r=n.call(t)))return r
if(!e&&"function"==typeof(n=t.toString)&&!m(r=n.call(t)))return r
throw TypeError("Can't convert object to primitive value")},b={}.hasOwnProperty,$=function(t,e){return b.call(t,e)},w=o.document,O=m(w)&&m(w.createElement),S=function(t){return O?w.createElement(t):{}},j=!i&&!u((function(){return 7!=Object.defineProperty(S("div"),"a",{get:function(){return 7}}).a})),L=Object.getOwnPropertyDescriptor,E={f:i?L:function(t,e){if(t=g(t),e=v(e,!0),j)try{return L(t,e)}catch(n){}if($(t,e))return l(!c.f.call(t,e),t[e])}},P=function(t){if(!m(t))throw TypeError(String(t)+" is not an object")
return t},M=Object.defineProperty,_={f:i?M:function(t,e,n){if(P(t),e=v(e,!0),P(n),j)try{return M(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported")
return"value"in n&&(t[e]=n.value),t}},I=i?function(t,e,n){return _.f(t,e,l(1,n))}:function(t,e,n){return t[e]=n,t},T=function(t,e){try{I(o,t,e)}catch(n){o[t]=e}return e},x="__core-js_shared__",D=o[x]||T(x,{}),F=Function.toString
"function"!=typeof D.inspectSource&&(D.inspectSource=function(t){return F.call(t)})
var k,C,A,B=D.inspectSource,N=o.WeakMap,Y="function"==typeof N&&/native code/.test(B(N)),z=n((function(t){(t.exports=function(t,e){return D[t]||(D[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.8.3",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),G=0,U=Math.random(),W=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++G+U).toString(36)},q=z("keys"),K=function(t){return q[t]||(q[t]=W(t))},R={},V=o.WeakMap
if(Y){var H=D.state||(D.state=new V),J=H.get,Q=H.has,X=H.set
k=function(t,e){return e.facade=t,X.call(H,t,e),e},C=function(t){return J.call(H,t)||{}},A=function(t){return Q.call(H,t)}}else{var Z=K("state")
R[Z]=!0,k=function(t,e){return e.facade=t,I(t,Z,e),e},C=function(t){return $(t,Z)?t[Z]:{}},A=function(t){return $(t,Z)}}var tt,et,nt,rt={set:k,get:C,has:A,enforce:function(t){return A(t)?C(t):k(t,{})},getterFor:function(t){return function(e){var n
if(!m(e)||(n=C(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required")
return n}}},ot=n((function(t){var e=rt.get,n=rt.enforce,r=String(String).split("String");(t.exports=function(t,e,u,i){var f,a=!!i&&!!i.unsafe,c=!!i&&!!i.enumerable,l=!!i&&!!i.noTargetGet
"function"==typeof u&&("string"!=typeof e||$(u,"name")||I(u,"name",e),(f=n(u)).source||(f.source=r.join("string"==typeof e?e:""))),t!==o?(a?!l&&t[e]&&(c=!0):delete t[e],c?t[e]=u:I(t,e,u)):c?t[e]=u:T(e,u)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||B(this)}))})),ut=o,it=function(t){return"function"==typeof t?t:void 0},ft=function(t,e){return arguments.length<2?it(ut[t])||it(o[t]):ut[t]&&ut[t][e]||o[t]&&o[t][e]},at=Math.ceil,ct=Math.floor,lt=function(t){return isNaN(t=+t)?0:(t>0?ct:at)(t)},st=Math.min,pt=function(t){return t>0?st(lt(t),9007199254740991):0},dt=Math.max,yt=Math.min,ht=function(t,e){var n=lt(t)
return n<0?dt(n+e,0):yt(n,e)},gt=function(t){return function(e,n,r){var o,u=g(e),i=pt(u.length),f=ht(r,i)
if(t&&n!=n){for(;i>f;)if((o=u[f++])!=o)return!0}else for(;i>f;f++)if((t||f in u)&&u[f]===n)return t||f||0
return!t&&-1}},mt={includes:gt(!0),indexOf:gt(!1)},vt=mt.indexOf,bt=function(t,e){var n,r=g(t),o=0,u=[]
for(n in r)!$(R,n)&&$(r,n)&&u.push(n)
for(;e.length>o;)$(r,n=e[o++])&&(~vt(u,n)||u.push(n))
return u},$t=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],wt=$t.concat("length","prototype"),Ot={f:Object.getOwnPropertyNames||function(t){return bt(t,wt)}},St={f:Object.getOwnPropertySymbols},jt=ft("Reflect","ownKeys")||function(t){var e=Ot.f(P(t)),n=St.f
return n?e.concat(n(t)):e},Lt=function(t,e){for(var n=jt(e),r=_.f,o=E.f,u=0;u<n.length;u++){var i=n[u]
$(t,i)||r(t,i,o(e,i))}},Et=/#|\.prototype\./,Pt=function(t,e){var n=_t[Mt(t)]
return n==Tt||n!=It&&("function"==typeof e?u(e):!!e)},Mt=Pt.normalize=function(t){return String(t).replace(Et,".").toLowerCase()},_t=Pt.data={},It=Pt.NATIVE="N",Tt=Pt.POLYFILL="P",xt=Pt,Dt=E.f,Ft=function(t,e){var n,r,u,i,f,a=t.target,c=t.global,l=t.stat
if(n=c?o:l?o[a]||T(a,{}):(o[a]||{}).prototype)for(r in e){if(i=e[r],u=t.noTargetGet?(f=Dt(n,r))&&f.value:n[r],!xt(c?r:a+(l?".":"#")+r,t.forced)&&void 0!==u){if(typeof i==typeof u)continue
Lt(i,u)}(t.sham||u&&u.sham)&&I(i,"sham",!0),ot(n,r,i,t)}},kt=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function")
return t},Ct=function(t,e,n){if(kt(t),void 0===e)return t
switch(n){case 0:return function(){return t.call(e)}
case 1:return function(n){return t.call(e,n)}
case 2:return function(n,r){return t.call(e,n,r)}
case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},At=ft("document","documentElement"),Bt=ft("navigator","userAgent")||"",Nt="process"==p(o.process),Yt=/(iphone|ipod|ipad).*applewebkit/i.test(Bt),zt=o.location,Gt=o.setImmediate,Ut=o.clearImmediate,Wt=o.process,qt=o.MessageChannel,Kt=o.Dispatch,Rt=0,Vt={},Ht="onreadystatechange",Jt=function(t){if(Vt.hasOwnProperty(t)){var e=Vt[t]
delete Vt[t],e()}},Qt=function(t){return function(){Jt(t)}},Xt=function(t){Jt(t.data)},Zt=function(t){o.postMessage(t+"",zt.protocol+"//"+zt.host)}
Gt&&Ut||(Gt=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++])
return Vt[++Rt]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},tt(Rt),Rt},Ut=function(t){delete Vt[t]},Nt?tt=function(t){Wt.nextTick(Qt(t))}:Kt&&Kt.now?tt=function(t){Kt.now(Qt(t))}:qt&&!Yt?(nt=(et=new qt).port2,et.port1.onmessage=Xt,tt=Ct(nt.postMessage,nt,1)):o.addEventListener&&"function"==typeof postMessage&&!o.importScripts&&zt&&"file:"!==zt.protocol&&!u(Zt)?(tt=Zt,o.addEventListener("message",Xt,!1)):tt=Ht in S("script")?function(t){At.appendChild(S("script"))[Ht]=function(){At.removeChild(this),Jt(t)}}:function(t){setTimeout(Qt(t),0)})
var te={set:Gt,clear:Ut}
Ft({global:!0,bind:!0,enumerable:!0,forced:!o.setImmediate||!o.clearImmediate},{setImmediate:te.set,clearImmediate:te.clear}),t.default=Ft,t.default$1=i,t.default$2=o,t.default$3=$,t.default$4=m,t.default$5=_,t.default$6=Lt,t.default$7=u,t.default$8=z,t.default$9=W,t.default$10=ut,t.default$11=p,t.default$12=pt,t.default$13=Ct,t.default$14=h,t.default$15=lt,t.default$16=kt,t.default$17=bt,t.default$18=$t,t.default$19=P,t.default$20=R,t.default$21=At,t.default$22=S,t.default$23=K,t.default$24=mt,t.default$25=I,t.default$26=false,t.default$27=l,t.default$28=ot
t.default$29=g,t.default$30=rt,t.default$31=y,t.default$32=Bt,t.default$33=Nt,t.default$34=ht,t.default$35=Ot,t.default$36=ft,t.default$37=v,t.default$38=E,t.default$39=te,t.default$40=Yt,t.default$41=B,t.default$42=xt,t.commonjsGlobal=e,t.createCommonjsModule=n,t.default$43=St,t.default$44=c}))

//# sourceMappingURL=polyfill-shared.map