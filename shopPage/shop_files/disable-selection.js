define("jquery/ui/disable-selection", [
  "jquery",
  "jquery/ui/version",
], function (e) {
  return (
    (function (e) {
      return e.fn.extend({
        disableSelection: (function () {
          var e =
            "onselectstart" in document.createElement("div")
              ? "selectstart"
              : "mousedown";
          return function () {
            return this.on(e + ".ui-disableSelection", function (e) {
              e.preventDefault();
            });
          };
        })(),
        enableSelection: function () {
          return this.off(".ui-disableSelection");
        },
      });
    })(e),
    e
  );
});
//@ sourceMappingURL=disable-selection.js.map
