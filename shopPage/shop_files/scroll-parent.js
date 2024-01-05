define("jquery/ui/scroll-parent", ["jquery", "jquery/ui/version"], function (
  e
) {
  return (
    (function (e) {
      return (e.fn.scrollParent = function (t) {
        var n = this.css("position"),
          a = "absolute" === n,
          i = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
          r = this.parents()
            .filter(function () {
              var t = e(this);
              return a && "static" === t.css("position")
                ? !1
                : i.test(
                    t.css("overflow") +
                      t.css("overflow-y") +
                      t.css("overflow-x")
                  );
            })
            .eq(0);
        return "fixed" !== n && r.length
          ? r
          : e(this[0].ownerDocument || document);
      });
    })(e),
    e
  );
});
//@ sourceMappingURL=scroll-parent.js.map
