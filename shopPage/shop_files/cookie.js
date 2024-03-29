!(function (e) {
  "function" == typeof define && define.amd
    ? define("jquery/cookie", ["jquery"], e)
    : e(jQuery);
})(function (e) {
  function t(e) {
    return r.raw ? e : encodeURIComponent(e);
  }
  function a(e) {
    return r.raw ? e : decodeURIComponent(e);
  }
  function i(e) {
    return t(r.json ? JSON.stringify(e) : String(e));
  }
  function n(e) {
    0 === e.indexOf('"') &&
      (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
    try {
      e = decodeURIComponent(e.replace(o, " "));
    } catch (t) {
      return;
    }
    try {
      return r.json ? JSON.parse(e) : e;
    } catch (t) {}
  }
  function l(t, a) {
    var i = r.raw ? t : n(t);
    return e.isFunction(a) ? a(i) : i;
  }
  var o = /\+/g,
    r = (e.cookie = function (n, o, s) {
      if (void 0 !== o && !e.isFunction(o)) {
        if (((s = e.extend({}, r.defaults, s)), "number" == typeof s.expires)) {
          var d = s.expires,
            c = (s.expires = new Date());
          c.setDate(c.getDate() + d);
        }
        return (document.cookie = [
          t(n),
          "=",
          i(o),
          s.expires ? "; expires=" + s.expires.toUTCString() : "",
          s.path ? "; path=" + s.path : "",
          s.domain ? "; domain=" + s.domain : "",
          s.secure ? "; secure" : "",
        ].join(""));
      }
      for (
        var u = n ? void 0 : {},
          m = document.cookie ? document.cookie.split("; ") : [],
          p = 0,
          h = m.length;
        h > p;
        p++
      ) {
        var g = m[p].split("="),
          b = a(g.shift()),
          f = g.join("=");
        if (n && n === b) {
          u = l(f, o);
          break;
        }
        n || void 0 === (f = l(f)) || (u[b] = f);
      }
      return u;
    });
  return (
    (r.defaults = {}),
    (e.removeCookie = function (t, a) {
      return void 0 !== e.cookie(t)
        ? (e.cookie(t, "", e.extend({}, a, { expires: -1 })), !0)
        : !1;
    }),
    e
  );
});
//@ sourceMappingURL=cookie.js.map
