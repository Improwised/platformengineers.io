(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{432:function(t,e,r){},433:function(t,e,r){"use strict";r(432)},434:function(t,e,r){"use strict";r(433);var n=r(45),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"nav-container"},[r("div",{staticClass:"bar bar--sm visible-xs"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"col-3 col-md-2"},[r("a",{attrs:{href:"/"}},[r("nuxt-img",{attrs:{src:"/img/plateform-engineers.png",alt:"Platform Engineers",title:"Platform Engineers",format:"png",loading:"lazy",height:"55px"}})],1)]),t._v(" "),t._m(0)])])]),t._v(" "),r("nav",{staticClass:"bar bar--sm bar-1 hidden-xs",attrs:{id:"menu1","data-scroll-class":"366px:pos-fixed"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"hidden-xs d-flex align-items-center"},[r("div",{staticClass:"bar__module"},[r("a",{attrs:{href:"/"}},[r("nuxt-img",{attrs:{src:"/img/plateform-engineers.png",alt:"Platform Engineers",title:"Platform Engineers",format:"png",loading:"lazy",height:"55px"}})],1)])]),t._v(" "),r("div",{staticClass:"col text-right text-left-xs text-left-sm"},[r("div",{staticClass:"bar__module"},[r("ul",{staticClass:"menu-horizontal text-left"},[t._m(1),t._v(" "),t._m(2),t._v(" "),r("li",{staticClass:"dropdown"},[r("span",{staticClass:"dropdown__trigger"},[t._v("Services")]),t._v(" "),r("div",{staticClass:"dropdown__container"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"mt-1 dropdown__content col-lg-4 col-md-4 col-sm-6"},[r("ul",{staticClass:"menu-vertical"},t._l(t.$store.state.services,(function(e,n){return r("li",{key:n},[r("a",{attrs:{href:"/services/"+e.slug}},[t._v(t._s(e.title))])])})),0)])])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4)])]),t._v(" "),t._m(5)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-9 col-md-10 text-right"},[e("a",{staticClass:"hamburger-toggle",attrs:{href:"#","data-toggle-class":"#menu1;hidden-xs"}},[e("i",{staticClass:"icon icon--sm stack-interface stack-menu"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"/"}},[t._v("Home")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"/about-us"}},[t._v("About Us")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{},[r("a",{attrs:{href:"/blog"}},[t._v("Blog")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{},[r("a",{attrs:{href:"/case-studies"}},[t._v("Case Studies")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bar__module"},[r("a",{staticClass:"btn btn--sm btn--primary type--uppercase b-30",attrs:{href:"/contact-us"}},[r("span",{staticClass:"btn__text"},[t._v("Contact Us")])])])}],!1,null,null,null);e.a=component.exports},436:function(t,e,r){"use strict";(function(t){var n=r(7),l=(r(46),r(434));e.a={components:{Navigation:l.a},layout:"theme",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,t.params,e.next=3,r.$axios.$get(r.$urls.blogs);case 3:return n=e.sent,e.abrupt("return",{blogList:n.data});case 5:case"end":return e.stop()}}),e)})))()},head:function(){var image=this.$img("/img/blog-bk-1.png",{format:"png",height:"400px"}),e="Blog | | Platform Engineers",r="Blog | Platform Engineers";return{title:e,meta:[{name:"description",content:r},{name:"title",content:e},{property:"og:type",content:"website"},{property:"og:url",content:t.env.BASE_URL+this.$route.path+"/"},{property:"og:title",content:e},{property:"og:description",content:r},{property:"og:image",content:t.env.BASE_URL+image},{property:"twitter:card",content:"summary"},{property:"twitter:site",content:""},{property:"twitter:creator",content:""},{property:"twitter:title",content:e},{property:"twitter:description",content:r},{property:"twitter:image",content:t.env.BASE_URL+image}],link:[{rel:"canonical",href:t.env.BASE_URL+this.$route.path+"/"}]}}}}).call(this,r(119))},444:function(t,e,r){},452:function(t,e,r){"use strict";r(444)},468:function(t,e,r){"use strict";r.r(e);var n=r(436).a,l=(r(452),r(45)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"blog-bk"},[r("Navigation"),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[t._m(0),t._v(" "),r("div",{staticClass:"col-md-6 text-right"},[r("nuxt-img",{staticClass:"img-dim",attrs:{src:"/img/blog.png",alt:"Case Studies | Platform Engineers",format:"png",loading:"lazy",width:"540px"}})],1)])])],1),t._v(" "),t.blogList&&t.blogList.length?r("section",{staticClass:"bg--"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},t._l(t.blogList,(function(e,n){return r("div",{key:n,staticClass:"masonry__item col-lg-4 col-md-6"},[r("article",{staticClass:"b-30 bs-1"},[r("a",{staticClass:"block d-flex align-items-center justify-content-center",attrs:{href:"/blog/"+e.slug}},[e.image?r("nuxt-img",{attrs:{src:t.$urls.assets(e.image.id),alt:e.title,title:e.title,width:"100%",loading:"lazy",format:"png"}}):t._e()],1),t._v(" "),r("div",{staticClass:"feature__body px-5 py-4"},[r("a",{staticClass:"t-hover",attrs:{href:"/blog/"+e.slug}},[r("h5",[t._v(t._s(e.title))])]),t._v(" "),r("div",{staticClass:"d-flex align-items-center mt-3"},[r("div",{staticClass:"d-flex align-items-center mr-2",staticStyle:{"border-radius":"200px"}},[e.user_created.avatar?r("nuxt-img",{staticClass:"p-0 m-0 rounded author-s",attrs:{src:t.$urls.assets(e.user_created.avatar),alt:e.title,title:e.title,format:"png"}}):t._e()],1),t._v(" "),r("div",[r("strong",{staticClass:"m-0 p-0 lh-1"},[t._v("\n                    "+t._s(e.user_created.first_name)+"\n                    "+t._s(e.user_created.last_name)+"\n                  ")]),t._v(" "),r("div",{staticClass:"lh-1"},[t._v("\n                    "+t._s(t._f("formatDateTime")(e.date_created))+" |\n                    "+t._s(e.time_to_read)+"\n                  ")])])]),t._v(" "),r("p",{staticClass:"m-0"}),t._v(" "),r("a",{staticClass:"d-lg-none",attrs:{href:"/blog/"+e.slug}},[t._v("\n                Read More\n              ")])])])])})),0)])]):t._e()])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-6 d-flex align-items-center justify-content-center"},[r("h1",[t._v("Blog")])])}],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=3d733c0.js.map