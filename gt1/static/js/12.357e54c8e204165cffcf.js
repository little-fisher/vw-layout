webpackJsonp([12],{OfJM:function(t,e,a){"use strict";var i=a("Dd8w"),n=a.n(i),s=a("NYxO"),r={name:"vehicleCertification",mixins:[a("F4+m").b],props:{vinType:{type:Number}},data:function(){return{vin:"",carinfo:{},promise:null}},methods:n()({validateVin:function(){this.vin=this.vin.toUpperCase()},getCarInfoByVin:function(){var t=this;17===this.vin.length?this.$get(this.f6Url+"/api/clientUserCar/getModelByVin",this.headers_2,function(e){if(200===e.code&&"0000"===e.data.result){var a=e.data.detail,i=t.getCarLogo(a.brandName);if(-1===t.vinType)t.addMyCar(a,i);else{var n=t.vinType,s={carBrandLogo:a.exhaustVolume+"ꡖ"+a.manufacturerName+"ꡖ"+a.year+"ꡖ"+t.myCar[n].time+"ꡖ"+a.eVehicleSystem+"ꡖ"+a.transmissionDesc+"ꡖ"+a.brandName+"ꡖ"+i,carId:a.mid,carNumber:t.myCar[n].carNumber,carVin:t.vin,clientAppId:t.myCar[n].clientAppId,clientUserId:t.myCar[n].clientUserId,defaultFlag:t.myCar[n].defaultFlag,distance:t.myCar[n].distance,externalUserId:t.myCar[n].externalUserId,userCarId:t.myCar[n].userCarId,userId:t.myCar[n].userId};t.modifyCar(s,function(){t.$router.back()})}}else 200===e.code&&"1004"===e.data.result&&t.$Toast({position:"bottom",message:e.data.note})},{vin:this.vin}):this.$Toast({position:"bottom",message:"VIN码不是17位"})},getCarLogo:function(t){var e="";return this.carBrand.forEach(function(a){a.brandName===t&&(e=a.imageSrc)}),e},addMyCar:function(t,e){this.setAddCar({brandName:t.brandName,eVehicleSystem:t.eVehicleSystem,exhaustVolume:t.exhaustVolume,imageSrc:e,manufacturerName:t.manufacturerName,mid:t.mid,pbid:t.pbid,sbid:t.sbid,sid:t.sid,transmissionDesc:t.transmissionDesc,year:t.year}),this.$router.push("/addcar-idcard")}},Object(s.d)({setAddCar:"SET_ADDCAR"})),computed:n()({},Object(s.c)(["carBrand"]))},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vehicle-certification",attrs:{flexContainer:""}},[t._m(0),t._v(" "),a("div",{staticClass:"car-info"},[a("div",{staticClass:"info-2"},[a("span",[t._v("VIN号")]),t._v(" "),a("div",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.vin,expression:"vin"}],attrs:{type:"text",placeholder:"请输入VIN码",maxlength:"17"},domProps:{value:t.vin},on:{change:t.validateVin,input:function(e){e.target.composing||(t.vin=e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"submit-btn"},[a("div",{staticClass:"btn",on:{click:this.getCarInfoByVin}},[a("span",[t._v("开始认证")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"example"},[e("div",{staticClass:"img"}),this._v(" "),e("p",[this._v("行驶证信息仅用于认证，我们将为您严格保密")])])}]};var o=a("VU/8")(r,c,!1,function(t){a("dj4v")},"data-v-e4ad558c",null);e.a=o.exports},dj4v:function(t,e){},ni8f:function(t,e){},zgon:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"carOwner",data:function(){return{vinType:0}},methods:{_goBack:function(){this.$router.go(-1)}},mounted:function(){this.vinType=parseInt(this.$route.query.carid)},components:{vehicleCertification:a("OfJM").a}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"car-owner",attrs:{flexContainer:""}},[e("div",{staticClass:"action-bar"},[e("div",{staticClass:"go-back",on:{click:this._goBack}}),this._v(" "),e("div",{staticClass:"font"},[this._v("车主认证")])]),this._v(" "),e("div",{staticClass:"container"},[e("vehicleCertification",{attrs:{"vin-type":this.vinType}})],1)])},staticRenderFns:[]};var s=a("VU/8")(i,n,!1,function(t){a("ni8f")},"data-v-059dee4d",null);e.default=s.exports}});