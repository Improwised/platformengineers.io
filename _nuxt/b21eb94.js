(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{434:function(t,e,n){},435:function(t,e,n){"use strict";var r={props:{text:{type:String}}},c=n(45),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{staticClass:"btn btn--primary type--uppercase b-30",attrs:{href:"/contact-us/",title:"contact"}},[n("span",{staticClass:"btn__text"},[t._v(" "+t._s(t.text)+" ")])])])}),[],!1,null,null,null);e.a=component.exports},436:function(t,e,n){"use strict";n(434)},437:function(t,e,n){"use strict";var r={components:{Button:n(435).a}},c=(n(436),n(45)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-container"},[n("div",{staticClass:"bar bar--sm visible-xs"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-3 col-md-2"},[n("a",{attrs:{href:"/"}},[n("nuxt-img",{attrs:{src:"/img/plateform-engineers.png",alt:"Platform Engineers",title:"Platform Engineers",format:"png",loading:"lazy",width:"68",height:"55"}})],1)]),t._v(" "),t._m(0)])])]),t._v(" "),n("nav",{staticClass:"bar bar--sm bar-1 hidden-xs",attrs:{id:"menu1","data-scroll-class":"366px:pos-fixed"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"hidden-xs d-flex align-items-center"},[n("div",{staticClass:"bar__module"},[n("a",{attrs:{href:"/"}},[n("nuxt-img",{attrs:{src:"/img/plateform-engineers.png",alt:"Platform Engineers",title:"Platform Engineers",format:"png",loading:"lazy",width:"68",height:"55"}})],1)])]),t._v(" "),n("div",{staticClass:"col text-right text-left-xs text-left-sm"},[n("div",{staticClass:"bar__module"},[n("ul",{staticClass:"menu-horizontal text-left"},[t._m(1),t._v(" "),t._m(2),t._v(" "),n("li",{staticClass:"dropdown"},[n("span",{staticClass:"dropdown__trigger"},[t._v("Services")]),t._v(" "),n("div",{staticClass:"dropdown__container"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"mt-1 dropdown__content col-lg-3 col-md-4 col-sm-6 p-3"},[n("ul",{staticClass:"menu-vertical"},[t._m(3),t._v(" "),t._m(4),t._v(" "),t._l(t.$store.state.services,(function(e,r){return n("li",{key:r},[n("a",{attrs:{href:"/services/"+e.slug+"/"}},[t._v(t._s(e.title))])])}))],2)])])])])]),t._v(" "),n("li",{staticClass:"dropdown"},[n("span",{staticClass:"dropdown__trigger"},[t._v("Industries")]),t._v(" "),n("div",{staticClass:"dropdown__container"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"mt-1 dropdown__content col-lg-3 col-md-4 col-sm-6 p-3"},[n("ul",{staticClass:"menu-vertical"},t._l(t.$store.state.industries,(function(e,r){return n("li",{key:r},[n("a",{attrs:{href:"/industries/"+e.slug+"/"}},[t._v(t._s(e.title))])])})),0)])])])])]),t._v(" "),t._m(5),t._v(" "),t._m(6)])]),t._v(" "),n("div",{staticClass:"bar__module"},[n("Button",{attrs:{text:"Contact us"}})],1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-9 col-md-10 text-right"},[e("a",{staticClass:"hamburger-toggle",attrs:{href:"#","aria-label":"toggle","data-toggle-class":"#menu1;hidden-xs"}},[e("i",{staticClass:"icon icon--sm stack-interface stack-menu"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/"}},[t._v("Home")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/about-us/"}},[t._v("About Us")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/assessment/"}},[t._v("Cost Assessment")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/assessment/"}},[t._v("Performance Assessment")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{},[n("a",{attrs:{href:"/blog/"}},[t._v("Blog")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{},[n("a",{attrs:{href:"/case-studies/"}},[t._v("Case Studies")])])}],!1,null,null,null);e.a=component.exports},438:function(t,e,n){"use strict";var r={components:{Button:n(435).a},props:{title:{type:String,required:!0},image:{type:String,required:!0},description:{type:String},contactus:{type:Boolean},avtar:{type:String},firstName:{type:String},lastName:{type:String},dateTime:{type:String},timeToRead:{type:String},creator:{type:Boolean},caseStudy:{type:Boolean}}},c=n(45),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row py-2"},[n("div",{staticClass:"col-md-6 d-flex align-items-center justify-content-center"},[n("div",[n("h2",[t._v(t._s(t.title))]),t._v(" "),t.description?n("div",{staticClass:"lead",domProps:{innerHTML:t._s(t.description)}}):t._e(),t._v(" "),t.caseStudy?n("p",{staticStyle:{"font-size":"16px","max-width":"300px"}},[t._v("\n          "+t._s(t.dateTime)+"\n        ")]):t._e(),t._v(" "),t.creator?n("div",{staticClass:"d-flex align-items-center mt-3"},[n("div",{staticClass:"d-flex align-items-center mr-2",staticStyle:{"border-radius":"200px"}},[t.avtar?n("nuxt-img",{staticClass:"p-0 m-0 rounded author-s",attrs:{src:t.$urls.assets(t.avtar),alt:t.title,title:t.title,format:"png",height:"40",width:"32"}}):t._e()],1),t._v(" "),n("div",[n("strong",{staticClass:"m-0 p-0 lh-1"},[t._v("\n              "+t._s(t.firstName)+"\n              "+t._s(t.lastName)+"\n            ")]),t._v(" "),n("div",{staticClass:"lh-1"},[t._v("\n              "+t._s(t.dateTime)+" |\n              "+t._s(t.timeToRead)+"\n            ")])])]):t._e(),t._v(" "),t.contactus?n("div",[n("Button",{attrs:{text:"Contact us"}})],1):t._e()])]),t._v(" "),n("div",{staticClass:"col-md-6 d-flex align-items-center justify-content-center"},[t.image?n("nuxt-img",{staticClass:"img-dim",staticStyle:{color:"transparent"},attrs:{src:t.image,alt:t.title+" | Platform Engineers",height:"400",format:"png",decoding:"async"}}):t._e()],1)])])}),[],!1,null,null,null);e.a=component.exports},442:function(t,e,n){"use strict";var r={props:{title:{type:String},description:{type:String}}},c=n(45),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center col-md-8 offset-md-2 pb-4"},[n("h2",{staticClass:"mb-10"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"para",domProps:{innerHTML:t._s(t.description)}})])}),[],!1,null,null,null);e.a=component.exports},443:function(t,e,n){},444:function(t,e,n){"use strict";n(443)},445:function(t,e,n){"use strict";var r={props:{iconImage:{type:String,default:""},imageType:{type:String,default:""},title:{type:String,required:!0},linkRedirect:{type:String,default:""},slug:{type:String,default:""},description:{type:String,required:!0}}},c=(n(444),n(45)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center w-100 p-5 bs-1 d-flex flex-column b-30 card-svg pos-r"},["svg-text"==t.imageType&&""!=t.iconImage?n("div",{staticClass:"svg mb-4",domProps:{innerHTML:t._s(t.iconImage)}}):t._e(),t._v(" "),"svg-text"!=t.imageType&&""!=t.iconImage?n("div",{staticClass:"mb-4 zi-0"},[n("nuxt-img",{attrs:{src:t.$urls.assets(t.iconImage),alt:t.title,title:t.title,format:"png",loading:"lazy",height:"80px",width:"80px"}})],1):t._e(),t._v(" "),t.slug?n("a",{staticClass:"t-hover zi-0",attrs:{href:"/"+t.linkRedirect+"/"+t.slug+"/"}},[n("h3",{staticClass:"mb-0 h5"},[t._v(t._s(t.title))])]):n("h3",{staticClass:"mb-0 zi-0 h5"},[t._v(t._s(t.title))]),t._v(" "),t.description?n("div",{class:"m-0 zi-0 ul-list list-style-content "+("kubernetes-consulting-services"!==t.$route.params.slug?"":"text-left"),domProps:{innerHTML:t._s(t.description)}}):t._e(),t._v(" "),t.slug?n("a",{staticClass:"d-lg-none mt-4 mb-0 text-center zi-0",attrs:{href:"/"+t.linkRedirect+"/"+t.slug+"/"}},[t._v("\n    Learn More\n  ")]):t._e()])}),[],!1,null,null,null);e.a=component.exports},454:function(t,e,n){"use strict";(function(t){var r=n(7),c=(n(46),n(437)),l=n(438),o=n(435),d=n(445),_=n(442);e.a={components:{Navigation:c.a,Header:l.a,Button:o.a,Card:d.a,SectionHeading:_.a},layout:"theme",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,title,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=t.params,t.payload,title=r&&r.slug||"",e.next=4,n.$axios.$get(n.$urls.industry(title));case 4:return c=e.sent,e.abrupt("return",{industry:c.data[0]});case 6:case"end":return e.stop()}}),e)})))()},head:function(){var e,n,image=(null===(e=this.industry)||void 0===e||null===(n=e.image)||void 0===n?void 0:n.id)&&this.$img(this.$urls.assets(this.industry.image.id),{format:"png",height:"400px"});return{title:this.industry&&this.industry.seo_title||"",meta:[{name:"description",content:this.industry&&this.industry.seo_description||""},{name:"title",content:this.industry&&this.industry.seo_title||""},{property:"og:type",content:"website"},{property:"og:url",content:t.env.BASE_URL+this.$route.path+"/"},{property:"og:title",content:this.industry&&this.industry.seo_title||""},{property:"og:description",content:this.industry&&this.industry.seo_description||""},{property:"og:image",content:t.env.BASE_URL+image},{property:"twitter:card",content:"summary"},{property:"twitter:site",content:""},{property:"twitter:creator",content:""},{property:"twitter:title",content:this.industry&&this.industry.seo_title||""},{property:"twitter:description",content:this.industry&&this.industry.seo_description||""},{property:"twitter:image",content:t.env.BASE_URL+image}],link:[{rel:"canonical",href:t.env.BASE_URL+this.$route.path+"/"}]}}}}).call(this,n(120))},467:function(t,e,n){},481:function(t,e,n){"use strict";n(467)},503:function(t,e,n){"use strict";n.r(e);var r=n(454).a,c=(n(481),n(45)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.industry?n("div",[n("div",{staticClass:"main-container"},[n("div",{staticClass:"industry-bk"},[n("Navigation"),t._v(" "),n("section",{staticClass:"space--xs"},[n("Header",{attrs:{title:t.industry.title,image:t.$urls.assets(t.industry.image.id),description:t.industry.description,contactus:!0}})],1)],1),t._v(" "),t.industry.common_usecases_title?n("section",{staticClass:"wave-bk bg-- section-padding"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("SectionHeading",{attrs:{title:t.industry.common_usecases_title}}),t._v(" "),t._l(t.industry.common_usecases,(function(t,e){return n("div",{key:e,staticClass:"mt-5 text-center col-md-4 d-flex"},[n("Card",{attrs:{title:t.title,description:t.description}})],1)}))],2)])]):t._e(),t._v(" "),t.industry.benefits_title?n("section",{staticClass:"wave-bk border-top bg-- section-padding"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("SectionHeading",{attrs:{title:t.industry.benefits_title}}),t._v(" "),t._l(t.industry.benefits,(function(t,e){return n("div",{key:e,staticClass:"mt-5 text-center col-md-4 d-flex"},[n("Card",{attrs:{title:t.title,description:t.description}})],1)}))],2)])]):t._e(),t._v(" "),t.industry&&t.industry.h1_heading&&t.industry.h1_heading.length?n("section",{staticClass:"text-center border-top section-padding",attrs:{id:""}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"text-center col-md-8 offset-md-2 pb-4"},[n("h1",{staticClass:"mb-10 h2"},[t._v(t._s(t.industry.h1_heading))]),t._v(" "),n("p",{staticClass:"para",domProps:{innerHTML:t._s(t.industry.h1_description)}})])])])]):t._e(),t._v(" "),t.industry&&t.industry.companies&&t.industry.companies.length?n("section",{staticClass:"text-center technologies border-top section-padding",attrs:{id:"toolBox"}},[n("SectionHeading",{attrs:{title:t.industry.companies_title}}),t._v(" "),n("div",{staticClass:"container-fluid o_05"},[n("div",{staticClass:"row text-center justify-content-center"},t._l(t.industry.companies,(function(e,r){return n("div",{key:r},[n("div",{staticClass:"boxed m-0 text-center"},[n("div",{staticClass:"svg mb-4",domProps:{innerHTML:t._s(e.company_logo)}}),t._v(" "),n("h3",{staticClass:"h6"},[t._v(t._s(e.company_name))])])])})),0)])],1):t._e(),t._v(" "),n("section",{staticClass:"wave-bk border-top bg-- section-padding"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("SectionHeading",{attrs:{title:t.industry.services_title,description:t.industry.services_description}}),t._v(" "),t._l(t.industry.services,(function(t,e){return n("div",{key:e,staticClass:"col-md-6 col-lg-4 d-flex mt-5"},[n("Card",{attrs:{"icon-image":t.pe_services_id.icon_as_image,title:t.pe_services_id.title,"link-redirect":"services",slug:t.pe_services_id.slug,description:t.pe_services_id.description}})],1)}))],2)])]),t._v(" "),n("section",{staticClass:"text-center border-top bg-- section-padding"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"},[n("div",{staticClass:"cta"},[n("h2",[t._v("Let's Dive Deeper into Your Needs – Ready to Talk?")]),t._v(" "),n("Button",{attrs:{text:"Contact us"}})],1)])])])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=b21eb94.js.map