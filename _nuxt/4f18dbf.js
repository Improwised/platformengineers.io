(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{434:function(t,e,n){},435:function(t,e,n){"use strict";n(434)},436:function(t,e,n){"use strict";n(435);var r=n(45),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-container"},[n("div",{staticClass:"bar bar--sm visible-xs"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-3 col-md-2"},[n("a",{attrs:{href:"/"}},[n("nuxt-img",{attrs:{src:"/img/plateform-engineers.png",alt:"Platform Engineers",title:"Platform Engineers",format:"png",loading:"lazy",width:"68",height:"55"}})],1)]),t._v(" "),t._m(0)])])]),t._v(" "),n("nav",{staticClass:"bar bar--sm bar-1 hidden-xs",attrs:{id:"menu1","data-scroll-class":"366px:pos-fixed"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"hidden-xs d-flex align-items-center"},[n("div",{staticClass:"bar__module"},[n("a",{attrs:{href:"/"}},[n("nuxt-img",{attrs:{src:"/img/plateform-engineers.png",alt:"Platform Engineers",title:"Platform Engineers",format:"png",loading:"lazy",width:"68",height:"55"}})],1)])]),t._v(" "),n("div",{staticClass:"col text-right text-left-xs text-left-sm"},[n("div",{staticClass:"bar__module"},[n("ul",{staticClass:"menu-horizontal text-left"},[t._m(1),t._v(" "),t._m(2),t._v(" "),n("li",{staticClass:"dropdown"},[n("span",{staticClass:"dropdown__trigger"},[t._v("Services")]),t._v(" "),n("div",{staticClass:"dropdown__container"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"mt-1 dropdown__content col-lg-3 col-md-4 col-sm-6 p-3"},[n("ul",{staticClass:"menu-vertical"},[t._m(3),t._v(" "),t._m(4),t._v(" "),t._l(t.$store.state.services,(function(e,r){return n("li",{key:r},[n("a",{attrs:{href:"/services/"+e.slug}},[t._v(t._s(e.title))])])}))],2)])])])])]),t._v(" "),n("li",{staticClass:"dropdown"},[n("span",{staticClass:"dropdown__trigger"},[t._v("Industries")]),t._v(" "),n("div",{staticClass:"dropdown__container"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"mt-1 dropdown__content col-lg-3 col-md-4 col-sm-6 p-3"},[n("ul",{staticClass:"menu-vertical"},t._l(t.$store.state.industries,(function(e,r){return n("li",{key:r},[n("a",{attrs:{href:"/industries/"+e.slug}},[t._v(t._s(e.title))])])})),0)])])])])]),t._v(" "),t._m(5),t._v(" "),t._m(6)])]),t._v(" "),t._m(7)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-9 col-md-10 text-right"},[e("a",{staticClass:"hamburger-toggle",attrs:{href:"#","aria-label":"toggle","data-toggle-class":"#menu1;hidden-xs"}},[e("i",{staticClass:"icon icon--sm stack-interface stack-menu"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/"}},[t._v("Home")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/about-us"}},[t._v("About Us")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/assessment"}},[t._v("Cost Assessment")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"/assessment"}},[t._v("Performance Assessment")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{},[n("a",{attrs:{href:"/blog"}},[t._v("Blog")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{},[n("a",{attrs:{href:"/case-studies"}},[t._v("Case Studies")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bar__module"},[n("a",{staticClass:"btn btn--sm btn--primary type--uppercase b-30",attrs:{href:"/contact-us"}},[n("span",{staticClass:"btn__text"},[t._v("Contact Us")])])])}],!1,null,null,null);e.a=component.exports},437:function(t,e,n){"use strict";var r={props:{title:{type:String,required:!0},image:{type:String,required:!0},description:{type:String},contactus:{type:Boolean},avtar:{type:String},firstName:{type:String},lastName:{type:String},dateTime:{type:String},timeToRead:{type:String},creator:{type:Boolean},caseStudy:{type:Boolean}}},l=n(45),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row py-2"},[n("div",{staticClass:"col-md-6 d-flex align-items-center justify-content-center"},[n("div",[n("h2",[t._v(t._s(t.title))]),t._v(" "),t.description?n("div",{staticClass:"lead",domProps:{innerHTML:t._s(t.description)}}):t._e(),t._v(" "),t.caseStudy?n("p",{staticStyle:{"font-size":"16px","max-width":"300px"}},[t._v("\n          "+t._s(t.dateTime)+"\n        ")]):t._e(),t._v(" "),t.creator?n("div",{staticClass:"d-flex align-items-center mt-3"},[n("div",{staticClass:"d-flex align-items-center mr-2",staticStyle:{"border-radius":"200px"}},[t.avtar?n("nuxt-img",{staticClass:"p-0 m-0 rounded author-s",attrs:{src:t.$urls.assets(t.avtar),alt:t.title,title:t.title,format:"png",height:"40",width:"32"}}):t._e()],1),t._v(" "),n("div",[n("strong",{staticClass:"m-0 p-0 lh-1"},[t._v("\n              "+t._s(t.firstName)+"\n              "+t._s(t.lastName)+"\n            ")]),t._v(" "),n("div",{staticClass:"lh-1"},[t._v("\n              "+t._s(t.dateTime)+" |\n              "+t._s(t.timeToRead)+"\n            ")])])]):t._e(),t._v(" "),t.contactus?n("div",[t._m(0)]):t._e()])]),t._v(" "),n("div",{staticClass:"col-md-6 d-flex align-items-center justify-content-center"},[t.image?n("nuxt-img",{staticClass:"img-dim",attrs:{src:t.image,alt:t.title+" | Platform Engineers",format:"png",loading:"lazy",height:"400px"}}):t._e()],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"btn btn--primary type--uppercase b-30",attrs:{href:"/contact-us"}},[n("span",{staticClass:"btn__text"},[t._v(" Contact Us ")])])}],!1,null,null,null);e.a=component.exports},447:function(t,e,n){"use strict";(function(t){var r=n(7),l=(n(46),n(436)),c=n(450),o=n(437);e.a={components:{Navigation:l.a,Technologies:c.a,Header:o.a},layout:"theme",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,title,l,c,o,_,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=t.params,t.payload,title=r.slug,e.next=4,n.$axios.$get(n.$urls.landing_page_for_seo(title));case 4:return l=e.sent,e.next=7,n.$axios.$get(n.$urls.industriesNames);case 7:return c=e.sent,o=c.data,e.next=11,n.$axios.$get(n.$urls.industries);case 11:return _=e.sent,d=_.data,e.abrupt("return",{page:l.data[0],industriesNames:o,industries:d});case 14:case"end":return e.stop()}}),e)})))()},head:function(){var e,n,image=(null===(e=this.page)||void 0===e||null===(n=e.hero_image)||void 0===n?void 0:n.id)&&this.$img(this.$urls.assets(this.page.hero_image.id),{format:"png",height:"400px"});return{title:this.page&&this.page.seo_title,meta:[{name:"description",content:this.page&&this.page.seo_description},{name:"title",content:this.page&&this.page.seo_title},{property:"og:type",content:"website"},{property:"og:url",content:t.env.BASE_URL+"/"},{property:"og:title",content:this.page&&this.page.seo_title},{property:"og:description",content:this.page&&this.page.seo_description},{property:"og:image",content:t.env.BASE_URL+image},{property:"twitter:card",content:"summary"},{property:"twitter:site",content:""},{property:"twitter:creator",content:""},{property:"twitter:title",content:this.page&&this.page.seo_title},{property:"twitter:description",content:this.page&&this.page.seo_description},{property:"twitter:image",content:t.env.BASE_URL+image}],link:[{rel:"canonical",href:t.env.BASE_URL+this.$route.path+"/"}]}}}}).call(this,n(119))},450:function(t,e,n){"use strict";var r=n(45),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"text-center technologies space--xs o_05",attrs:{id:"toolBox"}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row text-center justify-content-center"},[n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("nuxt-img",{attrs:{src:"img/technologies/linux.png",alt:"Linux | Platform Engineers",format:"png",loading:"lazy",title:"Linux",height:"40",width:"34"}}),t._v(" "),n("h2",{staticClass:"h6"},[t._v("Linux")])],1)]),t._v(" "),n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("nuxt-img",{attrs:{src:"img/technologies/docker.png",alt:"Docker | Platform Engineers",format:"png",loading:"lazy",title:"Docker",height:"40",width:"63"}}),t._v(" "),n("h2",{staticClass:"h6"},[t._v("Docker")])],1)]),t._v(" "),n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("nuxt-img",{attrs:{src:"img/technologies/kubernetes.svg",alt:"Kubernetes | Platform Engineers",format:"png",loading:"lazy",title:"Kubernetes",height:"40",width:"40"}}),t._v(" "),n("h2",{staticClass:"h6"},[t._v("Kubernetes")])],1)]),t._v(" "),n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("nuxt-img",{attrs:{src:"img/technologies/helm.png",alt:"Helm | Platform Engineers",format:"png",loading:"lazy",title:"Helm",height:"40",width:"38"}}),t._v(" "),n("h2",{staticClass:"h6"},[t._v("Helm")])],1)]),t._v(" "),n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("nuxt-img",{attrs:{src:"img/technologies/terraform.svg",alt:"Terraforms | Platform Engineers",format:"png",loading:"lazy",title:"Terraforms",height:"40",width:"35"}}),t._v(" "),n("h2",{staticClass:"h6"},[t._v("Terraform")])],1)]),t._v(" "),n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("nuxt-img",{attrs:{src:"img/technologies/nginx.png",alt:"Nginx | Platform Engineers",format:"png",loading:"lazy",title:"Nginx",height:"40",width:"45"}}),t._v(" "),n("h2",{staticClass:"h6"},[t._v("Nginx")])],1)]),t._v(" "),n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("nuxt-img",{attrs:{src:"img/technologies/amazon-web-services-icon.svg",alt:"Amazon Web Services | Platform Engineers",format:"png",loading:"lazy",title:"Amazon Web Services",height:"40",width:"68"}}),t._v(" "),n("h2",{staticClass:"h6"},[t._v("Amazon Web Services")])],1)]),t._v(" "),n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("nuxt-img",{attrs:{src:"img/technologies/google_cloud_platform.png",alt:"Google Cloud Platform | Platform Engineers",format:"png",loading:"lazy",title:"Google Cloud Platform",height:"40",width:"45"}}),t._v(" "),n("h2",{staticClass:"h6"},[t._v("Google Cloud Platform")])],1)]),t._v(" "),n("div",{},[n("div",{staticClass:"boxed m-0 text-center"},[n("nuxt-img",{attrs:{src:"img/technologies/digital_ocean.png",alt:"Digital Ocean | Platform Engineers",format:"png",loading:"lazy",title:"Digital Ocean",height:"40",width:"40"}}),t._v(" "),n("h2",{staticClass:"h6"},[t._v("DigitalOcean")])],1)])])])])}),[],!1,null,null,null);e.a=component.exports},460:function(t,e,n){},473:function(t,e,n){"use strict";n(460)},495:function(t,e,n){"use strict";n.r(e);var r=n(447).a,l=(n(473),n(45)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.page?n("div",[n("div",{staticClass:"main-container"},[n("div",{staticClass:"hero-bk"},[n("Navigation"),t._v(" "),n("section",[n("Header",{attrs:{title:t.page.title,image:t.$urls.assets(t.page.hero_image.id),description:t.page.description,contactus:!0}})],1)],1),t._v(" "),n("Technologies"),t._v(" "),t._m(0),t._v(" "),n("section",{staticClass:"py-3"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row d-flex align-items-center justify-content-center py-3 py-sm-5"},[n("div",{staticClass:"col-lg-6"},[n("strong",{staticClass:"as-color-o as-f-xxxl"},[t._v(t._s(t.page.section1_sub_title))]),t._v(" "),n("h3",[t._v(t._s(t.page.section_1_title))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.page.section_1_description)}})]),t._v(" "),n("div",{staticClass:"col-lg-6 d-flex align-items-center justify-content-center"},[n("div",{staticClass:"thumb wow fadeInRight",attrs:{"data-wow-delay":"0.6s"}},[t.page.section1_image?n("nuxt-img",{attrs:{src:t.$urls.assets(t.page.section1_image.id),alt:t.page.section_1_title,title:t.page.section_1_title,loading:"lazy",format:"png"}}):t._e()],1)])]),t._v(" "),n("div",{staticClass:"row d-flex align-items-center justify-content-center py-3 py-sm-5"},[n("div",{staticClass:"col-lg-6 d-flex align-items-center justify-content-center"},[t.page.section1_sub_image1?n("nuxt-img",{attrs:{src:t.$urls.assets(t.page.section1_sub_image1.id),alt:t.page.section1_sub_heading1,title:t.page.section1_sub_heading1,loading:"lazy",format:"png"}}):t._e()],1),t._v(" "),n("div",{staticClass:"col-lg-6"},[n("strong",{staticClass:"as-color-o as-f-xxxl"},[t._v(t._s(t.page.section2_sub_title))]),t._v(" "),n("h3",[t._v(t._s(t.page.section1_sub_heading1))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.page.section1_sub_description1)}})])]),t._v(" "),n("div",{staticClass:"row d-flex align-items-center justify-content-center py-3 py-sm-5"},[n("div",{staticClass:"col-lg-6"},[n("strong",{staticClass:"as-color-o as-f-xxxl"},[t._v(t._s(t.page.section3_sub_title))]),t._v(" "),n("h3",[t._v(t._s(t.page.section1_sub_heading2))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.page.section1_sub_description2)}})]),t._v(" "),n("div",{staticClass:"col-lg-6 d-flex align-items-center justify-content-center"},[t.page.section1_sub_image2?n("nuxt-img",{attrs:{src:t.$urls.assets(t.page.section1_sub_image2.id),alt:t.page.section1_sub_heading2,title:t.page.section1_sub_heading2,loading:"lazy",format:"png"}}):t._e()],1)])])]),t._v(" "),n("section",{staticClass:"wave-bk-reverse bg--"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"text-center col-md-8 offset-md-2"},[n("h2",{staticClass:"m-0"},[t._v(t._s(t.page.section_2_title))]),t._v(" "),n("div",{staticClass:"lead",domProps:{innerHTML:t._s(t.page.section_2_description)}})])]),t._v(" "),n("div",{staticClass:"row justify-content-center"},t._l(t.page.section_2,(function(section,e){return n("div",{key:e,staticClass:"col-md-6 col-lg-4 d-flex mt-5"},[n("div",{staticClass:"w-100 p-5 bs-1 d-flex flex-column b-30 card-svg pos-r"},[n("h5",{staticClass:"mb-0 zi-0 text-center"},[t._v(t._s(section.title))]),t._v(" "),n("div",{staticClass:"zi-0 text-center",domProps:{innerHTML:t._s(section.description)}})])])})),0)])]),t._v(" "),t.industriesNames&&t.industriesNames.length?n("section",{staticClass:"bg--"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row pb-5"},[n("div",{staticClass:"col-md-8 offset-md-2"},[n("h2",{staticClass:"m-0 text-center"},[t._v(t._s(t.page.section_industry_title))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.page.section_industry_description)}})])]),t._v(" "),n("div",{staticClass:"row justify-content-center"},t._l(t.industriesNames,(function(e,r){return n("div",{key:r,staticClass:"masonry__item col-lg-4 col-md-6"},[n("article",{staticClass:"b-30 bs-11"},[n("a",{staticClass:"industry d-flex align-items-center justify-content-center p-4",staticStyle:{height:"300px"},attrs:{href:"/industries/"+e.slug}},[e.image?n("nuxt-img",{attrs:{src:t.$urls.assets(e.image),alt:e.title,title:e.title,loading:"lazy",format:"png"}}):t._e()],1),t._v(" "),n("div",{staticClass:"feature__body px-4 pb-4 text-center"},[n("a",{staticClass:"t-hover",attrs:{href:"/industries/"+e.slug}},[n("h5",[t._v(t._s(e.title))])]),t._v(" "),n("p",{staticClass:"flex-grow-1 m-0"},[t._v("\n                  "+t._s(e.description)+"\n                ")]),t._v(" "),n("p",{staticClass:"m-0"}),t._v(" "),n("a",{staticClass:"d-lg-none",attrs:{href:"/industries/"+e.slug}},[t._v("\n                  Read More\n                ")])])])])})),0)])]):t._e(),t._v(" "),n("div",{staticClass:"px-3 px-sm-0 py-5 as-call-to-action-block as-home"},[n("div",{staticClass:"container d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap"},[n("div",[n("h3",{staticClass:"mb-3 p-0 text-white"},[t._v(t._s(t.page.call_to_action_title))]),t._v(" "),n("div",{staticClass:"text-white",domProps:{innerHTML:t._s(t.page.call_to_action_description)}})]),t._v(" "),n("div",{staticClass:"pt-3 pb-0 p-md-5"},[n("a",{staticClass:"btn btn--primary type--uppercase b-30",attrs:{href:t.page.call_to_action_button_link}},[n("span",{staticClass:"btn__text"},[t._v("\n              "+t._s(t.page.call_to_action_button_text)+"\n            ")])])])])])],1)]):t._e()}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-5"},[n("div",{staticClass:"px-3 px-sm-0 py-5 py-md-0 d-flex align-items-center justify-content-center text-white as-call-to-action-block flex-wrap flex-md-nowrap"},[n("h3",{staticClass:"p-0 p-md-5 m-0 text-white text-center"},[t._v("\n          Let's elevate your application performance and infrastructure cost\n          efficiency\n        ")]),t._v(" "),n("div",{staticClass:"p-0 p-md-5"},[n("a",{staticClass:"btn my-0 my-md-4 px-5 as-call-to-action b-30",attrs:{href:"/assessment",title:"Assessment by platformengineers"}},[t._v("\n            GET ASSESSMENT\n          ")])])])])}],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=4f18dbf.js.map