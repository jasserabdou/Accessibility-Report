define("jquery/ui/form-reset-mixin", [
  "jquery",
  "jquery/ui/form",
  "jquery/ui/version",
], function (e) {
  return (
    (function (e) {
      return (e.ui.formResetMixin = {
        _formResetHandler: function () {
          var t = e(this);
          setTimeout(function () {
            var a = t.data("ui-form-reset-instances");
            e.each(a, function () {
              this.refresh();
            });
          });
        },
        _bindFormResetHandler: function () {
          if (((this.form = this.element.form()), this.form.length)) {
            var e = this.form.data("ui-form-reset-instances") || [];
            e.length ||
              this.form.on("reset.ui-form-reset", this._formResetHandler),
              e.push(this),
              this.form.data("ui-form-reset-instances", e);
          }
        },
        _unbindFormResetHandler: function () {
          if (this.form.length) {
            var t = this.form.data("ui-form-reset-instances");
            t.splice(e.inArray(this, t), 1),
              t.length
                ? this.form.data("ui-form-reset-instances", t)
                : this.form
                    .removeData("ui-form-reset-instances")
                    .off("reset.ui-form-reset");
          }
        },
      });
    })(e),
    e
  );
});
//@ sourceMappingURL=form-reset-mixin.js.map
