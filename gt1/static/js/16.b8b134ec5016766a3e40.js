webpackJsonp([16],{Ok8H:function(i,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={name:"my-info-mask",props:{id:{type:Number,default:0},info:{type:String}},data:function(){return{modifyinfo:""}},computed:{showClear:function(){return 0===this.modifyinfo.length?0:1},showTips:function(){var i="";switch(this.id){case 1:i="请输入昵称  不得含有特殊符号";break;case 2:i="请输入手机号";break;case 3:i="请输入真实姓名"}return i}},mounted:function(){this.modifyinfo=this.info},methods:{_goBack:function(){this.$emit("closemask",{modify:!1})},_clearInput:function(){this.modifyinfo=""},_inputValue:function(i){if(null===i.data&&this.modifyinfo.length>0)return this.modifyinfo.length-1},_modifySuccess:function(){""!==this.modifyinfo||1!==this.id&&3!==this.id?2!==this.id||/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17([0-1,3]|[6-8]))|(18[0-9]))\d{8}$/.test(this.modifyinfo)?this.$emit("closemask",{modify:!0,info:this.modifyinfo}):this.$Toast({message:"手机号码格式错误！",position:"top"}):this.$Toast({message:"信息不能为空！",position:"top"})}}},o={render:function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("transition",{attrs:{name:"showinfo"}},[n("div",{staticClass:"my-info-mask",on:{click:i._goBack}},[n("div",{staticClass:"mask-con",on:{click:function(i){i.preventDefault(),i.stopPropagation()}}},[n("div",{staticClass:"text"},[n("input",{directives:[{name:"model",rawName:"v-model",value:i.modifyinfo,expression:"modifyinfo"}],attrs:{type:"text",name:"",placeholder:"请输入信息"},domProps:{value:i.modifyinfo},on:{input:[function(t){t.target.composing||(i.modifyinfo=t.target.value)},i._inputValue]}}),i._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:i.showClear,expression:"showClear"}],staticClass:"clear",on:{click:i._clearInput}})]),i._v(" "),n("p",{staticClass:"tips"},[i._v("\n        "+i._s(i.showTips)+"\n      ")])]),i._v(" "),n("div",{staticClass:"submit-btn",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),i._modifySuccess(t)}}},[i._v("确认")])])])},staticRenderFns:[]};var a={name:"myInfo",data:function(){return{modifyInfo:!1,info:{name:"朱佩琪",nickname:"朕最爱朱佩琪",phone:"18772815385"},id:0}},computed:{hidePhone:function(){return this.info.phone.substr(0,3)+"****"+this.info.phone.substr(7)},modifyType:function(){var i="";switch(this.id){case 1:i=this.info.nickname;break;case 2:i=this.info.phone;break;case 3:i=this.info.name}return i}},methods:{_goBack:function(){this.$router.go(-1)},_modifyInfo:function(i){this.id=i,this.modifyInfo=!0},_closeMask:function(i){if(this.modifyInfo=!1,i.modify)switch(this.id){case 1:this.info.nickname=i.info;break;case 2:this.info.phone=i.info;break;case 3:this.info.name=i.info}}},components:{myInfoMask:n("Z0/y")(s,o,!1,function(i){n("rey6")},"data-v-5353ac0e",null).exports}},e={render:function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("div",{staticClass:"my-info",attrs:{flexContainer:""}},[i.modifyInfo?n("myInfoMask",{attrs:{id:i.id,info:i.modifyType},on:{closemask:i._closeMask}}):i._e(),i._v(" "),n("div",{staticClass:"action-bar"},[n("div",{staticClass:"go-back",on:{click:i._goBack}}),i._v(" "),n("div",{staticClass:"font"},[i._v("个人资料")])]),i._v(" "),n("div",{staticClass:"container"},[i._m(0),i._v(" "),n("div",{staticClass:"my_nickname"},[n("span",[i._v("昵称")]),i._v(" "),n("div",{staticClass:"nickname",on:{click:function(t){i._modifyInfo(1)}}},[i._v("\n        "+i._s(i.info.nickname)+"\n      ")])]),i._v(" "),n("div",{staticClass:"my_phone",on:{click:function(t){i._modifyInfo(2)}}},[n("span",[i._v("手机号")]),i._v(" "),n("div",{staticClass:"phone"},[i._v("\n        "+i._s(i.hidePhone)+"\n      ")])]),i._v(" "),n("div",{staticClass:"my_name",on:{click:function(t){i._modifyInfo(3)}}},[n("span",[i._v("真实姓名")]),i._v(" "),n("div",{staticClass:"name"},[i._v("\n        "+i._s(i.info.name)+"\n      ")])])])],1)},staticRenderFns:[function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"my_avatar"},[t("div",{staticClass:"avatar"},[t("img",{attrs:{src:n("yz7R"),alt:""}})]),this._v(" "),t("div",{staticClass:"title"},[this._v("\n        更换头像\n      ")])])}]};var c=n("Z0/y")(a,e,!1,function(i){n("gSOq")},"data-v-0a6597be",null);t.default=c.exports},gSOq:function(i,t){},rey6:function(i,t){}});
//# sourceMappingURL=16.b8b134ec5016766a3e40.js.map