define("jquery/ui/focusable", ["jquery", "jquery/ui/version"], function (e) {
  return (
    (function (e) {
      function t(e) {
        for (var t = e.css("visibility"); "inherit" === t; )
          (e = e.parent()), (t = e.css("visibility"));
        return "hidden" !== t;
      }
      return (
        (e.ui.focusable = function (n, a) {
          var i,
            r,
            s,
            o,
            l,
            d = n.nodeName.toLowerCase();
          return "area" === d
            ? ((i = n.parentNode),
              (r = i.name),
              n.href && r && "map" === i.nodeName.toLowerCase()
                ? ((s = e("img[usemap='#" + r + "']")),
                  s.length > 0 && s.is(":visible"))
                : !1)
            : (/^(input|select|textarea|button|object)$/.test(d)
                ? ((o = !n.disabled),
                  o &&
                    ((l = e(n).closest("fieldset")[0]), l && (o = !l.disabled)))
                : (o = "a" === d ? n.href || a : a),
              o && e(n).is(":visible") && t(e(n)));
        }),
        e.extend(e.expr[":"], {
          focusable: function (t) {
            return e.ui.focusable(t, null != e.attr(t, "tabindex"));
          },
        }),
        e.ui.focusable
      );
    })(e),
    e
  );
});
//@ sourceMappingURL=focusable.js.map
