define("jquery/ui/widgets/resizable", [
  "jquery/ui/core",
  "jquery/ui/mouse",
  "jquery/ui/disable-selection",
  "jquery/ui/plugin",
  "jquery/ui/version",
  "jquery/ui/widget",
], function (e) {
  return (
    (function (e) {
      return (
        e.widget("ui.resizable", e.ui.mouse, {
          version: "1.12.1",
          widgetEventPrefix: "resize",
          options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {
              "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se",
            },
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null,
          },
          _num: function (e) {
            return parseFloat(e) || 0;
          },
          _isNumber: function (e) {
            return !isNaN(parseFloat(e));
          },
          _hasScroll: function (t, a) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var i = a && "left" === a ? "scrollLeft" : "scrollTop",
              n = !1;
            return t[i] > 0 ? !0 : ((t[i] = 1), (n = t[i] > 0), (t[i] = 0), n);
          },
          _create: function () {
            var t,
              a = this.options,
              i = this;
            this._addClass("ui-resizable"),
              e.extend(this, {
                _aspectRatio: !!a.aspectRatio,
                aspectRatio: a.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper:
                  a.helper || a.ghost || a.animate
                    ? a.helper || "ui-resizable-helper"
                    : null,
              }),
              this.element[0].nodeName.match(
                /^(canvas|textarea|input|select|button|img)$/i
              ) &&
                (this.element.wrap(
                  e(
                    "<div class='ui-wrapper' style='overflow: hidden;'></div>"
                  ).css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left"),
                  })
                ),
                (this.element = this.element
                  .parent()
                  .data("ui-resizable", this.element.resizable("instance"))),
                (this.elementIsWrapper = !0),
                (t = {
                  marginTop: this.originalElement.css("marginTop"),
                  marginRight: this.originalElement.css("marginRight"),
                  marginBottom: this.originalElement.css("marginBottom"),
                  marginLeft: this.originalElement.css("marginLeft"),
                }),
                this.element.css(t),
                this.originalElement.css("margin", 0),
                (this.originalResizeStyle = this.originalElement.css("resize")),
                this.originalElement.css("resize", "none"),
                this._proportionallyResizeElements.push(
                  this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block",
                  })
                ),
                this.originalElement.css(t),
                this._proportionallyResize()),
              this._setupHandles(),
              a.autoHide &&
                e(this.element)
                  .on("mouseenter", function () {
                    a.disabled ||
                      (i._removeClass("ui-resizable-autohide"),
                      i._handles.show());
                  })
                  .on("mouseleave", function () {
                    a.disabled ||
                      i.resizing ||
                      (i._addClass("ui-resizable-autohide"), i._handles.hide());
                  }),
              this._mouseInit();
          },
          _destroy: function () {
            this._mouseDestroy();
            var t,
              a = function (t) {
                e(t)
                  .removeData("resizable")
                  .removeData("ui-resizable")
                  .off(".resizable")
                  .find(".ui-resizable-handle")
                  .remove();
              };
            return (
              this.elementIsWrapper &&
                (a(this.element),
                (t = this.element),
                this.originalElement
                  .css({
                    position: t.css("position"),
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: t.css("top"),
                    left: t.css("left"),
                  })
                  .insertAfter(t),
                t.remove()),
              this.originalElement.css("resize", this.originalResizeStyle),
              a(this.originalElement),
              this
            );
          },
          _setOption: function (e, t) {
            switch ((this._super(e, t), e)) {
              case "handles":
                this._removeHandles(), this._setupHandles();
            }
          },
          _setupHandles: function () {
            var t,
              a,
              i,
              n,
              r,
              o = this.options,
              l = this;
            if (
              ((this.handles =
                o.handles ||
                (e(".ui-resizable-handle", this.element).length
                  ? {
                      n: ".ui-resizable-n",
                      e: ".ui-resizable-e",
                      s: ".ui-resizable-s",
                      w: ".ui-resizable-w",
                      se: ".ui-resizable-se",
                      sw: ".ui-resizable-sw",
                      ne: ".ui-resizable-ne",
                      nw: ".ui-resizable-nw",
                    }
                  : "e,s,se")),
              (this._handles = e()),
              this.handles.constructor === String)
            )
              for (
                "all" === this.handles &&
                  (this.handles = "n,e,s,w,se,sw,ne,nw"),
                  i = this.handles.split(","),
                  this.handles = {},
                  a = 0;
                a < i.length;
                a++
              )
                (t = e.trim(i[a])),
                  (n = "ui-resizable-" + t),
                  (r = e("<div>")),
                  this._addClass(r, "ui-resizable-handle " + n),
                  r.css({ zIndex: o.zIndex }),
                  (this.handles[t] = ".ui-resizable-" + t),
                  this.element.append(r);
            (this._renderAxis = function (t) {
              var a, i, n, r;
              t = t || this.element;
              for (a in this.handles)
                this.handles[a].constructor === String
                  ? (this.handles[a] = this.element
                      .children(this.handles[a])
                      .first()
                      .show())
                  : (this.handles[a].jquery || this.handles[a].nodeType) &&
                    ((this.handles[a] = e(this.handles[a])),
                    this._on(this.handles[a], { mousedown: l._mouseDown })),
                  this.elementIsWrapper &&
                    this.originalElement[0].nodeName.match(
                      /^(textarea|input|select|button)$/i
                    ) &&
                    ((i = e(this.handles[a], this.element)),
                    (r = /sw|ne|nw|se|n|s/.test(a)
                      ? i.outerHeight()
                      : i.outerWidth()),
                    (n = [
                      "padding",
                      /ne|nw|n/.test(a)
                        ? "Top"
                        : /se|sw|s/.test(a)
                        ? "Bottom"
                        : /^e$/.test(a)
                        ? "Right"
                        : "Left",
                    ].join("")),
                    t.css(n, r),
                    this._proportionallyResize()),
                  (this._handles = this._handles.add(this.handles[a]));
            }),
              this._renderAxis(this.element),
              (this._handles = this._handles.add(
                this.element.find(".ui-resizable-handle")
              )),
              this._handles.disableSelection(),
              this._handles.on("mouseover", function () {
                l.resizing ||
                  (this.className &&
                    (r = this.className.match(
                      /ui-resizable-(se|sw|ne|nw|n|e|s|w)/i
                    )),
                  (l.axis = r && r[1] ? r[1] : "se"));
              }),
              o.autoHide &&
                (this._handles.hide(), this._addClass("ui-resizable-autohide"));
          },
          _removeHandles: function () {
            this._handles.remove();
          },
          _mouseCapture: function (t) {
            var a,
              i,
              n = !1;
            for (a in this.handles)
              (i = e(this.handles[a])[0]),
                (i === t.target || e.contains(i, t.target)) && (n = !0);
            return !this.options.disabled && n;
          },
          _mouseStart: function (t) {
            var a,
              i,
              n,
              r = this.options,
              o = this.element;
            return (
              (this.resizing = !0),
              this._renderProxy(),
              (a = this._num(this.helper.css("left"))),
              (i = this._num(this.helper.css("top"))),
              r.containment &&
                ((a += e(r.containment).scrollLeft() || 0),
                (i += e(r.containment).scrollTop() || 0)),
              (this.offset = this.helper.offset()),
              (this.position = { left: a, top: i }),
              (this.size = this._helper
                ? { width: this.helper.width(), height: this.helper.height() }
                : { width: o.width(), height: o.height() }),
              (this.originalSize = this._helper
                ? { width: o.outerWidth(), height: o.outerHeight() }
                : { width: o.width(), height: o.height() }),
              (this.sizeDiff = {
                width: o.outerWidth() - o.width(),
                height: o.outerHeight() - o.height(),
              }),
              (this.originalPosition = { left: a, top: i }),
              (this.originalMousePosition = { left: t.pageX, top: t.pageY }),
              (this.aspectRatio =
                "number" == typeof r.aspectRatio
                  ? r.aspectRatio
                  : this.originalSize.width / this.originalSize.height || 1),
              (n = e(".ui-resizable-" + this.axis).css("cursor")),
              e("body").css("cursor", "auto" === n ? this.axis + "-resize" : n),
              this._addClass("ui-resizable-resizing"),
              this._propagate("start", t),
              !0
            );
          },
          _mouseDrag: function (t) {
            var a,
              i,
              n = this.originalMousePosition,
              r = this.axis,
              o = t.pageX - n.left || 0,
              l = t.pageY - n.top || 0,
              s = this._change[r];
            return (
              this._updatePrevProperties(),
              s
                ? ((a = s.apply(this, [t, o, l])),
                  this._updateVirtualBoundaries(t.shiftKey),
                  (this._aspectRatio || t.shiftKey) &&
                    (a = this._updateRatio(a, t)),
                  (a = this._respectSize(a, t)),
                  this._updateCache(a),
                  this._propagate("resize", t),
                  (i = this._applyChanges()),
                  !this._helper &&
                    this._proportionallyResizeElements.length &&
                    this._proportionallyResize(),
                  e.isEmptyObject(i) ||
                    (this._updatePrevProperties(),
                    this._trigger("resize", t, this.ui()),
                    this._applyChanges()),
                  !1)
                : !1
            );
          },
          _mouseStop: function (t) {
            this.resizing = !1;
            var a,
              i,
              n,
              r,
              o,
              l,
              s,
              d = this.options,
              c = this;
            return (
              this._helper &&
                ((a = this._proportionallyResizeElements),
                (i = a.length && /textarea/i.test(a[0].nodeName)),
                (n =
                  i && this._hasScroll(a[0], "left") ? 0 : c.sizeDiff.height),
                (r = i ? 0 : c.sizeDiff.width),
                (o = {
                  width: c.helper.width() - r,
                  height: c.helper.height() - n,
                }),
                (l =
                  parseFloat(c.element.css("left")) +
                    (c.position.left - c.originalPosition.left) || null),
                (s =
                  parseFloat(c.element.css("top")) +
                    (c.position.top - c.originalPosition.top) || null),
                d.animate || this.element.css(e.extend(o, { top: s, left: l })),
                c.helper.height(c.size.height),
                c.helper.width(c.size.width),
                this._helper && !d.animate && this._proportionallyResize()),
              e("body").css("cursor", "auto"),
              this._removeClass("ui-resizable-resizing"),
              this._propagate("stop", t),
              this._helper && this.helper.remove(),
              !1
            );
          },
          _updatePrevProperties: function () {
            (this.prevPosition = {
              top: this.position.top,
              left: this.position.left,
            }),
              (this.prevSize = {
                width: this.size.width,
                height: this.size.height,
              });
          },
          _applyChanges: function () {
            var e = {};
            return (
              this.position.top !== this.prevPosition.top &&
                (e.top = this.position.top + "px"),
              this.position.left !== this.prevPosition.left &&
                (e.left = this.position.left + "px"),
              this.size.width !== this.prevSize.width &&
                (e.width = this.size.width + "px"),
              this.size.height !== this.prevSize.height &&
                (e.height = this.size.height + "px"),
              this.helper.css(e),
              e
            );
          },
          _updateVirtualBoundaries: function (e) {
            var t,
              a,
              i,
              n,
              r,
              o = this.options;
            (r = {
              minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
              maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0,
              minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
              maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0,
            }),
              (this._aspectRatio || e) &&
                ((t = r.minHeight * this.aspectRatio),
                (i = r.minWidth / this.aspectRatio),
                (a = r.maxHeight * this.aspectRatio),
                (n = r.maxWidth / this.aspectRatio),
                t > r.minWidth && (r.minWidth = t),
                i > r.minHeight && (r.minHeight = i),
                a < r.maxWidth && (r.maxWidth = a),
                n < r.maxHeight && (r.maxHeight = n)),
              (this._vBoundaries = r);
          },
          _updateCache: function (e) {
            (this.offset = this.helper.offset()),
              this._isNumber(e.left) && (this.position.left = e.left),
              this._isNumber(e.top) && (this.position.top = e.top),
              this._isNumber(e.height) && (this.size.height = e.height),
              this._isNumber(e.width) && (this.size.width = e.width);
          },
          _updateRatio: function (e) {
            var t = this.position,
              a = this.size,
              i = this.axis;
            return (
              this._isNumber(e.height)
                ? (e.width = e.height * this.aspectRatio)
                : this._isNumber(e.width) &&
                  (e.height = e.width / this.aspectRatio),
              "sw" === i &&
                ((e.left = t.left + (a.width - e.width)), (e.top = null)),
              "nw" === i &&
                ((e.top = t.top + (a.height - e.height)),
                (e.left = t.left + (a.width - e.width))),
              e
            );
          },
          _respectSize: function (e) {
            var t = this._vBoundaries,
              a = this.axis,
              i = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width,
              n =
                this._isNumber(e.height) &&
                t.maxHeight &&
                t.maxHeight < e.height,
              r = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width,
              o =
                this._isNumber(e.height) &&
                t.minHeight &&
                t.minHeight > e.height,
              l = this.originalPosition.left + this.originalSize.width,
              s = this.originalPosition.top + this.originalSize.height,
              d = /sw|nw|w/.test(a),
              c = /nw|ne|n/.test(a);
            return (
              r && (e.width = t.minWidth),
              o && (e.height = t.minHeight),
              i && (e.width = t.maxWidth),
              n && (e.height = t.maxHeight),
              r && d && (e.left = l - t.minWidth),
              i && d && (e.left = l - t.maxWidth),
              o && c && (e.top = s - t.minHeight),
              n && c && (e.top = s - t.maxHeight),
              e.width || e.height || e.left || !e.top
                ? e.width || e.height || e.top || !e.left || (e.left = null)
                : (e.top = null),
              e
            );
          },
          _getPaddingPlusBorderDimensions: function (e) {
            for (
              var t = 0,
                a = [],
                i = [
                  e.css("borderTopWidth"),
                  e.css("borderRightWidth"),
                  e.css("borderBottomWidth"),
                  e.css("borderLeftWidth"),
                ],
                n = [
                  e.css("paddingTop"),
                  e.css("paddingRight"),
                  e.css("paddingBottom"),
                  e.css("paddingLeft"),
                ];
              4 > t;
              t++
            )
              (a[t] = parseFloat(i[t]) || 0), (a[t] += parseFloat(n[t]) || 0);
            return { height: a[0] + a[2], width: a[1] + a[3] };
          },
          _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length)
              for (
                var e, t = 0, a = this.helper || this.element;
                t < this._proportionallyResizeElements.length;
                t++
              )
                (e = this._proportionallyResizeElements[t]),
                  this.outerDimensions ||
                    (this.outerDimensions =
                      this._getPaddingPlusBorderDimensions(e)),
                  e.css({
                    height: a.height() - this.outerDimensions.height || 0,
                    width: a.width() - this.outerDimensions.width || 0,
                  });
          },
          _renderProxy: function () {
            var t = this.element,
              a = this.options;
            (this.elementOffset = t.offset()),
              this._helper
                ? ((this.helper =
                    this.helper || e("<div style='overflow:hidden;'></div>")),
                  this._addClass(this.helper, this._helper),
                  this.helper.css({
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++a.zIndex,
                  }),
                  this.helper.appendTo("body").disableSelection())
                : (this.helper = this.element);
          },
          _change: {
            e: function (e, t) {
              return { width: this.originalSize.width + t };
            },
            w: function (e, t) {
              var a = this.originalSize,
                i = this.originalPosition;
              return { left: i.left + t, width: a.width - t };
            },
            n: function (e, t, a) {
              var i = this.originalSize,
                n = this.originalPosition;
              return { top: n.top + a, height: i.height - a };
            },
            s: function (e, t, a) {
              return { height: this.originalSize.height + a };
            },
            se: function (t, a, i) {
              return e.extend(
                this._change.s.apply(this, arguments),
                this._change.e.apply(this, [t, a, i])
              );
            },
            sw: function (t, a, i) {
              return e.extend(
                this._change.s.apply(this, arguments),
                this._change.w.apply(this, [t, a, i])
              );
            },
            ne: function (t, a, i) {
              return e.extend(
                this._change.n.apply(this, arguments),
                this._change.e.apply(this, [t, a, i])
              );
            },
            nw: function (t, a, i) {
              return e.extend(
                this._change.n.apply(this, arguments),
                this._change.w.apply(this, [t, a, i])
              );
            },
          },
          _propagate: function (t, a) {
            e.ui.plugin.call(this, t, [a, this.ui()]),
              "resize" !== t && this._trigger(t, a, this.ui());
          },
          plugins: {},
          ui: function () {
            return {
              originalElement: this.originalElement,
              element: this.element,
              helper: this.helper,
              position: this.position,
              size: this.size,
              originalSize: this.originalSize,
              originalPosition: this.originalPosition,
            };
          },
        }),
        e.ui.plugin.add("resizable", "animate", {
          stop: function (t) {
            var a = e(this).resizable("instance"),
              i = a.options,
              n = a._proportionallyResizeElements,
              r = n.length && /textarea/i.test(n[0].nodeName),
              o = r && a._hasScroll(n[0], "left") ? 0 : a.sizeDiff.height,
              l = r ? 0 : a.sizeDiff.width,
              s = { width: a.size.width - l, height: a.size.height - o },
              d =
                parseFloat(a.element.css("left")) +
                  (a.position.left - a.originalPosition.left) || null,
              c =
                parseFloat(a.element.css("top")) +
                  (a.position.top - a.originalPosition.top) || null;
            a.element.animate(e.extend(s, c && d ? { top: c, left: d } : {}), {
              duration: i.animateDuration,
              easing: i.animateEasing,
              step: function () {
                var i = {
                  width: parseFloat(a.element.css("width")),
                  height: parseFloat(a.element.css("height")),
                  top: parseFloat(a.element.css("top")),
                  left: parseFloat(a.element.css("left")),
                };
                n &&
                  n.length &&
                  e(n[0]).css({ width: i.width, height: i.height }),
                  a._updateCache(i),
                  a._propagate("resize", t);
              },
            });
          },
        }),
        e.ui.plugin.add("resizable", "containment", {
          start: function () {
            var t,
              a,
              i,
              n,
              r,
              o,
              l,
              s = e(this).resizable("instance"),
              d = s.options,
              c = s.element,
              u = d.containment,
              m =
                u instanceof e
                  ? u.get(0)
                  : /parent/.test(u)
                  ? c.parent().get(0)
                  : u;
            m &&
              ((s.containerElement = e(m)),
              /document/.test(u) || u === document
                ? ((s.containerOffset = { left: 0, top: 0 }),
                  (s.containerPosition = { left: 0, top: 0 }),
                  (s.parentData = {
                    element: e(document),
                    left: 0,
                    top: 0,
                    width: e(document).width(),
                    height:
                      e(document).height() ||
                      document.body.parentNode.scrollHeight,
                  }))
                : ((t = e(m)),
                  (a = []),
                  e(["Top", "Right", "Left", "Bottom"]).each(function (e, i) {
                    a[e] = s._num(t.css("padding" + i));
                  }),
                  (s.containerOffset = t.offset()),
                  (s.containerPosition = t.position()),
                  (s.containerSize = {
                    height: t.innerHeight() - a[3],
                    width: t.innerWidth() - a[1],
                  }),
                  (i = s.containerOffset),
                  (n = s.containerSize.height),
                  (r = s.containerSize.width),
                  (o = s._hasScroll(m, "left") ? m.scrollWidth : r),
                  (l = s._hasScroll(m) ? m.scrollHeight : n),
                  (s.parentData = {
                    element: m,
                    left: i.left,
                    top: i.top,
                    width: o,
                    height: l,
                  })));
          },
          resize: function (t) {
            var a,
              i,
              n,
              r,
              o = e(this).resizable("instance"),
              l = o.options,
              s = o.containerOffset,
              d = o.position,
              c = o._aspectRatio || t.shiftKey,
              u = { top: 0, left: 0 },
              m = o.containerElement,
              p = !0;
            m[0] !== document && /static/.test(m.css("position")) && (u = s),
              d.left < (o._helper ? s.left : 0) &&
                ((o.size.width =
                  o.size.width +
                  (o._helper
                    ? o.position.left - s.left
                    : o.position.left - u.left)),
                c && ((o.size.height = o.size.width / o.aspectRatio), (p = !1)),
                (o.position.left = l.helper ? s.left : 0)),
              d.top < (o._helper ? s.top : 0) &&
                ((o.size.height =
                  o.size.height +
                  (o._helper ? o.position.top - s.top : o.position.top)),
                c && ((o.size.width = o.size.height * o.aspectRatio), (p = !1)),
                (o.position.top = o._helper ? s.top : 0)),
              (n = o.containerElement.get(0) === o.element.parent().get(0)),
              (r = /relative|absolute/.test(
                o.containerElement.css("position")
              )),
              n && r
                ? ((o.offset.left = o.parentData.left + o.position.left),
                  (o.offset.top = o.parentData.top + o.position.top))
                : ((o.offset.left = o.element.offset().left),
                  (o.offset.top = o.element.offset().top)),
              (a = Math.abs(
                o.sizeDiff.width +
                  (o._helper ? o.offset.left - u.left : o.offset.left - s.left)
              )),
              (i = Math.abs(
                o.sizeDiff.height +
                  (o._helper ? o.offset.top - u.top : o.offset.top - s.top)
              )),
              a + o.size.width >= o.parentData.width &&
                ((o.size.width = o.parentData.width - a),
                c &&
                  ((o.size.height = o.size.width / o.aspectRatio), (p = !1))),
              i + o.size.height >= o.parentData.height &&
                ((o.size.height = o.parentData.height - i),
                c &&
                  ((o.size.width = o.size.height * o.aspectRatio), (p = !1))),
              p ||
                ((o.position.left = o.prevPosition.left),
                (o.position.top = o.prevPosition.top),
                (o.size.width = o.prevSize.width),
                (o.size.height = o.prevSize.height));
          },
          stop: function () {
            var t = e(this).resizable("instance"),
              a = t.options,
              i = t.containerOffset,
              n = t.containerPosition,
              r = t.containerElement,
              o = e(t.helper),
              l = o.offset(),
              s = o.outerWidth() - t.sizeDiff.width,
              d = o.outerHeight() - t.sizeDiff.height;
            t._helper &&
              !a.animate &&
              /relative/.test(r.css("position")) &&
              e(this).css({
                left: l.left - n.left - i.left,
                width: s,
                height: d,
              }),
              t._helper &&
                !a.animate &&
                /static/.test(r.css("position")) &&
                e(this).css({
                  left: l.left - n.left - i.left,
                  width: s,
                  height: d,
                });
          },
        }),
        e.ui.plugin.add("resizable", "alsoResize", {
          start: function () {
            var t = e(this).resizable("instance"),
              a = t.options;
            e(a.alsoResize).each(function () {
              var t = e(this);
              t.data("ui-resizable-alsoresize", {
                width: parseFloat(t.width()),
                height: parseFloat(t.height()),
                left: parseFloat(t.css("left")),
                top: parseFloat(t.css("top")),
              });
            });
          },
          resize: function (t, a) {
            var i = e(this).resizable("instance"),
              n = i.options,
              r = i.originalSize,
              o = i.originalPosition,
              l = {
                height: i.size.height - r.height || 0,
                width: i.size.width - r.width || 0,
                top: i.position.top - o.top || 0,
                left: i.position.left - o.left || 0,
              };
            e(n.alsoResize).each(function () {
              var t = e(this),
                i = e(this).data("ui-resizable-alsoresize"),
                n = {},
                r = t.parents(a.originalElement[0]).length
                  ? ["width", "height"]
                  : ["width", "height", "top", "left"];
              e.each(r, function (e, t) {
                var a = (i[t] || 0) + (l[t] || 0);
                a && a >= 0 && (n[t] = a || null);
              }),
                t.css(n);
            });
          },
          stop: function () {
            e(this).removeData("ui-resizable-alsoresize");
          },
        }),
        e.ui.plugin.add("resizable", "ghost", {
          start: function () {
            var t = e(this).resizable("instance"),
              a = t.size;
            (t.ghost = t.originalElement.clone()),
              t.ghost.css({
                opacity: 0.25,
                display: "block",
                position: "relative",
                height: a.height,
                width: a.width,
                margin: 0,
                left: 0,
                top: 0,
              }),
              t._addClass(t.ghost, "ui-resizable-ghost"),
              e.uiBackCompat !== !1 &&
                "string" == typeof t.options.ghost &&
                t.ghost.addClass(this.options.ghost),
              t.ghost.appendTo(t.helper);
          },
          resize: function () {
            var t = e(this).resizable("instance");
            t.ghost &&
              t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width,
              });
          },
          stop: function () {
            var t = e(this).resizable("instance");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0));
          },
        }),
        e.ui.plugin.add("resizable", "grid", {
          resize: function () {
            var t,
              a = e(this).resizable("instance"),
              i = a.options,
              n = a.size,
              r = a.originalSize,
              o = a.originalPosition,
              l = a.axis,
              s = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
              d = s[0] || 1,
              c = s[1] || 1,
              u = Math.round((n.width - r.width) / d) * d,
              m = Math.round((n.height - r.height) / c) * c,
              p = r.width + u,
              h = r.height + m,
              g = i.maxWidth && i.maxWidth < p,
              f = i.maxHeight && i.maxHeight < h,
              b = i.minWidth && i.minWidth > p,
              y = i.minHeight && i.minHeight > h;
            (i.grid = s),
              b && (p += d),
              y && (h += c),
              g && (p -= d),
              f && (h -= c),
              /^(se|s|e)$/.test(l)
                ? ((a.size.width = p), (a.size.height = h))
                : /^(ne)$/.test(l)
                ? ((a.size.width = p),
                  (a.size.height = h),
                  (a.position.top = o.top - m))
                : /^(sw)$/.test(l)
                ? ((a.size.width = p),
                  (a.size.height = h),
                  (a.position.left = o.left - u))
                : ((0 >= h - c || 0 >= p - d) &&
                    (t = a._getPaddingPlusBorderDimensions(this)),
                  h - c > 0
                    ? ((a.size.height = h), (a.position.top = o.top - m))
                    : ((h = c - t.height),
                      (a.size.height = h),
                      (a.position.top = o.top + r.height - h)),
                  p - d > 0
                    ? ((a.size.width = p), (a.position.left = o.left - u))
                    : ((p = d - t.width),
                      (a.size.width = p),
                      (a.position.left = o.left + r.width - p)));
          },
        }),
        e.ui.resizable
      );
    })(e),
    e
  );
});
//@ sourceMappingURL=resizable.js.map
