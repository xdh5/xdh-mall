(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-705cb560"],{3875:function(t,i,e){"use strict";e.d(i,"a",function(){return o});var s=e("2b0e"),n=10;function a(t,i){return t>i&&t>n?"horizontal":i>t&&i>n?"vertical":""}var o=s["default"].extend({data:function(){return{direction:""}},methods:{touchStart:function(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove:function(t){var i=t.touches[0];this.deltaX=i.clientX-this.startX,this.deltaY=i.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||a(this.offsetX,this.offsetY)},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0}}})},4598:function(t,i,e){"use strict";(function(t){e.d(i,"a",function(){return h});var s=e("a142"),n=Date.now();function a(t){var i=Date.now(),e=Math.max(0,16-(i-n)),s=setTimeout(t,e);return n=i+e,s}var o=s["d"]?t:window,c=o.requestAnimationFrame||a;o.cancelAnimationFrame||o.clearTimeout;function r(t){return c.call(o,t)}function h(t){r(function(){r(t)})}}).call(this,e("c8ba"))},"482d":function(t,i,e){"use strict";function s(t,i,e){return Math.min(Math.max(t,i),e)}e.d(i,"a",function(){return s})},7439:function(t,i,e){"use strict";var s=e("c6d6"),n=e.n(s);n.a},"786d":function(t,i,e){},8270:function(t,i,e){},c6d6:function(t,i,e){},f75a:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"wrapper"},[s("van-swipe",{attrs:{autoplay:4e3,"indicator-color":"white"}},t._l(t.swipeImages,function(t,i){return s("van-swipe-item",{key:i},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.image,expression:"value.image"}]})])}),1),t._m(0),s("div",{staticClass:"may-like"},[0!==t.totalData.length||t.loading?t._e():s("div",{staticClass:"tipImage"},[s("img",{attrs:{src:e("f3f6"),alt:"暂无数据"}})]),s("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.getList,expression:"getList"}],staticClass:"clearfix",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"10"}},[t._l(t.totalData,function(i,e){return s("li",{key:e,staticClass:"goods-item"},[s("div",{staticClass:"img-box"},[s("van-image",{attrs:{"lazy-load":"",src:i.image},scopedSlots:t._u([{key:"loading",fn:function(){return[t._v("加载中")]},proxy:!0},{key:"error",fn:function(){return[t._v("加载失败")]},proxy:!0}],null,!0)})],1),s("div",{staticClass:"detail"},[s("div",{staticClass:"title"},[t._v(t._s(i.name))]),s("div",{staticClass:"price"},[t._v("￥"+t._s(i.currentPrice))])])])}),s("van-loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"tipImage",attrs:{type:"spinner",color:"#1989fa"}})],2)]),0===t.currentData.length&&t.totalData.length>0?s("div",{staticClass:"information"},[t._m(1)]):t._e()],1)},n=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"line-block line-block-gray"},[e("div",{staticClass:"lineblock-title"},[e("span",{staticClass:"lineblock-font"},[t._v("最热商品推荐")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("dl",[e("dt",[t._v("联系作者")]),e("dd",[t._v("Email: "),e("a",{attrs:{href:"mailto:zhaozy086@163.com"}},[t._v("zhaozy086@163.com")])]),e("dd",[t._v("Github: "),e("a",{attrs:{href:"https://github.com/xdh5",target:"_blank"}},[t._v("https://github.com/xdh5")])])])}],a=e("bd86"),o=(e("68ef"),e("786d"),e("1988")),c=e("d282"),r=Object(c["a"])("swipe-item"),h=r[0],u=r[1],l=h({data:function(){return{offset:0}},beforeCreate:function(){this.$parent.swipes.push(this)},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)},render:function(t){var i=this.$parent,e=i.vertical,s=i.computedWidth,n=i.computedHeight,a={width:s+"px",height:e?n+"px":"100%",transform:"translate"+(e?"Y":"X")+"("+this.offset+"px)"};return t("div",{class:u(),style:a,on:Object(o["a"])({},this.$listeners)},[this.slots()])}}),d=(e("8270"),e("1325")),f=e("3875");function v(t){function i(){this.binded||(t.call(this,d["b"],!0),this.binded=!0)}function e(){this.binded&&(t.call(this,d["a"],!1),this.binded=!1)}return{mounted:i,activated:i,deactivated:e,beforeDestroy:e}}var p,m=e("4598"),g=e("482d"),w=Object(c["a"])("swipe"),b=w[0],y=w[1],C=b({mixins:[f["a"],v(function(t,i){t(window,"resize",this.onResize,!0),i?this.initialize():this.clear()})],props:{width:Number,height:Number,autoplay:Number,vertical:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:Number,default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:Number,default:0},showIndicators:{type:Boolean,default:!0}},data:function(){return{computedWidth:0,computedHeight:0,offset:0,active:0,deltaX:0,deltaY:0,swipes:[],swiping:!1}},watch:{swipes:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t?this.autoPlay():this.clear()}},computed:{count:function(){return this.swipes.length},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,i=this.vertical?"height":"width",e=this.vertical?"width":"height";return t={},t[i]=this.trackSize+"px",t[e]=this[e]?this[e]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){var t=this.$el.getBoundingClientRect();return(this.vertical?t.height:t.width)-this.size*this.count}},methods:{initialize:function(t){if(void 0===t&&(t=this.initialSwipe),clearTimeout(this.timer),this.$el){var i=this.$el.getBoundingClientRect();this.computedWidth=this.width||i.width,this.computedHeight=this.height||i.height}this.swiping=!0,this.active=t,this.offset=this.count>1?-this.size*this.active:0,this.swipes.forEach(function(t){t.offset=0}),this.autoPlay()},onResize:function(){this.initialize(this.activeIndicator)},onTouchStart:function(t){this.touchable&&(this.clear(),this.swiping=!0,this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(d["c"])(t,!0),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){if(this.delta&&this.isCorrectDirection){var t=this.vertical?this.offsetY:this.offsetX;this.move({pace:t>0?this.delta>0?-1:1:0,emitChange:!0})}this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var i=this.active,e=this.count;return t?this.loop?Object(g["a"])(i+t,-1,e):Object(g["a"])(i+t,0,e-1):i},getTargetOffset:function(t,i){var e=t*this.size;this.loop||(e=Math.min(e,-this.minOffset));var s=Math.round(i-e);return this.loop||(s=Object(g["a"])(s,this.minOffset,0)),s},move:function(t){var i=t.pace,e=void 0===i?0:i,s=t.offset,n=void 0===s?0:s,a=t.emitChange,o=this.loop,c=this.count,r=this.active,h=this.swipes,u=this.trackSize,l=this.minOffset;if(!(c<=1)){var d=this.getTargetActive(e),f=this.getTargetOffset(d,n);if(o){if(h[0]){var v=f<l;h[0].offset=v?u:0}if(h[c-1]){var p=f>0;h[c-1].offset=p?-u:0}}this.active=d,this.offset=f,a&&d!==r&&this.$emit("change",this.activeIndicator)}},swipeTo:function(t,i){var e=this;void 0===i&&(i={}),this.swiping=!0,this.resetTouchStatus(),this.correctPosition(),Object(m["a"])(function(){e.move({pace:t%e.count-e.active,emitChange:!0}),i.immediate?Object(m["a"])(function(){e.swiping=!1}):e.swiping=!1})},correctPosition:function(){this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,i=this.autoplay;i&&this.count>1&&(this.clear(),this.timer=setTimeout(function(){t.swiping=!0,t.resetTouchStatus(),t.correctPosition(),Object(m["a"])(function(){t.swiping=!1,t.move({pace:1,emitChange:!0}),t.autoPlay()})},i))},renderIndicator:function(){var t=this,i=this.$createElement,e=this.count,s=this.activeIndicator,n=this.slots("indicator");return n||(this.showIndicators&&e>1?i("div",{class:y("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(e)).map(function(e,n){return i("i",{class:y("indicator",{active:n===s}),style:n===s?t.indicatorStyle:null})})]):void 0)}},render:function(t){return t("div",{class:y()},[t("div",{ref:"track",style:this.trackStyle,class:y("track"),on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[this.slots()]),this.renderIndicator()])}}),_=e("76a0"),x={components:(p={},Object(a["a"])(p,C.name,C),Object(a["a"])(p,l.name,l),p),directives:{InfiniteScroll:_["InfiniteScroll"]},data:function(){return{loading:!1,swipeImages:[],totalData:[],currentData:[{name:"",currentPrice:"",image:""}],page:1,limit:4}},methods:{getList:function(){var t=this;this.currentData.length>0&&(this.loading=!0,this.$axios.get("/index/mayLike",{params:{page:this.page,limit:this.limit}}).then(function(i){t.currentData=i.data,t.currentData.length>0&&(t.totalData=t.totalData.concat(t.currentData),t.page+=1),t.loading=!1}).catch(function(t){console.log(t)}))},getCarousel:function(){var t=this;this.$axios.get("/index/carousel").then(function(i){t.swipeImages=i.data}).catch(function(t){console.log(t)})}},created:function(){this.getList(),this.getCarousel()}},z=x,k=(e("7439"),e("2877")),S=Object(k["a"])(z,s,n,!1,null,"4e44dd52",null);i["default"]=S.exports}}]);
//# sourceMappingURL=chunk-705cb560.b8e30665.js.map