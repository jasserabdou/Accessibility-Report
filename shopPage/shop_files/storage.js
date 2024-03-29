define("util/storage", [
  "module",
  "util/json",
  "jquery",
  "jquery/cookie",
], function (e, t, i) {
  var a = this,
    n = { local: !1, session: !1 },
    r = { config: i.extend({ namespace: "" }, e.config()) };
  return (
    i.each(["local", "session"], function (e, o) {
      var s = o + "Storage";
      try {
        n[o] = a[s] && a[s].setItem;
      } catch (l) {}
      (r[o + "Storage"] = function (e, l) {
        if (((e = r.config.namespace + e), void 0 === l)) {
          var d = n[o] ? a[s].getItem(e) : i.cookie(o + ":" + e);
          return void 0 === d || null === d ? null : t.decode(d);
        }
        return null === l
          ? (n[o]
              ? a[s].removeItem(e)
              : i.cookie(o + ":" + e, null, {
                  path: "/",
                  domain: document.domain,
                  expires: -365,
                }),
            this)
          : ((l = t.encode(l)),
            n[o]
              ? a[s].setItem(e, l)
              : i.cookie(o + ":" + e, l, {
                  path: "/",
                  domain: document.domain,
                  expires: "localStorage" === o ? 365 : void 0,
                }),
            this);
      }),
        (r[o + "Clear"] = function (e) {
          var t = new RegExp(
            "^" + (n[o] ? "" : o + ":") + (e ? "" : r.config.namespace),
            ""
          );
          if (n[o])
            if (e) a[s].clear();
            else for (var l in a[s]) t.test(l) && a[s].removeItem(l);
          else
            document.cookie &&
              "" !== document.cookie &&
              i.each(document.cookie.split(";"), function (e, a) {
                t.test((a = i.trim(a))) &&
                  i.cookie(a.substr(0, a.indexOf("=")), null, {
                    path: "/",
                    domain: document.domain,
                    expires: -365,
                  });
              });
          return this;
        });
    }),
    r
  );
});
//@ sourceMappingURL=storage.js.map
