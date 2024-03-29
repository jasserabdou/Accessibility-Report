define("jquery/ui/widgets/tabs", [
  "jquery/ui/core",
  "jquery/ui/escape-selector",
  "jquery/ui/keycode",
  "jquery/ui/safe-active-element",
  "jquery/ui/unique-id",
  "jquery/ui/version",
  "jquery/ui/widget",
], function (e) {
  return (
    (function (e, t) {
      return (
        e.widget("ui.tabs", {
          version: "1.12.1",
          delay: 300,
          options: {
            active: null,
            classes: {
              "ui-tabs": "ui-corner-all",
              "ui-tabs-nav": "ui-corner-all",
              "ui-tabs-panel": "ui-corner-bottom",
              "ui-tabs-tab": "ui-corner-top",
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null,
          },
          _isLocal: (function () {
            var e = /#.*$/;
            return function (t) {
              var n, a;
              (n = t.href.replace(e, "")), (a = location.href.replace(e, ""));
              try {
                n = decodeURIComponent(n);
              } catch (i) {}
              try {
                a = decodeURIComponent(a);
              } catch (i) {}
              return t.hash.length > 1 && n === a;
            };
          })(),
          _create: function () {
            var t = this,
              n = this.options;
            (this.running = !1),
              this._addClass("ui-tabs", "ui-widget ui-widget-content"),
              this._toggleClass("ui-tabs-collapsible", null, n.collapsible),
              this._processTabs(),
              (n.active = this._initialActive()),
              e.isArray(n.disabled) &&
                (n.disabled = e
                  .unique(
                    n.disabled.concat(
                      e.map(
                        this.tabs.filter(".ui-state-disabled"),
                        function (e) {
                          return t.tabs.index(e);
                        }
                      )
                    )
                  )
                  .sort()),
              (this.active =
                this.options.active !== !1 && this.anchors.length
                  ? this._findActive(n.active)
                  : e()),
              this._refresh(),
              this.active.length && this.load(n.active);
          },
          _initialActive: function () {
            var t = this.options.active,
              n = this.options.collapsible,
              a = location.hash.substring(1);
            return (
              null === t &&
                (a &&
                  this.tabs.each(function (n, i) {
                    return e(i).attr("aria-controls") === a
                      ? ((t = n), !1)
                      : void 0;
                  }),
                null === t &&
                  (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
                (null === t || -1 === t) && (t = this.tabs.length ? 0 : !1)),
              t !== !1 &&
                ((t = this.tabs.index(this.tabs.eq(t))),
                -1 === t && (t = n ? !1 : 0)),
              !n && t === !1 && this.anchors.length && (t = 0),
              t
            );
          },
          _getCreateEventData: function () {
            return {
              tab: this.active,
              panel: this.active.length
                ? this._getPanelForTab(this.active)
                : e(),
            };
          },
          _tabKeydown: function (t) {
            var n = e(e.ui.safeActiveElement(this.document[0])).closest("li"),
              a = this.tabs.index(n),
              i = !0;
            if (!this._handlePageNav(t)) {
              switch (t.keyCode) {
                case e.ui.keyCode.RIGHT:
                case e.ui.keyCode.DOWN:
                  a++;
                  break;
                case e.ui.keyCode.UP:
                case e.ui.keyCode.LEFT:
                  (i = !1), a--;
                  break;
                case e.ui.keyCode.END:
                  a = this.anchors.length - 1;
                  break;
                case e.ui.keyCode.HOME:
                  a = 0;
                  break;
                case e.ui.keyCode.SPACE:
                  return (
                    t.preventDefault(),
                    clearTimeout(this.activating),
                    this._activate(a),
                    void 0
                  );
                case e.ui.keyCode.ENTER:
                  return (
                    t.preventDefault(),
                    clearTimeout(this.activating),
                    this._activate(a === this.options.active ? !1 : a),
                    void 0
                  );
                default:
                  return;
              }
              t.preventDefault(),
                clearTimeout(this.activating),
                (a = this._focusNextTab(a, i)),
                t.ctrlKey ||
                  t.metaKey ||
                  (n.attr("aria-selected", "false"),
                  this.tabs.eq(a).attr("aria-selected", "true"),
                  (this.activating = this._delay(function () {
                    this.option("active", a);
                  }, this.delay)));
            }
          },
          _panelKeydown: function (t) {
            this._handlePageNav(t) ||
              (t.ctrlKey &&
                t.keyCode === e.ui.keyCode.UP &&
                (t.preventDefault(), this.active.trigger("focus")));
          },
          _handlePageNav: function (t) {
            return t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP
              ? (this._activate(
                  this._focusNextTab(this.options.active - 1, !1)
                ),
                !0)
              : t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN
              ? (this._activate(
                  this._focusNextTab(this.options.active + 1, !0)
                ),
                !0)
              : void 0;
          },
          _findNextTab: function (t, n) {
            function a() {
              return t > i && (t = 0), 0 > t && (t = i), t;
            }
            for (
              var i = this.tabs.length - 1;
              -1 !== e.inArray(a(), this.options.disabled);

            )
              t = n ? t + 1 : t - 1;
            return t;
          },
          _focusNextTab: function (e, t) {
            return (
              (e = this._findNextTab(e, t)), this.tabs.eq(e).trigger("focus"), e
            );
          },
          _setOption: function (e, t) {
            return "active" === e
              ? (this._activate(t), void 0)
              : (this._super(e, t),
                "collapsible" === e &&
                  (this._toggleClass("ui-tabs-collapsible", null, t),
                  t || this.options.active !== !1 || this._activate(0)),
                "event" === e && this._setupEvents(t),
                "heightStyle" === e && this._setupHeightStyle(t),
                void 0);
          },
          _sanitizeSelector: function (e) {
            return e
              ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&")
              : "";
          },
          refresh: function () {
            var t = this.options,
              n = this.tablist.children(":has(a[href])");
            (t.disabled = e.map(n.filter(".ui-state-disabled"), function (e) {
              return n.index(e);
            })),
              this._processTabs(),
              t.active !== !1 && this.anchors.length
                ? this.active.length &&
                  !e.contains(this.tablist[0], this.active[0])
                  ? this.tabs.length === t.disabled.length
                    ? ((t.active = !1), (this.active = e()))
                    : this._activate(
                        this._findNextTab(Math.max(0, t.active - 1), !1)
                      )
                  : (t.active = this.tabs.index(this.active))
                : ((t.active = !1), (this.active = e())),
              this._refresh();
          },
          _refresh: function () {
            this._setOptionDisabled(this.options.disabled),
              this._setupEvents(this.options.event),
              this._setupHeightStyle(this.options.heightStyle),
              this.tabs
                .not(this.active)
                .attr({
                  "aria-selected": "false",
                  "aria-expanded": "false",
                  tabIndex: -1,
                }),
              this.panels
                .not(this._getPanelForTab(this.active))
                .hide()
                .attr({ "aria-hidden": "true" }),
              this.active.length
                ? (this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0,
                  }),
                  this._addClass(
                    this.active,
                    "ui-tabs-active",
                    "ui-state-active"
                  ),
                  this._getPanelForTab(this.active)
                    .show()
                    .attr({ "aria-hidden": "false" }))
                : this.tabs.eq(0).attr("tabIndex", 0);
          },
          _processTabs: function () {
            var t = this,
              n = this.tabs,
              a = this.anchors,
              i = this.panels;
            (this.tablist = this._getList().attr("role", "tablist")),
              this._addClass(
                this.tablist,
                "ui-tabs-nav",
                "ui-helper-reset ui-helper-clearfix ui-widget-header"
              ),
              this.tablist
                .on("mousedown" + this.eventNamespace, "> li", function (t) {
                  e(this).is(".ui-state-disabled") && t.preventDefault();
                })
                .on(
                  "focus" + this.eventNamespace,
                  ".ui-tabs-anchor",
                  function () {
                    e(this).closest("li").is(".ui-state-disabled") &&
                      this.blur();
                  }
                ),
              (this.tabs = this.tablist
                .find("> li:has(a[href])")
                .attr({ role: "tab", tabIndex: -1 })),
              this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"),
              (this.anchors = this.tabs
                .map(function () {
                  return e("a", this)[0];
                })
                .attr({ role: "presentation", tabIndex: -1 })),
              this._addClass(this.anchors, "ui-tabs-anchor"),
              (this.panels = e()),
              this.anchors.each(function (n, a) {
                var i,
                  r,
                  s,
                  o = e(a).uniqueId().attr("id"),
                  l = e(a).closest("li"),
                  d = l.attr("aria-controls");
                t._isLocal(a)
                  ? ((i = a.hash),
                    (s = i.substring(1)),
                    (r = t.element.find(t._sanitizeSelector(i))))
                  : ((s = l.attr("aria-controls") || e({}).uniqueId()[0].id),
                    (i = "#" + s),
                    (r = t.element.find(i)),
                    r.length ||
                      ((r = t._createPanel(s)),
                      r.insertAfter(t.panels[n - 1] || t.tablist)),
                    r.attr("aria-live", "polite")),
                  r.length && (t.panels = t.panels.add(r)),
                  d && l.data("ui-tabs-aria-controls", d),
                  l.attr({ "aria-controls": s, "aria-labelledby": o }),
                  r.attr("aria-labelledby", o);
              }),
              this.panels.attr("role", "tabpanel"),
              this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"),
              n &&
                (this._off(n.not(this.tabs)),
                this._off(a.not(this.anchors)),
                this._off(i.not(this.panels)));
          },
          _getList: function () {
            return this.tablist || this.element.find("ol, ul").eq(0);
          },
          _createPanel: function (t) {
            return e("<div>").attr("id", t).data("ui-tabs-destroy", !0);
          },
          _setOptionDisabled: function (t) {
            var n, a, i;
            for (
              e.isArray(t) &&
                (t.length
                  ? t.length === this.anchors.length && (t = !0)
                  : (t = !1)),
                i = 0;
              (a = this.tabs[i]);
              i++
            )
              (n = e(a)),
                t === !0 || -1 !== e.inArray(i, t)
                  ? (n.attr("aria-disabled", "true"),
                    this._addClass(n, null, "ui-state-disabled"))
                  : (n.removeAttr("aria-disabled"),
                    this._removeClass(n, null, "ui-state-disabled"));
            (this.options.disabled = t),
              this._toggleClass(
                this.widget(),
                this.widgetFullName + "-disabled",
                null,
                t === !0
              );
          },
          _setupEvents: function (t) {
            var n = {};
            t &&
              e.each(t.split(" "), function (e, t) {
                n[t] = "_eventHandler";
              }),
              this._off(this.anchors.add(this.tabs).add(this.panels)),
              this._on(!0, this.anchors, {
                click: function (e) {
                  e.preventDefault();
                },
              }),
              this._on(this.anchors, n),
              this._on(this.tabs, { keydown: "_tabKeydown" }),
              this._on(this.panels, { keydown: "_panelKeydown" }),
              this._focusable(this.tabs),
              this._hoverable(this.tabs);
          },
          _setupHeightStyle: function (t) {
            var n,
              a = this.element.parent();
            "fill" === t
              ? ((n = a.height()),
                (n -= this.element.outerHeight() - this.element.height()),
                this.element.siblings(":visible").each(function () {
                  var t = e(this),
                    a = t.css("position");
                  "absolute" !== a && "fixed" !== a && (n -= t.outerHeight(!0));
                }),
                this.element
                  .children()
                  .not(this.panels)
                  .each(function () {
                    n -= e(this).outerHeight(!0);
                  }),
                this.panels
                  .each(function () {
                    e(this).height(
                      Math.max(0, n - e(this).innerHeight() + e(this).height())
                    );
                  })
                  .css("overflow", "auto"))
              : "auto" === t &&
                ((n = 0),
                this.panels
                  .each(function () {
                    n = Math.max(n, e(this).height("").height());
                  })
                  .height(n));
          },
          _eventHandler: function (t) {
            var n = this.options,
              a = this.active,
              i = e(t.currentTarget),
              r = i.closest("li"),
              s = r[0] === a[0],
              o = s && n.collapsible,
              l = o ? e() : this._getPanelForTab(r),
              d = a.length ? this._getPanelForTab(a) : e(),
              c = { oldTab: a, oldPanel: d, newTab: o ? e() : r, newPanel: l };
            t.preventDefault(),
              r.hasClass("ui-state-disabled") ||
                r.hasClass("ui-tabs-loading") ||
                this.running ||
                (s && !n.collapsible) ||
                this._trigger("beforeActivate", t, c) === !1 ||
                ((n.active = o ? !1 : this.tabs.index(r)),
                (this.active = s ? e() : r),
                this.xhr && this.xhr.abort(),
                d.length ||
                  l.length ||
                  e.error("jQuery UI Tabs: Mismatching fragment identifier."),
                l.length && this.load(this.tabs.index(r), t),
                this._toggle(t, c));
          },
          _toggle: function (t, n) {
            function a() {
              (r.running = !1), r._trigger("activate", t, n);
            }
            function i() {
              r._addClass(
                n.newTab.closest("li"),
                "ui-tabs-active",
                "ui-state-active"
              ),
                s.length && r.options.show
                  ? r._show(s, r.options.show, a)
                  : (s.show(), a());
            }
            var r = this,
              s = n.newPanel,
              o = n.oldPanel;
            (this.running = !0),
              o.length && this.options.hide
                ? this._hide(o, this.options.hide, function () {
                    r._removeClass(
                      n.oldTab.closest("li"),
                      "ui-tabs-active",
                      "ui-state-active"
                    ),
                      i();
                  })
                : (this._removeClass(
                    n.oldTab.closest("li"),
                    "ui-tabs-active",
                    "ui-state-active"
                  ),
                  o.hide(),
                  i()),
              o.attr("aria-hidden", "true"),
              n.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false",
              }),
              s.length && o.length
                ? n.oldTab.attr("tabIndex", -1)
                : s.length &&
                  this.tabs
                    .filter(function () {
                      return 0 === e(this).attr("tabIndex");
                    })
                    .attr("tabIndex", -1),
              s.attr("aria-hidden", "false"),
              n.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0,
              });
          },
          _activate: function (t) {
            var n,
              a = this._findActive(t);
            a[0] !== this.active[0] &&
              (a.length || (a = this.active),
              (n = a.find(".ui-tabs-anchor")[0]),
              this._eventHandler({
                target: n,
                currentTarget: n,
                preventDefault: e.noop,
              }));
          },
          _findActive: function (t) {
            return t === !1 ? e() : this.tabs.eq(t);
          },
          _getIndex: function (t) {
            return (
              "string" == typeof t &&
                (t = this.anchors.index(
                  this.anchors.filter(
                    "[href$='" + e.ui.escapeSelector(t) + "']"
                  )
                )),
              t
            );
          },
          _destroy: function () {
            this.xhr && this.xhr.abort(),
              this.tablist.removeAttr("role").off(this.eventNamespace),
              this.anchors.removeAttr("role tabIndex").removeUniqueId(),
              this.tabs.add(this.panels).each(function () {
                e.data(this, "ui-tabs-destroy")
                  ? e(this).remove()
                  : e(this).removeAttr(
                      "role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded"
                    );
              }),
              this.tabs.each(function () {
                var t = e(this),
                  n = t.data("ui-tabs-aria-controls");
                n
                  ? t
                      .attr("aria-controls", n)
                      .removeData("ui-tabs-aria-controls")
                  : t.removeAttr("aria-controls");
              }),
              this.panels.show(),
              "content" !== this.options.heightStyle &&
                this.panels.css("height", "");
          },
          enable: function (n) {
            var a = this.options.disabled;
            a !== !1 &&
              (n === t
                ? (a = !1)
                : ((n = this._getIndex(n)),
                  (a = e.isArray(a)
                    ? e.map(a, function (e) {
                        return e !== n ? e : null;
                      })
                    : e.map(this.tabs, function (e, t) {
                        return t !== n ? t : null;
                      }))),
              this._setOptionDisabled(a));
          },
          disable: function (n) {
            var a = this.options.disabled;
            if (a !== !0) {
              if (n === t) a = !0;
              else {
                if (((n = this._getIndex(n)), -1 !== e.inArray(n, a))) return;
                a = e.isArray(a) ? e.merge([n], a).sort() : [n];
              }
              this._setOptionDisabled(a);
            }
          },
          load: function (t, n) {
            t = this._getIndex(t);
            var a = this,
              i = this.tabs.eq(t),
              r = i.find(".ui-tabs-anchor"),
              s = this._getPanelForTab(i),
              o = { tab: i, panel: s },
              l = function (e, t) {
                "abort" === t && a.panels.stop(!1, !0),
                  a._removeClass(i, "ui-tabs-loading"),
                  s.removeAttr("aria-busy"),
                  e === a.xhr && delete a.xhr;
              };
            this._isLocal(r[0]) ||
              ((this.xhr = e.ajax(this._ajaxSettings(r, n, o))),
              this.xhr &&
                "canceled" !== this.xhr.statusText &&
                (this._addClass(i, "ui-tabs-loading"),
                s.attr("aria-busy", "true"),
                this.xhr
                  .done(function (e, t, i) {
                    setTimeout(function () {
                      s.html(e), a._trigger("load", n, o), l(i, t);
                    }, 1);
                  })
                  .fail(function (e, t) {
                    setTimeout(function () {
                      l(e, t);
                    }, 1);
                  })));
          },
          _ajaxSettings: function (t, n, a) {
            var i = this;
            return {
              url: t.attr("href").replace(/#.*$/, ""),
              beforeSend: function (t, r) {
                return i._trigger(
                  "beforeLoad",
                  n,
                  e.extend({ jqXHR: t, ajaxSettings: r }, a)
                );
              },
            };
          },
          _getPanelForTab: function (t) {
            var n = e(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + n));
          },
        }),
        e.uiBackCompat !== !1 &&
          e.widget("ui.tabs", e.ui.tabs, {
            _processTabs: function () {
              this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
            },
          }),
        e.ui.tabs
      );
    })(e),
    e
  );
});
//@ sourceMappingURL=tabs.js.map
