define("jquery/ui/plugin", ["jquery", "jquery/ui/version"], function (e) {
  return (
    (function (e) {
      return (e.ui.plugin = {
        add: function (t, n, a) {
          var i,
            r = e.ui[t].prototype;
          for (i in a)
            (r.plugins[i] = r.plugins[i] || []), r.plugins[i].push([n, a[i]]);
        },
        call: function (e, t, n, a) {
          var i,
            r = e.plugins[t];
          if (
            r &&
            (a ||
              (e.element[0].parentNode &&
                11 !== e.element[0].parentNode.nodeType))
          )
            for (i = 0; i < r.length; i++)
              e.options[r[i][0]] && r[i][1].apply(e.element, n);
        },
      });
    })(e),
    e
  );
});
//@ sourceMappingURL=plugin.js.map
