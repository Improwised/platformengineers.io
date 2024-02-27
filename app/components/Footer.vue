<template>
  <footer class="pt-4 pb-0 footer-2 bg--dark">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6 col-12 mb-5">
          <h3 class="type--uppercase m-0 h6">Company</h3>
          <ul class="list--hover mb-1">
            <li class="">
              <a href="/about-us/">About Us</a>
            </li>
          </ul>
          <ul class="list--hover d-flex mt-2 icons">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61555276800801"
                title="Platform Engineers facebook page"
                target="_blank"
              >
                <i class="socicon socicon-facebook icon icon--xs"></i>
              </a>
            </li>
            <li class="px-2">
              <a
                href="https://twitter.com/platform_engr"
                title="Platform Engineers twitter account"
                target="_blank"
              >
                <i class="socicon socicon-twitter icon icon--xs"></i>
              </a>
            </li>
            <li class="px-1">
              <a
                href="https://www.linkedin.com/company/platform-engineers/mycompany/"
                title="Platform Engineers linkedin page"
                target="_blank"
              >
                <i class="socicon socicon-linkedin icon icon--xs"></i>
              </a>
            </li>
          </ul>
          <!--  -->
          <h3 class="type--uppercase m-0 h6">Resources</h3>
          <ul class="list--hover">
            <li class="">
              <a href="/blog/">Blog</a>
            </li>
            <li class="">
              <a href="/case-studies/">Case Studies</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-6 col-12 mb-5">
          <h3 class="type--uppercase m-0 h6">Services</h3>
          <ul class="list--hover">
            <li v-for="(service, index) in $store.state.services" :key="index">
              <a :href="`/services/${service.slug}/`">{{ service.title }}</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-6 col-12 mb-5">
          <h3 class="type--uppercase m-0 h6">Industries</h3>
          <ul class="list--hover">
            <li
              v-for="(industry, index) in $store.state.industries"
              :key="index"
            >
              <a :href="`/industries/${industry.slug}/`">{{
                industry.title
              }}</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-6 col-12 mb-5">
          <h3 class="type--uppercase m-0 h6">Support</h3>
          <ul class="list--hover">
            <li>
              <a href="/contact-us/">Contact Us</a>
            </li>
          </ul>
          <h3 class="type--uppercase m-0 h6">Assessment</h3>
          <ul class="list--hover">
            <li>
              <a href="/assessment/">Cost Assessment</a>
            </li>
            <li>
              <a href="/assessment/">Performance Assessment</a>
            </li>
          </ul>
        </div>
        <!-- <div class="col-md-3 col-sm-6 col-12 mb-5"></div> -->
      </div>
    </div>
    <div class="sub-footer mt-3">
      <div class="col-md-12 text-center">
        <span class="type--fine-print"
          >&copy; <span class="update-year"></span> Platform Engineers</span
        >
      </div>
    </div>
  </footer>
</template>

<style scoped>
.d-flex li a:hover i {
  color: #8139ea;
}

.icons {
  margin-left: -5px;
}
</style>
