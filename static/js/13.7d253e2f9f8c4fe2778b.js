webpackJsonp([13],{"8vg+":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={name:"record",components:{HEADER:e("Cz8s").a},data:function(){return{warpHeight:null,bodyHeight:null,recordlist:this.$store.state.recordlist,fontGrey:"fontGrey"}},methods:{dateForm:function(t){return t?t.substring(0,10):""},onBtn:function(t){var s=this;this.$toast({message:"复制成功",position:"top"}),this.$indicator.open("跳转中..."),setTimeout(function(){s.$indicator.close(),s.$router.push({name:"consume",params:{path:s.$router.currentRoute.path,orderNo:t}})},1e3)}},mounted:function(){this.warpHeight=this.bodyHeight=window.screen.height,YBB.hybrid.navigation.setTitle({title:"购买记录"})}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"recordwarp",style:{height:t.warpHeight+"px"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:"{}"!==JSON.stringify(t.recordlist),expression:"JSON.stringify(recordlist) !== '{}'"}],staticClass:"recordcon"},[e("h3",[t._v("【 购买记录 】")]),t._v(" "),e("ul",{staticClass:"recordlist"},t._l(t.recordlist,function(s){return e("li",{key:s.coupons,class:2===s.status?t.fontGrey:""},[e("div",{staticClass:"textcon"},[e("p",{staticClass:"resStatus"},[t._v("卡券编号："+t._s(s.coupon)+"\n          ")]),t._v(" "),e("p",{staticClass:"resStatus"},[t._v("卡券礼包："+t._s(s.productName)+" X"+t._s(s.num)+"\n          ")]),t._v(" "),e("p",[t._v("购买日期："+t._s(t.dateForm(s.orderTime)))])]),t._v(" "),e("div",{staticClass:"btncon"},[e("mt-button",{directives:[{name:"show",rawName:"v-show",value:2!==s.status,expression:"item.status !== 2"}],attrs:{size:"small",type:"primary",plain:""},on:{click:function(e){t.onBtn(s.coupon)}}},[t._v("前往兑换")]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:2===s.status,expression:"item.status === 2"}]},[t._v(t._s(s.statusText))])],1)])}))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"{}"==JSON.stringify(t.recordlist),expression:"JSON.stringify(recordlist) == '{}'"}],staticClass:"nonecon"},[e("p",[t._v("当前没有购买记录")])])])},staticRenderFns:[]};var n=e("VU/8")(i,r,!1,function(t){e("KgiJ")},null,null);s.default=n.exports},KgiJ:function(t,s){}});
//# sourceMappingURL=13.7d253e2f9f8c4fe2778b.js.map