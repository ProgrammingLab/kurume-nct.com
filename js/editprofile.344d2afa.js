(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["editprofile"],{"1c44":function(e,t,a){"use strict";a("5274")},5274:function(e,t,a){},7156:function(e,t,a){var s=a("861d"),i=a("d2bb");e.exports=function(e,t,a){var r,n;return i&&"function"==typeof(r=t.constructor)&&r!==a&&s(n=r.prototype)&&n!==a.prototype&&i(e,n),e}},"984d":function(e,t,a){},a9e3:function(e,t,a){"use strict";var s=a("83ab"),i=a("da84"),r=a("94ca"),n=a("6eeb"),l=a("5135"),o=a("c6b6"),c=a("7156"),d=a("c04e"),u=a("d039"),p=a("7c73"),v=a("241c").f,m=a("06cf").f,h=a("9bf2").f,f=a("58a8").trim,g="Number",_=i[g],I=_.prototype,N=o(p(I))==g,b=function(e){var t,a,s,i,r,n,l,o,c=d(e,!1);if("string"==typeof c&&c.length>2)if(c=f(c),t=c.charCodeAt(0),43===t||45===t){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:s=2,i=49;break;case 79:case 111:s=8,i=55;break;default:return+c}for(r=c.slice(2),n=r.length,l=0;l<n;l++)if(o=r.charCodeAt(l),o<48||o>i)return NaN;return parseInt(r,s)}return+c};if(r(g,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var C,w=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof w&&(N?u((function(){I.valueOf.call(a)})):o(a)!=g)?c(new _(b(t)),a,w):b(t)},S=s?v(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),y=0;S.length>y;y++)l(_,C=S[y])&&!l(w,C)&&h(w,C,m(_,C));w.prototype=I,I.constructor=w,n(i,g,w)}},dda7:function(e,t,a){"use strict";a("984d")},ed24:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("img",{staticClass:"preview",attrs:{src:e.localSrc}}),a("div",{staticClass:"file"},[a("label",{staticClass:"file-label"},[a("input",{staticClass:"file-input",attrs:{type:"file",accept:"image/*"},on:{change:e.onChange}}),e._m(0)])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"file-cta"},[a("span",{staticClass:"file-label"},[e._v(" 画像ファイルを選択 ")])])}],r=(a("ac1f"),a("1cda"),{props:["src"],data:function(){return{localSrc:this.src}},methods:{onChange:function(e){var t=this,a=e.target.files[0];if(a){var s=new FileReader;s.readAsDataURL(a),s.addEventListener("load",(function(){t.localSrc=s.result;var e=/^data:image\/.+;base64,([a-zA-Z0-9+/=]+)$/.exec(s.result)[1];t.$emit("onChange",{file:a,base64Body:e})}))}}},watch:{src:function(e){this.localSrc||(this.localSrc=e)}}}),n=r,l=(a("1c44"),a("2877")),o=Object(l["a"])(n,s,i,!1,null,"5d81caec",null);t["a"]=o.exports},fb5e:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("section",{staticClass:"section"},[a("h1",{staticClass:"title"},[e._v("プロフィール編集")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.updateProfile(t)}}},[a("label",{staticClass:"label"},[e._v("アイコン")]),a("ImageSelector",{attrs:{src:e.iconURL},on:{onChange:e.onImageChange}}),e.iconSizeIsTooLarge?a("p",{staticClass:"help is-danger"},[e._v("アイコンサイズを1MB未満にしてください")]):e._e(),a("label",{staticClass:"label"},[e._v("本名")]),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.realName,expression:"realName"}],staticClass:"input",class:{"is-danger":e.realNameIsInvalid},attrs:{type:"text",placeholder:"山村 大介"},domProps:{value:e.realName},on:{input:function(t){t.target.composing||(e.realName=t.target.value)}}})]),a("p",{staticClass:"help"},[e._v("※この項目は公開範囲設定に関わらず外部に公開されません")]),e.realNameIsInvalid?a("p",{staticClass:"help is-danger"},[e._v("127文字以下にしてください")]):e._e()]),a("label",{staticClass:"label"},[e._v("表示名")]),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.displayName,expression:"displayName"}],staticClass:"input",class:{"is-danger":e.displayNameIsInvalid},attrs:{type:"text",placeholder:"むーちょ"},domProps:{value:e.displayName},on:{input:function(t){t.target.composing||(e.displayName=t.target.value)}}})]),e.displayNameIsInvalid?a("p",{staticClass:"help is-danger"},[e._v("50文字以下にしてください")]):e._e()]),a("label",{staticClass:"label"},[e._v("学年")]),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("div",{staticClass:"select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.grade,expression:"grade"}],attrs:{disabled:e.left},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.grade=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:"0"}},[e._v("Please Select")]),a("option",{attrs:{value:"1"}},[e._v("1")]),a("option",{attrs:{value:"2"}},[e._v("2")]),a("option",{attrs:{value:"3"}},[e._v("3")]),a("option",{attrs:{value:"4"}},[e._v("4")]),a("option",{attrs:{value:"5"}},[e._v("5")])])])])]),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("label",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.left,expression:"left"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.left)?e._i(e.left,null)>-1:e.left},on:{change:function(t){var a=e.left,s=t.target,i=!!s.checked;if(Array.isArray(a)){var r=null,n=e._i(a,r);s.checked?n<0&&(e.left=a.concat([r])):n>-1&&(e.left=a.slice(0,n).concat(a.slice(n+1)))}else e.left=i}}}),e._v(" 卒部済み ")])])]),a("label",{staticClass:"label"},[e._v("学科")]),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("div",{staticClass:"select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.department,expression:"department"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.department=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:"0"}},[e._v("Please Select")]),a("option",{attrs:{value:"1"}},[e._v("制御情報工学科")]),a("option",{attrs:{value:"2"}},[e._v("機械工学科")]),a("option",{attrs:{value:"3"}},[e._v("電気電子工学科")]),a("option",{attrs:{value:"4"}},[e._v("生物応用化学科")]),a("option",{attrs:{value:"5"}},[e._v("材料システム工学科")])])])])]),a("label",{staticClass:"label"},[e._v("Description")]),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"textarea",class:{"is-danger":e.descriptionIsInvalid},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})]),e.descriptionIsInvalid?a("p",{staticClass:"help is-danger"},[e._v("1023文字以下にしてください")]):e._e()]),a("label",{staticClass:"label"},[e._v("Twitter Screen Name")]),a("div",{staticClass:"field has-addons flex-wrap"},[e._m(0),a("p",{staticClass:"control is-expanded"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.twitterScreenName,expression:"twitterScreenName"}],staticClass:"input right-radios-4",class:{"is-danger":e.twitterScreenNameIsInvalid},attrs:{type:"text"},domProps:{value:e.twitterScreenName},on:{input:function(t){t.target.composing||(e.twitterScreenName=t.target.value)}}})]),e.twitterScreenNameIsInvalid?a("p",{staticClass:"help is-danger w-100"},[e._v("127文字以下にしてください")]):e._e()]),a("label",{staticClass:"label"},[e._v("GitHub User Name")]),a("div",{staticClass:"field has-addons flex-wrap"},[e._m(1),a("p",{staticClass:"control is-expanded"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.githubUserName,expression:"githubUserName"}],staticClass:"input right-radios-4",class:{"is-danger":e.githubUserNameIsInvalid},attrs:{type:"text"},domProps:{value:e.githubUserName},on:{input:function(t){t.target.composing||(e.githubUserName=t.target.value)}}})]),e.githubUserNameIsInvalid?a("p",{staticClass:"help is-danger w-100"},[e._v("127文字以下にしてください")]):e._e()]),a("label",{staticClass:"label"},[e._v("AtCoder User Name")]),a("div",{staticClass:"field has-addons flex-wrap"},[e._m(2),a("p",{staticClass:"control is-expanded"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.atcoderUserName,expression:"atcoderUserName"}],staticClass:"input right-radios-4",class:{"is-danger":e.atcoderUserNameIsInvalid},attrs:{type:"text"},domProps:{value:e.atcoderUserName},on:{input:function(t){t.target.composing||(e.atcoderUserName=t.target.value)}}})]),e.atcoderUserNameIsInvalid?a("p",{staticClass:"help is-danger w-100"},[e._v("127文字以下にしてください")]):e._e()]),a("label",{staticClass:"label"},[e._v("公開範囲")]),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("div",{staticClass:"select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.profileScope,expression:"profileScope"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.profileScope=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0"}},[e._v("部員にのみ公開")]),a("option",{attrs:{value:"1"}},[e._v("外部にも公開")])])])])]),e._m(3),a("ErrorMessage",{attrs:{error:e.patchProfileError}}),a("ErrorMessage",{attrs:{error:e.postIconError}}),e.hasValidationError?a("p",{staticClass:"has-text-danger"},[e._v("入力値に誤りがあります")]):e._e(),e.isSuccess?a("p",[e._v("保存しました")]):e._e()],1)])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"control"},[a("a",{staticClass:"button is-static"},[e._v(" https://twitter.com/ ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"control"},[a("a",{staticClass:"button is-static"},[e._v(" https://github.com/ ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"control"},[a("a",{staticClass:"button is-static"},[e._v(" https://atcoder.jp/users/ ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[e._v("送信")])])}],r=(a("a4d3"),a("e01a"),a("a9e3"),a("96cf"),a("1da1")),n=a("5530"),l=(a("1cda"),a("2f62")),o=a("8e27"),c=a("ed24"),d={name:"editProfile",metaInfo:{title:"プロフィール編集"},components:{ErrorMessage:o["a"],ImageSelector:c["a"]},data:function(){return{newIcon:"",iconSize:0,userName:"",profileScope:"",left:!1,displayName:"",realName:"",description:"",grade:"",department:"",twitterScreenName:"",githubUserName:"",atcoderUserName:"",isSuccess:!1,hasValidationError:!1,realNameIsInvalid:!1,displayNameIsInvalid:!1,descriptionIsInvalid:!1,twitterScreenNameIsInvalid:!1,githubUserNameIsInvalid:!1,atcoderUserNameIsInvalid:!1,iconSizeIsTooLarge:!1}},computed:Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(l["e"])("user",["userData"])),Object(l["e"])("session",["sessionID"])),Object(l["c"])("editUser",["hasError"])),Object(l["e"])("editUser",["patchProfileError","postIconError"])),{},{iconURL:function(){return this.userData.icon_url||a("f0e4")}}),mounted:function(){this.profileScope="PUBLIC"===this.userData.profile_scope?1:0,this.left=this.userData.left,this.displayName=this.userData.display_name,this.realName=this.userData.full_name,this.description=this.userData.description,this.grade=this.userData.grade,null!=this.userData.department?this.department=String(this.userData.department.department_id):this.department="0",this.twitterScreenName=this.userData.twitter_screen_name,this.githubUserName=this.userData.github_user_name,this.atcoderUserName=this.userData.atcoder_user_name},methods:Object(n["a"])(Object(n["a"])({},Object(l["b"])("editUser",{patchProfileAction:"patchProfile",postIconAction:"postIcon"})),{},{postIcon:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==e.newIcon){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.postIconAction({image:e.newIcon,sessionID:e.sessionID});case 4:case"end":return t.stop()}}),t)})))()},patchProfile:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.patchProfileAction({userProfile:e,sessionID:t.sessionID});case 2:case"end":return a.stop()}}),a)})))()},validation:function(){this.hasValidationError=!1,this.realNameIsInvalid=!1,this.displayNameIsInvalid=!1,this.descriptionIsInvalid=!1,this.twitterScreenNameIsInvalid=!1,this.githubUserNameIsInvalid=!1,this.atcoderUserNameIsInvalid=!1,this.iconSizeIsTooLarge=!1,this.realName.length>=128&&(this.realNameIsInvalid=!0,this.hasValidationError=!0),this.displayName.length>=51&&(this.displayNameIsInvalid=!0,this.hasValidationError=!0),this.description.length>=1024&&(this.descriptionIsInvalid=!0,this.hasValidationError=!0),this.twitterScreenName.length>=128&&(this.twitterScreenNameIsInvalid=!0,this.hasValidationError=!0),this.githubUserName.length>=128&&(this.githubUserNameIsInvalid=!0,this.hasValidationError=!0),this.atcoderUserName.length>=128&&(this.atcoderUserNameIsInvalid=!0,this.hasValidationError=!0),this.iconSize>=Math.pow(1024,2)&&(this.iconSizeIsTooLarge=!0,this.hasValidationError=!0)},onImageChange:function(e){var t=e.file,a=e.base64Body;this.iconSize=t.size,this.newIcon=a},updateProfile:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isSuccess=!1,e.validation(),!e.hasValidationError){t.next=4;break}return t.abrupt("return");case 4:return a={full_name:e.realName,description:e.description,grade:Number(e.grade),left:e.left,role_id:Number(e.userData.role),twitter_screen_name:e.twitterScreenName,github_user_name:e.githubUserName,atcoder_user_name:e.atcoderUserName,department_id:Number(e.department),profile_scope:Number(e.profileScope),display_name:e.displayName},t.next=7,e.patchProfile(a);case 7:return t.next=9,e.postIcon();case 9:e.hasError||(e.isSuccess=!0);case 10:case"end":return t.stop()}}),t)})))()}})},u=d,p=(a("dda7"),a("2877")),v=Object(p["a"])(u,s,i,!1,null,"270c1ab0",null);t["default"]=v.exports}}]);
//# sourceMappingURL=editprofile.344d2afa.js.map