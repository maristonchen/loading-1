!function(t,i){"function"==typeof define&&define.amd?define(["$"],i):"object"==typeof exports?module.exports=i():t.Loading=i(window.Zepto||window.jQuery||$)}(this,function(t){var i=function(){};return i.prototype={loadingTpl:'<div class="ui-loading"><div class="ui-loading-mask"></div><i></i></div>',stop:function(){t(this.target);this.loading.remove()},start:function(){var i=this,o=i.target,n=t(o),e=this.loading;e||(e=t(i.loadingTpl),t("body").append(e)),this.loading=e;var d=t(n).outerHeight(),h=t(n).outerWidth();"HTML"==t(o)[0].tagName&&(d=Math.max(t(o).height(),t(window).height()),h=Math.max(t(o).height(),t(window).width())),console.log(h,d),e.height(d).width(h),e.find("div").height(d).width(h),100>d&&e.find("i").height(d).width(d);var a=t(n).offset();e.css({top:a.top,left:a.left});var s=e.find("i"),l=o?d:d+t(window).scrollTop(),g=o?h:h+t(window).scrollLeft(),f=(l-s.height())/2,r=(g-s.width())/2;s.css({top:f,left:r})},init:function(t){t=t||{},this.loadingTpl=t.loadingTpl||this.loadingTpl,this.target=t.target||"html",this.bindEvent()},bindEvent:function(){var i=this;t(this.target).on("stop",function(){i.stop()})}},i});