(function(e){function t(t){for(var n,a,s=t[0],c=t[1],u=t[2],l=0,m=[];l<s.length;l++)a=s[l],i[a]&&m.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(m.length)m.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==i[s]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},i={app:0},o=[];function s(e){return c.p+"js/"+({about:"about",confirmEmail:"confirmEmail",createEmailConfirmation:"createEmailConfirmation",editprofile:"editprofile",login:"login",memberList:"memberList",oauthConsent:"oauthConsent",oauthLogin:"oauthLogin",profile:"profile",registration:"registration"}[e]||e)+"."+{about:"ad763791",confirmEmail:"1dad0dfb",createEmailConfirmation:"90be2802",editprofile:"61d1b739",login:"f68ea472",memberList:"0bce6130",oauthConsent:"468de2c0",oauthLogin:"0390f8af",profile:"81f98f19",registration:"3aa8bd84"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={confirmEmail:1,createEmailConfirmation:1,editprofile:1,login:1,memberList:1,oauthConsent:1,oauthLogin:1,profile:1,registration:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise(function(t,r){for(var n="css/"+({about:"about",confirmEmail:"confirmEmail",createEmailConfirmation:"createEmailConfirmation",editprofile:"editprofile",login:"login",memberList:"memberList",oauthConsent:"oauthConsent",oauthLogin:"oauthLogin",profile:"profile",registration:"registration"}[e]||e)+"."+{about:"31d6cfe0",confirmEmail:"8a798c30",createEmailConfirmation:"90353858",editprofile:"410fb07b",login:"6c22a958",memberList:"c6536307",oauthConsent:"147186dd",oauthLogin:"de193479",profile:"1a48cb13",registration:"7e62cb63"}[e]+".css",i=c.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===i))return t()}var m=document.getElementsByTagName("style");for(s=0;s<m.length;s++){u=m[s],l=u.getAttribute("data-href");if(l===n||l===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.request=n,delete a[e],p.parentNode.removeChild(p),r(o)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){a[e]=0}));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,r){n=i[e]=[t,r]});t.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e),u=function(t){l.onerror=l.onload=null,clearTimeout(m);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");o.type=n,o.request=a,r[1](o)}i[e]=void 0}};var m=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var m=0;m<u.length;m++)t(u[m]);var p=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0222":function(e,t,r){},"034f":function(e,t,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"19be":function(e,t,r){},"31fe":function(e,t,r){"use strict";var n=r("19be"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e.isError?r("error-page"):r("router-view")],1)},i=[],o=r("cebc"),s=r("2f62"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"container"}},[r("div",{attrs:{id:"error"}},[r("h1",{attrs:{id:"title"}},[e._v(e._s(e.number))]),r("p",{attrs:{id:"message"}},[e._v(e._s(e.message))]),r("router-link",{attrs:{to:"/",exact:""}},[e._v("\n          Go to home page\n      ")])],1)])},u=[],l={computed:Object(o["a"])({},Object(s["e"])("criticalError",["number","message"]))},m=l,p=(r("31fe"),r("2877")),f=Object(p["a"])(m,c,u,!1,null,"92d6cce4",null),h=f.exports,g={components:{ErrorPage:h},computed:Object(o["a"])({},Object(s["c"])("criticalError",["isError"]))},d=g,v=(r("034f"),Object(p["a"])(d,a,i,!1,null,null,null)),b=v.exports,w=(r("96cf"),r("3b8d")),E=r("8c4f"),k=r("0e44"),R=(r("7f7f"),r("bc3a")),x=r.n(R),C={client:x.a.create({baseURL:"https://accounts.kurume-nct.com"})},y={startOAuthLogin:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.client.get("/oauth/login",{params:{loginChallenge:t}});case 2:return r=e.sent.data,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),login:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t,r,n){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.client.post("/oauth/login",{loginChallenge:t,name:r,password:n});case 2:return a=e.sent.data,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));function t(t,r,n){return e.apply(this,arguments)}return t}(),startOAuthConsent:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.client.get("/oauth/consent",{params:{consentChallenge:t}});case 2:return r=e.sent.data,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),consent:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t,r,n){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.client.post("/oauth/consent",{consentChallenge:t,accept:r,grantScopes:n});case 2:return a=e.sent.data,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));function t(t,r,n){return e.apply(this,arguments)}return t}()},L={namespaced:!0,state:{checkingChallenge:!0,skip:!1,redirectURL:null,challengeError:null,loginError:null},mutations:{setLoginRequest:function(e,t){var r=t.skip,n=t.redirectURL,a=t.challengeError;e.checkingChallenge=!1,e.skip=r,e.redirectURL=n,e.challengeError=a},setCheckingChallenge:function(e,t){e.checkingChallenge=t},setRedirectURL:function(e,t){e.redirectURL=t},setLoginError:function(e,t){e.loginError=t}},actions:{startOAuthLogin:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,n("setCheckingChallenge",!0),e.prev=2,e.next=5,y.startOAuthLogin(r);case 5:a=e.sent,n("setLoginRequest",{skip:a.skip,redirectURL:a.redirect_url}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),n("setLoginRequest",{challengeError:e.t0});case 12:n("setCheckingChallenge",!1);case 13:case"end":return e.stop()}},e,null,[[2,9]])}));function t(t,r){return e.apply(this,arguments)}return t}(),login:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,i,o,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.challenge,i=r.name,o=r.password,e.prev=2,e.next=5,y.login(a,i,o);case 5:s=e.sent,n("setRedirectURL",s.redirect_url),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),n("setLoginError",e.t0);case 12:case"end":return e.stop()}},e,null,[[2,9]])}));function t(t,r){return e.apply(this,arguments)}return t}()}},O={namespaced:!0,state:{checkingChallenge:!0,skip:!1,redirectURL:null,challengeError:null,requestedScopes:null,client:null},mutations:{setConsentRequest:function(e,t){var r=t.skip,n=t.redirectURL,a=t.requestedScopes,i=t.client;e.skip=r,e.redirectURL=n,e.requestedScopes=a,e.client=i},setCheckingChallenge:function(e,t){e.checkingChallenge=t},setChallengeError:function(e,t){e.challengeError=t},setRedirectURL:function(e,t){e.redirectURL=t}},actions:{startOAuthConsent:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,n("setCheckingChallenge",!0),e.prev=2,e.next=5,y.startOAuthConsent(r);case 5:a=e.sent,n("setConsentRequest",{skip:a.skip,redirectURL:a.redirect_url,requestedScopes:a.requested_scopes,client:a.client}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),n("setChallengeError",e.t0);case 12:n("setCheckingChallenge",!1);case 13:case"end":return e.stop()}},e,null,[[2,9]])}));function t(t,r){return e.apply(this,arguments)}return t}(),accept:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.state,e.prev=1,e.next=4,y.consent(r,!0,a.requestedScopes);case 4:i=e.sent,n("setRedirectURL",i.redirect_url),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),n("setChallengeError",e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t,r){return e.apply(this,arguments)}return t}(),reject:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.state,e.prev=1,e.next=4,y.consent(r,!1,a.requestedScopes);case 4:i=e.sent,n("setRedirectURL",i.redirect_url),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),n("setChallengeError",e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t,r){return e.apply(this,arguments)}return t}()}},_={createSession:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.client.post("/sessions",{name:t,password:r});case 2:return n=e.sent.data,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},j={namespaced:!0,state:{sessionID:null,loginError:null},mutations:{setSessionID:function(e,t){e.sessionID=t},clearSessionID:function(e){e.sessionID=null},setLoginError:function(e,t){e.loginError=t},clearLoginError:function(e){e.loginError=null}},actions:{login:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,i,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.name,i=r.password,n("clearLoginError"),e.prev=3,e.next=6,_.createSession(a,i);case 6:o=e.sent,n("setSessionID",o.session_id),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](3),n("setLoginError",e.t0);case 13:case"end":return e.stop()}},e,null,[[3,10]])}));function t(t,r){return e.apply(this,arguments)}return t}()},getters:{loggedIn:function(e){var t=e.sessionID,r=e.loginError;return Boolean(t&&!r)}}};function P(e){return{headers:{Authorization:"session ".concat(e)}}}var U={getUser:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.client.get("/user",P(t));case 2:return r=e.sent.data,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),changeProfile:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.client.patch("/user/profile",t,P(r));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),registerUser:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t,r,n,a){var i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.client.post("/users",{name:t,full_name:r,password:n,registeration_token:a});case 2:return i=e.sent.data,e.abrupt("return",i);case 4:case"end":return e.stop()}},e)}));function t(t,r,n,a){return e.apply(this,arguments)}return t}(),verifyRegistrationToken:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.client.get("/invitations/".concat(t));case 2:return r=e.sent.data,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},A={namespaced:!0,state:{userData:null,registrationError:null,tokenVerificationError:null},mutations:{setUser:function(e,t){e.userData=t},setRegistrationError:function(e,t){e.registrationError=t},clearRegistrationError:function(e){e.registrationError=null},setTokenVerificationError:function(e,t){e.tokenVerificationError=t},clearTokenVerificationError:function(e){e.tokenVerificationError=null}},actions:{getUser:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.t0=n,e.next=4,U.getUser(r);case 4:e.t1=e.sent,(0,e.t0)("setUser",e.t1);case 6:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),verifyRegistrationToken:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,n("clearTokenVerificationError"),e.prev=2,e.next=5,U.verifyRegistrationToken(r);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](2),n("setTokenVerificationError",e.t0);case 10:case"end":return e.stop()}},e,null,[[2,7]])}));function t(t,r){return e.apply(this,arguments)}return t}(),register:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,i,o,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.name,i=r.full_name,o=r.password,s=r.registration_token,n("clearRegistrationError"),e.prev=3,e.next=6,U.registerUser(a,i,o,s);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](3),n("setRegistrationError",e.t0);case 11:case"end":return e.stop()}},e,null,[[3,8]])}));function t(t,r){return e.apply(this,arguments)}return t}()}},S={namespaced:!0,state:{number:null,message:null},mutations:{createError:function(e,t){if(!t.response)return e.number="",void(e.message="Connection refused");e.number=t.response.status,e.message=t.response.data.message||t.response.statusText},clearError:function(e){e.number=null,e.message=null}},getters:{isError:function(e){return null!==e.number||null!==e.message}}},q={getAchievements:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.client.get("/achievements");case 2:return t=e.sent.data,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},T={namespaced:!0,state:{achievements:null},mutations:{setAchievements:function(e,t){e.achievements=t.achievements}},actions:{getAchievements:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.t0=n,e.next=5,q.getAchievements(r);case 5:e.t1=e.sent,(0,e.t0)("setAchievements",e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e["catch"](1),n("criticalError/createError",e.t2,{root:!0});case 12:case"end":return e.stop()}},e,null,[[1,9]])}));function t(t,r){return e.apply(this,arguments)}return t}()}},I={CreateEmailConfirmation:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t,r,n){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.client.post("/user/emails/confirmations",{new_email:r,password:n},P(t));case 2:return a=e.sent.data,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));function t(t,r,n){return e.apply(this,arguments)}return t}(),ConfirmEmail:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.client.patch("/user/emails/confirmations/".concat(r),{},P(t));case 2:return n=e.sent.data,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},M={namespaced:!0,state:{emailConfirmationError:null},mutations:{setEmailConfirmationError:function(e,t){e.emailConfirmationError=t},clearEmailConfirmationError:function(e){e.emailConfirmationError=null}},actions:{CreateEmailConfirmation:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,i,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.session,i=r.new_email,o=r.password,n("clearEmailConfirmationError"),e.prev=3,e.next=6,I.CreateEmailConfirmation(a,i,o);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](3),n("setEmailConfirmationError",e.t0);case 11:case"end":return e.stop()}},e,null,[[3,8]])}));function t(t,r){return e.apply(this,arguments)}return t}(),ConfirmEmail:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.session,i=r.token,n("clearEmailConfirmationError"),e.prev=3,e.next=6,I.ConfirmEmail(a,i);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](3),n("setEmailConfirmationError",e.t0);case 11:case"end":return e.stop()}},e,null,[[3,8]])}));function t(t,r){return e.apply(this,arguments)}return t}()}},D=r("75fc"),V={getUserList:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.client.get("/users",{page_token:t,page_size:100});case 2:return r=e.sent.data,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},$={namespaced:!0,state:{list:[],token:null,error:null},mutations:{setError:function(e,t){e.error=t},clearError:function(e){e.error=null},addList:function(e,t){var r;(r=e.list).push.apply(r,Object(D["a"])(t))},setToken:function(e,t){e.token=t}},actions:{getList:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t){var r,n,a,i,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.state,n=t.commit,n("clearError"),e.prev=2,0===r.token){e.next=11;break}return e.next=6,V.getUserList(r.token);case 6:a=e.sent,i=a.users,o=a.next_page_token,n("addList",i),n("setToken",o);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](2),n("setError",e.t0);case 16:case"end":return e.stop()}},e,null,[[2,13]])}));function t(t){return e.apply(this,arguments)}return t}()},getters:{isLast:function(e){return 0===e.token},isEmpty:function(e){return 0===e.list.length}}},B={getMemberProfile:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.client.get("/users/".concat(t));case 2:return r=e.sent.data,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},J={namespaced:!0,state:{memberProfileError:null,memberProfile:{}},mutations:{setMemberProfileError:function(e,t){e.memberProfileError=t},clearMemberProfileError:function(e){e.memberProfileError=null},setMemberProfile:function(e,t){e.memberProfile=t},clearMemberProfile:function(e){e.memberProfile={}}},actions:{getMemberProfile:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,n("clearMemberProfileError"),e.prev=2,e.t0=n,e.next=6,B.getMemberProfile(r);case 6:e.t1=e.sent,(0,e.t0)("setMemberProfile",e.t1),e.next=13;break;case 10:e.prev=10,e.t2=e["catch"](2),n("setMemberProfileError",e.t2);case 13:case"end":return e.stop()}},e,null,[[2,10]])}));function t(t,r){return e.apply(this,arguments)}return t}()}},N={namespaced:!0,modules:{memberList:$,memberProfile:J}},z={namespaced:!0,state:{res:null,updateError:null},mutations:{setResponse:function(e,t){e.res=t},clearUpdateError:function(e){e.updateError=null},setUpdateError:function(e,t){e.updateError=t}},actions:{sendProfile:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.userProfile,i=r.sessionID,n("clearUpdateError"),e.prev=3,e.t0=n,e.next=7,U.changeProfile(a,i);case 7:e.t1=e.sent,(0,e.t0)("setResponse",e.t1),e.next=14;break;case 11:e.prev=11,e.t2=e["catch"](3),n("setUpdateError",e.t2);case 14:case"end":return e.stop()}},e,null,[[3,11]])}));function t(t,r){return e.apply(this,arguments)}return t}()}};n["a"].use(s["a"]);var F=new s["a"].Store({strict:!1,modules:{oauthLogin:L,oauthConsent:O,session:j,user:A,criticalError:S,achievement:T,emailConfirmations:M,memberIntroduction:N,editUser:z},plugins:[Object(k["a"])({paths:["session.sessionID"]})]}),G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[e._m(0),e._m(1),r("section",[r("h2",[e._v("戦歴")]),r("AchievementsList")],1),r("footer",[e.loggedIn?r("div",[r("router-link",{attrs:{to:"/editprofile"}},[e._v("プロフィール編集")]),r("router-link",{attrs:{to:""}},[e._v("ログアウト")])],1):r("div",[r("router-link",{attrs:{to:"/login"}},[e._v("ログイン")])],1),r("small",[e._v("© Programming Laboratory, 2019")])])])},H=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[n("img",{staticClass:"logo",attrs:{src:r("9b19"),alt:"ProLab"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("h2",[e._v("部員募集中!")]),r("p",[e._v("\n      久留米高専プロラボ部は平日授業を終えた学生が集まり次第、電気電子・制御情報工学科棟のSJ（制御情報実験室）で活動しています。"),r("br"),e._v("\n      興味のある方は、活動時間にSJ教室を訪ねてみてくださいね！\n    ")])])}],K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",e._l(e.achievements,function(t){return r("li",{key:t.id},[r("dl",[r("dt",[e._v(e._s(t.title))]),r("dd",{staticClass:"award"},[e._v(e._s(t.award))]),r("dd",{staticClass:"year"},[e._v(e._s(t.happened_at.split("-")[0]))]),r("dd",[e._v(e._s(t.description))])]),r("img",{attrs:{src:t.image_url}})])}),0)},Q=[],W={name:"AchievementsList",computed:Object(s["e"])("achievement",["achievements"]),methods:Object(o["a"])({},Object(s["b"])("achievement",["getAchievements"])),created:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.getAchievements();case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},X=W,Y=(r("ea77"),Object(p["a"])(X,K,Q,!1,null,"6063c7ad",null)),Z=Y.exports,ee={name:"home",components:{AchievementsList:Z},computed:Object(o["a"])({},Object(s["c"])("session",["loggedIn"]))},te=ee,re=(r("ae12"),Object(p["a"])(te,G,H,!1,null,"e53ffaa4",null)),ne=re.exports;n["a"].use(E["a"]);var ae=new E["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:ne},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/editprofile",name:"editprofile",component:function(){return r.e("editprofile").then(r.bind(null,"fb5e"))},meta:{requiresAuth:!0}},{path:"/login",name:"login",component:function(){return r.e("login").then(r.bind(null,"a55b"))}},{path:"/oauth/login",name:"oauthLogin",component:function(){return r.e("oauthLogin").then(r.bind(null,"6754"))}},{path:"/oauth/consent",name:"oauthConsent",component:function(){return r.e("oauthConsent").then(r.bind(null,"09e1"))}},{path:"/registration/:token",name:"registration",component:function(){return r.e("registration").then(r.bind(null,"3fd1"))}},{path:"/user/email",name:"createEmailConfirmation",component:function(){return r.e("createEmailConfirmation").then(r.bind(null,"119f"))},meta:{requiresAuth:!0}},{path:"/confirmation/:token",name:"confirmEmail",component:function(){return r.e("confirmEmail").then(r.bind(null,"7e81"))},meta:{requiresAuth:!0}},{path:"/members",name:"memberList",component:function(){return r.e("memberList").then(r.bind(null,"eb59"))}},{path:"/members/:name",name:"profile",component:function(){return r.e("profile").then(r.bind(null,"b4a8"))}}]});ae.beforeEach(function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(t,r,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return F.commit("criticalError/clearError"),0===t.matched.length&&F.commit("criticalError/createError",{response:{status:404,data:{message:"Page not Found"}}}),e.prev=2,e.next=5,F.dispatch("user/getUser",F.state.session.sessionID);case 5:e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](2),console.error(e.t0),F.commit("session/clearSessionID");case 11:t.matched.some(function(e){return e.meta.requiresAuth})&&!F.getters["session/loggedIn"]?n({path:"/login",query:{redirect:t.fullPath}}):n();case 12:case"end":return e.stop()}},e,null,[[2,7]])}));return function(t,r,n){return e.apply(this,arguments)}}());var ie=ae;n["a"].config.productionTip=!1,new n["a"]({router:ie,store:F,render:function(e){return e(b)}}).$mount("#app")},"64a9":function(e,t,r){},8299:function(e,t,r){},"9b19":function(e,t,r){e.exports=r.p+"img/logo.ffd0946f.svg"},ae12:function(e,t,r){"use strict";var n=r("8299"),a=r.n(n);a.a},ea77:function(e,t,r){"use strict";var n=r("0222"),a=r.n(n);a.a}});
//# sourceMappingURL=app.abe1df20.js.map