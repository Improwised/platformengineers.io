(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{435:function(t,e,n){},436:function(t,e,n){"use strict";var r={props:{text:{type:String}}},c=n(45),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{staticClass:"btn btn--primary type--uppercase b-30",attrs:{href:"/contact-us/",title:"contact"}},[n("span",{staticClass:"btn__text"},[t._v(" "+t._s(t.text)+" ")])])])}),[],!1,null,null,null);e.a=component.exports},437:function(t,e,n){"use strict";n(435)},438:function(t,e,n){"use strict";var r={components:{Button:n(436).a}},c=(n(437),n(45)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-container"},[n("div",{staticClass:"bar bar--sm visible-xs"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-3 col-md-2"},[n("a",{attrs:{href:"/"}},[n("nuxt-img",{attrs:{src:"/img/plateform-engineers.png",alt:"Platform Engineers",title:"Platform Engineers",format:"png",loading:"lazy",width:"68",height:"55"}})],1)]),t._v(" "),t._m(0)])])]),t._v(" "),n("nav",{staticClass:"bar bar--sm bar-1 hidden-xs",attrs:{id:"menu1","data-scroll-class":"366px:pos-fixed"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"hidden-xs d-flex align-items-center"},[n("div",{staticClass:"bar__module"},[n("a",{attrs:{href:"/"}},[n("nuxt-img",{attrs:{src:"/img/plateform-engineers.png",alt:"Platform Engineers",title:"Platform Engineers",format:"png",loading:"lazy",width:"68",height:"55"}})],1)])]),t._v(" "),n("div",{staticClass:"col text-right text-left-xs text-left-sm"},[n("div",{staticClass:"bar__module"},[n("ul",{staticClass:"menu-horizontal text-left"},[t._m(1),t._v(" "),t._m(2),t._v(" "),n("li",{staticClass:"dropdown"},[n("span",{staticClass:"dropdown__trigger"},[t._v("Services")]),t._v(" "),n("div",{staticClass:"dropdown__container"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"mt-1 dropdown__content col-lg-3 col-md-4 col-sm-6 p-3"},[n("ul",{staticClass:"menu-vertical"},[t._m(3),t._v(" "),t._m(4),t._v(" "),t._l(t.$store.state.services,(function(e,r){return n("li",{key:r},[n("a",{attrs:{href:"/services/"+e.slug+"/"}},[t._v(t._s(e.title))])])}))],2)])])])])]),t._v(" "),n("li",{staticClass:"dropdown"},[n("span",{staticClass:"dropdown__trigger"},[t._v("Industries")]),t._v(" "),n("div",{staticClass:"dropdown__container"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"mt-1 dropdown__content col-lg-3 col-md-4 col-sm-6 p-3"},[n("ul",{staticClass:"menu-vertical"},t._l(t.$store.state.industries,(function(e,r){return n("li",{key:r},[n("a",{attrs:{href:"/industries/"+e.slug+"/"}},[t._v(t._s(e.title))])])})),0)])])])])]),t._v(" "),t._m(5),t._v(" "),t._m(6)])]),t._v(" "),n("div",{staticClass:"bar__module"},[n("Button",{attrs:{text:"Contact us"}})],1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-9 col-md-10 text-right"},[e("a",{staticClass:"hamburger-toggle",attrs:{href:"#","aria-label":"toggle","data-toggle-class":"#menu1;hidden-xs"}},[e("i",{staticClass:"icon icon--sm stack-interface stack-menu"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/"}},[t._v("Home")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/about-us/"}},[t._v("About Us")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/assessment/"}},[t._v("Cost Assessment")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/assessment/"}},[t._v("Performance Assessment")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{},[n("a",{attrs:{href:"/blog/"}},[t._v("Blog")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{},[n("a",{attrs:{href:"/case-studies/"}},[t._v("Case Studies")])])}],!1,null,null,null);e.a=component.exports},439:function(t,e,n){"use strict";var r={components:{Button:n(436).a},props:{title:{type:String,required:!0},image:{type:String,required:!0},description:{type:String},contactus:{type:Boolean},avtar:{type:String},firstName:{type:String},lastName:{type:String},dateTime:{type:String},timeToRead:{type:String},creator:{type:Boolean},caseStudy:{type:Boolean}}},c=n(45),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row py-2"},[n("div",{staticClass:"col-md-6 d-flex align-items-center justify-content-center"},[n("div",[n("h1",{staticClass:"h2"},[t._v(t._s(t.title))]),t._v(" "),t.description?n("div",{staticClass:"lead",domProps:{innerHTML:t._s(t.description)}}):t._e(),t._v(" "),t.caseStudy?n("p",{staticStyle:{"font-size":"16px","max-width":"300px"}},[t._v("\n          "+t._s(t.dateTime)+"\n        ")]):t._e(),t._v(" "),t.creator?n("div",{staticClass:"d-flex align-items-center mt-3"},[n("div",{staticClass:"d-flex align-items-center mr-2",staticStyle:{"border-radius":"200px"}},[t.avtar?n("nuxt-img",{staticClass:"p-0 m-0 rounded author-s",attrs:{src:t.$urls.assets(t.avtar),alt:t.title,title:t.title,format:"png",height:"40",width:"32"}}):t._e()],1),t._v(" "),n("div",[n("strong",{staticClass:"m-0 p-0 lh-1"},[t._v("\n              "+t._s(t.firstName)+"\n              "+t._s(t.lastName)+"\n            ")]),t._v(" "),n("div",{staticClass:"lh-1"},[t._v("\n              "+t._s(t.dateTime)+" |\n              "+t._s(t.timeToRead)+"\n            ")])])]):t._e(),t._v(" "),t.contactus?n("div",[n("Button",{attrs:{text:"Contact us"}})],1):t._e()])]),t._v(" "),n("div",{staticClass:"col-md-6 d-flex align-items-center justify-content-center"},[t.image?n("nuxt-img",{staticClass:"img-dim",staticStyle:{color:"transparent"},attrs:{src:t.image,alt:t.title+" | Platform Engineers",height:"400",format:"png",decoding:"async"}}):t._e()],1)])])}),[],!1,null,null,null);e.a=component.exports},454:function(t,e,n){"use strict";(function(t){var r=n(7),c=(n(24),n(55),n(46),n(438)),l=n(439);e.a={components:{Navigation:c.a,Header:l.a},filters:{truncate:function(text,t,e){return text.length>t?text.substring(0,t)+e:text}},layout:"theme",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,title,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=t.params,title=r.slug,e.next=4,n.$axios.$get(n.$urls.caseStudy(title));case 4:return c=e.sent,e.abrupt("return",{caseStudy:c.data[0]});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{baseUrlPath:window.location.href+"/"}},head:function(){var image=this.$img(this.$urls.assets(this.caseStudy.image.id),{format:"png",height:"400px"}),title="".concat(this.caseStudy&&this.caseStudy.seo_title," | Platform Engineers"),e="".concat(this.caseStudy&&this.caseStudy.seo_description," | Platform Engineers");return{title:title||"",meta:[{name:"description",content:e||""},{name:"title",content:title||""},{property:"og:type",content:"website"},{property:"og:url",content:t.env.BASE_URL+this.$route.path+"/"},{property:"og:title",content:title||""},{property:"og:description",content:e||""},{property:"og:image",content:t.env.BASE_URL+image},{property:"twitter:card",content:"summary"},{property:"twitter:site",content:""},{property:"twitter:creator",content:""},{property:"twitter:title",content:title||""},{property:"twitter:description",content:e||""},{property:"twitter:image",content:t.env.BASE_URL+image}],link:[{rel:"canonical",href:t.env.BASE_URL+this.$route.path+"/"},{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/monokai-sublime.min.css"}]}},methods:{strippedHtml:function(t){return t.replace(/(<([^>]+)>)/gi,"")}}}}).call(this,n(120))},467:function(t,e,n){},481:function(t,e,n){"use strict";n(467)},503:function(t,e,n){"use strict";n.r(e);var r=n(454).a,c=(n(481),n(45)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.caseStudy?n("div",{staticClass:"main-container case-studies"},[n("div",{staticClass:"case-studies-bk"},[n("Navigation"),t._v(" "),n("Header",{attrs:{title:t.caseStudy.title,image:t.$urls.assets(t.caseStudy.image.id),"case-study":!0,"date-time":t._f("formatDateTime")(t.caseStudy.date_created)}})],1),t._v(" "),t.caseStudy.client_info_title?n("section",{staticClass:"bg-- border-bottom wave-bk section-padding"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8 offset-md-2"},[n("h2",{staticClass:"text-center"},[t._v(t._s(t.caseStudy.client_info_title))]),t._v(" "),n("div",{staticClass:"lead ul-list",domProps:{innerHTML:t._s(t.caseStudy.client_info_description)}})])])])]):t._e(),t._v(" "),t.caseStudy.goal_title?n("section",{staticClass:"bg-- border-bottom wave-bk section-padding"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8 offset-md-2"},[n("h2",{staticClass:"text-center"},[t._v(t._s(t.caseStudy.goal_title))]),t._v(" "),n("div",{staticClass:"lead ul-list",domProps:{innerHTML:t._s(t.caseStudy.goal_description)}})])])])]):t._e(),t._v(" "),t.caseStudy.solution_title?n("section",{staticClass:"bg-- border-bottom wave-bk section-padding"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8 offset-md-2"},[n("h2",{staticClass:"text-center"},[t._v(t._s(t.caseStudy.solution_title))]),t._v(" "),n("div",{staticClass:"lead ul-list",domProps:{innerHTML:t._s(t.caseStudy.solution_description)}})])])])]):t._e(),t._v(" "),t.caseStudy.technologies_title?n("section",{staticClass:"bg-- border-bottom wave-bk section-padding"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8 offset-md-2"},[n("h2",{staticClass:"text-center"},[t._v(t._s(t.caseStudy.technologies_title))]),t._v(" "),n("div",{staticClass:"d-flex align-items-center justify-content-center"},t._l(t.caseStudy.technologies,(function(e,r){return n("div",{key:r,staticClass:"p-2"},[n("nuxt-img",{attrs:{src:t.$urls.assets(e.directus_files_id.id),alt:e.directus_files_id.title,title:e.directus_files_id.title,format:"png",loading:"lazy",height:"40px"}})],1)})),0)])])])]):t._e(),t._v(" "),t.caseStudy.outcome_title?n("section",{staticClass:"bg-- border-bottom wave-bk section-padding"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8 offset-md-2"},[n("h2",{staticClass:"text-center"},[t._v(t._s(t.caseStudy.outcome_title))]),t._v(" "),n("div",{staticClass:"lead ul-list",domProps:{innerHTML:t._s(t.caseStudy.outcome_description)}})])])])]):t._e(),t._v(" "),t.caseStudy.conclusion_title?n("section",{staticClass:"bg-- section-padding"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8 offset-md-2"},[n("h2",{staticClass:"text-center"},[t._v(t._s(t.caseStudy.conclusion_title))]),t._v(" "),n("div",{staticClass:"lead",domProps:{innerHTML:t._s(t.caseStudy.conclusion_description)}}),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"d-flex align-items-center"},t._l(t.caseStudy.tags,(function(e,r){return n("h5",{key:r,staticClass:"mx-2 my-0 py-1 px-2 bg-secondary text-white",staticStyle:{"border-radius":"10px","font-weight":"normal"}},[t._v("\n              "+t._s(e&&e.pe_case_studies_tags_id&&e.pe_case_studies_tags_id.name)+"\n            ")])})),0),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"article__share mt-0"},[n("ul",{staticClass:"social-list list-inline list--hover blog_social",staticStyle:{"list-style":"none",padding:"0",margin:"0"}},[n("li",{staticClass:"list-inline-item mr-0"},[n("ShareNetwork",{attrs:{network:"email",title:""+t.caseStudy.title,url:""+t.baseUrlPath,description:""+t.strippedHtml(t.caseStudy.description)}},[n("i",{staticClass:"socicon socicon-google icon icon--xs"})])],1),t._v(" "),n("li",{staticClass:"list-inline-item mr-0"},[n("ShareNetwork",{attrs:{network:"linkedin",title:""+t.caseStudy.title,url:""+t.baseUrlPath,description:""+t.strippedHtml(t.caseStudy.description)}},[n("i",{staticClass:"socicon socicon-linkedin icon icon--xs"})])],1),t._v(" "),n("li",{staticClass:"list-inline-item mr-0"},[n("ShareNetwork",{attrs:{network:"twitter",title:""+t.caseStudy.title,url:""+t.baseUrlPath}},[n("i",{staticClass:"socicon socicon-twitter icon icon--xs"})])],1),t._v(" "),n("li",{staticClass:"list-inline-item mr-0"},[n("ShareNetwork",{attrs:{network:"facebook",title:""+t.caseStudy.title,description:""+t.strippedHtml(t.caseStudy.description),url:""+t.baseUrlPath,quote:""+t.caseStudy.title,hashtags:"caseStudy"}},[n("i",{staticClass:"socicon socicon-facebook icon icon--xs"})])],1),t._v(" "),n("li",{staticClass:"list-inline-item mr-0"},[n("ShareNetwork",{attrs:{network:"whatsapp",url:""+t.baseUrlPath,title:""+t.caseStudy.title,description:""+t.strippedHtml(t.caseStudy.description)}},[n("i",{staticClass:"socicon socicon-whatsapp icon icon--xs"})])],1)])])])])])]):t._e()]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=7234925.js.map