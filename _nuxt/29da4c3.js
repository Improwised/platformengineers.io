(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{432:function(t,e,n){},433:function(t,e,n){"use strict";n(432)},434:function(t,e,n){"use strict";n(433);var r=n(45),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-container"},[n("div",{staticClass:"bar bar--sm visible-xs"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-3 col-md-2"},[n("a",{attrs:{href:"/"}},[n("nuxt-img",{attrs:{src:"/img/plateform-engineers.png",alt:"Platform Engineers",title:"Platform Engineers",format:"png",loading:"lazy",height:"55px"}})],1)]),t._v(" "),t._m(0)])])]),t._v(" "),n("nav",{staticClass:"bar bar--sm bar-1 hidden-xs",attrs:{id:"menu1","data-scroll-class":"366px:pos-fixed"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"hidden-xs d-flex align-items-center"},[n("div",{staticClass:"bar__module"},[n("a",{attrs:{href:"/"}},[n("nuxt-img",{attrs:{src:"/img/plateform-engineers.png",alt:"Platform Engineers",title:"Platform Engineers",format:"png",loading:"lazy",height:"55px"}})],1)])]),t._v(" "),n("div",{staticClass:"col text-right text-left-xs text-left-sm"},[n("div",{staticClass:"bar__module"},[n("ul",{staticClass:"menu-horizontal text-left"},[t._m(1),t._v(" "),t._m(2),t._v(" "),n("li",{staticClass:"dropdown"},[n("span",{staticClass:"dropdown__trigger"},[t._v("Services")]),t._v(" "),n("div",{staticClass:"dropdown__container"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"mt-1 dropdown__content col-lg-3 col-md-4 col-sm-6 p-3"},[n("ul",{staticClass:"menu-vertical"},t._l(t.$store.state.services,(function(e,r){return n("li",{key:r},[n("a",{attrs:{href:"/services/"+e.slug}},[t._v(t._s(e.title))])])})),0)])])])])]),t._v(" "),n("li",{staticClass:"dropdown"},[n("span",{staticClass:"dropdown__trigger"},[t._v("Industries")]),t._v(" "),n("div",{staticClass:"dropdown__container"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"mt-1 dropdown__content col-lg-3 col-md-4 col-sm-6 p-3"},[n("ul",{staticClass:"menu-vertical"},t._l(t.$store.state.industries,(function(e,r){return n("li",{key:r},[n("a",{attrs:{href:"/industries/"+e.slug}},[t._v(t._s(e.title))])])})),0)])])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4)])]),t._v(" "),t._m(5)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-9 col-md-10 text-right"},[e("a",{staticClass:"hamburger-toggle",attrs:{href:"#","data-toggle-class":"#menu1;hidden-xs"}},[e("i",{staticClass:"icon icon--sm stack-interface stack-menu"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/"}},[t._v("Home")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/about-us"}},[t._v("About Us")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{},[n("a",{attrs:{href:"/blog"}},[t._v("Blog")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{},[n("a",{attrs:{href:"/case-studies"}},[t._v("Case Studies")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bar__module"},[n("a",{staticClass:"btn btn--sm btn--primary type--uppercase b-30",attrs:{href:"/contact-us"}},[n("span",{staticClass:"btn__text"},[t._v("Contact Us")])])])}],!1,null,null,null);e.a=component.exports},440:function(t,e,n){"use strict";(function(t){var r=n(7),l=(n(26),n(55),n(46),n(434));e.a={components:{Navigation:l.a},filters:{truncate:function(text,t,e){return text.length>t?text.substring(0,t)+e:text}},layout:"theme",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,title,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=t.params,title=r.slug,e.next=4,n.$axios.$get(n.$urls.blog(title));case 4:return(l=e.sent).data[0].content=n.$unescapeHTML(l.data[0].content),l.data[0].content=n.$dImage(l.data[0].content),e.next=9,n.$gist(l.data[0].content);case 9:return l.data[0].content=e.sent,console.log(l.data[0]),e.abrupt("return",{blog:l.data[0]});case 12:case"end":return e.stop()}}),e)})))()},data:function(){return{baseUrlPath:window.location.href}},head:function(){var image=this.$img(this.$urls.assets(this.blog.image.id),{format:"png",height:"400px"}),title="".concat(this.blog&&this.blog.seo_title," | Platform Engineers"),e="".concat(this.blog&&this.blog.seo_description," | Platform Engineers");return{title:title||"",meta:[{name:"description",content:e||""},{name:"title",content:title||""},{property:"og:type",content:"website"},{property:"og:url",content:t.env.BASE_URL+this.$route.path+"/"},{property:"og:title",content:title||""},{property:"og:description",content:e||""},{property:"og:image",content:t.env.BASE_URL+image},{property:"twitter:card",content:"summary"},{property:"twitter:site",content:""},{property:"twitter:creator",content:""},{property:"twitter:title",content:title||""},{property:"twitter:description",content:e||""},{property:"twitter:image",content:t.env.BASE_URL+image}],link:[{rel:"canonical",href:t.env.BASE_URL+this.$route.path+"/"},{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/monokai-sublime.min.css"}]}},methods:{strippedHtml:function(t){return t.replace(/(<([^>]+)>)/gi,"")}}}}).call(this,n(119))},450:function(t,e,n){},460:function(t,e,n){"use strict";n(450)},478:function(t,e,n){"use strict";n.r(e);var r=n(440).a,l=(n(460),n(45)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.blog?n("div",{staticClass:"main-container blog"},[n("div",{staticClass:"blog-bk"},[n("Navigation"),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 d-flex align-items-center justify-content-center"},[n("div",[n("div",[n("h2",[t._v(t._s(t.blog.title))])]),t._v(" "),n("div",{staticClass:"d-flex align-items-center mt-3"},[n("div",{staticClass:"d-flex align-items-center mr-2",staticStyle:{"border-radius":"200px"}},[t.blog.user_created.avatar?n("nuxt-img",{staticClass:"p-0 m-0 rounded author-s",attrs:{src:t.$urls.assets(t.blog.user_created.avatar),alt:t.blog.title,title:t.blog.title,format:"png"}}):t._e()],1),t._v(" "),n("div",[n("strong",{staticClass:"m-0 p-0 lh-1"},[t._v("\n                  "+t._s(t.blog.user_created.first_name)+"\n                  "+t._s(t.blog.user_created.last_name)+"\n                ")]),t._v(" "),n("div",{staticClass:"lh-1"},[t._v("\n                  "+t._s(t._f("formatDateTime")(t.blog.date_created))+" |\n                  "+t._s(t.blog.time_to_read)+"\n                ")])])])])]),t._v(" "),n("div",{staticClass:"col-md-6 img-align"},[t.blog&&t.blog.image&&t.blog.image.id?n("nuxt-img",{staticClass:"img-dim",attrs:{src:t.$urls.assets(t.blog.image.id),alt:t.blog.title+" | Platform Engineers",format:"png",loading:"lazy",height:"400px"}}):t._e()],1)])])],1),t._v(" "),n("section",{staticClass:"bg-- wave-bk-1"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-10 offset-lg-1 bs-1 p-5 b-30 bg-white"},[t.blog.content?n("div",{staticClass:"lead fc-lead",domProps:{innerHTML:t._s(t.blog.content)}}):t._e(),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"d-flex align-items-center flex-wrap"},t._l(t.blog.tags,(function(e,r){return n("h5",{key:r,staticClass:"mr-2 mb-2 mt-0 py-1 px-2 bg-secondary text-white",staticStyle:{"border-radius":"10px","font-weight":"normal"}},[t._v("\n              "+t._s(e)+"\n            ")])})),0),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"article__share mt-0"},[n("ul",{staticClass:"social-list list-inline list--hover blog_social",staticStyle:{margin:"0 !important",padding:"0 !important"}},[n("li",{staticClass:"list-inline-item mr-0"},[n("ShareNetwork",{attrs:{network:"email",title:""+t.blog.title,url:""+t.baseUrlPath,description:""+t.strippedHtml(t.blog.description)}},[n("i",{staticClass:"socicon socicon-google icon icon--xs"})])],1),t._v(" "),n("li",{staticClass:"list-inline-item mr-0"},[n("ShareNetwork",{attrs:{network:"linkedin",title:""+t.blog.title,url:""+t.baseUrlPath,description:""+t.strippedHtml(t.blog.description)}},[n("i",{staticClass:"socicon socicon-linkedin icon icon--xs"})])],1),t._v(" "),n("li",{staticClass:"list-inline-item mr-0"},[n("ShareNetwork",{attrs:{network:"twitter",title:""+t.blog.title,url:""+t.baseUrlPath}},[n("i",{staticClass:"socicon socicon-twitter icon icon--xs"})])],1),t._v(" "),n("li",{staticClass:"list-inline-item mr-0"},[n("ShareNetwork",{attrs:{network:"facebook",title:""+t.blog.title,description:""+t.strippedHtml(t.blog.description),url:""+t.baseUrlPath,quote:""+t.blog.title,hashtags:"blog"}},[n("i",{staticClass:"socicon socicon-facebook icon icon--xs"})])],1),t._v(" "),n("li",{staticClass:"list-inline-item mr-0"},[n("ShareNetwork",{attrs:{network:"whatsapp",url:""+t.baseUrlPath,title:""+t.blog.title,description:""+t.strippedHtml(t.blog.description)}},[n("i",{staticClass:"socicon socicon-whatsapp icon icon--xs"})])],1)])])])])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=29da4c3.js.map