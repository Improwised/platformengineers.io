(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{434:function(e,t,n){},435:function(e,t,n){"use strict";n(434)},436:function(e,t,n){"use strict";n(435);var r=n(45),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-container"},[n("div",{staticClass:"bar bar--sm visible-xs"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-3 col-md-2"},[n("a",{attrs:{href:"/"}},[n("nuxt-img",{attrs:{src:"/img/plateform-engineers.png",alt:"Platform Engineers",title:"Platform Engineers",format:"png",loading:"lazy",width:"68",height:"55"}})],1)]),e._v(" "),e._m(0)])])]),e._v(" "),n("nav",{staticClass:"bar bar--sm bar-1 hidden-xs",attrs:{id:"menu1","data-scroll-class":"366px:pos-fixed"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"hidden-xs d-flex align-items-center"},[n("div",{staticClass:"bar__module"},[n("a",{attrs:{href:"/"}},[n("nuxt-img",{attrs:{src:"/img/plateform-engineers.png",alt:"Platform Engineers",title:"Platform Engineers",format:"png",loading:"lazy",width:"68",height:"55"}})],1)])]),e._v(" "),n("div",{staticClass:"col text-right text-left-xs text-left-sm"},[n("div",{staticClass:"bar__module"},[n("ul",{staticClass:"menu-horizontal text-left"},[e._m(1),e._v(" "),e._m(2),e._v(" "),n("li",{staticClass:"dropdown"},[n("span",{staticClass:"dropdown__trigger"},[e._v("Services")]),e._v(" "),n("div",{staticClass:"dropdown__container"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"mt-1 dropdown__content col-lg-3 col-md-4 col-sm-6 p-3"},[n("ul",{staticClass:"menu-vertical"},[e._m(3),e._v(" "),e._m(4),e._v(" "),e._l(e.$store.state.services,(function(t,r){return n("li",{key:r},[n("a",{attrs:{href:"/services/"+t.slug}},[e._v(e._s(t.title))])])}))],2)])])])])]),e._v(" "),n("li",{staticClass:"dropdown"},[n("span",{staticClass:"dropdown__trigger"},[e._v("Industries")]),e._v(" "),n("div",{staticClass:"dropdown__container"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"mt-1 dropdown__content col-lg-3 col-md-4 col-sm-6 p-3"},[n("ul",{staticClass:"menu-vertical"},e._l(e.$store.state.industries,(function(t,r){return n("li",{key:r},[n("a",{attrs:{href:"/industries/"+t.slug}},[e._v(e._s(t.title))])])})),0)])])])])]),e._v(" "),e._m(5),e._v(" "),e._m(6)])]),e._v(" "),e._m(7)])])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-9 col-md-10 text-right"},[t("a",{staticClass:"hamburger-toggle",attrs:{href:"#","data-toggle-class":"#menu1;hidden-xs"}},[t("i",{staticClass:"icon icon--sm stack-interface stack-menu"})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("a",{attrs:{href:"/"}},[e._v("Home")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("a",{attrs:{href:"/about-us"}},[e._v("About Us")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("a",{attrs:{href:"/assessment"}},[e._v("Cost Assessment")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("a",{attrs:{href:"/assessment"}},[e._v("Performance Assessment")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{},[n("a",{attrs:{href:"/blog"}},[e._v("Blog")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{},[n("a",{attrs:{href:"/case-studies"}},[e._v("Case Studies")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bar__module"},[n("a",{staticClass:"btn btn--sm btn--primary type--uppercase b-30",attrs:{href:"/contact-us"}},[n("span",{staticClass:"btn__text"},[e._v("Contact Us")])])])}],!1,null,null,null);t.a=component.exports},438:function(e,t,n){"use strict";(function(e){var r=n(436),o=n(460);t.a={components:{Navigation:r.a},layout:"theme",data:function(){return{faqs:o.a,isFaqsVisible:"",hero:this.$img("/img/as/hero/background.png",{format:"png",quality:"80",height:"543"}),feature:this.$img("/img/as/features/background.jpg",{format:"png",width:"1875"}),caseStudy:this.$img("/img/as/case-study/background.png",{format:"png",width:"425",height:"600",quality:"80"}),cardCaseStudy:this.$img("/img/as/case-study/card-background.png",{format:"png",width:"425",height:"600",quality:"80"}),pricing:this.$img("/img/as/pricing/price-background.png",{format:"png",width:"378",quality:"80"}),callToAction:this.$img("/img/as/call-to-action/background.svg",{format:"png",width:"378",quality:"80"})}},head:function(){var t="Assessment Services for Application Performance Optimization | Infrastructure cost assessment ",n="Let Platform Engineers assess your application and infrastructure to find areas for improvement and cost savings. Actionable assessment from Platform Engineers to improve your application's performance and reduce costs.";return{title:t,meta:[{name:"description",content:n},{name:"title",content:t},{property:"og:type",content:"website"},{property:"og:url",content:e.env.BASE_URL+this.$route.path+"/"},{property:"og:title",content:t},{property:"og:description",content:n},{property:"og:image",content:e.env.BASE_URL+"/img/as/hero/main.png"},{property:"twitter:card",content:"summary"},{property:"twitter:site",content:""},{property:"twitter:creator",content:""},{property:"twitter:title",content:t},{property:"twitter:description",content:n},{property:"twitter:image",content:e.env.BASE_URL+"/img/as/hero/main.png"}],link:[{rel:"canonical",href:e.env.BASE_URL+this.$route.path+"/"}]}},methods:{scrollPricingSection:function(){document.getElementById("as-pricing").scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}}}}).call(this,n(119))},449:function(e,t,n){},460:function(e,t,n){"use strict";t.a=[{question:"What is the typical timeline for the assessment?",answer:"The assessment generally takes two weeks, but the duration may vary depending on the complexity of your infrastructure and applications.",isOpen:!1},{question:"Can you explain the money-back guarantee?",answer:"If you are not satisfied with the assessment outcome, we will refund the full amount as an expression of our commitment to your satisfaction.",isOpen:!1},{question:"Is signing an NDA required, and why?",answer:"We respect the confidentiality of your infrastructure and proprietary information. As we will require access to your infrastructure and proprietary information so if you have your own NDA, feel free to share it with us, and we will reciprocate by signing it. Otherwise, we have our template of a Non-Disclosure Agreement (NDA) to ensure the privacy and confidentiality of your data. We take data privacy very seriously and as a part of this practice signing an NDA is mandatory.",isOpen:!1},{question:"How do you handle sensitive information and credentials provided during the assessment?",answer:"We treat sensitive information and credentials with the utmost care. We don’t ask you to share your credentials, instead we ask you to create new ones for us that can be removed after the assessment is completed.",isOpen:!1},{question:"Do I have to provide access to my cloud infrastructure?",answer:"Yes. To conduct a thorough assessment, we will need access to your cloud infrastructure. You can find detailed guidelines on generating temporary user credentials for your cloud hosting provider by following this link. Rest assured, the NDA and our commitment are in place to protect your privacy.",isOpen:!1},{question:"What happens after scheduling a call and confirming the NDA?",answer:"After scheduling a call and confirming the NDA, the next steps involve making a secure payment through the provided email link. Once the payment is processed, you will receive a comprehensive checklist of actionable items within the discussed timeline.",isOpen:!1},{question:"How is the assessment outcome delivered?",answer:"The assessment outcome is delivered in the form of a detailed checklist of actionable items. We will then schedule a follow-up call to discuss the findings and recommendations in detail. You may choose to implement the recommendations on your own or we can help you do it for an additional fee.",isOpen:!1},{question:"Is the assessment limited to specific types of infrastructure or applications?",answer:"Our assessment is designed to be versatile and is applicable to a wide range of cloud providers and infrastructure setups. Whether you have any cloud providers like AWS, Azure, GCP or running traditional servers, containers, or serverless solutions, our assessment can provide valuable insights.",isOpen:!1},{question:"Can I request additional services based on the assessment findings?",answer:"Absolutely. The assessment is designed to identify areas for improvement, and we offer additional services for a fee that is tailored to help you implement the recommended changes.",isOpen:!1},{question:"Who all should be present during the calls & assessment?",answer:"While we aim to minimize the impact on your team, some cooperation may be necessary. We will be in close collaboration with you during the whole process especially during discovery phase as we may require time from your team members to share detailed knowledge about the application structure as you are the best to answer about the nitty gritty of it. We'll work closely with you to ensure a smooth process.",isOpen:!1},{question:"Are there any geographical restrictions for availing your assessment services?",answer:"We provide assessment services globally, and our team can work with you regardless of your geographical location. In the case of hybrid or On-Premises setups, access will be needed to facilitate the assessment process.",isOpen:!1}]},461:function(e,t,n){"use strict";n(449)},480:function(e,t,n){"use strict";n.r(t);var r=n(438).a,o=(n(461),n(45)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-container assessment"},[n("Navigation"),e._v(" "),n("div",{staticClass:"as-hero",style:"background-image: url("+e.hero+")"},[n("div",{staticClass:"container py-sm-5"},[n("div",{staticClass:"row py-5"},[n("div",{staticClass:"col-lg-6"},[e._m(0),e._v(" "),n("button",{staticClass:"btn my-4 px-5 as-call-to-action b-30",on:{click:e.scrollPricingSection}},[e._v("\n            GET ASSESSMENT\n          ")])]),e._v(" "),n("div",{staticClass:"col-lg-6 d-flex align-items-center justify-content-center"},[n("nuxt-img",{attrs:{src:"/img/as/hero/main.png",alt:"Assessment by platformengineers",title:"Assessment by platformengineers",format:"png",loading:"lazy",width:"540",quality:"80"}})],1)])])]),e._v(" "),n("div",{staticClass:"py-3 py-sm-5 as-whyus"},[n("h2",{staticClass:"text-center"},[e._v("Why Assessment")]),e._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row d-flex align-items-center justify-content-center"},[n("div",{staticClass:"col-lg-6 d-flex align-items-center justify-content-center py-3 py-sm-5"},[n("nuxt-img",{attrs:{src:"/img/as/whyus/performance.png",alt:"Performance-focused Application Assessment | platformengineers",title:"Performance-focused Application Assessment | platformengineers",format:"png",loading:"lazy",width:"514",quality:"80"}})],1),e._v(" "),e._m(1)]),e._v(" "),n("div",{staticClass:"row d-flex align-items-center justify-content-center"},[e._m(2),e._v(" "),n("div",{staticClass:"col-lg-6 d-flex align-items-center justify-content-center py-3 py-sm-5"},[n("nuxt-img",{attrs:{src:"/img/as/whyus/cost.png",alt:"Cost-focused Infrastructure assessment | platformengineers",title:"Cost-focused Infrastructure assessment | platformengineers",format:"png",loading:"lazy",width:"522",quality:"80"}})],1)])])]),e._v(" "),n("div",{staticClass:"as-features py-3 py-sm-5",style:"background-image: url("+e.feature+")"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"text-center col-md-10 offset-md-1 py-3 py-sm-5"},[n("div",{staticClass:"text-center"},[n("nuxt-img",{attrs:{src:"/img/as/features/architecture/icon.svg",alt:"Performance-focused Application Assessment | features | platformengineers",title:"Performance-focused Application Assessment | features | platformengineers",format:"png",loading:"lazy",width:"80",height:"80",quality:"80"}})],1),e._v(" "),n("br"),e._v(" "),n("h2",{staticClass:"m-0"},[e._v("Performance-focused Application Assessment")]),e._v(" "),n("p",{staticClass:"lead"},[e._v("\n            Evaluate the architectural design for optimal speed and\n            efficiency, considering key areas.\n          ")])]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),n("div",{staticClass:"col-md-6 col-lg-4 d-flex py-3 pb-5"},[n("div",[n("div",{staticClass:"mb-4 zi-0"},[n("nuxt-img",{attrs:{src:"/img/as/features/architecture/performance-driven-cloud-changes.svg",alt:"Application-Centric Performance Evaluation | Performance-focused Application Assessment | features | platformengineers",title:"Application-Centric Performance Evaluation | Performance-focused Application Assessment | features | platformengineers",format:"png",loading:"lazy",width:"80",height:"80",quality:"80"}})],1),e._v(" "),n("h5",{staticClass:"mb-0 zi-0"},[e._v("\n              Application-Centric Performance Evaluation\n            ")]),e._v(" "),n("p",{staticClass:"zi-0"},[e._v("\n              Channel efforts exclusively towards assessing and enhancing the\n              performance of your application. Recommend targeted\n              optimizations to align the architecture with performance goals\n              and adapt to evolving application requirements.\n            ")])])]),e._v(" "),n("div",{staticClass:"col-md-6 col-lg-4 d-flex py-3 pb-5"},[n("div",[n("div",{staticClass:"mb-4 zi-0"},[n("nuxt-img",{attrs:{src:"/img/as/features/architecture/enhanced-database-server-performance.svg",alt:"Database Server Efficiency | Performance-focused Application Assessment | features | platformengineers",title:"Database Server Efficiency | Performance-focused Application Assessment | features | platformengineers",format:"png",loading:"lazy",width:"80",height:"80",quality:"80"}})],1),e._v(" "),n("h5",{staticClass:"mb-0 zi-0"},[e._v("Database Server Efficiency")]),e._v(" "),n("p",{staticClass:"zi-0"},[e._v("\n              Direct attention to strategies aimed at elevating the\n              performance of your database server within the application\n              context. Optimizing database operations helps to enhance the\n              overall efficiency of the application.\n            ")])])]),e._v(" "),n("div",{staticClass:"col-md-6 col-lg-4 d-flex py-3 pb-5"},[n("div",[n("div",{staticClass:"mb-4 zi-0"},[n("nuxt-img",{attrs:{src:"/img/as/features/architecture/robust-disaster-recovery-strategies.svg",alt:"Safeguarding Applications for Recovery | Performance-focused Application Assessment | features | platformengineers",title:"Safeguarding Applications for Recovery | Performance-focused Application Assessment | features | platformengineers",format:"png",loading:"lazy",width:"80",height:"80",quality:"80"}})],1),e._v(" "),n("h5",{staticClass:"mb-0 zi-0"},[e._v("Safeguarding Applications for Recovery")]),e._v(" "),n("p",{staticClass:"zi-0"},[e._v("\n              Examine your backups and recommend steps to fortify your app's\n              disaster recovery. Ensure your applications can handle\n              disruptions, keeping your business operations running smoothly\n              and uninterrupted.\n            ")])])])])])]),e._v(" "),n("div",{staticClass:"as-features py-3 py-sm-5",style:"background-image: url("+e.feature+")"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"text-center col-md-10 offset-md-1 py-3 py-sm-5"},[n("div",{staticClass:"text-center"},[n("nuxt-img",{attrs:{src:"/img/as/features/infrastructure/icon.svg",alt:"Cost-focused Infrastructure Assessment | features | platformengineers",title:"Cost-focused Infrastructure Assessment | features | platformengineers",format:"png",loading:"lazy",width:"80",height:"80",quality:"80"}})],1),e._v(" "),n("br"),e._v(" "),n("h2",{staticClass:"m-0"},[e._v("Cost-focused Infrastructure Assessment")]),e._v(" "),n("p",{staticClass:"lead"},[e._v("\n            Evaluate your infrastructure to optimize output while minimizing\n            costs, addressing various aspects\n          ")])]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),n("div",{staticClass:"col-md-6 col-lg-4 d-flex py-3 py-sm-5"},[n("div",[n("div",{staticClass:"mb-4 zi-0"},[n("nuxt-img",{attrs:{src:"/img/as/features/infrastructure/cost-effective-resource-utilization.svg",alt:"Cost-focused Infrastructure Assessment | features | platformengineers",title:"Cost-focused Infrastructure Assessment | features | platformengineers",format:"png",loading:"lazy",width:"80",height:"80",quality:"80"}})],1),e._v(" "),n("h5",{staticClass:"mb-0 zi-0"},[e._v("Cost-Effective Resource Utilization")]),e._v(" "),n("p",{staticClass:"zi-0"},[e._v("\n              Evaluate resource utilization to enhance efficiency while\n              identifying cost-saving opportunities. Ensure your\n              infrastructure operates at its peak without compromising on\n              cost-effectiveness.\n            ")])])]),e._v(" "),n("div",{staticClass:"col-md-6 col-lg-4 d-flex py-3 py-sm-5"},[n("div",[n("div",{staticClass:"mb-4 zi-0"},[n("nuxt-img",{attrs:{src:"/img/as/features/infrastructure/security-and-compliance-assurance.svg",alt:"Security and Compliance | Cost-focused Infrastructure Assessment | features | platformengineers",title:"Security and Compliance | Cost-focused Infrastructure Assessment | features | platformengineers",format:"png",loading:"lazy",width:"80",height:"80",quality:"80"}})],1),e._v(" "),n("h5",{staticClass:"mb-0 zi-0"},[e._v("Security and Compliance")]),e._v(" "),n("p",{staticClass:"zi-0"},[e._v("\n              Verify security measures through policy enforcement and\n              permissions, coupled with a comprehensive check for regulatory\n              compliance. Receive recommendations to fortify web application\n              security and safeguard critical data.\n            ")])])]),e._v(" "),n("div",{staticClass:"col-md-6 col-lg-4 d-flex py-3 py-sm-5"},[n("div",[n("div",{staticClass:"mb-4 zi-0"},[n("nuxt-img",{attrs:{src:"/img/as/features/infrastructure/real-time-monitoring-efficiency.svg",alt:"Real-Time Monitoring | Cost-focused Infrastructure Assessment | features | platformengineers",title:"Real-Time Monitoring | Cost-focused Infrastructure Assessment | features | platformengineers",format:"png",loading:"lazy",width:"80",height:"80",quality:"80"}})],1),e._v(" "),n("h5",{staticClass:"mb-0 zi-0"},[e._v("Real-Time Monitoring")]),e._v(" "),n("p",{staticClass:"zi-0"},[e._v("\n              Assess real-time metric tracking for actionable insights and\n              review existing alerting configurations. Ensure efficient\n              monitoring and incident response readiness for proactive\n              management, minimizing downtime and enhancing system stability.\n            ")])])])])])]),e._v(" "),n("div",[n("div",{staticClass:"as-pricing py-3 py-sm-5"},[n("div",{staticClass:"container"},[e._m(7),e._v(" "),n("div",{staticClass:"row as-pricing-row text-white"},[n("div",{staticClass:"col-lg-8 p-3 p-sm-5 d-flex align-items-center justify-content-center"},[n("div",[n("p",[e._v("\n                This assessment, facilitated by the PlatformEngineers, is a\n                unique offering in the market, setting it apart with\n                distinctive technical capabilities not found elsewhere.\n              ")]),e._v(" "),n("hr"),e._v(" "),n("div",{staticClass:"d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap"},[n("div",{staticClass:"d-flex align-items-center"},[n("nuxt-img",{attrs:{src:"/img/as/pricing/check.png",alt:"No Hidden Fees | Pricing | platformengineers",title:"No Hidden Fees | Pricing | platformengineers",format:"png",loading:"lazy",width:"16",height:"16",quality:"80"}}),e._v("\n                    No Hidden Fees\n                ")],1),e._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("nuxt-img",{attrs:{src:"/img/as/pricing/check.png",alt:"Money back guarantee | Pricing | platformengineers",title:"Money back guarantee | Pricing | platformengineers",format:"png",loading:"lazy",width:"16",height:"16",quality:"80"}}),e._v("\n                    Money back guarantee\n                ")],1),e._v(" "),n("div",{staticClass:"d-flex align-items-center"},[n("nuxt-img",{attrs:{src:"/img/as/pricing/check.png",alt:"Get Tax invoice | Pricing | platformengineers",title:"Get Tax invoice | Pricing | platformengineers",format:"png",loading:"lazy",width:"16",height:"16",quality:"80"}}),e._v("\n                    Get Tax invoice\n                ")],1)]),e._v(" "),e._m(8)])]),e._v(" "),n("div",{staticClass:"col-lg-4 d-flex align-items-center justify-content-center as-p-block p-3 p-sm-5",style:"background-image: url("+e.pricing+")",attrs:{id:"as-pricing"}},[e._m(9)])]),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),n("div",{staticClass:"row d-none d-sm-block pt-3 pt-sm-5"},[n("div",{staticClass:"col-lg-12 text-center"},[n("nuxt-img",{attrs:{src:"/img/as/pricing/process.png",alt:"process | assessment | platformengineers",title:"process | assessment | platformengineers",format:"png",loading:"lazy",width:"1110",quality:"80"}})],1)])])])]),e._v(" "),n("div",{staticClass:"as-faqs py-5",style:"background-image: url("+e.feature+")"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[e._m(12),e._v(" "),n("div",{staticClass:"pb-5"},e._l(e.faqs,(function(t,r){return n("div",{key:"faq"+r,staticClass:"col-md-10 offset-md-1 as-faq",class:{"mt-3":0!==r}},[n("div",{staticClass:"py-3 bg-white as-bs-1 px-3 rounded"},[n("div",{staticClass:"d-flex align-items-center",on:{click:function(t){e.faqs[r].isOpen=!e.faqs[r].isOpen}}},[n("div",{staticClass:"mr-3 pt-1 as-w-25px as-mw-25px"},[n("nuxt-img",{class:{rotate90:e.faqs[r].isOpen,rotate0:!e.faqs[r].isOpen},attrs:{src:"/img/as/faqs/icon.svg",alt:t.question,title:t.question,format:"png",loading:"lazy",width:"25",height:"25",quality:"80"}})],1),e._v(" "),n("h5",{staticClass:"m-0 as-f-16 pts as-lh1 font-weight-bold"},[e._v("\n                  "+e._s(t.question)+"\n                ")])]),e._v(" "),n("div",{staticClass:"ml-3",class:{"faq-h-auto":e.faqs[r].isOpen,"faq-h-0":!e.faqs[r].isOpen}},[n("div",{staticClass:"text-dark as-f-16 mt-3 as-ml-25px"},[e._v("\n                  "+e._s(t.answer)+"\n                ")])])])])})),0)])])]),e._v(" "),n("div",{staticClass:"d-flex align-items-center justify-content-center as-call-to-action-block",style:"background-image: url("+e.callToAction+")"},[n("div",{staticClass:"d-flex align-items-center align-self-stretch p-3 p-sm-5 text-center"},[n("div",[n("h2",{staticClass:"text-white"},[e._v("\n          Let's elevate your application performance and infrastructure cost\n          efficiency\n        ")]),e._v(" "),n("button",{staticClass:"btn px-5 as-call-to-action b-30 m-0",on:{click:e.scrollPricingSection}},[e._v("\n          SCHEDULE A CALL\n        ")])])])])],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"m-0 p-0"},[e._v("\n            Assessment for\n            "),n("span",{staticClass:"as-color-o"},[e._v("Application Performance")]),e._v(" and\n            "),n("span",{staticClass:"as-color-o"},[e._v("Infrastructure Cost")]),e._v(" efficiency.\n          ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-lg-6 py-3 py-sm-5"},[n("strong",{staticClass:"as-color-o as-f-xxxl"},[e._v("IMPROVE PERFORMANCE")]),e._v(" "),n("h3",[e._v("Performance-focused Application Assessment")]),e._v(" "),n("p",[e._v("\n            Revitalize your applications with a\n            "),n("strong",[n("a",{staticClass:"text-dark text-decoration-none font-weight-bold",attrs:{target:"_blank",href:"https://platformengineers.io/services/platform-engineering"}},[e._v("focus on performance")])]),e._v(", scalable architecture, and fortified reliability.\n\n            "),n("br"),e._v(" "),n("br"),e._v("\n\n            The mentioned parameters are usually identified as performance\n            bottlenecks in general. However, it's important to know that,\n            based on pre-assessment call, our attention may primarily center\n            on 3 to 4 key factors aimed at improving overall performance.\n          ")]),e._v(" "),n("ul",{staticClass:"as-ul-style"},[n("li",[e._v("Evaluate app speed, identifying performance bottlenecks")]),e._v(" "),n("li",[e._v("\n              Examine serverless solutions, exploring potential scalability\n            ")]),e._v(" "),n("li",[e._v("\n              Review dependencies, considering options for horizontal scaling\n            ")]),e._v(" "),n("li",[e._v("\n              Analyze caching strategies, noting potential for scalable\n              distribution\n            ")]),e._v(" "),n("li",[e._v("Check load balancing, understanding traffic flow")]),e._v(" "),n("li",[e._v("\n              Examine asynchronous processing, assessing the role of message\n              queues\n            ")]),e._v(" "),n("li",[e._v("\n              Review CDN impact on speed, exploring possibilities for adaptive\n              content delivery\n            ")]),e._v(" "),n("li",[e._v("\n              Evaluate the effectiveness of monitoring, deriving insights from\n              analytics\n            ")]),e._v(" "),n("li",[e._v("\n              Provide observations on automated testing, suggest\n              considerations for\n              "),n("a",{staticClass:"text-dark text-decoration-none font-weight-bold",attrs:{target:"_blank",href:"https://platformengineers.io/services/ci-cd-implementation"}},[e._v("continuous deployment")]),e._v("\n              strategies\n            ")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-lg-6 py-3 py-sm-5"},[n("strong",{staticClass:"as-color-o as-f-xxxl"},[e._v("REDUCE COST")]),e._v(" "),n("h3",[e._v("Cost-focused Infrastructure assessment")]),e._v(" "),n("p",[e._v("\n            Unlock efficiency with insights into resource utilization,\n            cost-conscious strategies, robust security measures, and\n            "),n("a",{staticClass:"text-dark text-decoration-none font-weight-bold",attrs:{target:"_blank",href:"https://platformengineers.io/services/infrastructure-maintenance-and-support"}},[e._v("proactive monitoring.")]),e._v(" "),n("br"),e._v(" "),n("br"),e._v("\n\n            The mentioned parameters are usually identified as cost efficiency\n            bottlenecks in general. However, it's important to know that,\n            based on pre-assessment call, our attention may primarily center\n            on 3 to 4 key factors aimed at improving overall cost efficiency.\n          ")]),e._v(" "),n("ul",{staticClass:"as-ul-style"},[n("li",[e._v("Evaluate underutilized resources")]),e._v(" "),n("li",[e._v("Assess load balancing and auto-scaling")]),e._v(" "),n("li",[e._v("\n              Recommendations for optimizing cost usage by leveraging\n              strategic allocation of Spot and Reserved Instances\n            ")]),e._v(" "),n("li",[e._v("Evaluate containerization impact")]),e._v(" "),n("li",[e._v("Assess orchestration tool effectiveness")]),e._v(" "),n("li",[e._v("Evaluate security measures")]),e._v(" "),n("li",[e._v("Review automation and IaC impact")]),e._v(" "),n("li",[e._v("Evaluate monitoring")]),e._v(" "),n("li",[e._v("\n              Analysis for predictive\n              "),n("a",{staticClass:"text-dark text-decoration-none font-weight-bold",attrs:{href:"https://platformengineers.io/",target:"_blank"}},[e._v("capacity planning")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-lg-8"},[n("div",{},[n("p",[e._v("\n              Slow response times and inconsistent performance result in lost\n              sales, irritated customers, and damaged brand reputations.\n              Performance evaluation can help with that. Performance\n              assessment Service will help in extensive technical knowledge to\n              analyze, diagnose, and optimize your application architecture.\n            ")]),e._v(" "),n("p",{},[e._v("\n              From meticulous application performance analysis to in-depth\n              assessment platform utilization, we illuminate hidden\n              bottlenecks and inefficiencies that are causing problems to your\n              system.\n            ")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"service-thumb"},[n("img",{attrs:{src:"img/choose_thumb1.png",alt:"service-image"}}),e._v(" "),n("div",{staticClass:"thumb-left wow fadeInLeft"},[n("img",{attrs:{src:"img/choose_left.png",alt:"service-image"}})]),e._v(" "),n("div",{staticClass:"thumb-right wow fadeInLeft"},[n("img",{attrs:{src:"img/choose_right.png",alt:"service-image"}})]),e._v(" "),n("div",{staticClass:"thumb-medile wow fadeInLeft"},[n("img",{staticClass:"loading-plane",attrs:{src:"img/choose_medile.png",alt:"service-image"}})])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-lg-8"},[n("div",{},[n("p",[e._v("\n              Utilize infrastructure cost optimization strategies using our\n              cloud cost management framework pinpoints optimization\n              opportunities, enabling you to optimize cloud infrastructure\n              spend with precision.\n            ")]),e._v(" "),n("p",{},[e._v("\n              Through a comprehensive infrastructure cost assessment, we\n              diagnose overprovisioning and inefficiencies, empowering you to\n              fuel profitable growth. Embrace smarter infrastructure and\n              boundless possibilities.\n            ")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"service-thumb"},[n("img",{attrs:{src:"img/choose_thumb2.png",alt:"service-image"}}),e._v(" "),n("div",{staticClass:"thumb-left2 wow fadeInLeft"},[n("img",{staticClass:"rotating",attrs:{src:"img/circle1.png",alt:"service-image"}})]),e._v(" "),n("div",{staticClass:"thumb-right2 wow fadeInLeft"},[n("img",{staticClass:"rotating",attrs:{src:"img/circle2.png",alt:"service-image"}})])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row py-3 py-sm-5"},[n("div",{staticClass:"text-center col-md-8 offset-md-2"},[n("h2",{staticClass:"m-0"},[e._v("Pricing")]),e._v(" "),n("p",{staticClass:"lead"},[e._v("\n              We prioritize genuine human connections and believe in\n              understanding your needs through meaningful conversations before\n              any financial commitment. It's our commitment to ensure a\n              personalized and satisfactory experience.\n            ")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center pt-5"},[n("p",[e._v("\n                  Check out the "),n("a",{attrs:{href:"/assessment/#faqs"}},[e._v("FAQs")]),e._v(" if you\n                  still have questions.\n                ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex align-items-center justify-content-center"},[n("div",{staticClass:"text-center"},[n("span",{staticClass:"badge badge-warning"},[e._v("Limited-time offer")]),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("h2",{staticClass:"m-0 p-0 text-white",staticStyle:{"font-size":"4rem","line-height":"1"}},[e._v("\n                  $250\n                ")]),e._v(" "),n("p",{staticClass:"m-0",staticStyle:{"font-size":"1.3rem",color:"gray"}},[n("s",[e._v("$1000")]),e._v(" / 75% off\n                ")]),e._v(" "),n("br"),e._v(" "),n("a",{staticClass:"btn px-5 as-call-to-action b-30 m-0",attrs:{href:"https://calendly.com/platform-engineers/30min",target:"_blank"}},[e._v("\n                  SCHEDULE A CALL\n                ")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row pt-3 pt-sm-5"},[n("div",{staticClass:"text-center col-md-8 offset-md-2 pt-3 pt-sm-5"},[n("h2",{staticClass:"m-0"},[e._v("Process")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row d-block d-sm-none pb-3 pb-sm-5"},[n("div",{staticClass:"col"},[n("div",{staticClass:"process-2 row"},[n("div",{staticClass:"col-md-3"},[n("div",{staticClass:"process__item"},[n("h5",[e._v("Start Assessment")]),e._v(" "),n("p",[e._v('\n                    Begin by clicking "Schedule a Call." Complete a brief form\n                    and arrange a 15-minute Google Calendar call to delve into\n                    your specific needs and challenges. Let\'s start\n                    Assessment!\n                  ')])])]),e._v(" "),n("div",{staticClass:"col-md-3"},[n("div",{staticClass:"process__item"},[n("h5",[e._v("NDA process - Privacy assurance")]),e._v(" "),n("p",[e._v("\n                    After our assessment call, we will proceed to the signing\n                    of the NDA. We respect the confidentiality of your\n                    infrastructure and proprietary information. So, if you\n                    have your own NDA, feel free to share it with us, and we\n                    will reciprocate by signing it. Otherwise, we have our\n                    template of a (NDA) to ensure the privacy and\n                    confidentiality of your data.\n                  ")])])]),e._v(" "),n("div",{staticClass:"col-md-3"},[n("div",{staticClass:"process__item"},[n("h5",[e._v("Provide Prerequisites & Pay")]),e._v(" "),n("p",[e._v("\n                    Following the assessment call and NDA confirmation, share\n                    the requested prerequisites and grant access. Initiate the\n                    assessment by making a secure USD 250 payment through the\n                    provided email link. Your commitment fuels the process.\n                  ")])])]),e._v(" "),n("div",{staticClass:"col-md-3"},[n("div",{staticClass:"process__item"},[n("h5",[e._v("Outcome Discussion")]),e._v(" "),n("p",[e._v("\n                    Based on a discussed timeline, receive a comprehensive\n                    checklist of actionable items. Later schedule a call to\n                    discuss it in detail. Either you can implement actions\n                    with your team or we can help you do it for an additional\n                    fee.\n                  ")])])])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center col-md-8 offset-md-2 py-5"},[n("h2",{staticClass:"m-0"},[e._v("FAQs")]),e._v(" "),n("p",{staticClass:"lead"},[e._v("\n            Explore our FAQs for quick answers to common questions. Find\n            information on service, offering, features, payments,\n            deliverables.\n          ")])])}],!1,null,null,null);t.default=component.exports}}]);
//# sourceMappingURL=e3ebdf6.js.map