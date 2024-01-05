define("jquery/ui/safe-active-element", [
  "jquery",
  "jquery/ui/version",
], function (e) {
  return (
    (function (e) {
      return (e.ui.safeActiveElement = function (e) {
        var t;
        try {
          t = e.activeElement;
        } catch (n) {
          t = e.body;
        }
        return t || (t = e.body), t.nodeName || (t = e.body), t;
      });
    })(e),
    e
  );
});
//@ sourceMappingURL=safe-active-element.js.map
