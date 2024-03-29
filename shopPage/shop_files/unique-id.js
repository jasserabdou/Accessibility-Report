define("jquery/ui/unique-id", ["jquery", "jquery/ui/version"], function (e) {
  return (
    (function (e) {
      return e.fn.extend({
        uniqueId: (function () {
          var e = 0;
          return function () {
            return this.each(function () {
              this.id || (this.id = "ui-id-" + ++e);
            });
          };
        })(),
        removeUniqueId: function () {
          return this.each(function () {
            /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id");
          });
        },
      });
    })(e),
    e
  );
});
//@ sourceMappingURL=unique-id.js.map
