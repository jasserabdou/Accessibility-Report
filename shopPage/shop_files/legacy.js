define("util/legacy", ["module", "jquery"], function (e, t) {
  var i = {
    changeSampleText: function (e, i) {
      var a,
        n,
        r = t("samp[title=" + i + "]");
      "string" == typeof e
        ? ((a = e), (n = e))
        : ((a = t(e).val()),
          (n = e.selectedIndex < 1 ? "" : e.options[e.selectedIndex].text)),
        r.length && r.html(n);
    },
    checkElement: function (e, i) {
      var a = "DialogError";
      e &&
        i &&
        t(e)["" === e.value && "" !== i.value ? "addClass" : "removeClass"](a);
    },
  };
  return i;
});
//@ sourceMappingURL=legacy.js.map
