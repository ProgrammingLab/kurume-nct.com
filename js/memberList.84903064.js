(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["memberList"],{"02b7":function(e,t,r){"use strict";var s=r("4897"),n=r.n(s);n.a},4897:function(e,t,r){},"8e27":function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:this.error,expression:"this.error"}]},[e._v(e._s(e.message))])},n=[],i={name:"ErrorMessage",props:["error"],computed:{message:function(){return this.error?this.error.response?"".concat(this.error.response.status," ").concat(this.error.response.statusText,": ").concat(this.error.response.data.message):"サーバーに接続できません":null}}},a=i,o=r("2877"),c=Object(o["a"])(a,s,n,!1,null,null,null);t["a"]=c.exports},d351:function(e,t,r){"use strict";var s=r("dda4"),n=r.n(s);n.a},dda4:function(e,t,r){},eb59:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),r("publicMemberList",{attrs:{includeLeftUser:""}})],1)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h1",[s("img",{staticClass:"logo",attrs:{src:r("9b19"),alt:"ProLab"}})])}],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ErrorMessage",{attrs:{error:e.error}}),r("ul",{staticClass:"member-list"},e._l(e.filteredList,function(t){return r("li",{key:t.user_id},[r("router-link",{attrs:{to:{name:"profile",params:{name:t.name}}}},[r("img",{attrs:{src:t.icon_url||"https://placehold.jp/000000/ffffff/150x150.png?text=No%20Image",alt:"User Icon"}}),r("dl",[r("dt",{staticClass:"name"},[e._v(e._s(t.displayname||t.name))]),t.role?r("dd",{staticClass:"role"},[e._v(e._s(t.role.name))]):e._e(),r("dd",{staticClass:"grade"},[e._v(e._s(t.left?"卒業生":t.grade+"年"))]),r("dd",{staticClass:"description"},[e._v(e._s(t.description))])])])],1)}),0)],1)},a=[],o=(r("96cf"),r("3b8d")),c=r("cebc"),l=r("8e27"),u=r("2f62"),m={name:"publicMemberList",props:{includeLeftUser:{type:Boolean,default:!1}},components:{ErrorMessage:l["a"]},data:function(){return{loading:!1}},mounted:function(){this.isEmpty&&this.getList()},computed:Object(c["a"])({},Object(u["e"])("memberIntroduction/memberList",["list","error"]),Object(u["c"])("memberIntroduction/memberList",["isEmpty","isLast"]),{filteredList:function(){return this.includeLeftUser?this.list:this.list.filter(function(e){return!e.left})}}),methods:Object(c["a"])({},Object(u["b"])("memberIntroduction/memberList",{getListAction:"getList"}),{getList:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.loading){e.next=5;break}return this.loading=!0,e.next=4,this.getListAction();case 4:this.loading=!1;case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()})},d=m,f=(r("02b7"),r("2877")),p=Object(f["a"])(d,i,a,!1,null,"65fdc95d",null),b=p.exports,h={name:"memberList",metaInfo:{title:"部員一覧"},components:{publicMemberList:b}},g=h,_=(r("d351"),Object(f["a"])(g,s,n,!1,null,"64626f01",null));t["default"]=_.exports}}]);
//# sourceMappingURL=memberList.84903064.js.map