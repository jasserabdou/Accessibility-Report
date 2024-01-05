define("util/tools", ["module", "jquery"], function (e, t) {
  var i = {
    isJQueryElement: function (e) {
      return e && e instanceof jQuery && !!e[0] && !!e[0].tagName;
    },
    isValidSelector: function (e) {
      if ("string" != typeof e) return !1;
      try {
        t(e);
      } catch (i) {
        return !1;
      }
      return !0;
    },
  };
  return i;
});
//@ sourceMappingURL=tools.js.map
