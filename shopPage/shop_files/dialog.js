define("jquery/ui/widgets/dialog", [
  "jquery/ui/core",
  "jquery/ui/button",
  "jquery/ui/draggable",
  "jquery/ui/mouse",
  "jquery/ui/resizable",
  "jquery/ui/focusable",
  "jquery/ui/position",
  "jquery/ui/safe-active-element",
  "jquery/ui/safe-blur",
  "jquery/ui/tabbable",
  "jquery/ui/unique-id",
  "jquery/ui/keycode",
  "jquery/ui/version",
  "jquery/ui/widget",
], function (e) {
  return (
    (function (e) {
      return (
        e.widget("ui.dialog", {
          version: "1.12.1",
          options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: {
              "ui-dialog": "ui-corner-all",
              "ui-dialog-titlebar": "ui-corner-all",
            },
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
              my: "center",
              at: "center",
              of: window,
              collision: "fit",
              using: function (t) {
                var a = e(this).css(t).offset().top;
                0 > a && e(this).css("top", t.top - a);
              },
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null,
          },
          sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0,
          },
          resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
          },
          _create: function () {
            (this.originalCss = {
              display: this.element[0].style.display,
              width: this.element[0].style.width,
              minHeight: this.element[0].style.minHeight,
              maxHeight: this.element[0].style.maxHeight,
              height: this.element[0].style.height,
            }),
              (this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element),
              }),
              (this.originalTitle = this.element.attr("title")),
              null == this.options.title &&
                null != this.originalTitle &&
                (this.options.title = this.originalTitle),
              this.options.disabled && (this.options.disabled = !1),
              this._createWrapper(),
              this.element.show().removeAttr("title").appendTo(this.uiDialog),
              this._addClass("ui-dialog-content", "ui-widget-content"),
              this._createTitlebar(),
              this._createButtonPane(),
              this.options.draggable && e.fn.draggable && this._makeDraggable(),
              this.options.resizable && e.fn.resizable && this._makeResizable(),
              (this._isOpen = !1),
              this._trackFocus();
          },
          _init: function () {
            this.options.autoOpen && this.open();
          },
          _appendTo: function () {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType)
              ? e(t)
              : this.document.find(t || "body").eq(0);
          },
          _destroy: function () {
            var e,
              t = this.originalPosition;
            this._untrackInstance(),
              this._destroyOverlay(),
              this.element.removeUniqueId().css(this.originalCss).detach(),
              this.uiDialog.remove(),
              this.originalTitle &&
                this.element.attr("title", this.originalTitle),
              (e = t.parent.children().eq(t.index)),
              e.length && e[0] !== this.element[0]
                ? e.before(this.element)
                : t.parent.append(this.element);
          },
          widget: function () {
            return this.uiDialog;
          },
          disable: e.noop,
          enable: e.noop,
          close: function (t) {
            var a = this;
            this._isOpen &&
              this._trigger("beforeClose", t) !== !1 &&
              ((this._isOpen = !1),
              (this._focusedElement = null),
              this._destroyOverlay(),
              this._untrackInstance(),
              this.opener.filter(":focusable").trigger("focus").length ||
                e.ui.safeBlur(e.ui.safeActiveElement(this.document[0])),
              this._hide(this.uiDialog, this.options.hide, function () {
                a._trigger("close", t);
              }));
          },
          isOpen: function () {
            return this._isOpen;
          },
          moveToTop: function () {
            this._moveToTop();
          },
          _moveToTop: function (t, a) {
            var i = !1,
              n = this.uiDialog
                .siblings(".ui-front:visible")
                .map(function () {
                  return +e(this).css("z-index");
                })
                .get(),
              r = Math.max.apply(null, n);
            return (
              r >= +this.uiDialog.css("z-index") &&
                (this.uiDialog.css("z-index", r + 1), (i = !0)),
              i && !a && this._trigger("focus", t),
              i
            );
          },
          open: function () {
            var t = this;
            return this._isOpen
              ? (this._moveToTop() && this._focusTabbable(), void 0)
              : ((this._isOpen = !0),
                (this.opener = e(e.ui.safeActiveElement(this.document[0]))),
                this._size(),
                this._position(),
                this._createOverlay(),
                this._moveToTop(null, !0),
                this.overlay &&
                  this.overlay.css("z-index", this.uiDialog.css("z-index") - 1),
                this._show(this.uiDialog, this.options.show, function () {
                  t._focusTabbable(), t._trigger("focus");
                }),
                this._makeFocusTarget(),
                this._trigger("open"),
                void 0);
          },
          _focusTabbable: function () {
            var e = this._focusedElement;
            e || (e = this.element.find("[autofocus]")),
              e.length || (e = this.element.find(":tabbable")),
              e.length || (e = this.uiDialogButtonPane.find(":tabbable")),
              e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")),
              e.length || (e = this.uiDialog),
              e.eq(0).trigger("focus");
          },
          _keepFocus: function (t) {
            function a() {
              var t = e.ui.safeActiveElement(this.document[0]),
                a = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
              a || this._focusTabbable();
            }
            t.preventDefault(), a.call(this), this._delay(a);
          },
          _createWrapper: function () {
            (this.uiDialog = e("<div>")
              .hide()
              .attr({ tabIndex: -1, role: "dialog" })
              .appendTo(this._appendTo())),
              this._addClass(
                this.uiDialog,
                "ui-dialog",
                "ui-widget ui-widget-content ui-front"
              ),
              this._on(this.uiDialog, {
                keydown: function (t) {
                  if (
                    this.options.closeOnEscape &&
                    !t.isDefaultPrevented() &&
                    t.keyCode &&
                    t.keyCode === e.ui.keyCode.ESCAPE
                  )
                    return t.preventDefault(), this.close(t), void 0;
                  if (
                    t.keyCode === e.ui.keyCode.TAB &&
                    !t.isDefaultPrevented()
                  ) {
                    var a = this.uiDialog.find(":tabbable"),
                      i = a.filter(":first"),
                      n = a.filter(":last");
                    (t.target !== n[0] && t.target !== this.uiDialog[0]) ||
                    t.shiftKey
                      ? (t.target !== i[0] && t.target !== this.uiDialog[0]) ||
                        !t.shiftKey ||
                        (this._delay(function () {
                          n.trigger("focus");
                        }),
                        t.preventDefault())
                      : (this._delay(function () {
                          i.trigger("focus");
                        }),
                        t.preventDefault());
                  }
                },
                mousedown: function (e) {
                  this._moveToTop(e) && this._focusTabbable();
                },
              }),
              this.element.find("[aria-describedby]").length ||
                this.uiDialog.attr({
                  "aria-describedby": this.element.uniqueId().attr("id"),
                });
          },
          _createTitlebar: function () {
            var t;
            (this.uiDialogTitlebar = e("<div>")),
              this._addClass(
                this.uiDialogTitlebar,
                "ui-dialog-titlebar",
                "ui-widget-header ui-helper-clearfix"
              ),
              this._on(this.uiDialogTitlebar, {
                mousedown: function (t) {
                  e(t.target).closest(".ui-dialog-titlebar-close") ||
                    this.uiDialog.trigger("focus");
                },
              }),
              (this.uiDialogTitlebarClose = e("<button type='button'></button>")
                .button({
                  label: e("<a>").text(this.options.closeText).html(),
                  icon: "ui-icon-closethick",
                  showLabel: !1,
                })
                .appendTo(this.uiDialogTitlebar)),
              this._addClass(
                this.uiDialogTitlebarClose,
                "ui-dialog-titlebar-close"
              ),
              this._on(this.uiDialogTitlebarClose, {
                click: function (e) {
                  e.preventDefault(), this.close(e);
                },
              }),
              (t = e("<span>").uniqueId().prependTo(this.uiDialogTitlebar)),
              this._addClass(t, "ui-dialog-title"),
              this._title(t),
              this.uiDialogTitlebar.prependTo(this.uiDialog),
              this.uiDialog.attr({ "aria-labelledby": t.attr("id") });
          },
          _title: function (e) {
            this.options.title ? e.text(this.options.title) : e.html("&#160;");
          },
          _createButtonPane: function () {
            (this.uiDialogButtonPane = e("<div>")),
              this._addClass(
                this.uiDialogButtonPane,
                "ui-dialog-buttonpane",
                "ui-widget-content ui-helper-clearfix"
              ),
              (this.uiButtonSet = e("<div>").appendTo(this.uiDialogButtonPane)),
              this._addClass(this.uiButtonSet, "ui-dialog-buttonset"),
              this._createButtons();
          },
          _createButtons: function () {
            var t = this,
              a = this.options.buttons;
            return (
              this.uiDialogButtonPane.remove(),
              this.uiButtonSet.empty(),
              e.isEmptyObject(a) || (e.isArray(a) && !a.length)
                ? (this._removeClass(this.uiDialog, "ui-dialog-buttons"),
                  void 0)
                : (e.each(a, function (a, i) {
                    var n, r;
                    (i = e.isFunction(i) ? { click: i, text: a } : i),
                      (i = e.extend({ type: "button" }, i)),
                      (n = i.click),
                      (r = {
                        icon: i.icon,
                        iconPosition: i.iconPosition,
                        showLabel: i.showLabel,
                        icons: i.icons,
                        text: i.text,
                      }),
                      delete i.click,
                      delete i.icon,
                      delete i.iconPosition,
                      delete i.showLabel,
                      delete i.icons,
                      "boolean" == typeof i.text && delete i.text,
                      e("<button></button>", i)
                        .button(r)
                        .appendTo(t.uiButtonSet)
                        .on("click", function () {
                          n.apply(t.element[0], arguments);
                        });
                  }),
                  this._addClass(this.uiDialog, "ui-dialog-buttons"),
                  this.uiDialogButtonPane.appendTo(this.uiDialog),
                  void 0)
            );
          },
          _makeDraggable: function () {
            function t(e) {
              return { position: e.position, offset: e.offset };
            }
            var a = this,
              i = this.options;
            this.uiDialog.draggable({
              cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
              handle: ".ui-dialog-titlebar",
              containment: "document",
              start: function (i, n) {
                a._addClass(e(this), "ui-dialog-dragging"),
                  a._blockFrames(),
                  a._trigger("dragStart", i, t(n));
              },
              drag: function (e, i) {
                a._trigger("drag", e, t(i));
              },
              stop: function (n, r) {
                var o = r.offset.left - a.document.scrollLeft(),
                  l = r.offset.top - a.document.scrollTop();
                (i.position = {
                  my: "left top",
                  at:
                    "left" +
                    (o >= 0 ? "+" : "") +
                    o +
                    " " +
                    "top" +
                    (l >= 0 ? "+" : "") +
                    l,
                  of: a.window,
                }),
                  a._removeClass(e(this), "ui-dialog-dragging"),
                  a._unblockFrames(),
                  a._trigger("dragStop", n, t(r));
              },
            });
          },
          _makeResizable: function () {
            function t(e) {
              return {
                originalPosition: e.originalPosition,
                originalSize: e.originalSize,
                position: e.position,
                size: e.size,
              };
            }
            var a = this,
              i = this.options,
              n = i.resizable,
              r = this.uiDialog.css("position"),
              o = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog
              .resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: i.maxWidth,
                maxHeight: i.maxHeight,
                minWidth: i.minWidth,
                minHeight: this._minHeight(),
                handles: o,
                start: function (i, n) {
                  a._addClass(e(this), "ui-dialog-resizing"),
                    a._blockFrames(),
                    a._trigger("resizeStart", i, t(n));
                },
                resize: function (e, i) {
                  a._trigger("resize", e, t(i));
                },
                stop: function (n, r) {
                  var o = a.uiDialog.offset(),
                    l = o.left - a.document.scrollLeft(),
                    s = o.top - a.document.scrollTop();
                  (i.height = a.uiDialog.height()),
                    (i.width = a.uiDialog.width()),
                    (i.position = {
                      my: "left top",
                      at:
                        "left" +
                        (l >= 0 ? "+" : "") +
                        l +
                        " " +
                        "top" +
                        (s >= 0 ? "+" : "") +
                        s,
                      of: a.window,
                    }),
                    a._removeClass(e(this), "ui-dialog-resizing"),
                    a._unblockFrames(),
                    a._trigger("resizeStop", n, t(r));
                },
              })
              .css("position", r);
          },
          _trackFocus: function () {
            this._on(this.widget(), {
              focusin: function (t) {
                this._makeFocusTarget(), (this._focusedElement = e(t.target));
              },
            });
          },
          _makeFocusTarget: function () {
            this._untrackInstance(), this._trackingInstances().unshift(this);
          },
          _untrackInstance: function () {
            var t = this._trackingInstances(),
              a = e.inArray(this, t);
            -1 !== a && t.splice(a, 1);
          },
          _trackingInstances: function () {
            var e = this.document.data("ui-dialog-instances");
            return (
              e || ((e = []), this.document.data("ui-dialog-instances", e)), e
            );
          },
          _minHeight: function () {
            var e = this.options;
            return "auto" === e.height
              ? e.minHeight
              : Math.min(e.minHeight, e.height);
          },
          _position: function () {
            var e = this.uiDialog.is(":visible");
            e || this.uiDialog.show(),
              this.uiDialog.position(this.options.position),
              e || this.uiDialog.hide();
          },
          _setOptions: function (t) {
            var a = this,
              i = !1,
              n = {};
            e.each(t, function (e, t) {
              a._setOption(e, t),
                e in a.sizeRelatedOptions && (i = !0),
                e in a.resizableRelatedOptions && (n[e] = t);
            }),
              i && (this._size(), this._position()),
              this.uiDialog.is(":data(ui-resizable)") &&
                this.uiDialog.resizable("option", n);
          },
          _setOption: function (t, a) {
            var i,
              n,
              r = this.uiDialog;
            "disabled" !== t &&
              (this._super(t, a),
              "appendTo" === t && this.uiDialog.appendTo(this._appendTo()),
              "buttons" === t && this._createButtons(),
              "closeText" === t &&
                this.uiDialogTitlebarClose.button({
                  label: e("<a>")
                    .text("" + this.options.closeText)
                    .html(),
                }),
              "draggable" === t &&
                ((i = r.is(":data(ui-draggable)")),
                i && !a && r.draggable("destroy"),
                !i && a && this._makeDraggable()),
              "position" === t && this._position(),
              "resizable" === t &&
                ((n = r.is(":data(ui-resizable)")),
                n && !a && r.resizable("destroy"),
                n &&
                  "string" == typeof a &&
                  r.resizable("option", "handles", a),
                n || a === !1 || this._makeResizable()),
              "title" === t &&
                this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
          },
          _size: function () {
            var e,
              t,
              a,
              i = this.options;
            this.element
              .show()
              .css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0,
              }),
              i.minWidth > i.width && (i.width = i.minWidth),
              (e = this.uiDialog
                .css({ height: "auto", width: i.width })
                .outerHeight()),
              (t = Math.max(0, i.minHeight - e)),
              (a =
                "number" == typeof i.maxHeight
                  ? Math.max(0, i.maxHeight - e)
                  : "none"),
              "auto" === i.height
                ? this.element.css({
                    minHeight: t,
                    maxHeight: a,
                    height: "auto",
                  })
                : this.element.height(Math.max(0, i.height - e)),
              this.uiDialog.is(":data(ui-resizable)") &&
                this.uiDialog.resizable(
                  "option",
                  "minHeight",
                  this._minHeight()
                );
          },
          _blockFrames: function () {
            this.iframeBlocks = this.document.find("iframe").map(function () {
              var t = e(this);
              return e("<div>")
                .css({
                  position: "absolute",
                  width: t.outerWidth(),
                  height: t.outerHeight(),
                })
                .appendTo(t.parent())
                .offset(t.offset())[0];
            });
          },
          _unblockFrames: function () {
            this.iframeBlocks &&
              (this.iframeBlocks.remove(), delete this.iframeBlocks);
          },
          _allowInteraction: function (t) {
            return e(t.target).closest(".ui-dialog").length
              ? !0
              : !!e(t.target).closest(".ui-datepicker").length;
          },
          _createOverlay: function () {
            if (this.options.modal) {
              var t = !0;
              this._delay(function () {
                t = !1;
              }),
                this.document.data("ui-dialog-overlays") ||
                  this._on(this.document, {
                    focusin: function (e) {
                      t ||
                        this._allowInteraction(e) ||
                        (e.preventDefault(),
                        this._trackingInstances()[0]._focusTabbable());
                    },
                  }),
                (this.overlay = e("<div>").appendTo(this._appendTo())),
                this._addClass(
                  this.overlay,
                  null,
                  "ui-widget-overlay ui-front"
                ),
                this._on(this.overlay, { mousedown: "_keepFocus" }),
                this.document.data(
                  "ui-dialog-overlays",
                  (this.document.data("ui-dialog-overlays") || 0) + 1
                );
            }
          },
          _destroyOverlay: function () {
            if (this.options.modal && this.overlay) {
              var e = this.document.data("ui-dialog-overlays") - 1;
              e
                ? this.document.data("ui-dialog-overlays", e)
                : (this._off(this.document, "focusin"),
                  this.document.removeData("ui-dialog-overlays")),
                this.overlay.remove(),
                (this.overlay = null);
            }
          },
        }),
        e.uiBackCompat !== !1 &&
          e.widget("ui.dialog", e.ui.dialog, {
            options: { dialogClass: "" },
            _createWrapper: function () {
              this._super(), this.uiDialog.addClass(this.options.dialogClass);
            },
            _setOption: function (e, t) {
              "dialogClass" === e &&
                this.uiDialog.removeClass(this.options.dialogClass).addClass(t),
                this._superApply(arguments);
            },
          }),
        e.ui.dialog
      );
    })(e),
    e
  );
});
//@ sourceMappingURL=dialog.js.map
