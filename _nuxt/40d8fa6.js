(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{453:function(t,e,n){t.exports=function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e){"use strict";function n(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports={install:function(t){t.directive("smooth-scroll",{inserted:function(t,e){"object"===("undefined"==typeof window?"undefined":r(window))&&void 0!==window.pageYOffset&&t.addEventListener("click",(function(t){var r=document.getElementById(this.hash.substring(1));if(r){t.preventDefault(),window.history.pushState&&location.hash!==this.hash&&window.history.pushState("","",this.hash);var i=e.value&&e.value.duration?e.value.duration:500,o=e.value&&e.value.offset?e.value.offset:0,u=Date.now(),c="HTML"===r.nodeName?-window.pageYOffset:r.getBoundingClientRect().top+window.pageYOffset;c+=o;var a=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,15)},s=function t(){var e=Date.now()-u,o=c;e<i?(o=window.pageYOffset+(c-window.pageYOffset)*n(e/i),a(t)):location.replace("#"+r.id),window.scroll(0,o)};s()}}))}})}}}])},459:function(t,e,n){"use strict";n.r(e);var r=n(45),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"space--sm footer-2 bg--dark"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-md-3 col-sm-6 col-12 mb-5"},[n("h6",{staticClass:"type--uppercase m-0"},[t._v("Services")]),t._v(" "),n("ul",{staticClass:"list--hover"},t._l(t.$store.state.services,(function(e,r){return n("li",{key:r},[n("a",{attrs:{href:"/services/"+e.slug}},[t._v(t._s(e.title))])])})),0)]),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),t._m(3)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-3 col-sm-6 col-12 mb-5"},[n("h6",{staticClass:"type--uppercase m-0"},[t._v("Company")]),t._v(" "),n("ul",{staticClass:"list--hover"},[n("li",{},[n("a",{attrs:{href:"/about-us"}},[t._v("About Us")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-3 col-sm-6 col-12 mb-5"},[n("h6",{staticClass:"type--uppercase m-0"},[t._v("Support")]),t._v(" "),n("ul",{staticClass:"list--hover"},[n("li",[n("a",{attrs:{href:"/contact-us"}},[t._v("Contact Us")])]),t._v(" "),n("li",[n("a",{attrs:{href:"mailto:sales@platformengineers.in"}},[t._v("sales@platformengineers.in")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-3 col-sm-6 col-12 mb-5"},[n("h6",{staticClass:"type--uppercase m-0"},[t._v("Resources")]),t._v(" "),n("ul",{staticClass:"list--hover"},[n("li",{},[n("a",{attrs:{href:"/case-studies"}},[t._v("Case Studies")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 text-center"},[n("span",{staticClass:"type--fine-print"},[t._v("© "),n("span",{staticClass:"update-year"}),t._v(" Platform Engineers")])])])}],!1,null,null,null).exports,c=n(2),l=n(453),v=n.n(l);c.a.use(v.a);var f={},m={components:{Footer:o,backToTop:Object(r.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"back-to-top inner-link",attrs:{href:"#start","data-scroll-class":"100vh:active",title:"click & go to top of the page"}},[e("i",{staticClass:"stack-interface stack-up-open-big"})])}),[],!1,null,null,null).exports,GoogleAnalyticsV4:Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("script",{attrs:{async:"",src:"https://www.googletagmanager.com/gtag/js?id=G-LRC7N9VH4L"}}),t._v(" "),n("script",[t._v('\n    window.dataLayer = window.dataLayer || [];\n    function gtag() {\n      dataLayer.push(arguments);\n    }\n    gtag("js", new Date());\n\n    gtag("config", "G-LRC7N9VH4L");\n  ')])])}],!1,null,null,null).exports}},d=Object(r.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["development"===t.$config.MODE?n("div",[n("link",{attrs:{href:"/theme/css/bootstrap.css",rel:"stylesheet",type:"text/css"}}),t._v(" "),n("link",{attrs:{href:"/theme/css/stack-interface.css",rel:"stylesheet",type:"text/css"}}),t._v(" "),n("link",{attrs:{href:"/theme/css/socicon.css",rel:"stylesheet",type:"text/css"}}),t._v(" "),n("link",{attrs:{href:"/theme/css/iconsmind.css",rel:"stylesheet",type:"text/css"}}),t._v(" "),n("link",{attrs:{href:"/theme/css/theme.css",rel:"stylesheet",type:"text/css"}}),t._v(" "),n("link",{attrs:{href:"/css/custom.css",rel:"stylesheet",type:"text/css"}}),t._v(" "),n("link",{attrs:{href:"/css/pages.css",rel:"stylesheet",type:"text/css"}}),t._v(" "),n("link",{attrs:{href:"/theme/css/font-rubiklato.css",rel:"stylesheet",type:"text/css"}})]):n("div",[n("link",{attrs:{rel:"stylesheet",href:"/dist/index.min.css",lazyload:""}})]),t._v(" "),n("a",{attrs:{id:"start",rel:"nofollow",href:"javscript:void(0);"}}),t._v(" "),n("nuxt"),t._v(" "),n("Footer"),t._v(" "),n("backToTop"),t._v(" "),n("script",{attrs:{src:"/theme/js/jquery-3.1.1.min.js"}}),t._v(" "),n("script",{attrs:{src:"/theme/js/scripts.js"}}),t._v(" "),n("script",{attrs:{src:"/js/contactus.js"}}),t._v(" "),"development"!==t.$config.MODE?n("GoogleAnalyticsV4"):t._e()],1)}),[],!1,null,null,null);e.default=d.exports}}]);
//# sourceMappingURL=40d8fa6.js.map