(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{435:function(t,e,r){},436:function(t,e,r){"use strict";var n={props:{text:{type:String}}},l=r(45),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("a",{staticClass:"btn btn--primary type--uppercase b-30",attrs:{href:"/contact-us/",title:"contact"}},[r("span",{staticClass:"btn__text"},[t._v(" "+t._s(t.text)+" ")])])])}),[],!1,null,null,null);e.a=component.exports},437:function(t,e,r){"use strict";r(435)},438:function(t,e,r){"use strict";var n={components:{Button:r(436).a}},l=(r(437),r(45)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"nav-container"},[r("div",{staticClass:"bar bar--sm visible-xs"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"col-3 col-md-2"},[r("a",{attrs:{href:"/"}},[r("nuxt-img",{attrs:{src:"/img/plateform-engineers.png",alt:"Platform Engineers",title:"Platform Engineers",format:"png",loading:"lazy",width:"68",height:"55"}})],1)]),t._v(" "),t._m(0)])])]),t._v(" "),r("nav",{staticClass:"bar bar--sm bar-1 hidden-xs",attrs:{id:"menu1","data-scroll-class":"366px:pos-fixed"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"hidden-xs d-flex align-items-center"},[r("div",{staticClass:"bar__module"},[r("a",{attrs:{href:"/"}},[r("nuxt-img",{attrs:{src:"/img/plateform-engineers.png",alt:"Platform Engineers",title:"Platform Engineers",format:"png",loading:"lazy",width:"68",height:"55"}})],1)])]),t._v(" "),r("div",{staticClass:"col text-right text-left-xs text-left-sm"},[r("div",{staticClass:"bar__module"},[r("ul",{staticClass:"menu-horizontal text-left"},[t._m(1),t._v(" "),t._m(2),t._v(" "),r("li",{staticClass:"dropdown"},[r("span",{staticClass:"dropdown__trigger"},[t._v("Services")]),t._v(" "),r("div",{staticClass:"dropdown__container"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"mt-1 dropdown__content col-lg-3 col-md-4 col-sm-6 p-3"},[r("ul",{staticClass:"menu-vertical"},[t._m(3),t._v(" "),t._m(4),t._v(" "),t._l(t.$store.state.services,(function(e,n){return r("li",{key:n},[r("a",{attrs:{href:"/services/"+e.slug+"/"}},[t._v(t._s(e.title))])])}))],2)])])])])]),t._v(" "),r("li",{staticClass:"dropdown"},[r("span",{staticClass:"dropdown__trigger"},[t._v("Industries")]),t._v(" "),r("div",{staticClass:"dropdown__container"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"mt-1 dropdown__content col-lg-3 col-md-4 col-sm-6 p-3"},[r("ul",{staticClass:"menu-vertical"},t._l(t.$store.state.industries,(function(e,n){return r("li",{key:n},[r("a",{attrs:{href:"/industries/"+e.slug+"/"}},[t._v(t._s(e.title))])])})),0)])])])])]),t._v(" "),t._m(5),t._v(" "),t._m(6)])]),t._v(" "),r("div",{staticClass:"bar__module"},[r("Button",{attrs:{text:"Contact us"}})],1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-9 col-md-10 text-right"},[e("a",{staticClass:"hamburger-toggle",attrs:{href:"#","aria-label":"toggle","data-toggle-class":"#menu1;hidden-xs"}},[e("i",{staticClass:"icon icon--sm stack-interface stack-menu"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"/"}},[t._v("Home")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"/about-us/"}},[t._v("About Us")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"/assessment/"}},[t._v("Cost Assessment")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"/assessment/"}},[t._v("Performance Assessment")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{},[r("a",{attrs:{href:"/blog/"}},[t._v("Blog")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{},[r("a",{attrs:{href:"/case-studies/"}},[t._v("Case Studies")])])}],!1,null,null,null);e.a=component.exports},439:function(t,e,r){"use strict";var n={components:{Button:r(436).a},props:{title:{type:String,required:!0},image:{type:String,required:!0},description:{type:String},contactus:{type:Boolean},avtar:{type:String},firstName:{type:String},lastName:{type:String},dateTime:{type:String},timeToRead:{type:String},creator:{type:Boolean},caseStudy:{type:Boolean}}},l=r(45),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row py-2"},[r("div",{staticClass:"col-md-6 d-flex align-items-center justify-content-center"},[r("div",[r("h1",{staticClass:"h2"},[t._v(t._s(t.title))]),t._v(" "),t.description?r("div",{staticClass:"lead",domProps:{innerHTML:t._s(t.description)}}):t._e(),t._v(" "),t.caseStudy?r("p",{staticStyle:{"font-size":"16px","max-width":"300px"}},[t._v("\n          "+t._s(t.dateTime)+"\n        ")]):t._e(),t._v(" "),t.creator?r("div",{staticClass:"d-flex align-items-center mt-3"},[r("div",{staticClass:"d-flex align-items-center mr-2",staticStyle:{"border-radius":"200px"}},[t.avtar?r("nuxt-img",{staticClass:"p-0 m-0 rounded author-s",attrs:{src:t.$urls.assets(t.avtar),alt:t.title,title:t.title,format:"png",height:"40",width:"32"}}):t._e()],1),t._v(" "),r("div",[r("strong",{staticClass:"m-0 p-0 lh-1"},[t._v("\n              "+t._s(t.firstName)+"\n              "+t._s(t.lastName)+"\n            ")]),t._v(" "),r("div",{staticClass:"lh-1"},[t._v("\n              "+t._s(t.dateTime)+" |\n              "+t._s(t.timeToRead)+"\n            ")])])]):t._e(),t._v(" "),t.contactus?r("div",[r("Button",{attrs:{text:"Contact us"}})],1):t._e()])]),t._v(" "),r("div",{staticClass:"col-md-6 d-flex align-items-center justify-content-center"},[t.image?r("nuxt-img",{staticClass:"img-dim",staticStyle:{color:"transparent"},attrs:{src:t.image,alt:t.title+" | Platform Engineers",height:"400",format:"png",decoding:"async"}}):t._e()],1)])])}),[],!1,null,null,null);e.a=component.exports},440:function(t,e,r){},441:function(t,e,r){"use strict";r(440)},442:function(t,e,r){"use strict";var n={props:{list:{type:Array},readmore:{type:String},showavtar:{type:Boolean},datetime:{type:Boolean},isShow:{type:Boolean}}},l=(r(441),r(45)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.list&&t.list.length?r("div",{staticClass:"bg-- pt-5"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},t._l(t.list,(function(e,n){return r("div",{key:n,staticClass:"masonry__item col-lg-4 col-md-6"},[r("article",{staticClass:"b-30 bs-11"},[t.isShow?r("div",[r("a",{staticClass:"industry d-flex align-items-center justify-content-center p-4",staticStyle:{height:"300px"},attrs:{href:""+t.readmore+e.slug+"/"}},[e.image?r("nuxt-img",{attrs:{src:t.$urls.assets(e.image),alt:e.title,title:e.title}}):t._e()],1)]):r("div",[r("a",{staticClass:"block d-flex align-items-center justify-content-center",attrs:{href:""+t.readmore+e.slug+"/"}},[e.image?r("nuxt-img",{attrs:{src:t.$urls.assets(e.image.id),alt:e.title,title:e.title,height:"300",width:"300"}}):t._e()],1)]),t._v(" "),r("div",{staticClass:"feature__body px-4 pb-4"},[r("a",{staticClass:"t-hover",attrs:{href:""+t.readmore+e.slug+"/"}},[t.isShow?r("div",{staticClass:"text-center"},[r("h2",{staticClass:"h5",attrs:{title:e.title}},[t._v("\n                  "+t._s(e.title)+"\n                ")])]):r("div",[r("h2",{staticClass:"title h5 pt-4",attrs:{title:e.title}},[t._v("\n                  "+t._s(e.title)+"\n                ")])])]),t._v(" "),t.isShow?r("p",{staticClass:"flex-grow-1 m-0 text-center"},[t._v("\n              "+t._s(e.description)+"\n            ")]):t._e(),t._v(" "),t.showavtar?r("div",{staticClass:"d-flex align-items-center mt-1"},[r("div",{staticClass:"d-flex align-items-center mr-2",staticStyle:{"border-radius":"200px"}},[e.user_created.avatar?r("nuxt-img",{staticClass:"p-0 m-0 rounded author-s",attrs:{src:t.$urls.assets(e.user_created.avatar),alt:e.title,title:e.title,format:"png",height:"40",width:"32"}}):t._e()],1),t._v(" "),r("div",[r("strong",{staticClass:"m-0 p-0 lh-1"},[t._v("\n                  "+t._s(e.user_created.first_name)+"\n                  "+t._s(e.user_created.last_name)+"\n                ")]),t._v(" "),r("div",{staticClass:"lh-1"},[t._v("\n                  "+t._s(t._f("formatDateTime")(e.date_created))+" |\n                  "+t._s(e.time_to_read)+"\n                ")])])]):t._e(),t._v(" "),r("div",{staticClass:"m-0"},[t.datetime?r("div",[t._v("\n                "+t._s(t._f("formatDateTime")(e.date_created))+"\n              ")]):t._e()]),t._v(" "),r("a",{staticClass:"d-lg-none color-theme",attrs:{href:""+t.readmore+e.slug+"/"}},[t._v("\n              Read More\n            ")])])])])})),0)])]):t._e()}),[],!1,null,null,null);e.a=component.exports},449:function(t,e,r){"use strict";(function(t){var n=r(7),l=(r(46),r(438)),c=r(439),o=r(442);e.a={components:{Navigation:l.a,Header:c.a,List:o.a},layout:"theme",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,t.params,e.next=3,r.$axios.$get(r.$urls.blogs);case 3:return n=e.sent,e.abrupt("return",{blogList:n.data});case 5:case"end":return e.stop()}}),e)})))()},head:function(){var image=this.$img("/img/blog-bk-1.png",{format:"png",height:"400px"}),e="Blogs | Platform Engineering in the Multi-Cloud Era: A Guide to Success",r="Elevate your platform engineering game with this comprehensive guide. We cover key metrics for tracking progress, golden paths for internal platforms, and strategies for thriving in the multi-cloud era.";return{title:e,meta:[{name:"description",content:r},{name:"title",content:e},{property:"og:type",content:"website"},{property:"og:url",content:t.env.BASE_URL+this.$route.path+"/"},{property:"og:title",content:e},{property:"og:description",content:r},{property:"og:image",content:t.env.BASE_URL+image},{property:"twitter:card",content:"summary"},{property:"twitter:site",content:""},{property:"twitter:creator",content:""},{property:"twitter:title",content:e},{property:"twitter:description",content:r},{property:"twitter:image",content:t.env.BASE_URL+image}],link:[{rel:"canonical",href:t.env.BASE_URL+this.$route.path+"/"}]}}}}).call(this,r(120))},462:function(t,e,r){},476:function(t,e,r){"use strict";r(462)},498:function(t,e,r){"use strict";r.r(e);var n=r(449).a,l=(r(476),r(45)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"blog-bk"},[r("Navigation"),t._v(" "),r("Header",{attrs:{title:"Blog",image:"/img/blog.webp"}})],1),t._v(" "),r("section",{staticClass:"section-padding"},[r("List",{attrs:{list:t.blogList,readmore:"/blog/",showavtar:!0}})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=2c114a8.js.map