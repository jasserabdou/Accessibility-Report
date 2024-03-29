define("$dict", ["jquery", "ep", "jquery/dict"], function (e, t) {
  void 0 === t.config.allowCORS &&
    e.ajaxPrefilter(function (e) {
      return e.crossDomain && e.dataTypeCrossDomain;
    });
  var a =
      /^(?:[^#|\?]*?)\.((?:[a-z]{2})(?:(?:(?:\-[A-Z][a-z]{1,3})?\-[A-Z]{2})?))(?:[^\/\w]|$)/,
    i = /\.((?:[a-z]{2})(?:(?:(?:\-[A-Z][a-z]{1,3})?\-[A-Z]{2})?))$/,
    n = function (t) {
      return !(!e.dict[t.region] || !e.dict[t.region][t.name]);
    };
  return {
    info: function (t) {
      var n,
        r,
        o,
        l = this.info[t];
      return (
        l ||
          (require.jsExtRegExp.test(t)
            ? ((r = (r = a.exec(t)) && r[1]),
              (o = t +=
                r
                  ? ""
                  : (-1 === t.indexOf("?") ? "?" : "&") +
                    "region=" +
                    (r = e.dictSettings.region)),
              (n = t.replace(a, "")))
            : ((r = (r = i.exec(t)) && r[1]),
              (o = (t += r ? "" : "." + (r = e.dictSettings.region)) + ".json"),
              (n = t.replace(i, ""))),
          (l =
            this.info[t] ||
            (this.info[t] = { name: n, id: t, region: r, url: o }))),
        l
      );
    },
    normalize: function (e, t) {
      return this.info(t(e, "", !0)).id;
    },
    load: function (a, i, r) {
      var o,
        l = this,
        s = l.info(a);
      n(s)
        ? r(e.dict(s.name, { region: s.region }))
        : ((o = { url: i.toUrl(s.url), cache: !0, dataType: "json" }),
          void 0 === t.config.allowCORS &&
            e.extend(o, {
              dataTypeCrossDomain: "jsonp",
              jsonpCallback: encodeURIComponent(s.name),
            }),
          e.ajax(o).done(function (t) {
            if (t instanceof Array) {
              var a = [];
              if (
                (e.each(t, function (e, t) {
                  if ("string" == typeof t) {
                    var r = l.info(t + "." + s.region);
                    n(r) ||
                      i.defined(r.id) ||
                      i.specified(r.id) ||
                      a.push("$dict!" + r.id);
                  }
                }),
                a.length)
              )
                return require(a, function () {
                  r(e.dictionary(s.name, t, s.region));
                });
            } else t = [t];
            e.dictionary(s.name.replace(/\//g, "."), t, s.region),
              r(e.dictionary(s.name, t, s.region));
          }));
    },
  };
});
//@ sourceMappingURL=$dict.js.map
