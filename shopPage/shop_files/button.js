define("jquery/ui/widgets/button", [
  "jquery/ui/core",
  "jquery/ui/controlgroup",
  "jquery/ui/checkboxradio",
  "jquery/ui/keycode",
  "jquery/ui/widget",
], function (e) {
  return (
    (function (e, t) {
      return (
        e.widget("ui.button", {
          version: "1.12.1",
          defaultElement: "<button>",
          options: {
            classes: { "ui-button": "ui-corner-all" },
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: !0,
          },
          _getCreateOptions: function () {
            var e,
              t = this._super() || {};
            return (
              (this.isInput = this.element.is("input")),
              (e = this.element[0].disabled),
              null != e && (t.disabled = e),
              (this.originalLabel = this.isInput
                ? this.element.val()
                : this.element.html()),
              this.originalLabel && (t.label = this.originalLabel),
              t
            );
          },
          _create: function () {
            !this.option.showLabel & !this.options.icon &&
              (this.options.showLabel = !0),
              null == this.options.disabled &&
                (this.options.disabled = this.element[0].disabled || !1),
              (this.hasTitle = !!this.element.attr("title")),
              this.options.label &&
                this.options.label !== this.originalLabel &&
                (this.isInput
                  ? this.element.val(this.options.label)
                  : this.element.html(this.options.label)),
              this._addClass("ui-button", "ui-widget"),
              this._setOption("disabled", this.options.disabled),
              this._enhance(),
              this.element.is("a") &&
                this._on({
                  keyup: function (t) {
                    t.keyCode === e.ui.keyCode.SPACE &&
                      (t.preventDefault(),
                      this.element[0].click
                        ? this.element[0].click()
                        : this.element.trigger("click"));
                  },
                });
          },
          _enhance: function () {
            this.element.is("button") || this.element.attr("role", "button"),
              this.options.icon &&
                (this._updateIcon("icon", this.options.icon),
                this._updateTooltip());
          },
          _updateTooltip: function () {
            (this.title = this.element.attr("title")),
              this.options.showLabel ||
                this.title ||
                this.element.attr("title", this.options.label);
          },
          _updateIcon: function (t, a) {
            var i = "iconPosition" !== t,
              n = i ? this.options.iconPosition : a,
              r = "top" === n || "bottom" === n;
            this.icon
              ? i && this._removeClass(this.icon, null, this.options.icon)
              : ((this.icon = e("<span>")),
                this._addClass(this.icon, "ui-button-icon", "ui-icon"),
                this.options.showLabel ||
                  this._addClass("ui-button-icon-only")),
              i && this._addClass(this.icon, null, a),
              this._attachIcon(n),
              r
                ? (this._addClass(this.icon, null, "ui-widget-icon-block"),
                  this.iconSpace && this.iconSpace.remove())
                : (this.iconSpace ||
                    ((this.iconSpace = e("<span> </span>")),
                    this._addClass(this.iconSpace, "ui-button-icon-space")),
                  this._removeClass(this.icon, null, "ui-wiget-icon-block"),
                  this._attachIconSpace(n));
          },
          _destroy: function () {
            this.element.removeAttr("role"),
              this.icon && this.icon.remove(),
              this.iconSpace && this.iconSpace.remove(),
              this.hasTitle || this.element.removeAttr("title");
          },
          _attachIconSpace: function (e) {
            this.icon[/^(?:end|bottom)/.test(e) ? "before" : "after"](
              this.iconSpace
            );
          },
          _attachIcon: function (e) {
            this.element[/^(?:end|bottom)/.test(e) ? "append" : "prepend"](
              this.icon
            );
          },
          _setOptions: function (e) {
            var a = e.showLabel === t ? this.options.showLabel : e.showLabel,
              i = e.icon === t ? this.options.icon : e.icon;
            a || i || (e.showLabel = !0), this._super(e);
          },
          _setOption: function (e, t) {
            "icon" === e &&
              (t
                ? this._updateIcon(e, t)
                : this.icon &&
                  (this.icon.remove(),
                  this.iconSpace && this.iconSpace.remove())),
              "iconPosition" === e && this._updateIcon(e, t),
              "showLabel" === e &&
                (this._toggleClass("ui-button-icon-only", null, !t),
                this._updateTooltip()),
              "label" === e &&
                (this.isInput
                  ? this.element.val(t)
                  : (this.element.html(t),
                    this.icon &&
                      (this._attachIcon(this.options.iconPosition),
                      this._attachIconSpace(this.options.iconPosition)))),
              this._super(e, t),
              "disabled" === e &&
                (this._toggleClass(null, "ui-state-disabled", t),
                (this.element[0].disabled = t),
                t && this.element.blur());
          },
          refresh: function () {
            var e = this.element.is("input, button")
              ? this.element[0].disabled
              : this.element.hasClass("ui-button-disabled");
            e !== this.options.disabled && this._setOptions({ disabled: e }),
              this._updateTooltip();
          },
        }),
        e.uiBackCompat !== !1 &&
          (e.widget("ui.button", e.ui.button, {
            options: { text: !0, icons: { primary: null, secondary: null } },
            _create: function () {
              this.options.showLabel &&
                !this.options.text &&
                (this.options.showLabel = this.options.text),
                !this.options.showLabel &&
                  this.options.text &&
                  (this.options.text = this.options.showLabel),
                this.options.icon ||
                (!this.options.icons.primary && !this.options.icons.secondary)
                  ? this.options.icon &&
                    (this.options.icons.primary = this.options.icon)
                  : this.options.icons.primary
                  ? (this.options.icon = this.options.icons.primary)
                  : ((this.options.icon = this.options.icons.secondary),
                    (this.options.iconPosition = "end")),
                this._super();
            },
            _setOption: function (e, t) {
              return "text" === e
                ? (this._super("showLabel", t), void 0)
                : ("showLabel" === e && (this.options.text = t),
                  "icon" === e && (this.options.icons.primary = t),
                  "icons" === e &&
                    (t.primary
                      ? (this._super("icon", t.primary),
                        this._super("iconPosition", "beginning"))
                      : t.secondary &&
                        (this._super("icon", t.secondary),
                        this._super("iconPosition", "end"))),
                  this._superApply(arguments),
                  void 0);
            },
          }),
          (e.fn.button = (function (t) {
            return function () {
              return !this.length ||
                (this.length && "INPUT" !== this[0].tagName) ||
                (this.length &&
                  "INPUT" === this[0].tagName &&
                  "checkbox" !== this.attr("type") &&
                  "radio" !== this.attr("type"))
                ? t.apply(this, arguments)
                : (e.ui.checkboxradio ||
                    e.error("Checkboxradio widget missing"),
                  0 === arguments.length
                    ? this.checkboxradio({ icon: !1 })
                    : this.checkboxradio.apply(this, arguments));
            };
          })(e.fn.button)),
          (e.fn.buttonset = function () {
            return (
              e.ui.controlgroup || e.error("Controlgroup widget missing"),
              "option" === arguments[0] &&
              "items" === arguments[1] &&
              arguments[2]
                ? this.controlgroup.apply(this, [
                    arguments[0],
                    "items.button",
                    arguments[2],
                  ])
                : "option" === arguments[0] && "items" === arguments[1]
                ? this.controlgroup.apply(this, [arguments[0], "items.button"])
                : ("object" == typeof arguments[0] &&
                    arguments[0].items &&
                    (arguments[0].items = { button: arguments[0].items }),
                  this.controlgroup.apply(this, arguments))
            );
          })),
        e.ui.button
      );
    })(e),
    e
  );
});
//@ sourceMappingURL=button.js.map
