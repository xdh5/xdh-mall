(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a6a2b652"],{"1f65":function(t,i,e){},"2bb1":function(t,i,e){"use strict";var n=e("1988"),s=e("d282"),a=Object(s["a"])("swipe-item"),o=a[0],c=a[1];i["a"]=o({data:function(){return{offset:0}},beforeCreate:function(){this.$parent.swipes.push(this)},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)},render:function(t){var i=this.$parent,e=i.vertical,s=i.computedWidth,a=i.computedHeight,o={width:s+"px",height:e?a+"px":"100%",transform:"translate"+(e?"Y":"X")+"("+this.offset+"px)"};return t("div",{class:c(),style:o,on:Object(n["a"])({},this.$listeners)},[this.slots()])}})},3875:function(t,i,e){"use strict";e.d(i,"a",function(){return o});var n=e("2b0e"),s=10;function a(t,i){return t>i&&t>s?"horizontal":i>t&&i>s?"vertical":""}var o=n["default"].extend({data:function(){return{direction:""}},methods:{touchStart:function(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove:function(t){var i=t.touches[0];this.deltaX=i.clientX-this.startX,this.deltaY=i.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||a(this.offsetX,this.offsetY)},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0}}})},4598:function(t,i,e){"use strict";(function(t){e.d(i,"a",function(){return h});var n=e("a142"),s=Date.now();function a(t){var i=Date.now(),e=Math.max(0,16-(i-s)),n=setTimeout(t,e);return s=i+e,n}var o=n["d"]?t:window,c=o.requestAnimationFrame||a;o.cancelAnimationFrame||o.clearTimeout;function r(t){return c.call(o,t)}function h(t){r(function(){r(t)})}}).call(this,e("c8ba"))},"482d":function(t,i,e){"use strict";function n(t,i,e){return Math.min(Math.max(t,i),e)}e.d(i,"a",function(){return n})},"4b0a":function(t,i,e){"use strict";e("68ef"),e("786d")},5596:function(t,i,e){"use strict";var n=e("d282"),s=e("1325"),a=e("3875"),o=e("5fbe"),c=e("4598"),r=e("482d"),h=Object(n["a"])("swipe"),u=h[0],l=h[1];i["a"]=u({mixins:[a["a"],Object(o["a"])(function(t,i){t(window,"resize",this.onResize,!0),i?this.initialize():this.clear()})],props:{width:Number,height:Number,autoplay:Number,vertical:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:Number,default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:Number,default:0},showIndicators:{type:Boolean,default:!0}},data:function(){return{computedWidth:0,computedHeight:0,offset:0,active:0,deltaX:0,deltaY:0,swipes:[],swiping:!1}},watch:{swipes:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t?this.autoPlay():this.clear()}},computed:{count:function(){return this.swipes.length},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,i=this.vertical?"height":"width",e=this.vertical?"width":"height";return t={},t[i]=this.trackSize+"px",t[e]=this[e]?this[e]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){var t=this.$el.getBoundingClientRect();return(this.vertical?t.height:t.width)-this.size*this.count}},methods:{initialize:function(t){if(void 0===t&&(t=this.initialSwipe),clearTimeout(this.timer),this.$el){var i=this.$el.getBoundingClientRect();this.computedWidth=this.width||i.width,this.computedHeight=this.height||i.height}this.swiping=!0,this.active=t,this.offset=this.count>1?-this.size*this.active:0,this.swipes.forEach(function(t){t.offset=0}),this.autoPlay()},onResize:function(){this.initialize(this.activeIndicator)},onTouchStart:function(t){this.touchable&&(this.clear(),this.swiping=!0,this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(s["c"])(t,!0),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){if(this.delta&&this.isCorrectDirection){var t=this.vertical?this.offsetY:this.offsetX;this.move({pace:t>0?this.delta>0?-1:1:0,emitChange:!0})}this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var i=this.active,e=this.count;return t?this.loop?Object(r["a"])(i+t,-1,e):Object(r["a"])(i+t,0,e-1):i},getTargetOffset:function(t,i){var e=t*this.size;this.loop||(e=Math.min(e,-this.minOffset));var n=Math.round(i-e);return this.loop||(n=Object(r["a"])(n,this.minOffset,0)),n},move:function(t){var i=t.pace,e=void 0===i?0:i,n=t.offset,s=void 0===n?0:n,a=t.emitChange,o=this.loop,c=this.count,r=this.active,h=this.swipes,u=this.trackSize,l=this.minOffset;if(!(c<=1)){var f=this.getTargetActive(e),d=this.getTargetOffset(f,s);if(o){if(h[0]){var v=d<l;h[0].offset=v?u:0}if(h[c-1]){var p=d>0;h[c-1].offset=p?-u:0}}this.active=f,this.offset=d,a&&f!==r&&this.$emit("change",this.activeIndicator)}},swipeTo:function(t,i){var e=this;void 0===i&&(i={}),this.swiping=!0,this.resetTouchStatus(),this.correctPosition(),Object(c["a"])(function(){e.move({pace:t%e.count-e.active,emitChange:!0}),i.immediate?Object(c["a"])(function(){e.swiping=!1}):e.swiping=!1})},correctPosition:function(){this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,i=this.autoplay;i&&this.count>1&&(this.clear(),this.timer=setTimeout(function(){t.swiping=!0,t.resetTouchStatus(),t.correctPosition(),Object(c["a"])(function(){t.swiping=!1,t.move({pace:1,emitChange:!0}),t.autoPlay()})},i))},renderIndicator:function(){var t=this,i=this.$createElement,e=this.count,n=this.activeIndicator,s=this.slots("indicator");return s||(this.showIndicators&&e>1?i("div",{class:l("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(e)).map(function(e,s){return i("i",{class:l("indicator",{active:s===n}),style:s===n?t.indicatorStyle:null})})]):void 0)}},render:function(t){return t("div",{class:l()},[t("div",{ref:"track",style:this.trackStyle,class:l("track"),on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[this.slots()]),this.renderIndicator()])}})},"5fbe":function(t,i,e){"use strict";e.d(i,"a",function(){return s});var n=e("1325");function s(t){function i(){this.binded||(t.call(this,n["b"],!0),this.binded=!0)}function e(){this.binded&&(t.call(this,n["a"],!1),this.binded=!1)}return{mounted:i,activated:i,deactivated:e,beforeDestroy:e}}},7844:function(t,i,e){"use strict";e("68ef"),e("8270")},"786d":function(t,i,e){},"7c7f":function(t,i,e){},8270:function(t,i,e){},"85e8":function(t,i,e){"use strict";var n=e("1f65"),s=e.n(n);s.a},d15f:function(t,i,e){t.exports=e.p+"img/banner1.4fd8935f.jpg"},f75a:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"wrapper"},[n("van-swipe",{attrs:{autoplay:4e3,"indicator-color":"white"}},t._l(3,function(t,i){return n("van-swipe-item",{key:i},[n("img",{attrs:{src:e("d15f")}})])}),1),n("van-divider",[t._v("猜你喜欢")]),n("div",{staticClass:"may-like"},[0!==t.totalData.length||t.loading?t._e():n("div",{staticClass:"tipImage"},[n("img",{attrs:{src:e("f3f6"),alt:"暂无数据"}})]),n("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.getList,expression:"getList"}],staticClass:"clearfix",attrs:{"infinite-scroll-disabled":"forbidInfinite","infinite-scroll-distance":"10"}},t._l(t.totalData,function(i,e){return n("li",{key:e,staticClass:"goods-item"},[n("div",{staticClass:"img-box"},[n("router-link",{attrs:{to:{name:"detail",params:{id:i.objectId}}}},[n("van-image",{attrs:{fit:"cover","lazy-load":"",src:i.picture.url},scopedSlots:t._u([{key:"loading",fn:function(){return[t._v("加载中")]},proxy:!0}],null,!0)})],1)],1),n("div",{staticClass:"detail"},[n("div",{staticClass:"title"},[t._v(t._s(i.name))]),n("div",{staticClass:"price"},[t._v("￥"+t._s(i.price))])])])}),0),n("van-loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"tipImage",attrs:{type:"spinner",color:"#1989fa"}})],1),0===t.currentData.length&&t.totalData.length>0?n("div",{staticClass:"information"},[t._m(0)]):t._e()],1)},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("dl",[e("dt",[t._v("联系作者")]),e("dd",[t._v("Email: "),e("a",{attrs:{href:"mailto:zhaozy086@163.com"}},[t._v("zhaozy086@163.com")])]),e("dd",[t._v("Github: "),e("a",{attrs:{href:"https://github.com/xdh5",target:"_blank"}},[t._v("https://github.com/xdh5")])])])}],a=e("bd86"),o=(e("68ef"),e("7c7f"),e("2638")),c=e.n(o),r=e("d282"),h=e("ba31"),u=Object(r["a"])("divider"),l=u[0],f=u[1];function d(t,i,e,n){var s;return t("div",c()([{style:{borderColor:i.borderColor},class:f((s={dashed:i.dashed,hairline:i.hairline},s["content-"+i.contentPosition]=e.default,s))},Object(h["b"])(n,!0)]),[e.default&&e.default()])}d.props={dashed:Boolean,hairline:{type:Boolean,default:!0},contentPosition:{type:String,default:"center"}};var v,p=l(d),m=(e("4b0a"),e("2bb1")),g=(e("7844"),e("5596")),b=e("76a0"),w={components:(v={},Object(a["a"])(v,g["a"].name,g["a"]),Object(a["a"])(v,m["a"].name,m["a"]),Object(a["a"])(v,p.name,p),v),directives:{InfiniteScroll:b["InfiniteScroll"]},data:function(){return{loading:!1,totalData:[],currentData:[void 0],page:1,forbidInfinite:!1}},methods:{getList:function(){var t=this;this.loading=!0,this.forbidInfinite=!0,this.$axios.get("/classes/Goods",{params:{keys:"name,price,picture",order:"-saleVolume",limit:4,skip:4*(this.page-1)}}).then(function(i){t.currentData=i.results,t.currentData.length>0&&(t.totalData=t.totalData.concat(t.currentData),t.page+=1,t.forbidInfinite=!1),t.loading=!1}).catch(function(i){t.loading=!1})}},created:function(){this.getList()}},y=w,C=(e("85e8"),e("2877")),O=Object(C["a"])(y,n,s,!1,null,"c7c7c2e4",null);i["default"]=O.exports}}]);
//# sourceMappingURL=chunk-a6a2b652.e9b4c275.js.map