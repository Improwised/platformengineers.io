(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{434:function(t,e,r){"use strict";var n={props:{text:{type:String}}},c=r(45),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("a",{staticClass:"btn btn--primary type--uppercase b-30",attrs:{href:"/contact-us",title:"contact"}},[r("span",{staticClass:"btn__text"},[t._v(" "+t._s(t.text)+" ")])])])}),[],!1,null,null,null);e.a=component.exports},435:function(t,e,r){},436:function(t,e,r){"use strict";r(435)},437:function(t,e,r){"use strict";var n={components:{Button:r(434).a}},c=(r(436),r(45)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"nav-container"},[r("div",{staticClass:"bar bar--sm visible-xs"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"col-3 col-md-2"},[r("a",{attrs:{href:"/"}},[r("nuxt-img",{attrs:{src:"/img/plateform-engineers.png",alt:"Platform Engineers",title:"Platform Engineers",format:"png",loading:"lazy",width:"68",height:"55"}})],1)]),t._v(" "),t._m(0)])])]),t._v(" "),r("nav",{staticClass:"bar bar--sm bar-1 hidden-xs",attrs:{id:"menu1","data-scroll-class":"366px:pos-fixed"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"hidden-xs d-flex align-items-center"},[r("div",{staticClass:"bar__module"},[r("a",{attrs:{href:"/"}},[r("nuxt-img",{attrs:{src:"/img/plateform-engineers.png",alt:"Platform Engineers",title:"Platform Engineers",format:"png",loading:"lazy",width:"68",height:"55"}})],1)])]),t._v(" "),r("div",{staticClass:"col text-right text-left-xs text-left-sm"},[r("div",{staticClass:"bar__module"},[r("ul",{staticClass:"menu-horizontal text-left"},[t._m(1),t._v(" "),t._m(2),t._v(" "),r("li",{staticClass:"dropdown"},[r("span",{staticClass:"dropdown__trigger"},[t._v("Services")]),t._v(" "),r("div",{staticClass:"dropdown__container"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"mt-1 dropdown__content col-lg-3 col-md-4 col-sm-6 p-3"},[r("ul",{staticClass:"menu-vertical"},[t._m(3),t._v(" "),t._m(4),t._v(" "),t._l(t.$store.state.services,(function(e,n){return r("li",{key:n},[r("a",{attrs:{href:"/services/"+e.slug}},[t._v(t._s(e.title))])])}))],2)])])])])]),t._v(" "),r("li",{staticClass:"dropdown"},[r("span",{staticClass:"dropdown__trigger"},[t._v("Industries")]),t._v(" "),r("div",{staticClass:"dropdown__container"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"mt-1 dropdown__content col-lg-3 col-md-4 col-sm-6 p-3"},[r("ul",{staticClass:"menu-vertical"},t._l(t.$store.state.industries,(function(e,n){return r("li",{key:n},[r("a",{attrs:{href:"/industries/"+e.slug}},[t._v(t._s(e.title))])])})),0)])])])])]),t._v(" "),t._m(5),t._v(" "),t._m(6)])]),t._v(" "),r("div",{staticClass:"bar__module"},[r("Button",{attrs:{text:"Contact us"}})],1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-9 col-md-10 text-right"},[e("a",{staticClass:"hamburger-toggle",attrs:{href:"#","aria-label":"toggle","data-toggle-class":"#menu1;hidden-xs"}},[e("i",{staticClass:"icon icon--sm stack-interface stack-menu"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"/"}},[t._v("Home")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"/about-us"}},[t._v("About Us")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"/assessment"}},[t._v("Cost Assessment")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"/assessment"}},[t._v("Performance Assessment")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{},[r("a",{attrs:{href:"/blog"}},[t._v("Blog")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{},[r("a",{attrs:{href:"/case-studies"}},[t._v("Case Studies")])])}],!1,null,null,null);e.a=component.exports},438:function(t,e,r){"use strict";var n={components:{Button:r(434).a},props:{title:{type:String,required:!0},image:{type:String,required:!0},description:{type:String},contactus:{type:Boolean},avtar:{type:String},firstName:{type:String},lastName:{type:String},dateTime:{type:String},timeToRead:{type:String},creator:{type:Boolean},caseStudy:{type:Boolean}}},c=r(45),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row py-2"},[r("div",{staticClass:"col-md-6 d-flex align-items-center justify-content-center"},[r("div",[r("h2",[t._v(t._s(t.title))]),t._v(" "),t.description?r("div",{staticClass:"lead",domProps:{innerHTML:t._s(t.description)}}):t._e(),t._v(" "),t.caseStudy?r("p",{staticStyle:{"font-size":"16px","max-width":"300px"}},[t._v("\n          "+t._s(t.dateTime)+"\n        ")]):t._e(),t._v(" "),t.creator?r("div",{staticClass:"d-flex align-items-center mt-3"},[r("div",{staticClass:"d-flex align-items-center mr-2",staticStyle:{"border-radius":"200px"}},[t.avtar?r("nuxt-img",{staticClass:"p-0 m-0 rounded author-s",attrs:{src:t.$urls.assets(t.avtar),alt:t.title,title:t.title,format:"png",height:"40",width:"32"}}):t._e()],1),t._v(" "),r("div",[r("strong",{staticClass:"m-0 p-0 lh-1"},[t._v("\n              "+t._s(t.firstName)+"\n              "+t._s(t.lastName)+"\n            ")]),t._v(" "),r("div",{staticClass:"lh-1"},[t._v("\n              "+t._s(t.dateTime)+" |\n              "+t._s(t.timeToRead)+"\n            ")])])]):t._e(),t._v(" "),t.contactus?r("div",[r("Button",{attrs:{text:"Contact us"}})],1):t._e()])]),t._v(" "),r("div",{staticClass:"col-md-6 d-flex align-items-center justify-content-center"},[t.image?r("nuxt-img",{staticClass:"img-dim",attrs:{src:t.image,alt:t.title+" | Platform Engineers",format:"png",loading:"lazy",height:"400px"}}):t._e()],1)])])}),[],!1,null,null,null);e.a=component.exports},440:function(t,e,r){},443:function(t,e,r){"use strict";r(440)},444:function(t,e,r){"use strict";var n={props:{iconImage:{type:String,default:""},imageType:{type:String,default:""},title:{type:String,required:!0},linkRedirect:{type:String,default:""},slug:{type:String,default:""},description:{type:String,required:!0}}},c=(r(443),r(45)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center w-100 p-5 bs-1 d-flex flex-column b-30 card-svg pos-r"},["svg-text"==t.imageType&&""!=t.iconImage?r("div",{staticClass:"svg mb-4",domProps:{innerHTML:t._s(t.iconImage)}}):t.iconImage?r("div",{staticClass:"mb-4 zi-0"},[r("NuxtImg",{attrs:{src:t.$urls.assets(t.iconImage),alt:t.title,title:t.title,format:"png",loading:"lazy",height:"80px",width:"80px"}})],1):t._e(),t._v(" "),t.slug?r("a",{staticClass:"t-hover zi-0",attrs:{href:"/"+t.linkRedirect+"/"+t.slug}},[r("h3",{staticClass:"mb-0 h5"},[t._v(t._s(t.title))])]):r("h3",{staticClass:"mb-0 zi-0 h5"},[t._v(t._s(t.title))]),t._v(" "),t.description?r("div",{class:"m-0 zi-0 ul-list list-style-content "+("kubernetes-consulting-services"!==t.$route.params.slug?"":"text-left"),domProps:{innerHTML:t._s(t.description)}}):t._e(),t._v(" "),t.slug?r("a",{staticClass:"d-lg-none mt-4 mb-0 text-center zi-0",attrs:{href:"/"+t.linkRedirect+"/"+t.slug}},[t._v("\n    Learn More\n  ")]):t._e()])}),[],!1,null,null,null);e.a=component.exports},455:function(t,e,r){"use strict";(function(t){var n=r(7),c=(r(46),r(437)),l=r(438),o=r(434),d=r(444);e.a={components:{Navigation:c.a,Header:l.a,Button:o.a,Card:d.a},layout:"theme",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,title,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,n=t.params,title=n&&n.slug||"",e.next=4,r.$axios.$get(r.$urls.service(title));case 4:return c=e.sent,e.abrupt("return",{service:c.data[0]});case 6:case"end":return e.stop()}}),e)})))()},head:function(){var image=this.$img(this.$urls.assets(this.service.page_image.id),{format:"png",height:"400px"});return{title:this.service&&this.service.seo_title||"",meta:[{name:"description",content:this.service&&this.service.seo_description||""},{name:"title",content:this.service&&this.service.seo_title||""},{property:"og:type",content:"website"},{property:"og:url",content:t.env.BASE_URL+this.$route.path+"/"},{property:"og:title",content:this.service&&this.service.seo_title||""},{property:"og:description",content:this.service&&this.service.seo_description||""},{property:"og:image",content:t.env.BASE_URL+image},{property:"twitter:card",content:"summary"},{property:"twitter:site",content:""},{property:"twitter:creator",content:""},{property:"twitter:title",content:this.service&&this.service.seo_title||""},{property:"twitter:description",content:this.service&&this.service.seo_description||""},{property:"twitter:image",content:t.env.BASE_URL+image}],link:[{rel:"canonical",href:t.env.BASE_URL+this.$route.path+"/"}]}}}}).call(this,r(119))},468:function(t,e,r){},481:function(t,e,r){"use strict";r(468)},502:function(t,e,r){"use strict";r.r(e);var n=r(455).a,c=(r(481),r(45)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.service?r("div",{staticClass:"services"},[r("div",{staticClass:"services-bk"},[r("Navigation"),t._v(" "),r("Header",{attrs:{title:t.service.title,image:t.$urls.assets(t.service.page_image.id),description:t.service.description}})],1),t._v(" "),r("section",[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-10 col-sm-offset-1 col-md-8 offset-md-2 text-left lead text-dark ul-list",domProps:{innerHTML:t._s(t.service.content)}})])])]),t._v(" "),t.service.features?r("section",{staticClass:"border-top wave-bk bg--"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"text-center col-md-8 offset-md-2 pb-5"},[r("h2",{staticClass:"p-0 m-0"},[t._v(t._s(t.service.features_title))])]),t._v(" "),t._l(t.service.features,(function(e,n){return r("div",{key:n,class:"mt-5 col-md-"+("kubernetes-consulting-services"===t.$route.params.slug?"6":"4")+" d-flex"},[r("Card",{attrs:{"icon-image":e.image,title:e.title,"image-type":"svg-text",description:e.description}})],1)}))],2)])]):t._e(),t._v(" "),t.service.process?r("section",{staticClass:"border-top"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"text-center col-md-8 offset-md-2 pb-5"},[r("h2",{staticClass:"p-0 m-0"},[t._v(t._s(t.service.process_title))])]),t._v(" "),t._l(t.service.process,(function(e,n){return r("div",{key:n,staticClass:"col-md-8 offset-md-2 p-5",staticStyle:{"border-radius":"5px"},style:n%2?"box-shadow: rgba(204, 219, 232, 0.5) 15px 0px 15px 0px;":"box-shadow: rgb(204, 219, 232, 0.5) 15px 0px 15px 0px inset;"},[r("div",{staticClass:"d-flex align-items-center"},[r("div",{staticClass:"pr-5 _process-step",staticStyle:{width:"100px","min-width":"100px"},domProps:{innerHTML:t._s(e.image)}}),t._v(" "),r("div",{staticClass:"flex-grow-1"},[r("h5",{staticClass:"m-0 p-0"},[t._v(t._s(e.title))]),t._v(" "),r("p",[t._v(t._s(e.description))])])])])}))],2)])]):t._e(),t._v(" "),t.service.approach_cards?r("section",{staticClass:"wave-bk border-top bg--"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"text-center col-md-8 offset-md-2 pb-5"},[r("h2",{staticClass:"p-0 m-0"},[t._v(t._s(t.service.approach_title))])]),t._v(" "),t._l(t.service.approach_cards,(function(t,e){return r("div",{key:e,staticClass:"mt-5 text-center col-md-4 d-flex"},[r("Card",{attrs:{"icon-image":t.image,title:t.title,"image-type":"svg-text",description:t.content}})],1)}))],2)])]):t._e(),t._v(" "),t.service.offering_cards?r("section",{staticClass:"wave-bk border-top bg--"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"text-center col-md-8 offset-md-2 pb-5"},[r("h2",{staticClass:"p-0 m-0"},[t._v(t._s(t.service.offering_title))])]),t._v(" "),t._l(t.service.offering_cards,(function(t,e){return r("div",{key:e,staticClass:"mt-5 text-center col-md-4 d-flex"},[r("Card",{attrs:{"icon-image":t.image,title:t.title,"image-type":"svg-text",description:t.content}})],1)}))],2)])]):t._e(),t._v(" "),r("section",{staticClass:"text-center border-top bg--"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"},[r("div",{staticClass:"cta"},[r("h2",[t._v("Want to know more about us?")]),t._v(" "),r("Button",{attrs:{text:"Get in Touch"}})],1)])])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=2c03ec2.js.map