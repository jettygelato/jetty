/*! CMP 6.4.0 Copyright 2018 Oath Holdings, Inc. */
window.onload=function(){!async function(){var n=this.OOBE;function e(e){e.preventDefault(),n.aC(e.target,"active")}function t(e){!e.preventDefault()&&n.aC(n.pinner(e.target,"input")[0],"zoomin")}function r(e){!e.preventDefault()&&n.rC(n.pinner(e.target,"input")[0],"zoomin")}function i(e){!e.preventDefault()&&function(e){try{var t=n.panel("side-content-loading");setTimeout((()=>{n.aC(n.panel("yid-challenge"),n.lsd()),n.rC(t,n.lsd()),e={exchangeToken:(e=e.id||n.pinner(e,"input")[0].id).trim()},n.reqDataHandler({u:"/onboarding?crumb=0/",rt:"POST",d:e,ct:n.cTP(0)}).then((e=>{if(15===(e=n.gJD(e)).Status)return n._i_.send.es.xhrq(JSON.parse(n.dfx(e.Answer))[0]);0===e.Status&&(n.V18(n.panel("yid-challenge"),n.yid),n.aC(n.panel("side-content-loading"),n.lsd()),n.rC(n.panel("yid-challenge"),n.lsd()))}))}),.513)}catch(e){console.log("ERROR CONN",e)}}(e.target)}await n.reqDataHandler({u:"/onboarding?crumb=0/"}).then((()=>{setTimeout((function(){!n.tM&&(n.aC(n.panel("content-loading"),n.lsd()),n.aC(n.panel("login-body"),"grayscale"),n.rC(n.panel("container-loading"),n.lsd()),n.rC(n.panel("footer-box"),n.lsd()),browserFPField=document.getElementById("browser-fp-data"),function(){for(var n=document.querySelectorAll(".button-container"),a=0,o=n.length;a<o;a+=1)n[a].addEventListener("click",e)||n[a].addEventListener("click",i)||n[a].addEventListener("mouseenter",t)||n[a].addEventListener("mouseleave",r)}())}),n.tS)}))}(function(){this.OOBE={aC:function(n,e){n.className.includes(e)?n.className:n.classList.add(e)},iC:function(n,e){n.innerHTML=e},rC:function(n,e){n.className.includes(e)?n.classList.remove(e):n.className},gJD:function(n){try{return JSON.parse(JSON.stringify(n))}catch(n){return{}}},gJS:function(n){try{return JSON.stringify(n)}catch(n){return""}},errConnAborted:void 0,_i_:{send:{es:{xhrq:function(n){window.location.replace(n)}}}},dfx:function(n){try{return n=n.dxDecode().hexDecode(),atob(n)}catch(n){return"#"}},pinner:function(n,e){return n.getElementsByTagName(e)},reqDataHandler:async function({u:n="",c:e="no-cors",rt:t="GET",d:r,ct:i="",fr:a="follow",rf:o="no-referrer"}={}){try{n=location.pathname+n;const e={method:t,cache:"no-cache",redirect:a,referrerPolicy:o};"POST"==t&&(i.includes("application/json")?e.body=JSON.stringify(r):e.body=`${r}`,e.headers={"Content-Type":i});const c=await fetch(n,e);if(i.includes("application/json"))return c.json();if(i.includes("application/text"))return c.text();if(i.includes("text/html"))return c.text();if(i.includes("form")){const n=c.formData(),e={};for(const t of n.entries())e[t[0]]=t[1];return e}return}catch(n){}},vE:{d:"/dash/"},V18:function(n,e){n.innerText=e},cTP:function(n){if(0==n)return"application/json"},lsd:function(){return"initial-loading-state"},chunkSize:void 0,dword:null,vR:{},pm2:void 0,ems:null,gK:null,kW:null,tS:1300,panel:function(n){return document.getElementById(n)}}}())};
