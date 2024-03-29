define("util/browser", ["jquery"], function (e) {
  var t = function (e) {
      e = e.toLowerCase();
      var t =
        /(chrome)[ \/]([\w.]+)/.exec(e) ||
        /(webkit)[ \/]([\w.]+)/.exec(e) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) ||
        /(msie) ([\w.]+)/.exec(e) ||
        (e.indexOf("compatible") < 0 &&
          /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)) ||
        [];
      return { browser: t[1] || "", version: t[2] || "0" };
    },
    i = function (e) {
      var t = e.indexOf("MSIE ");
      if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
      var i = e.indexOf("Trident/");
      if (i > 0) {
        var a = e.indexOf("rv:");
        return parseInt(e.substring(a + 3, e.indexOf(".", a)), 10);
      }
      var n = e.indexOf("Edge/");
      return n > 0 ? parseInt(e.substring(n + 5, e.indexOf(".", n)), 10) : !1;
    };
  if (!e.browser) {
    var a = i(navigator.userAgent),
      n = t(navigator.userAgent),
      r = {};
    a && (n = { browser: "msie", version: a }),
      n.browser && ((r[n.browser] = !0), (r.version = n.version)),
      r.chrome ? (r.webkit = !0) : r.webkit && (r.safari = !0),
      (e.browser = r);
  }
});
//@ sourceMappingURL=browser.js.map
