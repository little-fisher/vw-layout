webpackJsonp([14],{"3DVd":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("qwAB"),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"upload-pic"},[s("div",{staticClass:"con"},[s("ul",[t._l(t.imgArr,function(t,e){return s("li",{key:e,staticClass:"imgs"})}),t._v(" "),8!==t.imgArr.length?s("li",{staticClass:"list-btn",on:{click:t.getPic}}):t._e(),t._v(" "),t._l(t.boxArr,function(t){return s("li",{key:t.id,staticClass:"box"})})],2)])])},staticRenderFns:[]};var a={name:"repair",data:function(){return{repairBScroll:null,clientHeight:null,wxInfo:null}},methods:{_goBack:function(){this.$router.go(-1)},focusText:function(){var t=this;setTimeout(function(){var e=t.$refs.chatpannel;e.scrollIntoView(!0),e.scrollIntoViewIfNeeded(!0)},200)},goNext:function(){this.$router.push("/repair-pre-order")}},mounted:function(){this.$nextTick(function(){this.clientHeight=document.body.offsetHeight})},components:{uploadPic:s("Z0/y")({name:"uploadPic",data:function(){return{imgArr:[]}},computed:{boxArr:function(){if(this.imgArr.length>3){for(var t=[],e=0;e<8-this.imgArr.length-1;e++)t.push({value:"a_1",id:this.imgArr.length+e});return t}for(var s=[],i=0;i<4-this.imgArr.length-1;i++)s.push({value:"a_1",id:this.imgArr.length+i});return s}},methods:{getPic:function(){this.imgArr.push(1)}}},n,!1,function(t){s("4ATA")},"data-v-87535790",null).exports,seleDetectionMenu:s("l99u").a,Scroll:i.a}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"repair",style:{height:t.clientHeight+"px"},attrs:{flexContainer:""}},[s("div",{staticClass:"action-bar"},[s("div",{staticClass:"go-back",on:{click:t._goBack}}),t._v(" "),t._m(0)]),t._v(" "),t._m(1),t._v(" "),s("Scroll",{ref:"repair",staticClass:"container"},[s("div",{staticClass:"wrapper"},[s("div",{ref:"chatpannel",staticClass:"textarea",attrs:{flexContainer:""}},[s("textarea",{attrs:{name:"name",rows:"5",placeholder:"简单概述您的车辆故障，提供图片能帮助维修中心为您 提前进货哦"},on:{focus:t.focusText}})]),t._v(" "),s("uploadPic"),t._v(" "),s("div",{staticClass:"detection-record"},[s("span",[t._v("车辆检查故障")]),t._v(" "),s("div",{staticClass:"order"},[s("span",[t._v("查看检测单")])])]),t._v(" "),s("seleDetectionMenu",{attrs:{check:!0}})],1)]),t._v(" "),s("div",{staticClass:"go-next",on:{click:t.goNext}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"font"},[e("h2",[this._v("东风本田-思域")]),this._v(" "),e("p",[e("span",[this._v("苏DB5A68")]),e("span",[this._v("丨")]),e("span",[this._v("2300km")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"service-flow"},[s("span",{staticClass:"bg bg1"},[t._v("选择服务")]),t._v(" "),s("span",[t._v("-")]),t._v(" "),s("span",{staticClass:"bg bg2"},[t._v("选择门店")]),t._v(" "),s("span",[t._v("-")]),t._v(" "),s("span",{staticClass:"bg bg3"},[t._v("确认订单")]),t._v(" "),s("span",[t._v("-")]),t._v(" "),s("span",{staticClass:"bg bg4"},[t._v("到店服务")])])}]};var c=s("Z0/y")(a,r,!1,function(t){s("miR0")},"data-v-8871b98a",null);e.default=c.exports},"4ATA":function(t,e){},miR0:function(t,e){}});
//# sourceMappingURL=14.5b0d7cc6c998b25ff815.js.map