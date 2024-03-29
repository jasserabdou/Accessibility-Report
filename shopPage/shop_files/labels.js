define("jquery/ui/label", [
  "jquery",
  "jquery/ui/version",
  "jquery/ui/escape-selector",
], function (e) {
  return (
    (function (e) {
      return (e.fn.labels = function () {
        var t, n, a, i, r;
        return this[0].labels && this[0].labels.length
          ? this.pushStack(this[0].labels)
          : ((i = this.eq(0).parents("label")),
            (a = this.attr("id")),
            a &&
              ((t = this.eq(0).parents().last()),
              (r = t.add(t.length ? t.siblings() : this.siblings())),
              (n = "label[for='" + e.ui.escapeSelector(a) + "']"),
              (i = i.add(r.find(n).addBack(n)))),
            this.pushStack(i));
      });
    })(e),
    e
  );
});
//@ sourceMappingURL=labels.js.map
