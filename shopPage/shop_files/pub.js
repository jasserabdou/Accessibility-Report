define("$pub", [], function () {
  var e,
    t = {
      pending: function (e, t) {
        var n = e.split("!"),
          i = n[1] || n[0],
          a = this.pending[i];
        return "undefined" != typeof t && (this.pending[i] = t), a;
      },
      normalize: function (t, n) {
        return n && !e && (e = n), t;
      },
      load: function (e, t, n, i) {
        (i.waitSeconds = 0), this.pending(e, n);
      },
    },
    n = define,
    i = Object.prototype.toString;
  define = function (a, r, s) {
    var o;
    /!/.test(a) &&
    e &&
    "$pub" === e(a.split("!")[0], a, !0) &&
    (o = t.pending(a, !1))
      ? ("[object Array]" !== i.call(r) && ((s = r), (r = [])),
        require(r, function () {
          o("function" == typeof s ? s.apply(this, arguments) : s);
        }))
      : n.apply(n, arguments);
  };
  for (var a in n) define[a] = n[a];
  return t;
});
//@ sourceMappingURL=$pub.js.map
