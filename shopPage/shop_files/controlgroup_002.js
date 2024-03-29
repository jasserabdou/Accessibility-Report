define("jquery/ui/widgets/controlgroup", [
  "jquery/ui/core",
  "jquery/ui/widget",
], function (e) {
  return (
    (function (e) {
      var t = /ui-corner-([a-z]){2,6}/g;
      return e.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
          direction: "horizontal",
          disabled: null,
          onlyVisible: !0,
          items: {
            button:
              "input[type=button], input[type=submit], input[type=reset], button, a",
            controlgroupLabel: ".ui-controlgroup-label",
            checkboxradio: "input[type='checkbox'], input[type='radio']",
            selectmenu: "select",
            spinner: ".ui-spinner-input",
          },
        },
        _create: function () {
          this._enhance();
        },
        _enhance: function () {
          this.element.attr("role", "toolbar"), this.refresh();
        },
        _destroy: function () {
          this._callChildMethod("destroy"),
            this.childWidgets.removeData("ui-controlgroup-data"),
            this.element.removeAttr("role"),
            this.options.items.controlgroupLabel &&
              this.element
                .find(this.options.items.controlgroupLabel)
                .find(".ui-controlgroup-label-contents")
                .contents()
                .unwrap();
        },
        _initWidgets: function () {
          var t = this,
            a = [];
          e.each(this.options.items, function (i, n) {
            var r,
              o = {};
            return n
              ? "controlgroupLabel" === i
                ? ((r = t.element.find(n)),
                  r.each(function () {
                    var t = e(this);
                    t.children(".ui-controlgroup-label-contents").length ||
                      t
                        .contents()
                        .wrapAll(
                          "<span class='ui-controlgroup-label-contents'></span>"
                        );
                  }),
                  t._addClass(
                    r,
                    null,
                    "ui-widget ui-widget-content ui-state-default"
                  ),
                  (a = a.concat(r.get())),
                  void 0)
                : (e.fn[i] &&
                    ((o = t["_" + i + "Options"]
                      ? t["_" + i + "Options"]("middle")
                      : { classes: {} }),
                    t.element.find(n).each(function () {
                      var n = e(this),
                        r = n[i]("instance"),
                        l = e.widget.extend({}, o);
                      if ("button" !== i || !n.parent(".ui-spinner").length) {
                        r || (r = n[i]()[i]("instance")),
                          r &&
                            (l.classes = t._resolveClassesValues(l.classes, r)),
                          n[i](l);
                        var s = n[i]("widget");
                        e.data(
                          s[0],
                          "ui-controlgroup-data",
                          r ? r : n[i]("instance")
                        ),
                          a.push(s[0]);
                      }
                    })),
                  void 0)
              : void 0;
          }),
            (this.childWidgets = e(e.unique(a))),
            this._addClass(this.childWidgets, "ui-controlgroup-item");
        },
        _callChildMethod: function (t) {
          this.childWidgets.each(function () {
            var a = e(this),
              i = a.data("ui-controlgroup-data");
            i && i[t] && i[t]();
          });
        },
        _updateCornerClass: function (e, t) {
          var a =
              "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",
            i = this._buildSimpleOptions(t, "label").classes.label;
          this._removeClass(e, null, a), this._addClass(e, null, i);
        },
        _buildSimpleOptions: function (e, t) {
          var a = "vertical" === this.options.direction,
            i = { classes: {} };
          return (
            (i.classes[t] = {
              middle: "",
              first: "ui-corner-" + (a ? "top" : "left"),
              last: "ui-corner-" + (a ? "bottom" : "right"),
              only: "ui-corner-all",
            }[e]),
            i
          );
        },
        _spinnerOptions: function (e) {
          var t = this._buildSimpleOptions(e, "ui-spinner");
          return (
            (t.classes["ui-spinner-up"] = ""),
            (t.classes["ui-spinner-down"] = ""),
            t
          );
        },
        _buttonOptions: function (e) {
          return this._buildSimpleOptions(e, "ui-button");
        },
        _checkboxradioOptions: function (e) {
          return this._buildSimpleOptions(e, "ui-checkboxradio-label");
        },
        _selectmenuOptions: function (e) {
          var t = "vertical" === this.options.direction;
          return {
            width: t ? "auto" : !1,
            classes: {
              middle: {
                "ui-selectmenu-button-open": "",
                "ui-selectmenu-button-closed": "",
              },
              first: {
                "ui-selectmenu-button-open": "ui-corner-" + (t ? "top" : "tl"),
                "ui-selectmenu-button-closed":
                  "ui-corner-" + (t ? "top" : "left"),
              },
              last: {
                "ui-selectmenu-button-open": t ? "" : "ui-corner-tr",
                "ui-selectmenu-button-closed":
                  "ui-corner-" + (t ? "bottom" : "right"),
              },
              only: {
                "ui-selectmenu-button-open": "ui-corner-top",
                "ui-selectmenu-button-closed": "ui-corner-all",
              },
            }[e],
          };
        },
        _resolveClassesValues: function (a, i) {
          var n = {};
          return (
            e.each(a, function (r) {
              var o = i.options.classes[r] || "";
              (o = e.trim(o.replace(t, ""))),
                (n[r] = (o + " " + a[r]).replace(/\s+/g, " "));
            }),
            n
          );
        },
        _setOption: function (e, t) {
          return (
            "direction" === e &&
              this._removeClass("ui-controlgroup-" + this.options.direction),
            this._super(e, t),
            "disabled" === e
              ? (this._callChildMethod(t ? "disable" : "enable"), void 0)
              : (this.refresh(), void 0)
          );
        },
        refresh: function () {
          var t,
            a = this;
          this._addClass(
            "ui-controlgroup ui-controlgroup-" + this.options.direction
          ),
            "horizontal" === this.options.direction &&
              this._addClass(null, "ui-helper-clearfix"),
            this._initWidgets(),
            (t = this.childWidgets),
            this.options.onlyVisible && (t = t.filter(":visible")),
            t.length &&
              (e.each(["first", "last"], function (e, i) {
                var n = t[i]().data("ui-controlgroup-data");
                if (n && a["_" + n.widgetName + "Options"]) {
                  var r = a["_" + n.widgetName + "Options"](
                    1 === t.length ? "only" : i
                  );
                  (r.classes = a._resolveClassesValues(r.classes, n)),
                    n.element[n.widgetName](r);
                } else a._updateCornerClass(t[i](), i);
              }),
              this._callChildMethod("refresh"));
        },
      });
    })(e),
    e
  );
});
//@ sourceMappingURL=controlgroup.js.map
