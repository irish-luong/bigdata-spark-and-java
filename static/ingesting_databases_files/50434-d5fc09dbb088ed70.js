(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50434],{44453:function(a,b,c){"use strict";var d,e=this&&this.__extends||(d=function(a,b){return(d=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])})(a,b)},function(a,b){function c(){this.constructor=a}d(a,b),a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}),f=this&&this.__rest||function(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]]);return c};Object.defineProperty(b,"__esModule",{value:!0});var g=c(89703),h=c(89703),i=c(38076),j=c(12989),k=function(a){function b(b){var c=a.call(this,b)||this;return c.props=b,c}return e(b,a),b.prototype.render=function(){return null},b.mapChildColumnDefs=function(a){return g.Children.map(a,function(a){return b.toColDef(a.props)})},b.toColDef=function(a){var c=a.children,d=f(a,["children"]);return b.hasChildColumns(c)&&(d.children=b.mapChildColumnDefs(c)),d},b.hasChildColumns=function(a){return g.Children.count(a)>0},b}(h.Component);function l(a,b){a.forEach(function(a){k[a]=b})}b.AgGridColumn=k,l(j.ColDefUtil.BOOLEAN_PROPERTIES,i.bool),l(j.ColDefUtil.STRING_PROPERTIES,i.string),l(j.ColDefUtil.OBJECT_PROPERTIES,i.object),l(j.ColDefUtil.ARRAY_PROPERTIES,i.array),l(j.ColDefUtil.NUMBER_PROPERTIES,i.number),l(j.ColDefUtil.FUNCTION_PROPERTIES,i.func)},74243:function(a,b,c){"use strict";var d,e=this&&this.__extends||(d=function(a,b){return(d=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])})(a,b)},function(a,b){function c(){this.constructor=a}d(a,b),a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}),f=this&&this.__assign||function(){return(f=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)},g=this&&this.__spreadArrays||function(){for(var a=0,b=0,c=arguments.length;b<c;b++)a+=arguments[b].length;for(var d=Array(a),e=0,b=0;b<c;b++)for(var f=arguments[b],g=0,h=f.length;g<h;g++,e++)d[e]=f[g];return d};Object.defineProperty(b,"__esModule",{value:!0});var h=c(89703),i=c(89703),j=c(38076),k=c(12989),l=c(44453),m=c(34727),n=c(40190),o=c(67179),p=function(a){function b(b){var c=a.call(this,b)||this;return c.props=b,c.changeDetectionService=new m.ChangeDetectionService,c.api=null,c.portals=[],c.hasPendingPortalUpdate=!1,c.destroyed=!1,c}return e(b,a),b.prototype.render=function(){var a=this;return h.createElement("div",{style:this.createStyleForDiv(),className:this.props.className,ref:function(b){a.eGridDiv=b}},this.portals)},b.prototype.createStyleForDiv=function(){return f({height:"100%"},this.props.containerStyle||{})},b.prototype.componentDidMount=function(){var a=this.props.modules||[],b={providedBeanInstances:{agGridReact:this,frameworkComponentWrapper:new r(this)},modules:a},c=this.props.gridOptions||{},d=this.props.children;l.AgGridColumn.hasChildColumns(d)&&(c.columnDefs=l.AgGridColumn.mapChildColumnDefs(d)),this.gridOptions=k.ComponentUtil.copyAttributesToGridOptions(c,this.props),new k.Grid(this.eGridDiv,this.gridOptions,b),this.api=this.gridOptions.api,this.columnApi=this.gridOptions.columnApi},b.prototype.waitForInstance=function(a,c,d){var e=this;if(void 0===d&&(d=Date.now()),this.destroyed){c(null);return}if(a.rendered())c(a);else{if(Date.now()-d>=b.MAX_COMPONENT_CREATION_TIME_IN_MS){if(a.isNullValue()){c(a);return}console.error("ag-Grid: React Component '"+a.getReactComponentName()+"' not created within "+b.MAX_COMPONENT_CREATION_TIME_IN_MS+"ms");return}window.setTimeout(function(){e.waitForInstance(a,c,d)})}},b.prototype.mountReactPortal=function(a,b,c){this.portals=g(this.portals,[a]),this.waitForInstance(b,c),this.batchUpdate()},b.prototype.updateReactPortal=function(a,b){this.portals=this.portals.filter(function(b){return b!==a}).concat(b),this.batchUpdate()},b.prototype.batchUpdate=function(){var a=this;!this.hasPendingPortalUpdate&&(setTimeout(function(){a.api&&a.forceUpdate(function(){a.hasPendingPortalUpdate=!1})}),this.hasPendingPortalUpdate=!0)},b.prototype.destroyPortal=function(a){this.portals=this.portals.filter(function(b){return b!==a}),this.batchUpdate()},b.prototype.getStrategyTypeForProp=function(a){if("rowData"===a){if(this.props.rowDataChangeDetectionStrategy)return this.props.rowDataChangeDetectionStrategy;if(this.isImmutableDataActive())return m.ChangeDetectionStrategyType.IdentityCheck}return m.ChangeDetectionStrategyType.DeepValueCheck},b.prototype.isImmutableDataActive=function(){return this.props.deltaRowDataMode||this.props.immutableData||this.props.gridOptions&&(this.props.gridOptions.deltaRowDataMode||this.props.gridOptions.immutableData)},b.prototype.shouldComponentUpdate=function(a){return this.processPropsChanges(this.props,a),!1},b.prototype.componentDidUpdate=function(a){this.processPropsChanges(a,this.props)},b.prototype.processPropsChanges=function(a,b){var c=this,d={};this.extractGridPropertyChanges(a,b,d),this.extractDeclarativeColDefChanges(b,d),Object.keys(d).length>0&&window.setTimeout(function(){return k.ComponentUtil.processOnChange(d,c.gridOptions,c.api,c.columnApi)})},b.prototype.extractDeclarativeColDefChanges=function(a,b){if((!this.props.gridOptions||!this.props.gridOptions.columnDefs)&&!this.props.columnDefs){var c=!!a.debug,d="columnDefs",e=this.gridOptions.columnDefs;if(l.AgGridColumn.hasChildColumns(a.children)){var f=this.changeDetectionService.getStrategy(this.getStrategyTypeForProp(d)),g=l.AgGridColumn.mapChildColumnDefs(a.children);f.areEqual(e,g)||(c&&console.log("agGridReact: colDefs definitions changed"),b[d]={previousValue:e,currentValue:g})}else e&&e.length>0&&(b[d]={previousValue:e,currentValue:[]})}},b.prototype.extractGridPropertyChanges=function(a,b,c){var d=this,e=!!b.debug;Object.keys(b).forEach(function(f){k._.includes(k.ComponentUtil.ALL_PROPERTIES,f)&&(d.changeDetectionService.getStrategy(d.getStrategyTypeForProp(f)).areEqual(a[f],b[f])||(e&&console.log("agGridReact: ["+f+"] property changed"),c[f]={previousValue:a[f],currentValue:b[f]}))}),k.ComponentUtil.getEventCallbacks().forEach(function(f){d.props[f]!==b[f]&&(e&&console.log("agGridReact: ["+f+"] event callback changed"),c[f]={previousValue:a[f],currentValue:b[f]})})},b.prototype.componentWillUnmount=function(){this.api&&(this.api.destroy(),this.api=null),this.destroyed=!0},b.prototype.isDisableStaticMarkup=function(){return this.props.disableStaticMarkup},b.prototype.isLegacyComponentRendering=function(){return this.props.legacyComponentRendering},b.defaultProps={legacyComponentRendering:!1,disableStaticMarkup:!1},b.MAX_COMPONENT_CREATION_TIME_IN_MS=500,b}(i.Component);function q(a,b){a.forEach(function(a){p[a]=b})}b.AgGridReact=p,p.propTypes={gridOptions:j.object},q(k.ComponentUtil.getEventCallbacks(),j.func),q(k.ComponentUtil.BOOLEAN_PROPERTIES,j.bool),q(k.ComponentUtil.STRING_PROPERTIES,j.string),q(k.ComponentUtil.OBJECT_PROPERTIES,j.object),q(k.ComponentUtil.ARRAY_PROPERTIES,j.array),q(k.ComponentUtil.NUMBER_PROPERTIES,j.number),q(k.ComponentUtil.FUNCTION_PROPERTIES,j.func);var r=function(a){function b(b){var c=a.call(this)||this;return c.agGridReact=b,c}return e(b,a),b.prototype.createWrapper=function(a,b){return this.agGridReact.isLegacyComponentRendering()?new n.LegacyReactComponent(a,this.agGridReact,b):new o.NewReactComponent(a,this.agGridReact,b)},b}(k.BaseComponentWrapper)},34727:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),(c=d=b.ChangeDetectionStrategyType||(b.ChangeDetectionStrategyType={})).IdentityCheck="IdentityCheck",c.DeepValueCheck="DeepValueCheck",c.NoCheck="NoCheck";var c,d,e=function(){function a(){var a;this.strategyMap=((a={})[d.DeepValueCheck]=new g,a[d.IdentityCheck]=new f(function(a,b){return a===b}),a[d.NoCheck]=new f(function(a,b){return!1}),a)}return a.prototype.getStrategy=function(a){return this.strategyMap[a]},a}();b.ChangeDetectionService=e;var f=function(){function a(a){this.strategy=a}return a.prototype.areEqual=function(a,b){return this.strategy(a,b)},a}(),g=function(){function a(){}return a.prototype.areEqual=function(b,c){return a.areEquivalent(a.copy(b),a.copy(c))},a.unwrapStringOrNumber=function(a){return a instanceof Number||a instanceof String?a.valueOf():a},a.copy=function(a){if(!a)return a;if(Array.isArray(a)){for(var b=[],c=0;c<a.length;c++)b.push(this.copy(a[c]));return b}return"object"!=typeof a?a:[{},a].reduce(function(a,b){return Object.keys(b).forEach(function(c){a[c]=b[c]}),a},{})},a.isNaN=function(a){return Number.isNaN?Number.isNaN(a):"number"==typeof a&&isNaN(a)},a.areEquivalent=function(b,c){if(b=a.unwrapStringOrNumber(b),c=a.unwrapStringOrNumber(c),b===c)return!0;if(null===b||null===c|| typeof b!=typeof c)return!1;if(a.isNaN(b)&&a.isNaN(c))return!0;if(b instanceof Date)return c instanceof Date&&b.valueOf()===c.valueOf();if("function"==typeof b)return b.toString()===c.toString();if("object"!=typeof b||b.$$typeof&&"Symbol(react.element)"===b.$$typeof.toString())return b==c;var d=void 0===b.areEquivPropertyTracking,e=void 0===c.areEquivPropertyTracking;try{var f=void 0;if(d)b.areEquivPropertyTracking=[];else if(b.areEquivPropertyTracking.some(function(a){return a===c}))return!0;if(e)c.areEquivPropertyTracking=[];else if(c.areEquivPropertyTracking.some(function(a){return a===b}))return!0;b.areEquivPropertyTracking.push(c),c.areEquivPropertyTracking.push(b);var g={};for(f in b)"areEquivPropertyTracking"!=f&&(g[f]=null);for(f in c)"areEquivPropertyTracking"!=f&&(g[f]=null);for(f in g)if(!this.areEquivalent(b[f],c[f]))return!1;return!0}finally{d&&delete b.areEquivPropertyTracking,e&&delete c.areEquivPropertyTracking}},a}()},8360:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=0;b.default=function(){return"agPortalKey_"+ ++c}},40190:function(a,b,c){"use strict";var d,e=this&&this.__extends||(d=function(a,b){return(d=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])})(a,b)},function(a,b){function c(){this.constructor=a}d(a,b),a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)});Object.defineProperty(b,"__esModule",{value:!0});var f=c(89703),g=c(7760),h=c(12989),i=c(52653),j=c(8360),k=c(19282),l=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;return b.staticMarkup=null,b.staticRenderTime=0,b}return e(b,a),b.prototype.init=function(a){var b=this;return this.eParentElement=this.createParentElement(a),this.renderStaticMarkup(a),new h.AgPromise(function(c){return b.createReactComponent(a,c)})},b.prototype.createReactComponent=function(a,b){var c=this;this.isStatelessComponent()||(a.ref=function(a){c.componentInstance=a,c.addParentContainerStyleAndClasses(),c.removeStaticMarkup()});var d=f.createElement(this.reactComponent,a),e=g.createPortal(d,this.eParentElement,j.default());this.portal=e,this.parentComponent.mountReactPortal(e,this,function(a){b(a),c.isStatelessComponent()&&(c.isSlowRenderer()&&c.removeStaticMarkup(),setTimeout(function(){c.removeStaticMarkup()}))})},b.prototype.fallbackMethodAvailable=function(a){return!1},b.prototype.fallbackMethod=function(a,b){},b.prototype.isSlowRenderer=function(){return this.staticRenderTime>=b.SLOW_RENDERERING_THRESHOLD},b.prototype.isNullValue=function(){return""===this.staticMarkup},b.prototype.renderStaticMarkup=function(a){if(!this.parentComponent.isDisableStaticMarkup()&&(!this.componentType.isCellRenderer||this.componentType.isCellRenderer())){var b=console.error,c=f.createElement(this.reactComponent,a);try{console.error=function(){};var d=Date.now(),e=k.renderToStaticMarkup(c);this.staticRenderTime=Date.now()-d,console.error=b,""===e?this.staticMarkup=e:e&&(this.staticMarkup=document.createElement("span"),this.staticMarkup.innerHTML=e,this.eParentElement.appendChild(this.staticMarkup))}catch(g){}finally{console.error=b}}},b.prototype.removeStaticMarkup=function(){!this.parentComponent.isDisableStaticMarkup()&&this.componentType.isCellRenderer()&&this.staticMarkup&&(this.staticMarkup.remove?(this.staticMarkup.remove(),this.staticMarkup=null):this.eParentElement.removeChild&&(this.eParentElement.removeChild(this.staticMarkup),this.staticMarkup=null))},b.prototype.rendered=function(){return this.isNullValue()||!!this.staticMarkup||this.isStatelessComponent()&&this.statelessComponentRendered()||!!(!this.isStatelessComponent()&&this.getFrameworkComponentInstance())},b.SLOW_RENDERERING_THRESHOLD=3,b}(i.ReactComponent);b.LegacyReactComponent=l},67179:function(a,b,c){"use strict";var d,e=this&&this.__extends||(d=function(a,b){return(d=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])})(a,b)},function(a,b){function c(){this.constructor=a}d(a,b),a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}),f=this&&this.__assign||function(){return(f=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)};Object.defineProperty(b,"__esModule",{value:!0});var g=c(89703),h=c(7760),i=c(12989),j=c(52653),k=c(8360),l=c(19282),m=function(a){function b(b,c,d){var e=a.call(this,b,c,d)||this;return e.oldPortal=null,e.key=k.default(),e}return e(b,a),b.prototype.init=function(a){var b=this;return this.eParentElement=this.createParentElement(a),this.params=a,this.createOrUpdatePortal(a),new i.AgPromise(function(a){return b.createReactComponent(a)})},b.prototype.createOrUpdatePortal=function(a){var b=this;this.isStatelessComponent()||(a.ref=function(a){b.componentInstance=a,b.addParentContainerStyleAndClasses()}),this.reactElement=g.createElement(this.reactComponent,f(f({},a),{key:this.key})),this.portal=h.createPortal(this.reactElement,this.eParentElement,k.default())},b.prototype.createReactComponent=function(a){this.parentComponent.mountReactPortal(this.portal,this,function(b){a(b)})},b.prototype.isNullValue=function(){return this.valueRenderedIsNull(this.params)},b.prototype.rendered=function(){return this.isStatelessComponent()&&this.statelessComponentRendered()||!!(!this.isStatelessComponent()&&this.getFrameworkComponentInstance())},b.prototype.valueRenderedIsNull=function(a){if(this.componentType.isCellRenderer&&!this.componentType.isCellRenderer())return!1;var b=console.error;try{console.error=function(){};var c=l.renderToStaticMarkup(g.createElement(this.reactComponent,a));return""===c}catch(d){}finally{console.error=b}return!1},b.prototype.refreshComponent=function(a){this.oldPortal=this.portal,this.createOrUpdatePortal(a),this.parentComponent.updateReactPortal(this.oldPortal,this.portal)},b.prototype.fallbackMethod=function(a,b){var c=this[a+"Component"];if(c)return c.bind(this)(b)},b.prototype.fallbackMethodAvailable=function(a){return!!this[a+"Component"]},b}(j.ReactComponent);b.NewReactComponent=m},52653:function(a,b,c){"use strict";var d,e=this&&this.__extends||(d=function(a,b){return(d=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])})(a,b)},function(a,b){function c(){this.constructor=a}d(a,b),a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)});Object.defineProperty(b,"__esModule",{value:!0});var f=c(12989),g=c(79628),h=function(a){function b(b,c,d){var e=a.call(this)||this;return e.portal=null,e.reactComponent=b,e.parentComponent=c,e.componentType=d,e.statelessComponent=e.isStateless(e.reactComponent),e}return e(b,a),b.prototype.getGui=function(){return this.eParentElement},b.prototype.destroy=function(){return this.parentComponent.destroyPortal(this.portal)},b.prototype.createParentElement=function(a){var b=document.createElement(this.parentComponent.props.componentWrappingElement||"div");return f._.addCssClass(b,"ag-react-container"),a.reactContainer=b,b},b.prototype.addParentContainerStyleAndClasses=function(){var a=this;this.componentInstance&&(this.componentInstance.getReactContainerStyle&&this.componentInstance.getReactContainerStyle()&&g.assignProperties(this.eParentElement.style,this.componentInstance.getReactContainerStyle()),this.componentInstance.getReactContainerClasses&&this.componentInstance.getReactContainerClasses()&&this.componentInstance.getReactContainerClasses().forEach(function(b){return f._.addCssClass(a.eParentElement,b)}))},b.prototype.statelessComponentRendered=function(){return this.eParentElement.childElementCount>0||this.eParentElement.childNodes.length>0},b.prototype.getFrameworkComponentInstance=function(){return this.componentInstance},b.prototype.isStatelessComponent=function(){return this.statelessComponent},b.prototype.getReactComponentName=function(){return this.reactComponent.name},b.prototype.getMemoType=function(){return this.hasSymbol()?Symbol.for("react.memo"):60115},b.prototype.hasSymbol=function(){return"function"==typeof Symbol&&Symbol.for},b.prototype.isStateless=function(a){return"function"==typeof a&&!(a.prototype&&a.prototype.isReactComponent)||"object"==typeof a&&a.$$typeof===this.getMemoType()},b.prototype.hasMethod=function(a){var b=this.getFrameworkComponentInstance();return!!b&&null!==b[a]||this.fallbackMethodAvailable(a)},b.prototype.callMethod=function(a,b){var c=this,d=this.getFrameworkComponentInstance();if(this.isStatelessComponent())return this.fallbackMethod(a,b&&b[0]?b[0]:{});if(!d){setTimeout(function(){return c.callMethod(a,b)});return}var e=d[a];return e?e.apply(d,b):this.fallbackMethodAvailable(a)?this.fallbackMethod(a,b&&b[0]?b[0]:{}):void 0},b.prototype.addMethod=function(a,b){this[a]=b},b}(function(){});b.ReactComponent=h},79628:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.assignProperties=function(a,b){Object.keys(b).forEach(function(c){a[c]=b[c]})},b.assign=function(a,c,d){if("string"==typeof c&&(c=c.split(".")),c.length>1){var e=c.shift();b.assign(a[e]="[object Object]"===Object.prototype.toString.call(a[e])?a[e]:{},c,d)}else a[c[0]]=d}},18881:function(a,b,c){b.AgGridReact=c(74243).AgGridReact,c(44453).AgGridColumn,b.ChangeDetectionStrategyType=c(34727).ChangeDetectionStrategyType},3973:function(){},17201:function(){}}])
//# sourceMappingURL=50434-d5fc09dbb088ed70.js.map