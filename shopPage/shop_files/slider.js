define("jquery/ui/widgets/slider", [
  "jquery/ui/core",
  "jquery/ui/mouse",
  "jquery/ui/keycode",
  "jquery/ui/version",
  "jquery/ui/widget",
], function (e) {
  return (
    (function (e, t) {
      return e.widget("ui.slider", e.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
          animate: !1,
          classes: {
            "ui-slider": "ui-corner-all",
            "ui-slider-handle": "ui-corner-all",
            "ui-slider-range": "ui-corner-all ui-widget-header",
          },
          distance: 0,
          max: 100,
          min: 0,
          orientation: "horizontal",
          range: !1,
          step: 1,
          value: 0,
          values: null,
          change: null,
          slide: null,
          start: null,
          stop: null,
        },
        numPages: 5,
        _create: function () {
          (this._keySliding = !1),
            (this._mouseSliding = !1),
            (this._animateOff = !0),
            (this._handleIndex = null),
            this._detectOrientation(),
            this._mouseInit(),
            this._calculateNewMax(),
            this._addClass(
              "ui-slider ui-slider-" + this.orientation,
              "ui-widget ui-widget-content"
            ),
            this._refresh(),
            (this._animateOff = !1);
        },
        _refresh: function () {
          this._createRange(),
            this._createHandles(),
            this._setupEvents(),
            this._refreshValue();
        },
        _createHandles: function () {
          var t,
            n,
            a = this.options,
            i = this.element.find(".ui-slider-handle"),
            r = "<span tabindex='0'></span>",
            s = [];
          for (
            n = (a.values && a.values.length) || 1,
              i.length > n && (i.slice(n).remove(), (i = i.slice(0, n))),
              t = i.length;
            n > t;
            t++
          )
            s.push(r);
          (this.handles = i.add(e(s.join("")).appendTo(this.element))),
            this._addClass(
              this.handles,
              "ui-slider-handle",
              "ui-state-default"
            ),
            (this.handle = this.handles.eq(0)),
            this.handles.each(function (t) {
              e(this).data("ui-slider-handle-index", t).attr("tabIndex", 0);
            });
        },
        _createRange: function () {
          var t = this.options;
          t.range
            ? (t.range === !0 &&
                (t.values
                  ? t.values.length && 2 !== t.values.length
                    ? (t.values = [t.values[0], t.values[0]])
                    : e.isArray(t.values) && (t.values = t.values.slice(0))
                  : (t.values = [this._valueMin(), this._valueMin()])),
              this.range && this.range.length
                ? (this._removeClass(
                    this.range,
                    "ui-slider-range-min ui-slider-range-max"
                  ),
                  this.range.css({ left: "", bottom: "" }))
                : ((this.range = e("<div>").appendTo(this.element)),
                  this._addClass(this.range, "ui-slider-range")),
              ("min" === t.range || "max" === t.range) &&
                this._addClass(this.range, "ui-slider-range-" + t.range))
            : (this.range && this.range.remove(), (this.range = null));
        },
        _setupEvents: function () {
          this._off(this.handles),
            this._on(this.handles, this._handleEvents),
            this._hoverable(this.handles),
            this._focusable(this.handles);
        },
        _destroy: function () {
          this.handles.remove(),
            this.range && this.range.remove(),
            this._mouseDestroy();
        },
        _mouseCapture: function (t) {
          var n,
            a,
            i,
            r,
            s,
            o,
            l,
            d,
            c = this,
            u = this.options;
          return u.disabled
            ? !1
            : ((this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
              }),
              (this.elementOffset = this.element.offset()),
              (n = { x: t.pageX, y: t.pageY }),
              (a = this._normValueFromMouse(n)),
              (i = this._valueMax() - this._valueMin() + 1),
              this.handles.each(function (t) {
                var n = Math.abs(a - c.values(t));
                (i > n ||
                  (i === n &&
                    (t === c._lastChangedValue || c.values(t) === u.min))) &&
                  ((i = n), (r = e(this)), (s = t));
              }),
              (o = this._start(t, s)),
              o === !1
                ? !1
                : ((this._mouseSliding = !0),
                  (this._handleIndex = s),
                  this._addClass(r, null, "ui-state-active"),
                  r.trigger("focus"),
                  (l = r.offset()),
                  (d = !e(t.target)
                    .parents()
                    .addBack()
                    .is(".ui-slider-handle")),
                  (this._clickOffset = d
                    ? { left: 0, top: 0 }
                    : {
                        left: t.pageX - l.left - r.width() / 2,
                        top:
                          t.pageY -
                          l.top -
                          r.height() / 2 -
                          (parseInt(r.css("borderTopWidth"), 10) || 0) -
                          (parseInt(r.css("borderBottomWidth"), 10) || 0) +
                          (parseInt(r.css("marginTop"), 10) || 0),
                      }),
                  this.handles.hasClass("ui-state-hover") ||
                    this._slide(t, s, a),
                  (this._animateOff = !0),
                  !0));
        },
        _mouseStart: function () {
          return !0;
        },
        _mouseDrag: function (e) {
          var t = { x: e.pageX, y: e.pageY },
            n = this._normValueFromMouse(t);
          return this._slide(e, this._handleIndex, n), !1;
        },
        _mouseStop: function (e) {
          return (
            this._removeClass(this.handles, null, "ui-state-active"),
            (this._mouseSliding = !1),
            this._stop(e, this._handleIndex),
            this._change(e, this._handleIndex),
            (this._handleIndex = null),
            (this._clickOffset = null),
            (this._animateOff = !1),
            !1
          );
        },
        _detectOrientation: function () {
          this.orientation =
            "vertical" === this.options.orientation ? "vertical" : "horizontal";
        },
        _normValueFromMouse: function (e) {
          var t, n, a, i, r;
          return (
            "horizontal" === this.orientation
              ? ((t = this.elementSize.width),
                (n =
                  e.x -
                  this.elementOffset.left -
                  (this._clickOffset ? this._clickOffset.left : 0)))
              : ((t = this.elementSize.height),
                (n =
                  e.y -
                  this.elementOffset.top -
                  (this._clickOffset ? this._clickOffset.top : 0))),
            (a = n / t),
            a > 1 && (a = 1),
            0 > a && (a = 0),
            "vertical" === this.orientation && (a = 1 - a),
            (i = this._valueMax() - this._valueMin()),
            (r = this._valueMin() + a * i),
            this._trimAlignValue(r)
          );
        },
        _uiHash: function (e, n, a) {
          var i = {
            handle: this.handles[e],
            handleIndex: e,
            value: n !== t ? n : this.value(),
          };
          return (
            this._hasMultipleValues() &&
              ((i.value = n !== t ? n : this.values(e)),
              (i.values = a || this.values())),
            i
          );
        },
        _hasMultipleValues: function () {
          return this.options.values && this.options.values.length;
        },
        _start: function (e, t) {
          return this._trigger("start", e, this._uiHash(t));
        },
        _slide: function (e, t, n) {
          var a,
            i,
            r = this.value(),
            s = this.values();
          this._hasMultipleValues() &&
            ((i = this.values(t ? 0 : 1)),
            (r = this.values(t)),
            2 === this.options.values.length &&
              this.options.range === !0 &&
              (n = 0 === t ? Math.min(i, n) : Math.max(i, n)),
            (s[t] = n)),
            n !== r &&
              ((a = this._trigger("slide", e, this._uiHash(t, n, s))),
              a !== !1 &&
                (this._hasMultipleValues()
                  ? this.values(t, n)
                  : this.value(n)));
        },
        _stop: function (e, t) {
          this._trigger("stop", e, this._uiHash(t));
        },
        _change: function (e, t) {
          this._keySliding ||
            this._mouseSliding ||
            ((this._lastChangedValue = t),
            this._trigger("change", e, this._uiHash(t)));
        },
        value: function (e) {
          return arguments.length
            ? ((this.options.value = this._trimAlignValue(e)),
              this._refreshValue(),
              this._change(null, 0),
              void 0)
            : this._value();
        },
        values: function (t, n) {
          var a, i, r;
          if (arguments.length > 1)
            return (
              (this.options.values[t] = this._trimAlignValue(n)),
              this._refreshValue(),
              this._change(null, t),
              void 0
            );
          if (!arguments.length) return this._values();
          if (!e.isArray(arguments[0]))
            return this._hasMultipleValues() ? this._values(t) : this.value();
          for (
            a = this.options.values, i = arguments[0], r = 0;
            r < a.length;
            r += 1
          )
            (a[r] = this._trimAlignValue(i[r])), this._change(null, r);
          this._refreshValue();
        },
        _setOption: function (t, n) {
          var a,
            i = 0;
          switch (
            ("range" === t &&
              this.options.range === !0 &&
              ("min" === n
                ? ((this.options.value = this._values(0)),
                  (this.options.values = null))
                : "max" === n &&
                  ((this.options.value = this._values(
                    this.options.values.length - 1
                  )),
                  (this.options.values = null))),
            e.isArray(this.options.values) && (i = this.options.values.length),
            this._super(t, n),
            t)
          ) {
            case "orientation":
              this._detectOrientation(),
                this._removeClass(
                  "ui-slider-horizontal ui-slider-vertical"
                )._addClass("ui-slider-" + this.orientation),
                this._refreshValue(),
                this.options.range && this._refreshRange(n),
                this.handles.css("horizontal" === n ? "bottom" : "left", "");
              break;
            case "value":
              (this._animateOff = !0),
                this._refreshValue(),
                this._change(null, 0),
                (this._animateOff = !1);
              break;
            case "values":
              for (
                this._animateOff = !0, this._refreshValue(), a = i - 1;
                a >= 0;
                a--
              )
                this._change(null, a);
              this._animateOff = !1;
              break;
            case "step":
            case "min":
            case "max":
              (this._animateOff = !0),
                this._calculateNewMax(),
                this._refreshValue(),
                (this._animateOff = !1);
              break;
            case "range":
              (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
          }
        },
        _setOptionDisabled: function (e) {
          this._super(e), this._toggleClass(null, "ui-state-disabled", !!e);
        },
        _value: function () {
          var e = this.options.value;
          return (e = this._trimAlignValue(e));
        },
        _values: function (e) {
          var t, n, a;
          if (arguments.length)
            return (t = this.options.values[e]), (t = this._trimAlignValue(t));
          if (this._hasMultipleValues()) {
            for (n = this.options.values.slice(), a = 0; a < n.length; a += 1)
              n[a] = this._trimAlignValue(n[a]);
            return n;
          }
          return [];
        },
        _trimAlignValue: function (e) {
          if (e <= this._valueMin()) return this._valueMin();
          if (e >= this._valueMax()) return this._valueMax();
          var t = this.options.step > 0 ? this.options.step : 1,
            n = (e - this._valueMin()) % t,
            a = e - n;
          return (
            2 * Math.abs(n) >= t && (a += n > 0 ? t : -t),
            parseFloat(a.toFixed(5))
          );
        },
        _calculateNewMax: function () {
          var e = this.options.max,
            t = this._valueMin(),
            n = this.options.step,
            a = Math.round((e - t) / n) * n;
          (e = a + t),
            e > this.options.max && (e -= n),
            (this.max = parseFloat(e.toFixed(this._precision())));
        },
        _precision: function () {
          var e = this._precisionOf(this.options.step);
          return (
            null !== this.options.min &&
              (e = Math.max(e, this._precisionOf(this.options.min))),
            e
          );
        },
        _precisionOf: function (e) {
          var t = e.toString(),
            n = t.indexOf(".");
          return -1 === n ? 0 : t.length - n - 1;
        },
        _valueMin: function () {
          return this.options.min;
        },
        _valueMax: function () {
          return this.max;
        },
        _refreshRange: function (e) {
          "vertical" === e && this.range.css({ width: "", left: "" }),
            "horizontal" === e && this.range.css({ height: "", bottom: "" });
        },
        _refreshValue: function () {
          var t,
            n,
            a,
            i,
            r,
            s = this.options.range,
            o = this.options,
            l = this,
            d = this._animateOff ? !1 : o.animate,
            c = {};
          this._hasMultipleValues()
            ? this.handles.each(function (a) {
                (n =
                  100 *
                  ((l.values(a) - l._valueMin()) /
                    (l._valueMax() - l._valueMin()))),
                  (c["horizontal" === l.orientation ? "left" : "bottom"] =
                    n + "%"),
                  e(this).stop(1, 1)[d ? "animate" : "css"](c, o.animate),
                  l.options.range === !0 &&
                    ("horizontal" === l.orientation
                      ? (0 === a &&
                          l.range
                            .stop(1, 1)
                            [d ? "animate" : "css"](
                              { left: n + "%" },
                              o.animate
                            ),
                        1 === a &&
                          l.range[d ? "animate" : "css"](
                            { width: n - t + "%" },
                            { queue: !1, duration: o.animate }
                          ))
                      : (0 === a &&
                          l.range
                            .stop(1, 1)
                            [d ? "animate" : "css"](
                              { bottom: n + "%" },
                              o.animate
                            ),
                        1 === a &&
                          l.range[d ? "animate" : "css"](
                            { height: n - t + "%" },
                            { queue: !1, duration: o.animate }
                          ))),
                  (t = n);
              })
            : ((a = this.value()),
              (i = this._valueMin()),
              (r = this._valueMax()),
              (n = r !== i ? 100 * ((a - i) / (r - i)) : 0),
              (c["horizontal" === this.orientation ? "left" : "bottom"] =
                n + "%"),
              this.handle.stop(1, 1)[d ? "animate" : "css"](c, o.animate),
              "min" === s &&
                "horizontal" === this.orientation &&
                this.range
                  .stop(1, 1)
                  [d ? "animate" : "css"]({ width: n + "%" }, o.animate),
              "max" === s &&
                "horizontal" === this.orientation &&
                this.range
                  .stop(1, 1)
                  [d ? "animate" : "css"]({ width: 100 - n + "%" }, o.animate),
              "min" === s &&
                "vertical" === this.orientation &&
                this.range
                  .stop(1, 1)
                  [d ? "animate" : "css"]({ height: n + "%" }, o.animate),
              "max" === s &&
                "vertical" === this.orientation &&
                this.range
                  .stop(1, 1)
                  [d ? "animate" : "css"](
                    { height: 100 - n + "%" },
                    o.animate
                  ));
        },
        _handleEvents: {
          keydown: function (t) {
            var n,
              a,
              i,
              r,
              s = e(t.target).data("ui-slider-handle-index");
            switch (t.keyCode) {
              case e.ui.keyCode.HOME:
              case e.ui.keyCode.END:
              case e.ui.keyCode.PAGE_UP:
              case e.ui.keyCode.PAGE_DOWN:
              case e.ui.keyCode.UP:
              case e.ui.keyCode.RIGHT:
              case e.ui.keyCode.DOWN:
              case e.ui.keyCode.LEFT:
                if (
                  (t.preventDefault(),
                  !this._keySliding &&
                    ((this._keySliding = !0),
                    this._addClass(e(t.target), null, "ui-state-active"),
                    (n = this._start(t, s)),
                    n === !1))
                )
                  return;
            }
            switch (
              ((r = this.options.step),
              (a = i =
                this._hasMultipleValues() ? this.values(s) : this.value()),
              t.keyCode)
            ) {
              case e.ui.keyCode.HOME:
                i = this._valueMin();
                break;
              case e.ui.keyCode.END:
                i = this._valueMax();
                break;
              case e.ui.keyCode.PAGE_UP:
                i = this._trimAlignValue(
                  a + (this._valueMax() - this._valueMin()) / this.numPages
                );
                break;
              case e.ui.keyCode.PAGE_DOWN:
                i = this._trimAlignValue(
                  a - (this._valueMax() - this._valueMin()) / this.numPages
                );
                break;
              case e.ui.keyCode.UP:
              case e.ui.keyCode.RIGHT:
                if (a === this._valueMax()) return;
                i = this._trimAlignValue(a + r);
                break;
              case e.ui.keyCode.DOWN:
              case e.ui.keyCode.LEFT:
                if (a === this._valueMin()) return;
                i = this._trimAlignValue(a - r);
            }
            this._slide(t, s, i);
          },
          keyup: function (t) {
            var n = e(t.target).data("ui-slider-handle-index");
            this._keySliding &&
              ((this._keySliding = !1),
              this._stop(t, n),
              this._change(t, n),
              this._removeClass(e(t.target), null, "ui-state-active"));
          },
        },
      });
    })(e),
    e
  );
});
//@ sourceMappingURL=slider.js.map
