(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{432:function(t,e,n){"use strict";var r=n(45),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-container"},[t._m(0),t._v(" "),n("nav",{staticClass:"bar bar--sm bar-1 hidden-xs",attrs:{id:"menu1","data-scroll-class":"366px:pos-fixed"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[t._m(1),t._v(" "),n("div",{staticClass:"col text-right text-left-xs text-left-sm"},[n("div",{staticClass:"bar__module"},[n("ul",{staticClass:"menu-horizontal text-left"},[t._m(2),t._v(" "),t._m(3),t._v(" "),n("li",{staticClass:"dropdown"},[n("span",{staticClass:"dropdown__trigger"},[t._v("Services")]),t._v(" "),n("div",{staticClass:"dropdown__container"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"mt-1 dropdown__content col-lg-4 col-md-4 col-sm-6"},[n("ul",{staticClass:"menu-vertical"},t._l(t.$store.state.services,(function(e,r){return n("li",{key:r},[n("a",{attrs:{href:"/services/"+e.slug}},[t._v(t._s(e.title))])])})),0)])])])])]),t._v(" "),t._m(4)])]),t._v(" "),t._m(5)])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bar bar--sm visible-xs"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-3 col-md-2"},[n("a",{attrs:{href:"/"}},[n("img",{staticStyle:{height:"55px"},attrs:{src:"/img/plateform-engineers.png"}})])]),t._v(" "),n("div",{staticClass:"col-9 col-md-10 text-right"},[n("a",{staticClass:"hamburger-toggle",attrs:{href:"#","data-toggle-class":"#menu1;hidden-xs"}},[n("i",{staticClass:"icon icon--sm stack-interface stack-menu"})])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hidden-xs d-flex align-items-center"},[e("div",{staticClass:"bar__module"},[e("a",{attrs:{href:"/"}},[e("img",{staticStyle:{height:"55px"},attrs:{src:"/img/plateform-engineers.png"}})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/"}},[t._v("Home")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/about-us"}},[t._v("About Us")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{},[n("a",{attrs:{href:"/case-studies"}},[t._v("Case Studies")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bar__module"},[n("a",{staticClass:"btn btn--sm btn--primary type--uppercase",attrs:{href:"/contact-us"}},[n("span",{staticClass:"btn__text"},[t._v("Contact Us")])])])}],!1,null,null,null);e.a=component.exports},438:function(t,e,n){"use strict";(function(t){var r=n(7),l=(n(46),n(432));e.a={components:{Navigation:l.a},layout:"theme",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,c,o,v,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,t.params,t.payload,e.next=3,n.$axios.$get(n.$urls.home);case 3:return r=e.sent,l=r.data,e.next=7,n.$axios.$get(n.$urls.services);case 7:return c=e.sent,o=c.data,e.next=11,n.$axios.$get(n.$urls.whyUs);case 11:return v=e.sent,d=v.data,e.abrupt("return",{home:l,services:o,whyUs:d});case 14:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.home&&this.home.seo_title,meta:[{name:"description",content:this.home&&this.home.seo_description},{name:"title",content:this.home&&this.home.seo_title},{property:"og:type",content:"website"},{property:"og:url",content:t.env.BASE_URL+"/"},{property:"og:title",content:this.home&&this.home.seo_title},{property:"og:description",content:this.home&&this.home.seo_description},{property:"og:image",content:t.env.BASE_URL+"/img/logo.png"},{property:"twitter:card",content:"summary"},{property:"twitter:site",content:""},{property:"twitter:creator",content:""},{property:"twitter:title",content:this.home&&this.home.seo_title},{property:"twitter:description",content:this.home&&this.home.seo_description},{property:"twitter:image",content:t.env.BASE_URL+"/img/logo.png"}],link:[{rel:"canonical",href:t.env.BASE_URL+"/"}]}}}}).call(this,n(119))},443:function(t,e,n){},448:function(t,e,n){"use strict";n(443)},462:function(t,e,n){"use strict";n.r(e);var r=n(438).a,l=(n(448),n(45)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.home?n("div",[n("div",{staticClass:"main-container"},[n("div",{staticClass:"hero-bk"},[n("Navigation"),t._v(" "),n("section",[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center justify-content-around"},[n("div",{staticClass:"col-md-6 col-lg-5"},[n("h1",[t._v(t._s(t.home.tagline))]),t._v(" "),n("p",{staticClass:"lead"},[t._v(t._s(t.home.description))]),t._v(" "),t._m(0)]),t._v(" "),t._m(1)])])])],1),t._v(" "),t._m(2),t._v(" "),n("hr",{staticClass:"m-0"}),t._v(" "),n("section",{staticClass:"wave-bk"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"text-center col-md-8 offset-md-2 pb-5"},[n("h2",[t._v(t._s(t.home.services_title))]),t._v(" "),n("p",{staticClass:"lead"},[t._v("\n              "+t._s(t.home.services_description)+"\n            ")])]),t._v(" "),t._l(t.services,(function(e,r){return n("div",{key:r,staticClass:"col-md-4 d-flex"},[n("div",{staticClass:"text-center w-100 feature feature-3 boxed boxed--lg bs-1 rounded d-flex flex-column"},[n("div",{staticClass:"mb-4"},[n("nuxt-img",{attrs:{src:t.$urls.assets(e.icon_as_image),alt:e.title,title:e.title,format:"png",loading:"lazy",height:"80px"}})],1),t._v(" "),n("h4",{staticClass:"flex-grow-1"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"flex-grow-1"},[t._v("\n                "+t._s(e.description)+"\n              ")]),t._v(" "),n("a",{attrs:{href:"/services/"+e.slug}},[t._v(" Learn More ")])])])}))],2)])]),t._v(" "),n("section",{staticClass:"wave-bk-reverse bg--"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"text-center col-md-8 offset-md-2 pb-5"},[n("h2",[t._v(t._s(t.home.whyus_title))]),t._v(" "),n("p",{staticClass:"lead"},[t._v("\n              "+t._s(t.home.whyus_description)+"\n            ")])]),t._v(" "),t._l(t.whyUs,(function(e,r){return n("div",{key:r,staticClass:"col-md-4 d-flex"},[n("div",{staticClass:"text-center w-100 feature feature-3 boxed boxed--lg bs-1 rounded d-flex flex-column"},[n("div",{staticClass:"mb-4"},[n("nuxt-img",{attrs:{src:t.$urls.assets(e.image),alt:e.title,title:e.title,format:"png",loading:"lazy",height:"80px"}})],1),t._v(" "),n("h4",{staticClass:"flex-grow-1"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"flex-grow-1"},[t._v("\n                "+t._s(e.description)+"\n              ")])])])}))],2)])]),t._v(" "),t._m(3)])]):t._e()}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"btn btn--primary type--uppercase",attrs:{href:"/contact-us"}},[n("span",{staticClass:"btn__text"},[t._v(" Contact Us ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-7"},[e("img",{attrs:{alt:"Image",src:"/img/l13.svg"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"text-center technologies space--xs o_05",attrs:{id:"toolBox"}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row text-center justify-content-center"},[n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("img",{staticClass:"lazyload",attrs:{src:"img/technologies/linux.png",alt:"linux",title:"Linux",loading:"lazy"}}),t._v(" "),n("h6",[t._v("Linux")])])]),t._v(" "),n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("img",{staticClass:"lazyload",attrs:{src:"img/technologies/docker.png",alt:"docker",title:"Docker",loading:"lazy"}}),t._v(" "),n("h6",[t._v("Docker")])])]),t._v(" "),n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("img",{staticClass:"lazyload",attrs:{src:"img/technologies/kubernetes.svg",alt:"kubernetes",title:"kubernetes",loading:"lazy"}}),t._v(" "),n("h6",[t._v("Kubernetes")])])]),t._v(" "),n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("img",{staticClass:"lazyload",attrs:{src:"img/technologies/helm.png",alt:"Helm",title:"Helm",loading:"lazy"}}),t._v(" "),n("h6",[t._v("Helm")])])]),t._v(" "),n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("img",{staticClass:"lazyload",attrs:{src:"img/technologies/terraform.svg",alt:"Terraforms",title:"Terraform",loading:"lazy"}}),t._v(" "),n("h6",[t._v("Terraform")])])]),t._v(" "),n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("img",{staticClass:"lazyload",attrs:{src:"img/technologies/nginx.png",alt:"nginx",title:"nginx",loading:"lazy"}}),t._v(" "),n("h6",[t._v("Nginx")])])]),t._v(" "),n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("img",{staticClass:"lazyload",attrs:{src:"img/technologies/amazon-web-services-icon.svg",alt:"amazon_web_services",loading:"lazy",title:"Amazon Web Services"}}),t._v(" "),n("h6",[t._v("Amazon Web Services")])])]),t._v(" "),n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("img",{staticClass:"lazyload",attrs:{src:"img/technologies/google_cloud_platform.png",alt:"google_cloud_platform",loading:"lazy",title:"Google Cloud Platform"}}),t._v(" "),n("h6",[t._v("Google Cloud Platform")])])]),t._v(" "),n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("img",{staticClass:"lazyload",attrs:{src:"img/technologies/digital_ocean.png",alt:"digital_ocean",loading:"lazy",title:"DigitalOcean"}}),t._v(" "),n("h6",[t._v("DigitalOcean")])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"space--xs bg--secondary"},[n("div",{staticClass:"container"},[n("div",{staticClass:"cta cta--horizontal text-center-xs row"},[n("div",{staticClass:"col-md-6"},[n("h4",[t._v("Let's Connect")])]),t._v(" "),n("div",{staticClass:"col-md-6 text-right text-center-xs"},[n("a",{staticClass:"btn btn--primary type--uppercase",attrs:{href:"/contact-us"}},[n("span",{staticClass:"btn__text"},[t._v("Contact Us")])])])])])])}],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=e6919ea.js.map