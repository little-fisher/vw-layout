webpackJsonp([30],{hRHL:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("4YfN"),i=e.n(s),n=e("qwAB"),c=e("9rMa"),d={name:"addcarDisplacement",data:function(){return{displacementId:0,displacement:[]}},methods:i()({goAge:function(t){this.$router.push("/addcar-age?sid="+t.sid+"&ev="+t.exhaustVolume),this.setAddCar({exhaustVolume:t.exhaustVolume})},_goBack:function(){this.$router.go(-1)},getExhaustVolume:function(){var t=this;this.api_post("/api/carzone/findExhaustVolume",function(a){0===a.errorCode&&(t.displacement=a.data.data.detail)},{sid:this.displacementId})}},Object(c.c)({setAddCar:"SET_ADDCAR"})),created:function(){this.displacementId=this.$route.query.sid,this.getExhaustVolume()},computed:i()({},Object(c.b)(["addCar"])),components:{Scroll:n.a}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"addcar-displacement",attrs:{flexContainer:""}},[e("div",{staticClass:"action-bar"},[e("div",{staticClass:"go-back",on:{click:t._goBack}}),t._v(" "),e("div",{staticClass:"tabbar"},[t._v("\n      选择发动机排量\n    ")])]),t._v(" "),e("div",{staticClass:"car-name"},[e("img",{attrs:{src:t.carLogoUrl+t.addCar.imageSrc,alt:""}}),t._v(" "),e("h2",[t._v(t._s(t.addCar.series.sbName+" - "+t.addCar.series.vehicleSystem[1]))])]),t._v(" "),e("div",{staticClass:"sele-next"},[t._v("\n    选择发动机排量\n  ")]),t._v(" "),e("Scroll",{ref:"displacementCar",staticClass:"displacement",attrs:{data:t.displacement}},[e("div",{staticClass:"con"},t._l(t.displacement,function(a,s){return e("div",{key:s,staticClass:"text",on:{click:function(e){t.goAge(a)}}},[t._v("\n        "+t._s(a.exhaustVolume)+"\n      ")])}))])],1)},staticRenderFns:[]};var o=e("Z0/y")(d,r,!1,function(t){e("nKoh")},"data-v-0f7b9d12",null);a.default=o.exports},nKoh:function(t,a){}});
//# sourceMappingURL=30.35139a16e7e78632d134.js.map