!function(){function log(){"undefined"!=typeof console&&"function"==typeof console.log&&(Array.prototype.unshift.call(arguments,"[Ajax Upload]"),console.log(Array.prototype.join.call(arguments," ")))}function addEvent(t,e,n){if(t.addEventListener)t.addEventListener(e,n,!1);else{if(!t.attachEvent)throw new Error("not supported or DOM not loaded");t.attachEvent("on"+e,function(){n.call(t)})}}function addResizeEvent(t){var e;addEvent(window,"resize",function(){e&&clearTimeout(e),e=setTimeout(t,100)})}if(document.documentElement.getBoundingClientRect)var getOffset=function(t){var e=t.getBoundingClientRect(),n=t.ownerDocument,i=n.body,o=n.documentElement,s=o.clientTop||i.clientTop||0,a=o.clientLeft||i.clientLeft||0,r=1;if(i.getBoundingClientRect){var l=i.getBoundingClientRect();r=(l.right-l.left)/i.clientWidth}return 1<r&&(a=s=0),{top:e.top/r+(window.pageYOffset||o&&o.scrollTop/r||i.scrollTop/r)-s,left:e.left/r+(window.pageXOffset||o&&o.scrollLeft/r||i.scrollLeft/r)-a}};else var getOffset=function(t){for(var e=0,n=0;e+=t.offsetTop||0,n+=t.offsetLeft||0,t=t.offsetParent;);return{left:n,top:e}};function getBox(t){var e,n,i=getOffset(t);return e=i.left,n=i.top,{left:e,right:e+t.offsetWidth,top:n,bottom:n+t.offsetHeight}}function addStyles(t,e){for(var n in e)e.hasOwnProperty(n)&&(t.style[n]=e[n])}function copyLayout(t,e){var n=getBox(t);addStyles(e,{position:"absolute",left:n.left+"px",top:n.top+"px",width:t.offsetWidth+"px",height:t.offsetHeight+"px"})}var toElement=(F=document.createElement("div"),function(t){F.innerHTML=t;var e=F.firstChild;return F.removeChild(e)}),F,getUID=(I=0,function(){return"ValumsAjaxUpload"+I++}),I;function fileFromPath(t){return t.replace(/.*(\/|\\)/,"")}function getExt(t){return-1!==t.indexOf(".")?t.replace(/.*[.]/,""):""}function hasClass(t,e){return new RegExp("\\b"+e+"\\b").test(t.className)}function addClass(t,e){hasClass(t,e)||(t.className+=" "+e)}function removeClass(t,e){var n=new RegExp("\\b"+e+"\\b");t.className=t.className.replace(n,"")}function removeNode(t){t.parentNode.removeChild(t)}window.AjaxUpload=function(t,e){for(var n in this._settings={action:"upload.php",name:"userfile",data:{},autoSubmit:!0,responseType:!1,hoverClass:"hover",disabledClass:"disabled",onChange:function(t,e){},onSubmit:function(t,e){},onComplete:function(t,e){}},e)e.hasOwnProperty(n)&&(this._settings[n]=e[n]);if(t.jquery?t=t[0]:"string"==typeof t&&(/^#.*/.test(t)&&(t=t.slice(1)),t=document.getElementById(t)),!t||1!==t.nodeType)throw new Error("Please make sure that you're passing a valid element");"A"==t.nodeName.toUpperCase()&&addEvent(t,"click",function(t){t&&t.preventDefault?t.preventDefault():window.event&&(window.event.returnValue=!1)}),this._button=t,this._input=null,this._disabled=!1,this.enable(),this._rerouteClicks()},AjaxUpload.prototype={setData:function(t){this._settings.data=t},disable:function(){addClass(this._button,this._settings.disabledClass),this._disabled=!0;var t=this._button.nodeName.toUpperCase();"INPUT"!=t&&"BUTTON"!=t||this._button.setAttribute("disabled","disabled"),this._input&&(this._input.parentNode.style.visibility="hidden")},enable:function(){removeClass(this._button,this._settings.disabledClass),this._button.removeAttribute("disabled"),this._disabled=!1},_createInput:function(){var e=this,n=document.createElement("input");n.setAttribute("type","file"),n.setAttribute("name",this._settings.name),n.setAttribute("multiple","true"),addStyles(n,{position:"absolute",right:0,margin:0,padding:0,fontSize:"480px",cursor:"pointer"});var t=document.createElement("div");if(addStyles(t,{display:"block",position:"absolute",overflow:"hidden",margin:0,padding:0,opacity:0,direction:"ltr",zIndex:2147483583}),"0"!==t.style.opacity){if(void 0===t.filters)throw new Error("Opacity not supported by the browser");t.style.filter="alpha(opacity=0)"}addEvent(n,"change",function(){if(n&&""!==n.value){var t=fileFromPath(n.value);!1!==e._settings.onChange.call(e,t,getExt(t))?e._settings.autoSubmit&&e.submit():e._clearInput()}}),addEvent(n,"mouseover",function(){addClass(e._button,e._settings.hoverClass)}),addEvent(n,"mouseout",function(){removeClass(e._button,e._settings.hoverClass),n.parentNode.style.visibility="hidden"}),t.appendChild(n),document.body.appendChild(t),this._input=n},_clearInput:function(){this._input&&(removeNode(this._input.parentNode),this._input=null,this._createInput(),removeClass(this._button,this._settings.hoverClass))},_rerouteClicks:function(){var e=this;addEvent(e._button,"mouseover",function(){if(!e._disabled){e._input||e._createInput();var t=e._input.parentNode;copyLayout(e._button,t),t.style.visibility="visible"}})},_createIframe:function(){var t=getUID(),e=toElement('<iframe src="javascript:false;" name="'+t+'" />');return e.setAttribute("id",t),e.style.display="none",document.body.appendChild(e),e},_createForm:function(t){var e=this._settings,n=toElement('<form method="post" enctype="multipart/form-data"></form>');for(var i in n.setAttribute("action",e.action),n.setAttribute("target",t.name),n.style.display="none",document.body.appendChild(n),e.data)if(e.data.hasOwnProperty(i)){var o=document.createElement("input");o.setAttribute("type","hidden"),o.setAttribute("name",i),o.setAttribute("value",e.data[i]),"image[]"==i&&o.setAttribute("multiple","true"),n.appendChild(o)}return n},_getResponse:function(iframe,file){var toDeleteFlag=!1,self=this,settings=this._settings;addEvent(iframe,"load",function(){if("javascript:'%3Chtml%3E%3C/html%3E';"!=iframe.src&&"javascript:'<html></html>';"!=iframe.src){var doc=iframe.contentDocument?iframe.contentDocument:window.frames[iframe.id].document,response;if(!doc.readyState||"complete"==doc.readyState)if(!doc.body||"false"!=doc.body.innerHTML)doc.XMLDocument?response=doc.XMLDocument:doc.body?(response=doc.body.innerHTML,settings.responseType&&"json"==settings.responseType.toLowerCase()&&(doc.body.firstChild&&"PRE"==doc.body.firstChild.nodeName.toUpperCase()&&(response=doc.body.firstChild.firstChild.nodeValue),response=response?eval("("+response+")"):{})):response=doc,settings.onComplete.call(self,file,response),toDeleteFlag=!0,iframe.src="javascript:'<html></html>';"}else toDeleteFlag&&setTimeout(function(){removeNode(iframe)},0)})},submit:function(){var t=this._settings;if(this._input&&""!==this._input.value){var e=fileFromPath(this._input.value);if(!1!==t.onSubmit.call(this,e,getExt(e))){var n=this._createIframe(),i=this._createForm(n);removeNode(this._input.parentNode),removeClass(this._button,this._settings.hoverClass),i.appendChild(this._input),i.submit(),removeNode(i),i=null,removeNode(this._input),this._input=null,this._getResponse(n,e),this._createInput()}else this._clearInput()}}}}();