(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{434:function(t,e,n){},435:function(t,e,n){"use strict";n(434)},436:function(t,e,n){"use strict";n(435);var r=n(45),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-container"},[n("div",{staticClass:"bar bar--sm visible-xs"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-3 col-md-2"},[n("a",{attrs:{href:"/"}},[n("nuxt-img",{attrs:{src:"/img/plateform-engineers.png",alt:"Platform Engineers",title:"Platform Engineers",format:"png",loading:"lazy",width:"68",height:"55"}})],1)]),t._v(" "),t._m(0)])])]),t._v(" "),n("nav",{staticClass:"bar bar--sm bar-1 hidden-xs",attrs:{id:"menu1","data-scroll-class":"366px:pos-fixed"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"hidden-xs d-flex align-items-center"},[n("div",{staticClass:"bar__module"},[n("a",{attrs:{href:"/"}},[n("nuxt-img",{attrs:{src:"/img/plateform-engineers.png",alt:"Platform Engineers",title:"Platform Engineers",format:"png",loading:"lazy",width:"68",height:"55"}})],1)])]),t._v(" "),n("div",{staticClass:"col text-right text-left-xs text-left-sm"},[n("div",{staticClass:"bar__module"},[n("ul",{staticClass:"menu-horizontal text-left"},[t._m(1),t._v(" "),t._m(2),t._v(" "),n("li",{staticClass:"dropdown"},[n("span",{staticClass:"dropdown__trigger"},[t._v("Services")]),t._v(" "),n("div",{staticClass:"dropdown__container"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"mt-1 dropdown__content col-lg-3 col-md-4 col-sm-6 p-3"},[n("ul",{staticClass:"menu-vertical"},[t._m(3),t._v(" "),t._m(4),t._v(" "),t._l(t.$store.state.services,(function(e,r){return n("li",{key:r},[n("a",{attrs:{href:"/services/"+e.slug}},[t._v(t._s(e.title))])])}))],2)])])])])]),t._v(" "),n("li",{staticClass:"dropdown"},[n("span",{staticClass:"dropdown__trigger"},[t._v("Industries")]),t._v(" "),n("div",{staticClass:"dropdown__container"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"mt-1 dropdown__content col-lg-3 col-md-4 col-sm-6 p-3"},[n("ul",{staticClass:"menu-vertical"},t._l(t.$store.state.industries,(function(e,r){return n("li",{key:r},[n("a",{attrs:{href:"/industries/"+e.slug}},[t._v(t._s(e.title))])])})),0)])])])])]),t._v(" "),t._m(5),t._v(" "),t._m(6)])]),t._v(" "),t._m(7)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-9 col-md-10 text-right"},[e("a",{staticClass:"hamburger-toggle",attrs:{href:"#","aria-label":"toggle","data-toggle-class":"#menu1;hidden-xs"}},[e("i",{staticClass:"icon icon--sm stack-interface stack-menu"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/"}},[t._v("Home")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/about-us"}},[t._v("About Us")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/assessment"}},[t._v("Cost Assessment")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/assessment"}},[t._v("Performance Assessment")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{},[n("a",{attrs:{href:"/blog"}},[t._v("Blog")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{},[n("a",{attrs:{href:"/case-studies"}},[t._v("Case Studies")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bar__module"},[n("a",{staticClass:"btn btn--sm btn--primary type--uppercase b-30",attrs:{href:"/contact-us"}},[n("span",{staticClass:"btn__text"},[t._v("Contact Us")])])])}],!1,null,null,null);e.a=component.exports},437:function(t,e,n){},448:function(t,e,n){"use strict";n(437)},450:function(t,e,n){"use strict";(function(t){var r=n(7),l=(n(46),n(436)),c=n(451);e.a={components:{Navigation:l.a,Technologies:c.a},layout:"theme",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,c,o,m,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,t.params,t.payload,e.next=3,n.$axios.$get(n.$urls.home);case 3:return r=e.sent,l=r.data,e.next=7,n.$axios.$get(n.$urls.services);case 7:return c=e.sent,o=c.data,e.next=11,n.$axios.$get(n.$urls.whyUs);case 11:return m=e.sent,v=m.data,e.abrupt("return",{home:l,services:o,whyUs:v});case 14:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.home&&this.home.seo_title,meta:[{name:"description",content:this.home&&this.home.seo_description},{name:"title",content:this.home&&this.home.seo_title},{property:"og:type",content:"website"},{property:"og:url",content:t.env.BASE_URL+"/"},{property:"og:title",content:this.home&&this.home.seo_title},{property:"og:description",content:this.home&&this.home.seo_description},{property:"og:image",content:t.env.BASE_URL+"/img/plateform-engineers.png"},{property:"twitter:card",content:"summary"},{property:"twitter:site",content:""},{property:"twitter:creator",content:""},{property:"twitter:title",content:this.home&&this.home.seo_title},{property:"twitter:description",content:this.home&&this.home.seo_description},{property:"twitter:image",content:t.env.BASE_URL+"/img/plateform-engineers.png"}],link:[{rel:"canonical",href:t.env.BASE_URL+"/"}]}}}}).call(this,n(119))},451:function(t,e,n){"use strict";n(448);var r=n(45),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"text-center technologies space--xs o_05",attrs:{id:"toolBox"}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row text-center justify-content-center"},[n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("nuxt-img",{attrs:{src:"img/technologies/linux.png",alt:"Linux | Platform Engineers",format:"png",loading:"lazy",title:"Linux",height:"40",width:"34"}}),t._v(" "),n("h2",{staticClass:"h6"},[t._v("Linux")])],1)]),t._v(" "),n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("nuxt-img",{attrs:{src:"img/technologies/docker.png",alt:"Docker | Platform Engineers",format:"png",loading:"lazy",title:"Docker",height:"40",width:"63"}}),t._v(" "),n("h2",{staticClass:"h6"},[t._v("Docker")])],1)]),t._v(" "),n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("nuxt-img",{attrs:{src:"img/technologies/kubernetes.svg",alt:"Kubernetes | Platform Engineers",format:"png",loading:"lazy",title:"Kubernetes",height:"40",width:"40"}}),t._v(" "),n("h2",{staticClass:"h6"},[t._v("Kubernetes")])],1)]),t._v(" "),n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("nuxt-img",{attrs:{src:"img/technologies/helm.png",alt:"Helm | Platform Engineers",format:"png",loading:"lazy",title:"Helm",height:"40",width:"38"}}),t._v(" "),n("h2",{staticClass:"h6"},[t._v("Helm")])],1)]),t._v(" "),n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("nuxt-img",{attrs:{src:"img/technologies/terraform.svg",alt:"Terraforms | Platform Engineers",format:"png",loading:"lazy",title:"Terraforms",height:"40",width:"35"}}),t._v(" "),n("h2",{staticClass:"h6"},[t._v("Terraform")])],1)]),t._v(" "),n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("nuxt-img",{attrs:{src:"img/technologies/nginx.png",alt:"Nginx | Platform Engineers",format:"png",loading:"lazy",title:"Nginx",height:"40",width:"45"}}),t._v(" "),n("h2",{staticClass:"h6"},[t._v("Nginx")])],1)]),t._v(" "),n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("nuxt-img",{attrs:{src:"img/technologies/amazon-web-services-icon.svg",alt:"Amazon Web Services | Platform Engineers",format:"png",loading:"lazy",title:"Amazon Web Services",height:"40",width:"68"}}),t._v(" "),n("h2",{staticClass:"h6"},[t._v("Amazon Web Services")])],1)]),t._v(" "),n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("nuxt-img",{attrs:{src:"img/technologies/google_cloud_platform.png",alt:"Google Cloud Platform | Platform Engineers",format:"png",loading:"lazy",title:"Google Cloud Platform",height:"40",width:"45"}}),t._v(" "),n("h2",{staticClass:"h6"},[t._v("Google Cloud Platform")])],1)]),t._v(" "),n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("nuxt-img",{attrs:{src:"img/technologies/digital_ocean.png",alt:"Digital Ocean | Platform Engineers",format:"png",loading:"lazy",title:"Digital Ocean",height:"40",width:"40"}}),t._v(" "),n("h2",{staticClass:"h6"},[t._v("DigitalOcean")])],1)])])])])}),[],!1,null,null,null);e.a=component.exports},464:function(t,e,n){},478:function(t,e,n){"use strict";n(464)},499:function(t,e,n){"use strict";n.r(e);var r=n(450).a,l=(n(478),n(45)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.home?n("div",[n("div",{staticClass:"main-container"},[n("div",{staticClass:"hero-bk"},[n("Navigation"),t._v(" "),n("section",[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center justify-content-around"},[n("div",{staticClass:"col-md-6 col-12 d-flex align-items-center justify-content-center"},[n("div",[n("h1",[t._v(t._s(t.home.tagline))]),t._v(" "),n("p",{staticClass:"lead"},[t._v(t._s(t.home.description))]),t._v(" "),t._m(0),t._v(" "),n("br")])]),t._v(" "),n("div",{staticClass:"col-md-6 col-12 d-flex align-items-center justify-content-center"},[n("nuxt-img",{staticClass:"img-dim",attrs:{src:"/img/l13.svg",alt:"Platform Engineers",format:"png",loading:"lazy",height:"456px"}})],1)])])])],1),t._v(" "),n("Technologies"),t._v(" "),t._m(1),t._v(" "),n("section",{staticClass:"wave-bk section-padding"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"text-center col-md-8 offset-md-2 pb-5"},[n("h2",{staticClass:"mb-10"},[t._v(t._s(t.home.services_title))]),t._v(" "),n("p",{staticClass:"para"},[t._v("\n              "+t._s(t.home.services_description)+"\n            ")])]),t._v(" "),t._l(t.services,(function(e,r){return n("div",{key:r,staticClass:"col-md-6 col-lg-4 d-flex mt-5"},[n("div",{staticClass:"text-center w-100 p-5 bs-1 d-flex flex-column b-30 card-svg pos-r"},[n("div",{staticClass:"mb-4 zi-0"},[n("nuxt-img",{attrs:{src:t.$urls.assets(e.icon_as_image),alt:e.title,title:e.title,format:"png",loading:"lazy",height:"80px",width:"80px"}})],1),t._v(" "),n("a",{staticClass:"t-hover zi-0",attrs:{href:"/services/"+e.slug}},[n("h3",{staticClass:"mb-0 h5"},[t._v(t._s(e.title))])]),t._v(" "),n("p",{staticClass:"m-0 zi-0"},[t._v("\n                "+t._s(e.description)+"\n              ")]),t._v(" "),n("a",{staticClass:"d-lg-none mt-4 mb-0 text-center zi-0",attrs:{href:"/services/"+e.slug}},[t._v("\n                Learn More\n              ")])])])}))],2)])]),t._v(" "),n("section",{staticClass:"wave-bk-reverse bg-- section-padding"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"text-center col-md-8 offset-md-2 pb-5"},[n("h2",{staticClass:"mb-10"},[t._v(t._s(t.home.whyus_title))]),t._v(" "),n("p",{staticClass:"para"},[t._v("\n              "+t._s(t.home.whyus_description)+"\n            ")])]),t._v(" "),t._l(t.whyUs,(function(e,r){return n("div",{key:r,staticClass:"col-md-6 col-lg-4 d-flex mt-5"},[n("div",{staticClass:"text-center w-100 p-5 bs-1 b-30 d-flex flex-column card-svg pos-r"},[n("div",{staticClass:"mb-4 zi-0"},[n("nuxt-img",{attrs:{src:t.$urls.assets(e.image),alt:e.title,title:e.title,format:"png",loading:"lazy",height:"80px",width:"80px"}})],1),t._v(" "),n("h3",{staticClass:"mb-0 zi-0 h5"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"zi-0"},[t._v("\n                "+t._s(e.description)+"\n              ")])])])}))],2)])]),t._v(" "),t._m(2)],1)]):t._e()}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"btn btn--primary type--uppercase b-30",attrs:{href:"/contact-us"}},[n("span",{staticClass:"btn__text"},[t._v(" Contact Us ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section-padding"},[n("div",{staticClass:"px-3 px-sm-0 py-5 py-md-0 d-flex align-items-center justify-content-center text-white as-call-to-action-block flex-wrap flex-md-nowrap"},[n("h3",{staticClass:"p-0 p-md-5 m-0 text-white text-center"},[t._v("\n          Let's elevate your application performance and infrastructure cost\n          efficiency\n        ")]),t._v(" "),n("div",{staticClass:"p-0 p-md-5"},[n("a",{staticClass:"btn my-0 my-md-4 px-5 as-call-to-action b-30",attrs:{href:"/assessment",title:"Assessment by platformengineers"}},[t._v("\n            GET ASSESSMENT\n          ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-3 px-sm-0 py-5 as-call-to-action-block as-home"},[n("div",{staticClass:"container d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap"},[n("div",[n("h3",{staticClass:"mb-3 p-0 text-white"},[t._v("Let's talk about your project")]),t._v(" "),n("p",{staticClass:"text-white"},[t._v("\n            We would love to hear from you! If you're interested in improving\n            and scaling your project through our platform engineering\n            services, please don't hesitate to get in touch.\n          ")])]),t._v(" "),n("div",{staticClass:"pt-3 pb-0 p-md-5"},[n("a",{staticClass:"type--uppercase btn my-0 my-md-4 px-5 as-call-to-action b-30",attrs:{href:"/contact-us"}},[n("span",{staticClass:"btn__text"},[t._v(" Contact Us ")])])])])])}],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=b8783bd.js.map