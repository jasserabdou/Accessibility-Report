define("jquery/ui/data", ["jquery", "jquery/ui/version"], function (e) {
  return (
    (function (e) {
      return e.extend(e.expr[":"], {
        data: e.expr.createPseudo
          ? e.expr.createPseudo(function (t) {
              return function (n) {
                return !!e.data(n, t);
              };
            })
          : function (t, n, a) {
              return !!e.data(t, a[3]);
            },
      });
    })(e),
    e
  );
});
//@ sourceMappingURL=data.js.map
