<template>
  <div class="nav-container">
    <div class="bar bar--sm visible-xs">
      <div class="container">
        <div class="row">
          <div class="col-3 col-md-2">
            <a href="/">
              <img class="logo logo-dark" alt="logo" src="img/logo.png" />
              <img class="logo logo-light" alt="logo" src="img/logo.png" />
            </a>
          </div>
          <div class="col-9 col-md-10 text-right">
            <a
              href="#"
              class="hamburger-toggle"
              data-toggle-class="#menu1;hidden-xs"
            >
              <i class="icon icon--sm stack-interface stack-menu"></i>
            </a>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </div>
    <!--end bar-->
    <nav id="menu1" class="bar bar--sm bar-1 hidden-xs">
      <div class="container">
        <div class="row">
          <div class="hidden-xs d-flex align-items-center">
            <div class="bar__module">
              <a href="/">
                <img class="logo logo-dark" alt="logo" src="img/logo.png" />
                <img class="logo logo-light" alt="logo" src="img/logo.png" />
              </a>
            </div>
            <!--end module-->
          </div>
          <div class="col text-right text-left-xs text-left-sm">
            <div class="bar__module">
              <ul class="menu-horizontal text-left">
                <li class="dropdown">
                  <span class="dropdown__trigger">Services</span>
                  <div class="dropdown__container">
                    <div class="container">
                      <div class="row">
                        <div
                          class="col-md-12 dropdown__content dropdown__content--lg"
                        >
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="row">
                                <div class="col-lg-4">
                                  <h5>Industries</h5>
                                </div>
                                <div class="col-lg-4">
                                  <h5>Landing Pages</h5>
                                </div>
                                <div class="col-lg-4">
                                  <h5>Portfolios</h5>
                                  <h5>Coming Soon</h5>
                                </div>
                              </div>
                              <!--end of row-->
                            </div>
                            <!--end of col-->
                          </div>
                          <!--end of row-->
                        </div>
                        <!--end dropdown content-->
                      </div>
                    </div>
                  </div>
                  <!--end dropdown container-->
                </li>
                <li class="dropdown">
                  <span class="dropdown__trigger">Blog</span>
                  <div class="dropdown__container">
                    <div class="container">
                      <div class="row">
                        <div class="dropdown__content col-lg-2 col-md-4">
                          <ul class="menu-vertical">
                            <li class="dropdown">
                              <span class="dropdown__trigger">Articles</span>
                              <div class="dropdown__container">
                                <div class="container">
                                  <div class="row">
                                    <div
                                      class="dropdown__content col-lg-2 col-md-4"
                                    >
                                      <ul class="menu-vertical">
                                        <li>
                                          <a href="/"> Article 1</a>
                                        </li>
                                        <li>
                                          <a href="/"> Article 2</a>
                                        </li>
                                      </ul>
                                    </div>
                                    <!--end dropdown content-->
                                  </div>
                                  <!--end row-->
                                </div>
                              </div>
                              <!--end dropdown container-->
                            </li>
                          </ul>
                        </div>
                        <!--end dropdown content-->
                      </div>
                      <!--end row-->
                    </div>
                  </div>
                  <!--end dropdown container-->
                </li>
                <li class="dropdown">
                  <span class="dropdown__trigger">Shop</span>
                  <div class="dropdown__container">
                    <div class="container">
                      <div class="row">
                        <div class="dropdown__content col-lg-2 col-md-4">
                          <ul class="menu-vertical">
                            <li class="">
                              <a href="/">Shop 1</a>
                            </li>
                            <li class="">
                              <a href="/">Shop 2</a>
                            </li>
                            <li class="">
                              <a href="/">Shop 3</a>
                            </li>
                          </ul>
                        </div>
                        <!--end dropdown content-->
                      </div>
                      <!--end row-->
                    </div>
                  </div>
                  <!--end dropdown container-->
                </li>
              </ul>
            </div>
            <!--end module-->
            <div class="bar__module">
              <a class="btn btn--sm type--uppercase" href="/">
                <span class="btn__text">Try Now</span>
              </a>
              <a class="btn btn--sm btn--primary type--uppercase" href="/">
                <span class="btn__text">Contact Us</span>
              </a>
            </div>
            <!--end module-->
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </nav>
    <!--end bar-->
  </div>
</template>
