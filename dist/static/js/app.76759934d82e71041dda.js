webpackJsonp([1],{"0NRR":function(e,n){},"3A5n":function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("7+uW"),a=t("zL8q"),s=t.n(a),r=(t("tvR6"),t("U0v6")),l=t.n(r),i=t("Q3cb"),c=t.n(i),d={data:function(){return{isCollapse:!1,activeIndex2:"1"}},computed:{icon:function(){return c.a}},components:{FontAwesomeIcon:l.a},methods:{handleOpen:function(e,n){console.log(e,n)},handleClose:function(e,n){console.log(e,n)},handleSelect:function(e,n){console.log(e,n)},randomPassRoute:function(){this.$router.push("RandomPass")}}},u={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("el-container",[t("el-header",[e._v("\n        header\n      ")]),e._v(" "),t("el-container",[t("el-aside",{attrs:{width:"200"}},[t("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2","background-color":"#63625ff6","text-color":"#fff","active-text-color":"#ffd04b",collapse:e.isCollapse},on:{open:e.handleOpen,close:e.handleClose}},[t("el-submenu",{attrs:{index:"1"}},[t("template",{slot:"title"},[t("font-awesome-icon",{attrs:{icon:e.icon}}),e._v(" "),t("span",[e._v("一些工具~")])],1),e._v(" "),t("el-menu-item-group",[t("el-menu-item",{attrs:{index:"1-1"},on:{click:e.randomPassRoute}},[e._v("随机密码")]),e._v(" "),t("el-menu-item",{attrs:{index:"1-2"}},[e._v("选项2")])],1)],2)],1)],1),e._v(" "),t("el-container",[t("el-main",[t("router-view")],1)],1)],1)],1)],1)},staticRenderFns:[]};var m=t("VU/8")(d,u,!1,function(e){t("3A5n")},null,null).exports,p=t("/ocq"),h=t("BO1k"),f=t.n(h),v={data:function(){return{rdForm:{passLength:20,checkedConditions:["0-9","a-z","A-Z"],conditions:["0-9","a-z","A-Z"],specialSymbols:"!@#$%^&*"},randomPass:"",passStrength:null}},methods:{handleCheckedConditionChange:function(e){console.log("value: "+e)},handleChange:function(){},generator:function(){var e=this;this.randomPass="";var n="";this.rdForm.checkedConditions.forEach(function(t){0===e.rdForm.conditions.indexOf(t)&&(n+="0123456789"),1===e.rdForm.conditions.indexOf(t)&&(n+="abcdefghijklmnopqrstuvwxyz"),2===e.rdForm.conditions.indexOf(t)&&(n+="ABCDEFGHIJKLMNOPQRSTUVWXYZ")}),n+=this.rdForm.specialSymbols;var o=t("LtXW"),a=new o(o.engines.mt19937().autoSeed()).string(this.rdForm.passLength,n),s=0,r=!0,l=!1,i=void 0;try{for(var c,d=f()(a);!(r=(c=d.next()).done);r=!0){var u=c.value;-1==="0123456789".indexOf(u)?-1==="abcdefghijklmnopqrstuvwxyz".indexOf(u)?-1==="!@#$%^&*".indexOf(u)||(s+=10):s+=5:s+=2}}catch(e){l=!0,i=e}finally{try{!r&&d.return&&d.return()}finally{if(l)throw i}}this.randomPass=a,this.passStrength=parseFloat((s/(10*this.rdForm.passLength)*5).toFixed(2))}}},_={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("随机密码生成")])]),e._v(" "),t("el-form",{attrs:{width:"100%"}},[t("el-form-item",[t("el-col",{attrs:{span:4}},[e._v("长度")]),e._v(" "),t("el-col",{attrs:{span:10}},[t("el-input-number",{attrs:{"controls-position":"right"},on:{change:e.handleChange},model:{value:e.rdForm.passLength,callback:function(n){e.$set(e.rdForm,"passLength",n)},expression:"rdForm.passLength"}})],1)],1),e._v(" "),t("el-form-item",[t("el-checkbox-group",{on:{change:e.handleCheckedConditionChange},model:{value:e.rdForm.checkedConditions,callback:function(n){e.$set(e.rdForm,"checkedConditions",n)},expression:"rdForm.checkedConditions"}},e._l(e.rdForm.conditions,function(n,o){return t("el-checkbox",{key:o,attrs:{label:n}},[e._v(e._s(n))])}))],1),e._v(" "),t("el-form-item",[t("el-col",{attrs:{span:4}},[e._v("特殊字符")]),e._v(" "),t("el-col",{attrs:{span:4}},[t("el-input",{attrs:{clearble:""},model:{value:e.rdForm.specialSymbols,callback:function(n){e.$set(e.rdForm,"specialSymbols",n)},expression:"rdForm.specialSymbols"}})],1)],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary",icon:"el-icon-check"},on:{click:e.generator}},[e._v("生成")])],1),e._v(" "),t("el-form-item",[t("el-col",[e._v("\n                "+e._s(e.randomPass)+"\n            ")]),e._v(" "),t("el-col",[e.randomPass?t("el-rate",{attrs:{disabled:"","show-score":""},model:{value:e.passStrength,callback:function(n){e.passStrength=n},expression:"passStrength"}}):e._e()],1)],1)],1)],1)},staticRenderFns:[]};var g=t("VU/8")(v,_,!1,function(e){t("0NRR")},null,null).exports;o.default.use(p.a);var x=new p.a({routes:[{path:"/randomPass",name:"RandomPass",component:g}]});o.default.use(s.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:x,components:{App:m},template:"<App/>"})},tvR6:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.76759934d82e71041dda.js.map