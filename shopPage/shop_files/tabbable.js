define("jquery/ui/tabbable", [
  "jquery",
  "jquery/ui/focusable",
  "jquery/ui/version",
], function (e) {
  return (
    (function (e) {
      return e.extend(e.expr[":"], {
        tabbable: function (t) {
          var n = e.attr(t, "tabindex"),
            a = null != n;
          return (!a || n >= 0) && e.ui.focusable(t, a);
        },
      });
    })(e),
    e
  );
});
//@ sourceMappingURL=tabbable.js.map
