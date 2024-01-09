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

  return `${moment(value).local().format("ddd, DD/MM/YYYY")}`;
});

const urls = {
  categories:
    "/items/pe_categories?fields=name,description,services.title,services.description,services.slug",
  home: "https://data.improwised.com/items/pe_home",
  services:
    "/items/pe_services?fields=slug,title,description,icon,icon_as_image&sort=order&filter[status][_eq]=published",
  servicesNames:
    "/items/pe_services?fields=slug,title,description,icon&filter[status][_eq]=published&sort=order",
  industriesNames:
    "/items/pe_industry?fields=slug,title,description,image&filter[status][_eq]=published",
  industries: "/items/pe_industries",
  whyUs:
    "/items/pe_why_us?fields=title,description,icon,image&filter[status][_eq]=published&sort=order",

  aboutUs: "/items/pe_about_us?fields=*.*",

  service: (title) =>
    `/items/pe_services?filter[slug][_eq]=${title}&single=1&fields=*.*`,

  industry: (title) =>
    `/items/pe_industry?filter[slug][_eq]=${title}&fields[]=*.*,services.pe_services_id.slug,services.pe_services_id.title,services.pe_services_id.description,services.pe_services_id.icon,services.pe_services_id.icon_as_image`,

  blogs: `/items/pe_blog?filter[status][_eq]=published&fields=*.*&sort=-date_created`,
  blog: (title) =>
    `/items/pe_blog?filter[slug][_eq]=${title}&single=1&fields[]=*.*`,

  // services: `/items/services?filter[status][_eq]=published&fields=*.*&sort=title`,
  // servicesListWithTitleOnly:
  //   "/items/services?filter[status][_eq]=published&fields=title,slug&sort=title",
  // service: (title) =>
  //   `/items/services?filter[status][_eq]=published&filter[slug][_eq]=${title}&single=1&fields=*.*`,

  // services: `/items/services?filter[status][_eq]=published&fields=*.*&sort=title`,
  servicesListWithTitleOnly:
    "/items/services?filter[status][_eq]=published&fields=title,slug&sort=title",

  careers:
    "/items/pages?filter[status][_eq]=published&filter[slug][_eq]=careers&fields[]=*.*",

  jobOpenings:
    "/items/careers?filter[status][_eq]=published&fields=*.*&sort=title",
  job: (title) =>
    `/items/careers?filter[status][_eq]=published&filter[slug][_eq]=${title}&single=1&fields=*.*`,

  caseStudies:
    "/items/pe_case_studies?filter[status][_eq]=published&fields=*.*&sort=-date_created",
  caseStudy: (title) =>
    `/items/pe_case_studies?filter[slug][_eq]=${title}&single=1&fields[]=*.*,tags.pe_case_studies_tags_id.name,technologies.directus_files_id.*`,

  whyus: "/items/why_us?filter[status][_eq]=published&fields=*.*&sort=title",

  testimonials:
    "/items/testimonials?filter[status][_eq]=published&fields=*.*&sort=sort,-id&limit=3",

  whyUsHome: `/items/why_us_home?filter[status][_eq]=published&fields=*.*&sort=title`,

  whoWeAre: `/items/blog?filter[status][_eq]=published&filter[slug][_eq]=who-we-are&fields[]=*.*,tags.tags_id.name`,
  whatWeDo: `/items/blog?filter[status][_eq]=published&filter[slug][_eq]=what-we-do&fields[]=*.*,tags.tags_id.name`,
  simpleHiringProcess: `/items/blog?filter[status][_eq]=published&filter[slug][_eq]=simple-hiring-process&fields[]=*.*,tags.tags_id.name`,
  coreValues: `/items/blog?filter[status][_eq]=published&filter[tags][tags_id][_eq]=2&sort=sort,-id&limit=3&fields[]=*.*`,
  meetTeam: `/items/team?filter[status][_eq]=published&fields=*.*&sort=sort,id`,
  // blogs: `/items/blog?filter[tags][tags_id][_neq]=2&sort=sort,-id&limit=6&fields[]=*.*,tags.*`,
  // blog: (title) => `/items/pe_blog?filter[slug][_eq]=${title}&single=1`,
  // blogothers: (title) =>
  //   `/items/blog?filter[status][_eq]=published&sort=sort,-id&limit=3&fields[]=*.*&filter[slug][_neq]=${title}&filter[tags][tags_id][_neq]=2`,
  // blogPageData: `/items/blog?filter[status][_eq]=published&sort=sort,-id&fields[]=*.*&filter[tags][tags_id][_neq]=2`,
  gallery: `/items/gallery?filter[status][_eq]=published&fields[]=*.*&sort=sort,-id`,
  landing_pages_for_seo: `/items/pe_pages_seo`,
  landing_page_for_seo: (title) =>
    `/items/pe_pages_seo?filter[slug][_eq]=${title}&single=1&fields[]=*.*`,
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

  Vue.filter("str_limit", function (value, size) {
    if (!value) return "";
    value = value.toString();

    if (value.length <= size) {
      return value;
    }
    return value.substr(0, size) + "...";
  });
}
