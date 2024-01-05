define("jquery/ui/jquery-1-7", ["jquery", "jquery/ui/version"], function (e) {
  return (
    (function (e, t) {
      "1.7" === e.fn.jquery.substring(0, 3) &&
        (e.each(["Width", "Height"], function (a, i) {
          function n(t, a, i, n) {
            return (
              e.each(r, function () {
                (a -= parseFloat(e.css(t, "padding" + this)) || 0),
                  i &&
                    (a -= parseFloat(e.css(t, "border" + this + "Width")) || 0),
                  n && (a -= parseFloat(e.css(t, "margin" + this)) || 0);
              }),
              a
            );
          }
          var r = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            o = i.toLowerCase(),
            l = {
              innerWidth: e.fn.innerWidth,
              innerHeight: e.fn.innerHeight,
              outerWidth: e.fn.outerWidth,
              outerHeight: e.fn.outerHeight,
            };
          (e.fn["inner" + i] = function (a) {
            return a === t
              ? l["inner" + i].call(this)
              : this.each(function () {
                  e(this).css(o, n(this, a) + "px");
                });
          }),
            (e.fn["outer" + i] = function (t, a) {
              return "number" != typeof t
                ? l["outer" + i].call(this, t)
                : this.each(function () {
                    e(this).css(o, n(this, t, !0, a) + "px");
                  });
            });
        }),
        (e.fn.addBack = function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        }));
    })(e),
    e
  );
});
//@ sourceMappingURL=jquery-1-7.js.map
