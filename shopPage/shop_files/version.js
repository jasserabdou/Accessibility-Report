define("util/version", ["module", "jquery"], function (e, t) {
  var n = /(\d+)\s*([a-z]+)(\.?)/gi,
    i = /,/g,
    a = / /g,
    r = /(\D|^$)/,
    s = function (e) {
      return (e + "")
        .toLowerCase()
        .replace(n, function (e, t, n, i) {
          return t + "." + n + i;
        })
        .replace(i, ".")
        .replace(a, "")
        .split(".");
    },
    o = function (e) {
      return parseInt(r.test(e) ? l.config[e] || 0 : e, 10);
    },
    l = {
      config: t.extend(
        { alpha: -10, a: -10, beta: -8, b: -8, release: -2, r: -2, rc: -4 },
        e.config()
      ),
      compare: function (e, t) {
        for (
          var n, i, a = s(e), r = s(t), l = Math.max(a.length, r.length), u = 0;
          l > u && ((n = o(a[u])), (i = o(r[u])), n === i);
          u++
        );
        return n > i ? 1 : n === i ? 0 : -1;
      },
    };
  return l;
});
//@ sourceMappingURL=version.js.map
