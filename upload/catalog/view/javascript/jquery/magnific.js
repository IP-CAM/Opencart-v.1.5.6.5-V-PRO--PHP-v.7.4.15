!function(e){var t,i,n,a,o,r,s,l=function(){},c=!!window.jQuery,p=e(window),d=function(e,i){t.ev.on("mfp"+e+".mfp",i)},f=function(t,i,n,a){var o=document.createElement("div");return o.className="mfp-"+t,n&&(o.innerHTML=n),a?i&&i.appendChild(o):(o=e(o),i&&o.appendTo(i)),o},u=function(i,n){t.ev.triggerHandler("mfp"+i,n),t.st.callbacks&&(i=i.charAt(0).toLowerCase()+i.slice(1),t.st.callbacks[i]&&t.st.callbacks[i].apply(t,e.isArray(n)?n:[n]))},m=function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},g=function(i){return i===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=i),t.currTemplate.closeBtn},h=function(){e.magnificPopup.instance||((t=new l).init(),e.magnificPopup.instance=t)},v=function(i){if(!e(i).hasClass("mfp-prevent-close")){var n=t.st.closeOnContentClick,a=t.st.closeOnBgClick;if(n&&a)return!0;if(!t.content||e(i).hasClass("mfp-close")||t.preloader&&i===t.preloader[0])return!0;if(i===t.content[0]||e.contains(t.content[0],i)){if(n)return!0}else if(a)return!0;return!1}};l.prototype={constructor:l,init:function(){var i=navigator.appVersion;t.isIE7=-1!==i.indexOf("MSIE 7."),t.isIE8=-1!==i.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(i),t.isIOS=/iphone|ipad|ipod/gi.test(i),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),n=e(document.body),a=e(document),t.popupsCache={}},open:function(i){var o;if(!1===i.isObj){t.items=i.items.toArray(),t.index=0;var s,l=i.items;for(o=0;o<l.length;o++)if((s=l[o]).parsed&&(s=s.el[0]),s===i.el[0]){t.index=o;break}}else t.items=e.isArray(i.items)?i.items:[i.items],t.index=i.index||0;if(t.isOpen)t.updateItemHTML();else{t.types=[],r="",t.ev=i.mainEl||a,i.key?(t.popupsCache[i.key]||(t.popupsCache[i.key]={}),t.currTemplate=t.popupsCache[i.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,i),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.bgOverlay||(t.bgOverlay=f("bg").on("click.mfp",function(){t.close()}),t.wrap=f("wrap").attr("tabindex",-1).on("click.mfp",function(e){v(e.target)&&t.close()}),t.container=f("container",t.wrap)),t.contentContainer=f("content"),t.st.preloader&&(t.preloader=f("preloader",t.container,t.st.tLoading));var c=e.magnificPopup.modules;for(o=0;o<c.length;o++){var h=c[o];h=h.charAt(0).toUpperCase()+h.slice(1),t["init"+h].call(t)}u("BeforeOpen"),t.st.closeBtnInside?(d("MarkupParse",function(e,t,i,n){i.close_replaceWith=g(n.type)}),r+=" mfp-close-btn-in"):t.wrap.append(g()),t.st.alignTop&&(r+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:p.scrollTop(),position:"absolute"}),(!1===t.st.fixedBgPos||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:a.height(),position:"absolute"}),a.on("keyup.mfp",function(e){27===e.keyCode&&t.close()}),p.on("resize.mfp",function(){t.updateSize()}),t.st.closeOnContentClick||(r+=" mfp-auto-cursor"),r&&t.wrap.addClass(r);var C=t.wH=p.height(),y={};if(t.fixedContentPos&&t._hasScrollBar(C)){var w=t._getScrollbarSize();w&&(y.paddingRight=w)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):y.overflow="hidden");var b=t.st.mainClass;t.isIE7&&(b+=" mfp-ie7"),b&&t._addClassToMFP(b),t.updateItemHTML(),u("BuildControls"),n.css(y),t.bgOverlay.add(t.wrap).prependTo(document.body),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP("mfp-ready"),m()):t.bgOverlay.addClass("mfp-ready"),a.on("focusin.mfp",function(i){if(i.target!==t.wrap[0]&&!e.contains(t.wrap[0],i.target))return m(),!1})},16),t.isOpen=!0,t.updateSize(C),u("Open")}},close:function(){t.isOpen&&(t.isOpen=!1,t.st.removalDelay&&!t.isLowIE?(t._addClassToMFP("mfp-removing"),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){u("Close");var i="mfp-removing mfp-ready ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(i+=t.st.mainClass+" "),t._removeClassFromMFP(i),t.fixedContentPos){var o={paddingRight:""};t.isIE7?e("body, html").css("overflow",""):o.overflow="",n.css(o)}a.off("keyup.mfp focusin.mfp"),t.ev.off(".mfp"),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),t.st.closeBtnInside&&!0!==t.currTemplate[t.currItem.type]||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,u("AfterClose")},updateSize:function(e){if(t.isIOS){var i=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*i;t.wrap.css("height",n),t.wH=n}else t.wH=e||p.height();t.fixedContentPos||t.wrap.css("height",t.wH),u("Resize")},updateItemHTML:function(){var i=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),i.parsed||(i=t.parseEl(t.index));var n=i.type;if(u("BeforeChange",[t.currItem?t.currItem.type:"",n]),t.currItem=i,!t.currTemplate[n]){var a=!!t.st[n]&&t.st[n].markup;u("FirstMarkupParse",a),t.currTemplate[n]=!a||e(a)}o&&o!==i.type&&t.container.removeClass("mfp-"+o+"-holder");var r=t["get"+n.charAt(0).toUpperCase()+n.slice(1)](i,t.currTemplate[n]);t.appendContent(r,n),i.preloaded=!0,u("Change",i),o=i.type,t.container.prepend(t.contentContainer),u("AfterChange")},appendContent:function(e,i){t.content=e,e?t.st.closeBtnInside&&!0===t.currTemplate[i]?t.content.find(".mfp-close").length||t.content.append(g()):t.content=e:t.content="",u("BeforeAppend"),t.container.addClass("mfp-"+i+"-holder"),t.contentContainer.append(t.content)},parseEl:function(i){var n=t.items[i],a=n.type;if((n=n.tagName?{el:e(n)}:{data:n,src:n.src}).el){for(var o=t.types,r=0;r<o.length;r++)if(n.el.hasClass("mfp-"+o[r])){a=o[r];break}n.src=n.el.attr("data-mfp-src"),n.src||(n.src=n.el.attr("href"))}return n.type=a||t.st.type||"inline",n.index=i,n.parsed=!0,t.items[i]=n,u("ElementParse",n),t.items[i]},addGroup:function(e,i){var n=function(n){n.mfpEl=this,t._openClick(n,e,i)};i||(i={});var a="click.magnificPopup";i.mainEl=e,i.items?(i.isObj=!0,e.off(a).on(a,n)):(i.isObj=!1,i.delegate?e.off(a).on(a,i.delegate,n):(i.items=e,e.off(a).on(a,n)))},_openClick:function(i,n,a){if((void 0!==a.midClick?a.midClick:e.magnificPopup.defaults.midClick)||2!==i.which){var o=void 0!==a.disableOn?a.disableOn:e.magnificPopup.defaults.disableOn;if(o)if(e.isFunction(o)){if(!o.call(t))return!0}else if(p.width()<o)return!0;i.type&&(i.preventDefault(),t.isOpen&&i.stopPropagation()),a.el=e(i.mfpEl),a.delegate&&(a.items=n.find(a.delegate)),t.open(a)}},updateStatus:function(e,n){if(t.preloader){i!==e&&t.container.removeClass("mfp-s-"+i),n||"loading"!==e||(n=t.st.tLoading);var a={status:e,text:n};u("UpdateStatus",a),e=a.status,n=a.text,t.preloader.html(n),t.preloader.find("a").click(function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),i=e}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?a.height():document.body.scrollHeight)>(e||p.height())},_parseMarkup:function(t,i,n){var a;n.data&&(i=e.extend(n.data,i)),u("MarkupParse",[t,i,n]),e.each(i,function(e,i){if(void 0===i||!1===i)return!0;if((a=e.split("_")).length>1){var n=t.find(".mfp-"+a[0]);if(n.length>0){var o=a[1];"replaceWith"===o?n[0]!==i[0]&&n.replaceWith(i):"img"===o?n.is("img")?n.attr("src",i):n.replaceWith('<img src="'+i+'" class="'+n.attr("class")+'" />'):n.attr(a[1],i)}}else t.find(".mfp-"+e).html(i)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:l.prototype,modules:[],open:function(e,t){return h(),e||(e={}),e.isObj=!0,e.index=t||0,this.instance.open(e)},close:function(){return e.magnificPopup.instance.close()},registerModule:function(t,i){i.options&&(e.magnificPopup.defaults[t]=i.options),e.extend(this.proto,i.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,alignTop:!1,removalDelay:0,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(i){h();var n=e(this);if("string"==typeof i)if("open"===i){var a,o=c?n.data("magnificPopup"):n[0].magnificPopup,r=parseInt(arguments[1],10)||0;o.items?a=o.items[r]:(a=n,o.delegate&&(a=a.find(o.delegate)),a=a.eq(r)),t._openClick({mfpEl:a},n,o)}else t.isOpen&&t[i].apply(t,Array.prototype.slice.call(arguments,1));else c?n.data("magnificPopup",i):n[0].magnificPopup=i,t.addGroup(n,i);return n};var C,y,w,b=function(){w&&(y.after(w.addClass(C)).detach(),w=null)};e.magnificPopup.registerModule("inline",{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push("inline"),d("Close.inline",function(){b()})},getInline:function(i,n){if(b(),i.src){var a=t.st.inline,o=e(i.src);if(o.length){var r=o[0].parentNode;r&&r.tagName&&(y||(C=a.hiddenClass,y=f(C),C="mfp-"+C),w=o.after(y).detach().removeClass(C)),t.updateStatus("ready")}else t.updateStatus("error",a.tNotFound),o=e("<div>");return i.inlineElement=o,o}return t.updateStatus("ready"),t._parseMarkup(n,{},i),n}}});var I,k=function(i){if(i.data&&void 0!==i.data.title)return i.data.title;var n=t.st.image.titleSrc;if(n){if(e.isFunction(n))return n.call(t,i);if(i.el)return i.el.attr(n)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,i=".image";t.types.push("image"),d("Open"+i,function(){"image"===t.currItem.type&&e.cursor&&n.addClass(e.cursor)}),d("Close"+i,function(){e.cursor&&n.removeClass(e.cursor),p.off("resize.mfp")}),d("Resize"+i,t.resizeImage),t.isLowIE&&d("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e.img&&t.st.image.verticalFit){var i=0;t.isLowIE&&(i=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-i)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,I&&clearInterval(I),e.isCheckingImgSize=!1,u("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var i=0,n=e.img[0],a=function(o){I&&clearInterval(I),I=setInterval(function(){n.naturalWidth>0?t._onImageHasSize(e):(i>200&&clearInterval(I),3===++i?a(10):40===i?a(50):100===i&&a(500))},o)};a(1)},getImage:function(i,n){var a=0,o=function(){i&&(i.img[0].complete?(i.img.off(".mfploader"),i===t.currItem&&(t._onImageHasSize(i),t.updateStatus("ready")),i.hasSize=!0,i.loaded=!0):++a<200?setTimeout(o,100):r())},r=function(){i&&(i.img.off(".mfploader"),i===t.currItem&&(t._onImageHasSize(i),t.updateStatus("error",s.tError.replace("%url%",i.src))),i.hasSize=!0,i.loaded=!0,i.loadError=!0)},s=t.st.image,l=n.find(".mfp-img");if(l.length){var c=new Image;c.className="mfp-img",i.img=e(c).on("load.mfploader",o).on("error.mfploader",r),c.src=i.src,l.is("img")&&(i.img=i.img.clone())}return t._parseMarkup(n,{title:k(i),img_replaceWith:i.img},i),t.resizeImage(),i.hasSize?(I&&clearInterval(I),i.loadError?(n.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",i.src))):(n.removeClass("mfp-loading"),t.updateStatus("ready")),n):(t.updateStatus("loading"),i.loading=!0,i.hasSize||(i.imgHidden=!0,n.addClass("mfp-loading"),t.findImageSize(i)),n)}}});var x=function(e){if(t.currTemplate.iframe){var i=t.currTemplate.iframe.find("iframe");i.length&&(e||(i[0].src="//about:blank"),t.isIE8&&i.css("display",e?"block":"none"))}};e.magnificPopup.registerModule("iframe",{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push("iframe"),d("BeforeChange",function(e,t,i){t!==i&&("iframe"===t?x():"iframe"===i&&x(!0))}),d("Close.iframe",function(){x()})},getIframe:function(i,n){var a=i.src,o=t.st.iframe;e.each(o.patterns,function(){if(a.indexOf(this.index)>-1)return this.id&&(a="string"==typeof this.id?a.substr(a.lastIndexOf(this.id)+this.id.length,a.length):this.id.call(this,a)),a=this.src.replace("%id%",a),!1});var r={};return o.srcAction&&(r[o.srcAction]=a),t._parseMarkup(n,r,i),t.updateStatus("ready"),n}}});var P=function(e){var i=t.items.length;return e>i-1?e-i:e<0?i+e:e},S=function(e,t,i){return e.replace("%curr%",t+1).replace("%total%",i)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var i=t.st.gallery,n=".mfp-gallery",o=Boolean(e.fn.mfpFastClick);if(t.direction=!0,!i||!i.enabled)return!1;r+=" mfp-gallery",d("Open"+n,function(){i.navigateByImgClick&&t.wrap.on("click"+n,".mfp-img",function(){if(t.items.length>1)return t.next(),!1}),a.on("keydown"+n,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),d("UpdateStatus"+n,function(e,i){i.text&&(i.text=S(i.text,t.currItem.index,t.items.length))}),d("MarkupParse"+n,function(e,n,a,o){var r=t.items.length;a.counter=r>1?S(i.tCounter,o.index,r):""}),d("BuildControls"+n,function(){if(t.items.length>1&&i.arrows&&!t.arrowLeft){var n=i.arrowMarkup,a=t.arrowLeft=e(n.replace("%title%",i.tPrev).replace("%dir%","left")).addClass("mfp-prevent-close"),r=t.arrowRight=e(n.replace("%title%",i.tNext).replace("%dir%","right")).addClass("mfp-prevent-close"),s=o?"mfpFastClick":"click";a[s](function(){t.prev()}),r[s](function(){t.next()}),t.isIE7&&(f("b",a[0],!1,!0),f("a",a[0],!1,!0),f("b",r[0],!1,!0),f("a",r[0],!1,!0)),t.container.append(a.add(r))}}),d("Change"+n,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),d("Close"+n,function(){a.off(n),t.wrap.off("click"+n),t.arrowLeft&&o&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null})},next:function(){t.direction=!0,t.index=P(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=P(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,i=t.st.gallery.preload,n=Math.min(i[0],t.items.length),a=Math.min(i[1],t.items.length);for(e=1;e<=(t.direction?a:n);e++)t._preloadItem(t.index+e);for(e=1;e<=(t.direction?n:a);e++)t._preloadItem(t.index-e)},_preloadItem:function(i){if(i=P(i),!t.items[i].preloaded){var n=t.items[i];n.parsed||(n=t.parseEl(i)),u("LazyLoad",n),"image"===n.type&&(n.img=e('<img class="mfp-img" />').on("load.mfploader",function(){n.hasSize=!0}).on("error.mfploader",function(){n.hasSize=!0,n.loadError=!0}).attr("src",n.src)),n.preloaded=!0}}}}),function(){var t="ontouchstart"in window,i=function(){p.off("touchmove"+n+" touchend"+n)},n=".mfpFastClick";e.fn.mfpFastClick=function(a){return e(this).each(function(){var o,r=e(this);if(t){var s,l,c,d,f,u;r.on("touchstart"+n,function(e){d=!1,u=1,f=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],l=f.clientX,c=f.clientY,p.on("touchmove"+n,function(e){f=e.originalEvent?e.originalEvent.touches:e.touches,u=f.length,f=f[0],(Math.abs(f.clientX-l)>10||Math.abs(f.clientY-c)>10)&&(d=!0,i())}).on("touchend"+n,function(e){i(),d||u>1||(o=!0,e.preventDefault(),clearTimeout(s),s=setTimeout(function(){o=!1},1e3),a())})})}r.on("click"+n,function(){o||a()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+n+" click"+n),t&&p.off("touchmove"+n+" touchend"+n)}}()}(window.jQuery||window.Zepto);