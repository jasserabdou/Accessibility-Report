var btoa = void 0,
  atob = void 0;
define("util/base64", ["util/utf8", "util/json"], function (e, t) {
  var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    a = {
      encode: function (e, i) {
        return btoa(i ? e + "" : t.encode(e));
      },
      decode: function (e, i) {
        var a = atob(e);
        return i ? a : t.decode(a);
      },
    };
  return (
    "function" != typeof btoa &&
      (btoa = function (t) {
        t = e.encode(t + "");
        for (var a, n, r, o, s, l, d, c = "", u = 0; u < t.length; )
          (a = t.charCodeAt(u++)),
            (n = t.charCodeAt(u++)),
            (r = t.charCodeAt(u++)),
            (o = a >> 2),
            (s = ((3 & a) << 4) | (n >> 4)),
            (l = ((15 & n) << 2) | (r >> 6)),
            (d = 63 & r),
            isNaN(n) ? (l = d = 64) : isNaN(r) && (d = 64),
            (c = c + i.charAt(o) + i.charAt(s) + i.charAt(l) + i.charAt(d));
        return c;
      }),
    "function" != typeof atob &&
      (atob = function (t) {
        t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        for (var a, n, r, o, s, l, d, c = "", u = 0; u < t.length; )
          (o = i.indexOf(t.charAt(u++))),
            (s = i.indexOf(t.charAt(u++))),
            (l = i.indexOf(t.charAt(u++))),
            (d = i.indexOf(t.charAt(u++))),
            (a = (o << 2) | (s >> 4)),
            (n = ((15 & s) << 4) | (l >> 2)),
            (r = ((3 & l) << 6) | d),
            (c += String.fromCharCode(a)),
            64 !== l && (c += String.fromCharCode(n)),
            64 !== d && (c += String.fromCharCode(r));
        return e.decode(c);
      }),
    a
  );
});
//@ sourceMappingURL=base64.js.map
