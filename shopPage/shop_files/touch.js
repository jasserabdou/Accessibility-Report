define("jquery/event/special/touch", ["jquery", "jquery/event/fix"], function (
  e
) {
  var t = e("html"),
    a = "_specialTouchdrag",
    i = "_specialTouchpinch",
    n = "_specialTouchpinchInOut",
    o = "_specialTouchswipe",
    l = function () {},
    r = function () {},
    s = function (e, t, a) {
      return a && Math.abs(e) < a ? !1 : e ? (e >= 0 ? "in" : "out") : t;
    },
    d = function (e, t, a) {
      var i = Math.abs(e),
        n = Math.abs(t);
      return Math.abs(i - n) <= 1 || !(!a || i > a || n > a)
        ? !1
        : i > n
        ? 0 > e
          ? "left"
          : "right"
        : 0 > t
        ? "up"
        : "down";
    },
    c = function (t, a) {
      return (
        (t[e.expando] || (t[e.expando] = ++e.guid)) +
        "." +
        (a.guid || (a.guid = ++e.guid))
      );
    },
    u = function (t, a) {
      var i = 3 === t.nodeType ? t.parentNode : t;
      return i === a || e.contains(a, i);
    },
    p = function (e, a, i, n, o) {
      return (
        (p[o] = function (l) {
          var r,
            s = l.touches,
            d =
              "touchdrag" === e.type &&
              1 === s.length &&
              u(l.originalTarget, i),
            c =
              "touchpinch" === e.type &&
              2 === s.length &&
              u(s[0].target, i) &&
              u(s[1].target, i);
          (d || c) &&
            (t
              .off("touchmove." + n, m[o])
              .off("touchend." + n, h[o])
              .off("touchcancel." + n, g[o])
              .on("touchmove." + n, m(e, a, i, n, o))
              .on("touchend." + n, h(e, a, i, n, o))
              .on("touchcancel." + n, g(e, a, i, n, o)),
            (r = m[o]),
            (r.direction = !0),
            (r.state = "start"),
            (r.deltaT = l.timeStamp)),
            d &&
              ((r.startT = r.deltaT),
              (r.startX = (r.deltaX = l.pageX) + 0),
              (r.startY = (r.deltaY = l.pageY) + 0)),
            c &&
              ((r.delta = Math.sqrt(
                Math.pow(
                  (r.startX =
                    (r.deltaX = Math.abs(s[0].pageX - s[1].pageX)) + 0),
                  2
                ) +
                  Math.pow(
                    (r.startY =
                      (r.deltaY = Math.abs(s[0].pageY - s[1].pageY)) + 0),
                    2
                  )
              )),
              (r.start = r.delta + 0));
        }),
        p[o]
      );
    },
    m = function (e, t, a, i, n) {
      return (
        (m[n] = function (i) {
          var o,
            l,
            r,
            c,
            u,
            p,
            h,
            g = i.touches,
            f = "touchdrag" === e.type,
            b = "touchpinch" === e.type && g.length >= 2,
            v = m[n];
          f &&
            ((o = i.dragState = v.state),
            (l = i.dragDeltaT = -v.deltaT + (v.deltaT = i.timeStamp)),
            (r = i.dragDeltaX = -v.deltaX + (v.deltaX = i.pageX)),
            (c = i.dragDeltaY = -v.deltaY + (v.deltaY = i.pageY)),
            (u = i.dragDelta = Math.sqrt(Math.pow(r, 2) + Math.pow(c, 2))),
            (h = v.direction),
            (p = d(r, c))),
            b &&
              ((i.pinchState = v.state),
              (i.pinchDeltaT = -v.deltaT + (v.deltaT = i.timeStamp)),
              (i.pinchDeltaX =
                -v.deltaX + (v.deltaX = r = Math.abs(g[0].pageX - g[1].pageX))),
              (i.pinchDeltaY =
                -v.deltaY + (v.deltaY = c = Math.abs(g[0].pageY - g[1].pageY))),
              (i.pinchDelta =
                -v.delta +
                (v.delta = u = Math.sqrt(Math.pow(r, 2) + Math.pow(c, 2)))),
              (p = s(i.pinchDelta, (h = v.direction)))),
            (f || b) &&
              ((i.type = e.type),
              (i.target = a),
              (i.data = e.data),
              (v.state = "while"),
              (v.direction = p && h ? (h !== !0 ? (p === h ? p : !1) : p) : h),
              t.apply(a, arguments));
        }),
        m[n]
      );
    },
    h = function (a, i, l, r, c) {
      return (
        (h[c] = function (u) {
          if (m[c]) {
            t.off("touchmove." + r, m[c])
              .off("touchend." + r, h[c])
              .off("touchcancel." + r, g[c]);
            var p,
              f,
              b,
              v,
              y,
              k,
              T =
                "touchdrag" === a.type &&
                /^touch(end|cancel|drag)$/.test(u.type),
              C = "touchpinch" === a.type && /^touch(end|cancel)$/.test(u.type),
              S = m[c];
            delete m[c],
              delete h[c],
              delete g[c],
              T &&
                ((u.dragState = S.state = "stop"),
                (u.dragDeltaT = -S.deltaT + u.timeStamp),
                (u.dragDeltaX = 0),
                (u.dragDeltaY = 0),
                (u.dragDelta = 0)),
              C &&
                ((u.pinchState = S.state = "stop"),
                (u.pinchDeltaT = -S.deltaT + u.timeStamp),
                (u.pinchDeltaX = 0),
                (u.pinchDeltaY = 0),
                (u.pinchDelta = 0)),
              (T || C) &&
                ((u.type = a.type),
                (u.target = l),
                (u.data = a.data),
                i.apply(l, arguments)),
              T &&
                r === o &&
                (delete u.dragState,
                (p = u.dragDeltaT = -S.startT + u.timeStamp),
                (f = u.dragDeltaX = -S.startX + S.deltaX),
                (b = u.dragDeltaY = -S.startY + S.deltaY),
                (k = S.direction),
                (y = d(f, b, 20)),
                y && k === y && ((u.type = "touchswipe" + y), e(l).trigger(u))),
              C &&
                r === n &&
                (delete u.pinchState,
                (p = u.pinchDeltaT = -S.startT + u.timeStamp),
                (f = u.pinchDeltaX = -S.startX + S.deltaX),
                (b = u.pinchDeltaY = -S.startY + S.deltaY),
                (v = u.pinchDelta = -S.start + S.delta),
                (y = s(v, (k = S.direction), 80)),
                y && k === y && ((u.type = "touchpinch" + y), e(l).trigger(u)));
          }
        }),
        h[c]
      );
    },
    g = h;
  e.each({ touchdrag: a, touchpinch: i }, function (a, i) {
    e.event.special[a] = {
      setup: e.noop,
      add: function (t) {
        var a = c(this, t);
        (i = t.namespace === o ? o : t.namespace === n ? n : i),
          e(this).on("touchstart." + i, p(t, t.handler, this, i, a));
      },
      remove: function (a) {
        var l = c(this, a);
        (i = a.namespace === o ? o : a.namespace === n ? n : i),
          e(this).off("touchstart." + i, p[l]),
          delete p[l],
          t.off("touchmove." + i, m[l]),
          delete m[l],
          t.off("touchend." + i, h[l]),
          delete h[l],
          t.off("touchcancel." + i, g[l]),
          delete g[l];
      },
    };
  }),
    e.each({ in: n, out: n }, function (t, a) {
      e.event.special["touchpinch" + t] = {
        setup: e.noop,
        add: function () {
          p[c(this, l)] || e(this).on("touchpinch." + a, l);
        },
      };
    }),
    e.each({ up: o, right: o, down: o, left: o }, function (t, a) {
      e.event.special["touchswipe" + t] = {
        setup: e.noop,
        add: function () {
          p[c(this, r)] || e(this).on("touchdrag." + a, r);
        },
      };
    });
  var f = {},
    b = "State DeltaT DeltaX DeltaY Delta".split(" ");
  return (
    (e.event.special.touchzoom = {
      setup: e.noop,
      add: function (t) {
        e(this).on(
          "touchpinch." + i,
          (f[c(this, t)] = function (e) {
            for (var a = 0, i = b.length; i > a; a++)
              (e["zoom" + b[a]] = e["pinch" + b[a]]), delete e["pinch" + b[a]];
            (e.type = "touchzoom"), t.handler.apply(this, arguments);
          })
        );
      },
      remove: function (t) {
        var a = c(this, t);
        e(this).off("touchpinch." + i, f[a]), delete f[a];
      },
    }),
    e
  );
});
//@ sourceMappingURL=touch.js.map
