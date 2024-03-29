define("$tmpl", ["jquery", "ep", "jquery/tmpl"], function (e, t) {
  function n(t) {
    return function (n, i) {
      return e.tmpl(t, n, i);
    };
  }
  return (
    void 0 === t.config.allowCORS &&
      e.ajaxPrefilter(function (e) {
        return e.crossDomain && e.dataTypeCrossDomain;
      }),
    {
      normalize: function (e, t) {
        return t(e, "", !0).replace(/(\.tmpl\.html)$/, "");
      },
      load: function (i, a, r) {
        var s;
        e.template[i]
          ? r(n(i))
          : ((s = {
              url: a.toUrl(i + ".tmpl.html"),
              cache: !0,
              dataType: "text",
            }),
            void 0 === t.config.allowCORS &&
              e.extend(s, {
                dataTypeCrossDomain: "jsonp",
                jsonpCallback: encodeURIComponent(i),
              }),
            e.ajax(s).done(function (t) {
              var a = e.template(i, t);
              (e.template[i.replace(/\//g, ".")] = a), r(n(i));
            }));
      },
    }
  );
});
//@ sourceMappingURL=$tmpl.js.map
