define("jquery/ui/safe-blur", ["jquery", "jquery/ui/version"], function (e) {
  return (
    (function (e) {
      return (e.ui.safeBlur = function (t) {
        t && "body" !== t.nodeName.toLowerCase() && e(t).trigger("blur");
      });
    })(e),
    e
  );
});
//@ sourceMappingURL=safe-blur.js.map
