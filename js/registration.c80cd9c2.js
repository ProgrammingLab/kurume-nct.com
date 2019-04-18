(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["registration"],{"086b":function(e,r,t){},"3fd1":function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"container"},[t("div",{staticClass:"box"},[t("h1",[e._v("新規登録")]),t("form",{on:{submit:function(r){return r.preventDefault(),e.onRegister(r)}}},[t("label",{attrs:{for:"username"}},[e._v("ユーザーネーム")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{required:"",type:"text",id:"username"},domProps:{value:e.name},on:{input:function(r){r.target.composing||(e.name=r.target.value)}}}),e.isUserNameViolated&&0!==e.name.length?t("div",{staticClass:"errorMessage"},[e._v("\n        ユーザーネームは英数字と_のみを使用し20文字以下にしてください\n      ")]):e._e(),t("label",{attrs:{for:"full_name"}},[e._v("フルネーム")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.full_name,expression:"full_name"}],attrs:{required:"",type:"text",id:"full_name"},domProps:{value:e.full_name},on:{input:function(r){r.target.composing||(e.full_name=r.target.value)}}}),t("label",{attrs:{for:"password"}},[e._v("パスワード")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{required:"",type:"password",id:"password"},domProps:{value:e.password},on:{input:function(r){r.target.composing||(e.password=r.target.value)}}}),e.isUserPasswordViolated&&0!==e.password.length?t("div",{staticClass:"errorMessage"},[e._v("\n        パスワードの長さは6文字以上72文字以下にしてください\n      ")]):e._e(),t("label",{attrs:{for:"password_confirm"}},[e._v("パスワード(確認)")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password_confirm,expression:"password_confirm"}],attrs:{required:"",type:"password",id:"password_confirm"},domProps:{value:e.password_confirm},on:{input:function(r){r.target.composing||(e.password_confirm=r.target.value)}}}),e.passwordConfirmationError&&0!==e.password_confirm.length?t("div",{staticClass:"errorMessage"},[e._v("\n        パスワードが一致しません\n      ")]):e._e(),t("button",{attrs:{type:"submit",disabled:e.isUserNameViolated||e.passwordConfirmationError||e.isUserPasswordViolated}},[e._v("\n        Register\n      ")]),t("ErrorMessage",{attrs:{error:e.registrationError}})],1)])])},n=[],a=(t("96cf"),t("3b8d")),o=(t("7f7f"),t("cebc")),i=t("2f62"),u=t("8e27"),c={name:"registration",metaInfo:{title:"部員登録"},components:{ErrorMessage:u["a"]},data:function(){return{name:"",full_name:"",password:"",password_confirm:"",registration_token:""}},computed:Object(o["a"])({},Object(i["e"])("user",["tokenVerificationError","registrationError"]),Object(i["e"])("session",["loginError"]),{isUserNameViolated:function(){return!/^[A-Za-z0-9_]{1,20}$/.test(this.name)},passwordConfirmationError:function(){return 0===this.password_confirm.length||this.password!==this.password_confirm},isUserPasswordViolated:function(){var e=this.password.length;return e<6||e>72}}),created:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.registration_token=this.$route.params.token,e.next=3,this.verifyRegistrationToken(this.registration_token);case 3:this.tokenVerificationError&&this.createError(this.tokenVerificationError);case 4:case"end":return e.stop()}},e,this)}));function r(){return e.apply(this,arguments)}return r}(),methods:Object(o["a"])({},Object(i["b"])("criticalError",["createError"]),Object(i["b"])("user",["verifyRegistrationToken","register"]),Object(i["b"])("session",["login"]),{onRegister:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.register({name:this.name,full_name:this.full_name,password:this.password,registration_token:this.registration_token});case 2:if(this.registrationError){e.next=6;break}return e.next=5,this.login({name:this.name,password:this.password});case 5:this.loginError?this.$router.push({name:"login"}):this.$router.push({name:"home"});case 6:case"end":return e.stop()}},e,this)}));function r(){return e.apply(this,arguments)}return r}()})},l=c,m=(t("62b0"),t("2877")),d=Object(m["a"])(l,s,n,!1,null,"a7130006",null);r["default"]=d.exports},"62b0":function(e,r,t){"use strict";var s=t("086b"),n=t.n(s);n.a}}]);
//# sourceMappingURL=registration.c80cd9c2.js.map