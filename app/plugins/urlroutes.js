import Vue from "vue";
const moment = require("moment");

export function titlecase(value) {
  if (!value) return value;
  return value
    .replace(/-/g, " ")
    .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
}

export function slugify(value) {
  if (!value) return value;
  return value
    .replace(/(^\w|\s\w)/g, (m) => m.toLowerCase())
    .replace(/ /g, "-");
}

Vue.filter("formatDateTime", function (value) {
  if (!value) return "-";

  return `${moment(value).local().format("ddd, MMM DD, YYYY")}`;
});

const urls = {
  services: `/items/services?filter[status][_eq]=published&fields=*.*&sort=title`,
  servicesListWithTitleOnly:
    "/items/services?filter[status][_eq]=published&fields=title,slug&sort=title",
  service: (title) =>
    `/items/services?filter[status][_eq]=published&filter[slug][_eq]=${title}&single=1&fields=*.*`,
};

export default function (context, inject) {
  inject("titlecase", titlecase);
  context.$titlecase = titlecase;

  inject("slugify", slugify);
  context.$slugify = slugify;

  const assets = (id) => `${context.$config.DATA_URL}/assets/${id}`;
  urls.assets = assets;

  const link = (id, extension) =>
    context.store.state.generate
      ? `/${id}.${extension}`
      : `${context.$config.DATA_URL}/assets/${id}`;
  inject("link", link);
  context.$link = link;

  inject("urls", urls);
  context.$urls = urls;
}
