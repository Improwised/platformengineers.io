<template>
  <div class="nav-container">
    <div class="bar bar--sm visible-xs">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-3 col-md-2">
            <a href="/">
              <nuxt-img
                src="/img/plateform-engineers.png"
                alt="Platform Engineers"
                title="Platform Engineers"
                format="png"
                loading="lazy"
              />
            </a>
          </div>
          <div class="col-9 col-md-10 text-right">
            <a
              href="#"
              class="hamburger-toggle"
              aria-label="toggle"
              data-toggle-class="#menu1;hidden-xs"
            >
              <i class="icon icon--sm stack-interface stack-menu"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <nav
      id="menu1"
      class="bar bar--sm bar-1 hidden-xs"
      data-scroll-class="366px:pos-fixed"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="hidden-xs d-flex align-items-center">
            <div class="bar__module">
              <a href="/">
                <nuxt-img
                  src="/img/plateform-engineers.png"
                  alt="Platform Engineers"
                  title="Platform Engineers"
                  format="png"
                  loading="lazy"
                  width="68"
                  height="55"
                />
              </a>
            </div>
          </div>
          <div class="col text-right text-left-xs text-left-sm">
            <div class="bar__module">
              <ul class="menu-horizontal text-left">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about-us/">About Us</a>
                </li>
                <li class="dropdown">
                  <span class="dropdown__trigger">Services</span>
                  <div class="dropdown__container">
                    <div class="container">
                      <div class="row">
                        <div
                          class="mt-1 dropdown__content col-lg-3 col-md-4 col-sm-6 p-3"
                        >
                          <ul class="menu-vertical">
                            <li>
                              <a href="/assessment/">Cost Assessment</a>
                            </li>
                            <li>
                              <a href="/assessment/">Performance Assessment</a>
                            </li>
                            <li
                              v-for="(service, index) in $store.state.services"
                              :key="index"
                            >
                              <a :href="`/services/${service.slug}/`">{{
                                service.title
                              }}</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="dropdown">
                  <span class="dropdown__trigger">Industries</span>
                  <div class="dropdown__container">
                    <div class="container">
                      <div class="row">
                        <div
                          class="mt-1 dropdown__content col-lg-3 col-md-4 col-sm-6 p-3"
                        >
                          <ul class="menu-vertical">
                            <li
                              v-for="(industry, index) in $store.state
                                .industries"
                              :key="index"
                            >
                              <a :href="`/industries/${industry.slug}/`">{{
                                industry.title
                              }}</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="">
                  <a href="/blog/">Blog</a>
                </li>
                <li class="">
                  <a href="/case-studies/">Case Studies</a>
                </li>
              </ul>
            </div>
            <div class="bar__module">
              <Button text="Contact us" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Button from "./common/Button.vue";
export default {
  components: { Button },
};
</script>

<style>
.nav-container ul {
  list-style: none !important;
}

.menu-horizontal > li:not(:hover) > a,
.menu-horizontal > li:not(:hover) > span,
.menu-horizontal > li:not(:hover) > .modal-instance > .modal-trigger {
  opacity: 1;
}

.dropdown .dropdown__content:not([class="bg--dark"]) .menu-vertical a {
  color: #252525;
}
</style>
