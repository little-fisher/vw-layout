webpackJsonp([9],{"2ZgG":function(a,t){},LoCg:function(a,t,e){"use strict";var s={name:"seleArea",props:{area:{type:Array},areaindex:{type:Number}},data:function(){return{active:this.areaindex}},methods:{seleAreaBtn:function(a){this.active=a,this.goBack()},goBack:function(){this.$emit("goback",this.active)}}},n={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"sele-area",on:{click:function(a){a.preventDefault()}}},[e("div",{staticClass:"container"},a._l(a.area,function(t,s){return e("div",{key:s,staticClass:"area",class:{active:s===a.active},on:{click:function(t){a.seleAreaBtn(s)}}},[a._v("\n      "+a._s(t)+"\n    ")])}))])},staticRenderFns:[]};var i=e("Z0/y")(s,n,!1,function(a){e("r9EX")},"data-v-a0c240c8",null);t.a=i.exports},e5DI:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={name:"garage",data:function(){return{showAreaBtn:!1,areaIndex:3,area:["京","沪","浙","苏","粤","鲁","晋","冀","渝","川","豫","辽","吉","黑","皖","鄂","湘","赣","闽","陕","甘","宁","蒙","津","桂","云","贵","琼","青","新","藏","港","澳"]}},methods:{goSeleArea:function(){this.showAreaBtn=!0},getBackInfo:function(a){this.areaIndex=a,this.showAreaBtn=!1},_goBack:function(){this.$router.go(-1)},_goManagement:function(){this.$router.push("/vehicle-management")},_goCarOwner:function(){this.$router.push("/car-owner")},_goCarSharing:function(){this.$router.push("/car-sharing")},_goDetectionRecord:function(){this.$router.push("/detection-record")}},components:{seleArea:e("LoCg").a}},n={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"garage"},[e("div",{staticClass:"action-bar"},[e("div",{staticClass:"go-back",on:{click:a._goBack}}),a._v(" "),e("div",{staticClass:"font"},[a._v("我的车库")]),a._v(" "),e("div",{staticClass:"vehicle-management",on:{click:a._goManagement}},[a._v("管理")])]),a._v(" "),e("div",{staticClass:"container"},[a.showAreaBtn?e("seleArea",{attrs:{areaindex:a.areaIndex,area:a.area},on:{goback:a.getBackInfo}}):a._e(),a._v(" "),a._m(0),a._v(" "),e("div",{staticClass:"car-menu"},[e("div",{staticClass:"car-con"},[e("div",{staticClass:"owner",on:{click:a._goCarOwner}},[e("h2",[a._v("车主认证")])]),a._v(" "),e("div",{staticClass:"record",on:{click:a._goDetectionRecord}},[e("h2",[a._v("检测记录")])])])]),a._v(" "),e("div",{staticClass:"car-idcard"},[e("span",[a._v("车牌号")]),a._v(" "),e("div",{staticClass:"area",on:{click:a.goSeleArea}},[a._v("\n        "+a._s(a.area[a.areaIndex])+"\n      ")]),a._v(" "),a._m(1)]),a._v(" "),a._m(2)],1)])},staticRenderFns:[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"slider"},[t("div",{staticClass:"bb"},[this._v("\n        dds\n      ")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"number"},[t("input",{attrs:{type:"text",name:"",value:"Jd8462"}})])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"car-info"},[e("div",{staticClass:"car-models"},[e("span",[a._v("具体车型")]),a._v(" "),e("span",[a._v("2016款 1.5T 自动尊耀版")])]),a._v(" "),e("div",{staticClass:"car-others"},[e("div",{staticClass:"car-displacement"},[e("span",[a._v("发动机排量")]),a._v(" "),e("span",[a._v("1.5T")])]),a._v(" "),e("div",{staticClass:"car-age"},[e("span",[a._v("生产年份")]),a._v(" "),e("span",[a._v("2008年")])])]),a._v(" "),e("div",{staticClass:"car-far"},[e("span",[a._v("行驶里程")]),a._v(" "),e("div",{staticClass:"input"},[e("input",{attrs:{type:"number",name:"",value:""}})]),a._v(" "),e("span",[a._v("km")])]),a._v(" "),e("div",{staticClass:"car-time"},[e("span",[a._v("注册时间")]),a._v(" "),e("span",[a._v("2016年12月18日")])])])}]};var i=e("Z0/y")(s,n,!1,function(a){e("2ZgG")},"data-v-c0253cec",null);t.default=i.exports},r9EX:function(a,t){}});
//# sourceMappingURL=9.7de1fdd8534822aa6a1b.js.map