<template>
  <footer class="space--sm footer-2 bg--dark">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6 col-12">
          <h6 class="type--uppercase">Company</h6>
          <ul class="list--hover">
            <li class="">
              <a href="/about-us">About Us</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-6 col-12">
          <h6 class="type--uppercase">Services</h6>
          <ul class="list--hover">
            <li v-for="(service, index) in $store.state.services" :key="index">
              <a :href="`/services/${service.slug}`">{{ service.title }}</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-6 col-12">
          <h6 class="type--uppercase">Support</h6>
          <ul class="list--hover">
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
            <li>
              <a href="mailto:sales@platformengineers.in"
                >sales@platformengineers.in</a
              >
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-6 col-12">
          <h6 class="type--uppercase">Resources</h6>
          <ul class="list--hover">
            <!-- <li class="">
              <a href="/blogs">Blogs</a>
            </li> -->
            <li class="">
              <a href="/case-studies">Case Studies</a>
            </li>
          </ul>
        </div>
      </div>
      <!--end of row-->
      <div class="row">
        <div class="col-md-12 text-center">
          <span class="type--fine-print"
            >&copy; <span class="update-year"></span> Platform Engineers</span
          >
          <!-- <a class="type--fine-print" href="#">Privacy Policy</a> -->
          <!-- <a class="type--fine-print" href="#">Legal</a> -->
        </div>
        <!-- <div class="col-md-6 text-right text-left-xs">
          <ul class="social-list list-inline list--hover">
            <li>
              <a href="#">
                <i class="socicon socicon-google icon icon--xs"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="socicon socicon-twitter icon icon--xs"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="socicon socicon-facebook icon icon--xs"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="socicon socicon-instagram icon icon--xs"></i>
              </a>
            </li>
          </ul>
        </div> -->
      </div>
      <!--end of row-->
    </div>
    <!--end of container-->
  </footer>
</template>
