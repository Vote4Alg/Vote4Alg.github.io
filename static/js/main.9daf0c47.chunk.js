(this.webpackJsonpvote4alg=this.webpackJsonpvote4alg||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(35),i=n.n(o),c=n(23),s=n(131),l=(n(96),n(8)),u=n(11),m=n(10),h=n(9),d=n(52),p=n(7),g=n(135),b=n(136),f=n(40),y=n(2),v=n(132),k=n(137),O=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).DONATION_LINK="https://secure.anedot.com/234873bc-6307-406c-aab5-9dbfbd0c8d88/donate",a.BindSubclassMembers(),a}return Object(u.a)(n,[{key:"BindSubclassMembers",value:function(){var e=this;Object.getOwnPropertyNames(Object.getPrototypeOf(this)).forEach((function(t){e[t]=e[t].bind(e)}))}}]),n}(r.a.Component),w=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return n}(O),E=n(60),j=n.n(E),I=n(61),N=n.n(I),C=Object(y.i)({palette:{themePrimary:"#1f497d",themeLighterAlt:"#f2f6fa",themeLighter:"#cedbea",themeLight:"#a7bdd8",themeTertiary:"#6185b1",themeSecondary:"#305a8d",themeDarkAlt:"#1c4270",themeDark:"#18385f",themeDarker:"#112946",neutralLighterAlt:"#f8f8f8",neutralLighter:"#f4f4f4",neutralLight:"#eaeaea",neutralQuaternaryAlt:"#dadada",neutralQuaternary:"#d0d0d0",neutralTertiaryAlt:"#c8c8c8",neutralTertiary:"#a19f9d",neutralSecondary:"#605e5c",neutralPrimaryAlt:"#3b3a39",neutralPrimary:"#323130",neutralDark:"#201f1e",black:"#000000",white:"#ffffff"}}),S=n(63),x=n(39),A={facebook:r.a.createElement(k.a,null)};y.t({icons:A});var T=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).ICON_SIZE="44px",e}return Object(u.a)(n,[{key:"createItem",value:function(e){var t="",n="",a="",r=!1,o="",i={root:{backgroundColor:C.palette.themePrimary,color:C.palette.white,padding:"0 10px",minWidth:"string"===typeof e?"":e.minWidth,backgroundImage:"string"===typeof e?"":e.backgroundImage,backgroundRepeat:"string"===typeof e?"":e.backgroundRepeat,backgroundSize:"string"===typeof e?"":e.backgroundSize,backgroundPosition:"string"===typeof e?"":e.backgroundPosition},rootHovered:{backgroundColor:C.palette.themeSecondary,color:C.palette.neutralLighter},rootPressed:{backgroundColor:C.palette.themeTertiary,color:C.palette.neutralLighter},menuIcon:{color:C.palette.white},menuIconHovered:{color:C.palette.neutralLighter},menuIconPressed:{color:C.palette.neutralLighter}};return Object(x.isString)(e)?(t=e,n=e):(t=e.key,n=e.label||"",a=e.url,r=e.iconOnly,o=e.iconName||"",i=e.buttonStyles||i),{key:t,text:n,cacheKey:t,buttonStyles:i,iconOnly:r,iconProps:o?{iconName:o,styles:{root:{color:"white",fontSize:"2.5vw"}}}:void 0,href:a}}},{key:"logo",value:function(){var e=window.innerWidth<600?N.a:j.a;return this.createItem({key:"logo",url:"#",minWidth:"10vw",backgroundImage:"url(".concat(e,")"),backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})}},{key:"generateIssues",value:function(){return Object(x.map)(S,(function(e,t){return{key:e.title,text:e.title,href:"/issues/".concat(t)}}))}},{key:"issues",value:function(){return Object(f.a)(Object(f.a)({},this.createItem("Issues")),{},{subMenuProps:{items:this.generateIssues()}})}},{key:"contribute",value:function(){return this.createItem({key:"contribute",label:"Contribute",url:this.DONATION_LINK,buttonStyles:{root:{backgroundColor:C.palette.redDark,color:C.palette.white,padding:"0 10px"},rootHovered:{backgroundColor:C.palette.red,color:C.palette.neutralLighter},rootPressed:{backgroundColor:C.palette.themeSecondary,color:C.palette.neutralLighter}}})}},{key:"items",value:function(){var e=[this.logo(),this.createItem("About Brian"),this.issues(),this.contribute()];return e}},{key:"socialLinks",value:function(){return[this.createItem({key:"facebook",url:"https://www.facebook.com/Vote4Alg",iconOnly:!0,iconName:"facebook"})]}},{key:"render",value:function(){return r.a.createElement(v.a,{items:this.items(),farItems:this.socialLinks(),styles:{root:{backgroundColor:C.palette.themePrimary,height:"10vh"}}})}}]),n}(O),P=n(72),L=n.n(P),R=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).widths=void 0,a.widths=Object(f.a)({sm:{column1:"12",column2:"12"},lg:{column1:"4",column2:"8"}},a.props.widths),a}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"ms-Grid ".concat(this.props.className||""),dir:"ltr",style:this.props.style},r.a.createElement("div",{className:"ms-Grid-row"},r.a.createElement("div",{className:"ms-Grid-col ms-sm".concat(this.widths.sm.column1," ms-lg").concat(this.widths.lg.column1)},this.props.column1),r.a.createElement("div",{className:"ms-Grid-col ms-sm".concat(this.widths.sm.column2," ms-lg").concat(this.widths.lg.column2)},this.props.column2)))}}]),n}(O),H=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(b.a,{variant:"heading"===this.props.variant?"mega":"large"},this.props.children)}}]),n}(O),_=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(R,{column1:r.a.createElement("div",{style:{backgroundImage:"url(".concat(L.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"contain",minHeight:"60vh"}}),column2:[r.a.createElement("p",{key:1},r.a.createElement(H,null,"I am Brian Alg and I am running for Place 5 on College Station's City Council. All incumbents running have a record of disregard for the liberty and property of the citizens of College Station. John Nichols is no exception. His record and campaign statements make it clear he intends to use the current downturn as an excuse to continue to push for pet projects and disregard the rights of citizens.")),r.a.createElement("p",{key:2},r.a.createElement(H,null,"We do not need leaders with big plans for what they want to do with ",r.a.createElement(b.a,{variant:"mediumPlus"},"your")," stuff.")),r.a.createElement("p",{key:3},r.a.createElement(H,null,"We can do better.")),r.a.createElement("p",{key:4},r.a.createElement(H,null,"For sure, we are facing some hard times this year. Across the country, budgets are tightening. It is now more imperative than ever that we focus city resources on the core responsibilities. I see an opportunity to cut expensive extraneous activity from the budget. This should have been done years ago.")),r.a.createElement("p",{key:5},r.a.createElement(H,null,"Now is a great time to correct past mistakes.")),r.a.createElement("p",{key:6},r.a.createElement(H,null,"I am confident that coming out of this difficult time we could be entering a new golden age in College Station. We have so many things going for us. And I am excited to see what we can do with a city government that focuses on its job of providing excellent core services and otherwise letting citizens do great things with more of their own money. I will be happy to make that happen as your city councilman."))]})}}]),n}(w),z=n(73),B=n.n(z),D=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(R,{column1:r.a.createElement(H,null,"Col1"),column2:r.a.createElement("div",{style:{backgroundImage:"url(".concat(B.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"contain",minHeight:"30vh"}})})}}]),n}(w),F=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,this.props),r.a.createElement(D,this.props))}}]),n}(w),G=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){return this.props.match.params.issueId}}]),n}(w),M=Object(p.f)(G),W=n(134),U=n(56),J=n.n(U),K=n(57),X=n.n(K),Q={Splash:{url:"/",component:function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).CONTRIBUTE_TO_CAMPAIGN_TEXT="Contribute to the Campaign",e.BRIAN_FOR_COUNCIL="Brian Alg For College Station City Council",e}return Object(u.a)(n,[{key:"renderLargeScreen",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{className:"banner-blue",widths:{lg:{column1:"6",column2:"6"}},column1:r.a.createElement("div",{className:"banner-blue",style:{minHeight:"55vh",backgroundImage:"url(".concat(J.a,")"),backgroundRepeat:"no-repeat",backgroundPosition:"10%",backgroundSize:"contain",margin:"10px"}}),column2:r.a.createElement("div",{className:"centered-container",style:{minHeight:"50vh",color:"white"}},r.a.createElement("div",{style:{padding:"50px 0px"}},r.a.createElement(W.a,{style:{width:"25vw",height:"10vh"},href:this.DONATION_LINK,styles:{root:{fontSize:"2.5vh"}}},this.CONTRIBUTE_TO_CAMPAIGN_TEXT)),r.a.createElement("div",{style:{padding:"50px 0px"}},r.a.createElement(b.a,{variant:"xxLargePlus"},this.BRIAN_FOR_COUNCIL)))}),r.a.createElement("div",{className:"centered-container",style:{minHeight:"10vh"}}),r.a.createElement("div",{className:"banner-red",style:{minHeight:"18vh",maxHeight:"18vh",backgroundImage:"url(".concat(X.a,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"}}))}},{key:"renderSmallScreen",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"banner-blue"},r.a.createElement("div",{style:{minHeight:"40vh",backgroundImage:"url(".concat(J.a,")"),backgroundRepeat:"no-repeat",backgroundPosition:"10%",backgroundSize:"contain",margin:"10px"}}),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"15vh"}},r.a.createElement(W.a,{style:{width:"80vw",height:"10vh"},href:this.DONATION_LINK,styles:{root:{fontSize:"2.5vh"}}},this.CONTRIBUTE_TO_CAMPAIGN_TEXT))),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"13vh"}},r.a.createElement(b.a,{variant:"large"},this.BRIAN_FOR_COUNCIL)),r.a.createElement("div",{className:"banner-red",style:{minHeight:"19vh",maxHeight:"19vh",backgroundImage:"url(".concat(X.a,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"}}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ms-Grid"},r.a.createElement("div",{className:"ms-Grid-row ms-hiddenMdDown"},this.renderLargeScreen()),r.a.createElement("div",{className:"ms-Grid-row ms-hiddenLgUp",style:{minHeight:"60vh"}},this.renderSmallScreen())))}}]),n}(O)},Home:{url:"/home",component:F},Issues:{url:"/issues/:issueId",component:M}},V=(n(102),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(g.a,null,r.a.createElement(T,null),r.a.createElement("main",null,r.a.createElement(d.a,null,r.a.createElement(p.c,null,Object(x.map)(Q,(function(e,t){return console.log("Regisering ".concat(t,' @ "').concat(e.url,'"')),r.a.createElement(p.a,{key:e.url,path:e.url,exact:!e.notExact,component:e.component,render:e.render})})))),r.a.createElement("div",{className:"centered-container"},r.a.createElement(b.a,{variant:"small",style:{paddingTop:"5px"}},"Paid for by Brian Alg")))))}}]),n}(O));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.applySettings({theme:C}),Object(s.a)(),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},56:function(e,t,n){e.exports=n.p+"static/media/brian-horse-cropped.d280cded.jpeg"},57:function(e,t,n){e.exports=n.p+"static/media/slogan.72a926e8.svg"},60:function(e,t,n){e.exports=n.p+"static/media/name.eb93e5ff.svg"},61:function(e,t,n){e.exports=n.p+"static/media/logo.989d2515.svg"},63:function(e){e.exports=JSON.parse('{"focus-on-core":{"title":"Focus on the Core","content":["The primary function of government (including local government) is the protection of constituents\u2019 life, liberty, and property. A secondary function of local government is to provide other core services to constituents such as police and fire services and basic infrastructure that may not be efficiently provided by the private sector, e.g., roads, water, and sewage. I do not believe local governments are superior to residents, property owners, or businesses in deciding what is best for residents, property owners, or businesses. I believe free markets are generally superior to governments when it comes to optimally allocating resources. Neither Councilman Nichols, nor the other current members of the College Station City Council, practice a principled and disciplined approach to local governance. The current City Council\u2019s policy and spending decisions are often inconsistent with the core functions of government outlined above. I can and will do better."],"pic":"brian2.jpg"},"residential-property-restrictions":{"title":"Residential Property Restrictions","content":["Looking at the June city council workshop where they discuss the proposed \\"Restricted Occupancy Overlay\\" change. It is bizarre to me that they are able to talk so blithely about overriding the property rights of citizens. Nichols has no problem being dismissive of traditional property rights in service of his mission to prevent change in College Station.","The city government should not be used as a cudgel to force even a minority of owners into what amount to HOA-like restrictions without their consent. HOAs and other mutually restrictive agreements between neighbors are of course fine. Many people happily enter into those kinds of agreements, and I am happy for those who choose to do so. But these agreements must be made voluntarily. Using government as a means to take a neighbor\'s property without just compensation is an abomination."],"pic":"brian2.jpg"}}')},72:function(e,t,n){e.exports=n.p+"static/media/brian1.2d954f2e.jpg"},73:function(e,t,n){e.exports=n.p+"static/media/brian2.7585a076.jpg"},91:function(e,t,n){e.exports=n(103)},96:function(e,t,n){}},[[91,1,2]]]);
//# sourceMappingURL=main.9daf0c47.chunk.js.map