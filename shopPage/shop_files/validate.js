define("ep/ui/validate", [
  "jquery",
  "ep",
  "ep/dict",
  "ep/validate",
  "ep/ui/input",
  "util/browser",
], function (e, t) {
  return (
    e.widget("ui.uiValidate", e.ui.uiInput, {
      options: {
        valid: !0,
        type: "basic",
        showError: !0,
        showErrorMsgAlways: !1,
        validateOnSave: !1,
      },
      _create: function () {
        var t = this,
          i = t.element,
          n = t.options,
          a =
            "validate.uiValidate" +
            (n.validateOnSave ? "" : " blur.uiValidate");
        this._superApply(arguments),
          (this.options = e.extend(
            {
              accept: this.elem.attr("accept"),
              min: parseInt(this.elem.attr("min"), 10),
              max: parseInt(this.elem.attr("max"), 10),
              minlength: parseInt(this.elem.attr("minlength"), 10),
              maxlength: parseInt(this.elem.attr("maxlength"), 10),
              pattern: this.elem.attr("pattern"),
              required: this.elem.attr("required"),
            },
            this.options
          )),
          this.elem.addClass("ep-uiValidate").on(a, e.proxy(this, "_validate")),
          n.validateOnSave &&
            e.browser.mozilla &&
            (i.off("focusin.uiInput"),
            i.one(
              "focusin.uiInput",
              e.proxy(t._handleFocus, t, { widget: t })
            )),
          (t.clicked = !1),
          /(^(select:)|(checkbox)$)/.test(t.type) &&
            i.on("click.uiValidateClick", function () {
              t.clicked = !0;
            }),
          this.options.valid ||
            (this._setInstantly(), this._setValidStatus(!1));
      },
      _handleFocus: function (i) {
        var n = i.widget,
          a = n.element;
        n._setValidStatus(!0),
          a.trigger("change"),
          t(a[0].form).trigger("change"),
          window.setTimeout(function () {
            a.one("focusin.uiInput", e.proxy(n._handleFocus, n, { widget: n }));
          }, 10);
      },
      _init: function () {
        this._superApply(arguments);
      },
      _setInstantly: function () {
        (this._instantly = !0),
          this.elem.on("changeValue.uiValidate", e.proxy(this, "_validate"));
      },
      _radioGroupCheck: function () {
        this.elem.formGroup(":radio").trigger("validate");
      },
      _changeAttr: function (t, i) {
        var n = this;
        this._superApply(arguments),
          e.each(i, function (e, t) {
            /^(accept|pattern|required)$/i.test(e)
              ? (n.options[e] = t)
              : /^(min|max|minlength|maxlength)$/i.test(e) &&
                (n.options[e] = parseInt(t, 10));
          });
      },
      _setOption: function (e, t) {
        return (
          "valid" == e && void 0 !== t && this._setValidStatus(t),
          this._superApply(arguments)
        );
      },
      _setValidStatus: function (e) {
        var i = this,
          n = i.element,
          a = i.options;
        (i.valid = e === !1 ? t.validate.basic("") : e),
          a.setManually && (i.valid = e),
          (e = e !== !0),
          (i.elem[0].formInvalid = e),
          i.placeholder && (i.placeholder[0].formInvalid = e),
          i.options.showError &&
            (i.elem.toggleClass("ui-invalid", e),
            /(^(select:)|(checkbox)$)/.test(i.type) &&
              i.clicked &&
              n.trigger("focus"),
            i._tooltipShow()),
          (i.clicked = !1);
      },
      _validate: function (i) {
        if (9 !== i.keyCode) {
          var n,
            a = this.elem.val(),
            o = this,
            r = o.options;
          this.elem.is(":radio")
            ? (a = this.elem.formGroup(":radio").filter(":checked").val() || "")
            : this.elem.is(":checkbox") &&
              (a = this.elem.filter(":checked").val() || ""),
            (n = t.validate[this.options.type](a, this.options)),
            r.setManually && (n = o.element.data(r.setManually)),
            n === !0 || this._instantly || this._setInstantly(),
            (o.hideOnError = n === !0 ? void 0 : !0),
            this._setValidStatus(n),
            "changeAttr" !== i.type && e(this.elem[0].form).trigger("change");
        }
      },
      _createErrorMsgOptions: function () {
        var t = {
            min: this.options.min,
            max: this.options.max,
            minlength: this.options.minlength,
            maxlength: this.options.maxlength,
          },
          i = this.options.format,
          n = { region: this.options.region };
        return (
          "number" === this.options.type
            ? ((n.currency = this.options.currency),
              (t.example = e.i18n.formatNumber(21.45923, i, n)),
              (t.min || t.max) &&
                ((t.min = e.i18n.formatNumber(t.min, i, n)),
                (t.max = e.i18n.formatNumber(t.max, i, n))))
            : "date" === this.options.type &&
              ((t.example = e.i18n.formatDate(new Date(), i, n)),
              (t.min || t.max) &&
                ((t.min = e.i18n.formatDate(new Date(t.min), i, n)),
                (t.max = e.i18n.formatDate(new Date(t.max), i, n)))),
          t
        );
      },
      _tooltipShow: function () {
        var t = this,
          i = t.options;
        if (this.valid !== !0) {
          this.tooltip ||
            (this._tooltipInit(!0),
            this.tooltip.on("show", e.proxy(this, "_tooltipHide"))),
            this.errormsg ||
              ((this.errormsg = e("<div>")
                .addClass("ep-uiValidate-message")
                .insertBefore(this.tooltip)),
              this.stack.push(this.errormsg[0])),
            t.tooltip.uiTooltip(
              "adjustTooltipByWidth",
              this.elem,
              this.errormsg
            );
          var n = this._createErrorMsgOptions();
          this.errormsg.text(
            i.customMessage
              ? i.customMessage
              : this.dict.translateData(this.valid, n)
          ),
            this.errormsg.show(),
            (this.elem.is(":focus") || this.options.showErrorMsgAlways) &&
              this.tooltip.uiTooltip("show"),
            this.tooltip.hide();
        } else this._tooltipHide();
      },
      _tooltipHide: function () {
        var e = this,
          t = function () {
            e.errormsg && e.errormsg.hide();
          };
        this.tooltip &&
          this.valid === !0 &&
          (this.options.info ? t() : this.tooltip.uiTooltip("hide", t));
      },
      destroy: function () {
        this.elem.off(".uiValidate").removeClass(/ep-uiValidate[\w\d-]*/g),
          this._superApply(arguments);
      },
    }),
    t
  );
});
//@ sourceMappingURL=validate.js.map
