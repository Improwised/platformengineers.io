document.addEventListener('DOMContentLoaded', () => {
(window.mr = window.mr || {}),
    (mr = (function (o, e, t, n) {
        return (
            (o.dropdowns = o.dropdowns || {}),
            (o.dropdowns.done = !1),
            (o.dropdowns.documentReady = function (e) {
                var s = !1;
                e('html[dir="rtl"]').length && (s = !0),
                    o.dropdowns.done ||
                    (jQuery(n).on("click", "body:not(.dropdowns--hover) .dropdown, body.dropdowns--hover .dropdown.dropdown--click", function (o) {
                        var t = jQuery(this);
                        jQuery(o.target).is(".dropdown--active > .dropdown__trigger")
                            ? (t.siblings().removeClass("dropdown--active").find(".dropdown").removeClass("dropdown--active"), t.toggleClass("dropdown--active"))
                            : (e(".dropdown--active").removeClass("dropdown--active"), t.addClass("dropdown--active"));
                    }),
                        jQuery(n).on("click touchstart", "body:not(.dropdowns--hover)", function (o) {
                            jQuery(o.target).is('[class*="dropdown"], [class*="dropdown"] *') || e(".dropdown--active").removeClass("dropdown--active");
                        }),
                        jQuery("body.dropdowns--hover .dropdown").on("click", function (o) {
                            o.stopPropagation(), jQuery(this).toggleClass("dropdown--active");
                        }),
                        jQuery("body").append('<div class="container containerMeasure" style="opacity:0;pointer-events:none;"></div>'),
                        !1 === s
                            ? (o.dropdowns.repositionDropdowns(e),
                                jQuery(t).on("resize", function () {
                                    o.dropdowns.repositionDropdowns(e);
                                }))
                            : (o.dropdowns.repositionDropdownsRtl(e),
                                jQuery(t).on("resize", function () {
                                    o.dropdowns.repositionDropdownsRtl(e);
                                })),
                        (o.dropdowns.done = !0));
            }),
            (o.dropdowns.repositionDropdowns = function (o) {
                o(".dropdown__container").each(function () {
                    var o, e, t, n, s;
                    jQuery(this).css("left", ""),
                        (e = (o = jQuery(this)).offset().left),
                        (t = jQuery(".containerMeasure").offset().left),
                        (n = o.closest(".dropdown").offset().left),
                        (s = null),
                        o.css("left", -e + t),
                        o.find('.dropdown__content:not([class*="lg-12"])').length && (s = o.find(".dropdown__content")).css("left", n - t);
                }),
                    o(".dropdown__content").each(function () {
                        var o, e, n, s, r, i;
                        (s = (e = (o = jQuery(this)).offset().left) + (n = o.outerWidth(!0))), (r = jQuery(t).outerWidth(!0)), (i = jQuery(".containerMeasure").outerWidth() - n), s > r && o.css("left", i);
                    });
            }),
            (o.dropdowns.repositionDropdownsRtl = function (o) {
                var e = jQuery(t).width();
                o(".dropdown__container").each(function () {
                    var o, t, n, s, r;
                    jQuery(this).css("left", ""),
                        (o = jQuery(this)),
                        (t = e - (o.offset().left + o.outerWidth(!0))),
                        (n = jQuery(".containerMeasure").offset().left),
                        (s = e - (o.closest(".dropdown").offset().left + o.closest(".dropdown").outerWidth(!0))),
                        (r = null),
                        o.css("right", -t + n),
                        o.find('.dropdown__content:not([class*="lg-12"])').length && (r = o.find(".dropdown__content")).css("right", s - n);
                }),
                    o(".dropdown__content").each(function () {
                        var o, n, s, r, i, a;
                        (o = jQuery(this)), (r = (n = e - (o.offset().left + o.outerWidth(!0))) + (s = o.outerWidth(!0))), (i = jQuery(t).outerWidth(!0)), (a = jQuery(".containerMeasure").outerWidth() - s), r > i && o.css("right", a);
                    });
            }),
            o.components.documentReady.push(o.dropdowns.documentReady),
            o
        );
    })(
        (mr = (function (o, e, t, n) {
            return (
                (o.cookies = {
                    getItem: function (o) {
                        return (o && decodeURIComponent(n.cookie.replace(RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(o).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1"))) || null;
                    },
                    setItem: function (o, e, t, s, r, i) {
                        if (!o || /^(?:expires|max\-age|path|domain|secure)$/i.test(o)) return !1;
                        var a = "";
                        if (t)
                            switch (t.constructor) {
                                case Number:
                                    a = t === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + t;
                                    break;
                                case String:
                                    a = "; expires=" + t;
                                    break;
                                case Date:
                                    a = "; expires=" + t.toUTCString();
                            }
                        return (n.cookie = encodeURIComponent(o) + "=" + encodeURIComponent(e) + a + (r ? "; domain=" + r : "") + (s ? "; path=" + s : "") + (i ? "; secure" : "")), !0;
                    },
                    removeItem: function (o, e, t) {
                        return !!this.hasItem(o) && ((n.cookie = encodeURIComponent(o) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (t ? "; domain=" + t : "") + (e ? "; path=" + e : "")), !0);
                    },
                    hasItem: function (o) {
                        return !!o && RegExp("(?:^|;\\s*)" + encodeURIComponent(o).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(n.cookie);
                    },
                    keys: function () {
                        for (var o = n.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), e = o.length, t = 0; t < e; t++) o[t] = decodeURIComponent(o[t]);
                        return o;
                    },
                }),
                o
            );
        })(
            (mr = (function (o, e, t, n) {
                return (
                    (o.bars = o.bars || {}),
                    (o.bars.documentReady = function (o) {
                        o('.nav-container .bar[data-scroll-class*="fixed"]:not(.bar--absolute)').each(function () {
                            var e = o(this),
                                t = e.outerHeight(!0);
                            e.closest(".nav-container").css("min-height", t);
                        });
                    }),
                    o.components.documentReady.push(o.bars.documentReady),
                    o
                );
            })(
                (mr = (function (o, e, t, n) {
                    "use strict";
                    (o.scroll.classModifiers = {}),
                        (o.scroll.classModifiers.rules = []),
                        (o.scroll.classModifiers.parseScrollRules = function (e) {
                            return (
                                e
                                    .attr("data-scroll-class")
                                    .split(";")
                                    .forEach(function (t) {
                                        var n,
                                            s,
                                            r = {};
                                        if (2 === (n = t.replace(/\s/g, "").split(":")).length) {
                                            if (!((s = o.util.parsePixels(n[0])) > -1) || ((r.scrollPoint = s), !n[1].length)) return !1;
                                            var i = n[1];
                                            (r.toggleClass = i), (r.hasClass = e.hasClass(i)), (r.element = e.get(0)), o.scroll.classModifiers.rules.push(r);
                                        }
                                    }),
                                !!o.scroll.classModifiers.rules.length
                            );
                        }),
                        (o.scroll.classModifiers.update = function (e) {
                            for (var t, n = o.scroll.y, s = o.scroll.classModifiers.rules, r = s.length; r--;)
                                n > (t = s[r]).scrollPoint && !t.hasClass && (t.element.classList.add(t.toggleClass), (t.hasClass = o.scroll.classModifiers.rules[r].hasClass = !0)),
                                    n < t.scrollPoint && t.hasClass && (t.element.classList.remove(t.toggleClass), (t.hasClass = o.scroll.classModifiers.rules[r].hasClass = !1));
                        });
                    var s = function () {
                        e('.main-container [data-scroll-class*="pos-fixed"]').each(function () {
                            var o = e(this);
                            o.css("max-width", o.parent().outerWidth()), o.parent().css("min-height", o.outerHeight());
                        });
                    },
                        r = function (e) {
                            e("[data-scroll-class]").each(function () {
                                var t = e(this);
                                o.scroll.classModifiers.parseScrollRules(t) || console.log("Error parsing scroll rules on: " + t);
                            }),
                                s(),
                                e(t).on("resize", s),
                                o.scroll.classModifiers.rules.length && o.scroll.listeners.push(o.scroll.classModifiers.update);
                        };
                    return o.components.documentReady.push(r), (o.scroll.classModifiers.documentReady = r), o;
                })(
                    (mr = (function (o, e, t, n) {
                        "use strict";
                        o.scroll = {};
                        var s = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame;
                        (o.scroll.listeners = []), (o.scroll.busy = !1), (o.scroll.y = 0), (o.scroll.x = 0);
                        var r = function (e) {
                            jQuery(t).off("scroll.mr"),
                                jQuery(t).on("scroll.mr", function (e) {
                                    !1 === o.scroll.busy &&
                                        ((o.scroll.busy = !0),
                                            s(function (e) {
                                                o.scroll.update(e);
                                            })),
                                        e.stopPropagation && e.stopPropagation();
                                });
                        };
                        return (
                            (o.scroll.update = function (e) {
                                var n = void 0 !== t.mr_parallax;
                                if (((o.scroll.y = n ? mr_parallax.mr_getScrollPosition() : t.pageYOffset), (o.scroll.busy = !1), n && mr_parallax.mr_parallaxBackground(), o.scroll.listeners.length > 0))
                                    for (var s = 0, r = o.scroll.listeners.length; s < r; s++) o.scroll.listeners[s](e);
                            }),
                            (o.scroll.documentReady = r),
                            o.components.documentReady.push(r),
                            o
                        );
                    })(
                        (mr = (function (o, e, t, n) {
                            return (
                                (o.window = {}),
                                (o.window.height = e(t).height()),
                                (o.window.width = e(t).width()),
                                e(t).on("resize", function () {
                                    (o.window.height = e(t).height()), (o.window.width = e(t).width());
                                }),
                                o
                            );
                        })(
                            (mr = (function (o, e, t, n) {
                                return (
                                    (o.util = {}),
                                    (o.util.requestAnimationFrame = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame),
                                    (o.util.documentReady = function (o) {
                                        var e = new Date().getFullYear();
                                        o(".update-year").text(e);
                                    }),
                                    (o.util.windowLoad = function (o) {
                                        o("[data-delay-src]").each(function () {
                                            var e = o(this);
                                            e.attr("src", e.attr("data-delay-src")), e.removeAttr("data-delay-src");
                                        });
                                    }),
                                    (o.util.getURLParameter = function (o) {
                                        return decodeURIComponent((RegExp("[?|&]" + o + "=([^&;]+?)(&|#|;|$)").exec(location.search) || [void 0, ""])[1].replace(/\+/g, "%20")) || null;
                                    }),
                                    (o.util.capitaliseFirstLetter = function (o) {
                                        return o.charAt(0).toUpperCase() + o.slice(1);
                                    }),
                                    (o.util.slugify = function (o, e) {
                                        return void 0 !== e
                                            ? o.replace(/ +/g, "")
                                            : o
                                                .toLowerCase()
                                                .replace(/[\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\]\[\}\{\'\"\;\\\:\?\/\>\<\.\,]+/g, "")
                                                .replace(/ +/g, "-");
                                    }),
                                    (o.util.sortChildrenByText = function (o, t) {
                                        var n = e(o),
                                            s = n.children().get(),
                                            r = -1,
                                            i = 1;
                                        void 0 !== t && ((r = 1), (i = -1)),
                                            s.sort(function (o, t) {
                                                var n = e(o).text(),
                                                    s = e(t).text();
                                                return n < s ? r : n > s ? i : 0;
                                            }),
                                            n.empty(),
                                            e(s).each(function (o, e) {
                                                n.append(e);
                                            });
                                    }),
                                    (o.util.pauseVideo = function (o) {
                                        (o.is("video") ? o : o.find("video")).each(function (o, t) {
                                            e(t).get(0).pause();
                                        });
                                    }),
                                    (o.util.parsePixels = function (o) {
                                        var n,
                                            s = e(t).height();
                                        return /^[1-9]{1}[0-9]*[p][x]$/.test(o) ? parseInt(o.replace("px", ""), 10) : /^[1-9]{1}[0-9]*[v][h]$/.test(o) ? s * ((n = parseInt(o.replace("vh", ""), 10)) / 100) : -1;
                                    }),
                                    (o.util.removeHash = function () {
                                        history.pushState("", n.title, t.location.pathname + t.location.search);
                                    }),
                                    o.components.documentReady.push(o.util.documentReady),
                                    o.components.windowLoad.push(o.util.windowLoad),
                                    o
                                );
                            })(
                                (mr = (function (o, e, t, n) {
                                    "use strict";
                                    var s = { documentReady: [], documentReadyDeferred: [], windowLoad: [], windowLoadDeferred: [] };
                                    function r(t) {
                                        (t = void 0 === t ? e : t),
                                            s.documentReady.concat(s.documentReadyDeferred).forEach(function (o) {
                                                o(t);
                                            }),
                                            (o.status.documentReadyRan = !0),
                                            o.status.windowLoadPending && i(o.setContext());
                                    }
                                    function i(t) {
                                        o.status.documentReadyRan
                                            ? ((o.status.windowLoadPending = !1),
                                                (t = "object" == typeof t ? e : t),
                                                s.windowLoad.concat(s.windowLoadDeferred).forEach(function (o) {
                                                    o(t);
                                                }))
                                            : (o.status.windowLoadPending = !0);
                                    }
                                    return (
                                        ((o = o || {}).status = { documentReadyRan: !1, windowLoadPending: !1 }),
                                        e(n).ready(r),
                                        e(t).on("load", i),
                                        (o.setContext = function (o) {
                                            return void 0 !== o
                                                ? function (t) {
                                                    return e(o).find(t);
                                                }
                                                : e;
                                        }),
                                        (o.components = s),
                                        (o.documentReady = r),
                                        (o.windowLoad = i),
                                        o
                                    );
                                })(window.mr, jQuery, window, document)),
                                jQuery,
                                window,
                                document
                            )),
                            jQuery,
                            window,
                            document
                        )),
                        jQuery,
                        window,
                        document
                    )),
                    jQuery,
                    window,
                    document
                )),
                jQuery,
                window,
                document
            )),
            jQuery,
            window,
            document
        )),
        jQuery,
        window,
        document
    ));

    
});