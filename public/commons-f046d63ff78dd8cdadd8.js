(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,r){"use strict";var n,a=r("q1tI"),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var A=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function s(){c=e(u.map((function(e){return e.props}))),l.canUseDOM?t(c):r&&(c=r(c))}var l=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){u.push(this),s()},o.componentDidUpdate=function(){s()},o.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},o.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return o(l,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(l,"canUseDOM",A),l}}},"8ypT":function(e,t,r){},Bl7J:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),i=r("Wbzz"),o=r("fCpR"),A=r.n(o),c=function(){return a.a.createElement("img",{src:A.a,alt:"Logo",style:{maxWidth:"100%",height:"auto",marginBottom:0,maxHeight:"100%"}})},u=function(e){e.siteTitle;return a.a.createElement("header",{style:{background:"FloralWhite",marginBottom:"1.45rem",borderBottomRightRadius:"20px",borderBottomLeftRadius:"20px"}},a.a.createElement("nav",{style:{display:"flex",flexDirection:"column"},role:"navigation","aria-label":"main navigation"},a.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}},a.a.createElement(i.Link,{className:"navbar-item",to:"/",style:{color:"white",textDecoration:"none",height:"182px",width:"273px"}},a.a.createElement(c,null)),a.a.createElement("h1",{style:{color:"black",fontSize:"3vw"}},"Heart of Texas Pet Loss & Grief Support")),a.a.createElement("div",null,a.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},a.a.createElement(i.Link,{className:"navbar-item",to:"/"},"Home"),a.a.createElement(i.Link,{className:"navbar-item",to:"/links/"},"Who We Are"),a.a.createElement(i.Link,{className:"navbar-item",to:"/memorial/"},"Pet Memorial"),a.a.createElement(i.Link,{className:"navbar-item",to:"/contact/"},"Contact")))))};u.defaultProps={siteTitle:""};var s=u;r("8ypT"),t.a=function(e){var t=e.children,r=Object(i.useStaticQuery)("3649515864");return a.a.createElement(a.a.Fragment,null,a.a.createElement(s,{siteTitle:r.site.siteMetadata.title}),a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},a.a.createElement("main",null,t)),a.a.createElement("footer",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem",display:"flex",flexDirection:"column",alignItems:"center"}},"© Heart of Texas Pet Loss and Grief Support Group ",(new Date).getFullYear(),a.a.createElement("a",{href:"https://melaniehublardhershman.com",target:"_blank"},"website by Melanie Hublard Hershman")))}},ZhWT:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,a="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var A,c,u,s;if(Array.isArray(t)){if((A=t.length)!=o.length)return!1;for(c=A;0!=c--;)if(!e(t[c],o[c]))return!1;return!0}if(n&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(s=t.entries();!(c=s.next()).done;)if(!o.has(c.value[0]))return!1;for(s=t.entries();!(c=s.next()).done;)if(!e(c.value[1],o.get(c.value[0])))return!1;return!0}if(a&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(s=t.entries();!(c=s.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((A=t.length)!=o.length)return!1;for(c=A;0!=c--;)if(t[c]!==o[c])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((A=(u=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(c=A;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,u[c]))return!1;if(r&&t instanceof Element)return!1;for(c=A;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!t.$$typeof)&&!e(t[u[c]],o[u[c]]))return!1;return!0}return t!=t&&o!=o}(e,t)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},fCpR:function(e,t){e.exports="data:image/png;base64,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"},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return me}));var n,a,i,o,A=r("17x9"),c=r.n(A),u=r("8+s/"),s=r.n(u),l=r("ZhWT"),f=r.n(l),p=r("q1tI"),d=r.n(p),m=r("6qGY"),b=r.n(m),h="bodyAttributes",v="htmlAttributes",y="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(g).map((function(e){return g[e]})),"charset"),T="cssText",C="href",I="http-equiv",x="innerHTML",w="itemprop",P="name",O="property",j="rel",L="src",z="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},B="defaultTitle",k="defer",S="encodeSpecialCharacters",M="onChangeClientState",Q="titleTemplate",q=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),G=[g.NOSCRIPT,g.SCRIPT,g.STYLE],W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},R=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Y=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},X=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},D=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},F=function(e){var t=_(e,g.TITLE),r=_(e,Q);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=_(e,B);return t||n||void 0},K=function(e){return _(e,M)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Z({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},U=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+W(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var A=i[o],c=A.toLowerCase();-1===t.indexOf(c)||r===j&&"canonical"===e[r].toLowerCase()||c===j&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(A)||A!==x&&A!==T&&A!==w||(r=A)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][u]&&(a[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var A=i[o],c=b()({},n[A],a[A]);n[A]=c}return e}),[]).reverse()},_=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,A=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,l=e.title,f=e.titleAttributes;ce(g.BODY,n),ce(g.HTML,a),Ae(l,f);var p={baseTag:ue(g.BASE,r),linkTags:ue(g.LINK,i),metaTags:ue(g.META,o),noscriptTags:ue(g.NOSCRIPT,A),scriptTags:ue(g.SCRIPT,u),styleTags:ue(g.STYLE,s)},d={},m={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(m[e]=p[e].oldTags)})),t&&t(),c(e,d,m)},oe=function(e){return Array.isArray(e)?e.join(""):e},Ae=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ce(g.TITLE,t)},ce=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),A=0;A<o.length;A++){var c=o[A],u=t[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===a.indexOf(c)&&a.push(c);var s=i.indexOf(c);-1!==s&&i.splice(s,1)}for(var l=i.length-1;l>=0;l--)r.removeAttribute(i[l]);a.length===i.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==o.join(",")&&r.setAttribute("data-react-helmet",o.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(g.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===x)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var A=void 0===t[n]?"":t[n];r.setAttribute(n,A)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[N[r]||r]=e[r],t}),t)},fe=function(e,t,r){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=le(r,n),[d.a.createElement(g.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=se(r),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+D(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+D(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case h:case v:return{toComponent:function(){return le(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=N[e]||e;if(r===x||r===T){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),d.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===x||e===T)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+D(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===G.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,A=e.noscriptTags,c=e.scriptTags,u=e.styleTags,s=e.title,l=void 0===s?"":s,f=e.titleAttributes;return{base:fe(g.BASE,t,n),bodyAttributes:fe(h,r,n),htmlAttributes:fe(v,a,n),link:fe(g.LINK,i,n),meta:fe(g.META,o,n),noscript:fe(g.NOSCRIPT,A,n),script:fe(g.SCRIPT,c,n),style:fe(g.STYLE,u,n),title:fe(g.TITLE,{title:l,titleAttributes:f},n)}},de=s()((function(e){return{baseTag:V([C,z],e),bodyAttributes:J(h,e),defer:_(e,k),encode:_(e,S),htmlAttributes:J(v,e),linkTags:U(g.LINK,[j,C],e),metaTags:U(g.META,[P,E,I,O,w],e),noscriptTags:U(g.NOSCRIPT,[x],e),onChangeClientState:K(e),scriptTags:U(g.SCRIPT,[L,x],e),styleTags:U(g.STYLE,[T],e),title:F(e),titleAttributes:J(y,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),pe)((function(){return null})),me=(a=de,o=i=function(e){function t(){return H(this,t),X(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return Z({},n,((t={})[r.type]=[].concat(n[r.type]||[],[Z({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case g.TITLE:return Z({},a,((t={})[n.type]=o,t.titleAttributes=Z({},i),t));case g.BODY:return Z({},a,{bodyAttributes:Z({},i)});case g.HTML:return Z({},a,{htmlAttributes:Z({},i)})}return Z({},a,((r={})[n.type]=Z({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=Z({},t);return Object.keys(e).forEach((function(t){var n;r=Z({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return d.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[q[r]||r]=e[r],t}),t)}(Y(a,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=Y(e,["children"]),n=Z({},r);return t&&(n=this.mapChildrenToProps(t,n)),d.a.createElement(a,n)},R(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(d.a.Component),i.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);me.renderStatic=me.rewind}).call(this,r("yLpj"))},vrFN:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),i=r("qhky"),o=r("Wbzz");function A(e){var t=e.description,r=e.lang,n=e.meta,A=e.title,c=Object(o.useStaticQuery)("63159454").site,u=t||c.siteMetadata.description;return a.a.createElement(i.a,{htmlAttributes:{lang:r},title:A,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:A},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:A},{name:"twitter:description",content:u}].concat(n)})}A.defaultProps={lang:"en",meta:[],description:""},t.a=A}}]);
//# sourceMappingURL=commons-f046d63ff78dd8cdadd8.js.map