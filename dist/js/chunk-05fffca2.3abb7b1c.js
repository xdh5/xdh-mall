(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05fffca2"],{"0653":function(t,i,e){"use strict";e("68ef")},1175:function(t,i,e){},"198e":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("van-icon",{staticClass:"goback",attrs:{name:"arrow-left"},on:{click:t.goBack}})},a=[],s={methods:{goBack:function(){this.$router.go(-1)}}},o=s,c=(e("7384"),e("2877")),r=Object(c["a"])(o,n,a,!1,null,"3f54797e",null);i["a"]=r.exports},"2bb1":function(t,i,e){"use strict";var n=e("1988"),a=e("d282"),s=Object(a["a"])("swipe-item"),o=s[0],c=s[1];i["a"]=o({data:function(){return{offset:0}},beforeCreate:function(){this.$parent.swipes.push(this)},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)},render:function(t){var i=this.$parent,e=i.vertical,a=i.computedWidth,s=i.computedHeight,o={width:a+"px",height:e?s+"px":"100%",transform:"translate"+(e?"Y":"X")+"("+this.offset+"px)"};return t("div",{class:c(),style:o,on:Object(n["a"])({},this.$listeners)},[this.slots()])}})},"34e9":function(t,i,e){"use strict";var n=e("2638"),a=e.n(n),s=e("d282"),o=e("ba31"),c=Object(s["a"])("cell-group"),r=c[0],u=c[1];function l(t,i,e,n){var s=t("div",a()([{class:[u(),{"van-hairline--top-bottom":i.border}]},Object(o["b"])(n,!0)]),[e.default&&e.default()]);return i.title?t("div",[t("div",{class:u("title")},[i.title]),s]):s}l.props={title:String,border:{type:Boolean,default:!0}},i["a"]=r(l)},"35ec":function(t,i,e){"use strict";var n=e("4284"),a=e.n(n);a.a},4284:function(t,i,e){},4598:function(t,i,e){"use strict";(function(t){e.d(i,"a",function(){return u});var n=e("a142"),a=Date.now();function s(t){var i=Date.now(),e=Math.max(0,16-(i-a)),n=setTimeout(t,e);return a=i+e,n}var o=n["d"]?t:window,c=o.requestAnimationFrame||s;o.cancelAnimationFrame||o.clearTimeout;function r(t){return c.call(o,t)}function u(t){r(function(){r(t)})}}).call(this,e("c8ba"))},"482d":function(t,i,e){"use strict";function n(t,i,e){return Math.min(Math.max(t,i),e)}e.d(i,"a",function(){return n})},"4b0a":function(t,i,e){"use strict";e("68ef"),e("786d")},"4cf9":function(t,i,e){},5596:function(t,i,e){"use strict";var n=e("d282"),a=e("1325"),s=e("3875"),o=e("5fbe"),c=e("4598"),r=e("482d"),u=Object(n["a"])("swipe"),l=u[0],h=u[1];i["a"]=l({mixins:[s["a"],Object(o["a"])(function(t,i){t(window,"resize",this.onResize,!0),i?this.initialize():this.clear()})],props:{width:Number,height:Number,autoplay:Number,vertical:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:Number,default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:Number,default:0},showIndicators:{type:Boolean,default:!0}},data:function(){return{computedWidth:0,computedHeight:0,offset:0,active:0,deltaX:0,deltaY:0,swipes:[],swiping:!1}},watch:{swipes:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t?this.autoPlay():this.clear()}},computed:{count:function(){return this.swipes.length},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,i=this.vertical?"height":"width",e=this.vertical?"width":"height";return t={},t[i]=this.trackSize+"px",t[e]=this[e]?this[e]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){var t=this.$el.getBoundingClientRect();return(this.vertical?t.height:t.width)-this.size*this.count}},methods:{initialize:function(t){if(void 0===t&&(t=this.initialSwipe),clearTimeout(this.timer),this.$el){var i=this.$el.getBoundingClientRect();this.computedWidth=this.width||i.width,this.computedHeight=this.height||i.height}this.swiping=!0,this.active=t,this.offset=this.count>1?-this.size*this.active:0,this.swipes.forEach(function(t){t.offset=0}),this.autoPlay()},onResize:function(){this.initialize(this.activeIndicator)},onTouchStart:function(t){this.touchable&&(this.clear(),this.swiping=!0,this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(a["c"])(t,!0),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){if(this.delta&&this.isCorrectDirection){var t=this.vertical?this.offsetY:this.offsetX;this.move({pace:t>0?this.delta>0?-1:1:0,emitChange:!0})}this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var i=this.active,e=this.count;return t?this.loop?Object(r["a"])(i+t,-1,e):Object(r["a"])(i+t,0,e-1):i},getTargetOffset:function(t,i){var e=t*this.size;this.loop||(e=Math.min(e,-this.minOffset));var n=Math.round(i-e);return this.loop||(n=Object(r["a"])(n,this.minOffset,0)),n},move:function(t){var i=t.pace,e=void 0===i?0:i,n=t.offset,a=void 0===n?0:n,s=t.emitChange,o=this.loop,c=this.count,r=this.active,u=this.swipes,l=this.trackSize,h=this.minOffset;if(!(c<=1)){var f=this.getTargetActive(e),d=this.getTargetOffset(f,a);if(o){if(u[0]){var v=d<h;u[0].offset=v?l:0}if(u[c-1]){var p=d>0;u[c-1].offset=p?-l:0}}this.active=f,this.offset=d,s&&f!==r&&this.$emit("change",this.activeIndicator)}},swipeTo:function(t,i){var e=this;void 0===i&&(i={}),this.swiping=!0,this.resetTouchStatus(),this.correctPosition(),Object(c["a"])(function(){e.move({pace:t%e.count-e.active,emitChange:!0}),i.immediate?Object(c["a"])(function(){e.swiping=!1}):e.swiping=!1})},correctPosition:function(){this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,i=this.autoplay;i&&this.count>1&&(this.clear(),this.timer=setTimeout(function(){t.swiping=!0,t.resetTouchStatus(),t.correctPosition(),Object(c["a"])(function(){t.swiping=!1,t.move({pace:1,emitChange:!0}),t.autoPlay()})},i))},renderIndicator:function(){var t=this,i=this.$createElement,e=this.count,n=this.activeIndicator,a=this.slots("indicator");return a||(this.showIndicators&&e>1?i("div",{class:h("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(e)).map(function(e,a){return i("i",{class:h("indicator",{active:a===n}),style:a===n?t.indicatorStyle:null})})]):void 0)}},render:function(t){return t("div",{class:h()},[t("div",{ref:"track",style:this.trackStyle,class:h("track"),on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[this.slots()]),this.renderIndicator()])}})},"5fbe":function(t,i,e){"use strict";e.d(i,"a",function(){return a});var n=e("1325");function a(t){function i(){this.binded||(t.call(this,n["b"],!0),this.binded=!0)}function e(){this.binded&&(t.call(this,n["a"],!1),this.binded=!1)}return{mounted:i,activated:i,deactivated:e,beforeDestroy:e}}},7384:function(t,i,e){"use strict";var n=e("b3ca"),a=e.n(n);a.a},7460:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"detail"},[t.loading?e("div",{staticClass:"center"},[e("van-loading",{attrs:{type:"spinner",color:"#1989fa"}})],1):e("div",[e("GoBack"),e("van-swipe",{staticClass:"goods-swipe",attrs:{autoplay:4e3}},t._l(3,function(i,n){return e("van-swipe-item",{key:n},[e("van-image",{attrs:{fit:"cover",src:t.good.picture.url}})],1)}),1),e("van-cell-group",[e("van-cell",[e("div",{staticClass:"goods-title"},[t._v(t._s(t.good.name))]),e("div",{staticClass:"goods-price"},[t._v("￥"+t._s(t.good.price))])]),e("van-cell",{staticClass:"goods-express"},[e("van-col",{attrs:{span:"10"}},[t._v("运费："+t._s(t.good.fare))]),e("van-col",{attrs:{span:"14"}},[t._v("销量："+t._s(t.good.saleVolume))])],1)],1),e("van-cell-group",{staticClass:"goods-cell-group"},[e("van-cell",{attrs:{value:"进入店铺",icon:"shop-o","is-link":""},on:{click:t.sorry}},[e("template",{slot:"title"},[e("span",{staticClass:"van-cell-text"},[t._v("蛋黄之家")]),e("van-tag",{staticClass:"goods-tag",attrs:{type:"danger"}},[t._v("官方")])],1)],2),e("van-cell",{attrs:{title:"线下门店",icon:"location-o","is-link":""},on:{click:t.sorry}})],1),e("van-cell-group",{staticClass:"goods-cell-group"},[e("van-cell",{attrs:{title:"查看商品详情","is-link":""},on:{click:t.sorry}})],1),e("van-goods-action",[e("van-goods-action-icon",{attrs:{icon:"chat-o"},on:{click:t.sorry}},[t._v("\n                客服\n            ")]),e("van-goods-action-icon",{attrs:{icon:"cart-o"},on:{click:function(i){return t.$router.push("/cart")}}},[t._v("\n                购物车\n            ")]),e("van-goods-action-button",{attrs:{type:"warning"},on:{click:t.changeCart}},[t._v("\n                加入购物车\n            ")]),e("van-goods-action-button",{attrs:{type:"danger"},on:{click:t.sorry}},[t._v("\n                立即购买\n            ")])],1)],1)])},a=[],s=(e("e7e5"),e("d399")),o=e("bd86"),c=(e("68ef"),e("09fe"),e("1175"),e("1988")),r=e("2638"),u=e.n(r),l=e("d282"),h=e("b650"),f=e("ba31"),d=e("48f4"),v=Object(l["a"])("goods-action-button"),p=v[0],b=v[1];function g(t,i,e,n){function a(t){Object(f["a"])(n,"click",t),Object(d["a"])(n)}return t(h["a"],u()([{attrs:{square:!0,size:"large",type:i.type,loading:i.loading,disabled:i.disabled},class:b(),on:{click:a}},Object(f["b"])(n)]),[e.default?e.default():i.text])}g.props=Object(c["a"])({},d["c"],{type:String,text:String,loading:Boolean,disabled:Boolean});var m=p(g),y=(e("80ee"),e("ad06")),O=Object(l["a"])("goods-action-icon"),w=O[0],j=O[1];function k(t,i,e,n){function a(t){Object(f["a"])(n,"click",t),Object(d["a"])(n)}return t("div",u()([{attrs:{role:"button",tabindex:"0"},class:j(),on:{click:a}},Object(f["b"])(n)]),[e.icon?t("div",{class:j("icon")},[e.icon()]):t(y["a"],{class:[j("icon"),i.iconClass],attrs:{tag:"div",info:i.info,name:i.icon}}),e.default?e.default():i.text])}k.props=Object(c["a"])({},d["c"],{text:String,icon:String,info:[Number,String],iconClass:null});var C=w(k),S=(e("4cf9"),Object(l["a"])("goods-action")),x=S[0],$=S[1];function B(t,i,e,n){return t("div",u()([{class:$({"safe-area-inset-bottom":i.safeAreaInsetBottom})},Object(f["b"])(n,!0)]),[e.default&&e.default()])}B.props={safeAreaInsetBottom:Boolean};var z,_=x(B),T=(e("4b0a"),e("2bb1")),I=(e("7844"),e("5596")),N=(e("0653"),e("34e9")),D=(e("c194"),e("7744")),P=(e("81e6"),e("9ffb")),q=(e("9b7e"),e("a3e2")),A=e("198e"),M={components:(z={},Object(o["a"])(z,q["a"].name,q["a"]),Object(o["a"])(z,P["a"].name,P["a"]),Object(o["a"])(z,D["a"].name,D["a"]),Object(o["a"])(z,N["a"].name,N["a"]),Object(o["a"])(z,I["a"].name,I["a"]),Object(o["a"])(z,T["a"].name,T["a"]),Object(o["a"])(z,_.name,_),Object(o["a"])(z,C.name,C),Object(o["a"])(z,m.name,m),Object(o["a"])(z,"GoBack",A["a"]),z),data:function(){return{loading:!1,finish:!0,good:{},cartId:null,cartQuantity:0}},methods:{getList:function(){return this.$axios.get("/classes/Goods/".concat(this.$route.params.id))},getCart:function(){return this.$axios.get("/classes/cart",{params:{where:{good_id:this.$route.params.id,username:this.$store.state.username}}})},addCart:function(){var t=this;this.finish=!1,this.$axios.post("/classes/cart",{good_id:this.good.objectId,name:this.good.name,url:this.good.picture.url,price:this.good.price,username:this.$store.state.username,quantity:1}).then(function(i){t.cartId=i.objectId,t.cartQuantity=1,t.finish=!0,Object(s["a"])("已加入购物车~")}).catch(function(i){t.finish=!0,Object(s["a"])("加入购物车失败，请重试")})},putCart:function(){var t=this;this.finish=!1,this.cartQuantity+=1,this.$axios.put("/classes/cart/".concat(this.cartId),{quantity:this.cartQuantity}).then(function(i){t.finish=!0,Object(s["a"])("已加入购物车~")}).catch(function(i){t.finish=!0,t.cartQuantity-=1,Object(s["a"])("加入购物车失败，请重试")})},changeCart:function(){this.$store.state.token?this.finish&&(this.cartId?this.putCart():this.addCart()):this.$router.push("/user/login")},sorry:function(){Object(s["a"])("暂无后续逻辑~")}},created:function(){var t=this;this.loading=!0,this.$axios.all([this.getList(),this.getCart()]).then(this.$axios.spread(function(i,e){t.$nextTick(function(){t.good=i}),e.results[0]&&(t.cartId=e.results[0].objectId,t.cartQuantity=e.results[0].quantity)})).catch(function(t){}).finally(function(){document.title=t.good.name,t.loading=!1})}},E=M,Q=(e("35ec"),e("2877")),L=Object(Q["a"])(E,n,a,!1,null,"6f8335a4",null);i["default"]=L.exports},7744:function(t,i,e){"use strict";var n=e("1988"),a=e("2638"),s=e.n(a),o=e("d282"),c=e("a142"),r=e("dfaf"),u=e("ba31"),l=e("48f4"),h=e("ad06"),f=Object(o["a"])("cell"),d=f[0],v=f[1];function p(t,i,e,n){var a=i.icon,o=i.size,r=i.title,f=i.label,d=i.value,p=i.isLink,b=i.arrowDirection,g=e.title||Object(c["b"])(r),m=e.default||Object(c["b"])(d),y=e.label||Object(c["b"])(f),O=y&&t("div",{class:[v("label"),i.labelClass]},[e.label?e.label():f]),w=g&&t("div",{class:[v("title"),i.titleClass],style:i.titleStyle},[e.title?e.title():t("span",[r]),O]),j=m&&t("div",{class:[v("value",{alone:!e.title&&!r}),i.valueClass]},[e.default?e.default():t("span",[d])]),k=e.icon?e.icon():a&&t(h["a"],{class:v("left-icon"),attrs:{name:a}}),C=e["right-icon"],S=C?C():p&&t(h["a"],{class:v("right-icon"),attrs:{name:b?"arrow-"+b:"arrow"}});function x(t){Object(u["a"])(n,"click",t),Object(l["a"])(n)}var $={center:i.center,required:i.required,borderless:!i.border,clickable:p||i.clickable};return o&&($[o]=o),t("div",s()([{class:v($),on:{click:x}},Object(u["b"])(n)]),[k,w,j,S,e.extra&&e.extra()])}p.props=Object(n["a"])({},r["a"],{},l["c"]),i["a"]=d(p)},7844:function(t,i,e){"use strict";e("68ef"),e("8270")},"786d":function(t,i,e){},"7b0a":function(t,i,e){},"80ee":function(t,i,e){},"81e6":function(t,i,e){"use strict";e("68ef"),e("7b0a")},8270:function(t,i,e){},"9b7e":function(t,i,e){},"9ffb":function(t,i,e){"use strict";var n=e("d282"),a=Object(n["a"])("col"),s=a[0],o=a[1];i["a"]=s({props:{span:[Number,String],offset:[Number,String],tag:{type:String,default:"div"}},computed:{gutter:function(){return this.$parent&&Number(this.$parent.gutter)||0},style:function(){var t=this.gutter/2+"px";return this.gutter?{paddingLeft:t,paddingRight:t}:{}}},render:function(t){var i,e=this.span,n=this.offset;return t(this.tag,{class:o((i={},i[e]=e,i["offset-"+n]=n,i)),style:this.style},[this.slots()])}})},a3e2:function(t,i,e){"use strict";var n=e("2638"),a=e.n(n),s=e("d282"),o=e("ba31"),c=Object(s["a"])("tag"),r=c[0],u=c[1];function l(t,i,e,n){var s,c=i.type,r=i.mark,l=i.plain,h=i.color,f=i.round,d=i.size,v=l?"color":"backgroundColor",p=(s={},s[v]=h,s);i.textColor&&(p.color=i.textColor);var b={mark:r,plain:l,round:f};return d&&(b[d]=d),t("span",a()([{style:p,class:[u([b,c]),{"van-hairline--surround":l}]},Object(o["b"])(n,!0)]),[e.default&&e.default()])}l.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,type:{type:String,default:"default"}},i["a"]=r(l)},b3ca:function(t,i,e){},c194:function(t,i,e){"use strict";e("68ef"),e("09fe")},dfaf:function(t,i,e){"use strict";e.d(i,"a",function(){return n});var n={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}}}}]);
//# sourceMappingURL=chunk-05fffca2.3abb7b1c.js.map