import{g as A,r as C}from"./index-c4ee9176.js";var R={exports:{}},H="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",V=H,F=V;function j(){}function N(){}N.resetWarningCache=j;var K=function(){function t(e,i,s,u,a,c){if(c!==F){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function r(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:r,element:t,elementType:t,instanceOf:r,node:t,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:N,resetWarningCache:j};return o.PropTypes=o,o};R.exports=K();var n=R.exports;const ne=A(n);var T=globalThis&&globalThis.__assign||function(){return T=Object.assign||function(t){for(var r,o=1,e=arguments.length;o<e;o++){r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},T.apply(this,arguments)},M={onActivate:n.func,onAddUndo:n.func,onBeforeAddUndo:n.func,onBeforeExecCommand:n.func,onBeforeGetContent:n.func,onBeforeRenderUI:n.func,onBeforeSetContent:n.func,onBeforePaste:n.func,onBlur:n.func,onChange:n.func,onClearUndos:n.func,onClick:n.func,onContextMenu:n.func,onCommentChange:n.func,onCopy:n.func,onCut:n.func,onDblclick:n.func,onDeactivate:n.func,onDirty:n.func,onDrag:n.func,onDragDrop:n.func,onDragEnd:n.func,onDragGesture:n.func,onDragOver:n.func,onDrop:n.func,onExecCommand:n.func,onFocus:n.func,onFocusIn:n.func,onFocusOut:n.func,onGetContent:n.func,onHide:n.func,onInit:n.func,onKeyDown:n.func,onKeyPress:n.func,onKeyUp:n.func,onLoadContent:n.func,onMouseDown:n.func,onMouseEnter:n.func,onMouseLeave:n.func,onMouseMove:n.func,onMouseOut:n.func,onMouseOver:n.func,onMouseUp:n.func,onNodeChange:n.func,onObjectResizeStart:n.func,onObjectResized:n.func,onObjectSelected:n.func,onPaste:n.func,onPostProcess:n.func,onPostRender:n.func,onPreProcess:n.func,onProgressState:n.func,onRedo:n.func,onRemove:n.func,onReset:n.func,onSaveContent:n.func,onSelectionChange:n.func,onSetAttrib:n.func,onSetContent:n.func,onShow:n.func,onSubmit:n.func,onUndo:n.func,onVisualAid:n.func,onSkinLoadError:n.func,onThemeLoadError:n.func,onModelLoadError:n.func,onPluginLoadError:n.func,onIconsLoadError:n.func,onLanguageLoadError:n.func,onScriptsLoad:n.func,onScriptsLoadError:n.func},U=T({apiKey:n.string,id:n.string,inline:n.bool,init:n.object,initialValue:n.string,onEditorChange:n.func,value:n.string,tagName:n.string,cloudChannel:n.string,plugins:n.oneOfType([n.string,n.array]),toolbar:n.oneOfType([n.string,n.array]),disabled:n.bool,textareaName:n.string,tinymceScriptSrc:n.oneOfType([n.string,n.arrayOf(n.string),n.arrayOf(n.shape({src:n.string,async:n.bool,defer:n.bool}))]),rollback:n.oneOfType([n.number,n.oneOf([!1])]),scriptLoading:n.shape({async:n.bool,defer:n.bool,delay:n.number})},M),S=function(t){return typeof t=="function"},w=function(t){return t in M},I=function(t){return t.substr(2)},z=function(t,r,o,e,i,s,u){var a=Object.keys(i).filter(w),c=Object.keys(s).filter(w),l=a.filter(function(f){return s[f]===void 0}),p=c.filter(function(f){return i[f]===void 0});l.forEach(function(f){var d=I(f),h=u[d];o(d,h),delete u[d]}),p.forEach(function(f){var d=e(t,f),h=I(f);u[h]=d,r(h,d)})},W=function(t,r,o,e,i){return z(i,t.on.bind(t),t.off.bind(t),function(s,u){return function(a){var c;return(c=s(u))===null||c===void 0?void 0:c(a,t)}},r,o,e)},L=0,x=function(t){var r=Date.now(),o=Math.floor(Math.random()*1e9);return L++,t+"_"+o+L+String(r)},P=function(t){return t!==null&&(t.tagName.toLowerCase()==="textarea"||t.tagName.toLowerCase()==="input")},D=function(t){return typeof t>"u"||t===""?[]:Array.isArray(t)?t:t.split(" ")},G=function(t,r){return D(t).concat(D(r))},$=function(){return window.InputEvent&&typeof InputEvent.prototype.getTargetRanges=="function"},q=function(t){if(!("isConnected"in Node.prototype)){for(var r=t,o=t.parentNode;o!=null;)r=o,o=r.parentNode;return r===t.ownerDocument}return t.isConnected},B=function(t,r){t!==void 0&&(t.mode!=null&&typeof t.mode=="object"&&typeof t.mode.set=="function"?t.mode.set(r):t.setMode(r))},k=globalThis&&globalThis.__assign||function(){return k=Object.assign||function(t){for(var r,o=1,e=arguments.length;o<e;o++){r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},k.apply(this,arguments)},J=function(t,r,o){var e,i,s=t.createElement("script");s.referrerPolicy="origin",s.type="application/javascript",s.id=r.id,s.src=r.src,s.async=(e=r.async)!==null&&e!==void 0?e:!1,s.defer=(i=r.defer)!==null&&i!==void 0?i:!1;var u=function(){s.removeEventListener("load",u),s.removeEventListener("error",a),o(r.src)},a=function(c){s.removeEventListener("load",u),s.removeEventListener("error",a),o(r.src,c)};s.addEventListener("load",u),s.addEventListener("error",a),t.head&&t.head.appendChild(s)},Y=function(t){var r={},o=function(u,a){var c=r[u];c.done=!0,c.error=a;for(var l=0,p=c.handlers;l<p.length;l++){var f=p[l];f(u,a)}c.handlers=[]},e=function(u,a,c){var l=function(b){return c!==void 0?c(b):console.error(b)};if(u.length===0){l(new Error("At least one script must be provided"));return}for(var p=0,f=!1,d=function(b,O){f||(O?(f=!0,l(O)):++p===u.length&&a())},h=0,v=u;h<v.length;h++){var y=v[h],g=r[y.src];if(g)g.done?d(y.src,g.error):g.handlers.push(d);else{var m=x("tiny-");r[y.src]={id:m,src:y.src,done:!1,error:null,handlers:[d]},J(t,k({id:m},y),o)}}},i=function(){for(var u,a=0,c=Object.values(r);a<c.length;a++){var l=c[a],p=t.getElementById(l.id);p!=null&&p.tagName==="SCRIPT"&&((u=p.parentNode)===null||u===void 0||u.removeChild(p))}r={}},s=function(){return t};return{loadScripts:e,deleteScripts:i,getDocument:s}},Q=function(){var t=[],r=function(i){var s=t.find(function(u){return u.getDocument()===i});return s===void 0&&(s=Y(i),t.push(s)),s},o=function(i,s,u,a,c){var l=function(){return r(i).loadScripts(s,a,c)};u>0?setTimeout(l,u):l()},e=function(){for(var i=t.pop();i!=null;i=t.pop())i.deleteScripts()};return{loadList:o,reinitialize:e}},X=Q(),_=function(t){var r=t;return r&&r.tinymce?r.tinymce:null},Z=globalThis&&globalThis.__extends||function(){var t=function(r,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,i){e.__proto__=i}||function(e,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])},t(r,o)};return function(r,o){if(typeof o!="function"&&o!==null)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");t(r,o);function e(){this.constructor=r}r.prototype=o===null?Object.create(o):(e.prototype=o.prototype,new e)}}(),E=globalThis&&globalThis.__assign||function(){return E=Object.assign||function(t){for(var r,o=1,e=arguments.length;o<e;o++){r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},E.apply(this,arguments)};(function(t){Z(r,t);function r(o){var e=this,i,s,u;return e=t.call(this,o)||this,e.rollbackTimer=void 0,e.valueCursor=void 0,e.rollbackChange=function(){var a=e.editor,c=e.props.value;a&&c&&c!==e.currentContent&&a.undoManager.ignore(function(){if(a.setContent(c),e.valueCursor&&(!e.inline||a.hasFocus()))try{a.selection.moveToBookmark(e.valueCursor)}catch{}}),e.rollbackTimer=void 0},e.handleBeforeInput=function(a){if(e.props.value!==void 0&&e.props.value===e.currentContent&&e.editor&&(!e.inline||e.editor.hasFocus()))try{e.valueCursor=e.editor.selection.getBookmark(3)}catch{}},e.handleBeforeInputSpecial=function(a){(a.key==="Enter"||a.key==="Backspace"||a.key==="Delete")&&e.handleBeforeInput(a)},e.handleEditorChange=function(a){var c=e.editor;if(c&&c.initialized){var l=c.getContent();e.props.value!==void 0&&e.props.value!==l&&e.props.rollback!==!1&&(e.rollbackTimer||(e.rollbackTimer=window.setTimeout(e.rollbackChange,typeof e.props.rollback=="number"?e.props.rollback:200))),l!==e.currentContent&&(e.currentContent=l,S(e.props.onEditorChange)&&e.props.onEditorChange(l,c))}},e.handleEditorChangeSpecial=function(a){(a.key==="Backspace"||a.key==="Delete")&&e.handleEditorChange(a)},e.initialise=function(a){var c,l,p;a===void 0&&(a=0);var f=e.elementRef.current;if(f){if(!q(f)){if(a===0)setTimeout(function(){return e.initialise(1)},1);else if(a<100)setTimeout(function(){return e.initialise(a+1)},100);else throw new Error("tinymce can only be initialised when in a document");return}var d=_(e.view);if(!d)throw new Error("tinymce should have been loaded into global scope");var h=E(E({},e.props.init),{selector:void 0,target:f,readonly:e.props.disabled,inline:e.inline,plugins:G((c=e.props.init)===null||c===void 0?void 0:c.plugins,e.props.plugins),toolbar:(l=e.props.toolbar)!==null&&l!==void 0?l:(p=e.props.init)===null||p===void 0?void 0:p.toolbar,setup:function(v){e.editor=v,e.bindHandlers({}),e.inline&&!P(f)&&v.once("PostRender",function(y){v.setContent(e.getInitialValue(),{no_events:!0})}),e.props.init&&S(e.props.init.setup)&&e.props.init.setup(v)},init_instance_callback:function(v){var y,g,m=e.getInitialValue();e.currentContent=(y=e.currentContent)!==null&&y!==void 0?y:v.getContent(),e.currentContent!==m&&(e.currentContent=m,v.setContent(m),v.undoManager.clear(),v.undoManager.add(),v.setDirty(!1));var b=(g=e.props.disabled)!==null&&g!==void 0?g:!1;B(e.editor,b?"readonly":"design"),e.props.init&&S(e.props.init.init_instance_callback)&&e.props.init.init_instance_callback(v)}});e.inline||(f.style.visibility=""),P(f)&&(f.value=e.getInitialValue()),d.init(h)}},e.id=e.props.id||x("tiny-react"),e.elementRef=C.createRef(),e.inline=(u=(i=e.props.inline)!==null&&i!==void 0?i:(s=e.props.init)===null||s===void 0?void 0:s.inline)!==null&&u!==void 0?u:!1,e.boundHandlers={},e}return Object.defineProperty(r.prototype,"view",{get:function(){var o,e;return(e=(o=this.elementRef.current)===null||o===void 0?void 0:o.ownerDocument.defaultView)!==null&&e!==void 0?e:window},enumerable:!1,configurable:!0}),r.prototype.componentDidUpdate=function(o){var e=this,i,s;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(o),this.editor.initialized)){if(this.currentContent=(i=this.currentContent)!==null&&i!==void 0?i:this.editor.getContent(),typeof this.props.initialValue=="string"&&this.props.initialValue!==o.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if(typeof this.props.value=="string"&&this.props.value!==this.currentContent){var u=this.editor;u.undoManager.transact(function(){var c;if(!e.inline||u.hasFocus())try{c=u.selection.getBookmark(3)}catch{}var l=e.valueCursor;if(u.setContent(e.props.value),!e.inline||u.hasFocus())for(var p=0,f=[c,l];p<f.length;p++){var d=f[p];if(d)try{u.selection.moveToBookmark(d),e.valueCursor=d;break}catch{}}})}if(this.props.disabled!==o.disabled){var a=(s=this.props.disabled)!==null&&s!==void 0?s:!1;B(this.editor,a?"readonly":"design")}}},r.prototype.componentDidMount=function(){var o=this,e,i,s,u,a;if(_(this.view)!==null)this.initialise();else if(Array.isArray(this.props.tinymceScriptSrc)&&this.props.tinymceScriptSrc.length===0)(i=(e=this.props).onScriptsLoadError)===null||i===void 0||i.call(e,new Error("No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array."));else if(!((s=this.elementRef.current)===null||s===void 0)&&s.ownerDocument){var c=function(){var p,f;(f=(p=o.props).onScriptsLoad)===null||f===void 0||f.call(p),o.initialise()},l=function(p){var f,d;(d=(f=o.props).onScriptsLoadError)===null||d===void 0||d.call(f,p)};X.loadList(this.elementRef.current.ownerDocument,this.getScriptSources(),(a=(u=this.props.scriptLoading)===null||u===void 0?void 0:u.delay)!==null&&a!==void 0?a:0,c,l)}},r.prototype.componentWillUnmount=function(){var o=this,e=this.editor;e&&(e.off(this.changeEvents(),this.handleEditorChange),e.off(this.beforeInputEvent(),this.handleBeforeInput),e.off("keypress",this.handleEditorChangeSpecial),e.off("keydown",this.handleBeforeInputSpecial),e.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach(function(i){e.off(i,o.boundHandlers[i])}),this.boundHandlers={},e.remove(),this.editor=void 0)},r.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},r.prototype.changeEvents=function(){var o,e,i,s=(i=(e=(o=_(this.view))===null||o===void 0?void 0:o.Env)===null||e===void 0?void 0:e.browser)===null||i===void 0?void 0:i.isIE();return s?"change keyup compositionend setcontent CommentChange":"change input compositionend setcontent CommentChange"},r.prototype.beforeInputEvent=function(){return $()?"beforeinput SelectionChange":"SelectionChange"},r.prototype.renderInline=function(){var o=this.props.tagName,e=o===void 0?"div":o;return C.createElement(e,{ref:this.elementRef,id:this.id})},r.prototype.renderIframe=function(){return C.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},r.prototype.getScriptSources=function(){var o,e,i=(o=this.props.scriptLoading)===null||o===void 0?void 0:o.async,s=(e=this.props.scriptLoading)===null||e===void 0?void 0:e.defer;if(this.props.tinymceScriptSrc!==void 0)return typeof this.props.tinymceScriptSrc=="string"?[{src:this.props.tinymceScriptSrc,async:i,defer:s}]:this.props.tinymceScriptSrc.map(function(l){return typeof l=="string"?{src:l,async:i,defer:s}:l});var u=this.props.cloudChannel,a=this.props.apiKey?this.props.apiKey:"no-api-key",c="https://cdn.tiny.cloud/1/".concat(a,"/tinymce/").concat(u,"/tinymce.min.js");return[{src:c,async:i,defer:s}]},r.prototype.getInitialValue=function(){return typeof this.props.initialValue=="string"?this.props.initialValue:typeof this.props.value=="string"?this.props.value:""},r.prototype.bindHandlers=function(o){var e=this;if(this.editor!==void 0){W(this.editor,o,this.props,this.boundHandlers,function(a){return e.props[a]});var i=function(a){return a.onEditorChange!==void 0||a.value!==void 0},s=i(o),u=i(this.props);!s&&u?(this.editor.on(this.changeEvents(),this.handleEditorChange),this.editor.on(this.beforeInputEvent(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):s&&!u&&(this.editor.off(this.changeEvents(),this.handleEditorChange),this.editor.off(this.beforeInputEvent(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},r.propTypes=U,r.defaultProps={cloudChannel:"6"},r})(C.Component);export{ne as P};