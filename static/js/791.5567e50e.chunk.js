(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[791],{88245:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var i=t(30168),r=t(4942),o=t(92550),a=t(88564),s=t(83061),u=t(47313),c=t(70499),l=t(45894),f=t(19860),d=t(36304),h=t(18150),p=t(46417);var g=function(e){var n=(0,f.Z)(),t=(0,l.v9)((0,h.lK)(n.palette.primary.main));return(0,p.jsx)("div",{className:(0,s.Z)("FusePageSimple-header"),children:e.header&&(0,p.jsx)(d.Z,{theme:t,children:e.header})})},m=t(1413),w=t(29439),S=t(46923),v=t(57451),b=t(60211);var P=function(e){var n=(0,f.Z)(),t=(0,l.v9)((0,h.lK)(n.palette.primary.main));return(0,p.jsxs)(o.Z,{enable:e.innerScroll,children:[e.header&&(0,p.jsx)(d.Z,{theme:t,children:(0,p.jsx)("div",{className:(0,s.Z)("FusePageSimple-sidebarHeader",e.variant,e.sidebarInner&&"FusePageSimple-sidebarHeaderInnerSidebar"),children:e.header})}),e.content&&(0,p.jsx)("div",{className:"FusePageSimple-sidebarContent",children:e.content})]})};function O(e,n){var t=(0,u.useState)(!1),i=(0,w.Z)(t,2),r=i[0],o=i[1];(0,u.useImperativeHandle)(n,(function(){return{toggleSidebar:a}}));var a=function(){o(!r)};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(v.Z,{lgUp:"permanent"===e.variant,children:(0,p.jsx)(b.Z,{variant:"temporary",anchor:e.position,open:r,onOpen:function(e){},onClose:function(e){return a()},disableSwipeToOpen:!0,classes:{root:(0,s.Z)("FusePageSimple-sidebarWrapper",e.variant),paper:(0,s.Z)("FusePageSimple-sidebar",e.variant,"left"===e.position?"FusePageSimple-leftSidebar":"FusePageSimple-rightSidebar")},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:"FusePageSimple-backdrop"}},style:{position:"absolute"},children:(0,p.jsx)(P,(0,m.Z)({},e))})}),"permanent"===e.variant&&(0,p.jsx)(v.Z,{lgDown:!0,children:(0,p.jsx)(S.ZP,{variant:"permanent",className:(0,s.Z)("FusePageSimple-sidebarWrapper",e.variant),open:r,classes:{paper:(0,s.Z)("FusePageSimple-sidebar",e.variant,"left"===e.position?"FusePageSimple-leftSidebar":"FusePageSimple-rightSidebar")},children:(0,p.jsx)(P,(0,m.Z)({},e))})})]})}var x,y=(0,u.forwardRef)(O),R=(0,a.ZP)("div")((function(e){var n=e.theme;return{display:"flex",flexDirection:"column",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:n.palette.background.default,"& .FusePageSimple-innerScroll":{height:"100%"},"& .FusePageSimple-wrapper":{display:"flex",flexDirection:"row",flex:"1 1 auto",zIndex:2,maxWidth:"100%",minWidth:0,height:"100%",backgroundColor:n.palette.background.default},"& .FusePageSimple-header":{height:F,minHeight:F,display:"flex",background:"linear-gradient(to right, ".concat(n.palette.primary.main," 0%, ").concat(n.palette.primary.dark," 100%)"),color:n.palette.primary.contrastText,backgroundSize:"cover",backgroundColor:n.palette.primary.dark},"& .FusePageSimple-topBg":{position:"absolute",left:0,right:0,top:0,height:F,pointerEvents:"none"},"& .FusePageSimple-contentWrapper":{display:"flex",flexDirection:"column",flex:"1 1 auto",overflow:"auto",WebkitOverflowScrolling:"touch",zIndex:9999},"& .FusePageSimple-toolbar":{height:Z,minHeight:Z,display:"flex",alignItems:"center"},"& .FusePageSimple-content":{flex:"1 0 auto"},"& .FusePageSimple-sidebarWrapper":{overflow:"hidden",backgroundColor:"transparent",position:"absolute","&.permanent":(0,r.Z)({},n.breakpoints.up("lg"),{position:"relative"})},"& .FusePageSimple-sidebar":{position:"absolute","&.permanent":(0,r.Z)({},n.breakpoints.up("lg"),{backgroundColor:n.palette.background.default,color:n.palette.text.primary,position:"relative"}),width:N,height:"100%"},"& .FusePageSimple-leftSidebar":(0,r.Z)({},n.breakpoints.up("lg"),{borderRight:"1px solid ".concat(n.palette.divider),borderLeft:0}),"& .FusePageSimple-rightSidebar":(0,r.Z)({},n.breakpoints.up("lg"),{borderLeft:"1px solid ".concat(n.palette.divider),borderRight:0}),"& .FusePageSimple-sidebarHeader":{height:F,minHeight:F,backgroundColor:n.palette.primary.dark,color:n.palette.primary.contrastText},"& .FusePageSimple-sidebarHeaderInnerSidebar":{backgroundColor:"transparent",color:"inherit",height:"auto",minHeight:"auto"},"& .FusePageSimple-sidebarContent":{},"& .FusePageSimple-backdrop":{position:"absolute"}}})),F=120,Z=64,N=240,j=(0,u.forwardRef)((function(e,n){var t=(0,u.useRef)(null),i=(0,u.useRef)(null),r=(0,u.useRef)(null);return(0,u.useImperativeHandle)(n,(function(){return{rootRef:r,toggleLeftSidebar:function(){t.current.toggleSidebar()},toggleRightSidebar:function(){i.current.toggleSidebar()}}})),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c.Z,{styles:function(n){return{"#fuse-main":{height:e.innerScroll&&"100vh"}}}}),(0,p.jsxs)(R,{className:(0,s.Z)("FusePageSimple-root",e.innerScroll&&"FusePageSimple-innerScroll",e.className),ref:r,children:[(0,p.jsx)("div",{className:(0,s.Z)("FusePageSimple-header","FusePageSimple-topBg")}),(0,p.jsxs)("div",{className:"flex flex-auto flex-col z-10 h-full",children:[e.header&&e.sidebarInner&&(0,p.jsx)(g,{header:e.header}),(0,p.jsxs)("div",{className:"FusePageSimple-wrapper",children:[(e.leftSidebarHeader||e.leftSidebarContent)&&(0,p.jsx)(y,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,sidebarInner:e.sidebarInner,ref:t,rootRef:r}),(0,p.jsxs)(o.Z,{className:"FusePageSimple-contentWrapper",enable:e.innerScroll&&!e.sidebarInner,children:[e.header&&!e.sidebarInner&&(0,p.jsx)(g,{header:e.header}),e.contentToolbar&&(0,p.jsx)("div",{className:(0,s.Z)("FusePageSimple-toolbar"),children:e.contentToolbar}),e.content&&(0,p.jsx)("div",{className:(0,s.Z)("FusePageSimple-content"),children:e.content})]}),(e.rightSidebarHeader||e.rightSidebarContent)&&(0,p.jsx)(y,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,sidebarInner:e.sidebarInner,ref:i,rootRef:r})]})]})]})]})}));j.defaultProps={classes:{}};var k=(0,u.memo)((0,a.ZP)(j)(x||(x=(0,i.Z)([""]))))},50791:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return z}});var i=t(15861),r=t(29439),o=t(4942),a=t(87757),s=t.n(a),u=t(88245),c=t(88564),l=t(23132),f=t(58970),d=t(47313),h=t(45894),p=t(48119),g=t(61113),m=t(53493),w=t.n(m),S=t(2628),v=t(31881),b=t.n(v),P=t(19386),O=t(27233),x=(0,S.hg)("taskDashboardApp/widgets/getWidgets",(0,i.Z)(s().mark((function e(){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b().get("".concat(P.J,"/api/TaskForm/widget"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(O.Z.getAccessToken())}});case 2:return n=e.sent,e.next=5,n.data;case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))),y=(0,S.HF)({}),R=y.getSelectors((function(e){return e.taskDashboardApp.widgets})),F=R.selectEntities,Z=(R.selectById,(0,S.oM)({name:"taskDashboardApp/widgets",initialState:y.getInitialState(),reducers:{},extraReducers:(0,o.Z)({},x.fulfilled,y.setAll)}).reducer),N=t(46417);var j=function(e){e.pageLayout;var n=(0,h.I0)(),t=((0,h.v9)(F),(0,h.v9)(m.selectProjects)),i=(0,h.v9)((function(e){return e.auth.user})),o=(0,d.useState)({id:1,menuEl:null}),a=(0,r.Z)(o,2);return a[0],a[1],(0,d.useEffect)((function(){n((0,m.getProjects)())}),[n]),f.Z.isEmpty(t)?null:(0,N.jsx)("div",{className:"flex flex-col justify-between flex-1 min-w-0 px-24 pt-24",children:(0,N.jsx)("div",{className:"flex justify-between items-center",children:(0,N.jsxs)("div",{className:"flex items-center min-w-0",children:[(0,N.jsx)(p.Z,{className:"w-52 h-52 ",children:i.firstName&&i.firstName[0]+i.lastName[0]}),(0,N.jsx)("div",{className:"mx-12 min-w-0",children:(0,N.jsxs)(g.Z,{className:"text-18 sm:text-24 md:text-32 font-bold leading-none  tracking-tight",children:["Bienvenido, ",i.firstName&&i.firstName+" "+i.lastName,"!"]})})]})})})},k=(0,t(9038).UY)({widgets:Z,projects:w()}),I=t(13993),E=t.n(I),T=t(93433),H=[],C=!1,U=!1,D=function(){return!!window.OneSignal},M=function(){H.forEach((function(e){var n=e.name,t=e.args,i=e.promiseResolver;i?A[n].apply(A,(0,T.Z)(t)).then((function(e){i(e)})):A[n].apply(A,(0,T.Z)(t))}))};var A={init:function(e){return new Promise((function(n){if(C)n();else{if(!e||!e.appId)throw new Error("You need to provide your OneSignal appId.");if(document){var t=document.createElement("script");t.id="onesignal-sdk",t.src="https://cdn.onesignal.com/sdks/OneSignalSDK.js",t.async=!0,t.onload=function(){!function(e,n){C=!0,window.OneSignal=window.OneSignal||[],window.OneSignal.push((function(){window.OneSignal.init(n)})),window.OneSignal.push((function(){M(),e()}))}(n,e)},t.onerror=function(){!function(e){U=!0,M(),e()}(n)},document.head.appendChild(t)}else n()}}))},on:function(e,n){D()?window.OneSignal.push((function(){window.OneSignal.on(e,n)})):H.push({name:"on",args:arguments})},off:function(e,n){D()?window.OneSignal.push((function(){window.OneSignal.off(e,n)})):H.push({name:"off",args:arguments})},once:function(e,n){D()?window.OneSignal.push((function(){window.OneSignal.once(e,n)})):H.push({name:"once",args:arguments})},isPushNotificationsEnabled:function(e){var n=arguments;return new Promise((function(t,i){if(U)t();else if(D())try{window.OneSignal.push((function(){window.OneSignal.isPushNotificationsEnabled(e).then((function(e){return t(e)})).catch((function(e){return i(e)}))}))}catch(r){i(r)}else H.push({name:"isPushNotificationsEnabled",args:n,promiseResolver:t})}))},showHttpPrompt:function(e){var n=arguments;return new Promise((function(t,i){if(U)t();else if(D())try{window.OneSignal.push((function(){window.OneSignal.showHttpPrompt(e).then((function(e){return t(e)})).catch((function(e){return i(e)}))}))}catch(r){i(r)}else H.push({name:"showHttpPrompt",args:n,promiseResolver:t})}))},registerForPushNotifications:function(e){var n=arguments;return new Promise((function(t,i){if(U)t();else if(D())try{window.OneSignal.push((function(){window.OneSignal.registerForPushNotifications(e).then((function(e){return t(e)})).catch((function(e){return i(e)}))}))}catch(r){i(r)}else H.push({name:"registerForPushNotifications",args:n,promiseResolver:t})}))},setDefaultNotificationUrl:function(e){var n=arguments;return new Promise((function(t,i){if(U)t();else if(D())try{window.OneSignal.push((function(){window.OneSignal.setDefaultNotificationUrl(e).then((function(e){return t(e)})).catch((function(e){return i(e)}))}))}catch(r){i(r)}else H.push({name:"setDefaultNotificationUrl",args:n,promiseResolver:t})}))},setDefaultTitle:function(e){var n=arguments;return new Promise((function(t,i){if(U)t();else if(D())try{window.OneSignal.push((function(){window.OneSignal.setDefaultTitle(e).then((function(e){return t(e)})).catch((function(e){return i(e)}))}))}catch(r){i(r)}else H.push({name:"setDefaultTitle",args:n,promiseResolver:t})}))},getTags:function(e){var n=arguments;return new Promise((function(t,i){if(U)t();else if(D())try{window.OneSignal.push((function(){window.OneSignal.getTags(e).then((function(e){return t(e)})).catch((function(e){return i(e)}))}))}catch(r){i(r)}else H.push({name:"getTags",args:n,promiseResolver:t})}))},sendTag:function(e,n,t){var i=arguments;return new Promise((function(r,o){if(U)r();else if(D())try{window.OneSignal.push((function(){window.OneSignal.sendTag(e,n,t).then((function(e){return r(e)})).catch((function(e){return o(e)}))}))}catch(a){o(a)}else H.push({name:"sendTag",args:i,promiseResolver:r})}))},sendTags:function(e,n){var t=arguments;return new Promise((function(i,r){if(U)i();else if(D())try{window.OneSignal.push((function(){window.OneSignal.sendTags(e,n).then((function(e){return i(e)})).catch((function(e){return r(e)}))}))}catch(o){r(o)}else H.push({name:"sendTags",args:t,promiseResolver:i})}))},deleteTag:function(e){var n=arguments;return new Promise((function(t,i){if(U)t();else if(D())try{window.OneSignal.push((function(){window.OneSignal.deleteTag(e).then((function(e){return t(e)})).catch((function(e){return i(e)}))}))}catch(r){i(r)}else H.push({name:"deleteTag",args:n,promiseResolver:t})}))},deleteTags:function(e,n){var t=arguments;return new Promise((function(i,r){if(U)i();else if(D())try{window.OneSignal.push((function(){window.OneSignal.deleteTags(e,n).then((function(e){return i(e)})).catch((function(e){return r(e)}))}))}catch(o){r(o)}else H.push({name:"deleteTags",args:t,promiseResolver:i})}))},addListenerForNotificationOpened:function(e){var n=arguments;return new Promise((function(t,i){if(U)t();else if(D())try{window.OneSignal.push((function(){window.OneSignal.addListenerForNotificationOpened(e).then((function(e){return t(e)})).catch((function(e){return i(e)}))}))}catch(r){i(r)}else H.push({name:"addListenerForNotificationOpened",args:n,promiseResolver:t})}))},setSubscription:function(e){var n=arguments;return new Promise((function(t,i){if(U)t();else if(D())try{window.OneSignal.push((function(){window.OneSignal.setSubscription(e).then((function(e){return t(e)})).catch((function(e){return i(e)}))}))}catch(r){i(r)}else H.push({name:"setSubscription",args:n,promiseResolver:t})}))},showHttpPermissionRequest:function(e){var n=arguments;return new Promise((function(t,i){if(U)t();else if(D())try{window.OneSignal.push((function(){window.OneSignal.showHttpPermissionRequest(e).then((function(e){return t(e)})).catch((function(e){return i(e)}))}))}catch(r){i(r)}else H.push({name:"showHttpPermissionRequest",args:n,promiseResolver:t})}))},showNativePrompt:function(){var e=arguments;return new Promise((function(n,t){if(U)n();else if(D())try{window.OneSignal.push((function(){window.OneSignal.showNativePrompt().then((function(e){return n(e)})).catch((function(e){return t(e)}))}))}catch(i){t(i)}else H.push({name:"showNativePrompt",args:e,promiseResolver:n})}))},showSlidedownPrompt:function(e){var n=arguments;return new Promise((function(t,i){if(U)t();else if(D())try{window.OneSignal.push((function(){window.OneSignal.showSlidedownPrompt(e).then((function(e){return t(e)})).catch((function(e){return i(e)}))}))}catch(r){i(r)}else H.push({name:"showSlidedownPrompt",args:n,promiseResolver:t})}))},showCategorySlidedown:function(e){var n=arguments;return new Promise((function(t,i){if(U)t();else if(D())try{window.OneSignal.push((function(){window.OneSignal.showCategorySlidedown(e).then((function(e){return t(e)})).catch((function(e){return i(e)}))}))}catch(r){i(r)}else H.push({name:"showCategorySlidedown",args:n,promiseResolver:t})}))},showSmsSlidedown:function(e){var n=arguments;return new Promise((function(t,i){if(U)t();else if(D())try{window.OneSignal.push((function(){window.OneSignal.showSmsSlidedown(e).then((function(e){return t(e)})).catch((function(e){return i(e)}))}))}catch(r){i(r)}else H.push({name:"showSmsSlidedown",args:n,promiseResolver:t})}))},showEmailSlidedown:function(e){var n=arguments;return new Promise((function(t,i){if(U)t();else if(D())try{window.OneSignal.push((function(){window.OneSignal.showEmailSlidedown(e).then((function(e){return t(e)})).catch((function(e){return i(e)}))}))}catch(r){i(r)}else H.push({name:"showEmailSlidedown",args:n,promiseResolver:t})}))},showSmsAndEmailSlidedown:function(e){var n=arguments;return new Promise((function(t,i){if(U)t();else if(D())try{window.OneSignal.push((function(){window.OneSignal.showSmsAndEmailSlidedown(e).then((function(e){return t(e)})).catch((function(e){return i(e)}))}))}catch(r){i(r)}else H.push({name:"showSmsAndEmailSlidedown",args:n,promiseResolver:t})}))},getNotificationPermission:function(e){var n=arguments;return new Promise((function(t,i){if(U)t();else if(D())try{window.OneSignal.push((function(){window.OneSignal.getNotificationPermission(e).then((function(e){return t(e)})).catch((function(e){return i(e)}))}))}catch(r){i(r)}else H.push({name:"getNotificationPermission",args:n,promiseResolver:t})}))},getUserId:function(e){var n=arguments;return new Promise((function(t,i){if(U)t();else if(D())try{window.OneSignal.push((function(){window.OneSignal.getUserId(e).then((function(e){return t(e)})).catch((function(e){return i(e)}))}))}catch(r){i(r)}else H.push({name:"getUserId",args:n,promiseResolver:t})}))},getSubscription:function(e){var n=arguments;return new Promise((function(t,i){if(U)t();else if(D())try{window.OneSignal.push((function(){window.OneSignal.getSubscription(e).then((function(e){return t(e)})).catch((function(e){return i(e)}))}))}catch(r){i(r)}else H.push({name:"getSubscription",args:n,promiseResolver:t})}))},setEmail:function(e,n){var t=arguments;return new Promise((function(i,r){if(U)i();else if(D())try{window.OneSignal.push((function(){window.OneSignal.setEmail(e,n).then((function(e){return i(e)})).catch((function(e){return r(e)}))}))}catch(o){r(o)}else H.push({name:"setEmail",args:t,promiseResolver:i})}))},setSMSNumber:function(e,n){var t=arguments;return new Promise((function(i,r){if(U)i();else if(D())try{window.OneSignal.push((function(){window.OneSignal.setSMSNumber(e,n).then((function(e){return i(e)})).catch((function(e){return r(e)}))}))}catch(o){r(o)}else H.push({name:"setSMSNumber",args:t,promiseResolver:i})}))},logoutEmail:function(){var e=arguments;return new Promise((function(n,t){if(U)n();else if(D())try{window.OneSignal.push((function(){window.OneSignal.logoutEmail().then((function(e){return n(e)})).catch((function(e){return t(e)}))}))}catch(i){t(i)}else H.push({name:"logoutEmail",args:e,promiseResolver:n})}))},logoutSMS:function(){var e=arguments;return new Promise((function(n,t){if(U)n();else if(D())try{window.OneSignal.push((function(){window.OneSignal.logoutSMS().then((function(e){return n(e)})).catch((function(e){return t(e)}))}))}catch(i){t(i)}else H.push({name:"logoutSMS",args:e,promiseResolver:n})}))},setExternalUserId:function(e,n){var t=arguments;return new Promise((function(i,r){if(U)i();else if(D())try{window.OneSignal.push((function(){window.OneSignal.setExternalUserId(e,n).then((function(e){return i(e)})).catch((function(e){return r(e)}))}))}catch(o){r(o)}else H.push({name:"setExternalUserId",args:t,promiseResolver:i})}))},removeExternalUserId:function(){var e=arguments;return new Promise((function(n,t){if(U)n();else if(D())try{window.OneSignal.push((function(){window.OneSignal.removeExternalUserId().then((function(e){return n(e)})).catch((function(e){return t(e)}))}))}catch(i){t(i)}else H.push({name:"removeExternalUserId",args:e,promiseResolver:n})}))},getExternalUserId:function(){var e=arguments;return new Promise((function(n,t){if(U)n();else if(D())try{window.OneSignal.push((function(){window.OneSignal.getExternalUserId().then((function(e){return n(e)})).catch((function(e){return t(e)}))}))}catch(i){t(i)}else H.push({name:"getExternalUserId",args:e,promiseResolver:n})}))},provideUserConsent:function(e){var n=arguments;return new Promise((function(t,i){if(U)t();else if(D())try{window.OneSignal.push((function(){window.OneSignal.provideUserConsent(e).then((function(e){return t(e)})).catch((function(e){return i(e)}))}))}catch(r){i(r)}else H.push({name:"provideUserConsent",args:n,promiseResolver:t})}))},getEmailId:function(e){var n=arguments;return new Promise((function(t,i){if(U)t();else if(D())try{window.OneSignal.push((function(){window.OneSignal.getEmailId(e).then((function(e){return t(e)})).catch((function(e){return i(e)}))}))}catch(r){i(r)}else H.push({name:"getEmailId",args:n,promiseResolver:t})}))},getSMSId:function(e){var n=arguments;return new Promise((function(t,i){if(U)t();else if(D())try{window.OneSignal.push((function(){window.OneSignal.getSMSId(e).then((function(e){return t(e)})).catch((function(e){return i(e)}))}))}catch(r){i(r)}else H.push({name:"getSMSId",args:n,promiseResolver:t})}))},sendOutcome:function(e,n){var t=arguments;return new Promise((function(i,r){if(U)i();else if(D())try{window.OneSignal.push((function(){window.OneSignal.sendOutcome(e,n).then((function(e){return i(e)})).catch((function(e){return r(e)}))}))}catch(o){r(o)}else H.push({name:"sendOutcome",args:t,promiseResolver:i})}))}},W=A,L=t(7861),B=function(){var e=window.localStorage.getItem("jwt_access_token");return(0,L.Z)(e).id},_=(0,c.ZP)(u.Z)((function(e){var n=e.theme;return{"& .FusePageSimple-header":(0,o.Z)({minHeight:100,height:100},n.breakpoints.up("lg"),{marginRight:12,borderBottomRightRadius:20}),"& .FusePageSimple-toolbar":{minHeight:56,height:56,alignItems:"flex-end"},"& .FusePageSimple-rightSidebar":{width:288,border:0,padding:"12px 0"},"& .FusePageSimple-content":{maxHeight:"100%","& canvas":{maxHeight:"100%"}}}}));var z=(0,l.Z)("taskDashboardApp",k)((function(){var e=(0,h.I0)(),n=(0,h.v9)(F),t=(0,d.useRef)(null),o=(0,d.useState)(0),a=(0,r.Z)(o,2),u=(a[0],a[1],function(e){console.log(e),W.sendTag("user",e).then((function(){console.log("Tagged"),console.log(e)}))});return(0,d.useEffect)((0,i.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:u(B().toString()),e(x());case 2:case"end":return n.stop()}}),n)}))),[e]),f.Z.isEmpty(n)?null:(0,N.jsx)(_,{header:(0,N.jsx)(j,{pageLayout:t}),content:(0,N.jsx)("div",{className:"p-12 lg:ltr:pr-0 lg:rtl:pl-0",children:(0,N.jsx)(E(),{})}),ref:t})}))},53493:function(){},13993:function(){}}]);