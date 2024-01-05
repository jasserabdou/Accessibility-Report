define("jquery/ui/widgets/draggable", [
  "jquery/ui/core",
  "jquery/ui/mouse",
  "jquery/ui/data",
  "jquery/ui/plugin",
  "jquery/ui/safe-active-element",
  "jquery/ui/safe-blur",
  "jquery/ui/scroll-parent",
  "jquery/ui/version",
  "jquery/ui/widget",
], function (e) {
  return (
    (function (e) {
      return (
        e.widget("ui.draggable", e.ui.mouse, {
          version: "1.12.1",
          widgetEventPrefix: "drag",
          options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null,
          },
          _create: function () {
            "original" === this.options.helper && this._setPositionRelative(),
              this.options.addClasses && this._addClass("ui-draggable"),
              this._setHandleClassName(),
              this._mouseInit();
          },
          _setOption: function (e, t) {
            this._super(e, t),
              "handle" === e &&
                (this._removeHandleClassName(), this._setHandleClassName());
          },
          _destroy: function () {
            return (this.helper || this.element).is(".ui-draggable-dragging")
              ? ((this.destroyOnClear = !0), void 0)
              : (this._removeHandleClassName(), this._mouseDestroy(), void 0);
          },
          _mouseCapture: function (t) {
            var a = this.options;
            return this.helper ||
              a.disabled ||
              e(t.target).closest(".ui-resizable-handle").length > 0
              ? !1
              : ((this.handle = this._getHandle(t)),
                this.handle
                  ? (this._blurActiveElement(t),
                    this._blockFrames(
                      a.iframeFix === !0 ? "iframe" : a.iframeFix
                    ),
                    !0)
                  : !1);
          },
          _blockFrames: function (t) {
            this.iframeBlocks = this.document.find(t).map(function () {
              var t = e(this);
              return e("<div>")
                .css("position", "absolute")
                .appendTo(t.parent())
                .outerWidth(t.outerWidth())
                .outerHeight(t.outerHeight())
                .offset(t.offset())[0];
            });
          },
          _unblockFrames: function () {
            this.iframeBlocks &&
              (this.iframeBlocks.remove(), delete this.iframeBlocks);
          },
          _blurActiveElement: function (t) {
            var a = e.ui.safeActiveElement(this.document[0]),
              i = e(t.target);
            i.closest(a).length || e.ui.safeBlur(a);
          },
          _mouseStart: function (t) {
            var a = this.options;
            return (
              (this.helper = this._createHelper(t)),
              this._addClass(this.helper, "ui-draggable-dragging"),
              this._cacheHelperProportions(),
              e.ui.ddmanager && (e.ui.ddmanager.current = this),
              this._cacheMargins(),
              (this.cssPosition = this.helper.css("position")),
              (this.scrollParent = this.helper.scrollParent(!0)),
              (this.offsetParent = this.helper.offsetParent()),
              (this.hasFixedAncestor =
                this.helper.parents().filter(function () {
                  return "fixed" === e(this).css("position");
                }).length > 0),
              (this.positionAbs = this.element.offset()),
              this._refreshOffsets(t),
              (this.originalPosition = this.position =
                this._generatePosition(t, !1)),
              (this.originalPageX = t.pageX),
              (this.originalPageY = t.pageY),
              a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt),
              this._setContainment(),
              this._trigger("start", t) === !1
                ? (this._clear(), !1)
                : (this._cacheHelperProportions(),
                  e.ui.ddmanager &&
                    !a.dropBehaviour &&
                    e.ui.ddmanager.prepareOffsets(this, t),
                  this._mouseDrag(t, !0),
                  e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t),
                  !0)
            );
          },
          _refreshOffsets: function (e) {
            (this.offset = {
              top: this.positionAbs.top - this.margins.top,
              left: this.positionAbs.left - this.margins.left,
              scroll: !1,
              parent: this._getParentOffset(),
              relative: this._getRelativeOffset(),
            }),
              (this.offset.click = {
                left: e.pageX - this.offset.left,
                top: e.pageY - this.offset.top,
              });
          },
          _mouseDrag: function (t, a) {
            if (
              (this.hasFixedAncestor &&
                (this.offset.parent = this._getParentOffset()),
              (this.position = this._generatePosition(t, !0)),
              (this.positionAbs = this._convertPositionTo("absolute")),
              !a)
            ) {
              var i = this._uiHash();
              if (this._trigger("drag", t, i) === !1)
                return this._mouseUp(new e.Event("mouseup", t)), !1;
              this.position = i.position;
            }
            return (
              (this.helper[0].style.left = this.position.left + "px"),
              (this.helper[0].style.top = this.position.top + "px"),
              e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
              !1
            );
          },
          _mouseStop: function (t) {
            var a = this,
              i = !1;
            return (
              e.ui.ddmanager &&
                !this.options.dropBehaviour &&
                (i = e.ui.ddmanager.drop(this, t)),
              this.dropped && ((i = this.dropped), (this.dropped = !1)),
              ("invalid" === this.options.revert && !i) ||
              ("valid" === this.options.revert && i) ||
              this.options.revert === !0 ||
              (e.isFunction(this.options.revert) &&
                this.options.revert.call(this.element, i))
                ? e(this.helper).animate(
                    this.originalPosition,
                    parseInt(this.options.revertDuration, 10),
                    function () {
                      a._trigger("stop", t) !== !1 && a._clear();
                    }
                  )
                : this._trigger("stop", t) !== !1 && this._clear(),
              !1
            );
          },
          _mouseUp: function (t) {
            return (
              this._unblockFrames(),
              e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t),
              this.handleElement.is(t.target) && this.element.trigger("focus"),
              e.ui.mouse.prototype._mouseUp.call(this, t)
            );
          },
          cancel: function () {
            return (
              this.helper.is(".ui-draggable-dragging")
                ? this._mouseUp(
                    new e.Event("mouseup", { target: this.element[0] })
                  )
                : this._clear(),
              this
            );
          },
          _getHandle: function (t) {
            return this.options.handle
              ? !!e(t.target).closest(this.element.find(this.options.handle))
                  .length
              : !0;
          },
          _setHandleClassName: function () {
            (this.handleElement = this.options.handle
              ? this.element.find(this.options.handle)
              : this.element),
              this._addClass(this.handleElement, "ui-draggable-handle");
          },
          _removeHandleClassName: function () {
            this._removeClass(this.handleElement, "ui-draggable-handle");
          },
          _createHelper: function (t) {
            var a = this.options,
              i = e.isFunction(a.helper),
              n = i
                ? e(a.helper.apply(this.element[0], [t]))
                : "clone" === a.helper
                ? this.element.clone().removeAttr("id")
                : this.element;
            return (
              n.parents("body").length ||
                n.appendTo(
                  "parent" === a.appendTo
                    ? this.element[0].parentNode
                    : a.appendTo
                ),
              i && n[0] === this.element[0] && this._setPositionRelative(),
              n[0] === this.element[0] ||
                /(fixed|absolute)/.test(n.css("position")) ||
                n.css("position", "absolute"),
              n
            );
          },
          _setPositionRelative: function () {
            /^(?:r|a|f)/.test(this.element.css("position")) ||
              (this.element[0].style.position = "relative");
          },
          _adjustOffsetFromHelper: function (t) {
            "string" == typeof t && (t = t.split(" ")),
              e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }),
              "left" in t &&
                (this.offset.click.left = t.left + this.margins.left),
              "right" in t &&
                (this.offset.click.left =
                  this.helperProportions.width - t.right + this.margins.left),
              "top" in t && (this.offset.click.top = t.top + this.margins.top),
              "bottom" in t &&
                (this.offset.click.top =
                  this.helperProportions.height - t.bottom + this.margins.top);
          },
          _isRootNode: function (e) {
            return /(html|body)/i.test(e.tagName) || e === this.document[0];
          },
          _getParentOffset: function () {
            var t = this.offsetParent.offset(),
              a = this.document[0];
            return (
              "absolute" === this.cssPosition &&
                this.scrollParent[0] !== a &&
                e.contains(this.scrollParent[0], this.offsetParent[0]) &&
                ((t.left += this.scrollParent.scrollLeft()),
                (t.top += this.scrollParent.scrollTop())),
              this._isRootNode(this.offsetParent[0]) &&
                (t = { top: 0, left: 0 }),
              {
                top:
                  t.top +
                  (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left:
                  t.left +
                  (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
              }
            );
          },
          _getRelativeOffset: function () {
            if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
            var e = this.element.position(),
              t = this._isRootNode(this.scrollParent[0]);
            return {
              top:
                e.top -
                (parseInt(this.helper.css("top"), 10) || 0) +
                (t ? 0 : this.scrollParent.scrollTop()),
              left:
                e.left -
                (parseInt(this.helper.css("left"), 10) || 0) +
                (t ? 0 : this.scrollParent.scrollLeft()),
            };
          },
          _cacheMargins: function () {
            this.margins = {
              left: parseInt(this.element.css("marginLeft"), 10) || 0,
              top: parseInt(this.element.css("marginTop"), 10) || 0,
              right: parseInt(this.element.css("marginRight"), 10) || 0,
              bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
            };
          },
          _cacheHelperProportions: function () {
            this.helperProportions = {
              width: this.helper.outerWidth(),
              height: this.helper.outerHeight(),
            };
          },
          _setContainment: function () {
            var t,
              a,
              i,
              n = this.options,
              r = this.document[0];
            return (
              (this.relativeContainer = null),
              n.containment
                ? "window" === n.containment
                  ? ((this.containment = [
                      e(window).scrollLeft() -
                        this.offset.relative.left -
                        this.offset.parent.left,
                      e(window).scrollTop() -
                        this.offset.relative.top -
                        this.offset.parent.top,
                      e(window).scrollLeft() +
                        e(window).width() -
                        this.helperProportions.width -
                        this.margins.left,
                      e(window).scrollTop() +
                        (e(window).height() || r.body.parentNode.scrollHeight) -
                        this.helperProportions.height -
                        this.margins.top,
                    ]),
                    void 0)
                  : "document" === n.containment
                  ? ((this.containment = [
                      0,
                      0,
                      e(r).width() -
                        this.helperProportions.width -
                        this.margins.left,
                      (e(r).height() || r.body.parentNode.scrollHeight) -
                        this.helperProportions.height -
                        this.margins.top,
                    ]),
                    void 0)
                  : n.containment.constructor === Array
                  ? ((this.containment = n.containment), void 0)
                  : ("parent" === n.containment &&
                      (n.containment = this.helper[0].parentNode),
                    (a = e(n.containment)),
                    (i = a[0]),
                    i &&
                      ((t = /(scroll|auto)/.test(a.css("overflow"))),
                      (this.containment = [
                        (parseInt(a.css("borderLeftWidth"), 10) || 0) +
                          (parseInt(a.css("paddingLeft"), 10) || 0),
                        (parseInt(a.css("borderTopWidth"), 10) || 0) +
                          (parseInt(a.css("paddingTop"), 10) || 0),
                        (t
                          ? Math.max(i.scrollWidth, i.offsetWidth)
                          : i.offsetWidth) -
                          (parseInt(a.css("borderRightWidth"), 10) || 0) -
                          (parseInt(a.css("paddingRight"), 10) || 0) -
                          this.helperProportions.width -
                          this.margins.left -
                          this.margins.right,
                        (t
                          ? Math.max(i.scrollHeight, i.offsetHeight)
                          : i.offsetHeight) -
                          (parseInt(a.css("borderBottomWidth"), 10) || 0) -
                          (parseInt(a.css("paddingBottom"), 10) || 0) -
                          this.helperProportions.height -
                          this.margins.top -
                          this.margins.bottom,
                      ]),
                      (this.relativeContainer = a)),
                    void 0)
                : ((this.containment = null), void 0)
            );
          },
          _convertPositionTo: function (e, t) {
            t || (t = this.position);
            var a = "absolute" === e ? 1 : -1,
              i = this._isRootNode(this.scrollParent[0]);
            return {
              top:
                t.top +
                this.offset.relative.top * a +
                this.offset.parent.top * a -
                ("fixed" === this.cssPosition
                  ? -this.offset.scroll.top
                  : i
                  ? 0
                  : this.offset.scroll.top) *
                  a,
              left:
                t.left +
                this.offset.relative.left * a +
                this.offset.parent.left * a -
                ("fixed" === this.cssPosition
                  ? -this.offset.scroll.left
                  : i
                  ? 0
                  : this.offset.scroll.left) *
                  a,
            };
          },
          _generatePosition: function (e, t) {
            var a,
              i,
              n,
              r,
              o = this.options,
              l = this._isRootNode(this.scrollParent[0]),
              s = e.pageX,
              d = e.pageY;
            return (
              (l && this.offset.scroll) ||
                (this.offset.scroll = {
                  top: this.scrollParent.scrollTop(),
                  left: this.scrollParent.scrollLeft(),
                }),
              t &&
                (this.containment &&
                  (this.relativeContainer
                    ? ((i = this.relativeContainer.offset()),
                      (a = [
                        this.containment[0] + i.left,
                        this.containment[1] + i.top,
                        this.containment[2] + i.left,
                        this.containment[3] + i.top,
                      ]))
                    : (a = this.containment),
                  e.pageX - this.offset.click.left < a[0] &&
                    (s = a[0] + this.offset.click.left),
                  e.pageY - this.offset.click.top < a[1] &&
                    (d = a[1] + this.offset.click.top),
                  e.pageX - this.offset.click.left > a[2] &&
                    (s = a[2] + this.offset.click.left),
                  e.pageY - this.offset.click.top > a[3] &&
                    (d = a[3] + this.offset.click.top)),
                o.grid &&
                  ((n = o.grid[1]
                    ? this.originalPageY +
                      Math.round((d - this.originalPageY) / o.grid[1]) *
                        o.grid[1]
                    : this.originalPageY),
                  (d = a
                    ? n - this.offset.click.top >= a[1] ||
                      n - this.offset.click.top > a[3]
                      ? n
                      : n - this.offset.click.top >= a[1]
                      ? n - o.grid[1]
                      : n + o.grid[1]
                    : n),
                  (r = o.grid[0]
                    ? this.originalPageX +
                      Math.round((s - this.originalPageX) / o.grid[0]) *
                        o.grid[0]
                    : this.originalPageX),
                  (s = a
                    ? r - this.offset.click.left >= a[0] ||
                      r - this.offset.click.left > a[2]
                      ? r
                      : r - this.offset.click.left >= a[0]
                      ? r - o.grid[0]
                      : r + o.grid[0]
                    : r)),
                "y" === o.axis && (s = this.originalPageX),
                "x" === o.axis && (d = this.originalPageY)),
              {
                top:
                  d -
                  this.offset.click.top -
                  this.offset.relative.top -
                  this.offset.parent.top +
                  ("fixed" === this.cssPosition
                    ? -this.offset.scroll.top
                    : l
                    ? 0
                    : this.offset.scroll.top),
                left:
                  s -
                  this.offset.click.left -
                  this.offset.relative.left -
                  this.offset.parent.left +
                  ("fixed" === this.cssPosition
                    ? -this.offset.scroll.left
                    : l
                    ? 0
                    : this.offset.scroll.left),
              }
            );
          },
          _clear: function () {
            this._removeClass(this.helper, "ui-draggable-dragging"),
              this.helper[0] === this.element[0] ||
                this.cancelHelperRemoval ||
                this.helper.remove(),
              (this.helper = null),
              (this.cancelHelperRemoval = !1),
              this.destroyOnClear && this.destroy();
          },
          _trigger: function (t, a, i) {
            return (
              (i = i || this._uiHash()),
              e.ui.plugin.call(this, t, [a, i, this], !0),
              /^(drag|start|stop)/.test(t) &&
                ((this.positionAbs = this._convertPositionTo("absolute")),
                (i.offset = this.positionAbs)),
              e.Widget.prototype._trigger.call(this, t, a, i)
            );
          },
          plugins: {},
          _uiHash: function () {
            return {
              helper: this.helper,
              position: this.position,
              originalPosition: this.originalPosition,
              offset: this.positionAbs,
            };
          },
        }),
        e.ui.plugin.add("draggable", "connectToSortable", {
          start: function (t, a, i) {
            var n = e.extend({}, a, { item: i.element });
            (i.sortables = []),
              e(i.options.connectToSortable).each(function () {
                var a = e(this).sortable("instance");
                a &&
                  !a.options.disabled &&
                  (i.sortables.push(a),
                  a.refreshPositions(),
                  a._trigger("activate", t, n));
              });
          },
          stop: function (t, a, i) {
            var n = e.extend({}, a, { item: i.element });
            (i.cancelHelperRemoval = !1),
              e.each(i.sortables, function () {
                var e = this;
                e.isOver
                  ? ((e.isOver = 0),
                    (i.cancelHelperRemoval = !0),
                    (e.cancelHelperRemoval = !1),
                    (e._storedCSS = {
                      position: e.placeholder.css("position"),
                      top: e.placeholder.css("top"),
                      left: e.placeholder.css("left"),
                    }),
                    e._mouseStop(t),
                    (e.options.helper = e.options._helper))
                  : ((e.cancelHelperRemoval = !0),
                    e._trigger("deactivate", t, n));
              });
          },
          drag: function (t, a, i) {
            e.each(i.sortables, function () {
              var n = !1,
                r = this;
              (r.positionAbs = i.positionAbs),
                (r.helperProportions = i.helperProportions),
                (r.offset.click = i.offset.click),
                r._intersectsWith(r.containerCache) &&
                  ((n = !0),
                  e.each(i.sortables, function () {
                    return (
                      (this.positionAbs = i.positionAbs),
                      (this.helperProportions = i.helperProportions),
                      (this.offset.click = i.offset.click),
                      this !== r &&
                        this._intersectsWith(this.containerCache) &&
                        e.contains(r.element[0], this.element[0]) &&
                        (n = !1),
                      n
                    );
                  })),
                n
                  ? (r.isOver ||
                      ((r.isOver = 1),
                      (i._parent = a.helper.parent()),
                      (r.currentItem = a.helper
                        .appendTo(r.element)
                        .data("ui-sortable-item", !0)),
                      (r.options._helper = r.options.helper),
                      (r.options.helper = function () {
                        return a.helper[0];
                      }),
                      (t.target = r.currentItem[0]),
                      r._mouseCapture(t, !0),
                      r._mouseStart(t, !0, !0),
                      (r.offset.click.top = i.offset.click.top),
                      (r.offset.click.left = i.offset.click.left),
                      (r.offset.parent.left -=
                        i.offset.parent.left - r.offset.parent.left),
                      (r.offset.parent.top -=
                        i.offset.parent.top - r.offset.parent.top),
                      i._trigger("toSortable", t),
                      (i.dropped = r.element),
                      e.each(i.sortables, function () {
                        this.refreshPositions();
                      }),
                      (i.currentItem = i.element),
                      (r.fromOutside = i)),
                    r.currentItem &&
                      (r._mouseDrag(t), (a.position = r.position)))
                  : r.isOver &&
                    ((r.isOver = 0),
                    (r.cancelHelperRemoval = !0),
                    (r.options._revert = r.options.revert),
                    (r.options.revert = !1),
                    r._trigger("out", t, r._uiHash(r)),
                    r._mouseStop(t, !0),
                    (r.options.revert = r.options._revert),
                    (r.options.helper = r.options._helper),
                    r.placeholder && r.placeholder.remove(),
                    a.helper.appendTo(i._parent),
                    i._refreshOffsets(t),
                    (a.position = i._generatePosition(t, !0)),
                    i._trigger("fromSortable", t),
                    (i.dropped = !1),
                    e.each(i.sortables, function () {
                      this.refreshPositions();
                    }));
            });
          },
        }),
        e.ui.plugin.add("draggable", "cursor", {
          start: function (t, a, i) {
            var n = e("body"),
              r = i.options;
            n.css("cursor") && (r._cursor = n.css("cursor")),
              n.css("cursor", r.cursor);
          },
          stop: function (t, a, i) {
            var n = i.options;
            n._cursor && e("body").css("cursor", n._cursor);
          },
        }),
        e.ui.plugin.add("draggable", "opacity", {
          start: function (t, a, i) {
            var n = e(a.helper),
              r = i.options;
            n.css("opacity") && (r._opacity = n.css("opacity")),
              n.css("opacity", r.opacity);
          },
          stop: function (t, a, i) {
            var n = i.options;
            n._opacity && e(a.helper).css("opacity", n._opacity);
          },
        }),
        e.ui.plugin.add("draggable", "scroll", {
          start: function (e, t, a) {
            a.scrollParentNotHidden ||
              (a.scrollParentNotHidden = a.helper.scrollParent(!1)),
              a.scrollParentNotHidden[0] !== a.document[0] &&
                "HTML" !== a.scrollParentNotHidden[0].tagName &&
                (a.overflowOffset = a.scrollParentNotHidden.offset());
          },
          drag: function (t, a, i) {
            var n = i.options,
              r = !1,
              o = i.scrollParentNotHidden[0],
              l = i.document[0];
            o !== l && "HTML" !== o.tagName
              ? ((n.axis && "x" === n.axis) ||
                  (i.overflowOffset.top + o.offsetHeight - t.pageY <
                  n.scrollSensitivity
                    ? (o.scrollTop = r = o.scrollTop + n.scrollSpeed)
                    : t.pageY - i.overflowOffset.top < n.scrollSensitivity &&
                      (o.scrollTop = r = o.scrollTop - n.scrollSpeed)),
                (n.axis && "y" === n.axis) ||
                  (i.overflowOffset.left + o.offsetWidth - t.pageX <
                  n.scrollSensitivity
                    ? (o.scrollLeft = r = o.scrollLeft + n.scrollSpeed)
                    : t.pageX - i.overflowOffset.left < n.scrollSensitivity &&
                      (o.scrollLeft = r = o.scrollLeft - n.scrollSpeed)))
              : ((n.axis && "x" === n.axis) ||
                  (t.pageY - e(l).scrollTop() < n.scrollSensitivity
                    ? (r = e(l).scrollTop(e(l).scrollTop() - n.scrollSpeed))
                    : e(window).height() - (t.pageY - e(l).scrollTop()) <
                        n.scrollSensitivity &&
                      (r = e(l).scrollTop(e(l).scrollTop() + n.scrollSpeed))),
                (n.axis && "y" === n.axis) ||
                  (t.pageX - e(l).scrollLeft() < n.scrollSensitivity
                    ? (r = e(l).scrollLeft(e(l).scrollLeft() - n.scrollSpeed))
                    : e(window).width() - (t.pageX - e(l).scrollLeft()) <
                        n.scrollSensitivity &&
                      (r = e(l).scrollLeft(
                        e(l).scrollLeft() + n.scrollSpeed
                      )))),
              r !== !1 &&
                e.ui.ddmanager &&
                !n.dropBehaviour &&
                e.ui.ddmanager.prepareOffsets(i, t);
          },
        }),
        e.ui.plugin.add("draggable", "snap", {
          start: function (t, a, i) {
            var n = i.options;
            (i.snapElements = []),
              e(
                n.snap.constructor !== String
                  ? n.snap.items || ":data(ui-draggable)"
                  : n.snap
              ).each(function () {
                var t = e(this),
                  a = t.offset();
                this !== i.element[0] &&
                  i.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: a.top,
                    left: a.left,
                  });
              });
          },
          drag: function (t, a, i) {
            var n,
              r,
              o,
              l,
              s,
              d,
              c,
              u,
              m,
              p,
              h = i.options,
              g = h.snapTolerance,
              f = a.offset.left,
              b = f + i.helperProportions.width,
              y = a.offset.top,
              v = y + i.helperProportions.height;
            for (m = i.snapElements.length - 1; m >= 0; m--)
              (s = i.snapElements[m].left - i.margins.left),
                (d = s + i.snapElements[m].width),
                (c = i.snapElements[m].top - i.margins.top),
                (u = c + i.snapElements[m].height),
                s - g > b ||
                f > d + g ||
                c - g > v ||
                y > u + g ||
                !e.contains(
                  i.snapElements[m].item.ownerDocument,
                  i.snapElements[m].item
                )
                  ? (i.snapElements[m].snapping &&
                      i.options.snap.release &&
                      i.options.snap.release.call(
                        i.element,
                        t,
                        e.extend(i._uiHash(), {
                          snapItem: i.snapElements[m].item,
                        })
                      ),
                    (i.snapElements[m].snapping = !1))
                  : ("inner" !== h.snapMode &&
                      ((n = Math.abs(c - v) <= g),
                      (r = Math.abs(u - y) <= g),
                      (o = Math.abs(s - b) <= g),
                      (l = Math.abs(d - f) <= g),
                      n &&
                        (a.position.top = i._convertPositionTo("relative", {
                          top: c - i.helperProportions.height,
                          left: 0,
                        }).top),
                      r &&
                        (a.position.top = i._convertPositionTo("relative", {
                          top: u,
                          left: 0,
                        }).top),
                      o &&
                        (a.position.left = i._convertPositionTo("relative", {
                          top: 0,
                          left: s - i.helperProportions.width,
                        }).left),
                      l &&
                        (a.position.left = i._convertPositionTo("relative", {
                          top: 0,
                          left: d,
                        }).left)),
                    (p = n || r || o || l),
                    "outer" !== h.snapMode &&
                      ((n = Math.abs(c - y) <= g),
                      (r = Math.abs(u - v) <= g),
                      (o = Math.abs(s - f) <= g),
                      (l = Math.abs(d - b) <= g),
                      n &&
                        (a.position.top = i._convertPositionTo("relative", {
                          top: c,
                          left: 0,
                        }).top),
                      r &&
                        (a.position.top = i._convertPositionTo("relative", {
                          top: u - i.helperProportions.height,
                          left: 0,
                        }).top),
                      o &&
                        (a.position.left = i._convertPositionTo("relative", {
                          top: 0,
                          left: s,
                        }).left),
                      l &&
                        (a.position.left = i._convertPositionTo("relative", {
                          top: 0,
                          left: d - i.helperProportions.width,
                        }).left)),
                    !i.snapElements[m].snapping &&
                      (n || r || o || l || p) &&
                      i.options.snap.snap &&
                      i.options.snap.snap.call(
                        i.element,
                        t,
                        e.extend(i._uiHash(), {
                          snapItem: i.snapElements[m].item,
                        })
                      ),
                    (i.snapElements[m].snapping = n || r || o || l || p));
          },
        }),
        e.ui.plugin.add("draggable", "stack", {
          start: function (t, a, i) {
            var n,
              r = i.options,
              o = e.makeArray(e(r.stack)).sort(function (t, a) {
                return (
                  (parseInt(e(t).css("zIndex"), 10) || 0) -
                  (parseInt(e(a).css("zIndex"), 10) || 0)
                );
              });
            o.length &&
              ((n = parseInt(e(o[0]).css("zIndex"), 10) || 0),
              e(o).each(function (t) {
                e(this).css("zIndex", n + t);
              }),
              this.css("zIndex", n + o.length));
          },
        }),
        e.ui.plugin.add("draggable", "zIndex", {
          start: function (t, a, i) {
            var n = e(a.helper),
              r = i.options;
            n.css("zIndex") && (r._zIndex = n.css("zIndex")),
              n.css("zIndex", r.zIndex);
          },
          stop: function (t, a, i) {
            var n = i.options;
            n._zIndex && e(a.helper).css("zIndex", n._zIndex);
          },
        }),
        e.ui.draggable
      );
    })(e),
    e
  );
});
//@ sourceMappingURL=draggable.js.map
