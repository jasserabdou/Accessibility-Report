define("jquery/ui/escape-selector", ["jquery", "jquery/ui/version"], function (
  e
) {
  return (
    (function (e) {
      return (e.ui.escapeSelector = (function () {
        var e = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
        return function (t) {
          return t.replace(e, "\\$1");
        };
      })());
    })(e),
    e
  );
});
//@ sourceMappingURL=escape-selector.js.map
