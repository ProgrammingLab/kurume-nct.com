(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["confirmEmail"],{"408f":function(t,e,r){"use strict";var n=r("9596"),i=r.n(n);i.a},"7e81":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"box"},[r("h1",[t._v("メールアドレス変更")]),r("div",[t._v("メールアドレスが変更されました")]),r("router-link",{attrs:{to:{name:"home"},exact:""}},[t._v(" Go to home page ")])],1)])},i=[],o=(r("96cf"),r("3b8d")),a=r("cebc"),s=r("2f62"),c={name:"confirmEmail",metaInfo:{title:"メールアドレス確認"},computed:Object(a["a"])({},Object(s["e"])("emailConfirmations",["emailConfirmationError"]),Object(s["e"])("session",["sessionID"])),created:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.token=this.$route.params.token,t.next=3,this.ConfirmEmail({session:this.sessionID,token:this.token});case 3:this.emailConfirmationError&&this.createError(this.emailConfirmationError);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:Object(a["a"])({},Object(s["b"])("criticalError",["createError"]),Object(s["b"])("emailConfirmations",["ConfirmEmail"]))},m=c,u=(r("408f"),r("2877")),f=Object(u["a"])(m,n,i,!1,null,"113c1db4",null);e["default"]=f.exports},9596:function(t,e,r){}}]);
//# sourceMappingURL=confirmEmail.0128dfae.js.map