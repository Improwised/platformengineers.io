(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{432:function(t,e,r){},433:function(t,e,r){"use strict";r(432)},434:function(t,e,r){"use strict";r(433);var c=r(45),component=Object(c.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"nav-container"},[r("div",{staticClass:"bar bar--sm visible-xs"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"col-3 col-md-2"},[r("a",{attrs:{href:"/"}},[r("nuxt-img",{attrs:{src:"/img/plateform-engineers.png",alt:"Platform Engineers",title:"Platform Engineers",format:"png",loading:"lazy",width:"68",height:"55"}})],1)]),t._v(" "),t._m(0)])])]),t._v(" "),r("nav",{staticClass:"bar bar--sm bar-1 hidden-xs",attrs:{id:"menu1","data-scroll-class":"366px:pos-fixed"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"hidden-xs d-flex align-items-center"},[r("div",{staticClass:"bar__module"},[r("a",{attrs:{href:"/"}},[r("nuxt-img",{attrs:{src:"/img/plateform-engineers.png",alt:"Platform Engineers",title:"Platform Engineers",format:"png",loading:"lazy",width:"68",height:"55"}})],1)])]),t._v(" "),r("div",{staticClass:"col text-right text-left-xs text-left-sm"},[r("div",{staticClass:"bar__module"},[r("ul",{staticClass:"menu-horizontal text-left"},[t._m(1),t._v(" "),t._m(2),t._v(" "),r("li",{staticClass:"dropdown"},[r("span",{staticClass:"dropdown__trigger"},[t._v("Services")]),t._v(" "),r("div",{staticClass:"dropdown__container"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"mt-1 dropdown__content col-lg-3 col-md-4 col-sm-6 p-3"},[r("ul",{staticClass:"menu-vertical"},[t._m(3),t._v(" "),t._m(4),t._v(" "),t._l(t.$store.state.services,(function(e,c){return r("li",{key:c},[r("a",{attrs:{href:"/services/"+e.slug}},[t._v(t._s(e.title))])])}))],2)])])])])]),t._v(" "),r("li",{staticClass:"dropdown"},[r("span",{staticClass:"dropdown__trigger"},[t._v("Industries")]),t._v(" "),r("div",{staticClass:"dropdown__container"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"mt-1 dropdown__content col-lg-3 col-md-4 col-sm-6 p-3"},[r("ul",{staticClass:"menu-vertical"},t._l(t.$store.state.industries,(function(e,c){return r("li",{key:c},[r("a",{attrs:{href:"/industries/"+e.slug}},[t._v(t._s(e.title))])])})),0)])])])])]),t._v(" "),t._m(5),t._v(" "),t._m(6)])]),t._v(" "),t._m(7)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-9 col-md-10 text-right"},[e("a",{staticClass:"hamburger-toggle",attrs:{href:"#","data-toggle-class":"#menu1;hidden-xs"}},[e("i",{staticClass:"icon icon--sm stack-interface stack-menu"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"/"}},[t._v("Home")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"/about-us"}},[t._v("About Us")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"/assessment"}},[t._v("Cost Assessment")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"/assessment"}},[t._v("Performance Assessment")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{},[r("a",{attrs:{href:"/blog"}},[t._v("Blog")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{},[r("a",{attrs:{href:"/case-studies"}},[t._v("Case Studies")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bar__module"},[r("a",{staticClass:"btn btn--sm btn--primary type--uppercase b-30",attrs:{href:"/contact-us"}},[r("span",{staticClass:"btn__text"},[t._v("Contact Us")])])])}],!1,null,null,null);e.a=component.exports},444:function(t,e,r){"use strict";(function(t){var c=r(7),n=(r(46),r(434));e.a={components:{Navigation:n.a},layout:"theme",asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,title,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,c=t.params,title=c&&c.slug||"",e.next=4,r.$axios.$get(r.$urls.service(title));case 4:return n=e.sent,e.abrupt("return",{service:n.data[0]});case 6:case"end":return e.stop()}}),e)})))()},head:function(){var image=this.$img(this.$urls.assets(this.service.page_image.id),{format:"png",height:"400px"});return{title:this.service&&this.service.seo_title||"",meta:[{name:"description",content:this.service&&this.service.seo_description||""},{name:"title",content:this.service&&this.service.seo_title||""},{property:"og:type",content:"website"},{property:"og:url",content:t.env.BASE_URL+this.$route.path+"/"},{property:"og:title",content:this.service&&this.service.seo_title||""},{property:"og:description",content:this.service&&this.service.seo_description||""},{property:"og:image",content:t.env.BASE_URL+image},{property:"twitter:card",content:"summary"},{property:"twitter:site",content:""},{property:"twitter:creator",content:""},{property:"twitter:title",content:this.service&&this.service.seo_title||""},{property:"twitter:description",content:this.service&&this.service.seo_description||""},{property:"twitter:image",content:t.env.BASE_URL+image}],link:[{rel:"canonical",href:t.env.BASE_URL+this.$route.path+"/"}]}}}}).call(this,r(119))},455:function(t,e,r){},467:function(t,e,r){"use strict";r(455)},486:function(t,e,r){"use strict";r.r(e);var c=r(444).a,n=(r(467),r(45)),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.service?r("div",{staticClass:"services"},[r("div",{staticClass:"services-bk"},[r("Navigation"),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row py-2"},[r("div",{staticClass:"col-md-6 d-flex align-items-center justify-content-center"},[r("h2",[t._v(t._s(t.service.title))])]),t._v(" "),r("div",{staticClass:"col-md-6 d-flex align-items-center justify-content-center"},[t.service&&t.service.page_image&&t.service.page_image.id?r("nuxt-img",{staticClass:"img-dim",attrs:{src:t.$urls.assets(t.service.page_image.id),alt:t.service.title,title:t.service.title,format:"png",loading:"lazy",height:"400px"}}):t._e()],1)])])],1),t._v(" "),r("section",[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-10 col-sm-offset-1 col-md-8 offset-md-2 text-left lead text-dark ul-list",domProps:{innerHTML:t._s(t.service.content)}})])])]),t._v(" "),t.service.features?r("section",{staticClass:"border-top wave-bk bg--"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"text-center col-md-8 offset-md-2 pb-5"},[r("h2",{staticClass:"p-0 m-0"},[t._v(t._s(t.service.features_title))])]),t._v(" "),t._l(t.service.features,(function(e,c){return r("div",{key:c,class:"mt-5 col-md-"+("kubernetes-consulting-services"===t.$route.params.slug?"6":"4")+" d-flex"},[r("div",{staticClass:"w-100 p-5 bs-1 card-svg b-30"},[r("div",{staticClass:"svg mb-4",domProps:{innerHTML:t._s(e.image)}}),t._v(" "),r("h5",{staticClass:"text-center mb-0"},[t._v(t._s(e.title))]),t._v(" "),r("div",{class:"ul-list list-style-content "+("kubernetes-consulting-services"!==t.$route.params.slug?"text-center":""),domProps:{innerHTML:t._s(e.description)}})])])}))],2)])]):t._e(),t._v(" "),t.service.process?r("section",{staticClass:"border-top"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"text-center col-md-8 offset-md-2 pb-5"},[r("h2",{staticClass:"p-0 m-0"},[t._v(t._s(t.service.process_title))])]),t._v(" "),t._l(t.service.process,(function(e,c){return r("div",{key:c,staticClass:"col-md-8 offset-md-2 p-5",staticStyle:{"border-radius":"5px"},style:c%2?"box-shadow: rgba(204, 219, 232, 0.5) 15px 0px 15px 0px;":"box-shadow: rgb(204, 219, 232, 0.5) 15px 0px 15px 0px inset;"},[r("div",{staticClass:"d-flex align-items-center"},[r("div",{staticClass:"pr-5 _process-step",staticStyle:{width:"100px","min-width":"100px"},domProps:{innerHTML:t._s(e.image)}}),t._v(" "),r("div",{staticClass:"flex-grow-1"},[r("h5",{staticClass:"m-0 p-0"},[t._v(t._s(e.title))]),t._v(" "),r("p",[t._v(t._s(e.description))])])])])}))],2)])]):t._e(),t._v(" "),t.service.approach_cards?r("section",{staticClass:"wave-bk border-top bg--"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"text-center col-md-8 offset-md-2 pb-5"},[r("h2",{staticClass:"p-0 m-0"},[t._v(t._s(t.service.approach_title))])]),t._v(" "),t._l(t.service.approach_cards,(function(e,c){return r("div",{key:c,staticClass:"mt-5 text-center col-md-4 d-flex"},[r("div",{staticClass:"w-100 p-5 bs-1 card-svg b-30"},[r("div",{staticClass:"svg mb-4",domProps:{innerHTML:t._s(e.image)}}),t._v(" "),r("h5",{staticClass:"mb-0"},[t._v(t._s(e.title))]),t._v(" "),r("div",{domProps:{innerHTML:t._s(e.content)}})])])}))],2)])]):t._e(),t._v(" "),t.service.offering_cards?r("section",{staticClass:"wave-bk border-top bg--"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"text-center col-md-8 offset-md-2 pb-5"},[r("h2",{staticClass:"p-0 m-0"},[t._v(t._s(t.service.offering_title))])]),t._v(" "),t._l(t.service.offering_cards,(function(e,c){return r("div",{key:c,staticClass:"mt-5 text-center col-md-4 d-flex"},[r("div",{staticClass:"w-100 p-5 bs-1 card-svg b-30"},[r("div",{staticClass:"svg mb-4",domProps:{innerHTML:t._s(e.image)}}),t._v(" "),r("h5",{staticClass:"mb-0"},[t._v(t._s(e.title))]),t._v(" "),r("div",{domProps:{innerHTML:t._s(e.content)}})])])}))],2)])]):t._e(),t._v(" "),t._m(0)]):t._e()}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"text-center border-top bg--"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"},[r("div",{staticClass:"cta"},[r("h2",[t._v("Want to know more about us?")]),t._v(" "),r("a",{staticClass:"btn btn--primary type--uppercase b-30",attrs:{href:"/contact-us",title:"contact"}},[r("span",{staticClass:"btn__text"},[t._v(" Get in Touch ")])])])])])])])}],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=c41e2e0.js.map