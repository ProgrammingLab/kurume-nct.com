(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["confirmEmail"],{"408f":function(e,t,n){"use strict";var r=n("f9ae"),i=n.n(r);i.a},"7e81":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"box"},[n("h1",[e._v("メールアドレス変更")]),n("div",[e._v("メールアドレスが変更されました")]),n("router-link",{attrs:{to:{name:"home"},exact:""}},[e._v("\n      Go to home page\n    ")])],1)])},i=[],o=(n("96cf"),n("3b8d")),a=n("cebc"),s=n("2f62"),c={name:"confirmEmail",metaInfo:{title:"メールアドレス確認"},computed:Object(a["a"])({},Object(s["e"])("emailConfirmations",["emailConfirmationError"]),Object(s["e"])("session",["sessionID"])),created:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.token=this.$route.params.token,e.next=3,this.ConfirmEmail({session:this.sessionID,token:this.token});case 3:this.emailConfirmationError&&this.createError(this.emailConfirmationError);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:Object(a["a"])({},Object(s["b"])("criticalError",["createError"]),Object(s["b"])("emailConfirmations",["ConfirmEmail"]))},m=c,f=(n("408f"),n("2877")),u=Object(f["a"])(m,r,i,!1,null,"113c1db4",null);t["default"]=u.exports},f9ae:function(e,t,n){}}]);
//# sourceMappingURL=confirmEmail.e4e1f066.js.map