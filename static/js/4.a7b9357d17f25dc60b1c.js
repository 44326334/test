webpackJsonp([4],{"8bIh":function(t,e){},"8gpQ":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4BAMAAABaqCYtAAAAFVBMVEX///+vr6/39/e3t7fZ2dnLy8vn5+dVrLz6AAAAZ0lEQVQ4y2MgDFQNBVGAcBBCjgkmh5BVgEuyCmKAALgkM6akAVySEcwXg3ASwRwB4iURgJqSqIEyKjkqOSo5ZCQpLROcVHBLijAwOOKUFGJgUCRDEmEsYQfhLVLxFsZ4i3G8FQBBAACIZyfZbVfRmQAAAABJRU5ErkJggg=="},"9bBU":function(t,e,s){s("mClu");var a=s("FeBl").Object;t.exports=function(t,e,s){return a.defineProperty(t,e,s)}},C4MV:function(t,e,s){t.exports={default:s("9bBU"),__esModule:!0}},bOdI:function(t,e,s){"use strict";e.__esModule=!0;var a,n=s("C4MV"),o=(a=n)&&a.__esModule?a:{default:a};e.default=function(t,e,s){return e in t?(0,o.default)(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}},iKdu:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("bOdI"),n=s.n(a),o=s("RkLV"),i={name:"checkrecord",components:{HEADER:s("Cz8s").a},data:function(){return n()({warpHeight:null,bodyHeight:null,title:"购买记录查询",code:this.$route.params.data,show:!0,count:"",timer:null,phone:{data:null,state:""}},"code",{data:null,state:""})},methods:{handleSendCode:function(){var t=this;if("success"!==this.phone.state)this.$toast({message:"请填写手机号",position:"top"});else{var e=this;Object(o.f)({mobile:this.phone.data}).then(function(t){e.$toast("短信已发送")}),this.timer||(this.count=60,this.show=!1,this.timer=setInterval(function(){t.count>0&&t.count<=60?t.count--:(t.show=!0,clearInterval(t.timer),t.timer=null)},1e3))}},handleSubmit:function(){var t=this;"success"===this.phone.state&&"success"===this.code.state?(this.$indicator.open(),Object(o.e)({mobile:this.phone.data,code:this.code.data}).then(function(e){0===e.data.code&&(t.$store.commit("checkrecord",e.data.list),setTimeout(function(){t.$router.push("/record"),t.$indicator.close()},1e3))}),this.$store.commit("buyCard",{phone:this.phone.data,code:this.code.data,payed:!1})):this.$toast({message:"请填写正确",position:"top"})}},computed:{carded:function(){return this.$store.state.carded}},watch:{"phone.data":function(){/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(this.phone.data)?this.phone.state="success":this.phone.state="error"},"code.data":function(){/^\d{6}$/.test(this.code.data)?this.code.state="success":this.code.state="error"},deep:!0},mounted:function(){this.$store.state.carded.phone&&(this.phone.data=this.$store.state.carded.phone),YBB.hybrid.navigation.setTitle({title:"购买记录查询"})}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"checkRecwarp",style:{height:t.warpHeight+"px"}},[a("div",{staticClass:"checkRecborder"},[a("div",{staticClass:"checkReccon"},[a("div",{staticClass:"checkRecform"},[a("mt-cell",{staticClass:"formcell"},[a("img",{attrs:{src:s("8gpQ"),alt:"",width:"20px",height:"20px"}}),t._v(" "),a("mt-field",{attrs:{type:"tel",state:t.phone.state,placeholder:"请输入手机号"},model:{value:t.phone.data,callback:function(e){t.$set(t.phone,"data",t._n(e))},expression:"phone.data"}},[a("mt-button",{staticClass:"codebtn",attrs:{size:"small",type:"primary",plain:"",disabled:!t.show},nativeOn:{click:function(e){return t.handleSendCode(e)}}},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t._v("获取验证码")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],staticClass:"count"},[t._v(t._s(t.count)+" s")])])],1)],1),t._v(" "),a("mt-cell",{staticClass:"formcell"},[a("img",{attrs:{src:s("im/i"),alt:"",width:"20px",height:"20px"}}),t._v(" "),a("mt-field",{staticClass:"validate",attrs:{type:"number",state:t.code.state,placeholder:"请输入验证码"},model:{value:t.code.data,callback:function(e){t.$set(t.code,"data",t._n(e))},expression:"code.data"}})],1),t._v(" "),a("div",{staticClass:"btncon"},[a("mt-button",{staticClass:"checkRecnextbtn",attrs:{size:"large",type:"primary"},nativeOn:{click:function(e){return t.handleSubmit(e)}}},[t._v("下一步")])],1)],1)])])])},staticRenderFns:[]};var r=s("VU/8")(i,c,!1,function(t){s("8bIh")},null,null);e.default=r.exports},"im/i":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAM1BMVEX///+vr6/4+Pi4uLje3t60tLT6+vrLy8vz8/Pl5eXGxsbn5+fPz8+9vb27u7uxsbHr6+u26kAyAAAA4klEQVRIx+2V2w6DIAyGRwvlMEDf/2ln5+KmmFC4MLr43/mHzx7Spo/TCHTIxuSgoQ2LalFsQJ9G/cg8pZxWG2lhPMVK2hE5nRRLFBM4z0Ev4QfOVlJnZG78fo9MRkHAoijNDog6k9ZWEvUn8KvyX6EK5umVW1tusnIV5J7S2iLuaxVUk/a8GzwUBIuqKrSws0wSlQtmlVB2A6IUxKJ+qf4JRA/gsR1EYpuwGfSz75tBmH1oBmn26bhU0bHtUASWQ4k9A/C2b/Dzopwd6AIDQLjGIp8WRCmH3Seg++h0n7nr6QXJDAhfTrBaZQAAAABJRU5ErkJggg=="},mClu:function(t,e,s){var a=s("kM2E");a(a.S+a.F*!s("+E39"),"Object",{defineProperty:s("evD5").f})}});
//# sourceMappingURL=4.a7b9357d17f25dc60b1c.js.map