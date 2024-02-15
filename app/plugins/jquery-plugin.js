import Vue from "vue";
import jQuery from "jquery";
// Check if running on the client-side
if (process.client) {
  // Make jQuery available throughout the application
  Vue.prototype.$jQuery = jQuery;
  window.$ = jQuery;
  window.jQuery = jQuery;
}
