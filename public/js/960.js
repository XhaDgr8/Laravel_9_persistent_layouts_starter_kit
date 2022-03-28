"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[960],{4500:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(3645),r=o.n(n)()((function(e){return e[1]}));r.push([e.id,"header[data-v-a5f59718]{background-color:#000;display:flex;justify-content:space-between}h1[data-v-a5f59718]{color:#fff;display:block;padding:14px 16px;text-align:center}nav[data-v-a5f59718]{background-color:#333;list-style-type:none}nav>a[data-v-a5f59718]{color:#fff;cursor:pointer;display:block;float:left;padding:14px 16px;text-align:center;text-decoration:none}nav a[data-v-a5f59718]:hover{background-color:#111}",""]);const a=r},1326:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(3645),r=o.n(n)()((function(e){return e[1]}));r.push([e.id,".duration-200{transition-duration:.2s}.model{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:hsla(0,0%,100%,.25);height:100vh;overflow-y:auto;position:fixed;top:0;width:100%;z-index:500}",""]);const a=r},8651:(e,t,o)=>{o.d(t,{Z:()=>m});var n=o(821),r={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},a={class:"sm:flex sm:items-start"},s=(0,n.createElementVNode)("div",{class:"mx-auto shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},[(0,n.createElementVNode)("svg",{class:"h-6 w-6 text-red-600",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})])],-1),l={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},c={class:"text-lg"},i={class:"mt-2"},d={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"};var u=o(8286);const f=(0,n.defineComponent)({emits:["close"],components:{Modal:u.Z},props:{show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0}},methods:{close:function(){this.$emit("close")}}});const m=(0,o(3744).Z)(f,[["render",function(e,t,o,u,f,m){var p=(0,n.resolveComponent)("modal");return(0,n.openBlock)(),(0,n.createBlock)(p,{show:e.show,"max-width":e.maxWidth,closeable:e.closeable,onClose:e.close},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",r,[(0,n.createElementVNode)("div",a,[s,(0,n.createElementVNode)("div",l,[(0,n.createElementVNode)("h3",c,[(0,n.renderSlot)(e.$slots,"title")]),(0,n.createElementVNode)("div",i,[(0,n.renderSlot)(e.$slots,"content")])])])]),(0,n.createElementVNode)("div",d,[(0,n.renderSlot)(e.$slots,"footer")])]})),_:3},8,["show","max-width","closeable","onClose"])}]])},3309:(e,t,o)=>{o.d(t,{Z:()=>s});var n=o(821),r=["type"];const a=(0,n.defineComponent)({props:{type:{type:String,default:"button"}}});const s=(0,o(3744).Z)(a,[["render",function(e,t,o,a,s,l){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:e.type,class:"inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 active:bg-red-600 disabled:opacity-25 transition"},[(0,n.renderSlot)(e.$slots,"default")],8,r)}]])},8286:(e,t,o)=>{o.d(t,{Z:()=>u});var n=o(821),r={class:"model","scroll-region":""},a=[(0,n.createElementVNode)("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},"where are you",-1)];const s=(0,n.defineComponent)({emits:["close"],props:{show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0}},watch:{show:{immediate:!0,handler:function(e){document.body.style.overflow=e?"hidden":null}}},setup:function(e,t){var o=t.emit,r=function(){e.closeable&&o("close")},a=function(t){"Escape"===t.key&&e.show&&r()};return(0,n.onMounted)((function(){return document.addEventListener("keydown",a)})),(0,n.onUnmounted)((function(){document.removeEventListener("keydown",a),document.body.style.overflow=null})),{close:r}},computed:{maxWidthClass:function(){return{sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[this.maxWidth]}}});var l=o(3379),c=o.n(l),i=o(1326),d={insert:"head",singleton:!1};c()(i.Z,d);i.Z.locals;const u=(0,o(3744).Z)(s,[["render",function(e,t,o,s,l,c){return(0,n.openBlock)(),(0,n.createBlock)(n.Teleport,{to:"body"},[(0,n.createVNode)(n.Transition,{"leave-active-class":"duration-200"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createElementVNode)("div",r,[(0,n.createVNode)(n.Transition,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createElementVNode)("div",{class:"fixed inset-0 transform transition-all",onClick:t[0]||(t[0]=function(){return e.close&&e.close.apply(e,arguments)})},a,512),[[n.vShow,e.show]])]})),_:1}),(0,n.createVNode)(n.Transition,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createElementVNode)("div",{class:(0,n.normalizeClass)(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",e.maxWidthClass])},[e.show?(0,n.renderSlot)(e.$slots,"default",{key:0}):(0,n.createCommentVNode)("",!0)],2),[[n.vShow,e.show]])]})),_:3})],512),[[n.vShow,e.show]])]})),_:3})])}]])},5515:(e,t,o)=>{o.d(t,{Z:()=>s});var n=o(821),r=["type"];const a=(0,n.defineComponent)({props:{type:{type:String,default:"button"}}});const s=(0,o(3744).Z)(a,[["render",function(e,t,o,a,s,l){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 disabled:opacity-25 transition"},[(0,n.renderSlot)(e.$slots,"default")],8,r)}]])},7888:(e,t,o)=>{o.d(t,{Z:()=>E});var n=o(821);var r=function(e){return(0,n.pushScopeId)("data-v-a5f59718"),e=e(),(0,n.popScopeId)(),e},a=(0,n.createTextVNode)(" Authentication Required "),s=(0,n.createTextVNode)(" Login "),l=(0,n.createTextVNode)(" Register "),c=r((function(){return(0,n.createElementVNode)("h1",null,[(0,n.createElementVNode)("a",{class:"active",href:"/"},"Home")],-1)})),i=(0,n.createTextVNode)("Site"),d=(0,n.createTextVNode)("Portfolio"),u=(0,n.createTextVNode)("About"),f=(0,n.createTextVNode)("Dashboard"),m=(0,n.createTextVNode)("Log in"),p=(0,n.createTextVNode)("Register");var h=o(8651),x=o(5515),v=o(3309);const w=(0,n.defineComponent)({components:{DangerButton:v.Z,SecondaryButton:x.Z,ConfirmationModal:h.Z},data:function(){return{authModelIsOpen:!1,authModelMessage:""}},watch:{"$page.props.flash":function(){this.authModelIsOpen=null!=this.$page.props.flash.requiredAuth,this.authModelMessage=this.$page.props.flash.requiredAuth}}});var g=o(3379),y=o.n(g),b=o(4500),k={insert:"head",singleton:!1};y()(b.Z,k);b.Z.locals;var N=o(3744);const V=(0,N.Z)(w,[["render",function(e,t,o,r,h,x){var v=(0,n.resolveComponent)("Link"),w=(0,n.resolveComponent)("confirmation-modal");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(w,{show:e.authModelIsOpen,onClose:t[0]||(t[0]=function(t){return e.authModelIsOpen=!1})},{title:(0,n.withCtx)((function(){return[a]})),content:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.authModelMessage),1)]})),footer:(0,n.withCtx)((function(){return[(0,n.createVNode)(v,{href:e.route("login")},{default:(0,n.withCtx)((function(){return[s]})),_:1},8,["href"]),(0,n.createVNode)(v,{href:e.route("register")},{default:(0,n.withCtx)((function(){return[l]})),_:1},8,["href"])]})),_:1},8,["show"]),(0,n.createElementVNode)("header",null,[c,(0,n.createElementVNode)("nav",null,[(0,n.createVNode)(v,{href:e.route("site")},{default:(0,n.withCtx)((function(){return[i]})),_:1},8,["href"]),(0,n.createVNode)(v,{href:e.route("dashboard")},{default:(0,n.withCtx)((function(){return[d]})),_:1},8,["href"]),(0,n.createVNode)(v,{href:e.route("dashboard")},{default:(0,n.withCtx)((function(){return[u]})),_:1},8,["href"]),e.$page.props.user?((0,n.openBlock)(),(0,n.createBlock)(v,{key:0,href:e.route("dashboard")},{default:(0,n.withCtx)((function(){return[f]})),_:1},8,["href"])):(0,n.createCommentVNode)("",!0),e.$page.props.user?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createBlock)(v,{key:1,href:e.route("login")},{default:(0,n.withCtx)((function(){return[m]})),_:1},8,["href"])),e.$page.props.user?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createBlock)(v,{key:2,href:e.route("register")},{default:(0,n.withCtx)((function(){return[p]})),_:1},8,["href"]))])])],64)}],["__scopeId","data-v-a5f59718"]]),C=(0,n.defineComponent)({components:{navbar1:V}}),E=(0,N.Z)(C,[["render",function(e,t,o,r,a,s){var l=(0,n.resolveComponent)("navbar1");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(l),(0,n.renderSlot)(e.$slots,"default")],64)}]])},7960:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l});var n=o(821),r={class:"container m-t-xxl"},a=[(0,n.createElementVNode)("h1",null,"hello",-1)];const s={layout:o(7888).Z};const l=(0,o(3744).Z)(s,[["render",function(e,t,o,s,l,c){return(0,n.openBlock)(),(0,n.createElementBlock)("div",r,a)}]])}}]);