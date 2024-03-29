define("$tmpl!ep/ui/simpledialog", ["jquery/tmpl"], function (e) {
  e.template(
    "ep.ui.simpledialog",
    '<div class="ep-uiSimpledialog ep-uiSimpledialog-${layout} ui-front" {{elem \'dialog\'}}><div class="ep-uiSimpledialog-head"><span class="ep-handle"></span><span class="ep-uiSimpledialog-close" {{elem \'closeButton\'}}>x</span></div><div class="ep-uiSimpledialog-content" {{elem \'content\'}}></div></div>'
  );
  var t = e.template(
    "ep/ui/simpledialog",
    '<div class="ep-uiSimpledialog ep-uiSimpledialog-${layout} ui-front" {{elem \'dialog\'}}><div class="ep-uiSimpledialog-head"><span class="ep-handle"></span><span class="ep-uiSimpledialog-close" {{elem \'closeButton\'}}>x</span></div><div class="ep-uiSimpledialog-content" {{elem \'content\'}}></div></div>'
  );
  return function (a, i) {
    return e.tmpl(t, a, i);
  };
}),
  define(
    "ep/ui/simpledialog",
    [
      "jquery",
      "ep",
      "$tmpl!ep/ui/simpledialog",
      "jquery/ui/widget",
      "jquery/ui/draggable",
      "ep/ui/input",
      "ep/fn/contextorientation",
    ],
    function (e, t, a) {
      "use strict";
      var i = e("html");
      return (
        e.widget("ui.uiSimpledialog", {
          options: {
            autoOpen: !1,
            orientation: "bottom",
            orientationAdjust: [0, 0],
            layout: "base",
          },
          _create: function () {
            var t = this;
            t.options, t.element.on("click.uiSimpledialog", e.proxy(t, "open"));
          },
          _init: function () {
            var e = this,
              t = e.options;
            t.autoOpen && e.open();
          },
          _build: function () {
            if (!this.dialog) {
              var t = this,
                i = t.options;
              e.extend(t, a([i]).tmplItem("elements")),
                t.dialog
                  .hide()
                  .appendTo("body")
                  .draggable({
                    containment: "window",
                    handle: ".ep-uiSimpledialog-head",
                  }),
                t._setOptions(i),
                t.closeButton.on("click", e.proxy(t, "close"));
            }
          },
          _setOption: function (a, i) {
            var n = this;
            switch ((n.options, a)) {
              case "zIndex":
                n.dialog.css("z-index", i);
                break;
              case "content":
                n.content.empty(), n.content.append(i);
                break;
              case "buttons":
                n.buttons && (n.buttons.remove(), (n.buttons = null)),
                  e.isArray(i) &&
                    ((n.buttons = e(
                      '<div class="ep-uiSimpledialog-buttons"></div>'
                    ).appendTo(n.dialog)),
                    e.each(i, function (e, a) {
                      t('<button type="button" class="ep-button"></button>')
                        .text(a.text)
                        .on("click", a.callback)
                        .uiInput()
                        .appendTo(n.buttons);
                    }));
            }
            n._superApply(arguments);
          },
          open: function (t) {
            var a = this,
              n = a.options,
              t = t ? t : a.element;
            a._build(),
              a.dialog
                .show()
                .contextOrientation(t, n.orientation, n.orientationAdjust),
              setTimeout(function () {
                i.on("click.uiSimpledialog", e.proxy(a, "_close"));
              }, 1),
              a.element.trigger("open");
          },
          close: function () {
            var t = this;
            t.dialog &&
              (t.dialog.hide(),
              i.off("click.uiSimpledialog", e.proxy(t, "_close")),
              t.element.trigger("close"));
          },
          _close: function (t) {
            var a = this,
              i = a.element,
              n = e(t.originalTarget || t.target);
            e.contains(i[0], n[0]) ||
              n[0] === i[0] ||
              n.is(".ep-uiSimpledialog, .ep-uiSimpledialog *") ||
              n.hasClass("ColorBox") ||
              a.close();
          },
          destroy: function () {
            this.close(),
              this.element.off("click.uiSimpledialog"),
              this.dialog && this.dialog.remove(),
              this._superApply(arguments);
          },
        }),
        t
      );
    }
  );
//@ sourceMappingURL=simpledialog.js.map
