(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{434:function(t,e,n){},435:function(t,e,n){"use strict";n(434)},436:function(t,e,n){"use strict";n(435);var r=n(45),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-container"},[n("div",{staticClass:"bar bar--sm visible-xs"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-3 col-md-2"},[n("a",{attrs:{href:"/"}},[n("nuxt-img",{attrs:{src:"/img/plateform-engineers.png",alt:"Platform Engineers",title:"Platform Engineers",format:"png",loading:"lazy",width:"68",height:"55"}})],1)]),t._v(" "),t._m(0)])])]),t._v(" "),n("nav",{staticClass:"bar bar--sm bar-1 hidden-xs",attrs:{id:"menu1","data-scroll-class":"366px:pos-fixed"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"hidden-xs d-flex align-items-center"},[n("div",{staticClass:"bar__module"},[n("a",{attrs:{href:"/"}},[n("nuxt-img",{attrs:{src:"/img/plateform-engineers.png",alt:"Platform Engineers",title:"Platform Engineers",format:"png",loading:"lazy",width:"68",height:"55"}})],1)])]),t._v(" "),n("div",{staticClass:"col text-right text-left-xs text-left-sm"},[n("div",{staticClass:"bar__module"},[n("ul",{staticClass:"menu-horizontal text-left"},[t._m(1),t._v(" "),t._m(2),t._v(" "),n("li",{staticClass:"dropdown"},[n("span",{staticClass:"dropdown__trigger"},[t._v("Services")]),t._v(" "),n("div",{staticClass:"dropdown__container"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"mt-1 dropdown__content col-lg-3 col-md-4 col-sm-6 p-3"},[n("ul",{staticClass:"menu-vertical"},[t._m(3),t._v(" "),t._m(4),t._v(" "),t._l(t.$store.state.services,(function(e,r){return n("li",{key:r},[n("a",{attrs:{href:"/services/"+e.slug}},[t._v(t._s(e.title))])])}))],2)])])])])]),t._v(" "),n("li",{staticClass:"dropdown"},[n("span",{staticClass:"dropdown__trigger"},[t._v("Industries")]),t._v(" "),n("div",{staticClass:"dropdown__container"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"mt-1 dropdown__content col-lg-3 col-md-4 col-sm-6 p-3"},[n("ul",{staticClass:"menu-vertical"},t._l(t.$store.state.industries,(function(e,r){return n("li",{key:r},[n("a",{attrs:{href:"/industries/"+e.slug}},[t._v(t._s(e.title))])])})),0)])])])])]),t._v(" "),t._m(5),t._v(" "),t._m(6)])]),t._v(" "),t._m(7)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-9 col-md-10 text-right"},[e("a",{staticClass:"hamburger-toggle",attrs:{href:"#","aria-label":"toggle","data-toggle-class":"#menu1;hidden-xs"}},[e("i",{staticClass:"icon icon--sm stack-interface stack-menu"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/"}},[t._v("Home")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/about-us"}},[t._v("About Us")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/assessment"}},[t._v("Cost Assessment")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/assessment"}},[t._v("Performance Assessment")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{},[n("a",{attrs:{href:"/blog"}},[t._v("Blog")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{},[n("a",{attrs:{href:"/case-studies"}},[t._v("Case Studies")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bar__module"},[n("a",{staticClass:"btn btn--sm btn--primary type--uppercase b-30",attrs:{href:"/contact-us"}},[n("span",{staticClass:"btn__text"},[t._v("Contact Us")])])])}],!1,null,null,null);e.a=component.exports},441:function(t,e,n){"use strict";(function(t){var r=n(7),c=(n(46),n(436));e.a={components:{Navigation:c.a},filters:{truncate:function(text,t,e){return text.length>t?text.substring(0,t)+e:text}},layout:"theme",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,t.params,t.store,e.next=3,n.$axios.$get(n.$urls.caseStudies);case 3:return r=e.sent,e.abrupt("return",{caseStudies:r.data});case 5:case"end":return e.stop()}}),e)})))()},head:function(){var e="Case Studies | Platform Engineers",n="Case Studies | Platform Engineers",image=this.$img("/img/c4.svg",{format:"png",height:"400px"});return{title:e,meta:[{name:"description",content:n},{name:"title",content:e},{property:"og:type",content:"website"},{property:"og:url",content:t.env.BASE_URL+this.$route.path+"/"},{property:"og:title",content:e},{property:"og:description",content:n},{property:"og:image",content:t.env.BASE_URL+image},{property:"twitter:card",content:"summary"},{property:"twitter:site",content:""},{property:"twitter:creator",content:""},{property:"twitter:title",content:e},{property:"twitter:description",content:n},{property:"twitter:image",content:t.env.BASE_URL+image}],link:[{rel:"canonical",href:t.env.BASE_URL+this.$route.path+"/"}]}}}}).call(this,n(119))},455:function(t,e,n){},469:function(t,e,n){"use strict";n(455)},491:function(t,e,n){"use strict";n.r(e);var r=n(441).a,c=(n(469),n(45)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-container case-studies"},[n("div",{staticClass:"case-studies-bk"},[n("Navigation"),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-md-6 text-right"},[n("nuxt-img",{staticClass:"img-dim",attrs:{src:"/img/c4.svg",alt:"Case Studies | Platform Engineers",format:"png",loading:"lazy",height:"400px"}})],1)])])],1),t._v(" "),t.caseStudies&&t.caseStudies.length?n("section",{staticClass:"bg--secondary"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},t._l(t.caseStudies,(function(e,r){return n("div",{key:r,staticClass:"masonry__item col-lg-4 col-md-6"},[n("article",{staticClass:"b-30 bs-1"},[n("a",{staticClass:"block d-flex align-items-center justify-content-center",attrs:{href:"/case-studies/"+e.slug}},[e.image?n("nuxt-img",{attrs:{src:t.$urls.assets(e.image.id),alt:e.title,title:e.title,height:"245",loading:"lazy",format:"png"}}):t._e()],1),t._v(" "),n("div",{staticClass:"feature__body p-4"},[n("a",{staticClass:"t-hover",attrs:{href:"/case-studies/"+e.slug}},[n("h5",[t._v(t._s(e.title))])]),t._v(" "),n("p",{staticClass:"m-0"},[t._v("\n                "+t._s(t._f("formatDateTime")(e.date_created))+"\n              ")]),t._v(" "),n("a",{staticClass:"d-lg-none",attrs:{href:"/case-studies/"+e.slug}},[t._v("\n                Read More\n              ")])])])])})),0)])]):t._e()])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6 d-flex align-items-center justify-content-center"},[n("h1",[t._v("Case Studies")])])}],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=d59f4bf.js.map