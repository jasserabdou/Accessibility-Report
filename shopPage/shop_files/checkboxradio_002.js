define("jquery/ui/widgets/checkboxradio", [
  "jquery/ui/core",
  "jquery/ui/escape-selector",
  "jquery/ui/form-reset-mixin",
  "jquery/ui/labels",
  "jquery/ui/widget",
], function (e) {
  return (
    (function (e, t) {
      return (
        e.widget("ui.checkboxradio", [
          e.ui.formResetMixin,
          {
            version: "1.12.1",
            options: {
              disabled: null,
              label: null,
              icon: !0,
              classes: {
                "ui-checkboxradio-label": "ui-corner-all",
                "ui-checkboxradio-icon": "ui-corner-all",
              },
            },
            _getCreateOptions: function () {
              var t,
                n,
                a = this,
                i = this._super() || {};
              return (
                this._readType(),
                (n = this.element.labels()),
                (this.label = e(n[n.length - 1])),
                this.label.length ||
                  e.error("No label found for checkboxradio widget"),
                (this.originalLabel = ""),
                this.label
                  .contents()
                  .not(this.element[0])
                  .each(function () {
                    a.originalLabel +=
                      3 === this.nodeType ? e(this).text() : this.outerHTML;
                  }),
                this.originalLabel && (i.label = this.originalLabel),
                (t = this.element[0].disabled),
                null != t && (i.disabled = t),
                i
              );
            },
            _create: function () {
              var e = this.element[0].checked;
              this._bindFormResetHandler(),
                null == this.options.disabled &&
                  (this.options.disabled = this.element[0].disabled),
                this._setOption("disabled", this.options.disabled),
                this._addClass(
                  "ui-checkboxradio",
                  "ui-helper-hidden-accessible"
                ),
                this._addClass(
                  this.label,
                  "ui-checkboxradio-label",
                  "ui-button ui-widget"
                ),
                "radio" === this.type &&
                  this._addClass(this.label, "ui-checkboxradio-radio-label"),
                this.options.label && this.options.label !== this.originalLabel
                  ? this._updateLabel()
                  : this.originalLabel &&
                    (this.options.label = this.originalLabel),
                this._enhance(),
                e &&
                  (this._addClass(
                    this.label,
                    "ui-checkboxradio-checked",
                    "ui-state-active"
                  ),
                  this.icon &&
                    this._addClass(this.icon, null, "ui-state-hover")),
                this._on({
                  change: "_toggleClasses",
                  focus: function () {
                    this._addClass(
                      this.label,
                      null,
                      "ui-state-focus ui-visual-focus"
                    );
                  },
                  blur: function () {
                    this._removeClass(
                      this.label,
                      null,
                      "ui-state-focus ui-visual-focus"
                    );
                  },
                });
            },
            _readType: function () {
              var t = this.element[0].nodeName.toLowerCase();
              (this.type = this.element[0].type),
                ("input" === t && /radio|checkbox/.test(this.type)) ||
                  e.error(
                    "Can't create checkboxradio on element.nodeName=" +
                      t +
                      " and element.type=" +
                      this.type
                  );
            },
            _enhance: function () {
              this._updateIcon(this.element[0].checked);
            },
            widget: function () {
              return this.label;
            },
            _getRadioGroup: function () {
              var t,
                n = this.element[0].name,
                a = "input[name='" + e.ui.escapeSelector(n) + "']";
              return n
                ? ((t = this.form.length
                    ? e(this.form[0].elements).filter(a)
                    : e(a).filter(function () {
                        return 0 === e(this).form().length;
                      })),
                  t.not(this.element))
                : e([]);
            },
            _toggleClasses: function () {
              var t = this.element[0].checked;
              this._toggleClass(
                this.label,
                "ui-checkboxradio-checked",
                "ui-state-active",
                t
              ),
                this.options.icon &&
                  "checkbox" === this.type &&
                  this._toggleClass(
                    this.icon,
                    null,
                    "ui-icon-check ui-state-checked",
                    t
                  )._toggleClass(this.icon, null, "ui-icon-blank", !t),
                "radio" === this.type &&
                  this._getRadioGroup().each(function () {
                    var t = e(this).checkboxradio("instance");
                    t &&
                      t._removeClass(
                        t.label,
                        "ui-checkboxradio-checked",
                        "ui-state-active"
                      );
                  });
            },
            _destroy: function () {
              this._unbindFormResetHandler(),
                this.icon && (this.icon.remove(), this.iconSpace.remove());
            },
            _setOption: function (e, t) {
              return "label" !== e || t
                ? (this._super(e, t),
                  "disabled" === e
                    ? (this._toggleClass(
                        this.label,
                        null,
                        "ui-state-disabled",
                        t
                      ),
                      (this.element[0].disabled = t),
                      void 0)
                    : (this.refresh(), void 0))
                : void 0;
            },
            _updateIcon: function (n) {
              var a = "ui-icon ui-icon-background ";
              this.options.icon
                ? (this.icon ||
                    ((this.icon = e("<span>")),
                    (this.iconSpace = e("<span> </span>")),
                    this._addClass(
                      this.iconSpace,
                      "ui-checkboxradio-icon-space"
                    )),
                  "checkbox" === this.type
                    ? ((a += n
                        ? "ui-icon-check ui-state-checked"
                        : "ui-icon-blank"),
                      this._removeClass(
                        this.icon,
                        null,
                        n ? "ui-icon-blank" : "ui-icon-check"
                      ))
                    : (a += "ui-icon-blank"),
                  this._addClass(this.icon, "ui-checkboxradio-icon", a),
                  n ||
                    this._removeClass(
                      this.icon,
                      null,
                      "ui-icon-check ui-state-checked"
                    ),
                  this.icon.prependTo(this.label).after(this.iconSpace))
                : this.icon !== t &&
                  (this.icon.remove(),
                  this.iconSpace.remove(),
                  delete this.icon);
            },
            _updateLabel: function () {
              var e = this.label.contents().not(this.element[0]);
              this.icon && (e = e.not(this.icon[0])),
                this.iconSpace && (e = e.not(this.iconSpace[0])),
                e.remove(),
                this.label.append(this.options.label);
            },
            refresh: function () {
              var e = this.element[0].checked,
                t = this.element[0].disabled;
              this._updateIcon(e),
                this._toggleClass(
                  this.label,
                  "ui-checkboxradio-checked",
                  "ui-state-active",
                  e
                ),
                null !== this.options.label && this._updateLabel(),
                t !== this.options.disabled &&
                  this._setOptions({ disabled: t });
            },
          },
        ]),
        e.ui.checkboxradio
      );
    })(e),
    e
  );
});
//@ sourceMappingURL=checkboxradio.js.map
