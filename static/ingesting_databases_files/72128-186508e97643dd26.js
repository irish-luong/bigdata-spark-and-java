"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72128],{72128:function(a,b,c){c.d(b,{Z:function(){return aq}});var d,e,f=c(20348),g=c(89508),h=c(46367),i=c.n(h),j=c(60958),k=c(89703),l=c(62200),m=c(87954),n=c(87471),o=c(2348),p=c(83318),q=c(51571),r=c(2465),s=c(67506),t=c(76472),u=c(76116),v=c(29213),w=c(81813),x=c(11619),y=c(131),z=c(6498),A=c(94556),B=c(35300),C=c(82172),D=c(16876),E=c(25579),F=c(46757),G=c(30031),H=c(55606);function I(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function J(a){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function K(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){I(a,b,c[b])})}return a}function L(a,b){return(L=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}var M=(0,j.withRouter)((0,n.G)(z.Z.ARTICLE,A.k,function(a){return{connectDropTarget:a.dropTarget()}})((0,o.E)(z.Z.ARTICLE,B.V,function(a,b){return{connectDragSource:a.dragSource(),isDragging:b.isDragging()}})(function(a){!function(a,b){if("function"!=typeof b&&null!==b)throw TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&L(a,b)}(e,a);var b,c,d=(b=e,c=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}(),function(){var a,d,e,f,g=J(b);if(c){var h=J(this).constructor;f=Reflect.construct(g,arguments,h)}else f=g.apply(this,arguments);return d=this,(e=f)&&("object"==(a=e,a&&"undefined"!=typeof Symbol&&a.constructor===Symbol?"symbol":typeof a)||"function"==typeof e)?e:function(a){if(void 0===a)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return a}(d)});function e(){return!function(a,b){if(!(a instanceof b))throw TypeError("Cannot call a class as a function")}(this,e),d.apply(this,arguments)}return e.prototype.render=function(){var a,b,c,d=this.props,e=d.author_id,g=d.collection_id,h=d.urlSlug,j=d.is_versions,k=d.customWorkType,l=d.page,m=d.editMode,n=d.router,o=d.completionStatus,u=d.is_priced,v=d.isZeroPriced,w=d.isUserLoggedIn,x=d.owned_by_reader,z=d.contentLoading,A=d.title,B=d.lessonCommentCount,I=d.documentKeys,J=d.addArticle,L=d.addCategory,M=d.connectDragSource,N=d.connectDropTarget,O=d.type,P=d.categoryId,Q=d.index,R=d.parentIndex,S=d.workType,T=d.sidebarInEditMode,U=d.pathAuthorId,V=d.pathId,W=d.isStandaloneModule,X=d.is_mini,Y=d.isCategoryLastLesson,Z=(null==n?void 0:null===(a=n.query)|| void 0===a?void 0:a.test_lab)==="true",$=l.type===y.RIu.PATH_INTERNAL_MODULE?{editUrl:{href:"/module/edit/".concat(l.author_id,"/").concat(l.collection_id)},viewUrl:{href:(0,G.Z)(l.author_id,l.collection_id,null,!1,y.dLO.MODULE,e,g)}}:(0,t.Z)(e,g,void 0,l.id,void 0,!1,h,j,k,U,V,null,null,W,!1,!1,null,!1,Z),_=$.editUrl,aa=$.viewUrl,ab=K({},_),ac=m?_.href:aa.href,ad=(0,E.Z)(ac,F.parseUrl(n.asPath).url),ae=u&&!l.is_preview&&!x&&!(v&&w),af=m&&[y.RIu.LESSON,y.RIu.SHOT,y.RIu.PATH_EXTERNAL_MODULE,].includes(l.type),ag=l.type===y.RIu.SHOT||l.is_preview&&(void 0===l.is_lesson|| !0===l.is_lesson)&&u&&!x,ah=O===y.qen.ASSESSMENT_QUESTION,ai=T?(0,f.jsx)("div",{className:"cursor-move flex",children:(0,f.jsx)(q.Z,{className:"dark:text-dark-contrastText stroke-current",width:21,height:21})}):(0,f.jsx)("div",{className:"flex-grow-0 flex-shrink-0 -ml-2",style:{marginTop:"-13px",width:"15px"},children:C.CollectionSidebarLessonIcon(o===s.x,m||j,ad,ae)}),aj=(0,f.jsx)("div",{className:[ad&&!T&&"transform -translate-y-2 relative",ad&&"bg-gray-200 dark:bg-dark-70",].filter(Boolean).join(" "),style:{zIndex:ad?1:2},children:(0,f.jsxs)("div",{className:[!T&&!Y&&"border-l",T?"ml-6 mr-6 py-1":"border-0 border-black border-solid dark:border-gray-A100 ml-10 mr-4 py-3","flex flex-nowrap items-start justify-start overflow-visible",ad&&!T&&"relative top-2",].filter(Boolean).join(" "),children:[(0,f.jsxs)("div",{className:"flex w-full",children:[ai,(0,f.jsx)(i(),(b=K({prefetch:!1},m?ab:aa),c=(c={children:(0,f.jsx)("a",{className:["cursor-pointer duration-200 flex-grow-0 overflow-hidden min-h-[48px] min-w-[48px] mr-1 sm:min-h-[auto] sm:min-w-[auto] w-full",z&&"dark:text-dark-70 pointer-events-none text-gray-300",af&&"pointer-events-none text-gray-700",T?"mb-0":"mb-auto",].filter(Boolean).join(" "),id:ag&&H.env.REACT_APP_STANDALONE?"selenium-preview-lesson":"",onClick:function(a){l.type===y.RIu.PATH_INTERNAL_MODULE&&(a.preventDefault(),window.open(_.href))},style:{marginLeft:T?"8px":"18px",marginTop:T?"0px":"-14px",textDecoration:"none"},children:(0,f.jsxs)("div",{className:"flex w-full justify-between",children:[(0,f.jsx)("span",{className:"body-small",children:A}),m&&(null==B?void 0:B[null==I?void 0:I[l.id]])>0&&(0,f.jsx)(p.Z,{overlay:"This lesson has ".concat(null==B?void 0:B[I[l.id]]," unresolved comments."),parentClasses:"ml-auto",position:y.YS6,children:(0,f.jsx)(D.Z,{anchorOrigin:"top-right",className:"-mt-1 rounded-full"})})]})})},c),Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(c)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(c)).forEach(function(a){Object.defineProperty(b,a,Object.getOwnPropertyDescriptor(c,a))}),b))]}),T&&!ah&&(0,f.jsxs)("div",{className:"flex",children:[(0,f.jsx)("div",{className:"flex ml-4",children:(0,f.jsx)(p.Z,{overlay:"Add ".concat(O===y.qen.ASSESSMENT_QUESTION?"question ":S===y.dLO.PLAN?"task ":"lesson "," below"),parentClasses:"flex",position:y.YS6,children:(0,f.jsx)(r.Z,{zoomOnHover:!0,icon:"lessonPlus",onClick:function(){return J(P,Q)}})})}),![y.dLO.PATH,y.dLO.PLAN].includes(S)&&!X&&(0,f.jsx)("div",{className:"flex ml-3",children:(0,f.jsx)(p.Z,{overlay:"Add category below",parentClasses:"flex",position:y.YS6,children:(0,f.jsx)(r.Z,{zoomOnHover:!0,icon:"categoryPlus",onClick:function(){return L(Q,R)}})})})]})]})},l.id);return T?M(N(aj)):aj},e}(k.Component)))),N=c(70743);function O(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function P(a){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function Q(a,b){return(Q=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}var R="dark:text-dark-contrastText stroke-current",S=function(a){!function(a,b){if("function"!=typeof b&&null!==b)throw TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&Q(a,b)}(e,a);var b,c,d=(b=e,c=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}(),function(){var a,d,e,f,g=P(b);if(c){var h=P(this).constructor;f=Reflect.construct(g,arguments,h)}else f=g.apply(this,arguments);return d=this,(e=f)&&("object"==(a=e,a&&"undefined"!=typeof Symbol&&a.constructor===Symbol?"symbol":typeof a)||"function"==typeof e)?e:function(a){if(void 0===a)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return a}(d)});function e(){var a;return!function(a,b){if(!(a instanceof b))throw TypeError("Cannot call a class as a function")}(this,e),a=d.apply(this,arguments),a.state={collapsed:!1},a.getPageCompletionStatus=function(b){var c=a.props.courseCompletion||{};if(c.ALL_DONE)return s.x;var d=b.toString();if(({}).hasOwnProperty.call(c,d)){var e=c[d];if(e&&e.length>1&&!isNaN(Date.parse(e)))return s.x}return s.b},a}return e.prototype.render=function(){var a=this,b=this.props,c=b.data,d=b.collection_id,e=b.author_id,h=b.owned_by_reader,i=b.is_priced,j=b.isZeroPriced,k=b.isUserLoggedIn,l=b.articles_titles,m=b.editMode,n=b.contentLoading,o=b.is_versions,z=b.documentKeys,A=b.lessonCommentCount,B=b.connectDragSource,C=b.connectDropTarget,D=b.moveItem,E=b.addArticle,F=b.addCategory,G=b.endDrag,H=b.startDrag,I=b.router,J=b.index,K=b.workType,L=b.sidebarInEditMode,P=b.pathAuthorId,Q=b.pathId,S=b.isReview,T=b.isStandaloneModule,U=b.is_mini,V=b.collapsed,W=b.toggleCollapse,X=b.useModularTypescale,Y=c.title||"Untitled category",Z=c.type===y.j1J.ASSESSMENT,$=c.type===y.j1J.CLOUD_LAB,_=c.type===y.j1J.EXTERNAL_ASSESSMENT,aa=c.type===y.j1J.PROJECT||c.type===y.j1J.EXTERNAL_PROJECT,ab=(0,x.Z)(null==I?void 0:I.asPath),ac=I.query.course_url_slug,ad=c.pages.map(function(b,g){var p=l[b.id]||b.title||y.Va9,q=o?s.b:a.getPageCompletionStatus(b.id),r={author_id:e,collection_id:d,urlSlug:ac,is_versions:o,customWorkType:ab,page:b,editMode:m,completionStatus:q,is_priced:i,isZeroPriced:j,isUserLoggedIn:k,owned_by_reader:h,contentLoading:n,title:p,lessonCommentCount:A,documentKeys:z,moveItem:D,addArticle:E,addCategory:F,endDrag:G,startDrag:H,index:g,parentIndex:J,type:Z?y.qen.ASSESSMENT_QUESTION:"article",categoryId:c.id,workType:K,sidebarInEditMode:L,pathAuthorId:P,pathId:Q,isStandaloneModule:T,is_mini:U,isCategoryLastLesson:c.pages.length-1===g};return(0,f.jsx)(M,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){O(a,b,c[b])})}return a}({},r))}),ae=(0,t.Z)(e,d,c.id,void 0,void 0,!1,ac,o,ab,P,Q,S,void 0,T),af=m?ae.editUrl:ae.viewUrl,ag=(0,t.Z)(e,d,void 0,void 0,c.id,!1,ac,o,ab,P,Q,S,void 0,T),ah=this.props.editMode?ag.editUrl:ag.viewUrl,ai=(0,t.Z)(e,d,void 0,void 0,void 0,!1,ac,o,ab,P,Q,S,c.id,T),aj=this.props.editMode?ai.editUrl:ai.viewUrl,ak=Z||aa||$,al=new g.Z,am=(0,f.jsxs)(f.Fragment,{children:[L&&Y!==y.V4B&&!ak&&(0,f.jsx)("div",{className:"mr-2 mt-1 cursor-move",children:(0,f.jsx)(q.Z,{className:R,width:21,height:21})}),(0,f.jsxs)(p.Z,{overlay:Y,parentClasses:"cursor-pointer flex flex-col text-ellipsis overflow-hidden",style:{wordBreak:"break-word"},position:y.YS6,children:[(ak||_)&&(0,f.jsxs)("div",{className:"flex ".concat(L?"mb-2":""),children:[L&&(0,f.jsx)("div",{className:"mr-2 cursor-move",children:(0,f.jsx)(q.Z,{className:R,width:21,height:21})}),(0,f.jsx)("p",{className:"body-small font-semibold tracking-widest text-transform: uppercase ".concat(L?"m-0":""),children:aa&&"Mini Project"||$&&(0,f.jsx)(f.Fragment,{children:"Cloud Lab - ".concat((0,N.dJ)(60*c.time_limit,2,c.time_limit<=60))})||Z&&" Course Assessment"})]}),(0,f.jsxs)("div",{className:"flex",children:[(Z||_)&&(0,f.jsx)("div",{className:"flex mr-4",children:(0,f.jsx)(u.Z,{style:{marginTop:"3px"}})}),aa&&(0,f.jsx)("div",{className:"flex mr-4",children:(0,f.jsx)(v.Z,{style:{marginTop:"3px"}})}),$&&(0,f.jsx)("div",{className:"flex mr-4",children:(0,f.jsx)(w.Z,{className:"fill-current mt-1 dark:text-dark-contrastText text-black"})}),(0,f.jsx)("div",{className:"flex",children:(0,f.jsx)("h5",{className:"m-0 ".concat(void 0!==X&&X?"heading-five":""),children:Y})})]})]})]}),an=(0,f.jsxs)("div",{className:"flex flex-col mb-4 ".concat((ak||_)&&Number(I.query.page_id||al.decode(I.query.page_url_slug))===Number(c.id)?"bg-gray-200 dark:bg-dark-80":""," ").concat(_&&m?"pointer-events-none":""),onClick:function(){if(!o){if(Z||_)return a.props.router.push(af.href);if(aa)return a.props.router.push(ah.href);else if($)return a.props.router.push(aj.href)}},children:[(0,f.jsxs)("div",{id:"category-collapse",onClick:W,className:"".concat(Y===y.V4B?"hidden":"flex"," items-center justify-between flex-nowrap ").concat(L?"mb-8":"mb-4"," ml-6 mr-4 mt-2"),children:[L?(0,f.jsx)("div",{className:"flex pt-3",children:am}):am,(0,f.jsxs)("div",{className:"flex",children:[L&&0===ad.length&&!(ak||_)&&(0,f.jsx)(p.Z,{overlay:"Add lesson below",parentClasses:"flex mx-2 pt-4",position:y.YS6,children:(0,f.jsx)(r.Z,{zoomOnHover:!0,icon:"lessonPlus",onClick:function(){return E(c.id,0)}})}),!ak&&!_&&(0,f.jsx)("button",{className:"icon-default rounded-full","aria-label":"collapse category",children:(0,f.jsx)(r.Z,{icon:"ChevronUp",zoomOnHover:!0,rotate:V,size:24})})]})]}),(0,f.jsx)("div",{className:"".concat(V?"hidden":"flex"," flex-col flex-shrink-0"),children:ad})]});return L&&Y!==y.V4B?B(C(an)):an},e}(k.Component);S.defaultProps={editMode:!1,workType:y.dLO.COLLECTION,sidebarInEditMode:!1};var T=(0,j.withRouter)((0,n.G)([z.Z.CATEGORY,z.Z.ARTICLE],A.t,function(a,b){return{connectDropTarget:a.dropTarget(),canDrop:b.canDrop()}})((0,o.E)(z.Z.CATEGORY,B.F,function(a,b){return{connectDragSource:a.dragSource(),isDragging:b.isDragging()}})(S))),U=c(75779),V=c(54825);function W(){return(W=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var X=function(a){return k.createElement("svg",W({width:28,height:24,viewBox:"0 0 28 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"text-black dark:text-dark-contrastText fill-current"},a),d||(d=k.createElement("path",{d:"M26.06 0H1.94C.87 0 0 .86 0 1.92v16.22c0 1.06.87 1.92 1.94 1.92H16l-.42 2.57c-.08.49.08.92.43 1.17.35.25.82.27 1.26.04l3.03-1.59a.64.64 0 01.4 0l3.04 1.59c.2.1.42.16.63.16.23 0 .44-.07.63-.2.35-.25.5-.68.43-1.17L25 20.06h1.06c1.07 0 1.94-.86 1.94-1.92V1.92C28 .86 27.13 0 26.06 0zM20.5 16.77a3.37 3.37 0 01-3.38-3.35 3.37 3.37 0 013.38-3.35c1.87 0 3.38 1.5 3.38 3.35a3.37 3.37 0 01-3.38 3.35zm.98 4.03c-.57-.3-1.39-.3-1.95 0l-2.15 1.12.69-4.13a5.05 5.05 0 004.87 0l.27 1.61.42 2.52-2.15-1.12zm4.86-2.66c0 .15-.13.28-.28.28h-1.33l-.3-1.84v-.02a4.95 4.95 0 001.12-3.14c0-2.76-2.27-5-5.05-5a5.03 5.03 0 00-5.04 5c0 1.19.42 2.28 1.13 3.14v.02l-.31 1.84H1.94a.28.28 0 01-.28-.28V1.92c0-.15.13-.27.28-.27h24.12c.15 0 .28.12.28.27v16.22z",fill:"current"})),e||(e=k.createElement("path",{d:"M23.12 4.74H4.28a.83.83 0 00-.83.83c0 .45.37.82.83.82h18.84c.46 0 .83-.37.83-.82a.83.83 0 00-.83-.83zM12.26 9.2H4.28a.83.83 0 00-.83.83c0 .46.37.83.83.83h7.98a.83.83 0 100-1.65z",fill:"current"})))},Y=c(48745),Z=c(38761),$=c(32733),_=c(56890),aa=c(9914),ab=c(75653),ac=c(78471),ad=c(50187),ae=c(70649),af=c(68597),ag=c(61919),ah=c(19817),ai=c(40106),aj=c(59213);function ak(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function al(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function am(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){al(a,b,c[b])})}return a}function an(a,b){return b=null!=b?b:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))}),a}var ao=new g.Z,ap=function(a,b,c,d){var e=b[a.id]||"",f=c[a.id]||y.Va9;return e.toLowerCase().includes(d)||f.toLowerCase().includes(d)||a.title.toLowerCase().includes(d)},aq=function(a){var b,c,d,e,g,h=a.addArticle,n=void 0===h?function(){}:h,o=a.addCategory,p=void 0===o?function(){}:o,q=a.contentLoading,r=a.editMode,s=void 0!==r&&r,t=a.endDrag,u=void 0===t?function(){}:t,v=a.isInReviewerMode,w=a.markAsCompleteLoading,A=a.moveItem,B=void 0===A?function(){}:A,C=a.resetCourseCompletionLoading,D=a.resetCollectionCompletionStatus,E=void 0===D?function(){}:D,F=a.setCollectionCompletionStatus,H=void 0===F?function(){}:F,I=a.sidebarInEditMode,J=void 0!==I&&I,K=a.startDrag,L=void 0===K?function(){}:K,M=a.useModularTypescale,N=void 0!==M&&M,O=(e=k.useState({searchString:"",stateUpdatedOnNavigation:!1,collapsedState:{}}),g=2,function(a){if(Array.isArray(a))return a}(e)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(e,g)||function a(b,c){if(b){if("string"==typeof b)return ak(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(d);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return ak(b,c)}}(e,g)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),P=O[0],Q=O[1],R=(0,j.useRouter)(),S=k.useRef(null),W=(0,_.ix)(function(a){return a.author.collection}),aq=W.is_guide,ar=(0,_.ix)(function(a){return a.user.courseCompletion}),as=(0,_.ix)(function(a){return a.user.info.data}),at=(null===(b=W.instance)|| void 0===b?void 0:b.details)||{},au=at.author_id,av=(null===(c=at.toc)|| void 0===c?void 0:c.categories)||[],aw=at.collection_id,ax=at.title,ay=ar["CourseCompletion_".concat(au,"_").concat(aw)],az=at.url_slug,aA=R.asPath.split("?")[0],aB=at.is_parent_plan,aC=at.is_plan,aD=W.is_published,aE=at.is_priced,aF=0===at.price||0===at.discounted_price,aG=at.is_mini,aH=!!at.is_standalone_module&&!R.query.encodedPathInfo,aI=(0,ah.Z)(aA),aJ=null===(d=W.instance)|| void 0===d?void 0:d.owned_by_reader,aK=at.page_tags||{},aL=at.page_titles,aM=at.path_author_id,aN=at.path_id,aO=at.read_time,aP=null==as?void 0:as.user_id,aQ=at.work_mode,aR=s?at.work_type:(0,x.Z)(aA),aS=aR===y.dLO.PATH?"Path":aR===y.dLO.MODULE?"Module":aC?"Plan":"Course",aT=(0,ag.Z)(aS),aU=aR===y.dLO.COLLECTION&&aQ!==y.MOP.EDIT,aV=(0,ad.ZP)(av),aW=az?"/".concat((0,af.Z)(aT),"/").concat(az,"/certificate"):"/".concat(aT,"/page/").concat(au,"/").concat(aw,"/certificate"),aX=(0,G.Z)(au,aw,az,aI&&!aD||s&&v,aT,aM,aN,!1,aH),aY=aH||aB?"/module/edit/".concat(au,"/").concat(aw):(0,ae.o3)(as,aT,at.is_private,at.organization_id)?"/".concat(aT,"/").concat(au,"/").concat(aw,"/edit"):"/".concat(aT,"editor/").concat(au,"/").concat(aw),aZ=aP===Number(au),a$=(0,ac.Z)(aV,ay).percentCompleted,a_=[y.dLO.PATH,y.dLO.MODULE].includes(aS.toLowerCase())?y.dLO.PATH:y.dLO.COLLECTION,a0=!(!aV.length||s||aI||!aP||aq);k.useEffect(function(){return Q(function(a){return an(am({},a),{collapsedState:av.filter(function(a){return a.id!==$.s}).reduce(function(a,b,c){return an(am({},a),al({},c,!(!Object.keys(ay||{}).length||P.searchString||J||b.pages.some(function(a){var b=a.id;return aA.includes(String(b))||aA.includes(ao.encode(b))}))))},{}),stateUpdatedOnNavigation:!a.stateUpdatedOnNavigation})})},[av,ay,aA,P.searchString]),k.useEffect(function(){if(av.length){var a=S.current.querySelector('[href="'.concat(aA,'"]'));if(a){var b=a.getBoundingClientRect();b.top+b.height>window.innerHeight&&a.scrollIntoView()}}},[av,P.stateUpdatedOnNavigation]);var a1=(s||!aq)&&(0,f.jsx)(i(),{prefetch:!1,href:!s||v||aU?aX:aY,children:(0,f.jsxs)("a",{className:"dark:hover:bg-gray-A400 flex font-bold hover:bg-gray-buttonHover items-center p-3 pl-6 space-x-2.5 text-base",children:[(0,f.jsx)(V.Z,{className:"fill-current flex-shrink-0 text-gray-500",viewBox:"0 0 24 24"}),(0,f.jsx)("span",{className:"navigation-text",children:"Back To ".concat(aq?"Guide":aS," ").concat(s&&!aU?"Editor":"Home")})]})}),a2=!(s||aI||aZ)&&!!aO&&aT===y.dLO.COLLECTION&&aJ&&aP&&!aq&&(0,f.jsx)(i(),{prefetch:!1,href:{pathname:aW,query:{isCertificate:!0}},as:aW,children:(0,f.jsxs)("a",{className:"".concat(aA.endsWith("/certificate")?"bg-gray-200 dark:bg-dark-80":""," break-words cursor-pointer flex flex-grow-0 flex-nowrap items-center text-ellipsis overflow-hidden mb-8 ml-6 mr-4 mt-5 space-x-4"),children:[(0,f.jsx)(X,{}),(0,f.jsx)("h5",{className:"m-0 ".concat(N?"heading-five":""),children:"Course Certificate"})]})}),a3=av.filter(function(a){return a.id!==$.s}).map(function(a,b){var c=a.title===y.V4B||a.title.toLowerCase().includes(P.searchString.toLowerCase()),d=a.pages.filter(function(a){return!P.searchString||c||ap(a,aK,aL,P.searchString.toLowerCase())});return(!P.searchString||c||a.pages.some(function(a){return ap(a,aK,aL,P.searchString.toLowerCase())}))&&(0,f.jsx)(T,{addArticle:n,addCategory:p,articles_titles:aL,author_id:au,collapsed:P.collapsedState[b],collection_id:aw,contentLoading:q,courseCompletion:ay,data:an(am({},a),{pages:d}),editMode:s,endDrag:u,is_mini:aG,is_priced:aE,isZeroPriced:aF,isUserLoggedIn:as&&Object.keys(as).length>0,is_versions:aI,index:b,isReview:v,isStandaloneModule:aH,moveItem:B,owned_by_reader:aJ,pathAuthorId:aM,pathId:aN,sidebarInEditMode:J,startDrag:L,toggleCollapse:function(){return Q(function(a){return an(am({},a),{collapsedState:an(am({},a.collapsedState),al({},b,!a.collapsedState[b]))})})},type:z.Z.CATEGORY,workType:aT,useModularTypescale:N},a.id)}),a4=!(s||aI||!aP)&&(aZ||aJ||!aE)&&(100===a$?(0,f.jsxs)("div",{className:"".concat(N?"body-large":"text-lg"," font-semibold flex items-center justify-center mb-5 space-x-2"),children:[(0,f.jsx)("span",{role:"img","aria-label":"party-popper-emoji",children:"\uD83C\uDF89"}),(0,f.jsx)("span",{children:"".concat(aS," Completed")})]}):w?(0,f.jsx)(U.Z,{statusData:{status:"WAIT"}}):(0,f.jsx)("button",{className:"outlined-default ml-8 mr-10 navigation-text",onClick:function(){return H(aN)},title:"Set Course Completion",children:"Mark ".concat(aS," as Completed")})),a5=(0,f.jsx)(i(),{prefetch:!1,href:s&&!v?aY:aX,children:(0,f.jsx)("a",{className:"".concat(N?"heading-five":"font-semibold leading-9 text-2xl"," break-words cursor-pointer dark:focus:text-primary-light dark:hover:text-primary-light hover:text-primary mb-4 px-6 select-none"),children:ax})}),a6=a0&&(0,f.jsxs)("div",{className:"flex flex-col mx-6 space-y-3",children:[(0,f.jsxs)("div",{className:"flex h-10 items-center justify-between space-x-2",children:[(0,f.jsx)("span",{className:"whitespace-pre-wrap body-small",children:"".concat(a$,"% completed")}),!w&&!!a$&&(C?(0,f.jsx)(U.Z,{statusData:{status:"WAIT"}}):(0,f.jsx)("button",{className:"icon-default rounded-full navigation-text",title:"Reset Course Completion",onClick:function(){return E(String(aN||aw),a_)},children:(0,f.jsx)(Z.Z,{})}))]}),(0,f.jsx)(ab.Z,{percentCompleted:a$})]}),a7=(0,f.jsxs)("div",{className:"bg-white border-gray-500 border-solid dark:bg-dark border dark:border-dark-60 flex items-center m-6 pl-4 rounded",children:[(0,f.jsx)(Y.Z,{className:"dark:text-dark-contrastText fill-current flex-shrink-0 h-6 w-6"}),(0,f.jsx)("input",{"aria-label":"search",className:"body-small border-none dark:bg-dark dark:placeholder-gray-600 dark:text-dark-contrastText h-8 no-outline pl-2 py-1 rounded w-full",onChange:function(a){var b=a.target.value;return Q(function(a){return an(am({},a),{searchString:b})})},placeholder:"Search ".concat(aq?"this Guide":aS),type:"text",value:P.searchString})]});return(0,f.jsx)(aj.Z,{sidebarClass:"ed-grid-sidebar2",className:"bg-gray-50 dark:bg-dark-90 flex flex-col major-second lg:minor-third",mainSidebar:!1,sidebarType:ai.mQ.LESSON,children:(0,f.jsxs)("div",{className:"scrollbar flex flex-col overflow-y-auto h-full",ref:function(a){return S.current=a},children:[a1,(0,f.jsx)(aa.Z,{className:"mb-6"}),a5,a6,a7,(0,f.jsxs)("div",{className:"flex flex-col max-h-full overflow-y-auto overscroll-y-contain py-2",children:[(0,f.jsx)(l.W,{backend:m.PD,children:a3}),a2,!aq&&a4]})]})})}},35300:function(a,b,c){c.d(b,{F:function(){return h},V:function(){return g}});var d=function(a){return"write"===a.mode||a.editMode},e=function(a){var b=a.startDrag,c=a.parentIndex,d=a.index;return null==b||b(d,c),{parentIndex:c,index:d}},f=function(a){var b=a.endDrag;return null==b?void 0:b()},g={beginDrag:e,canDrag:d,endDrag:f},h={beginDrag:e,canDrag:d,endDrag:f}},94556:function(a,b,c){c.d(b,{k:function(){return g},t:function(){return f}});var d=c(7760),e=c(131),f={hover:function(a,b,c){var d,f=b.getItem().index,g=a.index,i=b.getItem().parentIndex;if(b.getItemType()===a.type){if(!h(c,b,f,g))return;a.moveItem({itemIndex:f},{itemIndex:g}),b.getItem().index=g}else if(e.GbL.includes(c.props.data.type))return;if(void 0!==i&&i!==g&&!a.data.pages.length){var j={parentIndex:i,itemIndex:f},k={parentIndex:g};a.moveItem(j,k),b.getItem().index=0,b.getItem().parentIndex=k.parentIndex}}},g={hover:function(a,b,c){var d=b.getItem().index,e=a.index,f=a.parentIndex,g=b.getItem().parentIndex;if(f===g){if(!h(c,b,d,e))return;var i={parentIndex:f,itemIndex:d},j={parentIndex:f,itemIndex:e};a.moveItem(i,j),b.getItem().index=e}else{if(!h(c,b,d,e,!1))return;var k={parentIndex:g,itemIndex:d},l={parentIndex:f,itemIndex:e};a.moveItem(k,l),b.getItem().index=e,b.getItem().parentIndex=f}}};function h(a,b,c,e){var f=!(arguments.length>4)|| void 0===arguments[4]||arguments[4];if(f&&c===e)return!1;var g=(0,d.findDOMNode)(a).getBoundingClientRect(),h=(g.bottom-g.top)/3,i=g.bottom-g.top-h,j=b.getClientOffset().y-g.top;return(!(c<e)||!(j<i))&&(!(c>e)||!(j>h))}},6498:function(a,b){b.Z={CATEGORY:"category",ARTICLE:"article",CHOICE:"choice"}},67506:function(a,b,c){c.d(b,{b:function(){return d},x:function(){return e}});var d="LESSON_IN_PROGRESS",e="LESSON_COMPLETED"},81813:function(a,b,c){var d,e,f=c(89703);function g(){return(g=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var h=function(a){return f.createElement("svg",g({width:24,height:24,viewBox:"0 0 24 24",fill:"current",xmlns:"http://www.w3.org/2000/svg"},a),d||(d=f.createElement("path",{d:"M19.0664 14.6523C18.183 14.6523 17.4367 15.248 17.2065 16.0586H15.3398V14H17.2458C19.3159 14 21 12.3159 21 10.2458C21 8.58603 19.8992 7.12796 18.3364 6.65307C17.864 4.76152 16.1566 3.40488 14.1791 3.40488C13.4125 3.40488 12.6781 3.60256 12.0301 3.98024C11.3437 3.35256 10.4437 2.99995 9.49814 2.99995C7.46987 2.99995 5.81211 4.61682 5.74595 6.62923C4.14068 7.07793 3 8.54771 3 10.2458C3 12.3159 4.68412 14 6.75423 14H8.66016V16.0586H6.7935C6.56333 15.248 5.81696 14.6523 4.93359 14.6523C3.86741 14.6523 3 15.5198 3 16.5859C3 17.6521 3.86741 18.5195 4.93359 18.5195C5.81696 18.5195 6.5633 17.9239 6.7935 17.1133H9.1875C9.47873 17.1133 9.71484 16.8772 9.71484 16.5859V14H11.4727V17.187C10.6621 17.4171 10.0664 18.1635 10.0664 19.0469C10.0664 20.1131 10.9338 20.9805 12 20.9805C13.0662 20.9805 13.9336 20.1131 13.9336 19.0469C13.9336 18.1635 13.3379 17.4172 12.5273 17.187V14H14.2852V16.5859C14.2852 16.8772 14.5213 17.1133 14.8125 17.1133H17.2065C17.4367 17.9239 18.183 18.5195 19.0664 18.5195C20.1326 18.5195 21 17.6521 21 16.5859C21 15.5198 20.1326 14.6523 19.0664 14.6523ZM4.93359 17.4648C4.44896 17.4648 4.05469 17.0706 4.05469 16.5859C4.05469 16.1013 4.44896 15.707 4.93359 15.707C5.41822 15.707 5.8125 16.1013 5.8125 16.5859C5.8125 17.0706 5.41822 17.4648 4.93359 17.4648ZM12.8789 19.0469C12.8789 19.5315 12.4846 19.9258 12 19.9258C11.5154 19.9258 11.1211 19.5315 11.1211 19.0469C11.1211 18.5622 11.5154 18.168 12 18.168C12.4846 18.168 12.8789 18.5622 12.8789 19.0469ZM6.75423 12.9453C5.26571 12.9453 4.05469 11.7343 4.05469 10.2458C4.05469 8.91537 5.04634 7.76706 6.36129 7.57476C6.63878 7.53419 6.83593 7.28352 6.81006 7.00431C6.80243 6.92194 6.79856 6.83778 6.79856 6.75414C6.79856 5.26566 8.00959 4.05467 9.49811 4.05467C10.2923 4.05467 11.0412 4.3999 11.5528 5.00185C11.7324 5.21317 12.045 5.24924 12.2681 5.08443C12.8211 4.67563 13.4819 4.45956 14.179 4.45956C15.7831 4.45956 17.1171 5.63656 17.3665 7.16765C17.4018 7.38414 17.5674 7.5562 17.7824 7.59972C19.0356 7.85344 19.9453 8.96624 19.9453 10.2458C19.9453 11.7343 18.7342 12.9453 17.2457 12.9453H6.75423ZM19.0664 17.4648C18.5818 17.4648 18.1875 17.0706 18.1875 16.5859C18.1875 16.1013 18.5818 15.707 19.0664 15.707C19.551 15.707 19.9453 16.1013 19.9453 16.5859C19.9453 17.0706 19.551 17.4648 19.0664 17.4648Z",fill:"current"})),e||(e=f.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.2681 5.08443C12.045 5.24925 11.7325 5.21318 11.5529 5.00185C11.0413 4.39991 10.2923 4.05467 9.49815 4.05467C8.00964 4.05467 6.79861 5.26566 6.79861 6.75415C6.79861 6.83778 6.80248 6.92195 6.81011 7.00432C6.83598 7.28353 6.63883 7.53419 6.36134 7.57476C5.04639 7.76707 4.05474 8.91538 4.05474 10.2458C4.05474 11.7343 5.26576 12.9453 6.75428 12.9453H17.2458C18.7343 12.9453 19.9453 11.7343 19.9453 10.2458C19.9453 8.96625 19.0357 7.85345 17.7824 7.59972C17.5674 7.5562 17.4018 7.38414 17.3665 7.16765C17.1172 5.63656 15.7832 4.45957 14.1791 4.45957C13.482 4.45957 12.8212 4.67564 12.2681 5.08443ZM6.39028 7.77266C5.17373 7.95057 4.25474 9.01449 4.25474 10.2458C4.25474 11.6239 5.37622 12.7453 6.75428 12.7453H17.2458C18.6238 12.7453 19.7453 11.6239 19.7453 10.2458C19.7453 9.06132 18.9027 8.03057 17.7427 7.79575C17.4462 7.73572 17.2178 7.49842 17.1691 7.1998C16.9353 5.7637 15.6833 4.65957 14.1791 4.65957C13.5242 4.65957 12.9052 4.86228 12.387 5.24527C12.0794 5.47256 11.6482 5.42286 11.4005 5.13138C10.9271 4.57442 10.234 4.25467 9.49815 4.25467C8.12009 4.25467 6.99861 5.37613 6.99861 6.75415C6.99861 6.83169 7.0022 6.90969 7.00925 6.98586M17.0612 15.8586C17.3591 15.0395 18.1447 14.4523 19.0665 14.4523C20.2431 14.4523 21.2001 15.4093 21.2001 16.5859C21.2001 17.7626 20.2431 18.7195 19.0665 18.7195C18.1447 18.7195 17.3591 18.1323 17.0612 17.3133H14.8125C14.4109 17.3133 14.0852 16.9876 14.0852 16.5859V14.2H12.7274V17.0416C13.5464 17.3395 14.1336 18.1251 14.1336 19.0469C14.1336 20.2235 13.1767 21.1805 12 21.1805C10.8234 21.1805 9.86646 20.2235 9.86646 19.0469C9.86646 18.1251 10.4536 17.3395 11.2727 17.0416V14.2H9.91489V16.5859C9.91489 16.9876 9.58924 17.3133 9.18755 17.3133H6.93893C6.64101 18.1323 5.8554 18.7195 4.93364 18.7195C3.757 18.7195 2.80005 17.7626 2.80005 16.5859C2.80005 15.4093 3.757 14.4523 4.93364 14.4523C5.85539 14.4523 6.64104 15.0395 6.93894 15.8586H8.46021V14.2H6.75428C4.57372 14.2 2.80005 12.4264 2.80005 10.2458C2.80005 8.50618 3.93624 6.99467 5.55349 6.47813C5.69573 4.42593 7.41041 2.79995 9.49819 2.79995C10.4444 2.79995 11.3478 3.13538 12.0559 3.73647C12.7034 3.387 13.427 3.20488 14.1791 3.20488C16.2112 3.20488 17.9703 4.57314 18.5019 6.49601C20.091 7.02921 21.2001 8.53536 21.2001 10.2458C21.2001 12.4264 19.4264 14.2 17.2458 14.2H15.5399V15.8586H17.0612ZM17.2065 16.0586C17.4368 15.248 18.1831 14.6523 19.0665 14.6523C20.1326 14.6523 21 15.5198 21 16.5859C21 17.6521 20.1326 18.5195 19.0665 18.5195C18.1831 18.5195 17.4367 17.9239 17.2065 17.1133H14.8125C14.5213 17.1133 14.2852 16.8772 14.2852 16.5859V14H12.5274V17.187C13.338 17.4172 13.9336 18.1635 13.9336 19.0469C13.9336 20.1131 13.0662 20.9805 12 20.9805C10.9339 20.9805 10.0665 20.1131 10.0665 19.0469C10.0665 18.1635 10.6621 17.4171 11.4727 17.187V14H9.71489V16.5859C9.71489 16.8772 9.47878 17.1133 9.18755 17.1133H6.79355C6.56335 17.9239 5.81701 18.5195 4.93364 18.5195C3.86746 18.5195 3.00005 17.6521 3.00005 16.5859C3.00005 15.5198 3.86746 14.6523 4.93364 14.6523C5.81701 14.6523 6.56338 15.248 6.79355 16.0586H8.6602V14H6.75428C4.68417 14 3.00005 12.3159 3.00005 10.2458C3.00005 8.54771 4.14073 7.07793 5.746 6.62924C5.81216 4.61682 7.46992 2.99995 9.49819 2.99995C10.4438 2.99995 11.3438 3.35257 12.0301 3.98025C12.6782 3.60256 13.4125 3.40488 14.1791 3.40488C16.1566 3.40488 17.8641 4.76152 18.3365 6.65307C19.8992 7.12796 21 8.58603 21 10.2458C21 12.3159 19.3159 14 17.2458 14H15.3399V16.0586H17.2065ZM4.25474 16.5859C4.25474 16.9601 4.55947 17.2648 4.93364 17.2648C5.30781 17.2648 5.61255 16.9601 5.61255 16.5859C5.61255 16.2118 5.30781 15.907 4.93364 15.907C4.55947 15.907 4.25474 16.2118 4.25474 16.5859ZM12 19.7258C12.3742 19.7258 12.679 19.4211 12.679 19.0469C12.679 18.6727 12.3742 18.368 12 18.368C11.6259 18.368 11.3211 18.6727 11.3211 19.0469C11.3211 19.4211 11.6259 19.7258 12 19.7258ZM18.3875 16.5859C18.3875 16.9601 18.6923 17.2648 19.0665 17.2648C19.4406 17.2648 19.7454 16.9601 19.7454 16.5859C19.7454 16.2118 19.4406 15.907 19.0665 15.907C18.6923 15.907 18.3875 16.2118 18.3875 16.5859ZM4.05474 16.5859C4.05474 17.0706 4.44901 17.4648 4.93364 17.4648C5.41827 17.4648 5.81255 17.0706 5.81255 16.5859C5.81255 16.1013 5.41827 15.707 4.93364 15.707C4.44901 15.707 4.05474 16.1013 4.05474 16.5859ZM12 19.9258C12.4847 19.9258 12.879 19.5315 12.879 19.0469C12.879 18.5623 12.4847 18.168 12 18.168C11.5154 18.168 11.1211 18.5623 11.1211 19.0469C11.1211 19.5315 11.5154 19.9258 12 19.9258ZM18.1875 16.5859C18.1875 17.0706 18.5818 17.4648 19.0665 17.4648C19.5511 17.4648 19.9454 17.0706 19.9454 16.5859C19.9454 16.1013 19.5511 15.707 19.0665 15.707C18.5818 15.707 18.1875 16.1013 18.1875 16.5859Z",fill:"current"})))};b.Z=h},38761:function(a,b,c){var d,e=c(89703);function f(){return(f=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var g=function(a){return e.createElement("svg",f({width:16,height:16,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"none"},a),d||(d=e.createElement("path",{d:"M13.7 2.4A8 8 0 0 0 8 0a8 8 0 1 0 7.7 10h-2A6 6 0 0 1 8 14 6 6 0 0 1 8 2a6 6 0 0 1 4.2 1.8L9 7h7V0l-2.4 2.4z",fill:"currentColor"})))};b.Z=g},51571:function(a,b,c){var d,e=c(89703);function f(){return(f=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var g=function(a){return e.createElement("svg",f({width:34,height:34,viewBox:"0 0 34 34",xmlns:"http://www.w3.org/2000/svg"},a),d||(d=e.createElement("g",{stroke:"current",fill:"none"},e.createElement("circle",{cx:15,cy:15,r:15,transform:"translate(2 2)"}),e.createElement("path",{d:"M12 15l-2 2 2 2M15 12l2-2 2 2M19 22l-2 2-2-2M22 15l2 2-2 2M10 17h14M17 10v14"}))))};b.Z=g}}])
//# sourceMappingURL=72128-186508e97643dd26.js.map