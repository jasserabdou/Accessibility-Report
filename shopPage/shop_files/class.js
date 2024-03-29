define("class", ["jquery", "util/scope"], function (e, t, n) {
  function i() {}
  (i.prototype = {
    constructor: function () {},
    _proxy: function (t) {
      return "string" == typeof t ? e.proxy(this, t) : e.proxy(t, this);
    },
  }),
    (i.prototype.Proxy = i.prototype._proxy);
  var o = !1,
    r = function (t, n, i) {
      var o = !1,
        r = function (r, a) {
          "constructor" === r && (o = !0),
            (i[r] =
              e.isFunction(a) && e.isFunction(n[r])
                ? (function () {
                    var e = function () {
                        return n[r].apply(this, arguments);
                      },
                      t = function (e) {
                        return n[r].apply(this, e);
                      };
                    return function () {
                      var n,
                        i = this._super,
                        o = this._superApply;
                      return (
                        (this._super = e),
                        (this._superApply = t),
                        (this.Inherited = t),
                        (n = a.apply(this, arguments)),
                        (this._super = i),
                        (this._superApply = o),
                        (this.Inherited = o),
                        n
                      );
                    };
                  })()
                : t[r]);
        };
      return (
        e.each(t, r),
        !o &&
          t.hasOwnProperty("constructor") &&
          r("constructor", t.constructor),
        i
      );
    },
    a = function (i, a, s, l) {
      if (s.Constructor) {
        var c = s.Constructor;
        (s.constructor = function () {
          return this._superApply(arguments), c.apply(this, arguments);
        }),
          (s.Constructor = n);
      }
      var d = i.split(/\./),
        u = i,
        h = d.pop(),
        m = d.join("."),
        f = (t(m, l)[h] = function () {
          return o ? void 0 : this.constructor.apply(this, arguments);
        });
      return (
        (o = !0),
        (f.prototype = new a()),
        (o = !1),
        (f.prototype = r(s, a.prototype, f.prototype)),
        (f.prototype[".class"] = e.extend(f, {
          constructor: f,
          prototype: f.prototype,
          fullName: u,
          shortName: h,
          _super: a.prototype,
        })),
        f
      );
    },
    s = {},
    l = 0,
    c = function (t, n, o) {
      var r = window;
      if (
        ("string" != typeof t &&
          ((o = n), (n = t), (t = "local" + l++ + ".Class"), (r = s)),
        o)
      ) {
        if (e.isArray(n)) {
          for (var c, d, u = n.shift(), h = 0, m = n.length; m > h; h++)
            (d = "multi" + l++ + ".Class"),
              (c = n.shift().prototype),
              (u = a(d, u, c, s)),
              (u.fullName = c[".class"].fullName),
              (u.shortName = c[".class"].shortName);
          return a(t, u, o, r);
        }
        return a(t, n, o, r);
      }
      return a(t, i, n);
    };
  return (
    (c.isClass = function (t, n) {
      return (
        e.isFunction(t) &&
        !e.isEmptyObject(t.prototype) &&
        (n ? !!t.prototype[".class"] : !0)
      );
    }),
    c
  );
});
//@ sourceMappingURL=class.js.map
