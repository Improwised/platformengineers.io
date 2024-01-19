<template>
  <footer class="pt-4 pb-0 footer-2 bg--dark">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6 col-12 mb-5">
          <h6 class="type--uppercase m-0">Company</h6>
          <ul class="list--hover">
            <li class="">
              <a href="/about-us">About Us</a>
            </li>
          </ul>
          <!--  -->
          <h6 class="type--uppercase m-0">Resources</h6>
          <ul class="list--hover">
            <li class="">
              <a href="/blog">Blog</a>
            </li>
            <li class="">
              <a href="/case-studies">Case Studies</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-6 col-12 mb-5">
          <h6 class="type--uppercase m-0">Services</h6>
          <ul class="list--hover">
            <li v-for="(service, index) in $store.state.services" :key="index">
              <a :href="`/services/${service.slug}`">{{ service.title }}</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-6 col-12 mb-5">
          <h6 class="type--uppercase m-0">Industries</h6>
          <ul class="list--hover">
            <li
              v-for="(industry, index) in $store.state.industries"
              :key="index"
            >
              <a :href="`/industries/${industry.slug}`">{{ industry.title }}</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-6 col-12 mb-5">
          <h6 class="type--uppercase m-0">Support</h6>
          <ul class="list--hover">
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
          </ul>
          <h6 class="type--uppercase m-0">Assessment</h6>
          <ul class="list--hover">
            <li>
              <a href="/assessment">Cost Assessment</a>
            </li>
            <li>
              <a href="/assessment">Performance Assessment</a>
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
