(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53279185"],{"73cf":function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",[r("div",{staticClass:"row mt-1"},[r("div",{staticClass:"card mx-auto"},[e._m(0),r("div",{staticClass:"card-body"},[r("form",[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[e._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:"Username",name:"username"},domProps:{value:e.username},on:{input:function(a){a.target.composing||(e.username=a.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Email",name:"email"},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password",name:"password"},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"confirm_password"}},[e._v("Confirm Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.confirm_password,expression:"confirm_password"}],staticClass:"form-control",attrs:{type:"password",id:"confirm_password",placeholder:"Confirm Password",name:"confirm_password"},domProps:{value:e.confirm_password},on:{input:function(a){a.target.composing||(e.confirm_password=a.target.value)}}})]),r("button",{staticClass:"btn btn-primary",on:{click:function(a){return a.preventDefault(),e.registerUser(a)}}},[e._v("Register")]),e._v(" "),r("router-link",{staticClass:"card-link",attrs:{to:"/login"}},[e._v("Already have an account?")])],1)])])])])},s=[function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"card-header text-white bg-primary"},[r("h4",[e._v("Register")])])}],o=(r("b0c0"),r("96cf"),r("1da1")),n=r("5530"),i=r("2f62"),c={data:function(){return{name:"",email:"",username:"",password:"",confirm_password:""}},methods:Object(n["a"])(Object(n["a"])({},Object(i["b"])(["register"])),{},{registerUser:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r,t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r={username:e.username,password:e.password,confirm_password:e.confirm_password,email:e.email,name:e.name},a.next=3,e.register(r);case 3:t=a.sent,t&&t.data.success&&e.$router.push("/login");case 5:case"end":return a.stop()}}),a)})))()}}),computed:Object(n["a"])({},Object(i["c"])(["authState"]))},m=c,l=r("2877"),u=Object(l["a"])(m,t,s,!1,null,null,null);a["default"]=u.exports},b0c0:function(e,a,r){var t=r("83ab"),s=r("9bf2").f,o=Function.prototype,n=o.toString,i=/^\s*function ([^ (]*)/,c="name";t&&!(c in o)&&s(o,c,{configurable:!0,get:function(){try{return n.call(this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-53279185.3307bebf.js.map