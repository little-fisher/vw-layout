webpackJsonp([7],{QTC7:function(e,s,t){"use strict";var i=t("mvHQ"),r=t.n(i),n={name:"counter",props:{goodsinfo:{type:Object}},data:function(){return{sssss:null}},methods:{cutNum:function(){this.goodsinfo.keepServiceSecondItemBean.minCommodityNumber<=1?this.goodsinfo.keepServiceSecondItemBean.minCommodityNumber=1:this.goodsinfo.keepServiceSecondItemBean.minCommodityNumber--},addNum:function(){this.goodsinfo.keepServiceSecondItemBean.minCommodityNumber++}},mounted:function(){this.sssss=JSON.parse(sessionStorage.getItem("serverList"))}},a={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"counter"},[t("div",{staticClass:"cut",on:{click:e.cutNum}},[e._v("-")]),e._v(" "),t("span",[e._v(e._s(e.goodsinfo.keepServiceSecondItemBean.minCommodityNumber))]),e._v(" "),t("div",{staticClass:"add",on:{click:e.addNum}},[e._v("+")])])},staticRenderFns:[]};var c=t("VU/8")(n,a,!1,function(e){t("VMn2")},"data-v-1ffdfaa6",null).exports,o={name:"serverModel",props:{server:{type:Object},serverid:{type:Number,required:!0},addServer:{type:Boolean,default:!0}},data:function(){return{locationServerList:null}},methods:{_showInfo:function(){this.server.groupItem.action=!this.server.groupItem.action,this.server.groupItem.action?this.server.groupItem.state=2:this.server.groupItem.state=1},_checkGood:function(e){var s=!1;this.server.subItems[e].isChecked=!this.server.subItems[e].isChecked,this.server.subItems.forEach(function(e,t){e.isChecked&&(s=!0)}),this.server.groupItem.isChecked=!!s},_checkServer:function(){this.server.groupItem.isChecked?(this.server.groupItem.isChecked=!1,this.server.subItems.forEach(function(e){e.isChecked=!1})):(this.server.groupItem.isChecked=!0,this.server.subItems.forEach(function(e){e.isChecked=!0}))},_editServer:function(){this.server.groupItem.state=3},_saveServer:function(){this.locationServerList=JSON.parse(sessionStorage.getItem("serverList")),this.server.groupItem.state=2,this.locationServerList[this.serverid]=this.server,sessionStorage.setItem("serverList",r()(this.locationServerList))},_cancelServer:function(){this.locationServerList=JSON.parse(sessionStorage.getItem("serverList")),this.server.groupItem.state=2,this.$set(this.server,"subItems",this.locationServerList[this.serverid].subItems)},_changeGood:function(){}},mounted:function(){this.$nextTick(function(){})},components:{counter:c}},v={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"server-model",attrs:{flexContainer:""}},[t("div",{staticClass:"menu",on:{click:e._showInfo}},[t("div",{staticClass:"check"},[t("div",{staticClass:"btn",class:e.server.groupItem.isChecked?"check":"nocheck",on:{click:function(s){s.stopPropagation(),e._checkServer(s)}}})]),e._v(" "),t("div",{staticClass:"server-info"},[t("div",{staticClass:"title"},[e._v(e._s(e.server.groupItem.keepServiceFirstItemBean.serviceName)),e.server.groupItem.keepServiceFirstItemBean.isRecommend?t("span",[e._v("推荐")]):e._e()]),e._v(" "),t("div",{staticClass:"tips"},[e._v(e._s(e.server.groupItem.keepServiceFirstItemBean.bottomRemark))])])]),e._v(" "),e.server.groupItem.action?t("ul",{staticClass:"good-list"},e._l(e.server.subItems,function(s,i){return t("li",{key:i},[t("div",{staticClass:"tab-check"},[e.addServer?t("div",{staticClass:"btn",class:s.isChecked?"check":"nocheck",on:{click:function(s){e._checkGood(i)}}}):e._e()]),e._v(" "),e._m(0,!0),e._v(" "),t("div",{staticClass:"good-info"},[2===e.server.groupItem.state?t("div",{staticClass:"change"},[t("div",{staticClass:"parameter"},[t("div",{staticClass:"left"},[t("div",{staticClass:"name"},[e._v("级别： "),t("span",[e._v(e._s(s.keepServiceSecondItemBean.classify))])]),e._v(" "),t("div",{staticClass:"brand"},[e._v("品牌："),t("span",[e._v(e._s(s.keepServiceSecondItemBean.trademark))])])]),e._v(" "),t("div",{staticClass:"right"},[t("div",{staticClass:"viscosity"},[e._v("粘度："),t("span",[e._v(e._s(s.keepServiceSecondItemBean.viscosity))])]),e._v(" "),t("div",{staticClass:"spec"},[e._v("规格："),t("span",[e._v(e._s(s.keepServiceSecondItemBean.specification))])])])]),e._v(" "),t("div",{staticClass:"tips"},[e._v(e._s(s.keepServiceSecondItemBean.minCommodityNumber)+"辆“思域”选择了此产品")]),e._v(" "),t("div",{staticClass:"buy-info"},[t("span",[e._v("￥"+e._s(s.keepServiceSecondItemBean.commodityPrice))]),e._v(" "),t("span",[e._v("X"+e._s(s.keepServiceSecondItemBean.commodityNumber))])])]):e._e(),e._v(" "),3===e.server.groupItem.state&&e.addServer?t("div",{staticClass:"no-change"},[t("span",[e._v("￥"+e._s(s.keepServiceSecondItemBean.commodityPrice.toFixed(2)))]),e._v(" "),t("div",{staticClass:"input-num"},[t("counter",{attrs:{goodsinfo:s}})],1),e._v(" "),t("div",{staticClass:"change-btn"},[t("div",{staticClass:"btn",on:{click:e._changeGood}},[e._v("更换")])])]):e._e()])])})):e._e()])},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"img"},[s("img",{attrs:{src:"",alt:""}})])}]};var d=t("VU/8")(o,v,!1,function(e){t("oEX9")},"data-v-0ab584c2",null);s.a=d.exports},VMn2:function(e,s){},oEX9:function(e,s){},"x+Zt":function(e,s){},ybbh:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=t("mvHQ"),r=t.n(i),n=t("Dd8w"),a=t.n(n),c=t("QTC7"),o=t("qwAB"),v=t("NYxO"),d={name:"maintain",data:function(){return{}},computed:a()({allPrice:function(){var e=0;return this.serverList.forEach(function(s,t){s.groupItem.isChecked&&(s.subItems.length>0?s.subItems.forEach(function(s,t){s.isChecked&&(e+=s.keepServiceSecondItemBean.minCommodityNumber*s.keepServiceSecondItemBean.commodityPrice)}):e+=s.groupItem.keepServiceFirstItemBean.serverPrice)}),e},allServerNum:function(){var e=0;return this.serverList.forEach(function(s,t){s.groupItem.isChecked&&e++}),e}},Object(v.c)(["serverList","myCar","defaultCar"])),created:function(){sessionStorage.setItem("serverList",r()(this.serverList))},methods:{_goBack:function(){this.$router.go(-1)},_goAddServer:function(){this.$router.push("/add-new-server")},_goMaintainPreOrder:function(){this.allServerNum>0?this.$router.push("/maintain-pre-order"):this.$Toast({message:"请选择保养服务",position:"bottom"})}},mounted:function(){},components:{serverModel:c.a,Scroll:o.a}},m={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"maintain",attrs:{flexContainer:""}},[t("div",{staticClass:"action-bar"},[t("div",{staticClass:"go-back",on:{click:e._goBack}}),e._v(" "),t("div",{staticClass:"font"},[t("h2",[e._v(e._s(e.defaultCar.year+" - "+e.defaultCar.transmissionDesc))]),e._v(" "),t("p",[t("span",[e._v(e._s(e.defaultCar.carNumber))]),t("span",[e._v("丨")]),t("span",[e._v(e._s(e.defaultCar.distance)+"km")])])])]),e._v(" "),e._m(0),e._v(" "),t("Scroll",{ref:"maintain",staticClass:"container"},[t("div",{staticClass:"wrapper"},[e._l(e.serverList,function(e,s){return t("serverModel",{key:s,attrs:{server:e,serverid:s}})}),e._v(" "),t("div",{staticClass:"add-server",on:{click:e._goAddServer}},[e._v("\n        添加新服务\n      ")]),e._v(" "),t("div",{staticClass:"server-tips"},[e._v("\n        不选服务可以下单后到店进行选择哦\n      ")])],2)]),e._v(" "),t("div",{staticClass:"place-order"},[t("div",{staticClass:"server"},[e._v("客服")]),e._v(" "),t("div",{staticClass:"tips"},[t("div",{staticClass:"nums"},[e._v("\n        不包含服务费\n      ")]),e._v(" "),t("div",{staticClass:"money"},[t("span",[e._v("共"+e._s(e.allServerNum)+"项服务")]),e._v(" "),t("span",[e._v(e._s("￥"+e.allPrice))])])]),e._v(" "),t("div",{staticClass:"btn",on:{click:e._goMaintainPreOrder}},[e._v("去预约")])])],1)},staticRenderFns:[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"service-flow"},[t("span",{staticClass:"bg bg1"},[e._v("选择服务")]),e._v(" "),t("span",[e._v("-")]),e._v(" "),t("span",{staticClass:"bg bg2"},[e._v("选择门店")]),e._v(" "),t("span",[e._v("-")]),e._v(" "),t("span",{staticClass:"bg bg3"},[e._v("确认订单")]),e._v(" "),t("span",[e._v("-")]),e._v(" "),t("span",{staticClass:"bg bg4"},[e._v("到店服务")])])}]};var u=t("VU/8")(d,m,!1,function(e){t("x+Zt")},"data-v-372a67c7",null);s.default=u.exports}});