define("jquery/ui/form", ["jquery", "jquery/ui/version"], function (e) {
  return (
    (function (e) {
      return (e.fn.form = function () {
        return "string" == typeof this[0].form
          ? this.closest("form")
          : e(this[0].form);
      });
    })(e),
    e
  );
});
//@ sourceMappingURL=form.js.map
