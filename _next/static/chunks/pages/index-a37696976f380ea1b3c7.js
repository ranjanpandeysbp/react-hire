(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),a=n(6860),o=n(379),s=n(8206);e.exports=function(e){return r(e)||a(e)||o(e)||s()}},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(a.default.useContext(o.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},o=n(3398);function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,s=void 0!==o&&o;return n||a&&s}},2775:function(e,t,n){"use strict";var r=n(9713);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=m,t.default=void 0;var o,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(7294)),i=(o=n(3244))&&o.__esModule?o:{default:o},c=n(3398),d=n(1165),l=n(6393);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function m(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=s.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(m(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,s=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){s=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,d=h.length;c<d;c++){var l=h[c];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var u=a.props[l],m=r[l]||new Set;"name"===l&&s||!m.has(u)?(m.add(u),r[l]=m):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,s.default.cloneElement(e,i)}return s.default.cloneElement(e,{key:o})}))}var v=function(e){var t=e.children,n=(0,s.useContext)(c.AmpStateContext),r=(0,s.useContext)(d.HeadManagerContext);return s.default.createElement(i.default,{reduceComponentsToState:f,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)};t.default=v},3244:function(e,t,n){"use strict";var r=n(319),a=n(4575),o=n(3913),s=(n(1506),n(2205)),i=n(8585),c=n(9754);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(7294),u=function(e){s(n,e);var t=d(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=u},1085:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(5893),a=n(7294),o=n(2240),s=n.n(o),i=n(9097),c=n.n(i);var d=function(){return(0,r.jsxs)("div",{className:c().header,children:[(0,r.jsx)("i",{className:"devicon-react-original colored"}),"React Hire"]})},l=n(5533),u=n.n(l);var m=function(){return(0,r.jsx)("div",{className:u().separator})},p=n(4494),h=n(448),f=function(e){return{type:h.l,data:e}},v=function(e){return{type:h.r,data:e}},_=n(8835),y=n.n(_);var g=(0,p.$j)((function(e){return{saved:e.react.saved}}),(function(e){return{addToSave:function(t){return e(f(t))},deleteFromSave:function(t){return e(v(t))}}}))((function(e){var t=e.company,n=e.addToSave,a=e.saved,o=e.deleteFromSave,s=a.includes(t);return console.log(s),(0,r.jsxs)("div",{className:y().card,children:[(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:t.logo,className:y().card_logo,alt:"company logo"})}),(0,r.jsxs)("div",{className:y().info,children:[(0,r.jsx)("label",{className:y().name,children:t.name}),(0,r.jsxs)("div",{className:y().location,children:[(0,r.jsx)("i",{className:"fi-rr-marker"}),(0,r.jsx)("label",{children:t.location})]})]}),(0,r.jsxs)("div",{className:y().cardRight,children:[(0,r.jsxs)("div",{className:y().options,children:[(0,r.jsx)("div",{className:y().bookmarkIcon,onClick:function(){s?o(t):n(t)},children:s?(0,r.jsx)("i",{className:"fi-sr-bookmark"}):(0,r.jsx)("i",{className:"fi-rr-bookmark"})}),(0,r.jsx)("a",{href:t.website,target:"_blank",rel:"noopener noreferrer",children:(0,r.jsxs)("div",{className:y().visit,children:[(0,r.jsx)("i",{className:"fi-rr-globe"}),"Visit"]})})]}),(0,r.jsx)("div",{className:y().domain,children:t.domain})]})]})})),x=n(5342),j=n.n(x);var b=(0,p.$j)((function(e){return{saved:e.react.saved}}),(function(e){return{addToSave:function(t){return e(f(t))},deleteFromSave:function(t){return e(v(t))}}}))((function(e){var t=e.company,n=e.addToSave,a=e.saved,o=e.deleteFromSave,s=a.includes(t);return console.log(s),(0,r.jsxs)("div",{className:j().card,children:[(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:t.logo,className:j().card_logo,alt:"company logo"})}),(0,r.jsxs)("div",{className:j().info,children:[(0,r.jsx)("label",{className:j().name,children:t.name}),(0,r.jsxs)("div",{className:j().location,children:[(0,r.jsx)("i",{className:"fi-rr-marker"}),(0,r.jsx)("label",{children:t.location})]})]}),(0,r.jsxs)("div",{className:j().cardRight,children:[(0,r.jsxs)("div",{className:j().options,children:[(0,r.jsx)("div",{className:j().bookmarkIcon,onClick:function(){s?o(t):n(t)},children:s?(0,r.jsx)("i",{className:"fi-sr-bookmark"}):(0,r.jsx)("i",{className:"fi-rr-bookmark"})}),(0,r.jsx)("a",{href:t.website,target:"_blank",rel:"noopener noreferrer",children:(0,r.jsxs)("div",{className:j().visit,children:[(0,r.jsx)("i",{className:"fi-rr-globe"}),"Visit"]})})]}),(0,r.jsx)("div",{className:j().domain,children:t.domain})]})]})}));var k=(0,p.$j)((function(e){var t=e.react;return{list:t.companyList,saved:t.saved}}))((function(e){var t=e.list,n=e.saved,o=(0,a.useState)(!1),i=o[0],c=o[1];return(0,r.jsxs)("div",{className:s().home,children:[(0,r.jsx)(d,{}),(0,r.jsx)(m,{}),(0,r.jsxs)("div",{className:s().intro,children:[(0,r.jsx)("p",{children:"This is a handpicked list of Indian startups that use ReactJS as their frontend framework. This will help you in job hunting, startup research etc."}),(0,r.jsxs)("div",{className:s().introRight,children:[(0,r.jsxs)("div",{className:s().githubOption,children:["Find this useful?",(0,r.jsx)("a",{href:"https://github.com/shuvamk/react-hire",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsxs)("div",{className:s().githubStar,children:[(0,r.jsx)("i",{className:"devicon-github-original colored"})," Star"]})})]}),(0,r.jsxs)("div",{className:s().bookmarkOption,onClick:function(){return c(!i)},children:[(0,r.jsx)("i",{className:"fi-rr-bookmark"})," Bookmarked"]})]})]}),(0,r.jsxs)("div",{className:s().listContainer,children:[i?(0,r.jsxs)("div",{className:s().savedListMobile,children:[(0,r.jsxs)("div",{className:s().savedTop,children:[(0,r.jsx)("label",{className:s().savedTitle,children:"Bookmarked Startups"}),(0,r.jsx)("div",{className:s().closeIcon,onClick:function(){return c(!i)},children:(0,r.jsx)("i",{className:"fi-rr-cross-circle"})})]}),0===n.length?(0,r.jsxs)("div",{className:s().empty,children:[(0,r.jsx)("img",{src:"https://cdni.iconscout.com/illustration/premium/thumb/searching-in-box-3428236-2902705.png",className:s().emptyImage,alt:"empty saved"}),(0,r.jsxs)("p",{children:[" ","Uh oh! You haven't bookmarked any startup"]})]}):n.map((function(e){return(0,r.jsx)(b,{company:e},e.id)}))]}):(0,r.jsx)("div",{className:s().companyList,children:t.map((function(e){return(0,r.jsx)(g,{company:e},e.id)}))}),(0,r.jsxs)("div",{className:s().savedList,children:[(0,r.jsx)("div",{className:s().savedTop,children:(0,r.jsx)("label",{className:s().savedTitle,children:"Bookmarked Startups"})}),0===n.length?(0,r.jsxs)("div",{className:s().empty,children:[(0,r.jsx)("img",{src:"https://cdni.iconscout.com/illustration/premium/thumb/searching-in-box-3428236-2902705.png",className:s().emptyImage,alt:"empty saved"}),(0,r.jsxs)("p",{children:[" ","Uh oh! You haven't bookmarked any startup"]})]}):n.map((function(e){return(0,r.jsx)(b,{company:e},e.id)}))]})]})]})})),N=n(9008);var O=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(N.default,{children:[(0,r.jsx)("link",{rel:"icon",href:"react.png",type:"image",sizes:"16x16"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Poppins&display=swap",rel:"stylesheet"}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css"}),(0,r.jsx)("title",{children:"React Hire"})]}),(0,r.jsx)(k,{})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1085)}])},9097:function(e){e.exports={header:"header_header__3_wU0"}},5533:function(e){e.exports={separator:"separator_separator__GvfI_"}},8835:function(e){e.exports={card:"company-card_card__3_zDM",bookmark:"company-card_bookmark__3cCPk",card_logo:"company-card_card_logo__1kPXU",info:"company-card_info__2tGFz",name:"company-card_name__2CaQR",domain:"company-card_domain__DndWD",location:"company-card_location__1gUAo",cardRight:"company-card_cardRight__37OZB",visit:"company-card_visit__-tVm1",options:"company-card_options__3_Usq",bookmarkIcon:"company-card_bookmarkIcon__1bdOu"}},2240:function(e){e.exports={home:"home_home__3Di1D",intro:"home_intro__2l4JG",introRight:"home_introRight__3Bnlc",bookmarkOption:"home_bookmarkOption__odtpY",githubStar:"home_githubStar__muYPv",listContainer:"home_listContainer__WCoSJ",companyList:"home_companyList__2n86C",savedList:"home_savedList__3nHid",githubOption:"home_githubOption__IZ7ZT",savedTop:"home_savedTop__bM6o0",savedTitle:"home_savedTitle__31tsr",savedListMobile:"home_savedListMobile__1s6Qa",empty:"home_empty__1KgXX",emptyImage:"home_emptyImage__357zT",closeIcon:"home_closeIcon__10265"}},5342:function(e){e.exports={card:"saved-card_card__3gqRK",bookmark:"saved-card_bookmark__3YDRJ",card_logo:"saved-card_card_logo__22kqg",info:"saved-card_info__FRzNy",name:"saved-card_name__3JpgR",domain:"saved-card_domain__2skTA",location:"saved-card_location__1O4xW",cardRight:"saved-card_cardRight__2LzZm",visit:"saved-card_visit__2yK_F",options:"saved-card_options__3eggr",bookmarkIcon:"saved-card_bookmarkIcon__2jnmo"}},9008:function(e,t,n){e.exports=n(2775)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);