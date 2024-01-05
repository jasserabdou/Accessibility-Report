define("util/string", ["module", "jquery"], function (e, t) {
  var i = /(.)/g,
    a = /([\.$?*|{}\(\)\[\]\\\/\+\^])/g,
    n = /<.[^<>]*?>/g,
    r = / /,
    o = /&/g,
    s = [/(<|>|")/g, /(<|>|')/g, /(<|>|'|")/g],
    l = { "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" },
    d = function (e, t) {
      return l[t];
    },
    c = {
      config: t.extend(
        !0,
        { shrink: { length: 50, ratio: 1, cut: !0, spacer: "..." } },
        e.config()
      ),
      reverse: function (e) {
        var t = "";
        return (
          (e + "").replace(i, function (e) {
            t = e + t;
          }),
          t
        );
      },
      escExpStr: function (e, t) {
        return e.replace(a, function (e) {
          return t && -1 !== t.indexOf(e) ? e : "\\" + e;
        });
      },
      stripTags: function (e) {
        return e.replace(n, " ");
      },
      htmlspecialchars: function (e, t) {
        return e.replace(o, "&amp;").replace(s[t || 0], d);
      },
      shrink: function (e, i) {
        var a = t.extend({}, c.config.shrink, isNaN(i) ? i : { length: i }),
          n = e.length,
          o = a.length - a.spacer.length,
          s = "";
        return n <= a.length
          ? e
          : 0 === a.ratio
          ? ((s = e.substr(n - o, o)),
            a.spacer +
              (a.cut || " " === e.charAt(n - o)
                ? s
                : r.test(s)
                ? s.substr(s.indexOf(" ") + 1)
                : ""))
          : 1 === a.ratio
          ? ((s = e.substr(0, o)),
            (a.cut || " " === e.charAt(n)
              ? s
              : r.test(s)
              ? s.substr(0, s.lastIndexOf(" "))
              : "") + a.spacer)
          : ((s = this.shrink(e, {
              length: Math.floor(o * a.ratio),
              ratio: 1,
              cut: a.cut,
              spacer: "",
            })),
            s +
              this.shrink(e, {
                length: a.length - s.length + a.spacer.length,
                ratio: 0,
                cut: a.cut,
                spacer: a.spacer,
              }));
      },
    };
  return c;
});
//@ sourceMappingURL=string.js.map
