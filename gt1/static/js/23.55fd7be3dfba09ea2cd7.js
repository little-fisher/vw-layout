webpackJsonp([23],{UMnb:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"storeList",data:function(){return{storeListBScroll:null,seleIndex:0,storeArray:[0,1,2,3,4,5,6,7,8]}},methods:{_goBack:function(){this.$router.go(-1)},seleStore:function(s){this.seleIndex=s}},components:{Scroll:e("qwAB").a}},l={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"store",attrs:{flexContainer:""}},[e("div",{staticClass:"tabbar"},[e("span",{staticClass:"goback",on:{click:s._goBack}}),s._v(" "),e("h2",{staticClass:"title"},[s._v("选择门店")]),s._v(" "),e("div",{staticClass:"address"},[s._v("\n      常州\n    ")])]),s._v(" "),e("Scroll",{ref:"storelist",staticClass:"store-list"},[e("ul",s._l(s.storeArray,function(t,a){return e("li",{key:a,class:{active:s.seleIndex===a},on:{click:function(t){s.seleStore(a)}}},[e("div",{staticClass:"top"},[e("img",{attrs:{src:"",alt:""}}),s._v(" "),e("div",{staticClass:"top-right"},[e("div",{staticClass:"store-name"},[e("p",{class:a%2==1?"by":"repair"},[s._v("奇特异快速保养-华润店")]),s._v(" "),e("h2",[s._v("4.6km")])]),s._v(" "),e("div",{staticClass:"store-address"},[e("p",[s._v("常州市天宁区XXX路202-2号")]),s._v(" "),e("h2",{class:{active:s.seleIndex===a,nosele:s.seleIndex!==a}},[s._v(s._s(s.seleIndex===a?"当前门店":"选择"))])])])]),s._v(" "),e("div",{staticClass:"bottom"},[e("div",{staticClass:"get-loc"},[e("span",[s._v("查看定位")])]),s._v(" "),e("div",{staticClass:"call-dz"},[s._v("联系店长")])])])}))])],1)},staticRenderFns:[]};var i=e("Z0/y")(a,l,!1,function(s){e("c8XD")},"data-v-805ba596",null);t.default=i.exports},c8XD:function(s,t){}});
//# sourceMappingURL=23.55fd7be3dfba09ea2cd7.js.map