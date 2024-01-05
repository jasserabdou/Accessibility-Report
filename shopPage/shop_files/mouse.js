define("jquery/ui/widgets/mouse", [
  "jquery/ui/core",
  "jquery/ui/ie",
  "jquery/ui/version",
  "jquery/ui/widget",
], function (e) {
  return (
    (function (e) {
      var t = !1;
      return (
        e(document).on("mouseup", function () {
          t = !1;
        }),
        e.widget("ui.mouse", {
          version: "1.12.1",
          options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0,
          },
          _mouseInit: function () {
            var t = this;
            this.element
              .on("mousedown." + this.widgetName, function (e) {
                return t._mouseDown(e);
              })
              .on("click." + this.widgetName, function (a) {
                return !0 ===
                  e.data(a.target, t.widgetName + ".preventClickEvent")
                  ? (e.removeData(
                      a.target,
                      t.widgetName + ".preventClickEvent"
                    ),
                    a.stopImmediatePropagation(),
                    !1)
                  : void 0;
              }),
              (this.started = !1);
          },
          _mouseDestroy: function () {
            this.element.off("." + this.widgetName),
              this._mouseMoveDelegate &&
                this.document
                  .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
                  .off("mouseup." + this.widgetName, this._mouseUpDelegate);
          },
          _mouseDown: function (a) {
            if (!t) {
              (this._mouseMoved = !1),
                this._mouseStarted && this._mouseUp(a),
                (this._mouseDownEvent = a);
              var i = this,
                n = 1 === a.which,
                r =
                  "string" == typeof this.options.cancel && a.target.nodeName
                    ? e(a.target).closest(this.options.cancel).length
                    : !1;
              return n && !r && this._mouseCapture(a)
                ? ((this.mouseDelayMet = !this.options.delay),
                  this.mouseDelayMet ||
                    (this._mouseDelayTimer = setTimeout(function () {
                      i.mouseDelayMet = !0;
                    }, this.options.delay)),
                  this._mouseDistanceMet(a) &&
                  this._mouseDelayMet(a) &&
                  ((this._mouseStarted = this._mouseStart(a) !== !1),
                  !this._mouseStarted)
                    ? (a.preventDefault(), !0)
                    : (!0 ===
                        e.data(
                          a.target,
                          this.widgetName + ".preventClickEvent"
                        ) &&
                        e.removeData(
                          a.target,
                          this.widgetName + ".preventClickEvent"
                        ),
                      (this._mouseMoveDelegate = function (e) {
                        return i._mouseMove(e);
                      }),
                      (this._mouseUpDelegate = function (e) {
                        return i._mouseUp(e);
                      }),
                      this.document
                        .on(
                          "mousemove." + this.widgetName,
                          this._mouseMoveDelegate
                        )
                        .on(
                          "mouseup." + this.widgetName,
                          this._mouseUpDelegate
                        ),
                      a.preventDefault(),
                      (t = !0),
                      !0))
                : !0;
            }
          },
          _mouseMove: function (t) {
            if (this._mouseMoved) {
              if (
                e.ui.ie &&
                (!document.documentMode || document.documentMode < 9) &&
                !t.button
              )
                return this._mouseUp(t);
              if (!t.which)
                if (
                  t.originalEvent.altKey ||
                  t.originalEvent.ctrlKey ||
                  t.originalEvent.metaKey ||
                  t.originalEvent.shiftKey
                )
                  this.ignoreMissingWhich = !0;
                else if (!this.ignoreMissingWhich) return this._mouseUp(t);
            }
            return (
              (t.which || t.button) && (this._mouseMoved = !0),
              this._mouseStarted
                ? (this._mouseDrag(t), t.preventDefault())
                : (this._mouseDistanceMet(t) &&
                    this._mouseDelayMet(t) &&
                    ((this._mouseStarted =
                      this._mouseStart(this._mouseDownEvent, t) !== !1),
                    this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
                  !this._mouseStarted)
            );
          },
          _mouseUp: function (a) {
            this.document
              .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .off("mouseup." + this.widgetName, this._mouseUpDelegate),
              this._mouseStarted &&
                ((this._mouseStarted = !1),
                a.target === this._mouseDownEvent.target &&
                  e.data(a.target, this.widgetName + ".preventClickEvent", !0),
                this._mouseStop(a)),
              this._mouseDelayTimer &&
                (clearTimeout(this._mouseDelayTimer),
                delete this._mouseDelayTimer),
              (this.ignoreMissingWhich = !1),
              (t = !1),
              a.preventDefault();
          },
          _mouseDistanceMet: function (e) {
            return (
              Math.max(
                Math.abs(this._mouseDownEvent.pageX - e.pageX),
                Math.abs(this._mouseDownEvent.pageY - e.pageY)
              ) >= this.options.distance
            );
          },
          _mouseDelayMet: function () {
            return this.mouseDelayMet;
          },
          _mouseStart: function () {},
          _mouseDrag: function () {},
          _mouseStop: function () {},
          _mouseCapture: function () {
            return !0;
          },
        })
      );
    })(e),
    e
  );
});
//@ sourceMappingURL=mouse.js.map
