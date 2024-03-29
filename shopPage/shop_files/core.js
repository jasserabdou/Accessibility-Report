define("ep/ui/core", ["jquery", "ep", "util/scope"], function (e, t, a) {
  "use strict";
  var i = a("ep.ui"),
    n = function (t) {
      var a = "";
      return (
        "string" == typeof t ? (a = t) : t instanceof e && (a = t.selector),
        a ||
          (t[e.expando] || (t[e.expando] = ++e.guid),
          (a = "Expando:" + t[e.expando])),
        a
      );
    },
    o = function (t, a) {
      var i,
        n,
        o = e.type(t),
        l = {};
      "string" === o
        ? (i = { src: t, desc: "" })
        : t.nodeType
        ? ((n = e(t)),
          n.is("img") &&
            ((l = n.data()),
            (l.href = n.closest("a").attr("href")),
            (i = {
              node: t,
              src: n.attr("src"),
              desc: (n.attr("title") || n.attr("alt") || "").replace(
                /\\\\n/g,
                "\n"
              ),
            })))
        : "object" === o &&
          t.src &&
          ((l = t), (i = { src: t.src, desc: t.desc || "" })),
        i &&
          ((i.srcL = l.srcL || l.srcM || i.src),
          (i.srcMl = l.srcMl || i.srcL),
          (i.srcM = l.srcM || i.srcMl),
          (i.srcMs = l.srcMs || i.srcM),
          (i.srcS = l.srcS || i.srcM),
          (i.srcXs = l.srcXs || i.srcS),
          (i.href = l.href || i.srcL),
          (i.getSrcFor = function (t) {
            var a,
              n = t instanceof e ? t : e(t),
              o = n.innerWidth(),
              l = n.innerHeight();
            return (a =
              o >= 750 || l >= 750
                ? i.srcL
                : o >= 350 || l >= 350
                ? i.srcMl
                : o >= 200 || l >= 200
                ? i.srcM
                : o >= 100 || l >= 100
                ? i.srcMs
                : o >= 75 || l >= 75
                ? i.srcS
                : i.srcXs);
          }),
          (i._checkSrcName = function (e, t) {
            var a = t.replace(/(_(xs|s|ms|m|ml|l))?\.[^\.]+$/i, ""),
              i = e.replace(/(_(xs|s|ms|m|ml|l))?\.[^\.]+$/i, "");
            return a === i ? t : e;
          }),
          a.push(i));
    };
  return (
    (i.imgData = function (t) {
      var a,
        l,
        r = n(t),
        s = i.imgData.cache[r];
      return (
        s ||
          ((a = e.type(t)),
          (l = []),
          "string" !== a || /\//.test(t)
            ? "array" === a
              ? e.each(t, function (e, t) {
                  o(t, l);
                })
              : t instanceof e
              ? t.each(function () {
                  o(this, l);
                })
              : ("string" === a || ("object" === a && (t.src || t.nodeType))) &&
                o(t, l)
            : e(t).each(function () {
                o(this, l);
              }),
          (s = new i.imgData.init(l)),
          s.on("location", function () {
            var e = (s.current() || {}).href;
            e && (location.href = e);
          }),
          r && (i.imgData.cache[r] = s)),
        s
      );
    }),
    (i.imgData.cache = {}),
    (i.imgData.init = function (t) {
      var a = this;
      return (
        (a.eventObject = e("<div/>")),
        e(window).on("resize", function () {
          a.trigger("resize"),
            clearTimeout(a._resizestopdelay),
            (a._resizestopdelay = setTimeout(function () {
              a.trigger("resizestop");
            }, 100));
        }),
        e.merge(a, t)
      );
    }),
    (i.imgData.init.prototype = {
      length: 0,
      currentItem: 0,
      each: e.fn.each,
      get: function (t) {
        return arguments.length ? this[t] : e.merge([], this);
      },
      current: function (e) {
        var t, a;
        return (
          arguments.length
            ? ((a = this.currentItem),
              "next" === e ? a++ : "prev" === e ? a-- : (a = e),
              a === this.currentItem || a >= this.length || 0 > a
                ? (t = this)
                : ((this.currentItem = a), (t = this.trigger("change"))))
            : (t = this.get(this.currentItem)),
          t
        );
      },
      prev: function () {
        return this.get(this.currentItem - 1);
      },
      next: function () {
        return this.get(this.currentItem + 1);
      },
      first: function () {
        return this.get(0);
      },
      last: function () {
        return this.get(this.length - 1);
      },
      on: function (t, a) {
        return this.eventObject.on(t, e.proxy(a, this)), this;
      },
      off: function (t, a) {
        return (
          a
            ? this.eventObject.off(t, e.proxy(a, this))
            : this.eventObject.off(t),
          this
        );
      },
      trigger: function (e) {
        return this.eventObject.trigger(e), this;
      },
    }),
    (i.createMoveToTop = function (e) {
      return function (t, a) {
        var i = this[e],
          n = !!i.nextAll(":visible").insertBefore(i).length;
        return n && !a && this._trigger && this._trigger("focus", t), this;
      };
    }),
    t
  );
});
//@ sourceMappingURL=core.js.map
