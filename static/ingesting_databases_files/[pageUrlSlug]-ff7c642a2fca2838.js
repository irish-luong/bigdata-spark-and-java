(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[58859,84733],{62570:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/path/lesson/[courseUrlSlug]/[pageUrlSlug]",function(){return c(62700)}])},77479:function(a,b,c){"use strict";var d=c(20348),e=c(6526),f=c.n(e),g=c(59295),h=c.n(g),i=function(a){var b;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h(),{id:"generate-data",type:"application/ld+json",dangerouslySetInnerHTML:{__html:(b=a,JSON.stringify({"@context":"http://schema.org/","@type":b.type||void 0,description:b.description||void 0,headline:b.title||void 0,name:b.name||void 0,image:b.image||void 0,keywords:b.keywords||void 0,courseCode:b.courseCode||void 0,dateModified:b.dateModified||void 0,datePublished:b.datePublished||void 0,mainEntityOfPage:b.mainEntityOfPage||void 0,isAccessibleForFree:b.isAccessibleForFree||void 0,hasPart:b.isAccessibleForFree?{"@type":"WebPageElement",isAccessibleForFree:"False",cssSelector:".paywalled"}:void 0,author:b.author?{"@type":"Person",name:b.author}:void 0,provider:b.provider?{"@type":"EducationalOrganization",name:b.provider,url:"https://www.educative.io",email:"contact@educative.io"}:void 0,publisher:b.publisher?{"@type":"EducationalOrganization",name:b.publisher,legalName:"Educative Inc",logo:{"@type":"ImageObject",url:"https://www.educative.io/static/imgs/logos/MainLogoV2.png"}}:void 0,step:b.referral_credit?[{"@type":"HowToStep",name:"Copy your personal link",text:"Click the copy button",url:"https://www.educative.io/refer-a-friend"},{"@type":"HowToStep",name:"Share it with your friends",text:"Share it with your friends and you’ll get Educative Credit worth 10% of the value of their first purchase",url:"https://www.educative.io/refer-a-friend",image:"https://www.educative.io/static/imgs/ReferAFriendImageV2.png"},]:void 0}))}}),(0,d.jsxs)(f(),{children:[(0,d.jsx)("meta",{property:"og:url",content:new URL(a.og_url||"","https://www.educative.io").href}),a.canonical_url?(0,d.jsx)("link",{rel:"canonical",href:a.canonical_url}):null,a.title?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("title",{children:a.title}),(0,d.jsx)("meta",{property:"og:title",content:a.title},"title"),(0,d.jsx)("meta",{name:"twitter:title",content:a.title})]}):null,(0,d.jsx)("meta",{name:"description",content:a.description},"description"),(0,d.jsx)("meta",{property:"og:description",content:a.description},"ogDescription"),(0,d.jsx)("meta",{name:"twitter:description",content:a.description},"twitterDescription"),a.keywords?(0,d.jsx)("meta",{name:"keywords",content:a.keywords}):null,a.image?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("meta",{property:"og:image",content:a.image},"image"),(0,d.jsx)("meta",{property:"og:image:secure_url",content:a.image},"image_secure"),(0,d.jsx)("meta",{name:"twitter:image:src",content:a.image})]}):null,a.image&&a.width&&a.height&&a.alt?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("meta",{property:"og:image:width",content:a.width},"width"),(0,d.jsx)("meta",{property:"og:image:height",content:a.height},"height"),(0,d.jsx)("meta",{property:"og:image:alt",content:a.alt},"alt")]}):null,a.no_index&&(0,d.jsx)("meta",{name:"robots",content:"noindex"})]})]})};b.Z=i},59213:function(a,b,c){"use strict";c.d(b,{Z:function(){return q}});var d=c(20348),e=c(89703),f=c(51876),g=c(83318),h=c(131),i=c(56890),j=c(64977),k=c(40106);function l(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}var m=function(a){switch(a){case k.mQ.LEGACY:case k.mQ.ENTERPRISE:return 12;case k.mQ.LESSON:case k.mQ.PROJECT:return 32;case k.mQ.PLAN:case k.mQ.CLOUDLAB:case k.mQ.ASSESSMENT_EDITOR:return 40;default:return 12}},n=function(a){var b,c,k=a.mainSidebar,n=a.sidebarType,o=a.sidebarWidth,p=a.caretClasses,q=(b=e.useState(!1),c=2,function(a){if(Array.isArray(a))return a}(b)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(b,c)||function a(b,c){if(b){if("string"==typeof b)return l(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(d);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return l(b,c)}}(b,c)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=q[0],s=q[1],t=function(){return s(!0)},u=function(){return s(!1)},v=(0,i.ix)(function(a){return a.sidebar.toggle.sidebarCollapsed}),w=!v,x=(0,i.TL)();return e.useEffect(function(){var a="sidebar-caret-collapse-".concat(k?"main":"2"),b=document.getElementById(a);if(null!==b){var c=b.nextElementSibling;return c.addEventListener("mouseover",t),c.addEventListener("mouseleave",u),function(){c.removeEventListener("mouseover",t),c.removeEventListener("mouseleave",u)}}},[k]),(0,d.jsx)(g.Z,{overlay:"".concat(w?"Collapse":"Expand"," Sidebar"),overlayParentClasses:w?"ml-2":"ml-6",position:h.ZJ9,padding:"px-4 py-1.5",parentClasses:"".concat(p," tailwind-hidden sm:flex fixed cursor-pointer bg-gray-100 items-center z-30 rounded-full dark:bg-dark-90 border border-solid border-gray-200 dark:border-gray-A400 h-7 stroke-current \n        ").concat(w?" justify-center w-7":" -ml-4 overflow-hidden w-11 hover:w-14 transform hover:scale-x-110 justify-end","\n        ").concat(r||!w?"opacity-100":"opacity-0"),id:"sidebar-caret-collapse-".concat(k?"main":"2"),onClick:function(){return(0,j.GB)(x)},onMouseOver:function(){return s(!0)},onMouseOut:function(){return s(!1)},overlayParentStyles:{borderWidth:"0.5px"},"aria-label":"toggle sidebar",style:{left:w?"".concat(parseFloat(o)-1,"rem"):"0",transitionProperty:"width, left",transitionDuration:"200ms",top:"".concat(m(n)+64,"px")},role:"navigation",children:(0,d.jsx)(f.Z,{className:"stroke-current w-4 h-4 text-gray-900 dark:text-gray-300 transform ".concat(w?"rotate-0":"rotate-180 mr-1"," ")})})},o=c(69529);function p(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var q=function(a){var b=a.mainSidebar,c=a.sidebarClass,f=a.sidebarType,g=a.className,h=a.visibilityClasses,l=a.children,m=a.transitionDuration,q=void 0===m?"200ms":m,r=a.isEnterpriseNewSidebarEnabled,s=void 0!==r&&r,t=(0,i.ix)(function(a){return a.sidebar.toggle.sidebarCollapsed}),u=(0,i.TL)(),v={"ed-grid-sidebar":s?"16.5rem":"6rem","ed-grid-sidebar2":"20rem"},w={"ed-grid-sidebar":s?"4rem":"0rem","ed-grid-sidebar2":"0rem"},x=function(){return v[c]},y=function(){return w[c]};return e.useEffect(function(){f&&u(k.XP.setSidebarType(f))},[f,u]),(0,d.jsxs)(d.Fragment,{children:[!s&&(0,d.jsx)(n,{mainSidebar:b,sidebarType:f,caretClasses:void 0===h?"":h,sidebarWidth:x()}),(0,d.jsx)(o.ZP,{in:!t,timeout:0,children:function(a){return(0,d.jsx)("nav",{className:"overflow-x-hidden overscroll-y-contain ".concat(c," ").concat(g),style:function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){p(a,b,c[b])})}return a}({transition:"max-width ".concat(q,", width ").concat(q)},(0,j.lp)("max-width",x(),y())[a],(0,j.lp)("width",x(),y())[a]),children:(0,d.jsx)("div",{className:"h-full",style:{width:"".concat(s?"inherit":x())},children:l})})}})]})}},28573:function(a,b,c){"use strict";c.d(b,{"$p":function(){return t},Bn:function(){return k},LI:function(){return p},Q6:function(){return e},QH:function(){return i},Sj:function(){return n},Xw:function(){return d},"_q":function(){return u},"d$":function(){return m},ks:function(){return r},nX:function(){return l},oC:function(){return s},q1:function(){return g},qH:function(){return h},qo:function(){return q},sO:function(){return f},we:function(){return o},zG:function(){return j}});var d="100%",e="4px",f="4px",g="4px",h="4px",i="4px",j="4px",k="4px",l="4px",m="4px",n="4px",o="4px",p="4px",q="4px",r="4px",s="4px",t="4px",u="4px"},95929:function(a,b,c){"use strict";c.d(b,{AC:function(){return u},AI:function(){return l},Ay:function(){return B},C1:function(){return G},EY:function(){return x},G2:function(){return e},Iq:function(){return o},LZ:function(){return d},MY:function(){return k},"R$":function(){return F},RU:function(){return i},S_:function(){return p},UD:function(){return g},VR:function(){return n},WG:function(){return r},WX:function(){return f},XB:function(){return z},b5:function(){return m},dd:function(){return w},e3:function(){return q},m5:function(){return y},mo:function(){return D},nD:function(){return s},oU:function(){return v},s0:function(){return C},sK:function(){return E},uH:function(){return h},vn:function(){return A},wA:function(){return t},wQ:function(){return j}});var d="Nunito Sans",e="Droid Serif, Georgia, serif",f="331px",g=1400,h=65,i=165,j=1024,k=65,l="Learn in-demand tech skills in half the time",m="Creative Commons-Attribution-ShareAlike 4.0 (CC-BY-SA 4.0)",n="150px",o="300px",p=65,q=16,r=64,s=56,t="56px",u="96px",v="375px",w=10874637,x=75,y="128px",z="64px",A="298px",B=320,C=214,D=48,E=["general","generic","community creator","generate","generator","communitycreator","What","definition","How","create","int","text","problem","vs","collection","collections","get","this","/*","//","0x80240017","18.04","2019","each","Error 1366x768","Fail","fast","fake","menu","right","side","size","smart","some","zero","year","world","without","with","weight","type",],F=["i","me","my","myself","we","our","ours","ourselves","you","you're","you've","you'll","you'd","your","yours","yourself","yourselves","he","him","his","himself","she","she's","her","hers","herself","it","it's","its","itself","they","them","their","theirs","themselves","what","which","who","whom","this","that","that'll","these","those","am","is","are","was","were","be","been","being","have","has","had","having","do","does","did","doing","a","an","the","and","but","if","or","because","as","until","while","of","at","by","for","with","about","against","between","into","through","during","before","after","above","below","to","from","up","down","in","out","on","off","over","under","again","further","then","once","here","there","when","where","why","how","all","any","both","each","few","more","most","other","some","such","no","nor","not","only","own","same","so","than","too","very","s","t","can","will","just","don","don't","should","should've","now","d","ll","m","o","re","ve","y","ain","aren","aren't","couldn","couldn't","didn","didn't","doesn","doesn't","hadn","hadn't","hasn","hasn't","haven","haven't","isn","isn't","ma","mightn","mightn't","mustn","mustn't","needn","needn't","shan","shan't","shouldn","shouldn't","wasn","wasn't","weren","weren't","won","won't","wouldn","wouldn't",],G="1012px"},84355:function(a,b,c){"use strict";c.d(b,{Br:function(){return k},EW:function(){return l},GF:function(){return h},M7:function(){return n},Mq:function(){return g},Vf:function(){return m},Vh:function(){return i},WR:function(){return p},Xw:function(){return o},ai:function(){return j},eU:function(){return s},gv:function(){return f},nd:function(){return q},qJ:function(){return r},tR:function(){return e}});var d=function a(b){!function(a,b){if(!(a instanceof b))throw TypeError("Cannot call a class as a function")}(this,a),this.int=b,this.pixels="".concat(b,"px")},e=new d(768),f=new d(1024),g=new d(780),h=new d(800),i=new d(730),j=new d(480),k=new d(400),l=new d(320),m=new d(375),n=new d(590),o=new d(660),p=new d(1250),q=new d(1136),r=new d(1023),s=new d(960)},62700:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSP":function(){return e},default:function(){return d.default}});var d=c(59362),e=!0},59362:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSP":function(){return m}});var d=c(20348),e=c(52001),f=c(60958),g=c(46757),h=c(131),i=c(68355),j=c(77479);function k(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var l=function(a){a.isPlan,a.planAuthorId,a.planId;var b,c,l,m=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["isPlan","planAuthorId","planId"]),n=(0,f.useRouter)(),o=n.asPath.startsWith("/plan/page")&&n.asPath.endsWith("/template");Object.keys(n.query).length&&(n.query.courseUrlSlug&&n.query.pageUrlSlug?(n.query.course_url_slug=n.query.courseUrlSlug,n.query.page_url_slug=n.query.pageUrlSlug):(n.query.author_id=n.query.authorId,n.query.collection_id=n.query.collectionId,n.query.page_id=n.query.pageId),n.query.assessment_id=g.parseUrl(n.asPath).url.endsWith("/assessment")?null!==(c=n.query.pageId)&& void 0!==c?c:n.query.page_id:void 0,n.query.project_id=g.parseUrl(n.asPath).url.endsWith("/project")?null!==(l=n.query.pageId)&& void 0!==l?l:n.query.page_id:void 0);var p=(null===(b=m.ssrContent)|| void 0===b?void 0:b.metaData)||h.DX8,q=p.description,r=p.title,s=p.status;return(0,d.jsxs)(d.Fragment,{children:[!o&&(0,d.jsx)(i.Z,{noProfile:!0,showNavigation:!1,showNavigationLoggedOutOnly:!0,showSearchBar:!1,alwaysShowSidebarToggle:!0}),s===h.Nbt.ACTIVE&&(0,d.jsx)(j.Z,{title:r,description:q}),(0,d.jsx)(e.default,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){k(a,b,c[b])})}return a}({},m))]})},m=!0;b.default=l},16876:function(a,b,c){"use strict";var d=c(20348);function e(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}c(89703);var f={"top-right":"absolute transform translate-x-1/2 -translate-y-1/2","top-left":"absolute transform -translate-x-1/2 -translate-y-1/2","bottom-right":"absolute transform translate-x-1/2 translate-y-1/2","bottom-left":"absolute transform -translate-x-1/2 translate-y-1/2"},g=function(a){var b,c,g=a.anchorOrigin,h=a.className,i=a.children,j=a.bgFontClass,k=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["anchorOrigin","className","children","bgFontClass"]);return(0,d.jsx)("div",(b=function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){e(a,b,c[b])})}return a}({className:"inline-flex h-5 items-center justify-center align-middle px-1 ".concat(void 0===j?"bg-primary text-white font-bold tracking-wide":j," caption-text rounded-sm\n      ").concat(g?f[g]:"","\n      ").concat(void 0===h?"":h),style:{minWidth:"20px"}},k),c=(c={children:i},c),Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(c)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(c)).forEach(function(a){Object.defineProperty(b,a,Object.getOwnPropertyDescriptor(c,a))}),b))};b.Z=g},30623:function(a,b,c){"use strict";var d,e,f=c(89703);function g(){return(g=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var h=function(a){return f.createElement("svg",g({width:20,height:21,viewBox:"0 0 20 21",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},a),d||(d=f.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.2 5a6 6 0 0 1 2.7 4.2l2-.3a8 8 0 0 0-3.7-5.7l-1 1.7ZM15.2 13a6 6 0 0 1-4.1 3l.3 2a8 8 0 0 0 5.5-4l-1.7-1ZM6.9 15.2A6 6 0 0 1 4 10.9l-2 .3A8 8 0 0 0 5.8 17l1-1.7ZM5 6.8A6 6 0 0 1 9.3 4L9 2a8 8 0 0 0-5.7 3.6l1.7 1Z"})),e||(e=f.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM10.2 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM17 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"})))};b.Z=h},25803:function(a,b,c){"use strict";var d,e=c(89703);function f(){return(f=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var g=function(a){return e.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-facebook"},a),d||(d=e.createElement("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})))};b.Z=g},84372:function(a,b,c){"use strict";var d,e=c(89703);function f(){return(f=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var g=function(a){return e.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-folder"},a),d||(d=e.createElement("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})))};b.Z=g},24182:function(a,b,c){"use strict";var d,e,f,g=c(89703);function h(){return(h=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var i=function(a){return g.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-linkedin"},a),d||(d=g.createElement("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"})),e||(e=g.createElement("rect",{x:2,y:9,width:4,height:12})),f||(f=g.createElement("circle",{cx:4,cy:4,r:2})))};b.Z=i},90164:function(a,b,c){"use strict";var d,e,f=c(89703);function g(){return(g=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var h=function(a){return f.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-plus"},a),d||(d=f.createElement("line",{x1:12,y1:5,x2:12,y2:19})),e||(e=f.createElement("line",{x1:5,y1:12,x2:19,y2:12})))};b.Z=h},45548:function(a,b,c){"use strict";var d,e=c(89703);function f(){return(f=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var g=function(a){return e.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-twitter"},a),d||(d=e.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})))};b.Z=g},28961:function(a,b,c){"use strict";var d,e,f=c(89703);function g(){return(g=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var h=function(a){return f.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-x"},a),d||(d=f.createElement("line",{x1:18,y1:6,x2:6,y2:18})),e||(e=f.createElement("line",{x1:6,y1:6,x2:18,y2:18})))};b.Z=h},22760:function(a,b,c){"use strict";var d,e=c(89703);function f(){return(f=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var g=function(a){return e.createElement("svg",f({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a),d||(d=e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.0533 0C8.23178 0 6.89962 0.70496 6.10195 1.77452C5.60862 2.43599 5.34697 3.20198 5.28561 3.94842H3.08336C1.41475 3.94842 0.0259637 5.27933 0.0259637 6.95706V12.0217H1.02596C1.50895 12.0217 2.20596 12.1114 2.74347 12.3922C3.21781 12.64 3.53995 13.0049 3.53995 13.7073C3.53995 14.8258 3.09819 15.2861 2.66306 15.5331C2.13929 15.8304 1.47459 15.8907 1.02596 15.8907H0.0294409L0.0259698 16.8872C0.0208575 18.3549 0.0182714 19.3806 0.0169633 20.0395C0.0163093 20.3689 0.0159747 20.6067 0.0158036 20.7622L0.015625 20.9914C0.015625 22.6755 1.42136 24 3.08336 24H16.5237C18.1857 24 19.5914 22.6755 19.5914 20.9914V17.8856C20.0579 17.8408 20.5712 17.7187 21.0597 17.4766C21.5858 17.2157 22.098 16.8074 22.4737 16.1967C22.8493 15.586 23.0526 14.831 23.0526 13.9327C23.0526 12.1163 22.2604 10.9195 21.1705 10.3059C20.6693 10.0238 20.1171 9.87454 19.5914 9.84059V6.95706C19.5914 5.27289 18.1857 3.94842 16.5237 3.94842H14.274C14.2582 3.84011 14.2382 3.73275 14.2149 3.62731C14.0967 3.09395 13.874 2.52838 13.544 2.00625C12.8818 0.958344 11.7195 0 10.0533 0ZM7.31793 4.72902C7.1978 4.19481 7.30297 3.5095 7.70517 2.97021C8.08062 2.46678 8.78442 2 10.0533 2C10.8548 2 11.4507 2.43758 11.8534 3.07474C12.0559 3.39514 12.1923 3.74439 12.2622 4.05979C12.3356 4.39125 12.3197 4.61042 12.2977 4.69364L11.9671 5.94842H16.5237C17.1362 5.94842 17.5914 6.43173 17.5914 6.95706V12.5113L18.9966 11.8886C19.1598 11.8162 19.6933 11.7695 20.1894 12.0487C20.5914 12.275 21.0526 12.7689 21.0526 13.9327C21.0526 14.5245 20.9212 14.9033 20.7701 15.1489C20.6191 15.3944 20.4127 15.565 20.1714 15.6847C19.6433 15.9465 19.025 15.9248 18.8327 15.877L17.5914 15.5683V20.9914C17.5914 21.5167 17.1362 22 16.5237 22H3.08336C2.47086 22 2.01562 21.516 2.01562 20.9907L2.0158 20.7644C2.01597 20.6095 2.01631 20.3724 2.01696 20.0434C2.01797 19.5334 2.01975 18.8028 2.02288 17.8166C2.52427 17.7389 3.10397 17.5825 3.65031 17.2724C4.72301 16.6636 5.53995 15.5322 5.53995 13.7073C5.53995 12.1201 4.66986 11.1422 3.6696 10.6196C3.12826 10.3367 2.54592 10.1812 2.02596 10.1002V6.95706C2.02596 6.42529 2.47746 5.94842 3.08336 5.94842H7.59215L7.31793 4.72902ZM14.4448 12.9744L10.029 8.58582L8.61914 10.0044L11.6327 12.9994L8.69868 16.0208L10.1335 17.4141L14.4448 12.9744Z",fill:"current"})))};b.Z=g}},function(a){a.O(0,[9566,7684,49774,49685,964,50434,39158,69529,78945,2424,49673,12889,27884,83318,74211,8981,30574,68355,2465,65378,71875,55563,72128,97141,77237,40259,35401,15178,66196,65048,169,4004,92888,40179],function(){var b;return a(a.s=62570)}),_N_E=a.O()}])
//# sourceMappingURL=[pageUrlSlug]-ff7c642a2fca2838.js.map