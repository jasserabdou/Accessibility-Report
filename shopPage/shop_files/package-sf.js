var require = (function (e) {
    var t = e || (e = {});
    return (
      (t = e.config || (e.config = {})),
      (t = t["jquery/metaparse"] || (t["jquery/metaparse"] = {})),
      (t.autoparse = {
        selector: t.autoparse ? ".ep-js" : "#PREVENT-METAPARSE",
        require: (epkStack = [
          "require",
          "jquery-sdk",
          "jquery/each",
          "jquery/event/fix",
          "jquery/fn/class",
          "jquery/tmpl",
          "jquery/expr",
          "jquery/metaparse",
          "jquery/fn/form",
          "jquery/fn/scrollto",
          "jquery/mixin",
          "jquery/dict",
          "jquery/jstree",
          "jquery/jstree/themes",
          "jquery/jstree/html_data",
          "jquery/effects",
          "jquery/effects/fade",
          "jquery/effects/slide",
          "jquery/ui/widget",
          "jquery/ui/core",
          "jquery/ui/position",
          "jquery/ui/mouse",
          "jquery/ui/dialog",
          "jquery/ui/tabs",
          "jquery/ui/slider",
          "jquery/i18n",
          "ep/modify",
          "ep",
          "ep/ajax",
          "ep/sslswitch",
          "ep/color",
          "ep/date",
          "ep/i18n",
          "ep/validate",
          "ep/dict",
          "ep/debug",
          "ep/fn/sprite",
          "ep/fn/busy",
          "ep/fn/progressbar",
          "ep/fn/contextorientation",
          "ep/sprite",
          "ep/ui/form",
          "ep/ui/tooltip",
          "ep/ui/input",
          "ep/ui/dialog",
          "ep/ui/magnifier",
          "ep/ui/slides",
          "ep/ui/coverflow",
          "ep/ui/thumbbox",
          "ep/ui/lightbox",
          "ep/ui/spinner",
          "ep/ui/datepicker",
          "ep/canvas",
          "ep/fn/sendasform",
          "de_epages/core",
          "de_epages/design/inc/sf-initialize",
          "de_epages/catalog/ui/productlastviewed",
          "de_epages/externalcontent/dojogadgetfix",
          "de_epages/productcomparison/ui/productcompare",
          "de_epages/productcomparison/ui/comparelink",
        ]),
      }),
      e
    );
  })(this.require),
  requirejs,
  require,
  define;
!(function (global) {
  function isFunction(e) {
    return "[object Function]" === ostring.call(e);
  }
  function isArray(e) {
    return "[object Array]" === ostring.call(e);
  }
  function each(e, t) {
    if (e) {
      var a;
      for (a = 0; a < e.length && (!e[a] || !t(e[a], a, e)); a += 1);
    }
  }
  function eachReverse(e, t) {
    if (e) {
      var a;
      for (a = e.length - 1; a > -1 && (!e[a] || !t(e[a], a, e)); a -= 1);
    }
  }
  function hasProp(e, t) {
    return hasOwn.call(e, t);
  }
  function getOwn(e, t) {
    return hasProp(e, t) && e[t];
  }
  function eachProp(e, t) {
    var a;
    for (a in e) if (hasProp(e, a) && t(e[a], a)) break;
  }
  function mixin(e, t, a, i) {
    return (
      t &&
        eachProp(t, function (t, n) {
          (a || !hasProp(e, n)) &&
            (i && "string" != typeof t
              ? (e[n] || (e[n] = {}), mixin(e[n], t, a, i))
              : (e[n] = t));
        }),
      e
    );
  }
  function bind(e, t) {
    return function () {
      return t.apply(e, arguments);
    };
  }
  function scripts() {
    return document.getElementsByTagName("script");
  }
  function defaultOnError(e) {
    throw e;
  }
  function getGlobal(e) {
    if (!e) return e;
    var t = global;
    return (
      each(e.split("."), function (e) {
        t = t[e];
      }),
      t
    );
  }
  function makeError(e, t, a, i) {
    var n = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
    return (
      (n.requireType = e), (n.requireModules = i), a && (n.originalError = a), n
    );
  }
  function newContext(e) {
    function t(e) {
      var t, a;
      for (t = 0; e[t]; t += 1)
        if (((a = e[t]), "." === a)) e.splice(t, 1), (t -= 1);
        else if (".." === a) {
          if (1 === t && (".." === e[2] || ".." === e[0])) break;
          t > 0 && (e.splice(t - 1, 2), (t -= 2));
        }
    }
    function a(e, a, i) {
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
        h,
        g = a && a.split("/"),
        f = g,
        y = x.map,
        b = y && y["*"];
      if (
        (e &&
          "." === e.charAt(0) &&
          (a
            ? ((f = getOwn(x.pkgs, a) ? (g = [a]) : g.slice(0, g.length - 1)),
              (e = f.concat(e.split("/"))),
              t(e),
              (r = getOwn(x.pkgs, (n = e[0]))),
              (e = e.join("/")),
              r && e === n + "/" + r.main && (e = n))
            : 0 === e.indexOf("./") && (e = e.substring(2))),
        i && y && (g || b))
      ) {
        for (l = e.split("/"), s = l.length; s > 0; s -= 1) {
          if (((c = l.slice(0, s).join("/")), g))
            for (d = g.length; d > 0; d -= 1)
              if (
                ((o = getOwn(y, g.slice(0, d).join("/"))),
                o && (o = getOwn(o, c)))
              ) {
                (u = o), (m = s);
                break;
              }
          if (u) break;
          !p && b && getOwn(b, c) && ((p = getOwn(b, c)), (h = s));
        }
        !u && p && ((u = p), (m = h)),
          u && (l.splice(0, m, u), (e = l.join("/")));
      }
      return e;
    }
    function i(e) {
      isBrowser &&
        each(scripts(), function (t) {
          return t.getAttribute("data-requiremodule") === e &&
            t.getAttribute("data-requirecontext") === k.contextName
            ? (t.parentNode.removeChild(t), !0)
            : void 0;
        });
    }
    function n(e) {
      var t = getOwn(x.paths, e);
      return t && isArray(t) && t.length > 1
        ? (t.shift(), k.require.undef(e), k.require([e]), !0)
        : void 0;
    }
    function r(e) {
      var t,
        a = e ? e.indexOf("!") : -1;
      return (
        a > -1 && ((t = e.substring(0, a)), (e = e.substring(a + 1, e.length))),
        [t, e]
      );
    }
    function o(e, t, i, n) {
      var o,
        l,
        s,
        d,
        c = null,
        u = t ? t.name : null,
        m = e,
        p = !0,
        h = "";
      return (
        e || ((p = !1), (e = "_@r" + (L += 1))),
        (d = r(e)),
        (c = d[0]),
        (e = d[1]),
        c && ((c = a(c, u, n)), (l = getOwn(E, c))),
        e &&
          (c
            ? (h =
                l && l.normalize
                  ? l.normalize(e, function (e) {
                      return a(e, u, n);
                    })
                  : a(e, u, n))
            : ((h = a(e, u, n)),
              (d = r(h)),
              (c = d[0]),
              (h = d[1]),
              (i = !0),
              (o = k.nameToUrl(h)))),
        (s = !c || l || i ? "" : "_unnormalized" + (D += 1)),
        {
          prefix: c,
          name: h,
          parentMap: t,
          unnormalized: !!s,
          url: o,
          originalName: m,
          isDefine: p,
          id: (c ? c + "!" + h : h) + s,
        }
      );
    }
    function l(e) {
      var t = e.id,
        a = getOwn(S, t);
      return a || (a = S[t] = new k.Module(e)), a;
    }
    function s(e, t, a) {
      var i = e.id,
        n = getOwn(S, i);
      !hasProp(E, i) || (n && !n.defineEmitComplete)
        ? ((n = l(e)), n.error && "error" === t ? a(n.error) : n.on(t, a))
        : "defined" === t && a(E[i]);
    }
    function d(e, t) {
      var a = e.requireModules,
        i = !1;
      t
        ? t(e)
        : (each(a, function (t) {
            var a = getOwn(S, t);
            a &&
              ((a.error = e), a.events.error && ((i = !0), a.emit("error", e)));
          }),
          i || req.onError(e));
    }
    function c() {
      globalDefQueue.length &&
        (apsp.apply(A, [A.length - 1, 0].concat(globalDefQueue)),
        (globalDefQueue = []));
    }
    function u(e) {
      delete S[e], delete C[e];
    }
    function m(e, t, a) {
      var i = e.map.id;
      e.error
        ? e.emit("error", e.error)
        : ((t[i] = !0),
          each(e.depMaps, function (i, n) {
            var r = i.id,
              o = getOwn(S, r);
            !o ||
              e.depMatched[n] ||
              a[r] ||
              (getOwn(t, r) ? (e.defineDep(n, E[r]), e.check()) : m(o, t, a));
          }),
          (a[i] = !0));
    }
    function p() {
      var e,
        t,
        a,
        r,
        o = 1e3 * x.waitSeconds,
        l = o && k.startTime + o < new Date().getTime(),
        s = [],
        c = [],
        u = !1,
        h = !0;
      if (!b) {
        if (
          ((b = !0),
          eachProp(C, function (a) {
            if (
              ((e = a.map),
              (t = e.id),
              a.enabled && (e.isDefine || c.push(a), !a.error))
            )
              if (!a.inited && l)
                n(t) ? ((r = !0), (u = !0)) : (s.push(t), i(t));
              else if (
                !a.inited &&
                a.fetched &&
                e.isDefine &&
                ((u = !0), !e.prefix)
              )
                return (h = !1);
          }),
          l && s.length)
        )
          return (
            (a = makeError(
              "timeout",
              "Load timeout for modules: " + s,
              null,
              s
            )),
            (a.contextName = k.contextName),
            d(a)
          );
        h &&
          each(c, function (e) {
            m(e, {}, {});
          }),
          (l && !r) ||
            !u ||
            (!isBrowser && !isWebWorker) ||
            w ||
            (w = setTimeout(function () {
              (w = 0), p();
            }, 50)),
          (b = !1);
      }
    }
    function h(e) {
      hasProp(E, e[0]) || l(o(e[0], null, !0)).init(e[1], e[2]);
    }
    function g(e, t, a, i) {
      e.detachEvent && !isOpera
        ? i && e.detachEvent(i, t)
        : e.removeEventListener(a, t, !1);
    }
    function f(e) {
      var t = e.currentTarget || e.srcElement;
      return (
        g(t, k.onScriptLoad, "load", "onreadystatechange"),
        g(t, k.onScriptError, "error"),
        { node: t, id: t && t.getAttribute("data-requiremodule") }
      );
    }
    function y() {
      var e;
      for (c(); A.length; ) {
        if (((e = A.shift()), null === e[0]))
          return d(
            makeError(
              "mismatch",
              "Mismatched anonymous define() module: " + e[e.length - 1]
            )
          );
        h(e);
      }
    }
    var b,
      v,
      k,
      T,
      w,
      x = {
        waitSeconds: 7,
        baseUrl: "./",
        paths: {},
        pkgs: {},
        shim: {},
        config: {},
      },
      S = {},
      C = {},
      M = {},
      A = [],
      E = {},
      q = {},
      L = 1,
      D = 1;
    return (
      (T = {
        require: function (e) {
          return e.require ? e.require : (e.require = k.makeRequire(e.map));
        },
        exports: function (e) {
          return (
            (e.usingExports = !0),
            e.map.isDefine
              ? e.exports
                ? e.exports
                : (e.exports = E[e.map.id] = {})
              : void 0
          );
        },
        module: function (e) {
          return e.module
            ? e.module
            : (e.module = {
                id: e.map.id,
                uri: e.map.url,
                config: function () {
                  var t,
                    a = getOwn(x.pkgs, e.map.id);
                  return (
                    (t = a
                      ? getOwn(x.config, e.map.id + "/" + a.main)
                      : getOwn(x.config, e.map.id)),
                    t || {}
                  );
                },
                exports: E[e.map.id],
              });
        },
      }),
      (v = function (e) {
        (this.events = getOwn(M, e.id) || {}),
          (this.map = e),
          (this.shim = getOwn(x.shim, e.id)),
          (this.depExports = []),
          (this.depMaps = []),
          (this.depMatched = []),
          (this.pluginMaps = {}),
          (this.depCount = 0);
      }),
      (v.prototype = {
        init: function (e, t, a, i) {
          (i = i || {}),
            this.inited ||
              ((this.factory = t),
              a
                ? this.on("error", a)
                : this.events.error &&
                  (a = bind(this, function (e) {
                    this.emit("error", e);
                  })),
              (this.depMaps = e && e.slice(0)),
              (this.errback = a),
              (this.inited = !0),
              (this.ignore = i.ignore),
              i.enabled || this.enabled ? this.enable() : this.check());
        },
        defineDep: function (e, t) {
          this.depMatched[e] ||
            ((this.depMatched[e] = !0),
            (this.depCount -= 1),
            (this.depExports[e] = t));
        },
        fetch: function () {
          if (!this.fetched) {
            (this.fetched = !0), (k.startTime = new Date().getTime());
            var e = this.map;
            return this.shim
              ? (k.makeRequire(this.map, { enableBuildCallback: !0 })(
                  this.shim.deps || [],
                  bind(this, function () {
                    return e.prefix ? this.callPlugin() : this.load();
                  })
                ),
                void 0)
              : e.prefix
              ? this.callPlugin()
              : this.load();
          }
        },
        load: function () {
          var e = this.map.url;
          q[e] || ((q[e] = !0), k.load(this.map.id, e));
        },
        check: function () {
          if (this.enabled && !this.enabling) {
            var e,
              t,
              a = this.map.id,
              i = this.depExports,
              n = this.exports,
              r = this.factory;
            if (this.inited) {
              if (this.error) this.emit("error", this.error);
              else if (!this.defining) {
                if (
                  ((this.defining = !0), this.depCount < 1 && !this.defined)
                ) {
                  if (isFunction(r)) {
                    if (
                      (this.events.error && this.map.isDefine) ||
                      req.onError !== defaultOnError
                    )
                      try {
                        n = k.execCb(a, r, i, n);
                      } catch (o) {
                        e = o;
                      }
                    else n = k.execCb(a, r, i, n);
                    if (
                      (this.map.isDefine &&
                        ((t = this.module),
                        t && void 0 !== t.exports && t.exports !== this.exports
                          ? (n = t.exports)
                          : void 0 === n &&
                            this.usingExports &&
                            (n = this.exports)),
                      e)
                    )
                      return (
                        (e.requireMap = this.map),
                        (e.requireModules = this.map.isDefine
                          ? [this.map.id]
                          : null),
                        (e.requireType = this.map.isDefine
                          ? "define"
                          : "require"),
                        d((this.error = e))
                      );
                  } else n = r;
                  (this.exports = n),
                    this.map.isDefine &&
                      !this.ignore &&
                      ((E[a] = n),
                      req.onResourceLoad &&
                        req.onResourceLoad(k, this.map, this.depMaps)),
                    u(a),
                    (this.defined = !0);
                }
                (this.defining = !1),
                  this.defined &&
                    !this.defineEmitted &&
                    ((this.defineEmitted = !0),
                    this.emit("defined", this.exports),
                    (this.defineEmitComplete = !0));
              }
            } else this.fetch();
          }
        },
        callPlugin: function () {
          var e = this.map,
            t = e.id,
            i = o(e.prefix);
          this.depMaps.push(i),
            s(
              i,
              "defined",
              bind(this, function (i) {
                var n,
                  r,
                  c,
                  m = this.map.name,
                  p = this.map.parentMap ? this.map.parentMap.name : null,
                  h = k.makeRequire(e.parentMap, { enableBuildCallback: !0 });
                return this.map.unnormalized
                  ? (i.normalize &&
                      (m =
                        i.normalize(m, function (e) {
                          return a(e, p, !0);
                        }) || ""),
                    (r = o(e.prefix + "!" + m, this.map.parentMap)),
                    s(
                      r,
                      "defined",
                      bind(this, function (e) {
                        this.init(
                          [],
                          function () {
                            return e;
                          },
                          null,
                          { enabled: !0, ignore: !0 }
                        );
                      })
                    ),
                    (c = getOwn(S, r.id)),
                    c &&
                      (this.depMaps.push(r),
                      this.events.error &&
                        c.on(
                          "error",
                          bind(this, function (e) {
                            this.emit("error", e);
                          })
                        ),
                      c.enable()),
                    void 0)
                  : ((n = bind(this, function (e) {
                      this.init(
                        [],
                        function () {
                          return e;
                        },
                        null,
                        { enabled: !0 }
                      );
                    })),
                    (n.error = bind(this, function (e) {
                      (this.inited = !0),
                        (this.error = e),
                        (e.requireModules = [t]),
                        eachProp(S, function (e) {
                          0 === e.map.id.indexOf(t + "_unnormalized") &&
                            u(e.map.id);
                        }),
                        d(e);
                    })),
                    (n.fromText = bind(this, function (a, i) {
                      var r = e.name,
                        s = o(r),
                        c = useInteractive;
                      i && (a = i),
                        c && (useInteractive = !1),
                        l(s),
                        hasProp(x.config, t) && (x.config[r] = x.config[t]);
                      try {
                        req.exec(a);
                      } catch (u) {
                        return d(
                          makeError(
                            "fromtexteval",
                            "fromText eval for " + t + " failed: " + u,
                            u,
                            [t]
                          )
                        );
                      }
                      c && (useInteractive = !0),
                        this.depMaps.push(s),
                        k.completeLoad(r),
                        h([r], n);
                    })),
                    i.load(e.name, h, n, x),
                    void 0);
              })
            ),
            k.enable(i, this),
            (this.pluginMaps[i.id] = i);
        },
        enable: function () {
          (C[this.map.id] = this),
            (this.enabled = !0),
            (this.enabling = !0),
            each(
              this.depMaps,
              bind(this, function (e, t) {
                var a, i, n;
                if ("string" == typeof e) {
                  if (
                    ((e = o(
                      e,
                      this.map.isDefine ? this.map : this.map.parentMap,
                      !1,
                      !this.skipMap
                    )),
                    (this.depMaps[t] = e),
                    (n = getOwn(T, e.id)))
                  )
                    return (this.depExports[t] = n(this)), void 0;
                  (this.depCount += 1),
                    s(
                      e,
                      "defined",
                      bind(this, function (e) {
                        this.defineDep(t, e), this.check();
                      })
                    ),
                    this.errback && s(e, "error", bind(this, this.errback));
                }
                (a = e.id),
                  (i = S[a]),
                  hasProp(T, a) || !i || i.enabled || k.enable(e, this);
              })
            ),
            eachProp(
              this.pluginMaps,
              bind(this, function (e) {
                var t = getOwn(S, e.id);
                t && !t.enabled && k.enable(e, this);
              })
            ),
            (this.enabling = !1),
            this.check();
        },
        on: function (e, t) {
          var a = this.events[e];
          a || (a = this.events[e] = []), a.push(t);
        },
        emit: function (e, t) {
          each(this.events[e], function (e) {
            e(t);
          }),
            "error" === e && delete this.events[e];
        },
      }),
      (k = {
        config: x,
        contextName: e,
        registry: S,
        defined: E,
        urlFetched: q,
        defQueue: A,
        Module: v,
        makeModuleMap: o,
        nextTick: req.nextTick,
        onError: d,
        configure: function (e) {
          e.baseUrl &&
            "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) &&
            (e.baseUrl += "/");
          var t = x.pkgs,
            a = x.shim,
            i = { paths: !0, config: !0, map: !0 };
          eachProp(e, function (e, t) {
            i[t]
              ? "map" === t
                ? (x.map || (x.map = {}), mixin(x[t], e, !0, !0))
                : mixin(x[t], e, !0)
              : (x[t] = e);
          }),
            e.shim &&
              (eachProp(e.shim, function (e, t) {
                isArray(e) && (e = { deps: e }),
                  (!e.exports && !e.init) ||
                    e.exportsFn ||
                    (e.exportsFn = k.makeShimExports(e)),
                  (a[t] = e);
              }),
              (x.shim = a)),
            e.packages &&
              (each(e.packages, function (e) {
                var a;
                (e = "string" == typeof e ? { name: e } : e),
                  (a = e.location),
                  (t[e.name] = {
                    name: e.name,
                    location: a || e.name,
                    main: (e.main || "main")
                      .replace(currDirRegExp, "")
                      .replace(jsSuffixRegExp, ""),
                  });
              }),
              (x.pkgs = t)),
            eachProp(S, function (e, t) {
              e.inited || e.map.unnormalized || (e.map = o(t));
            }),
            (e.deps || e.callback) && k.require(e.deps || [], e.callback);
        },
        makeShimExports: function (e) {
          function t() {
            var t;
            return (
              e.init && (t = e.init.apply(global, arguments)),
              t || (e.exports && getGlobal(e.exports))
            );
          }
          return t;
        },
        makeRequire: function (t, n) {
          function r(a, i, s) {
            var c, u, m;
            return (
              n.enableBuildCallback &&
                i &&
                isFunction(i) &&
                (i.__requireJsBuild = !0),
              "string" == typeof a
                ? isFunction(i)
                  ? d(makeError("requireargs", "Invalid require call"), s)
                  : t && hasProp(T, a)
                  ? T[a](S[t.id])
                  : req.get
                  ? req.get(k, a, t, r)
                  : ((u = o(a, t, !1, !0)),
                    (c = u.id),
                    hasProp(E, c)
                      ? E[c]
                      : d(
                          makeError(
                            "notloaded",
                            'Module name "' +
                              c +
                              '" has not been loaded yet for context: ' +
                              e +
                              (t ? "" : ". Use require([])")
                          )
                        ))
                : (y(),
                  k.nextTick(function () {
                    y(),
                      (m = l(o(null, t))),
                      (m.skipMap = n.skipMap),
                      m.init(a, i, s, { enabled: !0 }),
                      p();
                  }),
                  r)
            );
          }
          return (
            (n = n || {}),
            mixin(r, {
              isBrowser: isBrowser,
              toUrl: function (e) {
                var i,
                  n = e.lastIndexOf("."),
                  r = e.split("/")[0],
                  o = "." === r || ".." === r;
                return (
                  -1 !== n &&
                    (!o || n > 1) &&
                    ((i = e.substring(n, e.length)), (e = e.substring(0, n))),
                  k.nameToUrl(a(e, t && t.id, !0), i, !0)
                );
              },
              defined: function (e) {
                return hasProp(E, o(e, t, !1, !0).id);
              },
              specified: function (e) {
                return (e = o(e, t, !1, !0).id), hasProp(E, e) || hasProp(S, e);
              },
            }),
            t ||
              (r.undef = function (e) {
                c();
                var a = o(e, t, !0),
                  n = getOwn(S, e);
                i(e),
                  delete E[e],
                  delete q[a.url],
                  delete M[e],
                  n && (n.events.defined && (M[e] = n.events), u(e));
              }),
            r
          );
        },
        enable: function (e) {
          var t = getOwn(S, e.id);
          t && l(e).enable();
        },
        completeLoad: function (e) {
          var t,
            a,
            i,
            r = getOwn(x.shim, e) || {},
            o = r.exports;
          for (c(); A.length; ) {
            if (((a = A.shift()), null === a[0])) {
              if (((a[0] = e), t)) break;
              t = !0;
            } else a[0] === e && (t = !0);
            h(a);
          }
          if (((i = getOwn(S, e)), !t && !hasProp(E, e) && i && !i.inited)) {
            if (!(!x.enforceDefine || (o && getGlobal(o))))
              return n(e)
                ? void 0
                : d(
                    makeError("nodefine", "No define call for " + e, null, [e])
                  );
            h([e, r.deps || [], r.exportsFn]);
          }
          p();
        },
        nameToUrl: function (e, t, a) {
          var i, n, r, o, l, s, d, c, u;
          if (req.jsExtRegExp.test(e)) c = e + (t || "");
          else {
            for (
              i = x.paths, n = x.pkgs, l = e.split("/"), s = l.length;
              s > 0;
              s -= 1
            ) {
              if (
                ((d = l.slice(0, s).join("/")),
                (r = getOwn(n, d)),
                (u = getOwn(i, d)))
              ) {
                isArray(u) && (u = u[0]), l.splice(0, s, u);
                break;
              }
              if (r) {
                (o = e === r.name ? r.location + "/" + r.main : r.location),
                  l.splice(0, s, o);
                break;
              }
            }
            (c = l.join("/")),
              (c += t || (/^data\:|\?/.test(c) || a ? "" : ".js")),
              (c =
                ("/" === c.charAt(0) || c.match(/^[\w\+\.\-]+:/)
                  ? ""
                  : x.baseUrl) + c);
          }
          return x.urlArgs
            ? c + ((-1 === c.indexOf("?") ? "?" : "&") + x.urlArgs)
            : c;
        },
        load: function (e, t) {
          req.load(k, e, t);
        },
        execCb: function (e, t, a, i) {
          return t.apply(i, a);
        },
        onScriptLoad: function (e) {
          if (
            "load" === e.type ||
            readyRegExp.test((e.currentTarget || e.srcElement).readyState)
          ) {
            interactiveScript = null;
            var t = f(e);
            k.completeLoad(t.id);
          }
        },
        onScriptError: function (e) {
          var t = f(e);
          return n(t.id)
            ? void 0
            : d(
                makeError("scripterror", "Script error for: " + t.id, e, [t.id])
              );
        },
      }),
      (k.require = k.makeRequire()),
      k
    );
  }
  function getInteractiveScript() {
    return interactiveScript && "interactive" === interactiveScript.readyState
      ? interactiveScript
      : (eachReverse(scripts(), function (e) {
          return "interactive" === e.readyState
            ? (interactiveScript = e)
            : void 0;
        }),
        interactiveScript);
  }
  var req,
    s,
    head,
    baseElement,
    dataMain,
    src,
    interactiveScript,
    currentlyAddingScript,
    mainScript,
    subPath,
    version = "2.1.9",
    commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
    cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
    jsSuffixRegExp = /\.js$/,
    currDirRegExp = /^\.\//,
    op = Object.prototype,
    ostring = op.toString,
    hasOwn = op.hasOwnProperty,
    ap = Array.prototype,
    apsp = ap.splice,
    isBrowser = !(
      "undefined" == typeof window ||
      "undefined" == typeof navigator ||
      !window.document
    ),
    isWebWorker = !isBrowser && "undefined" != typeof importScripts,
    readyRegExp =
      isBrowser && "PLAYSTATION 3" === navigator.platform
        ? /^complete$/
        : /^(complete|loaded)$/,
    defContextName = "_",
    isOpera =
      "undefined" != typeof opera && "[object Opera]" === opera.toString(),
    contexts = {},
    cfg = {},
    globalDefQueue = [],
    useInteractive = !1;
  if ("undefined" == typeof define) {
    if ("undefined" != typeof requirejs) {
      if (isFunction(requirejs)) return;
      (cfg = requirejs), (requirejs = void 0);
    }
    "undefined" == typeof require ||
      isFunction(require) ||
      ((cfg = require), (require = void 0)),
      (req = requirejs =
        function (e, t, a, i) {
          var n,
            r,
            o = defContextName;
          return (
            isArray(e) ||
              "string" == typeof e ||
              ((r = e), isArray(t) ? ((e = t), (t = a), (a = i)) : (e = [])),
            r && r.context && (o = r.context),
            (n = getOwn(contexts, o)),
            n || (n = contexts[o] = req.s.newContext(o)),
            r && n.configure(r),
            n.require(e, t, a)
          );
        }),
      (req.config = function (e) {
        return req(e);
      }),
      (req.nextTick =
        "undefined" != typeof setTimeout
          ? function (e) {
              setTimeout(e, 4);
            }
          : function (e) {
              e();
            }),
      require || (require = req),
      (req.version = version),
      (req.jsExtRegExp = /^\/|:|\?|\.js$/),
      (req.isBrowser = isBrowser),
      (s = req.s = { contexts: contexts, newContext: newContext }),
      req({}),
      each(["toUrl", "undef", "defined", "specified"], function (e) {
        req[e] = function () {
          var t = contexts[defContextName];
          return t.require[e].apply(t, arguments);
        };
      }),
      isBrowser &&
        ((head = s.head = document.getElementsByTagName("head")[0]),
        (baseElement = document.getElementsByTagName("base")[0]),
        baseElement && (head = s.head = baseElement.parentNode)),
      (req.onError = defaultOnError),
      (req.createNode = function (e) {
        var t = e.xhtml
          ? document.createElementNS(
              "http://www.w3.org/1999/xhtml",
              "html:script"
            )
          : document.createElement("script");
        return (
          (t.type = e.scriptType || "text/javascript"),
          (t.charset = "utf-8"),
          (t.async = !0),
          t
        );
      }),
      (req.load = function (e, t, a) {
        var i,
          n = (e && e.config) || {};
        if (isBrowser)
          return (
            (i = req.createNode(n, t, a)),
            i.setAttribute("data-requirecontext", e.contextName),
            i.setAttribute("data-requiremodule", t),
            !i.attachEvent ||
            (i.attachEvent.toString &&
              i.attachEvent.toString().indexOf("[native code") < 0) ||
            isOpera
              ? (i.addEventListener("load", e.onScriptLoad, !1),
                i.addEventListener("error", e.onScriptError, !1))
              : ((useInteractive = !0),
                i.attachEvent("onreadystatechange", e.onScriptLoad)),
            (i.src = a),
            (currentlyAddingScript = i),
            baseElement
              ? head.insertBefore(i, baseElement)
              : head.appendChild(i),
            (currentlyAddingScript = null),
            i
          );
        if (isWebWorker)
          try {
            importScripts(a), e.completeLoad(t);
          } catch (r) {
            e.onError(
              makeError(
                "importscripts",
                "importScripts failed for " + t + " at " + a,
                r,
                [t]
              )
            );
          }
      }),
      isBrowser &&
        !cfg.skipDataMain &&
        eachReverse(scripts(), function (e) {
          return (
            head || (head = e.parentNode),
            (dataMain = e.getAttribute("data-main")),
            dataMain
              ? ((mainScript = dataMain),
                cfg.baseUrl ||
                  ((src = mainScript.split("/")),
                  (mainScript = src.pop()),
                  (subPath = src.length ? src.join("/") + "/" : "./"),
                  (cfg.baseUrl = subPath)),
                (mainScript = mainScript.replace(jsSuffixRegExp, "")),
                req.jsExtRegExp.test(mainScript) && (mainScript = dataMain),
                (cfg.deps = cfg.deps
                  ? cfg.deps.concat(mainScript)
                  : [mainScript]),
                !0)
              : void 0
          );
        }),
      (define = function (e, t, a) {
        var i, n;
        "string" != typeof e && ((a = t), (t = e), (e = null)),
          isArray(t) || ((a = t), (t = null)),
          !t &&
            isFunction(a) &&
            ((t = []),
            a.length &&
              (a
                .toString()
                .replace(commentRegExp, "")
                .replace(cjsRequireRegExp, function (e, a) {
                  t.push(a);
                }),
              (t = (
                1 === a.length ? ["require"] : ["require", "exports", "module"]
              ).concat(t)))),
          useInteractive &&
            ((i = currentlyAddingScript || getInteractiveScript()),
            i &&
              (e || (e = i.getAttribute("data-requiremodule")),
              (n = contexts[i.getAttribute("data-requirecontext")]))),
          (n ? n.defQueue : globalDefQueue).push([e, t, a]);
      }),
      (define.amd = { jQuery: !0 }),
      (req.exec = function (text) {
        return eval(text);
      }),
      req(cfg);
  }
})(this),
  require({
    paths: {
      $dict: "require/$dict",
      $i18n: "require/$i18n",
      $pub: "require/$pub",
      $ready: "require/$ready",
      $tmpl: "require/$tmpl",
      scribe: "scribe/scribe",
      "scribe-plugin-formatter-html-ensure-semantic-elements":
        "scribe/plugins/scribe-plugin-formatter-html-ensure-semantic-elements",
      "scribe-plugin-toolbar": "scribe/plugins/scribe-plugin-toolbar",
      "scribe-plugin-sanitizer": "scribe/plugins/scribe-plugin-sanitizer",
      "scribe-plugin-blockquote-command":
        "scribe/plugins/scribe-plugin-blockquote-command",
      "scribe-plugin-link-tooltip": "scribe/plugins/scribe-plugin-link-tooltip",
      "scribe-plugin-intelligent-unlink-command":
        "scribe/plugins/scribe-plugin-intelligent-unlink-command",
      "scribe-plugin-toolbar-dropdown":
        "scribe/plugins/scribe-plugin-toolbar-dropdown",
      "scribe-plugin-heading-command":
        "scribe/plugins/scribe-plugin-heading-command",
      "scribe-plugin-paragraph-command":
        "scribe/plugins/scribe-plugin-paragraph-command",
      "scribe-plugin-tab-indent": "scribe/plugins/scribe-plugin-tab-indent",
      "scribe-plugin-placeholder": "scribe/plugins/scribe-plugin-placeholder",
      "scribe-plugin-italic-command":
        "scribe/plugins/scribe-plugin-italic-command",
      "scribe-plugin-colorpicker": "scribe/plugins/scribe-plugin-colorpicker",
      spreedlyexpress2: "de_epages/spreedly/ui/spreedlyexpress2",
    },
  }),
  (function (e, t) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if (!e.document)
                throw new Error("jQuery requires a window with a document");
              return t(e);
            })
      : t(e);
  })("undefined" != typeof window ? window : this, function (e, t) {
    function a(e) {
      var t = !!e && "length" in e && e.length,
        a = pt.type(e);
      return "function" === a || pt.isWindow(e)
        ? !1
        : "array" === a ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e);
    }
    function i(e, t, a) {
      if (pt.isFunction(t))
        return pt.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== a;
        });
      if (t.nodeType)
        return pt.grep(e, function (e) {
          return (e === t) !== a;
        });
      if ("string" == typeof t) {
        if (xt.test(t)) return pt.filter(t, e, a);
        t = pt.filter(t, e);
      }
      return pt.grep(e, function (e) {
        return pt.inArray(e, t) > -1 !== a;
      });
    }
    function n(e, t) {
      do e = e[t];
      while (e && 1 !== e.nodeType);
      return e;
    }
    function r(e) {
      var t = {};
      return (
        pt.each(e.match(qt) || [], function (e, a) {
          t[a] = !0;
        }),
        t
      );
    }
    function o() {
      it.addEventListener
        ? (it.removeEventListener("DOMContentLoaded", l),
          e.removeEventListener("load", l))
        : (it.detachEvent("onreadystatechange", l), e.detachEvent("onload", l));
    }
    function l() {
      (it.addEventListener ||
        "load" === e.event.type ||
        "complete" === it.readyState) &&
        (o(), pt.ready());
    }
    function s(e, t, a) {
      if (void 0 === a && 1 === e.nodeType) {
        var i = "data-" + t.replace(Rt, "-$1").toLowerCase();
        if (((a = e.getAttribute(i)), "string" == typeof a)) {
          try {
            a =
              "true" === a
                ? !0
                : "false" === a
                ? !1
                : "null" === a
                ? null
                : +a + "" === a
                ? +a
                : It.test(a)
                ? pt.parseJSON(a)
                : a;
          } catch (n) {}
          pt.data(e, t, a);
        } else a = void 0;
      }
      return a;
    }
    function d(e) {
      var t;
      for (t in e)
        if (("data" !== t || !pt.isEmptyObject(e[t])) && "toJSON" !== t)
          return !1;
      return !0;
    }
    function c(e, t, a, i) {
      if (Ft(e)) {
        var n,
          r,
          o = pt.expando,
          l = e.nodeType,
          s = l ? pt.cache : e,
          d = l ? e[o] : e[o] && o;
        if (
          (d && s[d] && (i || s[d].data)) ||
          void 0 !== a ||
          "string" != typeof t
        )
          return (
            d || (d = l ? (e[o] = at.pop() || pt.guid++) : o),
            s[d] || (s[d] = l ? {} : { toJSON: pt.noop }),
            ("object" == typeof t || "function" == typeof t) &&
              (i
                ? (s[d] = pt.extend(s[d], t))
                : (s[d].data = pt.extend(s[d].data, t))),
            (r = s[d]),
            i || (r.data || (r.data = {}), (r = r.data)),
            void 0 !== a && (r[pt.camelCase(t)] = a),
            "string" == typeof t
              ? ((n = r[t]), null == n && (n = r[pt.camelCase(t)]))
              : (n = r),
            n
          );
      }
    }
    function u(e, t, a) {
      if (Ft(e)) {
        var i,
          n,
          r = e.nodeType,
          o = r ? pt.cache : e,
          l = r ? e[pt.expando] : pt.expando;
        if (o[l]) {
          if (t && (i = a ? o[l] : o[l].data)) {
            pt.isArray(t)
              ? (t = t.concat(pt.map(t, pt.camelCase)))
              : t in i
              ? (t = [t])
              : ((t = pt.camelCase(t)), (t = t in i ? [t] : t.split(" "))),
              (n = t.length);
            for (; n--; ) delete i[t[n]];
            if (a ? !d(i) : !pt.isEmptyObject(i)) return;
          }
          (a || (delete o[l].data, d(o[l]))) &&
            (r
              ? pt.cleanData([e], !0)
              : ut.deleteExpando || o != o.window
              ? delete o[l]
              : (o[l] = void 0));
        }
      }
    }
    function m(e, t, a, i) {
      var n,
        r = 1,
        o = 20,
        l = i
          ? function () {
              return i.cur();
            }
          : function () {
              return pt.css(e, t, "");
            },
        s = l(),
        d = (a && a[3]) || (pt.cssNumber[t] ? "" : "px"),
        c = (pt.cssNumber[t] || ("px" !== d && +s)) && jt.exec(pt.css(e, t));
      if (c && c[3] !== d) {
        (d = d || c[3]), (a = a || []), (c = +s || 1);
        do (r = r || ".5"), (c /= r), pt.style(e, t, c + d);
        while (r !== (r = l() / s) && 1 !== r && --o);
      }
      return (
        a &&
          ((c = +c || +s || 0),
          (n = a[1] ? c + (a[1] + 1) * a[2] : +a[2]),
          i && ((i.unit = d), (i.start = c), (i.end = n))),
        n
      );
    }
    function p(e) {
      var t = Vt.split("|"),
        a = e.createDocumentFragment();
      if (a.createElement) for (; t.length; ) a.createElement(t.pop());
      return a;
    }
    function h(e, t) {
      var a,
        i,
        n = 0,
        r =
          "undefined" != typeof e.getElementsByTagName
            ? e.getElementsByTagName(t || "*")
            : "undefined" != typeof e.querySelectorAll
            ? e.querySelectorAll(t || "*")
            : void 0;
      if (!r)
        for (r = [], a = e.childNodes || e; null != (i = a[n]); n++)
          !t || pt.nodeName(i, t) ? r.push(i) : pt.merge(r, h(i, t));
      return void 0 === t || (t && pt.nodeName(e, t)) ? pt.merge([e], r) : r;
    }
    function g(e, t) {
      for (var a, i = 0; null != (a = e[i]); i++)
        pt._data(a, "globalEval", !t || pt._data(t[i], "globalEval"));
    }
    function f(e) {
      zt.test(e.type) && (e.defaultChecked = e.checked);
    }
    function y(e, t, a, i, n) {
      for (
        var r, o, l, s, d, c, u, m = e.length, y = p(t), b = [], v = 0;
        m > v;
        v++
      )
        if (((o = e[v]), o || 0 === o))
          if ("object" === pt.type(o)) pt.merge(b, o.nodeType ? [o] : o);
          else if (Wt.test(o)) {
            for (
              s = s || y.appendChild(t.createElement("div")),
                d = (Ht.exec(o) || ["", ""])[1].toLowerCase(),
                u = Ut[d] || Ut._default,
                s.innerHTML = u[1] + pt.htmlPrefilter(o) + u[2],
                r = u[0];
              r--;

            )
              s = s.lastChild;
            if (
              (!ut.leadingWhitespace &&
                $t.test(o) &&
                b.push(t.createTextNode($t.exec(o)[0])),
              !ut.tbody)
            )
              for (
                o =
                  "table" !== d || Kt.test(o)
                    ? "<table>" !== u[1] || Kt.test(o)
                      ? 0
                      : s
                    : s.firstChild,
                  r = o && o.childNodes.length;
                r--;

              )
                pt.nodeName((c = o.childNodes[r]), "tbody") &&
                  !c.childNodes.length &&
                  o.removeChild(c);
            for (pt.merge(b, s.childNodes), s.textContent = ""; s.firstChild; )
              s.removeChild(s.firstChild);
            s = y.lastChild;
          } else b.push(t.createTextNode(o));
      for (
        s && y.removeChild(s),
          ut.appendChecked || pt.grep(h(b, "input"), f),
          v = 0;
        (o = b[v++]);

      )
        if (i && pt.inArray(o, i) > -1) n && n.push(o);
        else if (
          ((l = pt.contains(o.ownerDocument, o)),
          (s = h(y.appendChild(o), "script")),
          l && g(s),
          a)
        )
          for (r = 0; (o = s[r++]); ) Nt.test(o.type || "") && a.push(o);
      return (s = null), y;
    }
    function b() {
      return !0;
    }
    function v() {
      return !1;
    }
    function k() {
      try {
        return it.activeElement;
      } catch (e) {}
    }
    function T(e, t, a, i, n, r) {
      var o, l;
      if ("object" == typeof t) {
        "string" != typeof a && ((i = i || a), (a = void 0));
        for (l in t) T(e, l, a, i, t[l], r);
        return e;
      }
      if (
        (null == i && null == n
          ? ((n = a), (i = a = void 0))
          : null == n &&
            ("string" == typeof a
              ? ((n = i), (i = void 0))
              : ((n = i), (i = a), (a = void 0))),
        n === !1)
      )
        n = v;
      else if (!n) return e;
      return (
        1 === r &&
          ((o = n),
          (n = function (e) {
            return pt().off(e), o.apply(this, arguments);
          }),
          (n.guid = o.guid || (o.guid = pt.guid++))),
        e.each(function () {
          pt.event.add(this, t, n, i, a);
        })
      );
    }
    function w(e, t) {
      return pt.nodeName(e, "table") &&
        pt.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
        ? e.getElementsByTagName("tbody")[0] ||
            e.appendChild(e.ownerDocument.createElement("tbody"))
        : e;
    }
    function x(e) {
      return (e.type = (null !== pt.find.attr(e, "type")) + "/" + e.type), e;
    }
    function S(e) {
      var t = na.exec(e.type);
      return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
    }
    function C(e, t) {
      if (1 === t.nodeType && pt.hasData(e)) {
        var a,
          i,
          n,
          r = pt._data(e),
          o = pt._data(t, r),
          l = r.events;
        if (l) {
          delete o.handle, (o.events = {});
          for (a in l)
            for (i = 0, n = l[a].length; n > i; i++)
              pt.event.add(t, a, l[a][i]);
        }
        o.data && (o.data = pt.extend({}, o.data));
      }
    }
    function M(e, t) {
      var a, i, n;
      if (1 === t.nodeType) {
        if (
          ((a = t.nodeName.toLowerCase()), !ut.noCloneEvent && t[pt.expando])
        ) {
          n = pt._data(t);
          for (i in n.events) pt.removeEvent(t, i, n.handle);
          t.removeAttribute(pt.expando);
        }
        "script" === a && t.text !== e.text
          ? ((x(t).text = e.text), S(t))
          : "object" === a
          ? (t.parentNode && (t.outerHTML = e.outerHTML),
            ut.html5Clone &&
              e.innerHTML &&
              !pt.trim(t.innerHTML) &&
              (t.innerHTML = e.innerHTML))
          : "input" === a && zt.test(e.type)
          ? ((t.defaultChecked = t.checked = e.checked),
            t.value !== e.value && (t.value = e.value))
          : "option" === a
          ? (t.defaultSelected = t.selected = e.defaultSelected)
          : ("input" === a || "textarea" === a) &&
            (t.defaultValue = e.defaultValue);
      }
    }
    function A(e, t, a, i) {
      t = rt.apply([], t);
      var n,
        r,
        o,
        l,
        s,
        d,
        c = 0,
        u = e.length,
        m = u - 1,
        p = t[0],
        g = pt.isFunction(p);
      if (g || (u > 1 && "string" == typeof p && !ut.checkClone && ia.test(p)))
        return e.each(function (n) {
          var r = e.eq(n);
          g && (t[0] = p.call(this, n, r.html())), A(r, t, a, i);
        });
      if (
        u &&
        ((d = y(t, e[0].ownerDocument, !1, e, i)),
        (n = d.firstChild),
        1 === d.childNodes.length && (d = n),
        n || i)
      ) {
        for (l = pt.map(h(d, "script"), x), o = l.length; u > c; c++)
          (r = d),
            c !== m &&
              ((r = pt.clone(r, !0, !0)), o && pt.merge(l, h(r, "script"))),
            a.call(e[c], r, c);
        if (o)
          for (
            s = l[l.length - 1].ownerDocument, pt.map(l, S), c = 0;
            o > c;
            c++
          )
            (r = l[c]),
              Nt.test(r.type || "") &&
                !pt._data(r, "globalEval") &&
                pt.contains(s, r) &&
                (r.src
                  ? pt._evalUrl && pt._evalUrl(r.src)
                  : pt.globalEval(
                      (r.text || r.textContent || r.innerHTML || "").replace(
                        ra,
                        ""
                      )
                    ));
        d = n = null;
      }
      return e;
    }
    function E(e, t, a) {
      for (var i, n = t ? pt.filter(t, e) : e, r = 0; null != (i = n[r]); r++)
        a || 1 !== i.nodeType || pt.cleanData(h(i)),
          i.parentNode &&
            (a && pt.contains(i.ownerDocument, i) && g(h(i, "script")),
            i.parentNode.removeChild(i));
      return e;
    }
    function q(e, t) {
      var a = pt(t.createElement(e)).appendTo(t.body),
        i = pt.css(a[0], "display");
      return a.detach(), i;
    }
    function L(e) {
      var t = it,
        a = da[e];
      return (
        a ||
          ((a = q(e, t)),
          ("none" !== a && a) ||
            ((sa = (
              sa || pt("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(t.documentElement)),
            (t = (sa[0].contentWindow || sa[0].contentDocument).document),
            t.write(),
            t.close(),
            (a = q(e, t)),
            sa.detach()),
          (da[e] = a)),
        a
      );
    }
    function D(e, t) {
      return {
        get: function () {
          return e()
            ? (delete this.get, void 0)
            : (this.get = t).apply(this, arguments);
        },
      };
    }
    function F(e) {
      if (e in Sa) return e;
      for (var t = e.charAt(0).toUpperCase() + e.slice(1), a = xa.length; a--; )
        if (((e = xa[a] + t), e in Sa)) return e;
    }
    function I(e, t) {
      for (var a, i, n, r = [], o = 0, l = e.length; l > o; o++)
        (i = e[o]),
          i.style &&
            ((r[o] = pt._data(i, "olddisplay")),
            (a = i.style.display),
            t
              ? (r[o] || "none" !== a || (i.style.display = ""),
                "" === i.style.display &&
                  Ot(i) &&
                  (r[o] = pt._data(i, "olddisplay", L(i.nodeName))))
              : ((n = Ot(i)),
                ((a && "none" !== a) || !n) &&
                  pt._data(i, "olddisplay", n ? a : pt.css(i, "display"))));
      for (o = 0; l > o; o++)
        (i = e[o]),
          i.style &&
            ((t && "none" !== i.style.display && "" !== i.style.display) ||
              (i.style.display = t ? r[o] || "" : "none"));
      return e;
    }
    function R(e, t, a) {
      var i = ka.exec(t);
      return i ? Math.max(0, i[1] - (a || 0)) + (i[2] || "px") : t;
    }
    function _(e, t, a, i, n) {
      for (
        var r = a === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
          o = 0;
        4 > r;
        r += 2
      )
        "margin" === a && (o += pt.css(e, a + Pt[r], !0, n)),
          i
            ? ("content" === a && (o -= pt.css(e, "padding" + Pt[r], !0, n)),
              "margin" !== a &&
                (o -= pt.css(e, "border" + Pt[r] + "Width", !0, n)))
            : ((o += pt.css(e, "padding" + Pt[r], !0, n)),
              "padding" !== a &&
                (o += pt.css(e, "border" + Pt[r] + "Width", !0, n)));
      return o;
    }
    function j(e, t, a) {
      var i = !0,
        n = "width" === t ? e.offsetWidth : e.offsetHeight,
        r = ha(e),
        o = ut.boxSizing && "border-box" === pt.css(e, "boxSizing", !1, r);
      if (0 >= n || null == n) {
        if (
          ((n = ga(e, t, r)),
          (0 > n || null == n) && (n = e.style[t]),
          ua.test(n))
        )
          return n;
        (i = o && (ut.boxSizingReliable() || n === e.style[t])),
          (n = parseFloat(n) || 0);
      }
      return n + _(e, t, a || (o ? "border" : "content"), i, r) + "px";
    }
    function P(e, t, a, i, n) {
      return new P.prototype.init(e, t, a, i, n);
    }
    function O() {
      return (
        e.setTimeout(function () {
          Ca = void 0;
        }),
        (Ca = pt.now())
      );
    }
    function B(e, t) {
      var a,
        i = { height: e },
        n = 0;
      for (t = t ? 1 : 0; 4 > n; n += 2 - t)
        (a = Pt[n]), (i["margin" + a] = i["padding" + a] = e);
      return t && (i.opacity = i.width = e), i;
    }
    function z(e, t, a) {
      for (
        var i,
          n = ($.tweeners[t] || []).concat($.tweeners["*"]),
          r = 0,
          o = n.length;
        o > r;
        r++
      )
        if ((i = n[r].call(a, t, e))) return i;
    }
    function H(e, t, a) {
      var i,
        n,
        r,
        o,
        l,
        s,
        d,
        c,
        u = this,
        m = {},
        p = e.style,
        h = e.nodeType && Ot(e),
        g = pt._data(e, "fxshow");
      a.queue ||
        ((l = pt._queueHooks(e, "fx")),
        null == l.unqueued &&
          ((l.unqueued = 0),
          (s = l.empty.fire),
          (l.empty.fire = function () {
            l.unqueued || s();
          })),
        l.unqueued++,
        u.always(function () {
          u.always(function () {
            l.unqueued--, pt.queue(e, "fx").length || l.empty.fire();
          });
        })),
        1 === e.nodeType &&
          ("height" in t || "width" in t) &&
          ((a.overflow = [p.overflow, p.overflowX, p.overflowY]),
          (d = pt.css(e, "display")),
          (c = "none" === d ? pt._data(e, "olddisplay") || L(e.nodeName) : d),
          "inline" === c &&
            "none" === pt.css(e, "float") &&
            (ut.inlineBlockNeedsLayout && "inline" !== L(e.nodeName)
              ? (p.zoom = 1)
              : (p.display = "inline-block"))),
        a.overflow &&
          ((p.overflow = "hidden"),
          ut.shrinkWrapBlocks() ||
            u.always(function () {
              (p.overflow = a.overflow[0]),
                (p.overflowX = a.overflow[1]),
                (p.overflowY = a.overflow[2]);
            }));
      for (i in t)
        if (((n = t[i]), Aa.exec(n))) {
          if (
            (delete t[i],
            (r = r || "toggle" === n),
            n === (h ? "hide" : "show"))
          ) {
            if ("show" !== n || !g || void 0 === g[i]) continue;
            h = !0;
          }
          m[i] = (g && g[i]) || pt.style(e, i);
        } else d = void 0;
      if (pt.isEmptyObject(m))
        "inline" === ("none" === d ? L(e.nodeName) : d) && (p.display = d);
      else {
        g ? "hidden" in g && (h = g.hidden) : (g = pt._data(e, "fxshow", {})),
          r && (g.hidden = !h),
          h
            ? pt(e).show()
            : u.done(function () {
                pt(e).hide();
              }),
          u.done(function () {
            var t;
            pt._removeData(e, "fxshow");
            for (t in m) pt.style(e, t, m[t]);
          });
        for (i in m)
          (o = z(h ? g[i] : 0, i, u)),
            i in g ||
              ((g[i] = o.start),
              h &&
                ((o.end = o.start),
                (o.start = "width" === i || "height" === i ? 1 : 0)));
      }
    }
    function N(e, t) {
      var a, i, n, r, o;
      for (a in e)
        if (
          ((i = pt.camelCase(a)),
          (n = t[i]),
          (r = e[a]),
          pt.isArray(r) && ((n = r[1]), (r = e[a] = r[0])),
          a !== i && ((e[i] = r), delete e[a]),
          (o = pt.cssHooks[i]),
          o && "expand" in o)
        ) {
          (r = o.expand(r)), delete e[i];
          for (a in r) a in e || ((e[a] = r[a]), (t[a] = n));
        } else t[i] = n;
    }
    function $(e, t, a) {
      var i,
        n,
        r = 0,
        o = $.prefilters.length,
        l = pt.Deferred().always(function () {
          delete s.elem;
        }),
        s = function () {
          if (n) return !1;
          for (
            var t = Ca || O(),
              a = Math.max(0, d.startTime + d.duration - t),
              i = a / d.duration || 0,
              r = 1 - i,
              o = 0,
              s = d.tweens.length;
            s > o;
            o++
          )
            d.tweens[o].run(r);
          return (
            l.notifyWith(e, [d, r, a]),
            1 > r && s ? a : (l.resolveWith(e, [d]), !1)
          );
        },
        d = l.promise({
          elem: e,
          props: pt.extend({}, t),
          opts: pt.extend(
            !0,
            { specialEasing: {}, easing: pt.easing._default },
            a
          ),
          originalProperties: t,
          originalOptions: a,
          startTime: Ca || O(),
          duration: a.duration,
          tweens: [],
          createTween: function (t, a) {
            var i = pt.Tween(
              e,
              d.opts,
              t,
              a,
              d.opts.specialEasing[t] || d.opts.easing
            );
            return d.tweens.push(i), i;
          },
          stop: function (t) {
            var a = 0,
              i = t ? d.tweens.length : 0;
            if (n) return this;
            for (n = !0; i > a; a++) d.tweens[a].run(1);
            return (
              t
                ? (l.notifyWith(e, [d, 1, 0]), l.resolveWith(e, [d, t]))
                : l.rejectWith(e, [d, t]),
              this
            );
          },
        }),
        c = d.props;
      for (N(c, d.opts.specialEasing); o > r; r++)
        if ((i = $.prefilters[r].call(d, e, c, d.opts)))
          return (
            pt.isFunction(i.stop) &&
              (pt._queueHooks(d.elem, d.opts.queue).stop = pt.proxy(i.stop, i)),
            i
          );
      return (
        pt.map(c, z, d),
        pt.isFunction(d.opts.start) && d.opts.start.call(e, d),
        pt.fx.timer(pt.extend(s, { elem: e, anim: d, queue: d.opts.queue })),
        d
          .progress(d.opts.progress)
          .done(d.opts.done, d.opts.complete)
          .fail(d.opts.fail)
          .always(d.opts.always)
      );
    }
    function V(e) {
      return pt.attr(e, "class") || "";
    }
    function U(e) {
      return function (t, a) {
        "string" != typeof t && ((a = t), (t = "*"));
        var i,
          n = 0,
          r = t.toLowerCase().match(qt) || [];
        if (pt.isFunction(a))
          for (; (i = r[n++]); )
            "+" === i.charAt(0)
              ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(a))
              : (e[i] = e[i] || []).push(a);
      };
    }
    function W(e, t, a, i) {
      function n(l) {
        var s;
        return (
          (r[l] = !0),
          pt.each(e[l] || [], function (e, l) {
            var d = l(t, a, i);
            return "string" != typeof d || o || r[d]
              ? o
                ? !(s = d)
                : void 0
              : (t.dataTypes.unshift(d), n(d), !1);
          }),
          s
        );
      }
      var r = {},
        o = e === Za;
      return n(t.dataTypes[0]) || (!r["*"] && n("*"));
    }
    function K(e, t) {
      var a,
        i,
        n = pt.ajaxSettings.flatOptions || {};
      for (i in t) void 0 !== t[i] && ((n[i] ? e : a || (a = {}))[i] = t[i]);
      return a && pt.extend(!0, e, a), e;
    }
    function G(e, t, a) {
      for (var i, n, r, o, l = e.contents, s = e.dataTypes; "*" === s[0]; )
        s.shift(),
          void 0 === n &&
            (n = e.mimeType || t.getResponseHeader("Content-Type"));
      if (n)
        for (o in l)
          if (l[o] && l[o].test(n)) {
            s.unshift(o);
            break;
          }
      if (s[0] in a) r = s[0];
      else {
        for (o in a) {
          if (!s[0] || e.converters[o + " " + s[0]]) {
            r = o;
            break;
          }
          i || (i = o);
        }
        r = r || i;
      }
      return r ? (r !== s[0] && s.unshift(r), a[r]) : void 0;
    }
    function Y(e, t, a, i) {
      var n,
        r,
        o,
        l,
        s,
        d = {},
        c = e.dataTypes.slice();
      if (c[1]) for (o in e.converters) d[o.toLowerCase()] = e.converters[o];
      for (r = c.shift(); r; )
        if (
          (e.responseFields[r] && (a[e.responseFields[r]] = t),
          !s && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
          (s = r),
          (r = c.shift()))
        )
          if ("*" === r) r = s;
          else if ("*" !== s && s !== r) {
            if (((o = d[s + " " + r] || d["* " + r]), !o))
              for (n in d)
                if (
                  ((l = n.split(" ")),
                  l[1] === r && (o = d[s + " " + l[0]] || d["* " + l[0]]))
                ) {
                  o === !0
                    ? (o = d[n])
                    : d[n] !== !0 && ((r = l[0]), c.unshift(l[1]));
                  break;
                }
            if (o !== !0)
              if (o && e["throws"]) t = o(t);
              else
                try {
                  t = o(t);
                } catch (u) {
                  return {
                    state: "parsererror",
                    error: o ? u : "No conversion from " + s + " to " + r,
                  };
                }
          }
      return { state: "success", data: t };
    }
    function X(e) {
      return (e.style && e.style.display) || pt.css(e, "display");
    }
    function J(e) {
      if (!pt.contains(e.ownerDocument || it, e)) return !0;
      for (; e && 1 === e.nodeType; ) {
        if ("none" === X(e) || "hidden" === e.type) return !0;
        e = e.parentNode;
      }
      return !1;
    }
    function Z(e, t, a, i) {
      var n;
      if (pt.isArray(t))
        pt.each(t, function (t, n) {
          a || ii.test(e)
            ? i(e, n)
            : Z(
                e + "[" + ("object" == typeof n && null != n ? t : "") + "]",
                n,
                a,
                i
              );
        });
      else if (a || "object" !== pt.type(t)) i(e, t);
      else for (n in t) Z(e + "[" + n + "]", t[n], a, i);
    }
    function Q() {
      try {
        return new e.XMLHttpRequest();
      } catch (t) {}
    }
    function et() {
      try {
        return new e.ActiveXObject("Microsoft.XMLHTTP");
      } catch (t) {}
    }
    function tt(e) {
      return pt.isWindow(e)
        ? e
        : 9 === e.nodeType
        ? e.defaultView || e.parentWindow
        : !1;
    }
    var at = [],
      it = e.document,
      nt = at.slice,
      rt = at.concat,
      ot = at.push,
      lt = at.indexOf,
      st = {},
      dt = st.toString,
      ct = st.hasOwnProperty,
      ut = {},
      mt = "1.12.4",
      pt = function (e, t) {
        return new pt.fn.init(e, t);
      },
      ht = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      gt = /^-ms-/,
      ft = /-([\da-z])/gi,
      yt = function (e, t) {
        return t.toUpperCase();
      };
    (pt.fn = pt.prototype =
      {
        jquery: mt,
        constructor: pt,
        selector: "",
        length: 0,
        toArray: function () {
          return nt.call(this);
        },
        get: function (e) {
          return null != e
            ? 0 > e
              ? this[e + this.length]
              : this[e]
            : nt.call(this);
        },
        pushStack: function (e) {
          var t = pt.merge(this.constructor(), e);
          return (t.prevObject = this), (t.context = this.context), t;
        },
        each: function (e) {
          return pt.each(this, e);
        },
        map: function (e) {
          return this.pushStack(
            pt.map(this, function (t, a) {
              return e.call(t, a, t);
            })
          );
        },
        slice: function () {
          return this.pushStack(nt.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (e) {
          var t = this.length,
            a = +e + (0 > e ? t : 0);
          return this.pushStack(a >= 0 && t > a ? [this[a]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: ot,
        sort: at.sort,
        splice: at.splice,
      }),
      (pt.extend = pt.fn.extend =
        function () {
          var e,
            t,
            a,
            i,
            n,
            r,
            o = arguments[0] || {},
            l = 1,
            s = arguments.length,
            d = !1;
          for (
            "boolean" == typeof o && ((d = o), (o = arguments[l] || {}), l++),
              "object" == typeof o || pt.isFunction(o) || (o = {}),
              l === s && ((o = this), l--);
            s > l;
            l++
          )
            if (null != (n = arguments[l]))
              for (i in n)
                (e = o[i]),
                  (a = n[i]),
                  o !== a &&
                    (d && a && (pt.isPlainObject(a) || (t = pt.isArray(a)))
                      ? (t
                          ? ((t = !1), (r = e && pt.isArray(e) ? e : []))
                          : (r = e && pt.isPlainObject(e) ? e : {}),
                        (o[i] = pt.extend(d, r, a)))
                      : void 0 !== a && (o[i] = a));
          return o;
        }),
      pt.extend({
        expando: "jQuery" + (mt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isFunction: function (e) {
          return "function" === pt.type(e);
        },
        isArray:
          Array.isArray ||
          function (e) {
            return "array" === pt.type(e);
          },
        isWindow: function (e) {
          return null != e && e == e.window;
        },
        isNumeric: function (e) {
          var t = e && e.toString();
          return !pt.isArray(e) && t - parseFloat(t) + 1 >= 0;
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        isPlainObject: function (e) {
          var t;
          if (!e || "object" !== pt.type(e) || e.nodeType || pt.isWindow(e))
            return !1;
          try {
            if (
              e.constructor &&
              !ct.call(e, "constructor") &&
              !ct.call(e.constructor.prototype, "isPrototypeOf")
            )
              return !1;
          } catch (a) {
            return !1;
          }
          if (!ut.ownFirst) for (t in e) return ct.call(e, t);
          for (t in e);
          return void 0 === t || ct.call(e, t);
        },
        type: function (e) {
          return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? st[dt.call(e)] || "object"
            : typeof e;
        },
        globalEval: function (t) {
          t &&
            pt.trim(t) &&
            (
              e.execScript ||
              function (t) {
                e.eval.call(e, t);
              }
            )(t);
        },
        camelCase: function (e) {
          return e.replace(gt, "ms-").replace(ft, yt);
        },
        nodeName: function (e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function (e, t) {
          var i,
            n = 0;
          if (a(e))
            for (i = e.length; i > n && t.call(e[n], n, e[n]) !== !1; n++);
          else for (n in e) if (t.call(e[n], n, e[n]) === !1) break;
          return e;
        },
        trim: function (e) {
          return null == e ? "" : (e + "").replace(ht, "");
        },
        makeArray: function (e, t) {
          var i = t || [];
          return (
            null != e &&
              (a(Object(e))
                ? pt.merge(i, "string" == typeof e ? [e] : e)
                : ot.call(i, e)),
            i
          );
        },
        inArray: function (e, t, a) {
          var i;
          if (t) {
            if (lt) return lt.call(t, e, a);
            for (
              i = t.length, a = a ? (0 > a ? Math.max(0, i + a) : a) : 0;
              i > a;
              a++
            )
              if (a in t && t[a] === e) return a;
          }
          return -1;
        },
        merge: function (e, t) {
          for (var a = +t.length, i = 0, n = e.length; a > i; ) e[n++] = t[i++];
          if (a !== a) for (; void 0 !== t[i]; ) e[n++] = t[i++];
          return (e.length = n), e;
        },
        grep: function (e, t, a) {
          for (var i, n = [], r = 0, o = e.length, l = !a; o > r; r++)
            (i = !t(e[r], r)), i !== l && n.push(e[r]);
          return n;
        },
        map: function (e, t, i) {
          var n,
            r,
            o = 0,
            l = [];
          if (a(e))
            for (n = e.length; n > o; o++)
              (r = t(e[o], o, i)), null != r && l.push(r);
          else for (o in e) (r = t(e[o], o, i)), null != r && l.push(r);
          return rt.apply([], l);
        },
        guid: 1,
        proxy: function (e, t) {
          var a, i, n;
          return (
            "string" == typeof t && ((n = e[t]), (t = e), (e = n)),
            pt.isFunction(e)
              ? ((a = nt.call(arguments, 2)),
                (i = function () {
                  return e.apply(t || this, a.concat(nt.call(arguments)));
                }),
                (i.guid = e.guid = e.guid || pt.guid++),
                i)
              : void 0
          );
        },
        now: function () {
          return +new Date();
        },
        support: ut,
      }),
      "function" == typeof Symbol &&
        (pt.fn[Symbol.iterator] = at[Symbol.iterator]),
      pt.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (e, t) {
          st["[object " + t + "]"] = t.toLowerCase();
        }
      );
    var bt = (function (e) {
      function t(e, t, a, i) {
        var n,
          r,
          o,
          l,
          s,
          d,
          u,
          p,
          h = t && t.ownerDocument,
          g = t ? t.nodeType : 9;
        if (
          ((a = a || []),
          "string" != typeof e || !e || (1 !== g && 9 !== g && 11 !== g))
        )
          return a;
        if (
          !i &&
          ((t ? t.ownerDocument || t : z) !== F && D(t), (t = t || F), R)
        ) {
          if (11 !== g && (d = yt.exec(e)))
            if ((n = d[1])) {
              if (9 === g) {
                if (!(o = t.getElementById(n))) return a;
                if (o.id === n) return a.push(o), a;
              } else if (
                h &&
                (o = h.getElementById(n)) &&
                O(t, o) &&
                o.id === n
              )
                return a.push(o), a;
            } else {
              if (d[2]) return Z.apply(a, t.getElementsByTagName(e)), a;
              if (
                (n = d[3]) &&
                T.getElementsByClassName &&
                t.getElementsByClassName
              )
                return Z.apply(a, t.getElementsByClassName(n)), a;
            }
          if (!(!T.qsa || U[e + " "] || (_ && _.test(e)))) {
            if (1 !== g) (h = t), (p = e);
            else if ("object" !== t.nodeName.toLowerCase()) {
              for (
                (l = t.getAttribute("id"))
                  ? (l = l.replace(vt, "\\$&"))
                  : t.setAttribute("id", (l = B)),
                  u = C(e),
                  r = u.length,
                  s = mt.test(l) ? "#" + l : "[id='" + l + "']";
                r--;

              )
                u[r] = s + " " + m(u[r]);
              (p = u.join(",")), (h = (bt.test(e) && c(t.parentNode)) || t);
            }
            if (p)
              try {
                return Z.apply(a, h.querySelectorAll(p)), a;
              } catch (f) {
              } finally {
                l === B && t.removeAttribute("id");
              }
          }
        }
        return A(e.replace(lt, "$1"), t, a, i);
      }
      function a() {
        function e(a, i) {
          return (
            t.push(a + " ") > w.cacheLength && delete e[t.shift()],
            (e[a + " "] = i)
          );
        }
        var t = [];
        return e;
      }
      function i(e) {
        return (e[B] = !0), e;
      }
      function n(e) {
        var t = F.createElement("div");
        try {
          return !!e(t);
        } catch (a) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function r(e, t) {
        for (var a = e.split("|"), i = a.length; i--; ) w.attrHandle[a[i]] = t;
      }
      function o(e, t) {
        var a = t && e,
          i =
            a &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            (~t.sourceIndex || K) - (~e.sourceIndex || K);
        if (i) return i;
        if (a) for (; (a = a.nextSibling); ) if (a === t) return -1;
        return e ? 1 : -1;
      }
      function l(e) {
        return function (t) {
          var a = t.nodeName.toLowerCase();
          return "input" === a && t.type === e;
        };
      }
      function s(e) {
        return function (t) {
          var a = t.nodeName.toLowerCase();
          return ("input" === a || "button" === a) && t.type === e;
        };
      }
      function d(e) {
        return i(function (t) {
          return (
            (t = +t),
            i(function (a, i) {
              for (var n, r = e([], a.length, t), o = r.length; o--; )
                a[(n = r[o])] && (a[n] = !(i[n] = a[n]));
            })
          );
        });
      }
      function c(e) {
        return e && "undefined" != typeof e.getElementsByTagName && e;
      }
      function u() {}
      function m(e) {
        for (var t = 0, a = e.length, i = ""; a > t; t++) i += e[t].value;
        return i;
      }
      function p(e, t, a) {
        var i = t.dir,
          n = a && "parentNode" === i,
          r = N++;
        return t.first
          ? function (t, a, r) {
              for (; (t = t[i]); ) if (1 === t.nodeType || n) return e(t, a, r);
            }
          : function (t, a, o) {
              var l,
                s,
                d,
                c = [H, r];
              if (o) {
                for (; (t = t[i]); )
                  if ((1 === t.nodeType || n) && e(t, a, o)) return !0;
              } else
                for (; (t = t[i]); )
                  if (1 === t.nodeType || n) {
                    if (
                      ((d = t[B] || (t[B] = {})),
                      (s = d[t.uniqueID] || (d[t.uniqueID] = {})),
                      (l = s[i]) && l[0] === H && l[1] === r)
                    )
                      return (c[2] = l[2]);
                    if (((s[i] = c), (c[2] = e(t, a, o)))) return !0;
                  }
            };
      }
      function h(e) {
        return e.length > 1
          ? function (t, a, i) {
              for (var n = e.length; n--; ) if (!e[n](t, a, i)) return !1;
              return !0;
            }
          : e[0];
      }
      function g(e, a, i) {
        for (var n = 0, r = a.length; r > n; n++) t(e, a[n], i);
        return i;
      }
      function f(e, t, a, i, n) {
        for (var r, o = [], l = 0, s = e.length, d = null != t; s > l; l++)
          (r = e[l]) && (!a || a(r, i, n)) && (o.push(r), d && t.push(l));
        return o;
      }
      function y(e, t, a, n, r, o) {
        return (
          n && !n[B] && (n = y(n)),
          r && !r[B] && (r = y(r, o)),
          i(function (i, o, l, s) {
            var d,
              c,
              u,
              m = [],
              p = [],
              h = o.length,
              y = i || g(t || "*", l.nodeType ? [l] : l, []),
              b = !e || (!i && t) ? y : f(y, m, e, l, s),
              v = a ? (r || (i ? e : h || n) ? [] : o) : b;
            if ((a && a(b, v, l, s), n))
              for (d = f(v, p), n(d, [], l, s), c = d.length; c--; )
                (u = d[c]) && (v[p[c]] = !(b[p[c]] = u));
            if (i) {
              if (r || e) {
                if (r) {
                  for (d = [], c = v.length; c--; )
                    (u = v[c]) && d.push((b[c] = u));
                  r(null, (v = []), d, s);
                }
                for (c = v.length; c--; )
                  (u = v[c]) &&
                    (d = r ? et(i, u) : m[c]) > -1 &&
                    (i[d] = !(o[d] = u));
              }
            } else (v = f(v === o ? v.splice(h, v.length) : v)), r ? r(null, o, v, s) : Z.apply(o, v);
          })
        );
      }
      function b(e) {
        for (
          var t,
            a,
            i,
            n = e.length,
            r = w.relative[e[0].type],
            o = r || w.relative[" "],
            l = r ? 1 : 0,
            s = p(
              function (e) {
                return e === t;
              },
              o,
              !0
            ),
            d = p(
              function (e) {
                return et(t, e) > -1;
              },
              o,
              !0
            ),
            c = [
              function (e, a, i) {
                var n =
                  (!r && (i || a !== E)) ||
                  ((t = a).nodeType ? s(e, a, i) : d(e, a, i));
                return (t = null), n;
              },
            ];
          n > l;
          l++
        )
          if ((a = w.relative[e[l].type])) c = [p(h(c), a)];
          else {
            if (((a = w.filter[e[l].type].apply(null, e[l].matches)), a[B])) {
              for (i = ++l; n > i && !w.relative[e[i].type]; i++);
              return y(
                l > 1 && h(c),
                l > 1 &&
                  m(
                    e
                      .slice(0, l - 1)
                      .concat({ value: " " === e[l - 2].type ? "*" : "" })
                  ).replace(lt, "$1"),
                a,
                i > l && b(e.slice(l, i)),
                n > i && b((e = e.slice(i))),
                n > i && m(e)
              );
            }
            c.push(a);
          }
        return h(c);
      }
      function v(e, a) {
        var n = a.length > 0,
          r = e.length > 0,
          o = function (i, o, l, s, d) {
            var c,
              u,
              m,
              p = 0,
              h = "0",
              g = i && [],
              y = [],
              b = E,
              v = i || (r && w.find.TAG("*", d)),
              k = (H += null == b ? 1 : Math.random() || 0.1),
              T = v.length;
            for (
              d && (E = o === F || o || d);
              h !== T && null != (c = v[h]);
              h++
            ) {
              if (r && c) {
                for (
                  u = 0, o || c.ownerDocument === F || (D(c), (l = !R));
                  (m = e[u++]);

                )
                  if (m(c, o || F, l)) {
                    s.push(c);
                    break;
                  }
                d && (H = k);
              }
              n && ((c = !m && c) && p--, i && g.push(c));
            }
            if (((p += h), n && h !== p)) {
              for (u = 0; (m = a[u++]); ) m(g, y, o, l);
              if (i) {
                if (p > 0) for (; h--; ) g[h] || y[h] || (y[h] = X.call(s));
                y = f(y);
              }
              Z.apply(s, y),
                d && !i && y.length > 0 && p + a.length > 1 && t.uniqueSort(s);
            }
            return d && ((H = k), (E = b)), g;
          };
        return n ? i(o) : o;
      }
      var k,
        T,
        w,
        x,
        S,
        C,
        M,
        A,
        E,
        q,
        L,
        D,
        F,
        I,
        R,
        _,
        j,
        P,
        O,
        B = "sizzle" + 1 * new Date(),
        z = e.document,
        H = 0,
        N = 0,
        $ = a(),
        V = a(),
        U = a(),
        W = function (e, t) {
          return e === t && (L = !0), 0;
        },
        K = 1 << 31,
        G = {}.hasOwnProperty,
        Y = [],
        X = Y.pop,
        J = Y.push,
        Z = Y.push,
        Q = Y.slice,
        et = function (e, t) {
          for (var a = 0, i = e.length; i > a; a++) if (e[a] === t) return a;
          return -1;
        },
        tt =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        at = "[\\x20\\t\\r\\n\\f]",
        it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        nt =
          "\\[" +
          at +
          "*(" +
          it +
          ")(?:" +
          at +
          "*([*^$|!~]?=)" +
          at +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          it +
          "))|)" +
          at +
          "*\\]",
        rt =
          ":(" +
          it +
          ")(?:\\((" +
          "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
          "((?:\\\\.|[^\\\\()[\\]]|" +
          nt +
          ")*)|" +
          ".*" +
          ")\\)|)",
        ot = new RegExp(at + "+", "g"),
        lt = new RegExp(
          "^" + at + "+|((?:^|[^\\\\])(?:\\\\.)*)" + at + "+$",
          "g"
        ),
        st = new RegExp("^" + at + "*," + at + "*"),
        dt = new RegExp("^" + at + "*([>+~]|" + at + ")" + at + "*"),
        ct = new RegExp("=" + at + "*([^\\]'\"]*?)" + at + "*\\]", "g"),
        ut = new RegExp(rt),
        mt = new RegExp("^" + it + "$"),
        pt = {
          ID: new RegExp("^#(" + it + ")"),
          CLASS: new RegExp("^\\.(" + it + ")"),
          TAG: new RegExp("^(" + it + "|[*])"),
          ATTR: new RegExp("^" + nt),
          PSEUDO: new RegExp("^" + rt),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              at +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              at +
              "*(?:([+-]|)" +
              at +
              "*(\\d+)|))" +
              at +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + tt + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              at +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              at +
              "*((?:-\\d)?\\d*)" +
              at +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        ht = /^(?:input|select|textarea|button)$/i,
        gt = /^h\d$/i,
        ft = /^[^{]+\{\s*\[native \w/,
        yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        bt = /[+~]/,
        vt = /'|\\/g,
        kt = new RegExp("\\\\([\\da-f]{1,6}" + at + "?|(" + at + ")|.)", "ig"),
        Tt = function (e, t, a) {
          var i = "0x" + t - 65536;
          return i !== i || a
            ? t
            : 0 > i
            ? String.fromCharCode(i + 65536)
            : String.fromCharCode(55296 | (i >> 10), 56320 | (1023 & i));
        },
        wt = function () {
          D();
        };
      try {
        Z.apply((Y = Q.call(z.childNodes)), z.childNodes),
          Y[z.childNodes.length].nodeType;
      } catch (xt) {
        Z = {
          apply: Y.length
            ? function (e, t) {
                J.apply(e, Q.call(t));
              }
            : function (e, t) {
                for (var a = e.length, i = 0; (e[a++] = t[i++]); );
                e.length = a - 1;
              },
        };
      }
      (T = t.support = {}),
        (S = t.isXML =
          function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1;
          }),
        (D = t.setDocument =
          function (e) {
            var t,
              a,
              i = e ? e.ownerDocument || e : z;
            return i !== F && 9 === i.nodeType && i.documentElement
              ? ((F = i),
                (I = F.documentElement),
                (R = !S(F)),
                (a = F.defaultView) &&
                  a.top !== a &&
                  (a.addEventListener
                    ? a.addEventListener("unload", wt, !1)
                    : a.attachEvent && a.attachEvent("onunload", wt)),
                (T.attributes = n(function (e) {
                  return (e.className = "i"), !e.getAttribute("className");
                })),
                (T.getElementsByTagName = n(function (e) {
                  return (
                    e.appendChild(F.createComment("")),
                    !e.getElementsByTagName("*").length
                  );
                })),
                (T.getElementsByClassName = ft.test(F.getElementsByClassName)),
                (T.getById = n(function (e) {
                  return (
                    (I.appendChild(e).id = B),
                    !F.getElementsByName || !F.getElementsByName(B).length
                  );
                })),
                T.getById
                  ? ((w.find.ID = function (e, t) {
                      if ("undefined" != typeof t.getElementById && R) {
                        var a = t.getElementById(e);
                        return a ? [a] : [];
                      }
                    }),
                    (w.filter.ID = function (e) {
                      var t = e.replace(kt, Tt);
                      return function (e) {
                        return e.getAttribute("id") === t;
                      };
                    }))
                  : (delete w.find.ID,
                    (w.filter.ID = function (e) {
                      var t = e.replace(kt, Tt);
                      return function (e) {
                        var a =
                          "undefined" != typeof e.getAttributeNode &&
                          e.getAttributeNode("id");
                        return a && a.value === t;
                      };
                    })),
                (w.find.TAG = T.getElementsByTagName
                  ? function (e, t) {
                      return "undefined" != typeof t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : T.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                    }
                  : function (e, t) {
                      var a,
                        i = [],
                        n = 0,
                        r = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; (a = r[n++]); ) 1 === a.nodeType && i.push(a);
                        return i;
                      }
                      return r;
                    }),
                (w.find.CLASS =
                  T.getElementsByClassName &&
                  function (e, t) {
                    return "undefined" != typeof t.getElementsByClassName && R
                      ? t.getElementsByClassName(e)
                      : void 0;
                  }),
                (j = []),
                (_ = []),
                (T.qsa = ft.test(F.querySelectorAll)) &&
                  (n(function (e) {
                    (I.appendChild(e).innerHTML =
                      "<a id='" +
                      B +
                      "'></a>" +
                      "<select id='" +
                      B +
                      "-\r\\' msallowcapture=''>" +
                      "<option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        _.push("[*^$]=" + at + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length ||
                        _.push("\\[" + at + "*(?:value|" + tt + ")"),
                      e.querySelectorAll("[id~=" + B + "-]").length ||
                        _.push("~="),
                      e.querySelectorAll(":checked").length ||
                        _.push(":checked"),
                      e.querySelectorAll("a#" + B + "+*").length ||
                        _.push(".#.+[+~]");
                  }),
                  n(function (e) {
                    var t = F.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length &&
                        _.push("name" + at + "*[*^$|!~]?="),
                      e.querySelectorAll(":enabled").length ||
                        _.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      _.push(",.*:");
                  })),
                (T.matchesSelector = ft.test(
                  (P =
                    I.matches ||
                    I.webkitMatchesSelector ||
                    I.mozMatchesSelector ||
                    I.oMatchesSelector ||
                    I.msMatchesSelector)
                )) &&
                  n(function (e) {
                    (T.disconnectedMatch = P.call(e, "div")),
                      P.call(e, "[s!='']:x"),
                      j.push("!=", rt);
                  }),
                (_ = _.length && new RegExp(_.join("|"))),
                (j = j.length && new RegExp(j.join("|"))),
                (t = ft.test(I.compareDocumentPosition)),
                (O =
                  t || ft.test(I.contains)
                    ? function (e, t) {
                        var a = 9 === e.nodeType ? e.documentElement : e,
                          i = t && t.parentNode;
                        return (
                          e === i ||
                          !(
                            !i ||
                            1 !== i.nodeType ||
                            !(a.contains
                              ? a.contains(i)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(i))
                          )
                        );
                      }
                    : function (e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (W = t
                  ? function (e, t) {
                      if (e === t) return (L = !0), 0;
                      var a =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return a
                        ? a
                        : ((a =
                            (e.ownerDocument || e) === (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1),
                          1 & a ||
                          (!T.sortDetached &&
                            t.compareDocumentPosition(e) === a)
                            ? e === F || (e.ownerDocument === z && O(z, e))
                              ? -1
                              : t === F || (t.ownerDocument === z && O(z, t))
                              ? 1
                              : q
                              ? et(q, e) - et(q, t)
                              : 0
                            : 4 & a
                            ? -1
                            : 1);
                    }
                  : function (e, t) {
                      if (e === t) return (L = !0), 0;
                      var a,
                        i = 0,
                        n = e.parentNode,
                        r = t.parentNode,
                        l = [e],
                        s = [t];
                      if (!n || !r)
                        return e === F
                          ? -1
                          : t === F
                          ? 1
                          : n
                          ? -1
                          : r
                          ? 1
                          : q
                          ? et(q, e) - et(q, t)
                          : 0;
                      if (n === r) return o(e, t);
                      for (a = e; (a = a.parentNode); ) l.unshift(a);
                      for (a = t; (a = a.parentNode); ) s.unshift(a);
                      for (; l[i] === s[i]; ) i++;
                      return i
                        ? o(l[i], s[i])
                        : l[i] === z
                        ? -1
                        : s[i] === z
                        ? 1
                        : 0;
                    }),
                F)
              : F;
          }),
        (t.matches = function (e, a) {
          return t(e, null, null, a);
        }),
        (t.matchesSelector = function (e, a) {
          if (
            ((e.ownerDocument || e) !== F && D(e),
            (a = a.replace(ct, "='$1']")),
            !(
              !T.matchesSelector ||
              !R ||
              U[a + " "] ||
              (j && j.test(a)) ||
              (_ && _.test(a))
            ))
          )
            try {
              var i = P.call(e, a);
              if (
                i ||
                T.disconnectedMatch ||
                (e.document && 11 !== e.document.nodeType)
              )
                return i;
            } catch (n) {}
          return t(a, F, null, [e]).length > 0;
        }),
        (t.contains = function (e, t) {
          return (e.ownerDocument || e) !== F && D(e), O(e, t);
        }),
        (t.attr = function (e, t) {
          (e.ownerDocument || e) !== F && D(e);
          var a = w.attrHandle[t.toLowerCase()],
            i =
              a && G.call(w.attrHandle, t.toLowerCase()) ? a(e, t, !R) : void 0;
          return void 0 !== i
            ? i
            : T.attributes || !R
            ? e.getAttribute(t)
            : (i = e.getAttributeNode(t)) && i.specified
            ? i.value
            : null;
        }),
        (t.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (t.uniqueSort = function (e) {
          var t,
            a = [],
            i = 0,
            n = 0;
          if (
            ((L = !T.detectDuplicates),
            (q = !T.sortStable && e.slice(0)),
            e.sort(W),
            L)
          ) {
            for (; (t = e[n++]); ) t === e[n] && (i = a.push(n));
            for (; i--; ) e.splice(a[i], 1);
          }
          return (q = null), e;
        }),
        (x = t.getText =
          function (e) {
            var t,
              a = "",
              i = 0,
              n = e.nodeType;
            if (n) {
              if (1 === n || 9 === n || 11 === n) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) a += x(e);
              } else if (3 === n || 4 === n) return e.nodeValue;
            } else for (; (t = e[i++]); ) a += x(t);
            return a;
          }),
        (w = t.selectors =
          {
            cacheLength: 50,
            createPseudo: i,
            match: pt,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(kt, Tt)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(kt, Tt)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || t.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && t.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                var t,
                  a = !e[6] && e[2];
                return pt.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : a &&
                        ut.test(a) &&
                        (t = C(a, !0)) &&
                        (t = a.indexOf(")", a.length - t) - a.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = a.slice(0, t))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(kt, Tt).toLowerCase();
                return "*" === e
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function (e) {
                var t = $[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + at + ")" + e + "(" + at + "|$)")) &&
                    $(e, function (e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          ("undefined" != typeof e.getAttribute &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (e, a, i) {
                return function (n) {
                  var r = t.attr(n, e);
                  return null == r
                    ? "!=" === a
                    : a
                    ? ((r += ""),
                      "=" === a
                        ? r === i
                        : "!=" === a
                        ? r !== i
                        : "^=" === a
                        ? i && 0 === r.indexOf(i)
                        : "*=" === a
                        ? i && r.indexOf(i) > -1
                        : "$=" === a
                        ? i && r.slice(-i.length) === i
                        : "~=" === a
                        ? (" " + r.replace(ot, " ") + " ").indexOf(i) > -1
                        : "|=" === a
                        ? r === i || r.slice(0, i.length + 1) === i + "-"
                        : !1)
                    : !0;
                };
              },
              CHILD: function (e, t, a, i, n) {
                var r = "nth" !== e.slice(0, 3),
                  o = "last" !== e.slice(-4),
                  l = "of-type" === t;
                return 1 === i && 0 === n
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (t, a, s) {
                      var d,
                        c,
                        u,
                        m,
                        p,
                        h,
                        g = r !== o ? "nextSibling" : "previousSibling",
                        f = t.parentNode,
                        y = l && t.nodeName.toLowerCase(),
                        b = !s && !l,
                        v = !1;
                      if (f) {
                        if (r) {
                          for (; g; ) {
                            for (m = t; (m = m[g]); )
                              if (
                                l
                                  ? m.nodeName.toLowerCase() === y
                                  : 1 === m.nodeType
                              )
                                return !1;
                            h = g = "only" === e && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (((h = [o ? f.firstChild : f.lastChild]), o && b)) {
                          for (
                            m = f,
                              u = m[B] || (m[B] = {}),
                              c = u[m.uniqueID] || (u[m.uniqueID] = {}),
                              d = c[e] || [],
                              p = d[0] === H && d[1],
                              v = p && d[2],
                              m = p && f.childNodes[p];
                            (m = (++p && m && m[g]) || (v = p = 0) || h.pop());

                          )
                            if (1 === m.nodeType && ++v && m === t) {
                              c[e] = [H, p, v];
                              break;
                            }
                        } else if (
                          (b &&
                            ((m = t),
                            (u = m[B] || (m[B] = {})),
                            (c = u[m.uniqueID] || (u[m.uniqueID] = {})),
                            (d = c[e] || []),
                            (p = d[0] === H && d[1]),
                            (v = p)),
                          v === !1)
                        )
                          for (
                            ;
                            (m =
                              (++p && m && m[g]) || (v = p = 0) || h.pop()) &&
                            ((l
                              ? m.nodeName.toLowerCase() !== y
                              : 1 !== m.nodeType) ||
                              !++v ||
                              (b &&
                                ((u = m[B] || (m[B] = {})),
                                (c = u[m.uniqueID] || (u[m.uniqueID] = {})),
                                (c[e] = [H, v])),
                              m !== t));

                          );
                        return (v -= n), v === i || (0 === v % i && v / i >= 0);
                      }
                    };
              },
              PSEUDO: function (e, a) {
                var n,
                  r =
                    w.pseudos[e] ||
                    w.setFilters[e.toLowerCase()] ||
                    t.error("unsupported pseudo: " + e);
                return r[B]
                  ? r(a)
                  : r.length > 1
                  ? ((n = [e, e, "", a]),
                    w.setFilters.hasOwnProperty(e.toLowerCase())
                      ? i(function (e, t) {
                          for (var i, n = r(e, a), o = n.length; o--; )
                            (i = et(e, n[o])), (e[i] = !(t[i] = n[o]));
                        })
                      : function (e) {
                          return r(e, 0, n);
                        })
                  : r;
              },
            },
            pseudos: {
              not: i(function (e) {
                var t = [],
                  a = [],
                  n = M(e.replace(lt, "$1"));
                return n[B]
                  ? i(function (e, t, a, i) {
                      for (var r, o = n(e, null, i, []), l = e.length; l--; )
                        (r = o[l]) && (e[l] = !(t[l] = r));
                    })
                  : function (e, i, r) {
                      return (
                        (t[0] = e), n(t, null, r, a), (t[0] = null), !a.pop()
                      );
                    };
              }),
              has: i(function (e) {
                return function (a) {
                  return t(e, a).length > 0;
                };
              }),
              contains: i(function (e) {
                return (
                  (e = e.replace(kt, Tt)),
                  function (t) {
                    return (
                      (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                    );
                  }
                );
              }),
              lang: i(function (e) {
                return (
                  mt.test(e || "") || t.error("unsupported lang: " + e),
                  (e = e.replace(kt, Tt).toLowerCase()),
                  function (t) {
                    var a;
                    do
                      if (
                        (a = R
                          ? t.lang
                          : t.getAttribute("xml:lang") ||
                            t.getAttribute("lang"))
                      )
                        return (
                          (a = a.toLowerCase()),
                          a === e || 0 === a.indexOf(e + "-")
                        );
                    while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (t) {
                var a = e.location && e.location.hash;
                return a && a.slice(1) === t.id;
              },
              root: function (e) {
                return e === I;
              },
              focus: function (e) {
                return (
                  e === F.activeElement &&
                  (!F.hasFocus || F.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: function (e) {
                return e.disabled === !1;
              },
              disabled: function (e) {
                return e.disabled === !0;
              },
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ("input" === t && !!e.checked) ||
                  ("option" === t && !!e.selected)
                );
              },
              selected: function (e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                );
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function (e) {
                return !w.pseudos.empty(e);
              },
              header: function (e) {
                return gt.test(e.nodeName);
              },
              input: function (e) {
                return ht.test(e.nodeName);
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function (e) {
                var t;
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) ||
                    "text" === t.toLowerCase())
                );
              },
              first: d(function () {
                return [0];
              }),
              last: d(function (e, t) {
                return [t - 1];
              }),
              eq: d(function (e, t, a) {
                return [0 > a ? a + t : a];
              }),
              even: d(function (e, t) {
                for (var a = 0; t > a; a += 2) e.push(a);
                return e;
              }),
              odd: d(function (e, t) {
                for (var a = 1; t > a; a += 2) e.push(a);
                return e;
              }),
              lt: d(function (e, t, a) {
                for (var i = 0 > a ? a + t : a; --i >= 0; ) e.push(i);
                return e;
              }),
              gt: d(function (e, t, a) {
                for (var i = 0 > a ? a + t : a; ++i < t; ) e.push(i);
                return e;
              }),
            },
          }),
        (w.pseudos.nth = w.pseudos.eq);
      for (k in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        w.pseudos[k] = l(k);
      for (k in { submit: !0, reset: !0 }) w.pseudos[k] = s(k);
      return (
        (u.prototype = w.filters = w.pseudos),
        (w.setFilters = new u()),
        (C = t.tokenize =
          function (e, a) {
            var i,
              n,
              r,
              o,
              l,
              s,
              d,
              c = V[e + " "];
            if (c) return a ? 0 : c.slice(0);
            for (l = e, s = [], d = w.preFilter; l; ) {
              (!i || (n = st.exec(l))) &&
                (n && (l = l.slice(n[0].length) || l), s.push((r = []))),
                (i = !1),
                (n = dt.exec(l)) &&
                  ((i = n.shift()),
                  r.push({ value: i, type: n[0].replace(lt, " ") }),
                  (l = l.slice(i.length)));
              for (o in w.filter)
                !(n = pt[o].exec(l)) ||
                  (d[o] && !(n = d[o](n))) ||
                  ((i = n.shift()),
                  r.push({ value: i, type: o, matches: n }),
                  (l = l.slice(i.length)));
              if (!i) break;
            }
            return a ? l.length : l ? t.error(e) : V(e, s).slice(0);
          }),
        (M = t.compile =
          function (e, t) {
            var a,
              i = [],
              n = [],
              r = U[e + " "];
            if (!r) {
              for (t || (t = C(e)), a = t.length; a--; )
                (r = b(t[a])), r[B] ? i.push(r) : n.push(r);
              (r = U(e, v(n, i))), (r.selector = e);
            }
            return r;
          }),
        (A = t.select =
          function (e, t, a, i) {
            var n,
              r,
              o,
              l,
              s,
              d = "function" == typeof e && e,
              u = !i && C((e = d.selector || e));
            if (((a = a || []), 1 === u.length)) {
              if (
                ((r = u[0] = u[0].slice(0)),
                r.length > 2 &&
                  "ID" === (o = r[0]).type &&
                  T.getById &&
                  9 === t.nodeType &&
                  R &&
                  w.relative[r[1].type])
              ) {
                if (
                  ((t = (w.find.ID(o.matches[0].replace(kt, Tt), t) || [])[0]),
                  !t)
                )
                  return a;
                d && (t = t.parentNode), (e = e.slice(r.shift().value.length));
              }
              for (
                n = pt.needsContext.test(e) ? 0 : r.length;
                n-- && ((o = r[n]), !w.relative[(l = o.type)]);

              )
                if (
                  (s = w.find[l]) &&
                  (i = s(
                    o.matches[0].replace(kt, Tt),
                    (bt.test(r[0].type) && c(t.parentNode)) || t
                  ))
                ) {
                  if ((r.splice(n, 1), (e = i.length && m(r)), !e))
                    return Z.apply(a, i), a;
                  break;
                }
            }
            return (
              (d || M(e, u))(
                i,
                t,
                !R,
                a,
                !t || (bt.test(e) && c(t.parentNode)) || t
              ),
              a
            );
          }),
        (T.sortStable = B.split("").sort(W).join("") === B),
        (T.detectDuplicates = !!L),
        D(),
        (T.sortDetached = n(function (e) {
          return 1 & e.compareDocumentPosition(F.createElement("div"));
        })),
        n(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          r("type|href|height|width", function (e, t, a) {
            return a
              ? void 0
              : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (T.attributes &&
          n(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          r("value", function (e, t, a) {
            return a || "input" !== e.nodeName.toLowerCase()
              ? void 0
              : e.defaultValue;
          }),
        n(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          r(tt, function (e, t, a) {
            var i;
            return a
              ? void 0
              : e[t] === !0
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
          }),
        t
      );
    })(e);
    (pt.find = bt),
      (pt.expr = bt.selectors),
      (pt.expr[":"] = pt.expr.pseudos),
      (pt.uniqueSort = pt.unique = bt.uniqueSort),
      (pt.text = bt.getText),
      (pt.isXMLDoc = bt.isXML),
      (pt.contains = bt.contains);
    var vt = function (e, t, a) {
        for (var i = [], n = void 0 !== a; (e = e[t]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
            if (n && pt(e).is(a)) break;
            i.push(e);
          }
        return i;
      },
      kt = function (e, t) {
        for (var a = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && a.push(e);
        return a;
      },
      Tt = pt.expr.match.needsContext,
      wt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      xt = /^.[^:#\[\.,]*$/;
    (pt.filter = function (e, t, a) {
      var i = t[0];
      return (
        a && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType
          ? pt.find.matchesSelector(i, e)
            ? [i]
            : []
          : pt.find.matches(
              e,
              pt.grep(t, function (e) {
                return 1 === e.nodeType;
              })
            )
      );
    }),
      pt.fn.extend({
        find: function (e) {
          var t,
            a = [],
            i = this,
            n = i.length;
          if ("string" != typeof e)
            return this.pushStack(
              pt(e).filter(function () {
                for (t = 0; n > t; t++) if (pt.contains(i[t], this)) return !0;
              })
            );
          for (t = 0; n > t; t++) pt.find(e, i[t], a);
          return (
            (a = this.pushStack(n > 1 ? pt.unique(a) : a)),
            (a.selector = this.selector ? this.selector + " " + e : e),
            a
          );
        },
        filter: function (e) {
          return this.pushStack(i(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(i(this, e || [], !0));
        },
        is: function (e) {
          return !!i(
            this,
            "string" == typeof e && Tt.test(e) ? pt(e) : e || [],
            !1
          ).length;
        },
      });
    var St,
      Ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      Mt = (pt.fn.init = function (e, t, a) {
        var i, n;
        if (!e) return this;
        if (((a = a || St), "string" == typeof e)) {
          if (
            ((i =
              "<" === e.charAt(0) &&
              ">" === e.charAt(e.length - 1) &&
              e.length >= 3
                ? [null, e, null]
                : Ct.exec(e)),
            !i || (!i[1] && t))
          )
            return !t || t.jquery
              ? (t || a).find(e)
              : this.constructor(t).find(e);
          if (i[1]) {
            if (
              ((t = t instanceof pt ? t[0] : t),
              pt.merge(
                this,
                pt.parseHTML(
                  i[1],
                  t && t.nodeType ? t.ownerDocument || t : it,
                  !0
                )
              ),
              wt.test(i[1]) && pt.isPlainObject(t))
            )
              for (i in t)
                pt.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
          }
          if (((n = it.getElementById(i[2])), n && n.parentNode)) {
            if (n.id !== i[2]) return St.find(e);
            (this.length = 1), (this[0] = n);
          }
          return (this.context = it), (this.selector = e), this;
        }
        return e.nodeType
          ? ((this.context = this[0] = e), (this.length = 1), this)
          : pt.isFunction(e)
          ? "undefined" != typeof a.ready
            ? a.ready(e)
            : e(pt)
          : (void 0 !== e.selector &&
              ((this.selector = e.selector), (this.context = e.context)),
            pt.makeArray(e, this));
      });
    (Mt.prototype = pt.fn), (St = pt(it));
    var At = /^(?:parents|prev(?:Until|All))/,
      Et = { children: !0, contents: !0, next: !0, prev: !0 };
    pt.fn.extend({
      has: function (e) {
        var t,
          a = pt(e, this),
          i = a.length;
        return this.filter(function () {
          for (t = 0; i > t; t++) if (pt.contains(this, a[t])) return !0;
        });
      },
      closest: function (e, t) {
        for (
          var a,
            i = 0,
            n = this.length,
            r = [],
            o =
              Tt.test(e) || "string" != typeof e ? pt(e, t || this.context) : 0;
          n > i;
          i++
        )
          for (a = this[i]; a && a !== t; a = a.parentNode)
            if (
              a.nodeType < 11 &&
              (o
                ? o.index(a) > -1
                : 1 === a.nodeType && pt.find.matchesSelector(a, e))
            ) {
              r.push(a);
              break;
            }
        return this.pushStack(r.length > 1 ? pt.uniqueSort(r) : r);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? pt.inArray(this[0], pt(e))
            : pt.inArray(e.jquery ? e[0] : e, this)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(pt.uniqueSort(pt.merge(this.get(), pt(e, t))));
      },
      addBack: function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      },
    }),
      pt.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
            return vt(e, "parentNode");
          },
          parentsUntil: function (e, t, a) {
            return vt(e, "parentNode", a);
          },
          next: function (e) {
            return n(e, "nextSibling");
          },
          prev: function (e) {
            return n(e, "previousSibling");
          },
          nextAll: function (e) {
            return vt(e, "nextSibling");
          },
          prevAll: function (e) {
            return vt(e, "previousSibling");
          },
          nextUntil: function (e, t, a) {
            return vt(e, "nextSibling", a);
          },
          prevUntil: function (e, t, a) {
            return vt(e, "previousSibling", a);
          },
          siblings: function (e) {
            return kt((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return kt(e.firstChild);
          },
          contents: function (e) {
            return pt.nodeName(e, "iframe")
              ? e.contentDocument || e.contentWindow.document
              : pt.merge([], e.childNodes);
          },
        },
        function (e, t) {
          pt.fn[e] = function (a, i) {
            var n = pt.map(this, t, a);
            return (
              "Until" !== e.slice(-5) && (i = a),
              i && "string" == typeof i && (n = pt.filter(i, n)),
              this.length > 1 &&
                (Et[e] || (n = pt.uniqueSort(n)),
                At.test(e) && (n = n.reverse())),
              this.pushStack(n)
            );
          };
        }
      );
    var qt = /\S+/g;
    (pt.Callbacks = function (e) {
      e = "string" == typeof e ? r(e) : pt.extend({}, e);
      var t,
        a,
        i,
        n,
        o = [],
        l = [],
        s = -1,
        d = function () {
          for (n = e.once, i = t = !0; l.length; s = -1)
            for (a = l.shift(); ++s < o.length; )
              o[s].apply(a[0], a[1]) === !1 &&
                e.stopOnFalse &&
                ((s = o.length), (a = !1));
          e.memory || (a = !1), (t = !1), n && (o = a ? [] : "");
        },
        c = {
          add: function () {
            return (
              o &&
                (a && !t && ((s = o.length - 1), l.push(a)),
                (function i(t) {
                  pt.each(t, function (t, a) {
                    pt.isFunction(a)
                      ? (e.unique && c.has(a)) || o.push(a)
                      : a && a.length && "string" !== pt.type(a) && i(a);
                  });
                })(arguments),
                a && !t && d()),
              this
            );
          },
          remove: function () {
            return (
              pt.each(arguments, function (e, t) {
                for (var a; (a = pt.inArray(t, o, a)) > -1; )
                  o.splice(a, 1), s >= a && s--;
              }),
              this
            );
          },
          has: function (e) {
            return e ? pt.inArray(e, o) > -1 : o.length > 0;
          },
          empty: function () {
            return o && (o = []), this;
          },
          disable: function () {
            return (n = l = []), (o = a = ""), this;
          },
          disabled: function () {
            return !o;
          },
          lock: function () {
            return (n = !0), a || c.disable(), this;
          },
          locked: function () {
            return !!n;
          },
          fireWith: function (e, a) {
            return (
              n ||
                ((a = a || []),
                (a = [e, a.slice ? a.slice() : a]),
                l.push(a),
                t || d()),
              this
            );
          },
          fire: function () {
            return c.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!i;
          },
        };
      return c;
    }),
      pt.extend({
        Deferred: function (e) {
          var t = [
              ["resolve", "done", pt.Callbacks("once memory"), "resolved"],
              ["reject", "fail", pt.Callbacks("once memory"), "rejected"],
              ["notify", "progress", pt.Callbacks("memory")],
            ],
            a = "pending",
            i = {
              state: function () {
                return a;
              },
              always: function () {
                return n.done(arguments).fail(arguments), this;
              },
              then: function () {
                var e = arguments;
                return pt
                  .Deferred(function (a) {
                    pt.each(t, function (t, r) {
                      var o = pt.isFunction(e[t]) && e[t];
                      n[r[1]](function () {
                        var e = o && o.apply(this, arguments);
                        e && pt.isFunction(e.promise)
                          ? e
                              .promise()
                              .progress(a.notify)
                              .done(a.resolve)
                              .fail(a.reject)
                          : a[r[0] + "With"](
                              this === i ? a.promise() : this,
                              o ? [e] : arguments
                            );
                      });
                    }),
                      (e = null);
                  })
                  .promise();
              },
              promise: function (e) {
                return null != e ? pt.extend(e, i) : i;
              },
            },
            n = {};
          return (
            (i.pipe = i.then),
            pt.each(t, function (e, r) {
              var o = r[2],
                l = r[3];
              (i[r[1]] = o.add),
                l &&
                  o.add(
                    function () {
                      a = l;
                    },
                    t[1 ^ e][2].disable,
                    t[2][2].lock
                  ),
                (n[r[0]] = function () {
                  return (
                    n[r[0] + "With"](this === n ? i : this, arguments), this
                  );
                }),
                (n[r[0] + "With"] = o.fireWith);
            }),
            i.promise(n),
            e && e.call(n, n),
            n
          );
        },
        when: function (e) {
          var t,
            a,
            i,
            n = 0,
            r = nt.call(arguments),
            o = r.length,
            l = 1 !== o || (e && pt.isFunction(e.promise)) ? o : 0,
            s = 1 === l ? e : pt.Deferred(),
            d = function (e, a, i) {
              return function (n) {
                (a[e] = this),
                  (i[e] = arguments.length > 1 ? nt.call(arguments) : n),
                  i === t ? s.notifyWith(a, i) : --l || s.resolveWith(a, i);
              };
            };
          if (o > 1)
            for (
              t = new Array(o), a = new Array(o), i = new Array(o);
              o > n;
              n++
            )
              r[n] && pt.isFunction(r[n].promise)
                ? r[n]
                    .promise()
                    .progress(d(n, a, t))
                    .done(d(n, i, r))
                    .fail(s.reject)
                : --l;
          return l || s.resolveWith(i, r), s.promise();
        },
      });
    var Lt;
    (pt.fn.ready = function (e) {
      return pt.ready.promise().done(e), this;
    }),
      pt.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
          e ? pt.readyWait++ : pt.ready(!0);
        },
        ready: function (e) {
          (e === !0 ? --pt.readyWait : pt.isReady) ||
            ((pt.isReady = !0),
            (e !== !0 && --pt.readyWait > 0) ||
              (Lt.resolveWith(it, [pt]),
              pt.fn.triggerHandler &&
                (pt(it).triggerHandler("ready"), pt(it).off("ready"))));
        },
      }),
      (pt.ready.promise = function (t) {
        if (!Lt)
          if (
            ((Lt = pt.Deferred()),
            "complete" === it.readyState ||
              ("loading" !== it.readyState && !it.documentElement.doScroll))
          )
            e.setTimeout(pt.ready);
          else if (it.addEventListener)
            it.addEventListener("DOMContentLoaded", l),
              e.addEventListener("load", l);
          else {
            it.attachEvent("onreadystatechange", l), e.attachEvent("onload", l);
            var a = !1;
            try {
              a = null == e.frameElement && it.documentElement;
            } catch (i) {}
            a &&
              a.doScroll &&
              (function n() {
                if (!pt.isReady) {
                  try {
                    a.doScroll("left");
                  } catch (t) {
                    return e.setTimeout(n, 50);
                  }
                  o(), pt.ready();
                }
              })();
          }
        return Lt.promise(t);
      }),
      pt.ready.promise();
    var Dt;
    for (Dt in pt(ut)) break;
    (ut.ownFirst = "0" === Dt),
      (ut.inlineBlockNeedsLayout = !1),
      pt(function () {
        var e, t, a, i;
        (a = it.getElementsByTagName("body")[0]),
          a &&
            a.style &&
            ((t = it.createElement("div")),
            (i = it.createElement("div")),
            (i.style.cssText =
              "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
            a.appendChild(i).appendChild(t),
            "undefined" != typeof t.style.zoom &&
              ((t.style.cssText =
                "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
              (ut.inlineBlockNeedsLayout = e = 3 === t.offsetWidth),
              e && (a.style.zoom = 1)),
            a.removeChild(i));
      }),
      (function () {
        var e = it.createElement("div");
        ut.deleteExpando = !0;
        try {
          delete e.test;
        } catch (t) {
          ut.deleteExpando = !1;
        }
        e = null;
      })();
    var Ft = function (e) {
        var t = pt.noData[(e.nodeName + " ").toLowerCase()],
          a = +e.nodeType || 1;
        return 1 !== a && 9 !== a
          ? !1
          : !t || (t !== !0 && e.getAttribute("classid") === t);
      },
      It = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Rt = /([A-Z])/g;
    pt.extend({
      cache: {},
      noData: {
        "applet ": !0,
        "embed ": !0,
        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      },
      hasData: function (e) {
        return (
          (e = e.nodeType ? pt.cache[e[pt.expando]] : e[pt.expando]),
          !!e && !d(e)
        );
      },
      data: function (e, t, a) {
        return c(e, t, a);
      },
      removeData: function (e, t) {
        return u(e, t);
      },
      _data: function (e, t, a) {
        return c(e, t, a, !0);
      },
      _removeData: function (e, t) {
        return u(e, t, !0);
      },
    }),
      pt.fn.extend({
        data: function (e, t) {
          var a,
            i,
            n,
            r = this[0],
            o = r && r.attributes;
          if (void 0 === e) {
            if (
              this.length &&
              ((n = pt.data(r)),
              1 === r.nodeType && !pt._data(r, "parsedAttrs"))
            ) {
              for (a = o.length; a--; )
                o[a] &&
                  ((i = o[a].name),
                  0 === i.indexOf("data-") &&
                    ((i = pt.camelCase(i.slice(5))), s(r, i, n[i])));
              pt._data(r, "parsedAttrs", !0);
            }
            return n;
          }
          return "object" == typeof e
            ? this.each(function () {
                pt.data(this, e);
              })
            : arguments.length > 1
            ? this.each(function () {
                pt.data(this, e, t);
              })
            : r
            ? s(r, e, pt.data(r, e))
            : void 0;
        },
        removeData: function (e) {
          return this.each(function () {
            pt.removeData(this, e);
          });
        },
      }),
      pt.extend({
        queue: function (e, t, a) {
          var i;
          return e
            ? ((t = (t || "fx") + "queue"),
              (i = pt._data(e, t)),
              a &&
                (!i || pt.isArray(a)
                  ? (i = pt._data(e, t, pt.makeArray(a)))
                  : i.push(a)),
              i || [])
            : void 0;
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var a = pt.queue(e, t),
            i = a.length,
            n = a.shift(),
            r = pt._queueHooks(e, t),
            o = function () {
              pt.dequeue(e, t);
            };
          "inprogress" === n && ((n = a.shift()), i--),
            n &&
              ("fx" === t && a.unshift("inprogress"),
              delete r.stop,
              n.call(e, o, r)),
            !i && r && r.empty.fire();
        },
        _queueHooks: function (e, t) {
          var a = t + "queueHooks";
          return (
            pt._data(e, a) ||
            pt._data(e, a, {
              empty: pt.Callbacks("once memory").add(function () {
                pt._removeData(e, t + "queue"), pt._removeData(e, a);
              }),
            })
          );
        },
      }),
      pt.fn.extend({
        queue: function (e, t) {
          var a = 2;
          return (
            "string" != typeof e && ((t = e), (e = "fx"), a--),
            arguments.length < a
              ? pt.queue(this[0], e)
              : void 0 === t
              ? this
              : this.each(function () {
                  var a = pt.queue(this, e, t);
                  pt._queueHooks(this, e),
                    "fx" === e && "inprogress" !== a[0] && pt.dequeue(this, e);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            pt.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          var a,
            i = 1,
            n = pt.Deferred(),
            r = this,
            o = this.length,
            l = function () {
              --i || n.resolveWith(r, [r]);
            };
          for (
            "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
            o--;

          )
            (a = pt._data(r[o], e + "queueHooks")),
              a && a.empty && (i++, a.empty.add(l));
          return l(), n.promise(t);
        },
      }),
      (function () {
        var e;
        ut.shrinkWrapBlocks = function () {
          if (null != e) return e;
          e = !1;
          var t, a, i;
          return (
            (a = it.getElementsByTagName("body")[0]),
            a && a.style
              ? ((t = it.createElement("div")),
                (i = it.createElement("div")),
                (i.style.cssText =
                  "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                a.appendChild(i).appendChild(t),
                "undefined" != typeof t.style.zoom &&
                  ((t.style.cssText =
                    "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                  (t.appendChild(it.createElement("div")).style.width = "5px"),
                  (e = 3 !== t.offsetWidth)),
                a.removeChild(i),
                e)
              : void 0
          );
        };
      })();
    var _t = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      jt = new RegExp("^(?:([+-])=|)(" + _t + ")([a-z%]*)$", "i"),
      Pt = ["Top", "Right", "Bottom", "Left"],
      Ot = function (e, t) {
        return (
          (e = t || e),
          "none" === pt.css(e, "display") || !pt.contains(e.ownerDocument, e)
        );
      },
      Bt = function (e, t, a, i, n, r, o) {
        var l = 0,
          s = e.length,
          d = null == a;
        if ("object" === pt.type(a)) {
          n = !0;
          for (l in a) Bt(e, t, l, a[l], !0, r, o);
        } else if (
          void 0 !== i &&
          ((n = !0),
          pt.isFunction(i) || (o = !0),
          d &&
            (o
              ? (t.call(e, i), (t = null))
              : ((d = t),
                (t = function (e, t, a) {
                  return d.call(pt(e), a);
                }))),
          t)
        )
          for (; s > l; l++) t(e[l], a, o ? i : i.call(e[l], l, t(e[l], a)));
        return n ? e : d ? t.call(e) : s ? t(e[0], a) : r;
      },
      zt = /^(?:checkbox|radio)$/i,
      Ht = /<([\w:-]+)/,
      Nt = /^$|\/(?:java|ecma)script/i,
      $t = /^\s+/,
      Vt =
        "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !(function () {
      var e = it.createElement("div"),
        t = it.createDocumentFragment(),
        a = it.createElement("input");
      (e.innerHTML =
        "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (ut.leadingWhitespace = 3 === e.firstChild.nodeType),
        (ut.tbody = !e.getElementsByTagName("tbody").length),
        (ut.htmlSerialize = !!e.getElementsByTagName("link").length),
        (ut.html5Clone =
          "<:nav></:nav>" !== it.createElement("nav").cloneNode(!0).outerHTML),
        (a.type = "checkbox"),
        (a.checked = !0),
        t.appendChild(a),
        (ut.appendChecked = a.checked),
        (e.innerHTML = "<textarea>x</textarea>"),
        (ut.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue),
        t.appendChild(e),
        (a = it.createElement("input")),
        a.setAttribute("type", "radio"),
        a.setAttribute("checked", "checked"),
        a.setAttribute("name", "t"),
        e.appendChild(a),
        (ut.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ut.noCloneEvent = !!e.addEventListener),
        (e[pt.expando] = 1),
        (ut.attributes = !e.getAttribute(pt.expando));
    })();
    var Ut = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: ut.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
    };
    (Ut.optgroup = Ut.option),
      (Ut.tbody = Ut.tfoot = Ut.colgroup = Ut.caption = Ut.thead),
      (Ut.th = Ut.td);
    var Wt = /<|&#?\w+;/,
      Kt = /<tbody/i;
    !(function () {
      var t,
        a,
        i = it.createElement("div");
      for (t in { submit: !0, change: !0, focusin: !0 })
        (a = "on" + t),
          (ut[t] = a in e) ||
            (i.setAttribute(a, "t"), (ut[t] = i.attributes[a].expando === !1));
      i = null;
    })();
    var Gt = /^(?:input|select|textarea)$/i,
      Yt = /^key/,
      Xt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Jt = /^(?:focusinfocus|focusoutblur)$/,
      Zt = /^([^.]*)(?:\.(.+)|)/;
    (pt.event = {
      global: {},
      add: function (e, t, a, i, n) {
        var r,
          o,
          l,
          s,
          d,
          c,
          u,
          m,
          p,
          h,
          g,
          f = pt._data(e);
        if (f) {
          for (
            a.handler && ((s = a), (a = s.handler), (n = s.selector)),
              a.guid || (a.guid = pt.guid++),
              (o = f.events) || (o = f.events = {}),
              (c = f.handle) ||
                ((c = f.handle =
                  function (e) {
                    return "undefined" == typeof pt ||
                      (e && pt.event.triggered === e.type)
                      ? void 0
                      : pt.event.dispatch.apply(c.elem, arguments);
                  }),
                (c.elem = e)),
              t = (t || "").match(qt) || [""],
              l = t.length;
            l--;

          )
            (r = Zt.exec(t[l]) || []),
              (p = g = r[1]),
              (h = (r[2] || "").split(".").sort()),
              p &&
                ((d = pt.event.special[p] || {}),
                (p = (n ? d.delegateType : d.bindType) || p),
                (d = pt.event.special[p] || {}),
                (u = pt.extend(
                  {
                    type: p,
                    origType: g,
                    data: i,
                    handler: a,
                    guid: a.guid,
                    selector: n,
                    needsContext: n && pt.expr.match.needsContext.test(n),
                    namespace: h.join("."),
                  },
                  s
                )),
                (m = o[p]) ||
                  ((m = o[p] = []),
                  (m.delegateCount = 0),
                  (d.setup && d.setup.call(e, i, h, c) !== !1) ||
                    (e.addEventListener
                      ? e.addEventListener(p, c, !1)
                      : e.attachEvent && e.attachEvent("on" + p, c))),
                d.add &&
                  (d.add.call(e, u),
                  u.handler.guid || (u.handler.guid = a.guid)),
                n ? m.splice(m.delegateCount++, 0, u) : m.push(u),
                (pt.event.global[p] = !0));
          e = null;
        }
      },
      remove: function (e, t, a, i, n) {
        var r,
          o,
          l,
          s,
          d,
          c,
          u,
          m,
          p,
          h,
          g,
          f = pt.hasData(e) && pt._data(e);
        if (f && (c = f.events)) {
          for (t = (t || "").match(qt) || [""], d = t.length; d--; )
            if (
              ((l = Zt.exec(t[d]) || []),
              (p = g = l[1]),
              (h = (l[2] || "").split(".").sort()),
              p)
            ) {
              for (
                u = pt.event.special[p] || {},
                  p = (i ? u.delegateType : u.bindType) || p,
                  m = c[p] || [],
                  l =
                    l[2] &&
                    new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  s = r = m.length;
                r--;

              )
                (o = m[r]),
                  (!n && g !== o.origType) ||
                    (a && a.guid !== o.guid) ||
                    (l && !l.test(o.namespace)) ||
                    (i && i !== o.selector && ("**" !== i || !o.selector)) ||
                    (m.splice(r, 1),
                    o.selector && m.delegateCount--,
                    u.remove && u.remove.call(e, o));
              s &&
                !m.length &&
                ((u.teardown && u.teardown.call(e, h, f.handle) !== !1) ||
                  pt.removeEvent(e, p, f.handle),
                delete c[p]);
            } else for (p in c) pt.event.remove(e, p + t[d], a, i, !0);
          pt.isEmptyObject(c) && (delete f.handle, pt._removeData(e, "events"));
        }
      },
      trigger: function (t, a, i, n) {
        var r,
          o,
          l,
          s,
          d,
          c,
          u,
          m = [i || it],
          p = ct.call(t, "type") ? t.type : t,
          h = ct.call(t, "namespace") ? t.namespace.split(".") : [];
        if (
          ((l = c = i = i || it),
          3 !== i.nodeType &&
            8 !== i.nodeType &&
            !Jt.test(p + pt.event.triggered) &&
            (p.indexOf(".") > -1 &&
              ((h = p.split(".")), (p = h.shift()), h.sort()),
            (o = p.indexOf(":") < 0 && "on" + p),
            (t = t[pt.expando]
              ? t
              : new pt.Event(p, "object" == typeof t && t)),
            (t.isTrigger = n ? 2 : 3),
            (t.namespace = h.join(".")),
            (t.rnamespace = t.namespace
              ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (t.result = void 0),
            t.target || (t.target = i),
            (a = null == a ? [t] : pt.makeArray(a, [t])),
            (d = pt.event.special[p] || {}),
            n || !d.trigger || d.trigger.apply(i, a) !== !1))
        ) {
          if (!n && !d.noBubble && !pt.isWindow(i)) {
            for (
              s = d.delegateType || p, Jt.test(s + p) || (l = l.parentNode);
              l;
              l = l.parentNode
            )
              m.push(l), (c = l);
            c === (i.ownerDocument || it) &&
              m.push(c.defaultView || c.parentWindow || e);
          }
          for (u = 0; (l = m[u++]) && !t.isPropagationStopped(); )
            (t.type = u > 1 ? s : d.bindType || p),
              (r =
                (pt._data(l, "events") || {})[t.type] && pt._data(l, "handle")),
              r && r.apply(l, a),
              (r = o && l[o]),
              r &&
                r.apply &&
                Ft(l) &&
                ((t.result = r.apply(l, a)),
                t.result === !1 && t.preventDefault());
          if (
            ((t.type = p),
            !n &&
              !t.isDefaultPrevented() &&
              (!d._default || d._default.apply(m.pop(), a) === !1) &&
              Ft(i) &&
              o &&
              i[p] &&
              !pt.isWindow(i))
          ) {
            (c = i[o]), c && (i[o] = null), (pt.event.triggered = p);
            try {
              i[p]();
            } catch (g) {}
            (pt.event.triggered = void 0), c && (i[o] = c);
          }
          return t.result;
        }
      },
      dispatch: function (e) {
        e = pt.event.fix(e);
        var t,
          a,
          i,
          n,
          r,
          o = [],
          l = nt.call(arguments),
          s = (pt._data(this, "events") || {})[e.type] || [],
          d = pt.event.special[e.type] || {};
        if (
          ((l[0] = e),
          (e.delegateTarget = this),
          !d.preDispatch || d.preDispatch.call(this, e) !== !1)
        ) {
          for (
            o = pt.event.handlers.call(this, e, s), t = 0;
            (n = o[t++]) && !e.isPropagationStopped();

          )
            for (
              e.currentTarget = n.elem, a = 0;
              (r = n.handlers[a++]) && !e.isImmediatePropagationStopped();

            )
              (!e.rnamespace || e.rnamespace.test(r.namespace)) &&
                ((e.handleObj = r),
                (e.data = r.data),
                (i = (
                  (pt.event.special[r.origType] || {}).handle || r.handler
                ).apply(n.elem, l)),
                void 0 !== i &&
                  (e.result = i) === !1 &&
                  (e.preventDefault(), e.stopPropagation()));
          return d.postDispatch && d.postDispatch.call(this, e), e.result;
        }
      },
      handlers: function (e, t) {
        var a,
          i,
          n,
          r,
          o = [],
          l = t.delegateCount,
          s = e.target;
        if (
          l &&
          s.nodeType &&
          ("click" !== e.type || isNaN(e.button) || e.button < 1)
        )
          for (; s != this; s = s.parentNode || this)
            if (1 === s.nodeType && (s.disabled !== !0 || "click" !== e.type)) {
              for (i = [], a = 0; l > a; a++)
                (r = t[a]),
                  (n = r.selector + " "),
                  void 0 === i[n] &&
                    (i[n] = r.needsContext
                      ? pt(n, this).index(s) > -1
                      : pt.find(n, this, null, [s]).length),
                  i[n] && i.push(r);
              i.length && o.push({ elem: s, handlers: i });
            }
        return l < t.length && o.push({ elem: this, handlers: t.slice(l) }), o;
      },
      fix: function (e) {
        if (e[pt.expando]) return e;
        var t,
          a,
          i,
          n = e.type,
          r = e,
          o = this.fixHooks[n];
        for (
          o ||
            (this.fixHooks[n] = o =
              Xt.test(n) ? this.mouseHooks : Yt.test(n) ? this.keyHooks : {}),
            i = o.props ? this.props.concat(o.props) : this.props,
            e = new pt.Event(r),
            t = i.length;
          t--;

        )
          (a = i[t]), (e[a] = r[a]);
        return (
          e.target || (e.target = r.srcElement || it),
          3 === e.target.nodeType && (e.target = e.target.parentNode),
          (e.metaKey = !!e.metaKey),
          o.filter ? o.filter(e, r) : e
        );
      },
      props:
        "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
          " "
        ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (e, t) {
          return (
            null == e.which &&
              (e.which = null != t.charCode ? t.charCode : t.keyCode),
            e
          );
        },
      },
      mouseHooks: {
        props:
          "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
            " "
          ),
        filter: function (e, t) {
          var a,
            i,
            n,
            r = t.button,
            o = t.fromElement;
          return (
            null == e.pageX &&
              null != t.clientX &&
              ((i = e.target.ownerDocument || it),
              (n = i.documentElement),
              (a = i.body),
              (e.pageX =
                t.clientX +
                ((n && n.scrollLeft) || (a && a.scrollLeft) || 0) -
                ((n && n.clientLeft) || (a && a.clientLeft) || 0)),
              (e.pageY =
                t.clientY +
                ((n && n.scrollTop) || (a && a.scrollTop) || 0) -
                ((n && n.clientTop) || (a && a.clientTop) || 0))),
            !e.relatedTarget &&
              o &&
              (e.relatedTarget = o === e.target ? t.toElement : o),
            e.which ||
              void 0 === r ||
              (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
            e
          );
        },
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            if (this !== k() && this.focus)
              try {
                return this.focus(), !1;
              } catch (e) {}
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            return this === k() && this.blur ? (this.blur(), !1) : void 0;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            return pt.nodeName(this, "input") &&
              "checkbox" === this.type &&
              this.click
              ? (this.click(), !1)
              : void 0;
          },
          _default: function (e) {
            return pt.nodeName(e.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
      simulate: function (e, t, a) {
        var i = pt.extend(new pt.Event(), a, { type: e, isSimulated: !0 });
        pt.event.trigger(i, null, t),
          i.isDefaultPrevented() && a.preventDefault();
      },
    }),
      (pt.removeEvent = it.removeEventListener
        ? function (e, t, a) {
            e.removeEventListener && e.removeEventListener(t, a);
          }
        : function (e, t, a) {
            var i = "on" + t;
            e.detachEvent &&
              ("undefined" == typeof e[i] && (e[i] = null),
              e.detachEvent(i, a));
          }),
      (pt.Event = function (e, t) {
        return this instanceof pt.Event
          ? (e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented && e.returnValue === !1)
                    ? b
                    : v))
              : (this.type = e),
            t && pt.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || pt.now()),
            (this[pt.expando] = !0),
            void 0)
          : new pt.Event(e, t);
      }),
      (pt.Event.prototype = {
        constructor: pt.Event,
        isDefaultPrevented: v,
        isPropagationStopped: v,
        isImmediatePropagationStopped: v,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = b),
            e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = b),
            e &&
              !this.isSimulated &&
              (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = b),
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      pt.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (e, t) {
          pt.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
              var a,
                i = this,
                n = e.relatedTarget,
                r = e.handleObj;
              return (
                (!n || (n !== i && !pt.contains(i, n))) &&
                  ((e.type = r.origType),
                  (a = r.handler.apply(this, arguments)),
                  (e.type = t)),
                a
              );
            },
          };
        }
      ),
      ut.submit ||
        (pt.event.special.submit = {
          setup: function () {
            return pt.nodeName(this, "form")
              ? !1
              : (pt.event.add(
                  this,
                  "click._submit keypress._submit",
                  function (e) {
                    var t = e.target,
                      a =
                        pt.nodeName(t, "input") || pt.nodeName(t, "button")
                          ? pt.prop(t, "form")
                          : void 0;
                    a &&
                      !pt._data(a, "submit") &&
                      (pt.event.add(a, "submit._submit", function (e) {
                        e._submitBubble = !0;
                      }),
                      pt._data(a, "submit", !0));
                  }
                ),
                void 0);
          },
          postDispatch: function (e) {
            e._submitBubble &&
              (delete e._submitBubble,
              this.parentNode &&
                !e.isTrigger &&
                pt.event.simulate("submit", this.parentNode, e));
          },
          teardown: function () {
            return pt.nodeName(this, "form")
              ? !1
              : (pt.event.remove(this, "._submit"), void 0);
          },
        }),
      ut.change ||
        (pt.event.special.change = {
          setup: function () {
            return Gt.test(this.nodeName)
              ? (("checkbox" === this.type || "radio" === this.type) &&
                  (pt.event.add(this, "propertychange._change", function (e) {
                    "checked" === e.originalEvent.propertyName &&
                      (this._justChanged = !0);
                  }),
                  pt.event.add(this, "click._change", function (e) {
                    this._justChanged &&
                      !e.isTrigger &&
                      (this._justChanged = !1),
                      pt.event.simulate("change", this, e);
                  })),
                !1)
              : (pt.event.add(this, "beforeactivate._change", function (e) {
                  var t = e.target;
                  Gt.test(t.nodeName) &&
                    !pt._data(t, "change") &&
                    (pt.event.add(t, "change._change", function (e) {
                      !this.parentNode ||
                        e.isSimulated ||
                        e.isTrigger ||
                        pt.event.simulate("change", this.parentNode, e);
                    }),
                    pt._data(t, "change", !0));
                }),
                void 0);
          },
          handle: function (e) {
            var t = e.target;
            return this !== t ||
              e.isSimulated ||
              e.isTrigger ||
              ("radio" !== t.type && "checkbox" !== t.type)
              ? e.handleObj.handler.apply(this, arguments)
              : void 0;
          },
          teardown: function () {
            return pt.event.remove(this, "._change"), !Gt.test(this.nodeName);
          },
        }),
      ut.focusin ||
        pt.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          var a = function (e) {
            pt.event.simulate(t, e.target, pt.event.fix(e));
          };
          pt.event.special[t] = {
            setup: function () {
              var i = this.ownerDocument || this,
                n = pt._data(i, t);
              n || i.addEventListener(e, a, !0), pt._data(i, t, (n || 0) + 1);
            },
            teardown: function () {
              var i = this.ownerDocument || this,
                n = pt._data(i, t) - 1;
              n
                ? pt._data(i, t, n)
                : (i.removeEventListener(e, a, !0), pt._removeData(i, t));
            },
          };
        }),
      pt.fn.extend({
        on: function (e, t, a, i) {
          return T(this, e, t, a, i);
        },
        one: function (e, t, a, i) {
          return T(this, e, t, a, i, 1);
        },
        off: function (e, t, a) {
          var i, n;
          if (e && e.preventDefault && e.handleObj)
            return (
              (i = e.handleObj),
              pt(e.delegateTarget).off(
                i.namespace ? i.origType + "." + i.namespace : i.origType,
                i.selector,
                i.handler
              ),
              this
            );
          if ("object" == typeof e) {
            for (n in e) this.off(n, t, e[n]);
            return this;
          }
          return (
            (t === !1 || "function" == typeof t) && ((a = t), (t = void 0)),
            a === !1 && (a = v),
            this.each(function () {
              pt.event.remove(this, e, a, t);
            })
          );
        },
        trigger: function (e, t) {
          return this.each(function () {
            pt.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var a = this[0];
          return a ? pt.event.trigger(e, t, a, !0) : void 0;
        },
      });
    var Qt = / jQuery\d+="(?:null|\d+)"/g,
      ea = new RegExp("<(?:" + Vt + ")[\\s/>]", "i"),
      ta =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      aa = /<script|<style|<link/i,
      ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
      na = /^true\/(.*)/,
      ra = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      oa = p(it),
      la = oa.appendChild(it.createElement("div"));
    pt.extend({
      htmlPrefilter: function (e) {
        return e.replace(ta, "<$1></$2>");
      },
      clone: function (e, t, a) {
        var i,
          n,
          r,
          o,
          l,
          s = pt.contains(e.ownerDocument, e);
        if (
          (ut.html5Clone || pt.isXMLDoc(e) || !ea.test("<" + e.nodeName + ">")
            ? (r = e.cloneNode(!0))
            : ((la.innerHTML = e.outerHTML),
              la.removeChild((r = la.firstChild))),
          !(
            (ut.noCloneEvent && ut.noCloneChecked) ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            pt.isXMLDoc(e)
          ))
        )
          for (i = h(r), l = h(e), o = 0; null != (n = l[o]); ++o)
            i[o] && M(n, i[o]);
        if (t)
          if (a)
            for (l = l || h(e), i = i || h(r), o = 0; null != (n = l[o]); o++)
              C(n, i[o]);
          else C(e, r);
        return (
          (i = h(r, "script")),
          i.length > 0 && g(i, !s && h(e, "script")),
          (i = l = n = null),
          r
        );
      },
      cleanData: function (e, t) {
        for (
          var a,
            i,
            n,
            r,
            o = 0,
            l = pt.expando,
            s = pt.cache,
            d = ut.attributes,
            c = pt.event.special;
          null != (a = e[o]);
          o++
        )
          if ((t || Ft(a)) && ((n = a[l]), (r = n && s[n]))) {
            if (r.events)
              for (i in r.events)
                c[i] ? pt.event.remove(a, i) : pt.removeEvent(a, i, r.handle);
            s[n] &&
              (delete s[n],
              d || "undefined" == typeof a.removeAttribute
                ? (a[l] = void 0)
                : a.removeAttribute(l),
              at.push(n));
          }
      },
    }),
      pt.fn.extend({
        domManip: A,
        detach: function (e) {
          return E(this, e, !0);
        },
        remove: function (e) {
          return E(this, e);
        },
        text: function (e) {
          return Bt(
            this,
            function (e) {
              return void 0 === e
                ? pt.text(this)
                : this.empty().append(
                    ((this[0] && this[0].ownerDocument) || it).createTextNode(e)
                  );
            },
            null,
            e,
            arguments.length
          );
        },
        append: function () {
          return A(this, arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = w(this, e);
              t.appendChild(e);
            }
          });
        },
        prepend: function () {
          return A(this, arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = w(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return A(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return A(this, arguments, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++) {
            for (1 === e.nodeType && pt.cleanData(h(e, !1)); e.firstChild; )
              e.removeChild(e.firstChild);
            e.options && pt.nodeName(e, "select") && (e.options.length = 0);
          }
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null == e ? !1 : e),
            (t = null == t ? e : t),
            this.map(function () {
              return pt.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return Bt(
            this,
            function (e) {
              var t = this[0] || {},
                a = 0,
                i = this.length;
              if (void 0 === e)
                return 1 === t.nodeType ? t.innerHTML.replace(Qt, "") : void 0;
              if (
                !(
                  "string" != typeof e ||
                  aa.test(e) ||
                  (!ut.htmlSerialize && ea.test(e)) ||
                  (!ut.leadingWhitespace && $t.test(e)) ||
                  Ut[(Ht.exec(e) || ["", ""])[1].toLowerCase()]
                )
              ) {
                e = pt.htmlPrefilter(e);
                try {
                  for (; i > a; a++)
                    (t = this[a] || {}),
                      1 === t.nodeType &&
                        (pt.cleanData(h(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (n) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function () {
          var e = [];
          return A(
            this,
            arguments,
            function (t) {
              var a = this.parentNode;
              pt.inArray(this, e) < 0 &&
                (pt.cleanData(h(this)), a && a.replaceChild(t, this));
            },
            e
          );
        },
      }),
      pt.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (e, t) {
          pt.fn[e] = function (e) {
            for (var a, i = 0, n = [], r = pt(e), o = r.length - 1; o >= i; i++)
              (a = i === o ? this : this.clone(!0)),
                pt(r[i])[t](a),
                ot.apply(n, a.get());
            return this.pushStack(n);
          };
        }
      );
    var sa,
      da = { HTML: "block", BODY: "block" },
      ca = /^margin/,
      ua = new RegExp("^(" + _t + ")(?!px)[a-z%]+$", "i"),
      ma = function (e, t, a, i) {
        var n,
          r,
          o = {};
        for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
        n = a.apply(e, i || []);
        for (r in t) e.style[r] = o[r];
        return n;
      },
      pa = it.documentElement;
    !(function () {
      function t() {
        var t,
          c,
          u = it.documentElement;
        u.appendChild(s),
          (d.style.cssText =
            "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (a = n = l = !1),
          (i = o = !0),
          e.getComputedStyle &&
            ((c = e.getComputedStyle(d)),
            (a = "1%" !== (c || {}).top),
            (l = "2px" === (c || {}).marginLeft),
            (n = "4px" === (c || { width: "4px" }).width),
            (d.style.marginRight = "50%"),
            (i = "4px" === (c || { marginRight: "4px" }).marginRight),
            (t = d.appendChild(it.createElement("div"))),
            (t.style.cssText = d.style.cssText =
              "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
            (t.style.marginRight = t.style.width = "0"),
            (d.style.width = "1px"),
            (o = !parseFloat((e.getComputedStyle(t) || {}).marginRight)),
            d.removeChild(t)),
          (d.style.display = "none"),
          (r = 0 === d.getClientRects().length),
          r &&
            ((d.style.display = ""),
            (d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            (d.childNodes[0].style.borderCollapse = "separate"),
            (t = d.getElementsByTagName("td")),
            (t[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
            (r = 0 === t[0].offsetHeight),
            r &&
              ((t[0].style.display = ""),
              (t[1].style.display = "none"),
              (r = 0 === t[0].offsetHeight))),
          u.removeChild(s);
      }
      var a,
        i,
        n,
        r,
        o,
        l,
        s = it.createElement("div"),
        d = it.createElement("div");
      d.style &&
        ((d.style.cssText = "float:left;opacity:.5"),
        (ut.opacity = "0.5" === d.style.opacity),
        (ut.cssFloat = !!d.style.cssFloat),
        (d.style.backgroundClip = "content-box"),
        (d.cloneNode(!0).style.backgroundClip = ""),
        (ut.clearCloneStyle = "content-box" === d.style.backgroundClip),
        (s = it.createElement("div")),
        (s.style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        (d.innerHTML = ""),
        s.appendChild(d),
        (ut.boxSizing =
          "" === d.style.boxSizing ||
          "" === d.style.MozBoxSizing ||
          "" === d.style.WebkitBoxSizing),
        pt.extend(ut, {
          reliableHiddenOffsets: function () {
            return null == a && t(), r;
          },
          boxSizingReliable: function () {
            return null == a && t(), n;
          },
          pixelMarginRight: function () {
            return null == a && t(), i;
          },
          pixelPosition: function () {
            return null == a && t(), a;
          },
          reliableMarginRight: function () {
            return null == a && t(), o;
          },
          reliableMarginLeft: function () {
            return null == a && t(), l;
          },
        }));
    })();
    var ha,
      ga,
      fa = /^(top|right|bottom|left)$/;
    e.getComputedStyle
      ? ((ha = function (t) {
          var a = t.ownerDocument.defaultView;
          return (a && a.opener) || (a = e), a.getComputedStyle(t);
        }),
        (ga = function (e, t, a) {
          var i,
            n,
            r,
            o,
            l = e.style;
          return (
            (a = a || ha(e)),
            (o = a ? a.getPropertyValue(t) || a[t] : void 0),
            ("" !== o && void 0 !== o) ||
              pt.contains(e.ownerDocument, e) ||
              (o = pt.style(e, t)),
            a &&
              !ut.pixelMarginRight() &&
              ua.test(o) &&
              ca.test(t) &&
              ((i = l.width),
              (n = l.minWidth),
              (r = l.maxWidth),
              (l.minWidth = l.maxWidth = l.width = o),
              (o = a.width),
              (l.width = i),
              (l.minWidth = n),
              (l.maxWidth = r)),
            void 0 === o ? o : o + ""
          );
        }))
      : pa.currentStyle &&
        ((ha = function (e) {
          return e.currentStyle;
        }),
        (ga = function (e, t, a) {
          var i,
            n,
            r,
            o,
            l = e.style;
          return (
            (a = a || ha(e)),
            (o = a ? a[t] : void 0),
            null == o && l && l[t] && (o = l[t]),
            ua.test(o) &&
              !fa.test(t) &&
              ((i = l.left),
              (n = e.runtimeStyle),
              (r = n && n.left),
              r && (n.left = e.currentStyle.left),
              (l.left = "fontSize" === t ? "1em" : o),
              (o = l.pixelLeft + "px"),
              (l.left = i),
              r && (n.left = r)),
            void 0 === o ? o : o + "" || "auto"
          );
        }));
    var ya = /alpha\([^)]*\)/i,
      ba = /opacity\s*=\s*([^)]*)/i,
      va = /^(none|table(?!-c[ea]).+)/,
      ka = new RegExp("^(" + _t + ")(.*)$", "i"),
      Ta = { position: "absolute", visibility: "hidden", display: "block" },
      wa = { letterSpacing: "0", fontWeight: "400" },
      xa = ["Webkit", "O", "Moz", "ms"],
      Sa = it.createElement("div").style;
    pt.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var a = ga(e, "opacity");
              return "" === a ? "1" : a;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: ut.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (e, t, a, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var n,
            r,
            o,
            l = pt.camelCase(t),
            s = e.style;
          if (
            ((t = pt.cssProps[l] || (pt.cssProps[l] = F(l) || l)),
            (o = pt.cssHooks[t] || pt.cssHooks[l]),
            void 0 === a)
          )
            return o && "get" in o && void 0 !== (n = o.get(e, !1, i))
              ? n
              : s[t];
          if (
            ((r = typeof a),
            "string" === r &&
              (n = jt.exec(a)) &&
              n[1] &&
              ((a = m(e, t, n)), (r = "number")),
            null != a &&
              a === a &&
              ("number" === r &&
                (a += (n && n[3]) || (pt.cssNumber[l] ? "" : "px")),
              ut.clearCloneStyle ||
                "" !== a ||
                0 !== t.indexOf("background") ||
                (s[t] = "inherit"),
              !(o && "set" in o && void 0 === (a = o.set(e, a, i)))))
          )
            try {
              s[t] = a;
            } catch (d) {}
        }
      },
      css: function (e, t, a, i) {
        var n,
          r,
          o,
          l = pt.camelCase(t);
        return (
          (t = pt.cssProps[l] || (pt.cssProps[l] = F(l) || l)),
          (o = pt.cssHooks[t] || pt.cssHooks[l]),
          o && "get" in o && (r = o.get(e, !0, a)),
          void 0 === r && (r = ga(e, t, i)),
          "normal" === r && t in wa && (r = wa[t]),
          "" === a || a
            ? ((n = parseFloat(r)), a === !0 || isFinite(n) ? n || 0 : r)
            : r
        );
      },
    }),
      pt.each(["height", "width"], function (e, t) {
        pt.cssHooks[t] = {
          get: function (e, a, i) {
            return a
              ? va.test(pt.css(e, "display")) && 0 === e.offsetWidth
                ? ma(e, Ta, function () {
                    return j(e, t, i);
                  })
                : j(e, t, i)
              : void 0;
          },
          set: function (e, a, i) {
            var n = i && ha(e);
            return R(
              e,
              a,
              i
                ? _(
                    e,
                    t,
                    i,
                    ut.boxSizing &&
                      "border-box" === pt.css(e, "boxSizing", !1, n),
                    n
                  )
                : 0
            );
          },
        };
      }),
      ut.opacity ||
        (pt.cssHooks.opacity = {
          get: function (e, t) {
            return ba.test(
              (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) ||
                ""
            )
              ? 0.01 * parseFloat(RegExp.$1) + ""
              : t
              ? "1"
              : "";
          },
          set: function (e, t) {
            var a = e.style,
              i = e.currentStyle,
              n = pt.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
              r = (i && i.filter) || a.filter || "";
            (a.zoom = 1),
              ((t >= 1 || "" === t) &&
                "" === pt.trim(r.replace(ya, "")) &&
                a.removeAttribute &&
                (a.removeAttribute("filter"), "" === t || (i && !i.filter))) ||
                (a.filter = ya.test(r) ? r.replace(ya, n) : r + " " + n);
          },
        }),
      (pt.cssHooks.marginRight = D(ut.reliableMarginRight, function (e, t) {
        return t
          ? ma(e, { display: "inline-block" }, ga, [e, "marginRight"])
          : void 0;
      })),
      (pt.cssHooks.marginLeft = D(ut.reliableMarginLeft, function (e, t) {
        return t
          ? (parseFloat(ga(e, "marginLeft")) ||
              (pt.contains(e.ownerDocument, e)
                ? e.getBoundingClientRect().left -
                  ma(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })
                : 0)) + "px"
          : void 0;
      })),
      pt.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
        (pt.cssHooks[e + t] = {
          expand: function (a) {
            for (
              var i = 0, n = {}, r = "string" == typeof a ? a.split(" ") : [a];
              4 > i;
              i++
            )
              n[e + Pt[i] + t] = r[i] || r[i - 2] || r[0];
            return n;
          },
        }),
          ca.test(e) || (pt.cssHooks[e + t].set = R);
      }),
      pt.fn.extend({
        css: function (e, t) {
          return Bt(
            this,
            function (e, t, a) {
              var i,
                n,
                r = {},
                o = 0;
              if (pt.isArray(t)) {
                for (i = ha(e), n = t.length; n > o; o++)
                  r[t[o]] = pt.css(e, t[o], !1, i);
                return r;
              }
              return void 0 !== a ? pt.style(e, t, a) : pt.css(e, t);
            },
            e,
            t,
            arguments.length > 1
          );
        },
        show: function () {
          return I(this, !0);
        },
        hide: function () {
          return I(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                Ot(this) ? pt(this).show() : pt(this).hide();
              });
        },
      }),
      (pt.Tween = P),
      (P.prototype = {
        constructor: P,
        init: function (e, t, a, i, n, r) {
          (this.elem = e),
            (this.prop = a),
            (this.easing = n || pt.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = i),
            (this.unit = r || (pt.cssNumber[a] ? "" : "px"));
        },
        cur: function () {
          var e = P.propHooks[this.prop];
          return e && e.get ? e.get(this) : P.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            a = P.propHooks[this.prop];
          return (
            (this.pos = t =
              this.options.duration
                ? pt.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  )
                : e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            a && a.set ? a.set(this) : P.propHooks._default.set(this),
            this
          );
        },
      }),
      (P.prototype.init.prototype = P.prototype),
      (P.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return 1 !== e.elem.nodeType ||
              (null != e.elem[e.prop] && null == e.elem.style[e.prop])
              ? e.elem[e.prop]
              : ((t = pt.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0);
          },
          set: function (e) {
            pt.fx.step[e.prop]
              ? pt.fx.step[e.prop](e)
              : 1 !== e.elem.nodeType ||
                (null == e.elem.style[pt.cssProps[e.prop]] &&
                  !pt.cssHooks[e.prop])
              ? (e.elem[e.prop] = e.now)
              : pt.style(e.elem, e.prop, e.now + e.unit);
          },
        },
      }),
      (P.propHooks.scrollTop = P.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (pt.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (pt.fx = P.prototype.init),
      (pt.fx.step = {});
    var Ca,
      Ma,
      Aa = /^(?:toggle|show|hide)$/,
      Ea = /queueHooks$/;
    (pt.Animation = pt.extend($, {
      tweeners: {
        "*": [
          function (e, t) {
            var a = this.createTween(e, t);
            return m(a.elem, e, jt.exec(t), a), a;
          },
        ],
      },
      tweener: function (e, t) {
        pt.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(qt));
        for (var a, i = 0, n = e.length; n > i; i++)
          (a = e[i]),
            ($.tweeners[a] = $.tweeners[a] || []),
            $.tweeners[a].unshift(t);
      },
      prefilters: [H],
      prefilter: function (e, t) {
        t ? $.prefilters.unshift(e) : $.prefilters.push(e);
      },
    })),
      (pt.speed = function (e, t, a) {
        var i =
          e && "object" == typeof e
            ? pt.extend({}, e)
            : {
                complete: a || (!a && t) || (pt.isFunction(e) && e),
                duration: e,
                easing: (a && t) || (t && !pt.isFunction(t) && t),
              };
        return (
          (i.duration = pt.fx.off
            ? 0
            : "number" == typeof i.duration
            ? i.duration
            : i.duration in pt.fx.speeds
            ? pt.fx.speeds[i.duration]
            : pt.fx.speeds._default),
          (null == i.queue || i.queue === !0) && (i.queue = "fx"),
          (i.old = i.complete),
          (i.complete = function () {
            pt.isFunction(i.old) && i.old.call(this),
              i.queue && pt.dequeue(this, i.queue);
          }),
          i
        );
      }),
      pt.fn.extend({
        fadeTo: function (e, t, a, i) {
          return this.filter(Ot)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: t }, e, a, i);
        },
        animate: function (e, t, a, i) {
          var n = pt.isEmptyObject(e),
            r = pt.speed(t, a, i),
            o = function () {
              var t = $(this, pt.extend({}, e), r);
              (n || pt._data(this, "finish")) && t.stop(!0);
            };
          return (
            (o.finish = o),
            n || r.queue === !1 ? this.each(o) : this.queue(r.queue, o)
          );
        },
        stop: function (e, t, a) {
          var i = function (e) {
            var t = e.stop;
            delete e.stop, t(a);
          };
          return (
            "string" != typeof e && ((a = t), (t = e), (e = void 0)),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function () {
              var t = !0,
                n = null != e && e + "queueHooks",
                r = pt.timers,
                o = pt._data(this);
              if (n) o[n] && o[n].stop && i(o[n]);
              else for (n in o) o[n] && o[n].stop && Ea.test(n) && i(o[n]);
              for (n = r.length; n--; )
                r[n].elem !== this ||
                  (null != e && r[n].queue !== e) ||
                  (r[n].anim.stop(a), (t = !1), r.splice(n, 1));
              (t || !a) && pt.dequeue(this, e);
            })
          );
        },
        finish: function (e) {
          return (
            e !== !1 && (e = e || "fx"),
            this.each(function () {
              var t,
                a = pt._data(this),
                i = a[e + "queue"],
                n = a[e + "queueHooks"],
                r = pt.timers,
                o = i ? i.length : 0;
              for (
                a.finish = !0,
                  pt.queue(this, e, []),
                  n && n.stop && n.stop.call(this, !0),
                  t = r.length;
                t--;

              )
                r[t].elem === this &&
                  r[t].queue === e &&
                  (r[t].anim.stop(!0), r.splice(t, 1));
              for (t = 0; o > t; t++)
                i[t] && i[t].finish && i[t].finish.call(this);
              delete a.finish;
            })
          );
        },
      }),
      pt.each(["toggle", "show", "hide"], function (e, t) {
        var a = pt.fn[t];
        pt.fn[t] = function (e, i, n) {
          return null == e || "boolean" == typeof e
            ? a.apply(this, arguments)
            : this.animate(B(t, !0), e, i, n);
        };
      }),
      pt.each(
        {
          slideDown: B("show"),
          slideUp: B("hide"),
          slideToggle: B("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (e, t) {
          pt.fn[e] = function (e, a, i) {
            return this.animate(t, e, a, i);
          };
        }
      ),
      (pt.timers = []),
      (pt.fx.tick = function () {
        var e,
          t = pt.timers,
          a = 0;
        for (Ca = pt.now(); a < t.length; a++)
          (e = t[a]), e() || t[a] !== e || t.splice(a--, 1);
        t.length || pt.fx.stop(), (Ca = void 0);
      }),
      (pt.fx.timer = function (e) {
        pt.timers.push(e), e() ? pt.fx.start() : pt.timers.pop();
      }),
      (pt.fx.interval = 13),
      (pt.fx.start = function () {
        Ma || (Ma = e.setInterval(pt.fx.tick, pt.fx.interval));
      }),
      (pt.fx.stop = function () {
        e.clearInterval(Ma), (Ma = null);
      }),
      (pt.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (pt.fn.delay = function (t, a) {
        return (
          (t = pt.fx ? pt.fx.speeds[t] || t : t),
          (a = a || "fx"),
          this.queue(a, function (a, i) {
            var n = e.setTimeout(a, t);
            i.stop = function () {
              e.clearTimeout(n);
            };
          })
        );
      }),
      (function () {
        var e,
          t = it.createElement("input"),
          a = it.createElement("div"),
          i = it.createElement("select"),
          n = i.appendChild(it.createElement("option"));
        (a = it.createElement("div")),
          a.setAttribute("className", "t"),
          (a.innerHTML =
            "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
          (e = a.getElementsByTagName("a")[0]),
          t.setAttribute("type", "checkbox"),
          a.appendChild(t),
          (e = a.getElementsByTagName("a")[0]),
          (e.style.cssText = "top:1px"),
          (ut.getSetAttribute = "t" !== a.className),
          (ut.style = /top/.test(e.getAttribute("style"))),
          (ut.hrefNormalized = "/a" === e.getAttribute("href")),
          (ut.checkOn = !!t.value),
          (ut.optSelected = n.selected),
          (ut.enctype = !!it.createElement("form").enctype),
          (i.disabled = !0),
          (ut.optDisabled = !n.disabled),
          (t = it.createElement("input")),
          t.setAttribute("value", ""),
          (ut.input = "" === t.getAttribute("value")),
          (t.value = "t"),
          t.setAttribute("type", "radio"),
          (ut.radioValue = "t" === t.value);
      })();
    var qa = /\r/g,
      La = /[\x20\t\r\n\f]+/g;
    pt.fn.extend({
      val: function (e) {
        var t,
          a,
          i,
          n = this[0];
        {
          if (arguments.length)
            return (
              (i = pt.isFunction(e)),
              this.each(function (a) {
                var n;
                1 === this.nodeType &&
                  ((n = i ? e.call(this, a, pt(this).val()) : e),
                  null == n
                    ? (n = "")
                    : "number" == typeof n
                    ? (n += "")
                    : pt.isArray(n) &&
                      (n = pt.map(n, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  (t =
                    pt.valHooks[this.type] ||
                    pt.valHooks[this.nodeName.toLowerCase()]),
                  (t && "set" in t && void 0 !== t.set(this, n, "value")) ||
                    (this.value = n));
              })
            );
          if (n)
            return (
              (t =
                pt.valHooks[n.type] || pt.valHooks[n.nodeName.toLowerCase()]),
              t && "get" in t && void 0 !== (a = t.get(n, "value"))
                ? a
                : ((a = n.value),
                  "string" == typeof a ? a.replace(qa, "") : null == a ? "" : a)
            );
        }
      },
    }),
      pt.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = pt.find.attr(e, "value");
              return null != t ? t : pt.trim(pt.text(e)).replace(La, " ");
            },
          },
          select: {
            get: function (e) {
              for (
                var t,
                  a,
                  i = e.options,
                  n = e.selectedIndex,
                  r = "select-one" === e.type || 0 > n,
                  o = r ? null : [],
                  l = r ? n + 1 : i.length,
                  s = 0 > n ? l : r ? n : 0;
                l > s;
                s++
              )
                if (
                  ((a = i[s]),
                  !(
                    (!a.selected && s !== n) ||
                    (ut.optDisabled
                      ? a.disabled
                      : null !== a.getAttribute("disabled")) ||
                    (a.parentNode.disabled &&
                      pt.nodeName(a.parentNode, "optgroup"))
                  ))
                ) {
                  if (((t = pt(a).val()), r)) return t;
                  o.push(t);
                }
              return o;
            },
            set: function (e, t) {
              for (
                var a, i, n = e.options, r = pt.makeArray(t), o = n.length;
                o--;

              )
                if (((i = n[o]), pt.inArray(pt.valHooks.option.get(i), r) > -1))
                  try {
                    i.selected = a = !0;
                  } catch (l) {
                    i.scrollHeight;
                  }
                else i.selected = !1;
              return a || (e.selectedIndex = -1), n;
            },
          },
        },
      }),
      pt.each(["radio", "checkbox"], function () {
        (pt.valHooks[this] = {
          set: function (e, t) {
            return pt.isArray(t)
              ? (e.checked = pt.inArray(pt(e).val(), t) > -1)
              : void 0;
          },
        }),
          ut.checkOn ||
            (pt.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
      });
    var Da,
      Fa,
      Ia = pt.expr.attrHandle,
      Ra = /^(?:checked|selected)$/i,
      _a = ut.getSetAttribute,
      ja = ut.input;
    pt.fn.extend({
      attr: function (e, t) {
        return Bt(this, pt.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          pt.removeAttr(this, e);
        });
      },
    }),
      pt.extend({
        attr: function (e, t, a) {
          var i,
            n,
            r = e.nodeType;
          if (3 !== r && 8 !== r && 2 !== r)
            return "undefined" == typeof e.getAttribute
              ? pt.prop(e, t, a)
              : ((1 === r && pt.isXMLDoc(e)) ||
                  ((t = t.toLowerCase()),
                  (n =
                    pt.attrHooks[t] || (pt.expr.match.bool.test(t) ? Fa : Da))),
                void 0 !== a
                  ? null === a
                    ? (pt.removeAttr(e, t), void 0)
                    : n && "set" in n && void 0 !== (i = n.set(e, a, t))
                    ? i
                    : (e.setAttribute(t, a + ""), a)
                  : n && "get" in n && null !== (i = n.get(e, t))
                  ? i
                  : ((i = pt.find.attr(e, t)), null == i ? void 0 : i));
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!ut.radioValue && "radio" === t && pt.nodeName(e, "input")) {
                var a = e.value;
                return e.setAttribute("type", t), a && (e.value = a), t;
              }
            },
          },
        },
        removeAttr: function (e, t) {
          var a,
            i,
            n = 0,
            r = t && t.match(qt);
          if (r && 1 === e.nodeType)
            for (; (a = r[n++]); )
              (i = pt.propFix[a] || a),
                pt.expr.match.bool.test(a)
                  ? (ja && _a) || !Ra.test(a)
                    ? (e[i] = !1)
                    : (e[pt.camelCase("default-" + a)] = e[i] = !1)
                  : pt.attr(e, a, ""),
                e.removeAttribute(_a ? a : i);
        },
      }),
      (Fa = {
        set: function (e, t, a) {
          return (
            t === !1
              ? pt.removeAttr(e, a)
              : (ja && _a) || !Ra.test(a)
              ? e.setAttribute((!_a && pt.propFix[a]) || a, a)
              : (e[pt.camelCase("default-" + a)] = e[a] = !0),
            a
          );
        },
      }),
      pt.each(pt.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = Ia[t] || pt.find.attr;
        Ia[t] =
          (ja && _a) || !Ra.test(t)
            ? function (e, t, i) {
                var n, r;
                return (
                  i ||
                    ((r = Ia[t]),
                    (Ia[t] = n),
                    (n = null != a(e, t, i) ? t.toLowerCase() : null),
                    (Ia[t] = r)),
                  n
                );
              }
            : function (e, t, a) {
                return a
                  ? void 0
                  : e[pt.camelCase("default-" + t)]
                  ? t.toLowerCase()
                  : null;
              };
      }),
      (ja && _a) ||
        (pt.attrHooks.value = {
          set: function (e, t, a) {
            return pt.nodeName(e, "input")
              ? ((e.defaultValue = t), void 0)
              : Da && Da.set(e, t, a);
          },
        }),
      _a ||
        ((Da = {
          set: function (e, t, a) {
            var i = e.getAttributeNode(a);
            return (
              i || e.setAttributeNode((i = e.ownerDocument.createAttribute(a))),
              (i.value = t += ""),
              "value" === a || t === e.getAttribute(a) ? t : void 0
            );
          },
        }),
        (Ia.id =
          Ia.name =
          Ia.coords =
            function (e, t, a) {
              var i;
              return a
                ? void 0
                : (i = e.getAttributeNode(t)) && "" !== i.value
                ? i.value
                : null;
            }),
        (pt.valHooks.button = {
          get: function (e, t) {
            var a = e.getAttributeNode(t);
            return a && a.specified ? a.value : void 0;
          },
          set: Da.set,
        }),
        (pt.attrHooks.contenteditable = {
          set: function (e, t, a) {
            Da.set(e, "" === t ? !1 : t, a);
          },
        }),
        pt.each(["width", "height"], function (e, t) {
          pt.attrHooks[t] = {
            set: function (e, a) {
              return "" === a ? (e.setAttribute(t, "auto"), a) : void 0;
            },
          };
        })),
      ut.style ||
        (pt.attrHooks.style = {
          get: function (e) {
            return e.style.cssText || void 0;
          },
          set: function (e, t) {
            return (e.style.cssText = t + "");
          },
        });
    var Pa = /^(?:input|select|textarea|button|object)$/i,
      Oa = /^(?:a|area)$/i;
    pt.fn.extend({
      prop: function (e, t) {
        return Bt(this, pt.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
        return (
          (e = pt.propFix[e] || e),
          this.each(function () {
            try {
              (this[e] = void 0), delete this[e];
            } catch (t) {}
          })
        );
      },
    }),
      pt.extend({
        prop: function (e, t, a) {
          var i,
            n,
            r = e.nodeType;
          if (3 !== r && 8 !== r && 2 !== r)
            return (
              (1 === r && pt.isXMLDoc(e)) ||
                ((t = pt.propFix[t] || t), (n = pt.propHooks[t])),
              void 0 !== a
                ? n && "set" in n && void 0 !== (i = n.set(e, a, t))
                  ? i
                  : (e[t] = a)
                : n && "get" in n && null !== (i = n.get(e, t))
                ? i
                : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = pt.find.attr(e, "tabindex");
              return t
                ? parseInt(t, 10)
                : Pa.test(e.nodeName) || (Oa.test(e.nodeName) && e.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      ut.hrefNormalized ||
        pt.each(["href", "src"], function (e, t) {
          pt.propHooks[t] = {
            get: function (e) {
              return e.getAttribute(t, 4);
            },
          };
        }),
      ut.optSelected ||
        (pt.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return (
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
              null
            );
          },
          set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          },
        }),
      pt.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          pt.propFix[this.toLowerCase()] = this;
        }
      ),
      ut.enctype || (pt.propFix.enctype = "encoding");
    var Ba = /[\t\r\n\f]/g;
    pt.fn.extend({
      addClass: function (e) {
        var t,
          a,
          i,
          n,
          r,
          o,
          l,
          s = 0;
        if (pt.isFunction(e))
          return this.each(function (t) {
            pt(this).addClass(e.call(this, t, V(this)));
          });
        if ("string" == typeof e && e)
          for (t = e.match(qt) || []; (a = this[s++]); )
            if (
              ((n = V(a)),
              (i = 1 === a.nodeType && (" " + n + " ").replace(Ba, " ")))
            ) {
              for (o = 0; (r = t[o++]); )
                i.indexOf(" " + r + " ") < 0 && (i += r + " ");
              (l = pt.trim(i)), n !== l && pt.attr(a, "class", l);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          a,
          i,
          n,
          r,
          o,
          l,
          s = 0;
        if (pt.isFunction(e))
          return this.each(function (t) {
            pt(this).removeClass(e.call(this, t, V(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof e && e)
          for (t = e.match(qt) || []; (a = this[s++]); )
            if (
              ((n = V(a)),
              (i = 1 === a.nodeType && (" " + n + " ").replace(Ba, " ")))
            ) {
              for (o = 0; (r = t[o++]); )
                for (; i.indexOf(" " + r + " ") > -1; )
                  i = i.replace(" " + r + " ", " ");
              (l = pt.trim(i)), n !== l && pt.attr(a, "class", l);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var a = typeof e;
        return "boolean" == typeof t && "string" === a
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : pt.isFunction(e)
          ? this.each(function (a) {
              pt(this).toggleClass(e.call(this, a, V(this), t), t);
            })
          : this.each(function () {
              var t, i, n, r;
              if ("string" === a)
                for (i = 0, n = pt(this), r = e.match(qt) || []; (t = r[i++]); )
                  n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
              else
                (void 0 === e || "boolean" === a) &&
                  ((t = V(this)),
                  t && pt._data(this, "__className__", t),
                  pt.attr(
                    this,
                    "class",
                    t || e === !1 ? "" : pt._data(this, "__className__") || ""
                  ));
            });
      },
      hasClass: function (e) {
        var t,
          a,
          i = 0;
        for (t = " " + e + " "; (a = this[i++]); )
          if (
            1 === a.nodeType &&
            (" " + V(a) + " ").replace(Ba, " ").indexOf(t) > -1
          )
            return !0;
        return !1;
      },
    }),
      pt.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
          " "
        ),
        function (e, t) {
          pt.fn[t] = function (e, a) {
            return arguments.length > 0
              ? this.on(t, null, e, a)
              : this.trigger(t);
          };
        }
      ),
      pt.fn.extend({
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
      });
    var za = e.location,
      Ha = pt.now(),
      Na = /\?/,
      $a =
        /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    (pt.parseJSON = function (t) {
      if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
      var a,
        i = null,
        n = pt.trim(t + "");
      return n &&
        !pt.trim(
          n.replace($a, function (e, t, n, r) {
            return (
              a && t && (i = 0),
              0 === i ? e : ((a = n || t), (i += !r - !n), "")
            );
          })
        )
        ? Function("return " + n)()
        : pt.error("Invalid JSON: " + t);
    }),
      (pt.parseXML = function (t) {
        var a, i;
        if (!t || "string" != typeof t) return null;
        try {
          e.DOMParser
            ? ((i = new e.DOMParser()), (a = i.parseFromString(t, "text/xml")))
            : ((a = new e.ActiveXObject("Microsoft.XMLDOM")),
              (a.async = "false"),
              a.loadXML(t));
        } catch (n) {
          a = void 0;
        }
        return (
          (a &&
            a.documentElement &&
            !a.getElementsByTagName("parsererror").length) ||
            pt.error("Invalid XML: " + t),
          a
        );
      });
    var Va = /#.*$/,
      Ua = /([?&])_=[^&]*/,
      Wa = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Ka = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Ga = /^(?:GET|HEAD)$/,
      Ya = /^\/\//,
      Xa = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Ja = {},
      Za = {},
      Qa = "*/".concat("*"),
      ei = za.href,
      ti = Xa.exec(ei.toLowerCase()) || [];
    pt.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ei,
        type: "GET",
        isLocal: Ka.test(ti[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Qa,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": pt.parseJSON,
          "text xml": pt.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? K(K(e, pt.ajaxSettings), t) : K(pt.ajaxSettings, e);
      },
      ajaxPrefilter: U(Ja),
      ajaxTransport: U(Za),
      ajax: function (t, a) {
        function i(t, a, i, n) {
          var r,
            u,
            b,
            v,
            T,
            x = a;
          2 !== k &&
            ((k = 2),
            s && e.clearTimeout(s),
            (c = void 0),
            (l = n || ""),
            (w.readyState = t > 0 ? 4 : 0),
            (r = (t >= 200 && 300 > t) || 304 === t),
            i && (v = G(m, w, i)),
            (v = Y(m, v, w, r)),
            r
              ? (m.ifModified &&
                  ((T = w.getResponseHeader("Last-Modified")),
                  T && (pt.lastModified[o] = T),
                  (T = w.getResponseHeader("etag")),
                  T && (pt.etag[o] = T)),
                204 === t || "HEAD" === m.type
                  ? (x = "nocontent")
                  : 304 === t
                  ? (x = "notmodified")
                  : ((x = v.state), (u = v.data), (b = v.error), (r = !b)))
              : ((b = x), (t || !x) && ((x = "error"), 0 > t && (t = 0))),
            (w.status = t),
            (w.statusText = (a || x) + ""),
            r ? g.resolveWith(p, [u, x, w]) : g.rejectWith(p, [w, x, b]),
            w.statusCode(y),
            (y = void 0),
            d && h.trigger(r ? "ajaxSuccess" : "ajaxError", [w, m, r ? u : b]),
            f.fireWith(p, [w, x]),
            d &&
              (h.trigger("ajaxComplete", [w, m]),
              --pt.active || pt.event.trigger("ajaxStop")));
        }
        "object" == typeof t && ((a = t), (t = void 0)), (a = a || {});
        var n,
          r,
          o,
          l,
          s,
          d,
          c,
          u,
          m = pt.ajaxSetup({}, a),
          p = m.context || m,
          h = m.context && (p.nodeType || p.jquery) ? pt(p) : pt.event,
          g = pt.Deferred(),
          f = pt.Callbacks("once memory"),
          y = m.statusCode || {},
          b = {},
          v = {},
          k = 0,
          T = "canceled",
          w = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (2 === k) {
                if (!u)
                  for (u = {}; (t = Wa.exec(l)); ) u[t[1].toLowerCase()] = t[2];
                t = u[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return 2 === k ? l : null;
            },
            setRequestHeader: function (e, t) {
              var a = e.toLowerCase();
              return k || ((e = v[a] = v[a] || e), (b[e] = t)), this;
            },
            overrideMimeType: function (e) {
              return k || (m.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (2 > k) for (t in e) y[t] = [y[t], e[t]];
                else w.always(e[w.status]);
              return this;
            },
            abort: function (e) {
              var t = e || T;
              return c && c.abort(t), i(0, t), this;
            },
          };
        if (
          ((g.promise(w).complete = f.add),
          (w.success = w.done),
          (w.error = w.fail),
          (m.url = ((t || m.url || ei) + "")
            .replace(Va, "")
            .replace(Ya, ti[1] + "//")),
          (m.type = a.method || a.type || m.method || m.type),
          (m.dataTypes = pt
            .trim(m.dataType || "*")
            .toLowerCase()
            .match(qt) || [""]),
          null == m.crossDomain &&
            ((n = Xa.exec(m.url.toLowerCase())),
            (m.crossDomain = !(
              !n ||
              (n[1] === ti[1] &&
                n[2] === ti[2] &&
                (n[3] || ("http:" === n[1] ? "80" : "443")) ===
                  (ti[3] || ("http:" === ti[1] ? "80" : "443")))
            ))),
          m.data &&
            m.processData &&
            "string" != typeof m.data &&
            (m.data = pt.param(m.data, m.traditional)),
          W(Ja, m, a, w),
          2 === k)
        )
          return w;
        (d = pt.event && m.global),
          d && 0 === pt.active++ && pt.event.trigger("ajaxStart"),
          (m.type = m.type.toUpperCase()),
          (m.hasContent = !Ga.test(m.type)),
          (o = m.url),
          m.hasContent ||
            (m.data &&
              ((o = m.url += (Na.test(o) ? "&" : "?") + m.data), delete m.data),
            m.cache === !1 &&
              (m.url = Ua.test(o)
                ? o.replace(Ua, "$1_=" + Ha++)
                : o + (Na.test(o) ? "&" : "?") + "_=" + Ha++)),
          m.ifModified &&
            (pt.lastModified[o] &&
              w.setRequestHeader("If-Modified-Since", pt.lastModified[o]),
            pt.etag[o] && w.setRequestHeader("If-None-Match", pt.etag[o])),
          ((m.data && m.hasContent && m.contentType !== !1) || a.contentType) &&
            w.setRequestHeader("Content-Type", m.contentType),
          w.setRequestHeader(
            "Accept",
            m.dataTypes[0] && m.accepts[m.dataTypes[0]]
              ? m.accepts[m.dataTypes[0]] +
                  ("*" !== m.dataTypes[0] ? ", " + Qa + "; q=0.01" : "")
              : m.accepts["*"]
          );
        for (r in m.headers) w.setRequestHeader(r, m.headers[r]);
        if (m.beforeSend && (m.beforeSend.call(p, w, m) === !1 || 2 === k))
          return w.abort();
        T = "abort";
        for (r in { success: 1, error: 1, complete: 1 }) w[r](m[r]);
        if ((c = W(Za, m, a, w))) {
          if (((w.readyState = 1), d && h.trigger("ajaxSend", [w, m]), 2 === k))
            return w;
          m.async &&
            m.timeout > 0 &&
            (s = e.setTimeout(function () {
              w.abort("timeout");
            }, m.timeout));
          try {
            (k = 1), c.send(b, i);
          } catch (x) {
            if (!(2 > k)) throw x;
            i(-1, x);
          }
        } else i(-1, "No Transport");
        return w;
      },
      getJSON: function (e, t, a) {
        return pt.get(e, t, a, "json");
      },
      getScript: function (e, t) {
        return pt.get(e, void 0, t, "script");
      },
    }),
      pt.each(["get", "post"], function (e, t) {
        pt[t] = function (e, a, i, n) {
          return (
            pt.isFunction(a) && ((n = n || i), (i = a), (a = void 0)),
            pt.ajax(
              pt.extend(
                { url: e, type: t, dataType: n, data: a, success: i },
                pt.isPlainObject(e) && e
              )
            )
          );
        };
      }),
      (pt._evalUrl = function (e) {
        return pt.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      pt.fn.extend({
        wrapAll: function (e) {
          if (pt.isFunction(e))
            return this.each(function (t) {
              pt(this).wrapAll(e.call(this, t));
            });
          if (this[0]) {
            var t = pt(e, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  for (
                    var e = this;
                    e.firstChild && 1 === e.firstChild.nodeType;

                  )
                    e = e.firstChild;
                  return e;
                })
                .append(this);
          }
          return this;
        },
        wrapInner: function (e) {
          return pt.isFunction(e)
            ? this.each(function (t) {
                pt(this).wrapInner(e.call(this, t));
              })
            : this.each(function () {
                var t = pt(this),
                  a = t.contents();
                a.length ? a.wrapAll(e) : t.append(e);
              });
        },
        wrap: function (e) {
          var t = pt.isFunction(e);
          return this.each(function (a) {
            pt(this).wrapAll(t ? e.call(this, a) : e);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              pt.nodeName(this, "body") ||
                pt(this).replaceWith(this.childNodes);
            })
            .end();
        },
      }),
      (pt.expr.filters.hidden = function (e) {
        return ut.reliableHiddenOffsets()
          ? e.offsetWidth <= 0 &&
              e.offsetHeight <= 0 &&
              !e.getClientRects().length
          : J(e);
      }),
      (pt.expr.filters.visible = function (e) {
        return !pt.expr.filters.hidden(e);
      });
    var ai = /%20/g,
      ii = /\[\]$/,
      ni = /\r?\n/g,
      ri = /^(?:submit|button|image|reset|file)$/i,
      oi = /^(?:input|select|textarea|keygen)/i;
    (pt.param = function (e, t) {
      var a,
        i = [],
        n = function (e, t) {
          (t = pt.isFunction(t) ? t() : null == t ? "" : t),
            (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
        };
      if (
        (void 0 === t && (t = pt.ajaxSettings && pt.ajaxSettings.traditional),
        pt.isArray(e) || (e.jquery && !pt.isPlainObject(e)))
      )
        pt.each(e, function () {
          n(this.name, this.value);
        });
      else for (a in e) Z(a, e[a], t, n);
      return i.join("&").replace(ai, "+");
    }),
      pt.fn.extend({
        serialize: function () {
          return pt.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = pt.prop(this, "elements");
            return e ? pt.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !pt(this).is(":disabled") &&
                oi.test(this.nodeName) &&
                !ri.test(e) &&
                (this.checked || !zt.test(e))
              );
            })
            .map(function (e, t) {
              var a = pt(this).val();
              return null == a
                ? null
                : pt.isArray(a)
                ? pt.map(a, function (e) {
                    return { name: t.name, value: e.replace(ni, "\r\n") };
                  })
                : { name: t.name, value: a.replace(ni, "\r\n") };
            })
            .get();
        },
      }),
      (pt.ajaxSettings.xhr =
        void 0 !== e.ActiveXObject
          ? function () {
              return this.isLocal
                ? et()
                : it.documentMode > 8
                ? Q()
                : (/^(get|post|head|put|delete|options)$/i.test(this.type) &&
                    Q()) ||
                  et();
            }
          : Q);
    var li = 0,
      si = {},
      di = pt.ajaxSettings.xhr();
    e.attachEvent &&
      e.attachEvent("onunload", function () {
        for (var e in si) si[e](void 0, !0);
      }),
      (ut.cors = !!di && "withCredentials" in di),
      (di = ut.ajax = !!di),
      di &&
        pt.ajaxTransport(function (t) {
          if (!t.crossDomain || ut.cors) {
            var a;
            return {
              send: function (i, n) {
                var r,
                  o = t.xhr(),
                  l = ++li;
                if (
                  (o.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (r in t.xhrFields) o[r] = t.xhrFields[r];
                t.mimeType &&
                  o.overrideMimeType &&
                  o.overrideMimeType(t.mimeType),
                  t.crossDomain ||
                    i["X-Requested-With"] ||
                    (i["X-Requested-With"] = "XMLHttpRequest");
                for (r in i)
                  void 0 !== i[r] && o.setRequestHeader(r, i[r] + "");
                o.send((t.hasContent && t.data) || null),
                  (a = function (e, i) {
                    var r, s, d;
                    if (a && (i || 4 === o.readyState))
                      if (
                        (delete si[l],
                        (a = void 0),
                        (o.onreadystatechange = pt.noop),
                        i)
                      )
                        4 !== o.readyState && o.abort();
                      else {
                        (d = {}),
                          (r = o.status),
                          "string" == typeof o.responseText &&
                            (d.text = o.responseText);
                        try {
                          s = o.statusText;
                        } catch (c) {
                          s = "";
                        }
                        r || !t.isLocal || t.crossDomain
                          ? 1223 === r && (r = 204)
                          : (r = d.text ? 200 : 404);
                      }
                    d && n(r, s, d, o.getAllResponseHeaders());
                  }),
                  t.async
                    ? 4 === o.readyState
                      ? e.setTimeout(a)
                      : (o.onreadystatechange = si[l] = a)
                    : a();
              },
              abort: function () {
                a && a(void 0, !0);
              },
            };
          }
        }),
      pt.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (e) {
            return pt.globalEval(e), e;
          },
        },
      }),
      pt.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1),
          e.crossDomain && ((e.type = "GET"), (e.global = !1));
      }),
      pt.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
          var t,
            a = it.head || pt("head")[0] || it.documentElement;
          return {
            send: function (i, n) {
              (t = it.createElement("script")),
                (t.async = !0),
                e.scriptCharset && (t.charset = e.scriptCharset),
                (t.src = e.url),
                (t.onload = t.onreadystatechange =
                  function (e, a) {
                    (a ||
                      !t.readyState ||
                      /loaded|complete/.test(t.readyState)) &&
                      ((t.onload = t.onreadystatechange = null),
                      t.parentNode && t.parentNode.removeChild(t),
                      (t = null),
                      a || n(200, "success"));
                  }),
                a.insertBefore(t, a.firstChild);
            },
            abort: function () {
              t && t.onload(void 0, !0);
            },
          };
        }
      });
    var ci = [],
      ui = /(=)\?(?=&|$)|\?\?/;
    pt.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = ci.pop() || pt.expando + "_" + Ha++;
        return (this[e] = !0), e;
      },
    }),
      pt.ajaxPrefilter("json jsonp", function (t, a, i) {
        var n,
          r,
          o,
          l =
            t.jsonp !== !1 &&
            (ui.test(t.url)
              ? "url"
              : "string" == typeof t.data &&
                0 ===
                  (t.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                ui.test(t.data) &&
                "data");
        return l || "jsonp" === t.dataTypes[0]
          ? ((n = t.jsonpCallback =
              pt.isFunction(t.jsonpCallback)
                ? t.jsonpCallback()
                : t.jsonpCallback),
            l
              ? (t[l] = t[l].replace(ui, "$1" + n))
              : t.jsonp !== !1 &&
                (t.url += (Na.test(t.url) ? "&" : "?") + t.jsonp + "=" + n),
            (t.converters["script json"] = function () {
              return o || pt.error(n + " was not called"), o[0];
            }),
            (t.dataTypes[0] = "json"),
            (r = e[n]),
            (e[n] = function () {
              o = arguments;
            }),
            i.always(function () {
              void 0 === r ? pt(e).removeProp(n) : (e[n] = r),
                t[n] && ((t.jsonpCallback = a.jsonpCallback), ci.push(n)),
                o && pt.isFunction(r) && r(o[0]),
                (o = r = void 0);
            }),
            "script")
          : void 0;
      }),
      (pt.parseHTML = function (e, t, a) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && ((a = t), (t = !1)), (t = t || it);
        var i = wt.exec(e),
          n = !a && [];
        return i
          ? [t.createElement(i[1])]
          : ((i = y([e], t, n)),
            n && n.length && pt(n).remove(),
            pt.merge([], i.childNodes));
      });
    var mi = pt.fn.load;
    (pt.fn.load = function (e, t, a) {
      if ("string" != typeof e && mi) return mi.apply(this, arguments);
      var i,
        n,
        r,
        o = this,
        l = e.indexOf(" ");
      return (
        l > -1 && ((i = pt.trim(e.slice(l, e.length))), (e = e.slice(0, l))),
        pt.isFunction(t)
          ? ((a = t), (t = void 0))
          : t && "object" == typeof t && (n = "POST"),
        o.length > 0 &&
          pt
            .ajax({ url: e, type: n || "GET", dataType: "html", data: t })
            .done(function (e) {
              (r = arguments),
                o.html(i ? pt("<div>").append(pt.parseHTML(e)).find(i) : e);
            })
            .always(
              a &&
                function (e, t) {
                  o.each(function () {
                    a.apply(this, r || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
      pt.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          pt.fn[t] = function (e) {
            return this.on(t, e);
          };
        }
      ),
      (pt.expr.filters.animated = function (e) {
        return pt.grep(pt.timers, function (t) {
          return e === t.elem;
        }).length;
      }),
      (pt.offset = {
        setOffset: function (e, t, a) {
          var i,
            n,
            r,
            o,
            l,
            s,
            d,
            c = pt.css(e, "position"),
            u = pt(e),
            m = {};
          "static" === c && (e.style.position = "relative"),
            (l = u.offset()),
            (r = pt.css(e, "top")),
            (s = pt.css(e, "left")),
            (d =
              ("absolute" === c || "fixed" === c) &&
              pt.inArray("auto", [r, s]) > -1),
            d
              ? ((i = u.position()), (o = i.top), (n = i.left))
              : ((o = parseFloat(r) || 0), (n = parseFloat(s) || 0)),
            pt.isFunction(t) && (t = t.call(e, a, pt.extend({}, l))),
            null != t.top && (m.top = t.top - l.top + o),
            null != t.left && (m.left = t.left - l.left + n),
            "using" in t ? t.using.call(e, m) : u.css(m);
        },
      }),
      pt.fn.extend({
        offset: function (e) {
          if (arguments.length)
            return void 0 === e
              ? this
              : this.each(function (t) {
                  pt.offset.setOffset(this, e, t);
                });
          var t,
            a,
            i = { top: 0, left: 0 },
            n = this[0],
            r = n && n.ownerDocument;
          if (r)
            return (
              (t = r.documentElement),
              pt.contains(t, n)
                ? ("undefined" != typeof n.getBoundingClientRect &&
                    (i = n.getBoundingClientRect()),
                  (a = tt(r)),
                  {
                    top:
                      i.top +
                      (a.pageYOffset || t.scrollTop) -
                      (t.clientTop || 0),
                    left:
                      i.left +
                      (a.pageXOffset || t.scrollLeft) -
                      (t.clientLeft || 0),
                  })
                : i
            );
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              a = { top: 0, left: 0 },
              i = this[0];
            return (
              "fixed" === pt.css(i, "position")
                ? (t = i.getBoundingClientRect())
                : ((e = this.offsetParent()),
                  (t = this.offset()),
                  pt.nodeName(e[0], "html") || (a = e.offset()),
                  (a.top += pt.css(e[0], "borderTopWidth", !0)),
                  (a.left += pt.css(e[0], "borderLeftWidth", !0))),
              {
                top: t.top - a.top - pt.css(i, "marginTop", !0),
                left: t.left - a.left - pt.css(i, "marginLeft", !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent;
              e &&
              !pt.nodeName(e, "html") &&
              "static" === pt.css(e, "position");

            )
              e = e.offsetParent;
            return e || pa;
          });
        },
      }),
      pt.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (e, t) {
          var a = /Y/.test(t);
          pt.fn[e] = function (i) {
            return Bt(
              this,
              function (e, i, n) {
                var r = tt(e);
                return void 0 === n
                  ? r
                    ? t in r
                      ? r[t]
                      : r.document.documentElement[i]
                    : e[i]
                  : (r
                      ? r.scrollTo(
                          a ? pt(r).scrollLeft() : n,
                          a ? n : pt(r).scrollTop()
                        )
                      : (e[i] = n),
                    void 0);
              },
              e,
              i,
              arguments.length,
              null
            );
          };
        }
      ),
      pt.each(["top", "left"], function (e, t) {
        pt.cssHooks[t] = D(ut.pixelPosition, function (e, a) {
          return a
            ? ((a = ga(e, t)), ua.test(a) ? pt(e).position()[t] + "px" : a)
            : void 0;
        });
      }),
      pt.each({ Height: "height", Width: "width" }, function (e, t) {
        pt.each(
          { padding: "inner" + e, content: t, "": "outer" + e },
          function (a, i) {
            pt.fn[i] = function (i, n) {
              var r = arguments.length && (a || "boolean" != typeof i),
                o = a || (i === !0 || n === !0 ? "margin" : "border");
              return Bt(
                this,
                function (t, a, i) {
                  var n;
                  return pt.isWindow(t)
                    ? t.document.documentElement["client" + e]
                    : 9 === t.nodeType
                    ? ((n = t.documentElement),
                      Math.max(
                        t.body["scroll" + e],
                        n["scroll" + e],
                        t.body["offset" + e],
                        n["offset" + e],
                        n["client" + e]
                      ))
                    : void 0 === i
                    ? pt.css(t, a, o)
                    : pt.style(t, a, i, o);
                },
                t,
                r ? i : void 0,
                r,
                null
              );
            };
          }
        );
      }),
      pt.fn.extend({
        bind: function (e, t, a) {
          return this.on(e, null, t, a);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, a, i) {
          return this.on(t, e, a, i);
        },
        undelegate: function (e, t, a) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", a);
        },
      }),
      (pt.fn.size = function () {
        return this.length;
      }),
      (pt.fn.andSelf = pt.fn.addBack),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return pt;
        });
    var pi = e.jQuery,
      hi = e.$;
    return (
      (pt.noConflict = function (t) {
        return (
          e.$ === pt && (e.$ = hi), t && e.jQuery === pt && (e.jQuery = pi), pt
        );
      }),
      t || (e.jQuery = e.$ = pt),
      pt
    );
  }),
  (function ($, undefined) {
    var pluginToModule = function (e) {
        return (e + "")
          .replace(/\./g, "/")
          .replace(/^jQuery/, "jquery")
          .replace(/^(true|false)$/, "")
          .replace(
            /^((?:[a-z]{2})(?:(?:(?:\-[A-Z][a-z]{1,3})?\-[A-Z]{2})?)):(.*?)$/,
            "$2.$1"
          );
      },
      moduleToPlugin = function (e) {
        return (e + "").replace(/^jquery/, "jQuery").replace(/\//g, ".");
      },
      ready = $.ready,
      readyPromise = $.ready.promise,
      scriptConfig =
        window.jQueryConfig && !window.jQueryConfig.nodeName
          ? window.jQueryConfig
          : undefined,
      metaConfig = $("meta[name=jQueryConfig]").attr("content"),
      config = (function () {
        return $.extend(
          !0,
          {},
          scriptConfig,
          metaConfig ? eval("(" + metaConfig + ")") : undefined
        );
      })(),
      typeExp = /^(string|object|array)$/,
      pluginExp = /(string|array)/,
      dependMap = {
        plugin: "",
        script: "$pub!",
        dict: "$dict!",
        DOM: "$ready!",
        i18n: "$i18n!",
        tmpl: "$tmpl!",
      },
      dependControl = function (e, t, a, i) {
        var n = $.Deferred(),
          r = n.promise(),
          o = [],
          l = function () {
            var e;
            return t && (e = t.call(r, $)), n.resolve($), e;
          };
        if (
          ("plugin" === a && i && i.toLowerCase && (i = i.toLowerCase()),
          t || ((t = e), (e = {})),
          (e = pluginExp.test($.type(e)) ? { plugin: e } : e),
          $.each(e, function (e, t) {
            (e = dependMap[e]),
              $.each($.isArray(t) ? t : [t], function (t, a) {
                "" === e && a && (a = a.toLowerCase()),
                  o.push(e + pluginToModule(a));
              });
          }),
          i)
        ) {
          var s = dependMap[a] + pluginToModule(i);
          define(s, o, l), require([s]);
        } else require(o, l);
        return r;
      },
      _console = window.console;
    if (($.extend($.ajaxSettings, config.ajax), config.noConflict)) {
      var alias = $.noConflict();
      "string" == typeof config.noConflict &&
        (window[config.noConflict] = alias);
    }
    $.extend({
      config: config,
      debug: {
        warn:
          _console && $.isFunction(_console.warn)
            ? function () {
                _console.warn.apply(_console, arguments);
              }
            : $.noop,
      },
      plugin: function (e, t, a) {
        return dependControl(t, a, "plugin", e);
      },
      provide: function (e, t, a) {
        return dependControl(t, a, "script", e);
      },
      ready: function (e, t) {
        var a = $.type(e);
        return typeExp.test(a)
          ? dependControl(e, t || $.noop)
          : "function" === a
          ? readyPromise().done(e)
          : ready(e);
      },
      scope: function (e, t) {
        var a = e ? e.split(/\./) : [];
        t = t || window;
        for (var i = 0, n = a.length; n > i; i++) t = t[a[i]] || (t[a[i]] = {});
        return t;
      },
    }),
      $.fn.extend({
        jquerysdk: "1.4",
        sub: function (e) {
          return ("string" == typeof e ? window[e] : e)(this);
        },
      }),
      ($.ready.promise = readyPromise),
      define("jquery-sdk", [], function () {
        return $;
      });
    var messageReplacedBy = function (e, t) {
        return "'" + moduleToPlugin(e) + "' is replaced by module '" + t + "'";
      },
      messageSupportedBy = function (e) {
        return (
          "Now methods of '" +
          moduleToPlugin(e) +
          "' supported by module 'jquery'"
        );
      },
      requireConfig = {
        paths: {
          jQuery: "jquery",
          "jquery/fn/scrollTo": "jquery/fn/scrollto",
          "jquery/fn/equalSize": "jquery/fn/equalsize",
        },
        config: {},
      };
    $.each(
      {
        ajax: "jquery-sdk",
        compareVersion: "util/version",
        dict: "jquery/dict",
        i18n: "jquery/i18n",
        metaparse: "jquery/metaparse",
        mime: "util/mime",
        noConflict: "jquery-sdk",
        shrink: "util/string.shrink",
        storage: "util/storage",
      },
      function (e, t) {
        var a = $.config[e];
        a &&
          ($.debug.warn(
            "DEPRECATED: use 'module config of requirejs' instead of 'jQueryConfig." +
              e +
              "'."
          ),
          $.extend($.scope(t, requireConfig.config), a));
      }
    ),
      require(requireConfig),
      $.each(
        {
          "jquery/array": [
            "jQuery.array' was canceled entirely.",
            undefined,
            function (e) {
              var t,
                a = Array.prototype,
                i = a.splice,
                n = a.push;
              e.unsplice = function (a, r, o) {
                return (
                  n.apply(
                    (t = [isNaN(o) ? a.length : o, 0]),
                    e.isArray(r) ? r : e.merge([], r)
                  ),
                  i.apply(a, t),
                  a
                );
              };
            },
          ],
          "jquery/base64": [
            messageReplacedBy,
            "util/base64",
            function (e, t) {
              (e.toBASE64 = e.encodeBASE64 = t.encode),
                (e.fromBASE64 = e.decodeBASE64 = t.decode);
            },
          ],
          "jquery/base64/fix": [undefined, "jquery/base64"],
          "jquery/core": [undefined, undefined],
          "jquery/class": [
            messageReplacedBy,
            "class",
            function (e, t) {
              (e.Class = t), (e.isClass = t.isClass);
            },
          ],
          "jquery/compareVersion": [
            messageReplacedBy,
            "util/version",
            function (e, t) {
              (e.compareVersionSettings = e.extend(
                t.config,
                e.config.compareVersion
              )),
                (e.compareVersion = t.compare);
            },
          ],
          "jquery/css/borderradius": [messageSupportedBy],
          "jquery/debug/sortPlugins": [
            "jQuery.debug.sortPlugins' was canceled entirely.",
            undefined,
            function (e) {
              e.debug.sortPlugins = e.noop;
            },
          ],
          "jquery/fn/size": [messageSupportedBy],
          "jquery/json": [
            messageReplacedBy,
            "util/json",
            function (e, t) {
              (e.fromJSON = e.parseJSON), (e.toJSON = t.encode);
            },
          ],
          "jquery/json/fix": [undefined, "jquery/json"],
          "jquery/md5": [
            messageReplacedBy,
            "util/md5",
            function (e, t) {
              e.md5 = t;
            },
          ],
          "jquery/mime": [
            messageReplacedBy,
            "util/mime",
            function (e, t) {
              (e.mime = t.mime),
                (e.mimeSettings = e.extend(!0, t.config, e.config.mime));
            },
          ],
          "jquery/scope": [messageReplacedBy, "util/scope"],
          "jquery/storage": [
            messageReplacedBy,
            "util/storage",
            function (e, t) {
              e.each(["local", "session"], function (a, i) {
                (e[i + "Storage"] = t[i + "Storage"]),
                  (e[i + "StorageClear"] = t[i + "Clear"]),
                  (e[i + "StorageSettings"] = e.extend(
                    t.config,
                    e.config.storage
                  ));
              });
            },
          ],
          "jquery/string": [
            messageReplacedBy,
            "util/string",
            function (e, t) {
              (e.reverse = t.reverse),
                (e.escExpStr = t.escExpStr),
                (e.stripTags = t.stripTags),
                (e.htmlspecialchars = t.htmlspecialchars),
                (e.shrinkSetting = e.extend(t.config.shrink, e.config.shrink)),
                (e.shrink = t.shrink);
            },
          ],
          "jquery/support/cssprefix": [messageSupportedBy],
          "jquery/support/flash": [
            messageReplacedBy,
            "util/string",
            function (e, t) {
              e.support.flash = t.flash;
            },
          ],
          "jquery/support/multipleUpload": [
            messageReplacedBy,
            "util/string",
            function (e, t) {
              e.support.multipleUpload = t.inputFileMultipleAttr;
            },
          ],
          "jquery/support/placeholder": [
            messageReplacedBy,
            "util/string",
            function (e, t) {
              e.support.inputPlaceholderAttr = t.placeholder;
            },
          ],
          "jquery/support/touch": [
            messageReplacedBy,
            "util/string",
            function (e, t) {
              e.support.touch = t.touchEvents;
            },
          ],
          "jquery/utf8": [
            messageReplacedBy,
            "util/utf8",
            function (e, t) {
              (e.toUTF8 = e.encodeUTF8 = t.encode),
                (e.fromUTF8 = e.decodeUTF8 = t.decode);
            },
          ],
        },
        function (e, t) {
          var a = t[0],
            i = t[1],
            n = t[2];
          define(e, ["jquery-sdk"].concat(i ? [i] : []), function (t) {
            return (
              a &&
                t.debug.warn("DEPRECATED: " + (t.isFunction(a) ? a(e, i) : a)),
              n && n.apply(n, arguments),
              t
            );
          }),
            e !== e.toLowerCase() &&
              define(e.toLowerCase(), [e], function (e) {
                return e;
              });
        }
      );
  })(jQuery),
  (function (e) {
    "function" == typeof define &&
      define.amd &&
      define.amd.jQuery &&
      (define("jquery-sdk", [], function () {
        return e;
      }),
      define("jquery", [], function () {
        return e;
      }));
  })(jQuery),
  define("jquery/each", ["jquery"], function (e, t) {
    return (
      e.extend({
        each: function (a, i, n) {
          var r;
          i === !0 && ((r = i), (i = n), (n = arguments[3]));
          var o,
            l,
            s = 0,
            d = a.length,
            c = d === t || e.isFunction(a);
          if (n)
            if (c)
              for (o in a) {
                if (((l = i.apply(a[o], n)), l === !1)) break;
                r && l !== t && (a[o] = l);
              }
            else
              for (; d > s && ((l = i.apply(a[s++], n)), l !== !1); )
                r && l !== t && (a[s] = l);
          else if (c)
            for (o in a) {
              if (((l = i.call(a[o], o, a[o])), l === !1)) break;
              r && l !== t && (a[o] = l);
            }
          else {
            l = !0;
            for (var u = a[0]; d > s && l !== !1; u = a[++s])
              (l = i.call(u, s, u)), r && l !== t && (a[s] = l);
          }
          return a;
        },
      }),
      e.fn.extend({
        each: function (t, a, i) {
          return e.each(this, t, a, i);
        },
      }),
      e
    );
  }),
  define("jquery/event/fix", ["jquery"], function (e) {
    var t = e.event.fix;
    return (
      e.extend(e.event, {
        fix: function (a) {
          var i = a;
          return (
            (a = t.call(e.event, a)),
            a.originalTarget || (a.originalTarget = i.srcElement || a.target),
            (a.touches = i.touches || { length: 0 }).length
              ? ((a.pageX = a.touches[0].pageX), (a.pageY = a.touches[0].pageY))
              : i.touch &&
                ((a.touches = { 0: i.touch, length: 1 }),
                (a.pageX = i.touch.pageX),
                (a.pageY = i.touch.pageY)),
            a
          );
        },
      }),
      e
    );
  }),
  define("jquery/fn/class", ["jquery"], function (e) {
    var t = e.fn.hasClass,
      a = e.fn.removeClass;
    return (
      e.fn.extend({
        hasClass: function (a) {
          return "regexp" === e.type(a)
            ? a.test(e(this[0]).attr("class") || "")
            : t.call(this, a);
        },
        removeClass: function (t) {
          return (
            "regexp" === e.type(t)
              ? this.each(function () {
                  var i = e(this);
                  e.each(
                    (i.attr("class") || "").split(/\s+/g),
                    function (e, n) {
                      t.test(n) && a.call(i, n);
                    }
                  );
                })
              : a.call(this, t),
            this
          );
        },
      }),
      e
    );
  }),
  define("jquery/tmpl", ["jquery"], function (e) {
    return (
      (function (e) {
        function t(t, a, i, n) {
          var r = {
            data: n || 0 === n || n === !1 ? n : a ? a.data : {},
            _wrap: a ? a._wrap : null,
            tmpl: null,
            parent: a || null,
            nodes: [],
            calls: d,
            nest: c,
            wrap: u,
            html: m,
            update: p,
          };
          return (
            t && e.extend(r, t, { nodes: [], parent: a }),
            i &&
              ((r.tmpl = i),
              (r._ctnt = r._ctnt || r.tmpl(e, r)),
              (r.key = ++T),
              ((x.length ? v : b)[T] = r)),
            r
          );
        }
        function a(t, n, r) {
          var o,
            l = r
              ? e.map(r, function (e) {
                  return "string" == typeof e
                    ? t.key
                      ? e.replace(
                          /(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,
                          "$1 " + f + '="' + t.key + '" $2'
                        )
                      : e
                    : a(e, t, e._ctnt);
                })
              : t;
          return n
            ? l
            : ((l = l.join("")),
              l.replace(
                /^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,
                function (t, a, n, r) {
                  (o = e(n).get()),
                    s(o),
                    a && (o = i(a).concat(o)),
                    r && (o = o.concat(i(r)));
                }
              ),
              o ? o : i(l));
        }
        function i(t) {
          var a = document.createElement("div");
          return (a.innerHTML = t), e.makeArray(a.childNodes);
        }
        function n(t) {
          return new Function(
            "jQuery",
            "$item",
            "var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('" +
              e
                .trim(t)
                .replace(/([\\'])/g, "\\$1")
                .replace(/[\r\t\n]/g, " ")
                .replace(/\$\{([^\}]*)\}/g, "{{= $1}}")
                .replace(
                  /\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,
                  function (t, a, i, n, r, l, s) {
                    var d,
                      c,
                      u,
                      m = e.tmpl.tag[i];
                    if (!m) throw "Unknown template tag: " + i;
                    return (
                      (d = m._default || []),
                      l && !/\w$/.test(r) && ((r += l), (l = "")),
                      r
                        ? ((r = o(r)),
                          (s = s ? "," + o(s) + ")" : l ? ")" : ""),
                          (c = l
                            ? r.indexOf(".") > -1
                              ? r + o(l)
                              : "(" + r + ").call($item" + s
                            : r),
                          (u = l
                            ? c
                            : "(typeof(" +
                              r +
                              ")==='function'?(" +
                              r +
                              ").call($item):(" +
                              r +
                              "))"))
                        : (u = c = d.$1 || "null"),
                      (n = o(n)),
                      "');" +
                        m[a ? "close" : "open"]
                          .split("$notnull_1")
                          .join(
                            r
                              ? "typeof(" +
                                  r +
                                  ")!=='undefined' && (" +
                                  r +
                                  ")!=null"
                              : "true"
                          )
                          .split("$1a")
                          .join(u)
                          .split("$1")
                          .join(c)
                          .split("$2")
                          .join(n || d.$2 || "") +
                        "__.push('"
                    );
                  }
                ) +
              "');}return __;"
          );
        }
        function r(t, i) {
          t._wrap = a(
            t,
            !0,
            e.isArray(i) ? i : [y.test(i) ? i : e(i).html()]
          ).join("");
        }
        function o(e) {
          return e ? e.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null;
        }
        function l(e) {
          var t = document.createElement("div");
          return t.appendChild(e.cloneNode(!0)), t.innerHTML;
        }
        function s(a) {
          function i(a) {
            function i(e) {
              (e += c),
                (o = u[e] = u[e] || t(o, b[o.parent.key + c] || o.parent));
            }
            var n,
              r,
              o,
              l,
              s = a;
            if ((l = a.getAttribute(f))) {
              for (
                ;
                s.parentNode &&
                1 === (s = s.parentNode).nodeType &&
                !(n = s.getAttribute(f));

              );
              n !== l &&
                ((s = s.parentNode
                  ? 11 === s.nodeType
                    ? 0
                    : s.getAttribute(f) || 0
                  : 0),
                (o = b[l]) ||
                  ((o = v[l]),
                  (o = t(o, b[s] || v[s])),
                  (o.key = ++T),
                  (b[T] = o)),
                w && i(l)),
                (l = a.getAttribute("_tmplelement")) &&
                  (d[l]
                    ? S.call(d[l], a)
                    : (d[l] = (window[a.getAttribute("_tmplclass")] || $)(a)),
                  a.removeAttribute("_tmplelement"),
                  a.removeAttribute("_tmplclass")),
                a.removeAttribute(f);
            } else
              w &&
                (o = e.data(a, "tmplItem")) &&
                (i(o.key),
                (b[o.key] = o),
                (s = e.data(a.parentNode, "tmplItem")),
                (s = s ? s.key : 0));
            if (o) {
              for (r = o, o.elements = d; r && r.key != s; )
                r.nodes.push(a), (r = r.parent);
              delete o._ctnt, delete o._wrap, e.data(a, "tmplItem", o);
            }
          }
          var n,
            r,
            o,
            l,
            s,
            d,
            c = "_" + w,
            u = {};
          for (o = 0, l = a.length; l > o; o++)
            if (1 === (n = a[o]).nodeType) {
              for (
                r = n.getElementsByTagName("*"), d = {}, s = r.length - 1;
                s >= 0;
                s--
              )
                i(r[s]);
              i(n);
            }
        }
        function d(e, t, a, i) {
          return e
            ? (x.push({ _: e, tmpl: t, item: this, data: a, options: i }),
              void 0)
            : x.pop();
        }
        function c(t, a, i) {
          return e.tmpl(e.template(t), a, i, this);
        }
        function u(t, a) {
          var i = t.options || {};
          return (i.wrapped = a), e.tmpl(e.template(t.tmpl), t.data, i, t.item);
        }
        function m(t, a) {
          var i = this._wrap;
          return e.map(
            e(e.isArray(i) ? i.join("") : i).filter(t || "*"),
            function (e) {
              return a ? e.innerText || e.textContent : e.outerHTML || l(e);
            }
          );
        }
        function p() {
          var t = this.nodes;
          e.tmpl(null, null, null, this).insertBefore(t[0]), e(t).remove();
        }
        var h,
          g = e.fn.domManip,
          f = "_tmplitem",
          y = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
          b = {},
          v = {},
          k = { key: 0, data: {} },
          T = 0,
          w = 0,
          x = [],
          S = Array.prototype.unshift;
        e.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (t, a) {
            e.fn[t] = function (i) {
              var n,
                r,
                o,
                l,
                s = [],
                d = e(i),
                c = 1 === this.length && this[0].parentNode;
              if (
                ((h = b || {}),
                c &&
                  11 === c.nodeType &&
                  1 === c.childNodes.length &&
                  1 === d.length)
              )
                d[a](this[0]), (s = this);
              else {
                for (r = 0, o = d.length; o > r; r++)
                  (w = r),
                    (n = (r > 0 ? this.clone(!0) : this).get()),
                    e(d[r])[a](n),
                    (s = s.concat(n));
                (w = 0), (s = this.pushStack(s, t, d.selector));
              }
              return (l = h), (h = null), e.tmpl.complete(l), s;
            };
          }
        ),
          e.fn.extend({
            tmpl: function (t, a, i) {
              return e.tmpl(this[0], t, a, i);
            },
            tmplItem: function (t) {
              return e.tmplItem(this[0], t);
            },
            template: function (t) {
              return e.template(t, this[0]);
            },
            domManip: function (t, a, i) {
              if (t[0] && e.isArray(t[0])) {
                for (
                  var n,
                    r = e.makeArray(arguments),
                    o = t[0],
                    l = o.length,
                    s = 0;
                  l > s && !(n = e.data(o[s++], "tmplItem"));

                );
                n &&
                  w &&
                  (r[2] = function (t) {
                    e.tmpl.afterManip(this, t, i);
                  }),
                  g.apply(this, r);
              } else g.apply(this, arguments);
              return (w = 0), h || e.tmpl.complete(b), this;
            },
          }),
          e.extend({
            tmpl: function (i, n, o, l) {
              var s,
                d = !l;
              if (d)
                (l = k), (i = e.template[i] || e.template(null, i)), (v = {});
              else if (!i)
                return (
                  (i = l.tmpl),
                  (b[l.key] = l),
                  (l.nodes = []),
                  l.wrapped && r(l, l.wrapped),
                  e(a(l, null, l.tmpl(e, l)))
                );
              return i
                ? ("function" == typeof n && (n = n.call(l || {})),
                  o && o.wrapped && r(o, o.wrapped),
                  (s = e.isArray(n)
                    ? e.map(n, function (e) {
                        return e ? t(o, l, i, e) : null;
                      })
                    : [t(o, l, i, n)]),
                  d ? e(a(l, null, s)) : s)
                : [];
            },
            tmplItem: function (t, a) {
              var i;
              for (
                t instanceof e && (t = t[0]);
                t &&
                1 === t.nodeType &&
                !(i = e.data(t, "tmplItem")) &&
                (t = t.parentNode);

              );
              return a ? (i || k)[a] : i || k;
            },
            template: function (t, a) {
              return a
                ? ("string" == typeof a
                    ? (a = n(a))
                    : a instanceof e && (a = a[0] || {}),
                  a.nodeType &&
                    (a =
                      e.data(a, "tmpl") || e.data(a, "tmpl", n(a.innerHTML))),
                  "string" == typeof t ? (e.template[t] = a) : a)
                : t
                ? "string" != typeof t
                  ? e.template(null, t)
                  : e.template[t] || e.template(null, y.test(t) ? t : e(t))
                : null;
            },
            encode: function (e) {
              return ("" + e)
                .split("<")
                .join("&lt;")
                .split(">")
                .join("&gt;")
                .split('"')
                .join("&#34;")
                .split("'")
                .join("&#39;");
            },
          }),
          e.extend(e.tmpl, {
            tag: {
              tmpl: {
                _default: { $2: "null" },
                open: "if($notnull_1){__=__.concat($item.nest($1,$2));}",
              },
              wrap: {
                _default: { $2: "null" },
                open: "$item.calls(__,$1,$2);__=[];",
                close:
                  "call=$item.calls();__=call._.concat($item.wrap(call,__));",
              },
              each: {
                _default: { $2: "$index, $value" },
                open: "if($notnull_1){$.each($1a,function($2){with(this){",
                close: "}});}",
              },
              if: { open: "if(($notnull_1) && $1a){", close: "}" },
              else: {
                _default: { $1: "true" },
                open: "}else if(($notnull_1) && $1a){",
              },
              html: { open: "if($notnull_1){__.push($1a);}" },
              "=": {
                _default: { $1: "$data" },
                open: "if($notnull_1){__.push($.encode($1a));}",
              },
              "!": { open: "" },
              elem: {
                _default: { $2: "jQuery" },
                open: "if($notnull_1){__.push(' _tmplclass=\"$2\" _tmplelement=\"'+$.encode($1a)+'\"');}",
              },
            },
            complete: function () {
              b = {};
            },
            afterManip: function (t, a, i) {
              var n =
                11 === a.nodeType
                  ? e.makeArray(a.childNodes)
                  : 1 === a.nodeType
                  ? [a]
                  : [];
              i.call(t, a), s(n), w++;
            },
          });
      })(e),
      e
    );
  }),
  define("jquery/expr", ["jquery"], function (e) {
    var t = /^(input|textarea)$/i,
      a = /^select$/i,
      i = /^(radio|checkbox)$/i,
      n = /^(|on)$/i;
    return (
      e.extend(e.expr[":"], {
        changed: function (e) {
          return t.test(e.nodeName)
            ? i.test(e.type)
              ? e.defaultChecked !== e.checked ||
                (e.defaultValue !== e.value &&
                  !n.test(e.defaultValue) &&
                  !n.test(e.value))
              : e.defaultValue !== e.value
            : a.test(e.nodeName)
            ? !(e.options[e.selectedIndex] || {}).defaultSelected
            : !1;
        },
        readonly: function (t) {
          return !!t[e.propFix.readonly];
        },
      }),
      e
    );
  }),
  define(
    "jquery/metaparse",
    ["jquery", "module"],
    function ($, mod, undefined) {
      function runAutoparse() {
        $(function () {
          $(
            autoparse.selector ||
              ("string" == typeof autoparse ? autoparse : ".metaparse")
          ).metaparse({}, !0);
        });
      }
      var doc = document,
        metaExp =
          /(?:(?:^|\s+)((?:[\$\w]+)?)((?:\.(?:require|ready)\([^\)]*\))?)(\.[\$\w]+\(.*\)))/,
        requireExp = /^\.require/,
        readyExp = /^\.ready/,
        promiseDone = $.Deferred().resolve().promise(),
        promiseFail = $.Deferred().reject().promise(),
        metaparse = function (e) {
          var t = {};
          return (
            (t.data = e.replace(metaExp, function (e, a, i, n) {
              return (
                (t.depend = i), (t.execute = (a || "jQuery") + "(elem)" + n), ""
              );
            })),
            t
          );
        },
        isMetaparsed = function (e, t) {
          return t === undefined
            ? $._data(e).metaparsed
            : ($._data(e).metaparsed = t);
        },
        config = ($.metaparseSettings = $.extend(
          { type: "class", name: "metaparse" },
          mod.config()
        )),
        autoparse;
      return (
        $.config &&
          $.config.metaparse &&
          ("undefined" != typeof console &&
            console.warn &&
            console.warn(
              "DEPRECATED: use 'module config of requirejs' instead of 'jQuery.config.metaparse'."
            ),
          $.extend(config, $.config.metaparse)),
        $.extend({
          metaparse: function (elem, settings, isEach) {
            if (!isMetaparsed(elem)) {
              var s = isEach ? settings : $.extend({}, config, settings),
                type = s.type,
                name = s.name,
                meta = {},
                execute,
                depend,
                deferred,
                temp;
              if ("class" === type)
                (meta = metaparse(elem.className)),
                  (elem.className = meta.data);
              else if ("elem" === type) {
                if (!elem.getElementsByTagName) return;
                (temp = elem.getElementsByTagName(name)[0]) &&
                  ((meta = metaparse(temp.innerHTML)),
                  (temp.innerHTML = meta.data));
              } else
                elem.getAttribute !== undefined &&
                  (("html5" === type || "data" === type) &&
                    (name = "data-" + name),
                  (temp = elem.getAttribute(name)) &&
                    ((meta = metaparse(temp)),
                    elem.setAttribute(name, meta.data)));
              if ((execute = meta.execute))
                return (
                  (temp = function () {
                    isMetaparsed(elem, !0),
                      eval(execute),
                      deferred && deferred.resolve();
                  }),
                  (depend = depend = meta.depend),
                  (depend =
                    depend &&
                    requireExp.test(depend) &&
                    depend.replace(requireExp, ""))
                    ? ((deferred = $.Deferred()),
                      require(eval(depend), temp),
                      deferred.promise())
                    : (depend =
                        depend &&
                        readyExp.test(depend) &&
                        depend.replace(readyExp, ""))
                    ? $.ready(eval(depend), temp)
                    : (temp(), promiseDone)
                );
            }
            return promiseFail;
          },
        }),
        $.fn.extend({
          metaparse: function (e, t) {
            var a,
              i = $.extend({}, config, e),
              n = this,
              r = [];
            return (
              n.each(function () {
                "rejected" !== (a = $.metaparse(this, i, !0)).state() &&
                  r.push(a);
              }),
              $.when.apply($, r).done(function () {
                n.each(function () {
                  $.event.trigger("metaparse", null, this, !0);
                }),
                  t &&
                    (isMetaparsed(doc, !0),
                    $.event.trigger("metaparse", null, doc, !0));
              }),
              n
            );
          },
        }),
        ($.event.special.metaparse = {
          setup: $.noop,
          add: function (e) {
            isMetaparsed(this) && e.handler.call(this, $.Event("metaparse"));
          },
        }),
        (autoparse = config.autoparse) &&
          (autoparse.require
            ? require(autoparse.require, runAutoparse)
            : autoparse.ready
            ? $.ready(autoparse.ready, runAutoparse)
            : runAutoparse(),
          delete $.metaparseSettings.autoparse),
        $
      );
    }
  ),
  define("jquery/fn/form", ["jquery", "jquery/expr"], function (e) {
    var t = document.createElement("form");
    return (
      e.fn.extend({
        formGroup: function (t) {
          var a = this.filter((t = t || ":radio") + ":first")[0] || {},
            i = a.name,
            n = a.form,
            r = a.ownerDocument,
            o = [];
          return (
            i &&
              (n || r) &&
              (e.each((t = t.split(",")), function (a, n) {
                t[a] = e.trim(n) + "[name='" + i + "']";
              }),
              (t = t.join(",")),
              (o = (
                n
                  ? e(n).formInput().filter(t)
                  : e(":input", r)
                      .filter(t)
                      .filter(function () {
                        return !this.form;
                      })
              ).get())),
            this.pushStack(o)
          );
        },
        formInput: function () {
          return this.pushStack(
            (this.filter("form:first")[0] || {}).elements || []
          );
        },
        formReset: function () {
          var a = [],
            i = this.filter("form:first");
          return (
            this.filter(":input").each(function () {
              var i = e(this),
                n = i.clone().insertAfter(i);
              t.appendChild(this), a.push([i, n]);
            }),
            i.length && (i[0].reset(), i.triggerHandler("reset")),
            t.reset(),
            e.each(a, function (e, t) {
              var a = t[0],
                i = t[1];
              a.insertBefore(i).triggerHandler("reset"), i.remove();
            }),
            this
          );
        },
        formClear: function () {
          var t = e(this);
          return (
            t.push.apply(t, t.formInput().get()),
            t.filter(":file").formReset(),
            t.filter(":checked").removeProp("checked"),
            t.not("select,:radio,:checkbox").val(""),
            t.find("select").prop("selectedIndex", -1),
            t.find("option:selected").removeProp("selected"),
            this
          );
        },
      }),
      e
    );
  }),
  define("jquery/fn/scrollto", ["jquery"], function (e) {
    return (
      (function (e) {
        function t(e) {
          return "object" == typeof e ? e : { top: e, left: e };
        }
        var a = (e.scrollTo = function (t, a, i) {
          return e(window).scrollTo(t, a, i);
        });
        (a.defaults = {
          axis: "xy",
          duration: parseFloat(e.fn.jquery) >= 1.3 ? 0 : 1,
          limit: !0,
        }),
          (a.window = function () {
            return e(window)._scrollable();
          }),
          (e.fn._scrollable = function () {
            return this.map(function () {
              var t = this,
                a =
                  !t.nodeName ||
                  -1 !=
                    e.inArray(t.nodeName.toLowerCase(), [
                      "iframe",
                      "#document",
                      "html",
                      "body",
                    ]);
              if (!a) return t;
              var i = (t.contentWindow || t).document || t.ownerDocument || t;
              return /webkit/i.test(navigator.userAgent) ||
                "BackCompat" == i.compatMode
                ? i.body
                : i.documentElement;
            });
          }),
          (e.fn.scrollTo = function (i, n, r) {
            return (
              "object" == typeof n && ((r = n), (n = 0)),
              "function" == typeof r && (r = { onAfter: r }),
              "max" == i && (i = 9e9),
              (r = e.extend({}, a.defaults, r)),
              (n = n || r.duration),
              (r.queue = r.queue && r.axis.length > 1),
              r.queue && (n /= 2),
              (r.offset = t(r.offset)),
              (r.over = t(r.over)),
              this._scrollable()
                .each(function () {
                  function o(e) {
                    d.animate(
                      u,
                      n,
                      r.easing,
                      e &&
                        function () {
                          e.call(this, c, r);
                        }
                    );
                  }
                  if (null != i) {
                    var l,
                      s = this,
                      d = e(s),
                      c = i,
                      u = {},
                      m = d.is("html,body");
                    switch (typeof c) {
                      case "number":
                      case "string":
                        if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(c)) {
                          c = t(c);
                          break;
                        }
                        if (((c = e(c, this)), !c.length)) return;
                      case "object":
                        (c.is || c.style) && (l = (c = e(c)).offset());
                    }
                    e.each(r.axis.split(""), function (e, t) {
                      var i = "x" == t ? "Left" : "Top",
                        n = i.toLowerCase(),
                        p = "scroll" + i,
                        h = s[p],
                        g = a.max(s, t);
                      if (l)
                        (u[p] = l[n] + (m ? 0 : h - d.offset()[n])),
                          r.margin &&
                            ((u[p] -= parseInt(c.css("margin" + i)) || 0),
                            (u[p] -=
                              parseInt(c.css("border" + i + "Width")) || 0)),
                          (u[p] += r.offset[n] || 0),
                          r.over[n] &&
                            (u[p] +=
                              c["x" == t ? "width" : "height"]() * r.over[n]);
                      else {
                        var f = c[n];
                        u[p] =
                          f.slice && "%" == f.slice(-1)
                            ? (parseFloat(f) / 100) * g
                            : f;
                      }
                      r.limit &&
                        /^\d+$/.test(u[p]) &&
                        (u[p] = u[p] <= 0 ? 0 : Math.min(u[p], g)),
                        !e &&
                          r.queue &&
                          (h != u[p] && o(r.onAfterFirst), delete u[p]);
                    }),
                      o(r.onAfter);
                  }
                })
                .end()
            );
          }),
          (a.max = function (t, a) {
            var i = "x" == a ? "Width" : "Height",
              n = "scroll" + i;
            if (!e(t).is("html,body")) return t[n] - e(t)[i.toLowerCase()]();
            var r = "client" + i,
              o = t.ownerDocument.documentElement,
              l = t.ownerDocument.body;
            return Math.max(o[n], l[n]) - Math.min(o[r], l[r]);
          });
      })(e),
      e
    );
  }),
  define("jquery/mixin", ["jquery"], function (e, t) {
    var a = Object.prototype.hasOwnProperty;
    return (
      e.extend({
        mixin: function () {
          var i,
            n,
            r,
            o,
            l = arguments[0] || {},
            s = 1,
            d = arguments.length,
            c = !1;
          if (
            ("boolean" == typeof l &&
              ((c = l), (l = arguments[1] || {}), (s = 2)),
            "object" == typeof l || e.isFunction(l) || (l = {}),
            d === s)
          )
            return l;
          for (; d > s; s++)
            if (null !== (i = arguments[s]))
              for (n in i)
                if (((r = l[n]), (o = i[n]), l !== o && a.call(i, n)))
                  if (c && o && (e.isPlainObject(o) || e.isArray(o))) {
                    var u =
                      r && (e.isPlainObject(r) || e.isArray(r))
                        ? r
                        : e.isArray(o)
                        ? []
                        : {};
                    l[n] = e.extend(c, u, o);
                  } else o !== t && (l[n] = o);
          return l;
        },
      }),
      e
    );
  }),
  define("jquery/dict", ["module", "jquery"], function (e, t, a) {
    var i = function (e) {
        return t.dict[e] || (t.dict[e] = {});
      },
      n = function (e, a, i) {
        3 === e.nodeType
          ? (e.nodeValue = a.parse(e.nodeValue))
          : i &&
            t.each(e.childNodes, function () {
              n(this, a, i);
            });
      },
      r = (t.dictSettings = t.extend(
        { parser: /(?:^|[^\{\$])(\{(.*?[^\\])\})/g, region: "en" },
        e.config()
      ));
    return (
      t.extend({
        dict: function (e, a) {
          var n,
            o = t.extend({}, r, "string" == typeof a ? { region: a } : a),
            l = i(o.region);
          return (
            (n = "string" == typeof e ? l[e] || {} : e || {}),
            new t.Dictionary(n, o)
          );
        },
        dictionary: function (e, n, o) {
          "string" != typeof e ? ((o = n), (n = e), (e = a)) : n.unshift(e);
          var l = t.extend({}, r, "string" == typeof o ? { region: o } : o),
            s = i(l.region),
            d = [{}];
          return (
            t.each(n, function (e, a) {
              t.isPlainObject(a)
                ? d.push(a)
                : "string" == typeof a
                ? d.push(s[a] || {})
                : a instanceof t.Dictionary &&
                  a.options.region === l.region &&
                  d.push(a.dict);
            }),
            (d = t.extend.apply(t, d)),
            new t.Dictionary(e ? (s[e] = d) : d, l)
          );
        },
        Dictionary: function (e, t) {
          (this.dict = e), (this.options = t);
        },
      }),
      t.extend(t.Dictionary.prototype, {
        translate: function (e) {
          return this.dict[e] || this.parse(e);
        },
        parse: function (e) {
          var t = this.dict;
          return e.replace(this.options.parser, function (e, i, n) {
            var r = t[n];
            return r === a ? e : e.replace(i, r);
          });
        },
      }),
      t.fn.extend({
        dictParse: function (e, a, i) {
          return (
            "boolean" != typeof a && ((i = a), (a = !1)),
            (e = e instanceof t.Dictionary ? e : t.dict(e, i)),
            this.contents().each(function () {
              n(this, e, a);
            }),
            this
          );
        },
        dictParseAttr: function (e, a, i) {
          return (
            (e = e instanceof t.Dictionary ? e : t.dict(e, i)),
            (a = t.isArray(a) ? a : [a]),
            a.length
              ? (this.filter("[" + a.join("], [") + "]").each(function () {
                  var i = t(this);
                  t.each(a, function (t, a) {
                    var n = i.attr(a);
                    n && i.attr(a, e.parse(n));
                  });
                }),
                this)
              : this
          );
        },
      }),
      t
    );
  }),
  define("jquery/jstree", ["jquery"], function (e) {
    "use strict";
    (e.vakata = {}),
      (e.vakata.css = {
        get_css: function (e, t, a) {
          e = e.toLowerCase();
          var i = a.cssRules || a.rules,
            n = 0;
          do {
            if (i.length && n > i.length + 5) return !1;
            if (i[n].selectorText && i[n].selectorText.toLowerCase() == e)
              return t === !0
                ? (a.removeRule && a.removeRule(n),
                  a.deleteRule && a.deleteRule(n),
                  !0)
                : i[n];
          } while (i[++n]);
          return !1;
        },
        add_css: function (t, a) {
          return e.jstree.css.get_css(t, !1, a)
            ? !1
            : (a.insertRule
                ? a.insertRule(t + " { }", 0)
                : a.addRule(t, null, 0),
              e.vakata.css.get_css(t));
        },
        remove_css: function (t, a) {
          return e.vakata.css.get_css(t, !0, a);
        },
        add_sheet: function (e) {
          var t;
          if (e.str)
            return (
              (t = document.createElement("style")),
              t.setAttribute("type", "text/css"),
              t.styleSheet
                ? (document.getElementsByTagName("head")[0].appendChild(t),
                  (t.styleSheet.cssText = e.str))
                : (t.appendChild(document.createTextNode(e.str)),
                  document.getElementsByTagName("head")[0].appendChild(t)),
              t.sheet || t.styleSheet
            );
          if (e.url) {
            if (!document.createStyleSheet)
              return (
                (t = document.createElement("link")),
                (t.rel = "stylesheet"),
                (t.type = "text/css"),
                (t.media = "all"),
                (t.href = e.url),
                document.getElementsByTagName("head")[0].appendChild(t),
                t.styleSheet
              );
            try {
              t = document.createStyleSheet(e.url);
            } catch (a) {}
          }
        },
      });
    var t = [],
      a = -1,
      i = {},
      n = {},
      r = !1;
    return (
      (e.fn.jstree = function (a) {
        var n = "string" == typeof a,
          r = Array.prototype.slice.call(arguments, 1),
          o = this;
        return (
          !n && e.meta && r.push(e.metadata.get(this).jstree),
          (a = !n && r.length ? e.extend.apply(null, [!0, a].concat(r)) : a),
          n && "_" == a.substring(0, 1)
            ? o
            : (n
                ? this.each(function () {
                    var i = t[e.data(this, "jstree-instance-id")],
                      n = i && e.isFunction(i[a]) ? i[a].apply(i, r) : i;
                    return "undefined" != typeof n &&
                      (a.indexOf(!1) || (n !== !0 && n !== !1))
                      ? ((o = n), !1)
                      : void 0;
                  })
                : this.each(function () {
                    var n = e.data(this, "jstree-instance-id"),
                      r = !1;
                    "undefined" != typeof n && t[n] && t[n].destroy(),
                      (n = parseInt(t.push({}), 10) - 1),
                      e.data(this, "jstree-instance-id", n),
                      a || (a = {}),
                      (a.plugins = e.isArray(a.plugins)
                        ? a.plugins
                        : e.jstree.defaults.plugins),
                      -1 === e.inArray("core", a.plugins) &&
                        a.plugins.unshift("core"),
                      (r = e.extend(!0, {}, e.jstree.defaults, a)),
                      (r.plugins = a.plugins),
                      e.each(i, function (t) {
                        -1 === e.inArray(t, r.plugins) &&
                          ((r[t] = null), delete r[t]);
                      }),
                      (t[n] = new e.jstree._instance(
                        n,
                        e(this).addClass("jstree jstree-" + n),
                        r
                      )),
                      e.each(t[n]._get_settings().plugins, function (e, a) {
                        t[n].data[a] = {};
                      }),
                      e.each(t[n]._get_settings().plugins, function (e, a) {
                        i[a] && i[a].__init.apply(t[n]);
                      }),
                      t[n].init();
                  }),
              o)
        );
      }),
      (e.jstree = {
        defaults: { plugins: [] },
        _focused: function () {
          return t[a] || null;
        },
        _reference: function (a) {
          if (t[a]) return t[a];
          var i = e(a);
          return (
            i.length || "string" != typeof a || (i = e("#" + a)),
            i.length
              ? t[i.closest(".jstree").data("jstree-instance-id")] || null
              : null
          );
        },
        _instance: function (t, a, i) {
          (this.data = { core: {} }),
            (this.get_settings = function () {
              return e.extend(!0, {}, i);
            }),
            (this._get_settings = function () {
              return i;
            }),
            (this.get_index = function () {
              return t;
            }),
            (this.get_container = function () {
              return a;
            }),
            (this._set_settings = function (t) {
              i = e.extend(!0, {}, i, t);
            });
        },
        _fn: {},
        plugin: function (t, a) {
          (a = e.extend(
            {},
            { __init: e.noop, __destroy: e.noop, _fn: {}, defaults: !1 },
            a
          )),
            (i[t] = a),
            (e.jstree.defaults[t] = a.defaults),
            e.each(a._fn, function (a, i) {
              (i.plugin = t),
                (i.old = e.jstree._fn[a]),
                (e.jstree._fn[a] = function () {
                  var t,
                    n = i,
                    r = Array.prototype.slice.call(arguments),
                    o = new e.Event("before.jstree"),
                    l = !1;
                  do {
                    if (
                      n &&
                      n.plugin &&
                      -1 !== e.inArray(n.plugin, this._get_settings().plugins)
                    )
                      break;
                    n = n.old;
                  } while (n);
                  if (
                    n &&
                    ((t = this.get_container().triggerHandler(o, {
                      func: a,
                      inst: this,
                      args: r,
                    })),
                    t !== !1)
                  )
                    return (
                      "undefined" != typeof t && (r = t),
                      (t =
                        0 === a.indexOf("_")
                          ? n.apply(this, r)
                          : n.apply(
                              e.extend({}, this, {
                                __callback: function (e) {
                                  this.get_container().triggerHandler(
                                    a + ".jstree",
                                    { inst: this, args: r, rslt: e, rlbk: l }
                                  );
                                },
                                __rollback: function () {
                                  return (l = this.get_rollback());
                                },
                                __call_old: function (e) {
                                  return n.old.apply(
                                    this,
                                    e
                                      ? Array.prototype.slice.call(arguments, 1)
                                      : r
                                  );
                                },
                              }),
                              r
                            ))
                    );
                }),
                (e.jstree._fn[a].old = i.old),
                (e.jstree._fn[a].plugin = t);
            });
        },
        rollback: function (a) {
          a &&
            (e.isArray(a) || (a = [a]),
            e.each(a, function (e, a) {
              t[a.i].set_rollback(a.h, a.d);
            }));
        },
      }),
      (e.jstree._fn = e.jstree._instance.prototype = {}),
      e.jstree.plugin("core", {
        __init: function () {
          this.data.core.to_open = e.map(
            e.makeArray(this.get_settings().core.initially_open),
            function (e) {
              return (
                "#" +
                e
                  .toString()
                  .replace(/^#/, "")
                  .replace("\\/", "/")
                  .replace("/", "\\/")
              );
            }
          );
        },
        defaults: {
          html_titles: !1,
          animation: 500,
          initially_open: [],
          rtl: !1,
          strings: { loading: "Loading ...", new_node: "New node" },
        },
        _fn: {
          init: function () {
            this.set_focus(),
              this._get_settings().core.rtl &&
                this.get_container()
                  .addClass("jstree-rtl")
                  .css("direction", "rtl"),
              this.get_container().html(
                "<ul><li class='jstree-last jstree-leaf'><ins>&#160;</ins><a class='jstree-loading' href='#'><ins class='jstree-icon'>&#160;</ins>" +
                  this._get_settings().core.strings.loading +
                  "</a></li></ul>"
              ),
              (this.data.core.li_height =
                this.get_container()
                  .find("ul li.jstree-closed, ul li.jstree-leaf")
                  .eq(0)
                  .height() || 18),
              this.get_container()
                .on(
                  "click.jstree",
                  "li > ins",
                  e.proxy(function (t) {
                    var a = e(t.target);
                    a.is("ins") &&
                      t.pageY - a.offset().top < this.data.core.li_height &&
                      this.toggle_node(a);
                  }, this)
                )
                .on(
                  "mousedown.jstree",
                  e.proxy(function () {
                    this.set_focus();
                  }, this)
                )
                .on("dblclick.jstree", function () {
                  var e;
                  if (document.selection && document.selection.empty)
                    document.selection.empty();
                  else if (window.getSelection) {
                    e = window.getSelection();
                    try {
                      e.removeAllRanges(), e.collapse();
                    } catch (t) {}
                  }
                }),
              this.__callback(),
              this.load_node(-1, function () {
                this.loaded(), this.reopen();
              });
          },
          destroy: function () {
            var n,
              r = this.get_index(),
              o = this._get_settings(),
              l = this;
            if (
              (e.each(o.plugins, function (e, t) {
                try {
                  i[t].__destroy.apply(l);
                } catch (a) {}
              }),
              this.__callback(),
              this.is_focused())
            )
              for (n in t)
                if (t.hasOwnProperty(n) && n != r) {
                  t[n].set_focus();
                  break;
                }
            r === a && (a = -1),
              this.get_container()
                .off(".jstree")
                .off(".jstree")
                .removeData("jstree-instance-id")
                .find("[class^='jstree']")
                .andSelf()
                .attr("class", function () {
                  return this.className.replace(/jstree[^ ]*|$/gi, "");
                }),
              (t[r] = null),
              delete t[r];
          },
          save_opened: function () {
            var e = this;
            (this.data.core.to_open = []),
              this.get_container()
                .find(".jstree-open")
                .each(function () {
                  e.data.core.to_open.push(
                    "#" +
                      this.id
                        .toString()
                        .replace(/^#/, "")
                        .replace("\\/", "/")
                        .replace("/", "\\/")
                  );
                }),
              this.__callback(e.data.core.to_open);
          },
          reopen: function (t) {
            var a = this,
              i = !0,
              n = [],
              r = [];
            t ||
              ((this.data.core.reopen = !1), (this.data.core.refreshing = !0)),
              this.data.core.to_open.length &&
                (e.each(this.data.core.to_open, function (t, a) {
                  return "#" == a
                    ? !0
                    : (e(a).length && e(a).is(".jstree-closed")
                        ? n.push(a)
                        : r.push(a),
                      void 0);
                }),
                n.length &&
                  ((this.data.core.to_open = r),
                  e.each(n, function (e, t) {
                    a.open_node(
                      t,
                      function () {
                        a.reopen(!0);
                      },
                      !0
                    );
                  }),
                  (i = !1))),
              i &&
                (this.data.core.reopen && clearTimeout(this.data.core.reopen),
                (this.data.core.reopen = setTimeout(function () {
                  a.__callback({}, a);
                }, 50)),
                (this.data.core.refreshing = !1));
          },
          refresh: function (e) {
            var t = this;
            this.save_opened(),
              e || (e = -1),
              (e = this._get_node(e)),
              e || (e = -1),
              -1 !== e && e.children("UL").remove(),
              this.load_node(e, function () {
                t.__callback({ obj: e }), t.reopen();
              });
          },
          loaded: function () {
            this.__callback();
          },
          set_focus: function () {
            var t = e.jstree._focused();
            t && t !== this && t.get_container().removeClass("jstree-focused"),
              t !== this &&
                (this.get_container().addClass("jstree-focused"),
                (a = this.get_index())),
              this.__callback();
          },
          is_focused: function () {
            return a == this.get_index();
          },
          _get_node: function (t) {
            var a = e(t, this.get_container());
            return a.is(".jstree") || -1 == t
              ? -1
              : ((a = a.closest("li", this.get_container())),
                a.length ? a : !1);
          },
          _get_next: function (e, t) {
            return (
              (e = this._get_node(e)),
              -1 === e
                ? this.get_container().find("> ul > li:first-child")
                : e.length
                ? t
                  ? e.nextAll("li").size() > 0
                    ? e.nextAll("li:eq(0)")
                    : !1
                  : e.hasClass("jstree-open")
                  ? e.find("li:eq(0)")
                  : e.nextAll("li").size() > 0
                  ? e.nextAll("li:eq(0)")
                  : e.parentsUntil(".jstree", "li").next("li").eq(0)
                : !1
            );
          },
          _get_prev: function (e, t) {
            if (((e = this._get_node(e)), -1 === e))
              return this.get_container().find("> ul > li:last-child");
            if (!e.length) return !1;
            if (t)
              return e.prevAll("li").length > 0 ? e.prevAll("li:eq(0)") : !1;
            if (e.prev("li").length) {
              for (e = e.prev("li").eq(0); e.hasClass("jstree-open"); )
                e = e.children("ul:eq(0)").children("li:last");
              return e;
            }
            var a = e.parentsUntil(".jstree", "li:eq(0)");
            return a.length ? a : !1;
          },
          _get_parent: function (e) {
            if (((e = this._get_node(e)), -1 == e || !e.length)) return !1;
            var t = e.parentsUntil(".jstree", "li:eq(0)");
            return t.length ? t : -1;
          },
          _get_children: function (e) {
            return (
              (e = this._get_node(e)),
              -1 === e
                ? this.get_container().children("ul:eq(0)").children("li")
                : e.length
                ? e.children("ul:eq(0)").children("li")
                : !1
            );
          },
          get_path: function (e, t) {
            var a = [],
              i = this;
            return (
              (e = this._get_node(e)),
              -1 !== e && e && e.length
                ? (e.parentsUntil(".jstree", "li").each(function () {
                    a.push(t ? this.id : i.get_text(this));
                  }),
                  a.reverse(),
                  a.push(t ? e.attr("id") : this.get_text(e)),
                  a)
                : !1
            );
          },
          is_open: function (e) {
            return (
              (e = this._get_node(e)),
              e && -1 !== e && e.hasClass("jstree-open")
            );
          },
          is_closed: function (e) {
            return (
              (e = this._get_node(e)),
              e && -1 !== e && e.hasClass("jstree-closed")
            );
          },
          is_leaf: function (e) {
            return (
              (e = this._get_node(e)),
              e && -1 !== e && e.hasClass("jstree-leaf")
            );
          },
          open_node: function (e, t, a) {
            if (((e = this._get_node(e)), !e.length)) return !1;
            if (!e.hasClass("jstree-closed")) return t && t.call(), !1;
            var i = a || r ? 0 : this._get_settings().core.animation,
              n = this;
            this._is_loaded(e)
              ? (i && e.children("ul").css("display", "none"),
                e
                  .removeClass("jstree-closed")
                  .addClass("jstree-open")
                  .children("a")
                  .removeClass("jstree-loading"),
                i &&
                  e
                    .children("ul")
                    .stop(!0)
                    .slideDown(i, function () {
                      this.style.display = "";
                    }),
                this.__callback({ obj: e }),
                t && t.call())
              : (e.children("a").addClass("jstree-loading"),
                this.load_node(
                  e,
                  function () {
                    n.open_node(e, t, a);
                  },
                  t
                ));
          },
          close_node: function (e, t) {
            e = this._get_node(e);
            var a = t || r ? 0 : this._get_settings().core.animation;
            return e.length && e.hasClass("jstree-open")
              ? (a &&
                  e.children("ul").attr("style", "display:block !important"),
                e.removeClass("jstree-open").addClass("jstree-closed"),
                a &&
                  e
                    .children("ul")
                    .stop(!0)
                    .slideUp(a, function () {
                      this.style.display = "";
                    }),
                this.__callback({ obj: e }),
                void 0)
              : !1;
          },
          toggle_node: function (e) {
            return (
              (e = this._get_node(e)),
              e.hasClass("jstree-closed")
                ? this.open_node(e)
                : e.hasClass("jstree-open")
                ? this.close_node(e)
                : void 0
            );
          },
          open_all: function (e, t) {
            (e = e ? this._get_node(e) : this.get_container()),
              (e && -1 !== e) || (e = this.get_container()),
              t
                ? (e = e.find("li.jstree-closed"))
                : ((t = e),
                  (e = e.is(".jstree-closed")
                    ? e.find("li.jstree-closed").andSelf()
                    : e.find("li.jstree-closed")));
            var a = this;
            e.each(function () {
              var e = this;
              a._is_loaded(this)
                ? a.open_node(this, !1, !0)
                : a.open_node(
                    this,
                    function () {
                      a.open_all(e, t);
                    },
                    !0
                  );
            }),
              0 === t.find("li.jstree-closed").length &&
                this.__callback({ obj: t });
          },
          close_all: function (e) {
            var t = this;
            (e = e ? this._get_node(e) : this.get_container()),
              (e && -1 !== e) || (e = this.get_container()),
              e
                .find("li.jstree-open")
                .andSelf()
                .each(function () {
                  t.close_node(this);
                }),
              this.__callback({ obj: e });
          },
          clean_node: function (t) {
            (t = t && -1 != t ? e(t) : this.get_container()),
              (t = t.is("li") ? t.find("li").andSelf() : t.find("li")),
              t
                .removeClass("jstree-last")
                .filter("li:last-child")
                .addClass("jstree-last")
                .end()
                .filter(":has(li)")
                .not(".jstree-open")
                .removeClass("jstree-leaf")
                .addClass("jstree-closed"),
              t
                .not(".jstree-open, .jstree-closed")
                .addClass("jstree-leaf")
                .children("ul")
                .remove(),
              this.__callback({ obj: t });
          },
          get_rollback: function () {
            return (
              this.__callback(),
              {
                i: this.get_index(),
                h: this.get_container().children("ul").clone(!0),
                d: this.data,
              }
            );
          },
          set_rollback: function (e, t) {
            this.get_container().empty().append(e),
              (this.data = t),
              this.__callback();
          },
          load_node: function (e) {
            this.__callback({ obj: e });
          },
          _is_loaded: function () {
            return !0;
          },
          create_node: function (t, a, i, n, r) {
            (t = this._get_node(t)), (a = "undefined" == typeof a ? "last" : a);
            var o,
              l = e("<li>"),
              s = this._get_settings().core;
            if (-1 !== t && !t.length) return !1;
            if (!r && !this._is_loaded(t))
              return (
                this.load_node(t, function () {
                  this.create_node(t, a, i, n, !0);
                }),
                !1
              );
            switch (
              (this.__rollback(),
              "string" == typeof i && (i = { data: i }),
              i || (i = {}),
              i.attr && l.attr(i.attr),
              i.state && l.addClass("jstree-" + i.state),
              i.data || (i.data = s.strings.new_node),
              e.isArray(i.data) ||
                ((o = i.data), (i.data = []), i.data.push(o)),
              e.each(i.data, function (t, a) {
                (o = e("<a>")),
                  e.isFunction(a) && (a = a.call(this, i)),
                  "string" == typeof a
                    ? o.attr("href", "#")[s.html_titles ? "html" : "text"](a)
                    : (a.attr || (a.attr = {}),
                      a.attr.href || (a.attr.href = "#"),
                      o.attr(a.attr)[s.html_titles ? "html" : "text"](a.title),
                      a.language && o.addClass(a.language)),
                  o.prepend("<ins class='jstree-icon'>&#160;</ins>"),
                  a.icon &&
                    (-1 === a.icon.indexOf("/")
                      ? o.children("ins").addClass(a.icon)
                      : o
                          .children("ins")
                          .css(
                            "background",
                            "url('" + a.icon + "') center center no-repeat"
                          )),
                  l.append(o);
              }),
              l.prepend("<ins class='jstree-icon'>&#160;</ins>"),
              -1 === t &&
                ((t = this.get_container()),
                "before" === a && (a = "first"),
                "after" === a && (a = "last")),
              a)
            ) {
              case "before":
                t.before(l), (o = this._get_parent(t));
                break;
              case "after":
                t.after(l), (o = this._get_parent(t));
                break;
              case "inside":
              case "first":
                t.children("ul").length || t.append("<ul>"),
                  t.children("ul").prepend(l),
                  (o = t);
                break;
              case "last":
                t.children("ul").length || t.append("<ul>"),
                  t.children("ul").append(l),
                  (o = t);
                break;
              default:
                t.children("ul").length || t.append("<ul>"),
                  a || (a = 0),
                  (o = t.children("ul").children("li").eq(a)),
                  o.length ? o.before(l) : t.children("ul").append(l),
                  (o = t);
            }
            return (
              (-1 === o || o.get(0) === this.get_container().get(0)) &&
                (o = -1),
              this.clean_node(o),
              this.__callback({ obj: l, parent: o }),
              n && n.call(this, l),
              l
            );
          },
          get_text: function (e) {
            if (((e = this._get_node(e)), !e.length)) return !1;
            var t = this._get_settings().core.html_titles;
            return (
              (e = e.children("a:eq(0)")),
              t
                ? ((e = e.clone()), e.children("INS").remove(), e.html())
                : ((e = e.contents().filter(function () {
                    return 3 == this.nodeType;
                  })[0]),
                  e.nodeValue)
            );
          },
          set_text: function (e, t) {
            if (((e = this._get_node(e)), !e.length)) return !1;
            if (
              ((e = e.children("a:eq(0)")),
              this._get_settings().core.html_titles)
            ) {
              var a = e.children("INS").clone();
              return (
                e.html(t).prepend(a), this.__callback({ obj: e, name: t }), !0
              );
            }
            return (
              (e = e.contents().filter(function () {
                return 3 == this.nodeType;
              })[0]),
              this.__callback({ obj: e, name: t }),
              (e.nodeValue = t)
            );
          },
          rename_node: function (e, t) {
            (e = this._get_node(e)),
              this.__rollback(),
              e &&
                e.length &&
                this.set_text.apply(
                  this,
                  Array.prototype.slice.call(arguments)
                ) &&
                this.__callback({ obj: e, name: t });
          },
          delete_node: function (e) {
            if (((e = this._get_node(e)), !e.length)) return !1;
            this.__rollback();
            var t = this._get_parent(e),
              a = this._get_prev(e);
            return (
              (e = e.remove()),
              -1 !== t &&
                0 === t.find("> ul > li").length &&
                t
                  .removeClass("jstree-open jstree-closed")
                  .addClass("jstree-leaf"),
              this.clean_node(t),
              this.__callback({ obj: e, prev: a }),
              e
            );
          },
          prepare_move: function (t, a, i, r, o) {
            var l = {};
            if (
              ((l.ot = e.jstree._reference(l.o) || this),
              (l.o = l.ot._get_node(t)),
              (l.r = -1 === a ? -1 : this._get_node(a)),
              (l.p = "undefined" == typeof l ? "last" : i),
              !o &&
                n.o &&
                n.o[0] === l.o[0] &&
                n.r[0] === l.r[0] &&
                n.p === l.p)
            )
              return this.__callback(n), r && r.call(this, n), void 0;
            if (
              ((l.ot = e.jstree._reference(l.o) || this),
              (l.rt = -1 === a ? l.ot : e.jstree._reference(l.r) || this),
              -1 === l.r)
            )
              switch (((l.cr = -1), l.p)) {
                case "first":
                case "before":
                case "inside":
                  l.cp = 0;
                  break;
                case "after":
                case "last":
                  l.cp = l.rt.get_container().find(" > ul > li").length;
                  break;
                default:
                  l.cp = l.p;
              }
            else {
              if (!/^(before|after)$/.test(l.p) && !this._is_loaded(l.r))
                return this.load_node(l.r, function () {
                  this.prepare_move(t, a, i, r, !0);
                });
              switch (l.p) {
                case "before":
                  (l.cp = l.r.index()), (l.cr = l.rt._get_parent(l.r));
                  break;
                case "after":
                  (l.cp = l.r.index() + 1), (l.cr = l.rt._get_parent(l.r));
                  break;
                case "inside":
                case "first":
                  (l.cp = 0), (l.cr = l.r);
                  break;
                case "last":
                  (l.cp = l.r.find(" > ul > li").length), (l.cr = l.r);
                  break;
                default:
                  (l.cp = l.p), (l.cr = l.r);
              }
            }
            (l.np = -1 == l.cr ? l.rt.get_container() : l.cr),
              (l.op = l.ot._get_parent(l.o)),
              (l.or = l.np.find(" > ul > li:nth-child(" + (l.cp + 1) + ")")),
              (n = l),
              this.__callback(n),
              r && r.call(this, n);
          },
          check_move: function () {
            var e = n,
              t = !0;
            return e.or[0] === e.o[0]
              ? !1
              : (e.o.each(function () {
                  return -1 !==
                    e.r
                      .parentsUntil(".jstree")
                      .andSelf()
                      .filter("li")
                      .index(this)
                    ? ((t = !1), !1)
                    : void 0;
                }),
                t);
          },
          move_node: function (t, a, i, r, o, l) {
            if (!o)
              return this.prepare_move(t, a, i, function (e) {
                this.move_node(e, !1, !1, r, !0, l);
              });
            if (!l && !this.check_move()) return !1;
            this.__rollback();
            var s = !1;
            r
              ? ((s = t.o.clone()),
                s
                  .find("*[id]")
                  .andSelf()
                  .each(function () {
                    this.id && (this.id = "copy_" + this.id);
                  }))
              : (s = t.o),
              t.or.length
                ? t.or.before(s)
                : (t.np.children("ul").length || e("<ul>").appendTo(t.np),
                  t.np.children("ul:eq(0)").append(s));
            try {
              t.ot.clean_node(t.op),
                t.rt.clean_node(t.np),
                t.op.find("> ul > li").length ||
                  t.op
                    .removeClass("jstree-open jstree-closed")
                    .addClass("jstree-leaf")
                    .children("ul")
                    .remove();
            } catch (d) {}
            return r && ((n.cy = !0), (n.oc = s)), this.__callback(n), n;
          },
          _get_move: function () {
            return n;
          },
        },
      }),
      e
    );
  }),
  define("jquery/jstree/themes", ["jquery/jstree"], function (e) {
    return (
      (e.jstree._themes = !1),
      e.jstree.plugin("themes", {
        __init: function () {
          this.get_container()
            .on(
              "init.jstree",
              e.proxy(function () {
                var e = this._get_settings().themes;
                (this.data.themes.dots = e.dots),
                  (this.data.themes.icons = e.icons),
                  this.set_theme(e.theme, e.url);
              }, this)
            )
            .on(
              "loaded.jstree",
              e.proxy(function () {
                this.data.themes.dots ? this.show_dots() : this.hide_dots(),
                  this.data.themes.icons
                    ? this.show_icons()
                    : this.hide_icons();
              }, this)
            );
        },
        defaults: { theme: "default", url: !1, dots: !0, icons: !0 },
        _fn: {
          set_theme: function (e) {
            return e
              ? (this.data.themes.theme != e &&
                  (this.get_container().removeClass(
                    "jstree-" + this.data.themes.theme
                  ),
                  (this.data.themes.theme = e)),
                this.get_container().addClass("jstree-" + e),
                this.data.themes.dots ? this.show_dots() : this.hide_dots(),
                this.data.themes.icons ? this.show_icons() : this.hide_icons(),
                this.__callback(),
                void 0)
              : !1;
          },
          get_theme: function () {
            return this.data.themes.theme;
          },
          show_dots: function () {
            (this.data.themes.dots = !0),
              this.get_container().children("ul").removeClass("jstree-no-dots");
          },
          hide_dots: function () {
            (this.data.themes.dots = !1),
              this.get_container().children("ul").addClass("jstree-no-dots");
          },
          toggle_dots: function () {
            this.data.themes.dots ? this.hide_dots() : this.show_dots();
          },
          show_icons: function () {
            (this.data.themes.icons = !0),
              this.get_container()
                .children("ul")
                .removeClass("jstree-no-icons");
          },
          hide_icons: function () {
            (this.data.themes.icons = !1),
              this.get_container().children("ul").addClass("jstree-no-icons");
          },
          toggle_icons: function () {
            this.data.themes.icons ? this.hide_icons() : this.show_icons();
          },
        },
      }),
      e(function () {
        e.jstree._themes === !1 &&
          e("script").each(function () {
            return this.src
              .toString()
              .match(/jquery\.jstree[^\/]*?\.js(\?.*)?$/)
              ? ((e.jstree._themes =
                  this.src
                    .toString()
                    .replace(/jquery\.jstree[^\/]*?\.js(\?.*)?$/, "") +
                  "themes/"),
                !1)
              : void 0;
          }),
          e.jstree._themes === !1 && (e.jstree._themes = "themes/");
      }),
      e.jstree.defaults.plugins.push("themes"),
      e
    );
  }),
  define("jquery/jstree/html_data", ["jquery/jstree"], function (e) {
    return (
      e.jstree.plugin("html_data", {
        __init: function () {
          (this.data.html_data.original_container_html = this.get_container()
            .find(" > ul > li")
            .clone(!0)),
            this.data.html_data.original_container_html
              .find("li")
              .andSelf()
              .contents()
              .filter(function () {
                return 3 == this.nodeType;
              })
              .remove();
        },
        defaults: { data: !1, ajax: !1, correct_state: !0 },
        _fn: {
          load_node: function (e, t, a) {
            var i = this;
            this.load_node_html(
              e,
              function () {
                i.__callback({ obj: e }), t.call(this);
              },
              a
            );
          },
          _is_loaded: function (e) {
            return (
              (e = this._get_node(e)),
              -1 == e ||
                !e ||
                !this._get_settings().html_data.ajax ||
                e.is(".jstree-open, .jstree-leaf") ||
                e.children("ul").children("li").size() > 0
            );
          },
          load_node_html: function (t, a, i) {
            var n,
              r = this.get_settings().html_data,
              o = function () {},
              l = function () {};
            if (((t = this._get_node(t)), t && -1 !== t)) {
              if (t.data("jstree-is-loading")) return;
              t.data("jstree-is-loading", !0);
            }
            switch (!0) {
              case !r.data && !r.ajax:
                (t && -1 != t) ||
                  (this.get_container()
                    .children("ul")
                    .empty()
                    .append(this.data.html_data.original_container_html)
                    .find("li, a")
                    .filter(function () {
                      return "INS" !== this.firstChild.tagName;
                    })
                    .prepend("<ins class='jstree-icon'>&#160;</ins>")
                    .end()
                    .filter("a")
                    .children("ins:first-child")
                    .not(".jstree-icon")
                    .addClass("jstree-icon"),
                  this.clean_node()),
                  a && a.call(this);
                break;
              case (!!r.data && !r.ajax) ||
                (!!r.data && !!r.ajax && (!t || -1 === t)):
                (t && -1 != t) ||
                  ((n = e(r.data)),
                  n.is("ul") || (n = e("<ul>").append(n)),
                  this.get_container()
                    .children("ul")
                    .empty()
                    .append(n.children())
                    .find("li, a")
                    .filter(function () {
                      return "INS" !== this.firstChild.tagName;
                    })
                    .prepend("<ins class='jstree-icon'>&#160;</ins>")
                    .end()
                    .filter("a")
                    .children("ins:first-child")
                    .not(".jstree-icon")
                    .addClass("jstree-icon"),
                  this.clean_node()),
                  a && a.call(this);
                break;
              case (!r.data && !!r.ajax) ||
                (!!r.data && !!r.ajax && t && -1 !== t):
                (t = this._get_node(t)),
                  (o = function (e, a, n) {
                    var o = this.get_settings().html_data.ajax.error;
                    o && o.call(this, e, a, n),
                      -1 != t && t.length
                        ? (t
                            .children(".jstree-loading")
                            .removeClass("jstree-loading"),
                          t.data("jstree-is-loading", !1),
                          "success" === a &&
                            r.correct_state &&
                            t
                              .removeClass("jstree-open jstree-closed")
                              .addClass("jstree-leaf"))
                        : "success" === a &&
                          r.correct_state &&
                          this.get_container().children("ul").empty(),
                      i && i.call(this);
                  }),
                  (l = function (i, n, l) {
                    var s = this.get_settings().html_data.ajax.success;
                    return (
                      s && (i = s.call(this, i, n, l) || i),
                      "" == i
                        ? o.call(this, l, n, "")
                        : (i
                            ? ((i = e(i)),
                              i.is("ul") || (i = e("<ul>").append(i)),
                              -1 != t && t
                                ? (t
                                    .children(".jstree-loading")
                                    .removeClass("jstree-loading"),
                                  t
                                    .append(i)
                                    .find("li, a")
                                    .filter(function () {
                                      return "INS" !== this.firstChild.tagName;
                                    })
                                    .prepend(
                                      "<ins class='jstree-icon'>&#160;</ins>"
                                    )
                                    .end()
                                    .filter("a")
                                    .children("ins:first-child")
                                    .not(".jstree-icon")
                                    .addClass("jstree-icon"),
                                  t.data("jstree-is-loading", !1))
                                : this.get_container()
                                    .children("ul")
                                    .empty()
                                    .append(i.children())
                                    .find("li, a")
                                    .filter(function () {
                                      return "INS" !== this.firstChild.tagName;
                                    })
                                    .prepend(
                                      "<ins class='jstree-icon'>&#160;</ins>"
                                    )
                                    .end()
                                    .filter("a")
                                    .children("ins:first-child")
                                    .not(".jstree-icon")
                                    .addClass("jstree-icon"),
                              this.clean_node(t),
                              a && a.call(this))
                            : t && -1 !== t
                            ? (t
                                .children(".jstree-loading")
                                .removeClass("jstree-loading"),
                              t.data("jstree-is-loading", !1),
                              r.correct_state &&
                                (t
                                  .removeClass("jstree-open jstree-closed")
                                  .addClass("jstree-leaf"),
                                a && a.call(this)))
                            : r.correct_state &&
                              (this.get_container().children("ul").empty(),
                              a && a.call(this)),
                          void 0)
                    );
                  }),
                  (r.ajax.context = this),
                  (r.ajax.error = o),
                  (r.ajax.success = l),
                  r.ajax.dataType || (r.ajax.dataType = "html"),
                  e.isFunction(r.ajax.url) &&
                    (r.ajax.url = r.ajax.url.call(this, t)),
                  e.isFunction(r.ajax.data) &&
                    (r.ajax.data = r.ajax.data.call(this, t)),
                  e.ajax(r.ajax);
            }
          },
        },
      }),
      e.jstree.defaults.plugins.push("html_data"),
      e
    );
  }),
  define("jquery/effects", ["jquery"], function (e) {
    return (
      (function (t, a) {
        var i = "ui-effects-";
        (t.effects = { effect: {} }),
          (function (e, t) {
            function a(e, t, a) {
              var i = u[t.type] || {};
              return null == e
                ? a || !t.def
                  ? null
                  : t.def
                : ((e = i.floor ? ~~e : parseFloat(e)),
                  isNaN(e)
                    ? t.def
                    : i.mod
                    ? (e + i.mod) % i.mod
                    : 0 > e
                    ? 0
                    : i.max < e
                    ? i.max
                    : e);
            }
            function i(t) {
              var a = d(),
                i = (a._rgba = []);
              return (
                (t = t.toLowerCase()),
                h(s, function (e, n) {
                  var r,
                    o = n.re.exec(t),
                    l = o && n.parse(o),
                    s = n.space || "rgba";
                  return l
                    ? ((r = a[s](l)),
                      (a[c[s].cache] = r[c[s].cache]),
                      (i = a._rgba = r._rgba),
                      !1)
                    : void 0;
                }),
                i.length
                  ? ("0,0,0,0" === i.join() && e.extend(i, r.transparent), a)
                  : r[t]
              );
            }
            function n(e, t, a) {
              return (
                (a = (a + 1) % 1),
                1 > 6 * a
                  ? e + 6 * (t - e) * a
                  : 1 > 2 * a
                  ? t
                  : 2 > 3 * a
                  ? e + 6 * (t - e) * (2 / 3 - a)
                  : e
              );
            }
            var r,
              o =
                "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
              l = /^([\-+])=\s*(\d+\.?\d*)/,
              s = [
                {
                  re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                  parse: function (e) {
                    return [e[1], e[2], e[3], e[4]];
                  },
                },
                {
                  re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                  parse: function (e) {
                    return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]];
                  },
                },
                {
                  re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                  parse: function (e) {
                    return [
                      parseInt(e[1], 16),
                      parseInt(e[2], 16),
                      parseInt(e[3], 16),
                    ];
                  },
                },
                {
                  re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                  parse: function (e) {
                    return [
                      parseInt(e[1] + e[1], 16),
                      parseInt(e[2] + e[2], 16),
                      parseInt(e[3] + e[3], 16),
                    ];
                  },
                },
                {
                  re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                  space: "hsla",
                  parse: function (e) {
                    return [e[1], e[2] / 100, e[3] / 100, e[4]];
                  },
                },
              ],
              d = (e.Color = function (t, a, i, n) {
                return new e.Color.fn.parse(t, a, i, n);
              }),
              c = {
                rgba: {
                  props: {
                    red: { idx: 0, type: "byte" },
                    green: { idx: 1, type: "byte" },
                    blue: { idx: 2, type: "byte" },
                  },
                },
                hsla: {
                  props: {
                    hue: { idx: 0, type: "degrees" },
                    saturation: { idx: 1, type: "percent" },
                    lightness: { idx: 2, type: "percent" },
                  },
                },
              },
              u = {
                byte: { floor: !0, max: 255 },
                percent: { max: 1 },
                degrees: { mod: 360, floor: !0 },
              },
              m = (d.support = {}),
              p = e("<p>")[0],
              h = e.each;
            (p.style.cssText = "background-color:rgba(1,1,1,.5)"),
              (m.rgba = p.style.backgroundColor.indexOf("rgba") > -1),
              h(c, function (e, t) {
                (t.cache = "_" + e),
                  (t.props.alpha = { idx: 3, type: "percent", def: 1 });
              }),
              (d.fn = e.extend(d.prototype, {
                parse: function (n, o, l, s) {
                  if (n === t)
                    return (this._rgba = [null, null, null, null]), this;
                  (n.jquery || n.nodeType) && ((n = e(n).css(o)), (o = t));
                  var u = this,
                    m = e.type(n),
                    p = (this._rgba = []);
                  return (
                    o !== t && ((n = [n, o, l, s]), (m = "array")),
                    "string" === m
                      ? this.parse(i(n) || r._default)
                      : "array" === m
                      ? (h(c.rgba.props, function (e, t) {
                          p[t.idx] = a(n[t.idx], t);
                        }),
                        this)
                      : "object" === m
                      ? (n instanceof d
                          ? h(c, function (e, t) {
                              n[t.cache] && (u[t.cache] = n[t.cache].slice());
                            })
                          : h(c, function (t, i) {
                              var r = i.cache;
                              h(i.props, function (e, t) {
                                if (!u[r] && i.to) {
                                  if ("alpha" === e || null == n[e]) return;
                                  u[r] = i.to(u._rgba);
                                }
                                u[r][t.idx] = a(n[e], t, !0);
                              }),
                                u[r] &&
                                  e.inArray(null, u[r].slice(0, 3)) < 0 &&
                                  ((u[r][3] = 1),
                                  i.from && (u._rgba = i.from(u[r])));
                            }),
                        this)
                      : void 0
                  );
                },
                is: function (e) {
                  var t = d(e),
                    a = !0,
                    i = this;
                  return (
                    h(c, function (e, n) {
                      var r,
                        o = t[n.cache];
                      return (
                        o &&
                          ((r = i[n.cache] || (n.to && n.to(i._rgba)) || []),
                          h(n.props, function (e, t) {
                            return null != o[t.idx]
                              ? (a = o[t.idx] === r[t.idx])
                              : void 0;
                          })),
                        a
                      );
                    }),
                    a
                  );
                },
                _space: function () {
                  var e = [],
                    t = this;
                  return (
                    h(c, function (a, i) {
                      t[i.cache] && e.push(a);
                    }),
                    e.pop()
                  );
                },
                transition: function (e, t) {
                  var i = d(e),
                    n = i._space(),
                    r = c[n],
                    o = 0 === this.alpha() ? d("transparent") : this,
                    l = o[r.cache] || r.to(o._rgba),
                    s = l.slice();
                  return (
                    (i = i[r.cache]),
                    h(r.props, function (e, n) {
                      var r = n.idx,
                        o = l[r],
                        d = i[r],
                        c = u[n.type] || {};
                      null !== d &&
                        (null === o
                          ? (s[r] = d)
                          : (c.mod &&
                              (d - o > c.mod / 2
                                ? (o += c.mod)
                                : o - d > c.mod / 2 && (o -= c.mod)),
                            (s[r] = a((d - o) * t + o, n))));
                    }),
                    this[n](s)
                  );
                },
                blend: function (t) {
                  if (1 === this._rgba[3]) return this;
                  var a = this._rgba.slice(),
                    i = a.pop(),
                    n = d(t)._rgba;
                  return d(
                    e.map(a, function (e, t) {
                      return (1 - i) * n[t] + i * e;
                    })
                  );
                },
                toRgbaString: function () {
                  var t = "rgba(",
                    a = e.map(this._rgba, function (e, t) {
                      return null == e ? (t > 2 ? 1 : 0) : e;
                    });
                  return (
                    1 === a[3] && (a.pop(), (t = "rgb(")), t + a.join() + ")"
                  );
                },
                toHslaString: function () {
                  var t = "hsla(",
                    a = e.map(this.hsla(), function (e, t) {
                      return (
                        null == e && (e = t > 2 ? 1 : 0),
                        t && 3 > t && (e = Math.round(100 * e) + "%"),
                        e
                      );
                    });
                  return (
                    1 === a[3] && (a.pop(), (t = "hsl(")), t + a.join() + ")"
                  );
                },
                toHexString: function (t) {
                  var a = this._rgba.slice(),
                    i = a.pop();
                  return (
                    t && a.push(~~(255 * i)),
                    "#" +
                      e
                        .map(a, function (e) {
                          return (
                            (e = (e || 0).toString(16)),
                            1 === e.length ? "0" + e : e
                          );
                        })
                        .join("")
                  );
                },
                toString: function () {
                  return 0 === this._rgba[3]
                    ? "transparent"
                    : this.toRgbaString();
                },
              })),
              (d.fn.parse.prototype = d.fn),
              (c.hsla.to = function (e) {
                if (null == e[0] || null == e[1] || null == e[2])
                  return [null, null, null, e[3]];
                var t,
                  a,
                  i = e[0] / 255,
                  n = e[1] / 255,
                  r = e[2] / 255,
                  o = e[3],
                  l = Math.max(i, n, r),
                  s = Math.min(i, n, r),
                  d = l - s,
                  c = l + s,
                  u = 0.5 * c;
                return (
                  (t =
                    s === l
                      ? 0
                      : i === l
                      ? (60 * (n - r)) / d + 360
                      : n === l
                      ? (60 * (r - i)) / d + 120
                      : (60 * (i - n)) / d + 240),
                  (a = 0 === d ? 0 : 0.5 >= u ? d / c : d / (2 - c)),
                  [Math.round(t) % 360, a, u, null == o ? 1 : o]
                );
              }),
              (c.hsla.from = function (e) {
                if (null == e[0] || null == e[1] || null == e[2])
                  return [null, null, null, e[3]];
                var t = e[0] / 360,
                  a = e[1],
                  i = e[2],
                  r = e[3],
                  o = 0.5 >= i ? i * (1 + a) : i + a - i * a,
                  l = 2 * i - o;
                return [
                  Math.round(255 * n(l, o, t + 1 / 3)),
                  Math.round(255 * n(l, o, t)),
                  Math.round(255 * n(l, o, t - 1 / 3)),
                  r,
                ];
              }),
              h(c, function (i, n) {
                var r = n.props,
                  o = n.cache,
                  s = n.to,
                  c = n.from;
                (d.fn[i] = function (i) {
                  if ((s && !this[o] && (this[o] = s(this._rgba)), i === t))
                    return this[o].slice();
                  var n,
                    l = e.type(i),
                    u = "array" === l || "object" === l ? i : arguments,
                    m = this[o].slice();
                  return (
                    h(r, function (e, t) {
                      var i = u["object" === l ? e : t.idx];
                      null == i && (i = m[t.idx]), (m[t.idx] = a(i, t));
                    }),
                    c ? ((n = d(c(m))), (n[o] = m), n) : d(m)
                  );
                }),
                  h(r, function (t, a) {
                    d.fn[t] ||
                      (d.fn[t] = function (n) {
                        var r,
                          o = e.type(n),
                          s =
                            "alpha" === t ? (this._hsla ? "hsla" : "rgba") : i,
                          d = this[s](),
                          c = d[a.idx];
                        return "undefined" === o
                          ? c
                          : ("function" === o &&
                              ((n = n.call(this, c)), (o = e.type(n))),
                            null == n && a.empty
                              ? this
                              : ("string" === o &&
                                  ((r = l.exec(n)),
                                  r &&
                                    (n =
                                      c +
                                      parseFloat(r[2]) *
                                        ("+" === r[1] ? 1 : -1))),
                                (d[a.idx] = n),
                                this[s](d)));
                      });
                  });
              }),
              (d.hook = function (t) {
                var a = t.split(" ");
                h(a, function (t, a) {
                  (e.cssHooks[a] = {
                    set: function (t, n) {
                      var r,
                        o,
                        l = "";
                      if (
                        "transparent" !== n &&
                        ("string" !== e.type(n) || (r = i(n)))
                      ) {
                        if (((n = d(r || n)), !m.rgba && 1 !== n._rgba[3])) {
                          for (
                            o = "backgroundColor" === a ? t.parentNode : t;
                            ("" === l || "transparent" === l) && o && o.style;

                          )
                            try {
                              (l = e.css(o, "backgroundColor")),
                                (o = o.parentNode);
                            } catch (s) {}
                          n = n.blend(
                            l && "transparent" !== l ? l : "_default"
                          );
                        }
                        n = n.toRgbaString();
                      }
                      try {
                        t.style[a] = n;
                      } catch (s) {}
                    },
                  }),
                    (e.fx.step[a] = function (t) {
                      t.colorInit ||
                        ((t.start = d(t.elem, a)),
                        (t.end = d(t.end)),
                        (t.colorInit = !0)),
                        e.cssHooks[a].set(
                          t.elem,
                          t.start.transition(t.end, t.pos)
                        );
                    });
                });
              }),
              d.hook(o),
              (e.cssHooks.borderColor = {
                expand: function (e) {
                  var t = {};
                  return (
                    h(["Top", "Right", "Bottom", "Left"], function (a, i) {
                      t["border" + i + "Color"] = e;
                    }),
                    t
                  );
                },
              }),
              (r = e.Color.names =
                {
                  aqua: "#00ffff",
                  black: "#000000",
                  blue: "#0000ff",
                  fuchsia: "#ff00ff",
                  gray: "#808080",
                  green: "#008000",
                  lime: "#00ff00",
                  maroon: "#800000",
                  navy: "#000080",
                  olive: "#808000",
                  purple: "#800080",
                  red: "#ff0000",
                  silver: "#c0c0c0",
                  teal: "#008080",
                  white: "#ffffff",
                  yellow: "#ffff00",
                  transparent: [null, null, null, 0],
                  _default: "#ffffff",
                });
          })(e),
          (function () {
            function i(e) {
              var a,
                i,
                n = e.ownerDocument.defaultView
                  ? e.ownerDocument.defaultView.getComputedStyle(e, null)
                  : e.currentStyle,
                r = {};
              if (n && n.length && n[0] && n[n[0]])
                for (i = n.length; i--; )
                  (a = n[i]),
                    "string" == typeof n[a] && (r[t.camelCase(a)] = n[a]);
              else for (a in n) "string" == typeof n[a] && (r[a] = n[a]);
              return r;
            }
            function n(e, a) {
              var i,
                n,
                r = {};
              for (i in a)
                (n = a[i]),
                  e[i] !== n &&
                    (o[i] ||
                      ((t.fx.step[i] || !isNaN(parseFloat(n))) && (r[i] = n)));
              return r;
            }
            var r = ["add", "remove", "toggle"],
              o = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1,
              };
            t.each(
              [
                "borderLeftStyle",
                "borderRightStyle",
                "borderBottomStyle",
                "borderTopStyle",
              ],
              function (a, i) {
                t.fx.step[i] = function (t) {
                  (("none" !== t.end && !t.setAttr) ||
                    (1 === t.pos && !t.setAttr)) &&
                    (e.style(t.elem, i, t.end), (t.setAttr = !0));
                };
              }
            ),
              t.fn.addBack ||
                (t.fn.addBack = function (e) {
                  return this.add(
                    null == e ? this.prevObject : this.prevObject.filter(e)
                  );
                }),
              (t.effects.animateClass = function (e, a, o, l) {
                var s = t.speed(a, o, l);
                return this.queue(function () {
                  var a,
                    o = t(this),
                    l = o.attr("class") || "",
                    d = s.children ? o.find("*").addBack() : o;
                  (d = d.map(function () {
                    var e = t(this);
                    return { el: e, start: i(this) };
                  })),
                    (a = function () {
                      t.each(r, function (t, a) {
                        e[a] && o[a + "Class"](e[a]);
                      });
                    }),
                    a(),
                    (d = d.map(function () {
                      return (
                        (this.end = i(this.el[0])),
                        (this.diff = n(this.start, this.end)),
                        this
                      );
                    })),
                    o.attr("class", l),
                    (d = d.map(function () {
                      var e = this,
                        a = t.Deferred(),
                        i = t.extend({}, s, {
                          queue: !1,
                          complete: function () {
                            a.resolve(e);
                          },
                        });
                      return this.el.animate(this.diff, i), a.promise();
                    })),
                    t.when.apply(t, d.get()).done(function () {
                      a(),
                        t.each(arguments, function () {
                          var e = this.el;
                          t.each(this.diff, function (t) {
                            e.css(t, "");
                          });
                        }),
                        s.complete.call(o[0]);
                    });
                });
              }),
              t.fn.extend({
                addClass: (function (e) {
                  return function (a, i, n, r) {
                    return i
                      ? t.effects.animateClass.call(this, { add: a }, i, n, r)
                      : e.apply(this, arguments);
                  };
                })(t.fn.addClass),
                removeClass: (function (e) {
                  return function (a, i, n, r) {
                    return arguments.length > 1
                      ? t.effects.animateClass.call(
                          this,
                          { remove: a },
                          i,
                          n,
                          r
                        )
                      : e.apply(this, arguments);
                  };
                })(t.fn.removeClass),
                toggleClass: (function (e) {
                  return function (i, n, r, o, l) {
                    return "boolean" == typeof n || n === a
                      ? r
                        ? t.effects.animateClass.call(
                            this,
                            n ? { add: i } : { remove: i },
                            r,
                            o,
                            l
                          )
                        : e.apply(this, arguments)
                      : t.effects.animateClass.call(
                          this,
                          { toggle: i },
                          n,
                          r,
                          o
                        );
                  };
                })(t.fn.toggleClass),
                switchClass: function (e, a, i, n, r) {
                  return t.effects.animateClass.call(
                    this,
                    { add: a, remove: e },
                    i,
                    n,
                    r
                  );
                },
              });
          })(),
          (function () {
            function e(e, a, i, n) {
              return (
                t.isPlainObject(e) && ((a = e), (e = e.effect)),
                (e = { effect: e }),
                null == a && (a = {}),
                t.isFunction(a) && ((n = a), (i = null), (a = {})),
                ("number" == typeof a || t.fx.speeds[a]) &&
                  ((n = i), (i = a), (a = {})),
                t.isFunction(i) && ((n = i), (i = null)),
                a && t.extend(e, a),
                (i = i || a.duration),
                (e.duration = t.fx.off
                  ? 0
                  : "number" == typeof i
                  ? i
                  : i in t.fx.speeds
                  ? t.fx.speeds[i]
                  : t.fx.speeds._default),
                (e.complete = n || a.complete),
                e
              );
            }
            function n(e) {
              return !e || "number" == typeof e || t.fx.speeds[e]
                ? !0
                : "string" != typeof e || t.effects.effect[e]
                ? t.isFunction(e)
                  ? !0
                  : "object" != typeof e || e.effect
                  ? !1
                  : !0
                : !0;
            }
            t.extend(t.effects, {
              version: "1.10.3",
              save: function (e, t) {
                for (var a = 0; a < t.length; a++)
                  null !== t[a] && e.data(i + t[a], e[0].style[t[a]]);
              },
              restore: function (e, t) {
                var n, r;
                for (r = 0; r < t.length; r++)
                  null !== t[r] &&
                    ((n = e.data(i + t[r])),
                    n === a && (n = ""),
                    e.css(t[r], n));
              },
              setMode: function (e, t) {
                return (
                  "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
                );
              },
              getBaseline: function (e, t) {
                var a, i;
                switch (e[0]) {
                  case "top":
                    a = 0;
                    break;
                  case "middle":
                    a = 0.5;
                    break;
                  case "bottom":
                    a = 1;
                    break;
                  default:
                    a = e[0] / t.height;
                }
                switch (e[1]) {
                  case "left":
                    i = 0;
                    break;
                  case "center":
                    i = 0.5;
                    break;
                  case "right":
                    i = 1;
                    break;
                  default:
                    i = e[1] / t.width;
                }
                return { x: i, y: a };
              },
              createWrapper: function (e) {
                if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                var a = {
                    width: e.outerWidth(!0),
                    height: e.outerHeight(!0),
                    float: e.css("float"),
                  },
                  i = t("<div></div>")
                    .addClass("ui-effects-wrapper")
                    .css({
                      fontSize: "100%",
                      background: "transparent",
                      border: "none",
                      margin: 0,
                      padding: 0,
                    }),
                  n = { width: e.width(), height: e.height() },
                  r = document.activeElement;
                try {
                  r.id;
                } catch (o) {
                  r = document.body;
                }
                return (
                  e.wrap(i),
                  (e[0] === r || t.contains(e[0], r)) && t(r).focus(),
                  (i = e.parent()),
                  "static" === e.css("position")
                    ? (i.css({ position: "relative" }),
                      e.css({ position: "relative" }))
                    : (t.extend(a, {
                        position: e.css("position"),
                        zIndex: e.css("z-index"),
                      }),
                      t.each(
                        ["top", "left", "bottom", "right"],
                        function (t, i) {
                          (a[i] = e.css(i)),
                            isNaN(parseInt(a[i], 10)) && (a[i] = "auto");
                        }
                      ),
                      e.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto",
                      })),
                  e.css(n),
                  i.css(a).show()
                );
              },
              removeWrapper: function (e) {
                var a = document.activeElement;
                return (
                  e.parent().is(".ui-effects-wrapper") &&
                    (e.parent().replaceWith(e),
                    (e[0] === a || t.contains(e[0], a)) && t(a).focus()),
                  e
                );
              },
              setTransition: function (e, a, i, n) {
                return (
                  (n = n || {}),
                  t.each(a, function (t, a) {
                    var r = e.cssUnit(a);
                    r[0] > 0 && (n[a] = r[0] * i + r[1]);
                  }),
                  n
                );
              },
            }),
              t.fn.extend({
                effect: function () {
                  function a(e) {
                    function a() {
                      t.isFunction(r) && r.call(n[0]), t.isFunction(e) && e();
                    }
                    var n = t(this),
                      r = i.complete,
                      l = i.mode;
                    (n.is(":hidden") ? "hide" === l : "show" === l)
                      ? (n[l](), a())
                      : o.call(n[0], i, a);
                  }
                  var i = e.apply(this, arguments),
                    n = i.mode,
                    r = i.queue,
                    o = t.effects.effect[i.effect];
                  return t.fx.off || !o
                    ? n
                      ? this[n](i.duration, i.complete)
                      : this.each(function () {
                          i.complete && i.complete.call(this);
                        })
                    : r === !1
                    ? this.each(a)
                    : this.queue(r || "fx", a);
                },
                show: (function (t) {
                  return function (a) {
                    if (n(a)) return t.apply(this, arguments);
                    var i = e.apply(this, arguments);
                    return (i.mode = "show"), this.effect.call(this, i);
                  };
                })(t.fn.show),
                hide: (function (t) {
                  return function (a) {
                    if (n(a)) return t.apply(this, arguments);
                    var i = e.apply(this, arguments);
                    return (i.mode = "hide"), this.effect.call(this, i);
                  };
                })(t.fn.hide),
                toggle: (function (t) {
                  return function (a) {
                    if (n(a) || "boolean" == typeof a)
                      return t.apply(this, arguments);
                    var i = e.apply(this, arguments);
                    return (i.mode = "toggle"), this.effect.call(this, i);
                  };
                })(t.fn.toggle),
                cssUnit: function (e) {
                  var a = this.css(e),
                    i = [];
                  return (
                    t.each(["em", "px", "%", "pt"], function (e, t) {
                      a.indexOf(t) > 0 && (i = [parseFloat(a), t]);
                    }),
                    i
                  );
                },
              });
          })(),
          (function () {
            var e = {};
            t.each(
              ["Quad", "Cubic", "Quart", "Quint", "Expo"],
              function (t, a) {
                e[a] = function (e) {
                  return Math.pow(e, t + 2);
                };
              }
            ),
              t.extend(e, {
                Sine: function (e) {
                  return 1 - Math.cos((e * Math.PI) / 2);
                },
                Circ: function (e) {
                  return 1 - Math.sqrt(1 - e * e);
                },
                Elastic: function (e) {
                  return 0 === e || 1 === e
                    ? e
                    : -Math.pow(2, 8 * (e - 1)) *
                        Math.sin(((80 * (e - 1) - 7.5) * Math.PI) / 15);
                },
                Back: function (e) {
                  return e * e * (3 * e - 2);
                },
                Bounce: function (e) {
                  for (var t, a = 4; e < ((t = Math.pow(2, --a)) - 1) / 11; );
                  return (
                    1 / Math.pow(4, 3 - a) -
                    7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                  );
                },
              }),
              t.each(e, function (e, a) {
                (t.easing["easeIn" + e] = a),
                  (t.easing["easeOut" + e] = function (e) {
                    return 1 - a(1 - e);
                  }),
                  (t.easing["easeInOut" + e] = function (e) {
                    return 0.5 > e ? a(2 * e) / 2 : 1 - a(-2 * e + 2) / 2;
                  });
              });
          })();
      })(e),
      e
    );
  }),
  define("jquery/effects/fade", ["jquery/effects"], function (e) {
    return (
      (function (e) {
        e.effects.effect.fade = function (t, a) {
          var i = e(this),
            n = e.effects.setMode(i, t.mode || "toggle");
          i.animate(
            { opacity: n },
            { queue: !1, duration: t.duration, easing: t.easing, complete: a }
          );
        };
      })(e),
      e
    );
  }),
  define("jquery/effects/slide", ["jquery/effects"], function (e) {
    return (
      (function (e) {
        e.effects.effect.slide = function (t, a) {
          var i,
            n = e(this),
            r = [
              "position",
              "top",
              "bottom",
              "left",
              "right",
              "width",
              "height",
            ],
            o = e.effects.setMode(n, t.mode || "show"),
            l = "show" === o,
            s = t.direction || "left",
            d = "up" === s || "down" === s ? "top" : "left",
            c = "up" === s || "left" === s,
            u = {};
          e.effects.save(n, r),
            n.show(),
            (i =
              t.distance || n["top" === d ? "outerHeight" : "outerWidth"](!0)),
            e.effects.createWrapper(n).css({ overflow: "hidden" }),
            l && n.css(d, c ? (isNaN(i) ? "-" + i : -i) : i),
            (u[d] = (l ? (c ? "+=" : "-=") : c ? "-=" : "+=") + i),
            n.animate(u, {
              queue: !1,
              duration: t.duration,
              easing: t.easing,
              complete: function () {
                "hide" === o && n.hide(),
                  e.effects.restore(n, r),
                  e.effects.removeWrapper(n),
                  a();
              },
            });
        };
      })(e),
      e
    );
  }),
  define(
    "jquery/ui/widget",
    ["jquery", "jquery/ui/core", "jquery/ui/version"],
    function (e) {
      return (
        (function (e, t) {
          var a = 0,
            i = Array.prototype.slice;
          return (
            (e.cleanData = (function (t) {
              return function (a) {
                var i, n, r;
                for (r = 0; null != (n = a[r]); r++)
                  try {
                    (i = e._data(n, "events")),
                      i && i.remove && e(n).triggerHandler("remove");
                  } catch (o) {}
                t(a);
              };
            })(e.cleanData)),
            (e.widget = function (t, a, i) {
              var n,
                r,
                o,
                l = {},
                s = t.split(".")[0];
              t = t.split(".")[1];
              var d = s + "-" + t;
              return (
                i || ((i = a), (a = e.Widget)),
                e.isArray(i) && (i = e.extend.apply(null, [{}].concat(i))),
                (e.expr[":"][d.toLowerCase()] = function (t) {
                  return !!e.data(t, d);
                }),
                (e[s] = e[s] || {}),
                (n = e[s][t]),
                (r = e[s][t] =
                  function (e, t) {
                    return this._createWidget
                      ? (arguments.length && this._createWidget(e, t), void 0)
                      : new r(e, t);
                  }),
                e.extend(r, n, {
                  version: i.version,
                  _proto: e.extend({}, i),
                  _childConstructors: [],
                }),
                (o = new a()),
                (o.options = e.widget.extend({}, o.options)),
                e.each(i, function (t, i) {
                  return e.isFunction(i)
                    ? ((l[t] = (function () {
                        function e() {
                          return a.prototype[t].apply(this, arguments);
                        }
                        function n(e) {
                          return a.prototype[t].apply(this, e);
                        }
                        return function () {
                          var t,
                            a = this._super,
                            r = this._superApply;
                          return (
                            (this._super = e),
                            (this._superApply = n),
                            (t = i.apply(this, arguments)),
                            (this._super = a),
                            (this._superApply = r),
                            t
                          );
                        };
                      })()),
                      void 0)
                    : ((l[t] = i), void 0);
                }),
                (r.prototype = e.widget.extend(
                  o,
                  { widgetEventPrefix: n ? o.widgetEventPrefix || t : t },
                  l,
                  {
                    constructor: r,
                    namespace: s,
                    widgetName: t,
                    widgetFullName: d,
                  }
                )),
                n
                  ? (e.each(n._childConstructors, function (t, a) {
                      var i = a.prototype;
                      e.widget(i.namespace + "." + i.widgetName, r, a._proto);
                    }),
                    delete n._childConstructors)
                  : a._childConstructors.push(r),
                e.widget.bridge(t, r),
                r
              );
            }),
            (e.widget.extend = function (a) {
              for (
                var n, r, o = i.call(arguments, 1), l = 0, s = o.length;
                s > l;
                l++
              )
                for (n in o[l])
                  (r = o[l][n]),
                    o[l].hasOwnProperty(n) &&
                      r !== t &&
                      (a[n] = e.isPlainObject(r)
                        ? e.isPlainObject(a[n])
                          ? e.widget.extend({}, a[n], r)
                          : e.widget.extend({}, r)
                        : r);
              return a;
            }),
            (e.widget.bridge = function (a, n) {
              var r = n.prototype.widgetFullName || a;
              e.fn[a] = function (o) {
                var l = "string" == typeof o,
                  s = i.call(arguments, 1),
                  d = this;
                return (
                  l
                    ? this.length || "instance" !== o
                      ? this.each(function () {
                          var i,
                            n = e.data(this, r);
                          return "instance" === o
                            ? ((d = n), !1)
                            : n
                            ? e.isFunction(n[o]) && "_" !== o.charAt(0)
                              ? ((i = n[o].apply(n, s)),
                                i !== n && i !== t
                                  ? ((d =
                                      i && i.jquery ? d.pushStack(i.get()) : i),
                                    !1)
                                  : void 0)
                              : e.error(
                                  "no such method '" +
                                    o +
                                    "' for " +
                                    a +
                                    " widget instance"
                                )
                            : e.error(
                                "cannot call methods on " +
                                  a +
                                  " prior to initialization; " +
                                  "attempted to call method '" +
                                  o +
                                  "'"
                              );
                        })
                      : (d = t)
                    : (s.length &&
                        (o = e.widget.extend.apply(null, [o].concat(s))),
                      this.each(function () {
                        var t = e.data(this, r);
                        t
                          ? (t.option(o || {}), t._init && t._init())
                          : e.data(this, r, new n(o, this));
                      })),
                  d
                );
              };
            }),
            (e.Widget = function () {}),
            (e.Widget._childConstructors = []),
            (e.Widget.prototype = {
              widgetName: "widget",
              widgetEventPrefix: "",
              defaultElement: "<div>",
              options: { classes: {}, disabled: !1, create: null },
              _createWidget: function (t, i) {
                (i = e(i || this.defaultElement || this)[0]),
                  (this.element = e(i)),
                  (this.uuid = a++),
                  (this.eventNamespace = "." + this.widgetName + this.uuid),
                  (this.bindings = e()),
                  (this.hoverable = e()),
                  (this.focusable = e()),
                  (this.classesElementLookup = {}),
                  i !== this &&
                    (e.data(i, this.widgetFullName, this),
                    this._on(!0, this.element, {
                      remove: function (e) {
                        e.target === i && this.destroy();
                      },
                    }),
                    (this.document = e(
                      i.style ? i.ownerDocument : i.document || i
                    )),
                    (this.window = e(
                      this.document[0].defaultView ||
                        this.document[0].parentWindow
                    ))),
                  (this.options = e.widget.extend(
                    {},
                    this.options,
                    this._getCreateOptions(),
                    t
                  )),
                  this._create(),
                  this.options.disabled &&
                    this._setOptionDisabled(this.options.disabled),
                  this._trigger("create", null, this._getCreateEventData()),
                  this._init();
              },
              _getCreateOptions: function () {
                return {};
              },
              _getCreateEventData: e.noop,
              _create: e.noop,
              _init: e.noop,
              destroy: function () {
                var t = this;
                this._destroy(),
                  e.each(this.classesElementLookup, function (e, a) {
                    t._removeClass(a, e);
                  }),
                  this.element
                    .off(this.eventNamespace)
                    .removeData(this.widgetFullName),
                  this.widget()
                    .off(this.eventNamespace)
                    .removeAttr("aria-disabled"),
                  this.bindings.off(this.eventNamespace);
              },
              _destroy: e.noop,
              widget: function () {
                return this.element;
              },
              option: function (a, i) {
                var n,
                  r,
                  o,
                  l = a;
                if (0 === arguments.length)
                  return e.widget.extend({}, this.options);
                if ("string" == typeof a)
                  if (
                    ((l = {}), (n = a.split(".")), (a = n.shift()), n.length)
                  ) {
                    for (
                      r = l[a] = e.widget.extend({}, this.options[a]), o = 0;
                      o < n.length - 1;
                      o++
                    )
                      (r[n[o]] = r[n[o]] || {}), (r = r[n[o]]);
                    if (((a = n.pop()), 1 === arguments.length))
                      return r[a] === t ? null : r[a];
                    r[a] = i;
                  } else {
                    if (1 === arguments.length)
                      return this.options[a] === t ? null : this.options[a];
                    l[a] = i;
                  }
                return this._setOptions(l), this;
              },
              _setOptions: function (e) {
                var t;
                for (t in e) this._setOption(t, e[t]);
                return this;
              },
              _setOption: function (e, t) {
                return (
                  "classes" === e && this._setOptionClasses(t),
                  (this.options[e] = t),
                  "disabled" === e && this._setOptionDisabled(t),
                  this
                );
              },
              _setOptionClasses: function (t) {
                var a, i, n;
                for (a in t)
                  (n = this.classesElementLookup[a]),
                    t[a] !== this.options.classes[a] &&
                      n &&
                      n.length &&
                      ((i = e(n.get())),
                      this._removeClass(n, a),
                      i.addClass(
                        this._classes({
                          element: i,
                          keys: a,
                          classes: t,
                          add: !0,
                        })
                      ));
              },
              _setOptionDisabled: function (e) {
                this._toggleClass(
                  this.widget(),
                  this.widgetFullName + "-disabled",
                  null,
                  !!e
                ),
                  e &&
                    (this._removeClass(this.hoverable, null, "ui-state-hover"),
                    this._removeClass(this.focusable, null, "ui-state-focus"));
              },
              enable: function () {
                return this._setOptions({ disabled: !1 });
              },
              disable: function () {
                return this._setOptions({ disabled: !0 });
              },
              _classes: function (t) {
                function a(a, r) {
                  var o, l;
                  for (l = 0; l < a.length; l++)
                    (o = n.classesElementLookup[a[l]] || e()),
                      (o = t.add
                        ? e(e.unique(o.get().concat(t.element.get())))
                        : e(o.not(t.element).get())),
                      (n.classesElementLookup[a[l]] = o),
                      i.push(a[l]),
                      r && t.classes[a[l]] && i.push(t.classes[a[l]]);
                }
                var i = [],
                  n = this;
                return (
                  (t = e.extend(
                    {
                      element: this.element,
                      classes: this.options.classes || {},
                    },
                    t
                  )),
                  this._on(t.element, { remove: "_untrackClassesElement" }),
                  t.keys && a(t.keys.match(/\S+/g) || [], !0),
                  t.extra && a(t.extra.match(/\S+/g) || []),
                  i.join(" ")
                );
              },
              _untrackClassesElement: function (t) {
                var a = this;
                e.each(a.classesElementLookup, function (i, n) {
                  -1 !== e.inArray(t.target, n) &&
                    (a.classesElementLookup[i] = e(n.not(t.target).get()));
                });
              },
              _removeClass: function (e, t, a) {
                return this._toggleClass(e, t, a, !1);
              },
              _addClass: function (e, t, a) {
                return this._toggleClass(e, t, a, !0);
              },
              _toggleClass: function (e, t, a, i) {
                i = "boolean" == typeof i ? i : a;
                var n = "string" == typeof e || null === e,
                  r = {
                    extra: n ? t : a,
                    keys: n ? e : t,
                    element: n ? this.element : e,
                    add: i,
                  };
                return r.element.toggleClass(this._classes(r), i), this;
              },
              _on: function (t, a, i) {
                var n,
                  r = this;
                "boolean" != typeof t && ((i = a), (a = t), (t = !1)),
                  i
                    ? ((a = n = e(a)), (this.bindings = this.bindings.add(a)))
                    : ((i = a), (a = this.element), (n = this.widget())),
                  e.each(i, function (i, o) {
                    function l() {
                      return t ||
                        (r.options.disabled !== !0 &&
                          !e(this).hasClass("ui-state-disabled"))
                        ? ("string" == typeof o ? r[o] : o).apply(r, arguments)
                        : void 0;
                    }
                    "string" != typeof o &&
                      (l.guid = o.guid = o.guid || l.guid || e.guid++);
                    var s = i.match(/^([\w:-]*)\s*(.*)$/),
                      d = s[1] + r.eventNamespace,
                      c = s[2];
                    c ? n.on(d, c, l) : a.on(d, l);
                  });
              },
              _off: function (t, a) {
                (a =
                  (a || "").split(" ").join(this.eventNamespace + " ") +
                  this.eventNamespace),
                  t.off(a).off(a),
                  (this.bindings = e(this.bindings.not(t).get())),
                  (this.focusable = e(this.focusable.not(t).get())),
                  (this.hoverable = e(this.hoverable.not(t).get()));
              },
              _delay: function (e, t) {
                function a() {
                  return ("string" == typeof e ? i[e] : e).apply(i, arguments);
                }
                var i = this;
                return setTimeout(a, t || 0);
              },
              _hoverable: function (t) {
                (this.hoverable = this.hoverable.add(t)),
                  this._on(t, {
                    mouseenter: function (t) {
                      this._addClass(
                        e(t.currentTarget),
                        null,
                        "ui-state-hover"
                      );
                    },
                    mouseleave: function (t) {
                      this._removeClass(
                        e(t.currentTarget),
                        null,
                        "ui-state-hover"
                      );
                    },
                  });
              },
              _focusable: function (t) {
                (this.focusable = this.focusable.add(t)),
                  this._on(t, {
                    focusin: function (t) {
                      this._addClass(
                        e(t.currentTarget),
                        null,
                        "ui-state-focus"
                      );
                    },
                    focusout: function (t) {
                      this._removeClass(
                        e(t.currentTarget),
                        null,
                        "ui-state-focus"
                      );
                    },
                  });
              },
              _trigger: function (t, a, i) {
                var n,
                  r,
                  o = this.options[t];
                if (
                  ((i = i || {}),
                  (a = e.Event(a)),
                  (a.type = (
                    t === this.widgetEventPrefix
                      ? t
                      : this.widgetEventPrefix + t
                  ).toLowerCase()),
                  (a.target = this.element[0]),
                  (r = a.originalEvent))
                )
                  for (n in r) n in a || (a[n] = r[n]);
                return (
                  this.element.trigger(a, i),
                  !(
                    (e.isFunction(o) &&
                      o.apply(this.element[0], [a].concat(i)) === !1) ||
                    a.isDefaultPrevented()
                  )
                );
              },
            }),
            e.each({ show: "fadeIn", hide: "fadeOut" }, function (t, a) {
              e.Widget.prototype["_" + t] = function (i, n, r) {
                "string" == typeof n && (n = { effect: n });
                var o,
                  l = n
                    ? n === !0 || "number" == typeof n
                      ? a
                      : n.effect || a
                    : t;
                (n = n || {}),
                  "number" == typeof n && (n = { duration: n }),
                  (o = !e.isEmptyObject(n)),
                  (n.complete = r),
                  n.delay && i.delay(n.delay),
                  o && e.effects && e.effects.effect[l]
                    ? i[t](n)
                    : l !== t && i[l]
                    ? i[l](n.duration, n.easing, r)
                    : i.queue(function (a) {
                        e(this)[t](), r && r.call(i[0]), a();
                      });
              };
            }),
            e.widget
          );
        })(e),
        e
      );
    }
  ),
  define(
    "jquery/ui/core",
    [
      "jquery",
      "jquery/ui/data",
      "jquery/ui/disable-selection",
      "jquery/ui/focusable",
      "jquery/ui/form",
      "jquery/ui/ie",
      "jquery/ui/keycode",
      "jquery/ui/labels",
      "jquery/ui/jquery-1-7",
      "jquery/ui/plugin",
      "jquery/ui/safe-active-element",
      "jquery/ui/safe-blur",
      "jquery/ui/scroll-parent",
      "jquery/ui/tabbable",
      "jquery/ui/unique-id",
      "jquery/ui/version",
    ],
    function (e) {
      return (function () {})(e), e;
    }
  ),
  define("jquery/ui/position", ["jquery", "jquery/ui/version"], function (e) {
    return (
      (function (e, t) {
        function a(e, t, a) {
          return [
            parseFloat(e[0]) * (m.test(e[0]) ? t / 100 : 1),
            parseFloat(e[1]) * (m.test(e[1]) ? a / 100 : 1),
          ];
        }
        function i(t, a) {
          return parseInt(e.css(t, a), 10) || 0;
        }
        function n(t) {
          var a = t[0];
          return 9 === a.nodeType
            ? {
                width: t.width(),
                height: t.height(),
                offset: { top: 0, left: 0 },
              }
            : e.isWindow(a)
            ? {
                width: t.width(),
                height: t.height(),
                offset: { top: t.scrollTop(), left: t.scrollLeft() },
              }
            : a.preventDefault
            ? { width: 0, height: 0, offset: { top: a.pageY, left: a.pageX } }
            : {
                width: t.outerWidth(),
                height: t.outerHeight(),
                offset: t.offset(),
              };
        }
        e.ui = e.ui || {};
        var r,
          o = Math.max,
          l = Math.abs,
          s = /left|center|right/,
          d = /top|center|bottom/,
          c = /[\+\-]\d+(\.[\d]+)?%?/,
          u = /^\w+/,
          m = /%$/,
          p = e.fn.position;
        (e.position = {
          scrollbarWidth: function () {
            if (r !== t) return r;
            var a,
              i,
              n = e(
                "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
              ),
              o = n.children()[0];
            return (
              e("body").append(n),
              (a = o.offsetWidth),
              n.css("overflow", "scroll"),
              (i = o.offsetWidth),
              a === i && (i = n[0].clientWidth),
              n.remove(),
              (r = a - i)
            );
          },
          getScrollInfo: function (t) {
            var a =
                t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
              i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
              n =
                "scroll" === a ||
                ("auto" === a && t.width < t.element[0].scrollWidth),
              r =
                "scroll" === i ||
                ("auto" === i && t.height < t.element[0].scrollHeight);
            return {
              width: r ? e.position.scrollbarWidth() : 0,
              height: n ? e.position.scrollbarWidth() : 0,
            };
          },
          getWithinInfo: function (t) {
            var a = e(t || window),
              i = e.isWindow(a[0]),
              n = !!a[0] && 9 === a[0].nodeType,
              r = !i && !n;
            return {
              element: a,
              isWindow: i,
              isDocument: n,
              offset: r ? e(t).offset() : { left: 0, top: 0 },
              scrollLeft: a.scrollLeft(),
              scrollTop: a.scrollTop(),
              width: a.outerWidth(),
              height: a.outerHeight(),
            };
          },
        }),
          (e.fn.position = function (t) {
            if (!t || !t.of) return p.apply(this, arguments);
            t = e.extend({}, t);
            var r,
              m,
              h,
              g,
              f,
              y,
              b = e(t.of),
              v = e.position.getWithinInfo(t.within),
              k = e.position.getScrollInfo(v),
              T = (t.collision || "flip").split(" "),
              w = {};
            return (
              (y = n(b)),
              b[0].preventDefault && (t.at = "left top"),
              (m = y.width),
              (h = y.height),
              (g = y.offset),
              (f = e.extend({}, g)),
              e.each(["my", "at"], function () {
                var e,
                  a,
                  i = (t[this] || "").split(" ");
                1 === i.length &&
                  (i = s.test(i[0])
                    ? i.concat(["center"])
                    : d.test(i[0])
                    ? ["center"].concat(i)
                    : ["center", "center"]),
                  (i[0] = s.test(i[0]) ? i[0] : "center"),
                  (i[1] = d.test(i[1]) ? i[1] : "center"),
                  (e = c.exec(i[0])),
                  (a = c.exec(i[1])),
                  (w[this] = [e ? e[0] : 0, a ? a[0] : 0]),
                  (t[this] = [u.exec(i[0])[0], u.exec(i[1])[0]]);
              }),
              1 === T.length && (T[1] = T[0]),
              "right" === t.at[0]
                ? (f.left += m)
                : "center" === t.at[0] && (f.left += m / 2),
              "bottom" === t.at[1]
                ? (f.top += h)
                : "center" === t.at[1] && (f.top += h / 2),
              (r = a(w.at, m, h)),
              (f.left += r[0]),
              (f.top += r[1]),
              this.each(function () {
                var n,
                  s,
                  d = e(this),
                  c = d.outerWidth(),
                  u = d.outerHeight(),
                  p = i(this, "marginLeft"),
                  y = i(this, "marginTop"),
                  x = c + p + i(this, "marginRight") + k.width,
                  S = u + y + i(this, "marginBottom") + k.height,
                  C = e.extend({}, f),
                  M = a(w.my, d.outerWidth(), d.outerHeight());
                "right" === t.my[0]
                  ? (C.left -= c)
                  : "center" === t.my[0] && (C.left -= c / 2),
                  "bottom" === t.my[1]
                    ? (C.top -= u)
                    : "center" === t.my[1] && (C.top -= u / 2),
                  (C.left += M[0]),
                  (C.top += M[1]),
                  (n = { marginLeft: p, marginTop: y }),
                  e.each(["left", "top"], function (a, i) {
                    e.ui.position[T[a]] &&
                      e.ui.position[T[a]][i](C, {
                        targetWidth: m,
                        targetHeight: h,
                        elemWidth: c,
                        elemHeight: u,
                        collisionPosition: n,
                        collisionWidth: x,
                        collisionHeight: S,
                        offset: [r[0] + M[0], r[1] + M[1]],
                        my: t.my,
                        at: t.at,
                        within: v,
                        elem: d,
                      });
                  }),
                  t.using &&
                    (s = function (e) {
                      var a = g.left - C.left,
                        i = a + m - c,
                        n = g.top - C.top,
                        r = n + h - u,
                        s = {
                          target: {
                            element: b,
                            left: g.left,
                            top: g.top,
                            width: m,
                            height: h,
                          },
                          element: {
                            element: d,
                            left: C.left,
                            top: C.top,
                            width: c,
                            height: u,
                          },
                          horizontal:
                            0 > i ? "left" : a > 0 ? "right" : "center",
                          vertical: 0 > r ? "top" : n > 0 ? "bottom" : "middle",
                        };
                      c > m && l(a + i) < m && (s.horizontal = "center"),
                        u > h && l(n + r) < h && (s.vertical = "middle"),
                        (s.important =
                          o(l(a), l(i)) > o(l(n), l(r))
                            ? "horizontal"
                            : "vertical"),
                        t.using.call(this, e, s);
                    }),
                  d.offset(e.extend(C, { using: s }));
              })
            );
          }),
          (e.ui.position = {
            fit: {
              left: function (e, t) {
                var a,
                  i = t.within,
                  n = i.isWindow ? i.scrollLeft : i.offset.left,
                  r = i.width,
                  l = e.left - t.collisionPosition.marginLeft,
                  s = n - l,
                  d = l + t.collisionWidth - r - n;
                t.collisionWidth > r
                  ? s > 0 && 0 >= d
                    ? ((a = e.left + s + t.collisionWidth - r - n),
                      (e.left += s - a))
                    : (e.left =
                        d > 0 && 0 >= s
                          ? n
                          : s > d
                          ? n + r - t.collisionWidth
                          : n)
                  : s > 0
                  ? (e.left += s)
                  : d > 0
                  ? (e.left -= d)
                  : (e.left = o(e.left - l, e.left));
              },
              top: function (e, t) {
                var a,
                  i = t.within,
                  n = i.isWindow ? i.scrollTop : i.offset.top,
                  r = t.within.height,
                  l = e.top - t.collisionPosition.marginTop,
                  s = n - l,
                  d = l + t.collisionHeight - r - n;
                t.collisionHeight > r
                  ? s > 0 && 0 >= d
                    ? ((a = e.top + s + t.collisionHeight - r - n),
                      (e.top += s - a))
                    : (e.top =
                        d > 0 && 0 >= s
                          ? n
                          : s > d
                          ? n + r - t.collisionHeight
                          : n)
                  : s > 0
                  ? (e.top += s)
                  : d > 0
                  ? (e.top -= d)
                  : (e.top = o(e.top - l, e.top));
              },
            },
            flip: {
              left: function (e, t) {
                var a,
                  i,
                  n = t.within,
                  r = n.offset.left + n.scrollLeft,
                  o = n.width,
                  s = n.isWindow ? n.scrollLeft : n.offset.left,
                  d = e.left - t.collisionPosition.marginLeft,
                  c = d - s,
                  u = d + t.collisionWidth - o - s,
                  m =
                    "left" === t.my[0]
                      ? -t.elemWidth
                      : "right" === t.my[0]
                      ? t.elemWidth
                      : 0,
                  p =
                    "left" === t.at[0]
                      ? t.targetWidth
                      : "right" === t.at[0]
                      ? -t.targetWidth
                      : 0,
                  h = -2 * t.offset[0];
                0 > c
                  ? ((a = e.left + m + p + h + t.collisionWidth - o - r),
                    (0 > a || a < l(c)) && (e.left += m + p + h))
                  : u > 0 &&
                    ((i =
                      e.left - t.collisionPosition.marginLeft + m + p + h - s),
                    (i > 0 || l(i) < u) && (e.left += m + p + h));
              },
              top: function (e, t) {
                var a,
                  i,
                  n = t.within,
                  r = n.offset.top + n.scrollTop,
                  o = n.height,
                  s = n.isWindow ? n.scrollTop : n.offset.top,
                  d = e.top - t.collisionPosition.marginTop,
                  c = d - s,
                  u = d + t.collisionHeight - o - s,
                  m = "top" === t.my[1],
                  p = m
                    ? -t.elemHeight
                    : "bottom" === t.my[1]
                    ? t.elemHeight
                    : 0,
                  h =
                    "top" === t.at[1]
                      ? t.targetHeight
                      : "bottom" === t.at[1]
                      ? -t.targetHeight
                      : 0,
                  g = -2 * t.offset[1];
                0 > c
                  ? ((i = e.top + p + h + g + t.collisionHeight - o - r),
                    (0 > i || i < l(c)) && (e.top += p + h + g))
                  : u > 0 &&
                    ((a =
                      e.top - t.collisionPosition.marginTop + p + h + g - s),
                    (a > 0 || l(a) < u) && (e.top += p + h + g));
              },
            },
            flipfit: {
              left: function () {
                e.ui.position.flip.left.apply(this, arguments),
                  e.ui.position.fit.left.apply(this, arguments);
              },
              top: function () {
                e.ui.position.flip.top.apply(this, arguments),
                  e.ui.position.fit.top.apply(this, arguments);
              },
            },
          }),
          e.ui.position,
          (function () {
            var t,
              a,
              i,
              n,
              r,
              o = document.getElementsByTagName("body")[0],
              l = document.createElement("div");
            (t = document.createElement(o ? "div" : "body")),
              (i = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none",
              }),
              o &&
                e.extend(i, {
                  position: "absolute",
                  left: "-1000px",
                  top: "-1000px",
                });
            for (r in i) t.style[r] = i[r];
            t.appendChild(l),
              (a = o || document.documentElement),
              a.insertBefore(t, a.firstChild),
              (l.style.cssText = "position: absolute; left: 10.7432222px;"),
              (n = e(l).offset().left),
              (e.support.offsetFractions = n > 10 && 11 > n),
              (t.innerHTML = ""),
              a.removeChild(t);
          })();
      })(e),
      e
    );
  }),
  define("jquery/ui/mouse", ["jquery/ui/widgets/mouse"], function (e) {
    return e;
  }),
  define("jquery/ui/dialog", ["jquery/ui/widgets/dialog"], function (e) {
    return e;
  }),
  define("jquery/ui/tabs", ["jquery/ui/widgets/tabs", "ep"], function (e, t) {
    return (
      e.widget("ui.tabs", e.ui.tabs, {
        _isLocal: (function () {
          t &&
            void 0 !== t.config &&
            void 0 !== t.config.debugLevel &&
            2 === t.config.debugLevel &&
            console.warn(
              "[OVERWRITTEN] $.ui.tabs._isLocal is overwritten by epages (See JQuery/Data/Public/lib/jquery/ui/tabs.js)"
            );
          var e = /#.*$/;
          return function (t) {
            if (/^#/.test(t.getAttribute("href"))) return !0;
            var a, i;
            (a = t.href.replace(e, "")), (i = location.href.replace(e, ""));
            try {
              a = decodeURIComponent(a);
            } catch (n) {}
            try {
              i = decodeURIComponent(i);
            } catch (n) {}
            return t.hash.length > 1 && a === i;
          };
        })(),
      }),
      e
    );
  }),
  define("jquery/ui/slider", ["jquery/ui/widgets/slider"], function (e) {
    return e;
  }),
  (function () {
    var e,
      t,
      a,
      i = "$pub!__i18n__",
      n = function () {
        define(i, [], function () {});
      },
      r = "jquery/i18n",
      o = function () {
        define("jquery/i18n", ["jquery", i], function (e) {
          return e;
        });
      },
      l = function (i) {
        var r = [];
        e.each(i, function (i, n) {
          t[/^[A-Z]+$/.test(n) ? "currencies" : "regions"][n] ||
            r.push(
              e.ajax({
                url: require.toUrl(a.path + "/" + n + ".js"),
                cache: !0,
                dataType: "script",
              })
            );
        }),
          e.when.apply(e, r).done(n);
      };
    require(["jquery"], function (i) {
      function n(e, t) {
        return 0 === e.indexOf(t);
      }
      function o(e, t) {
        return e.substr(e.length - t.length) === t;
      }
      function s(e, t, a) {
        for (var i = e.length; t > i; i++) e = a ? "0" + e : e + "0";
        return e;
      }
      function d(e, t) {
        return e.replace(_, function (e) {
          return t && -1 !== t.indexOf(e) ? e : "\\" + e;
        });
      }
      function c(t, a, i) {
        var n = 0 / 0,
          r = i.numberFormat,
          o = r.pattern[0];
        if (
          (new RegExp(d(r.currency.symbol), "").test(t)
            ? ((r = r.currency),
              (o = e.trim(r.pattern[0].replace(R, ""))),
              (t = t.replace(new RegExp(d(r.symbol), ""), "")))
            : new RegExp(d(r.percent.symbol), "").test(t) &&
              ((r = r.percent),
              (o = e.trim(r.pattern[0].replace(R, ""))),
              (t = t.replace(new RegExp(d(r.symbol), ""), ""))),
          (t = e.trim(t)),
          (r["+"] = i.numberFormat["+"]),
          (r["-"] = i.numberFormat["-"]),
          P.test(t))
        )
          n = parseFloat(t, a);
        else if (!a && O.test(t)) n = parseInt(t, 16);
        else {
          var l = h(t, r, o);
          "" === l[0] &&
            "-n" !== o &&
            r.pattern[2] &&
            ((o = e.trim(r.pattern[0].replace(R, ""))), (l = h(t, r, o))),
            "" === l[0] && "-n" !== o && (l = h(t, r, "-n"));
          var s = l[0],
            c = l[1];
          s = s || "+";
          var u,
            m,
            p = c.indexOf("e");
          0 > p && (p = c.indexOf("E")),
            0 > p
              ? ((m = c), (u = null))
              : ((m = c.substr(0, p)), (u = c.substr(p + 1)));
          var g,
            f,
            y = r["."],
            b = m.indexOf(y);
          0 > b
            ? ((g = m), (f = null))
            : ((g = m.substr(0, b)), (f = m.substr(b + y.length)));
          var v = r[","];
          g = g.split(v).join("");
          var k = v.replace(Z, " ");
          v !== k && (g = g.split(k).join(""));
          var T = s + g;
          if ((null !== f && (T += "." + f), null !== u)) {
            var w = h(u, r, "-n");
            T += "e" + (w[0] || "+") + w[1];
          }
          B.test(T) && (n = parseFloat(T));
        }
        return n;
      }
      function u(t, a, i) {
        var n = parseInt(a, 10);
        a = isNaN(n) ? t.decimals : n;
        for (
          var r = "\\d+(?:", o = t.pattern, l = t.groupSizes.length - 1, s = l;
          l >= 0;
          l--
        ) {
          var c = t.groupSizes[l];
          r +=
            0 === c
              ? "\\d*"
              : "(?:" +
                d(t[","]) +
                "?\\d{" +
                c +
                "})" +
                (l === s
                  ? "*"
                  : 0 === l
                  ? "{1}|(?:" + d(t[","]) + "?\\d{" + c + "})?"
                  : "?");
        }
        (r += ")"),
          (r +=
            0 === a
              ? ""
              : i
              ? d(t["."]) + "{1}\\d{" + a + "}"
              : "(?:" + d(t["."]) + "{1}\\d{0," + a + "})?");
        var u = [];
        return (
          e.each(o, function (e, t) {
            u.push(d(t).replace(X, r));
          }),
          1 === o.length && u.push("n".replace(X, r)),
          "(" + u.join("|") + ")"
        );
      }
      function m(e, t, a) {
        var i = e[1] || "";
        e = e[0];
        var n = e._parseRegExp[i];
        if (n) {
          var r = n[t];
          if (r && r.strict === a) return r;
        } else n = e._parseRegExp[i] = {};
        for (
          var o, l = t.replace(N, "\\\\$1"), s = [], c = ["^"], m = 0, p = 0;
          null !== (o = H.exec(l));

        ) {
          var h = l.slice(m, o.index);
          if (((m = H.lastIndex), (p += C(h, c)), p % 2)) c.push(o[0]);
          else {
            var g,
              f = V.exec(o[0]);
            switch (f[1]) {
              case "c":
                g = u(e.currency, f[2], a)
                  .replace(W, a ? "$1$2$3" : "\\s*$2\\s*")
                  .replace(
                    K,
                    "(?:" + d(e.currency.symbol) + ")" + (a ? "" : "?")
                  );
                break;
              case "n":
                g = u(e, f[2], a);
                break;
              case "p":
                g = u(e.percent, f[2], a)
                  .replace(G, a ? "$1$2$3" : "\\s*$2\\s*")
                  .replace(
                    Y,
                    "(?:" + d(e.percent.symbol) + ")" + (a ? "" : "?")
                  );
            }
            g && c.push(g), s.push(o[0]);
          }
        }
        C(l.slice(m), c), c.push("$");
        var y = c.join("").replace(U, "\\s+"),
          b = { regExp: y, groups: s, strict: a },
          v = (n[t] = b);
        return v;
      }
      function p(e, t, a) {
        var i = a.groupSizes,
          n = i[0],
          r = 1,
          o = Math.pow(10, t),
          l = Math.round(e * o) / o;
        isFinite(l) || (l = e), (e = l);
        var d = e + "",
          c = "",
          u = d.split($),
          m = u.length > 1 ? parseInt(u[1], 10) : 0;
        (d = u[0]),
          (u = d.split(".")),
          (d = u[0]),
          (c = u.length > 1 ? u[1] : ""),
          m > 0
            ? ((c = s(c, m, !1)), (d += c.slice(0, m)), (c = c.substr(m)))
            : 0 > m &&
              ((m = -m),
              (d = s(d, m + 1)),
              (c = d.slice(-m, d.length) + c),
              (d = d.slice(0, -m))),
          (c = t > 0 ? a["."] + (c.length > t ? c.slice(0, t) : s(c, t)) : "");
        for (var p = d.length - 1, h = a[","], g = ""; p >= 0; ) {
          if (0 === n || n > p)
            return d.slice(0, p + 1) + (g.length ? h + g + c : c);
          (g = d.slice(p - n + 1, p + 1) + (g.length ? h + g : "")),
            (p -= n),
            r < i.length && ((n = i[r]), r++);
        }
        return d.slice(0, p + 1) + h + g + c;
      }
      function h(e, t, a) {
        var i,
          r = t["-"],
          l = t["+"];
        switch (a) {
          case "n -":
            (r = " " + r), (l = " " + l);
          case "n-":
            o(e, r)
              ? (i = ["-", e.substr(0, e.length - r.length)])
              : o(e, l) && (i = ["+", e.substr(0, e.length - l.length)]);
            break;
          case "- n":
            (r += " "), (l += " ");
          case "-n":
            n(e, r)
              ? (i = ["-", e.substr(r.length)])
              : n(e, l) && (i = ["+", e.substr(l.length)]);
            break;
          case "(n)":
            n(e, "(") && o(e, ")") && (i = ["-", e.substr(1, e.length - 2)]);
        }
        return i || ["", e];
      }
      function g(e, t, a) {
        if (!t || "i" === t)
          return a.name.length ? e.toLocaleString() : e.toString();
        t = t || "D";
        var i,
          n = a.numberFormat,
          r = Math.abs(e),
          o = -1;
        t.length > 1 && (o = parseInt(t.slice(1), 10));
        var l,
          d = t.charAt(0).toUpperCase();
        switch (d) {
          case "D":
            (i = "n"), -1 !== o && (r = s("" + r, o, !0)), 0 > e && (r = -r);
            break;
          case "N":
            l = n;
          case "C":
            l = l || n.currency;
          case "P":
            (l = l || n.percent),
              (i = 0 > e ? l.pattern[0] : l.pattern[1] || "n"),
              -1 === o && (o = l.decimals),
              (r = p(r, o, l));
            break;
          default:
            throw "Bad number format specifier: " + d;
        }
        for (var c = ""; ; ) {
          var u = Q.lastIndex,
            m = Q.exec(i);
          if (((c += i.slice(u, m ? m.index : i.length)), !m)) break;
          switch (m[0]) {
            case "n":
              c += r;
              break;
            case "$":
              c += n.currency.symbol;
              break;
            case "-":
              J.test(r) && (c += n["-"]);
              break;
            case "%":
              c += n.percent.symbol;
          }
        }
        return c;
      }
      function f(e, t, a) {
        var i, n, r;
        if (t) {
          if (("string" == typeof t && (t = [t]), t.length))
            for (var o = 0, l = t.length; l > o; o++) {
              var s = t[o];
              if (s && (i = E(e, s, a))) break;
            }
        } else {
          r = a.calendar.patterns;
          for (n in r) if ((i = E(e, r[n], a))) break;
        }
        return i || null;
      }
      function y(e, t, a) {
        return t > e || e > a;
      }
      function b(e, t) {
        var a = new Date(),
          i = v(a);
        if (100 > t) {
          var n = e.twoDigitYearMax;
          n =
            "string" == typeof n
              ? (new Date().getFullYear() % 100) + parseInt(n, 10)
              : n;
          var r = w(a, e, i);
          (t += r - (r % 100)), t > n && (t -= 100);
        }
        return t;
      }
      function v(e, t) {
        if (!t) return 0;
        for (var a, i = e.getTime(), n = 0, r = t.length; r > n; n++)
          if (((a = t[n].start), null === a || i >= a)) return n;
        return 0;
      }
      function k(e) {
        return e.split(" ").join(" ").toUpperCase();
      }
      function T(e) {
        for (var t = [], a = 0, i = e.length; i > a; a++) t[a] = k(e[a]);
        return t;
      }
      function w(e, t, a, i) {
        var n = e.getFullYear();
        return !i && t.eras && (n -= t.eras[a].offset), n;
      }
      function x(t, a, i) {
        var n,
          r = t.days,
          o = t._upperDays;
        return (
          o ||
            (t._upperDays = o = [T(r.names), T(r.namesAbbr), T(r.namesShort)]),
          (a = k(a)),
          i
            ? ((n = e.inArray(a, o[1])), -1 === n && (n = e.inArray(a, o[2])))
            : (n = e.inArray(a, o[0])),
          n
        );
      }
      function S(t, a, i) {
        var n = t.months,
          r = t.monthsGenitive || t.months,
          o = t._upperMonths,
          l = t._upperMonthsGen;
        o ||
          ((t._upperMonths = o = [T(n.names), T(n.namesAbbr)]),
          (t._upperMonthsGen = l = [T(r.names), T(r.namesAbbr)])),
          (a = k(a));
        var s = e.inArray(a, i ? o[1] : o[0]);
        return 0 > s && (s = e.inArray(a, i ? l[1] : l[0])), s;
      }
      function C(e, t) {
        for (var a = 0, i = !1, n = 0, r = e.length; r > n; n++) {
          var o = e.charAt(n);
          switch (o) {
            case "'":
              i ? t.push('"') : a++, (i = !1);
              break;
            case "\\":
              i && t.push("\\"), (i = !i);
              break;
            default:
              t.push(o), (i = !1);
          }
        }
        return a;
      }
      function M(e, t) {
        t = t || "F";
        var a,
          i = e.patterns,
          n = t.length;
        if (1 === n) {
          if (((a = i[t]), !a)) throw "Invalid date format string '" + t + "'.";
          t = a;
        } else 2 === n && "%" === t.charAt(0) && (t = t.charAt(1));
        return t;
      }
      function A(t, a, i) {
        var n = t._parseRegExp;
        if (n) {
          var r = n[a];
          if (r && r.strict === i) return r;
        } else t._parseRegExp = n = {};
        for (
          var o,
            l = M(t, a).replace(N, "\\\\$1"),
            s = ["^"],
            c = [],
            u = 0,
            m = 0;
          null !== (o = z.exec(l));

        ) {
          var p = l.slice(u, o.index);
          if (((u = z.lastIndex), (m += C(p, s)), m % 2)) s.push(o[0]);
          else {
            var h,
              g = o[0],
              f = g.length,
              y = function () {
                var e = s.length - 1;
                " " !== s[e] || i || (s[e] = "\\s?");
              },
              b = function (t, a) {
                var i = [];
                return (
                  e.each(t, function (t, n) {
                    a && (n = n[a]),
                      n && "string" === e.type(n) && i.push(d(n));
                  }),
                  i.length > 0 ? "(" + i.join("|") + ")" : ""
                );
              };
            switch (g) {
              case "dddd":
                h = i
                  ? b(t.days.names)
                  : b(e.merge(t.days.names, t.days.namesAbbr));
                break;
              case "ddd":
                h = i
                  ? b(t.days.namesAbbr)
                  : b(e.merge(t.days.names, t.days.namesAbbr));
                break;
              case "MMMM":
                h = i
                  ? b(t.months.names)
                  : b(e.merge(t.months.names, t.months.namesAbbr));
                break;
              case "MMM":
                h = i
                  ? b(t.months.namesAbbr)
                  : b(e.merge(t.months.names, t.months.namesAbbr));
                break;
              case "gg":
              case "g":
                y(), (h = b(t.eras, "name"));
                break;
              case "tt":
              case "t":
                y(), (h = b(e.merge(t.AM || [], t.PM || [])));
                break;
              case "f":
              case "ff":
              case "fff":
                h = "(\\d{" + f + "})";
                break;
              case "d":
                h = i
                  ? "([1-9]{1}|[1-2]{1}\\d{1}|3[0-1]{1})"
                  : "(0?[1-9]{1}|[1-2]{1}\\d{1}|3[0-1]{1})";
                break;
              case "dd":
                h = i
                  ? "(0[1-9]{1}|[1-2]{1}\\d{1}|3[0-1]{1})"
                  : "(0?[1-9]{1}|[1-2]{1}\\d{1}|3[0-1]{1})";
                break;
              case "M":
                h = i ? "([1-9]{1}|1[0-2]{1})" : "(0?[1-9]{1}|1[0-2]{1})";
                break;
              case "MM":
                h = i ? "(0[1-9]{1}|1[0-2]{1})" : "(0?[1-9]{1}|1[0-2]{1})";
                break;
              case "y":
              case "yy":
                h = i ? "(\\d{2})" : "(\\d{2}|\\d{4})";
                break;
              case "yyyy":
                h = "(\\d{4})";
                break;
              case "h":
                h = i ? "([1-9]{1}|1[0-2]{1})" : "(0?[1-9]{1}|1[0-2]{1})";
                break;
              case "hh":
                h = i ? "(0[1-9]{1}|1[0-2]{1})" : "(0?[1-9]{1}|1[0-2]{1})";
                break;
              case "H":
                h = i
                  ? "(\\d{1}|1\\d{1}|2[0-3]{1})"
                  : "([0-1]?\\d{1}|2[0-3]{1})";
                break;
              case "HH":
                h = i
                  ? "(0\\d{1}|1\\d{1}|2[0-3]{1})"
                  : "([0-1]?\\d{1}|2[0-3]{1})";
                break;
              case "m":
                h = i ? "(\\d{1}|[1-5]{1}\\d{1})" : "([0-5]?\\d{1})";
                break;
              case "mm":
                h = i ? "([0-5]{1}\\d{1})" : "([0-5]?\\d{1})";
                break;
              case "s":
                h = i ? "(\\d{1}|[1-5]{1}\\d{1})" : "([0-5]?\\d{1})";
                break;
              case "ss":
                h = i ? "([0-5]{1}\\d{1})" : "([0-5]?\\d{1})";
                break;
              case "zz":
              case "z":
                h = "([+-]?\\d\\d?)";
                break;
              case "zzz":
                h = "([+-]?\\d\\d?:\\d{2})";
                break;
              case "W":
                h = "([1-9]{1}|[2-4]{1}\\d{1}|5[0-3]{1})";
                break;
              case "/":
                h = "(\\" + t["/"] + ")";
                break;
              default:
                e.error("Invalid date format pattern '" + g + "'.");
            }
            h && s.push(h), c.push(o[0]);
          }
        }
        C(l.slice(u), s), s.push("$");
        var v = s.join("").replace(U, "\\s+"),
          k = { regExp: v, groups: c, strict: i },
          T = (n[a] = k);
        return T;
      }
      function E(t, a, i) {
        t = e.trim(t);
        var r = i.calendar,
          o = A(r, a),
          l = new RegExp(o.regExp).exec(t);
        if (null === l) return null;
        for (
          var s,
            d = o.groups,
            c = null,
            u = null,
            m = null,
            p = null,
            h = null,
            g = 0,
            f = 0,
            v = 0,
            k = 0,
            T = null,
            w = !1,
            C = 0,
            M = d.length;
          M > C;
          C++
        ) {
          var E = l[C + 1];
          if (E) {
            var q = d[C],
              L = q.length,
              D = parseInt(E, 10);
            switch (q) {
              case "dd":
              case "d":
                if (((p = D), y(p, 1, 31))) return null;
                break;
              case "MMM":
              case "MMMM":
                if (((m = S(r, E, 3 === L)), y(m, 0, 11))) return null;
                break;
              case "M":
              case "MM":
                if (((m = D - 1), y(m, 0, 11))) return null;
                break;
              case "y":
              case "yy":
              case "yyyy":
                if (((u = 4 > L ? b(r, D) : D), y(u, 0, 9999))) return null;
                break;
              case "h":
              case "hh":
                if (((g = D), 12 === g && (g = 0), y(g, 0, 11))) return null;
                break;
              case "H":
              case "HH":
                if (((g = D), y(g, 0, 23))) return null;
                break;
              case "m":
              case "mm":
                if (((f = D), y(f, 0, 59))) return null;
                break;
              case "s":
              case "ss":
                if (((v = D), y(v, 0, 59))) return null;
                break;
              case "tt":
              case "t":
                if (
                  ((w =
                    r.PM && (E === r.PM[0] || E === r.PM[1] || E === r.PM[2])),
                  !w &&
                    (!r.AM ||
                      (E !== r.AM[0] && E !== r.AM[1] && E !== r.AM[2])))
                )
                  return null;
                break;
              case "f":
              case "ff":
              case "fff":
                if (((k = D * Math.pow(10, 3 - L)), y(k, 0, 999))) return null;
                break;
              case "ddd":
              case "dddd":
                if (((h = x(r, E, 3 === L)), y(h, 0, 6))) return null;
                break;
              case "zzz":
                var F = E.split(/:/);
                if (2 !== F.length) return null;
                if (((s = parseInt(F[0], 10)), y(s, -12, 13))) return null;
                var I = parseInt(F[1], 10);
                if (y(I, 0, 59)) return null;
                T = 60 * s + (n(E, "-") ? -I : I);
                break;
              case "z":
              case "zz":
                if (((s = D), y(s, -12, 13))) return null;
                T = 60 * s;
                break;
              case "g":
              case "gg":
                var R = E;
                if (!R || !r.eras) return null;
                R = e.trim(R.toLowerCase());
                for (var _ = 0, j = r.eras.length; j > _; _++)
                  if (R === r.eras[_].name.toLowerCase()) {
                    c = _;
                    break;
                  }
                if (null === c) return null;
            }
          }
        }
        var P,
          O = new Date(),
          B = r.convert;
        if (
          ((P = B ? B.fromGregorian(O)[0] : O.getFullYear()),
          null === u ? (u = P) : r.eras && (u += r.eras[c || 0].offset),
          null === m && (m = 0),
          null === p && (p = 1),
          B)
        ) {
          if (((O = B.toGregorian(u, m, p)), null === O)) return null;
        } else {
          if ((O.setFullYear(u, m, p), O.getDate() !== p)) return null;
          if (null !== h && O.getDay() !== h) return null;
        }
        if ((w && 12 > g && (g += 12), O.setHours(g, f, v, k), null !== T)) {
          var z = O.getMinutes() - (T + O.getTimezoneOffset());
          O.setHours(O.getHours() + parseInt(z / 60, 10), z % 60);
        }
        return O;
      }
      function q(t, a, i) {
        function n(e, t) {
          var a,
            i = e + "";
          return t > 1 && i.length < t
            ? ((a = b[t - 2] + i), a.substr(a.length - t, t))
            : (a = i);
        }
        function r() {
          return g || f ? g : ((g = j.test(a)), (f = !0), g);
        }
        function o(e, t) {
          if (y) return y[t];
          switch (t) {
            case 0:
              return e.getFullYear();
            case 1:
              return e.getMonth();
            case 2:
              return e.getDate();
          }
        }
        var l,
          s = i.calendar,
          d = s.convert;
        if (!a || !a.length || "i" === a) {
          if (i && i.name.length)
            if (d) l = q(t, s.patterns.F, i);
            else {
              var c = new Date(t.getTime()),
                u = v(t, s.eras);
              c.setFullYear(w(t, s, u)), (l = c.toLocaleString());
            }
          else l = t.toString();
          return l;
        }
        var m = s.eras,
          p = "s" === a;
        (a = M(s, a)), (l = []);
        var h,
          g,
          f,
          y,
          b = ["0", "00", "000"],
          k = 0;
        for (!p && d && (y = d.fromGregorian(t)); ; ) {
          var T = z.lastIndex,
            x = z.exec(a),
            S = a.slice(T, x ? x.index : a.length);
          if (((k += C(S, l)), !x)) break;
          if (k % 2) l.push(x[0]);
          else {
            var A,
              E = x[0],
              L = E.length;
            switch (E) {
              case "ddd":
              case "dddd":
                (A = 3 === L ? s.days.namesAbbr : s.days.names),
                  l.push(A[t.getDay()]);
                break;
              case "d":
              case "dd":
                (g = !0), l.push(n(o(t, 2), L));
                break;
              case "MMM":
              case "MMMM":
                var D = o(t, 1);
                l.push(
                  s.monthsGenitive && r()
                    ? s.monthsGenitive[3 === L ? "namesAbbr" : "names"][D]
                    : s.months[3 === L ? "namesAbbr" : "names"][D]
                );
                break;
              case "M":
              case "MM":
                l.push(n(o(t, 1) + 1, L));
                break;
              case "y":
              case "yy":
              case "yyyy":
                (D = y ? y[0] : w(t, s, v(t, m), p)),
                  4 > L && (D %= 100),
                  l.push(n(D, L));
                break;
              case "h":
              case "hh":
                (h = t.getHours() % 12), 0 === h && (h = 12), l.push(n(h, L));
                break;
              case "H":
              case "HH":
                l.push(n(t.getHours(), L));
                break;
              case "m":
              case "mm":
                l.push(n(t.getMinutes(), L));
                break;
              case "s":
              case "ss":
                l.push(n(t.getSeconds(), L));
                break;
              case "t":
              case "tt":
                (D =
                  t.getHours() < 12
                    ? s.AM
                      ? s.AM[0]
                      : " "
                    : s.PM
                    ? s.PM[0]
                    : " "),
                  l.push(1 === L ? D.charAt(0) : D);
                break;
              case "f":
              case "ff":
              case "fff":
                l.push(n(t.getMilliseconds(), 3).substr(0, L));
                break;
              case "z":
              case "zz":
                (h = t.getTimezoneOffset() / 60),
                  l.push((0 >= h ? "+" : "-") + n(Math.floor(Math.abs(h)), L));
                break;
              case "zzz":
                (h = t.getTimezoneOffset() / 60),
                  l.push(
                    (0 >= h ? "+" : "-") +
                      n(Math.floor(Math.abs(h)), 2) +
                      ":" +
                      n(Math.abs(t.getTimezoneOffset() % 60), 2)
                  );
                break;
              case "g":
              case "gg":
                s.eras && l.push(s.eras[v(t, m)].name);
                break;
              case "/":
                l.push(s["/"]);
                break;
              case "W":
                var F = t.getYear(),
                  I = t.getMonth(),
                  R = t.getDate(),
                  _ = new Date(F, I, R),
                  P = _.getDay() || 7,
                  O = s.firstWeekMin;
                if (11 === I && R >= 35 - O && R - (35 - O) > P) return 1;
                if (0 === I && O >= R && R + (O - 1) >= P) return 1;
                0 === I && O >= R && (F -= 1),
                  l.push(
                    Math.floor(
                      (_ -
                        new Date(
                          F,
                          0,
                          O + 1 - (new Date(F, 0, O).getDay() || 7)
                        )) /
                        6048e5
                    ) + 1
                  );
                break;
              default:
                e.error("Invalid date format pattern '" + E + "'.");
            }
          }
        }
        return l.join("");
      }
      (e = i), (a = require.s.contexts._.config.config[r] || {});
      var L = [],
        D = {
          date: "d",
          dateLong: "D",
          "dateLong-time": "f",
          "dateLong-timeLong": "F",
          "date-time": "l",
          "date-timeLong": "L",
          time: "t",
          timeLong: "T",
          currency: "c",
          number: "n",
          percent: "p",
        },
        F = /[dDfFlLtTcnp]/,
        I = /[cnp]/,
        R = /\$/,
        _ = /([\.$?*|{}\(\)\[\]\\\/\+\^])/g,
        j = /([^d]|^)(d|dd)([^d]|$)/g,
        P = /^[+\-]?infinity$/i,
        O = /^0x[a-f0-9]+$/i,
        B = /^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/,
        z =
          /\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|W|zzz|zz|z|gg|g/g,
        H = /(c\d*|n\d*|p\d*)/g,
        N = /([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g,
        $ = /e/i,
        V = /(c|n|p)(\d*)/,
        U = /\s+/g,
        W = /(\s*)(\\\$)(\s*)/g,
        K = /\\\$/g,
        G = /(\s*)(%)(\s*)/g,
        Y = /%/g,
        X = /n/,
        J = /[1-9]/,
        Z = /\u00A0/g,
        Q = /n|\$|-|%/g,
        et = function (a, i) {
          var n = e.extend({}, a.settings, i),
            r = t.regions[n.region] || t.regions.en,
            o = r.numberFormat.currencies;
          if (n.currency) {
            var l = t.currencies[n.currency],
              s = o[n.currency];
            !s &&
              l &&
              ((s = r.numberFormat.currencies[n.currency] =
                e.extend({}, o[""])),
              (s.pattern = e.merge(e.merge([], s.pattern), l.pattern)),
              (s.symbol = l.symbol),
              (s.decimals = l.decimals));
          }
          return (
            (r.numberFormat.currency = o[n.currency] || o[""]),
            (r.calendar = r.calendars[n.calendar] || r.calendars.standart),
            r
          );
        },
        tt = function (e, t, a) {
          return (
            (e = D[e] || e),
            F.test(e)
              ? "string" == typeof t
                ? I.test(e)
                  ? this.parseNumber(t, 10, a)
                  : this.parseDate(t, e, a)
                : this[I.test(e) ? "formatNumber" : "formatDate"](t, e, a)
              : null
          );
        },
        at = {
          expStrDate: function (e, t, a) {
            "boolean" != typeof t && ((a = t), (t = !1));
            var i = et(this, a),
              n = A(i.calendar, e, t).regExp;
            return n.substr(1, n.length - 2);
          },
          expStrNumber: function (e, t, a) {
            "boolean" != typeof t && ((a = t), (t = !1));
            var i = et(this, a),
              n = m([i.numberFormat, (a || {}).currency], e, t).regExp;
            return n.substr(1, n.length - 2);
          },
          formatNumber: function (e, t, a) {
            var i = et(this, a);
            return g(e, t, i);
          },
          formatDate: function (e, t, a) {
            var i = et(this, a);
            return q(e, t, i);
          },
          parseNumber: function (e, t, a) {
            isNaN(t) && ((a = t), (t = 10));
            var i = et(this, a),
              n = c(e, t, i);
            return n;
          },
          parseDate: function (e, t, a) {
            var i = et(this, a),
              n = f(e, t, i);
            return n;
          },
          settings: (a = e.extend(
            {
              path: "jquery/i18n",
              region: "en",
              currency: "",
              calendar: "standard",
            },
            a
          )),
        };
      (t = e.extend(
        function (a) {
          if ("string" != typeof a) {
            var i = e.extend(
              !0,
              function () {
                return tt.apply(i, arguments);
              },
              at,
              { settings: a }
            );
            return i;
          }
          return tt.apply(t, arguments);
        },
        at,
        { regions: {}, currencies: {} }
      )),
        e.each(
          { region: t.settings.region, currency: t.settings.currency },
          function (a, i) {
            i &&
              ("array" === e.type(i) ? (t.settings[a] = i[0]) : (i = [i]),
              e.merge(L, i));
          }
        ),
        (e.i18n = t),
        (a.path = a.path.replace(/\/$/, ""));
      var it = t.regions,
        nt = (it.en = e.extend(
          !0,
          {
            name: "en",
            englishName: "English",
            nativeName: "English",
            isRTL: !1,
            language: "en",
            numberFormat: {
              _parseRegExp: {},
              pattern: ["-n"],
              decimals: 2,
              ",": ",",
              ".": ".",
              groupSizes: [3],
              "+": "+",
              "-": "-",
              percent: {
                pattern: ["-n %", "n %"],
                decimals: 2,
                groupSizes: [3],
                ",": ",",
                ".": ".",
                symbol: "%",
              },
              currencies: {
                "": {
                  pattern: ["($n)", "$n"],
                  decimals: 2,
                  groupSizes: [3],
                  ",": ",",
                  ".": ".",
                  symbol: "$",
                },
              },
            },
            calendars: {
              standard: {
                name: "Gregorian_USEnglish",
                "/": "/",
                ":": ":",
                firstDay: 0,
                days: {
                  names: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                },
                months: {
                  names: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                    "",
                  ],
                  namesAbbr: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                    "",
                  ],
                },
                AM: ["AM", "am", "AM"],
                PM: ["PM", "pm", "PM"],
                eras: [{ name: "A.D.", start: null, offset: 0 }],
                firstWeekMin: 1,
                twoDigitYearMax: 2032,
                patterns: {
                  d: "M/d/yyyy",
                  D: "dddd, MMMM dd, yyyy",
                  t: "h:mm tt",
                  T: "h:mm:ss tt",
                  l: "M/d/yyyy h:mm tt",
                  L: "M/d/yyyy h:mm:ss tt",
                  f: "dddd, MMMM dd, yyyy h:mm tt",
                  F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                  M: "MMMM dd",
                  Y: "yyyy MMMM",
                  S: "yyyy'/'MM'/'dd' 'HH':'mm':'ss",
                },
              },
            },
          },
          it.en
        ));
      (nt.calendar = nt.calendars.standard),
        (nt.numberFormat.currency = nt.numberFormat.currencies[""]),
        (t.defaults = e.extend({}, nt)),
        l(L);
    }),
      o();
  })(),
  define("ep/modify", ["jquery"], function (e) {
    function t(e, t, a) {
      var i;
      "object" == typeof t ? (i = t) : void 0 !== a && ((i = {})[t] = a),
        i && e.trigger("changeAttr", i);
    }
    var a = e.fn.attr,
      i = e.fn.removeAttr,
      n = e.event.trigger,
      r = e.expr.filters.visible,
      o = /^on/,
      l =
        /^(blur|change|click|dblclick|error|focus|keydown|keypress|keyup|load|mousedown|mousemove|mouseout|mouseover|mouseup|resize|select|unload)$/,
      s = /^(click|dblclick|mousedown|mousemove|mouseout|mouseover|mouseup)$/;
    return (
      (e.event.trigger = function (e, t, a, i) {
        if (e.dojoconnect) {
          var r,
            d = e.type;
          if (!a) return;
          if (
            (d.indexOf("!") >= 0 && (d = d.slice(0, -1)),
            d.indexOf(".") >= 0 && (d = d.split(".")[0]),
            (d = o.test(d) ? d.slice(2) : d),
            l.test(d) && !i)
          ) {
            if (a.fireEvent)
              try {
                a.fireEvent("on" + d);
              } catch (c) {}
            else
              s.test(d)
                ? ((r = document.createEvent("MouseEvents")),
                  r.initMouseEvent(
                    d,
                    !!e.canBubble,
                    !!e.cancelable,
                    window,
                    e.detail || 0,
                    e.screenX || 0,
                    e.screenY || 0,
                    e || 0,
                    e.clientY || 0,
                    !!e.ctrlKey,
                    !!e.altKey,
                    !!e.shiftKey,
                    !!e.metaKey,
                    e.button || 0,
                    e.relatedTarget || null
                  ))
                : ((r = document.createEvent("HTMLEvents")),
                  r.initEvent(d, !!e.canBubble, !!e.cancelable)),
                a.dispatchEvent(r);
            return;
          }
        }
        return n.apply(this, arguments);
      }),
      e.fn.extend({
        attr: function (i, n) {
          var r = e(this),
            o = a.apply(r, arguments);
          return t(r, i, n), o;
        },
        removeAttr: function (a) {
          var n = e(this),
            r = i.apply(n, arguments);
          return t(this, a, null), r;
        },
      }),
      e.extend(e.expr[":"], {
        invalid: function (e) {
          return (
            !!e.formInvalid && !e.disabled && ("hidden" === e.type || r(e))
          );
        },
      }),
      e
    );
  }),
  define(
    "ep",
    [
      "module",
      "jquery",
      "util/string",
      "util/legacy",
      "util/tools",
      "util/constants",
      "util/browser",
      "jquery/each",
      "jquery/mixin",
      "jquery/event/fix",
      "ep/modify",
    ],
    function (e, t, a, i, n, r) {
      var o = t(document),
        l = function (e, a) {
          return new t.fn.init(e, a, o);
        };
      t.extend(!0, l, t),
        (l.fn = t.fn = t.prototype),
        (l.config = t.extend(
          {
            debugLevel: 0,
            version: "",
            webRoot: "",
            storeWebRoot: "",
            storeRoot: "",
            storeTypeRoot: "",
            siteRoot: "",
            siteId: "0",
            baseUrl: void 0,
            iconsRoot: "",
            objectId: "0",
            viewAction: "",
            storeFrontUrl: "",
            requestProtocolAndServer: "",
            maxContentLength: "",
            currency: "",
            autoMetaparse: !0,
          },
          e.config()
        ));
      var s = Array.prototype.splice,
        d = Array.prototype.push,
        c = t.extend,
        u = t.mixin,
        m = (t.fn.ready, t.browser),
        p = /khtml/i.test(navigator.userAgent) ? "khtml" : "";
      return (
        t.each(["mozilla", "msie", "webkit", "opera"], function (e, t) {
          return m[t] ? ((p = t), !1) : void 0;
        }),
        t("html").addClass(p),
        t.extend(
          l,
          {
            extend: function () {
              return c.apply(this, arguments);
            },
            mixin: function () {
              return u.apply(this, arguments);
            },
          },
          i,
          n,
          r
        ),
        l.extend({
          deprecated: function (e, t) {
            "undefined" != typeof console &&
              (console.warn && console.warn("EP deprecated: " + e),
              t && console.trace && console.trace());
          },
          inHash: function (e, a) {
            var i;
            return t.isPlainObject(a)
              ? (t.each(a, function (t, a) {
                  return a === e ? ((i = t), !1) : void 0;
                }),
                i)
              : i;
          },
          hashToArray: function (e, a) {
            var i = [],
              n = [];
            return (
              t.each(e, function (e, t) {
                i.push(e), n.push(t);
              }),
              /^k/i.test(a) ? i : /^v/i.test(a) ? n : [i, n]
            );
          },
          arrayToHash: function (e, a) {
            a || ((a = e), (e = []));
            var i = {};
            return (
              t.each(a, function (t, a) {
                i[e[t] || t] = a;
              }),
              i
            );
          },
          insert: function (e, a, i) {
            l.deprecated(
              "use native array method '.unsplice()' instead of 'ep.insert()'",
              !0
            ),
              (i = "number" != typeof i ? e.length : i);
            var n = s.call(e, i, e.length - i);
            return (
              t.isArray(a)
                ? d.apply(e, a)
                : "object" == typeof a && "number" == typeof a.length
                ? t.merge(e, a)
                : d.call(e, a),
              t.merge(e, n)
            );
          },
          escapeExpStr: function (e, t) {
            return (
              l.deprecated(
                "'ep.escapeExpStr()' is replaced by '.escExpStr()' in module 'util/string'",
                !0
              ),
              a.escExpStr(e, t)
            );
          },
          scrunch: function (e, t, i) {
            return (
              l.deprecated(
                "'ep.scrunch()' is replaced by '.shrink()' in module 'util/string'",
                !0
              ),
              "object" == typeof t && ((i = t), (t = null)),
              i || (i = {}),
              t && (i.length = t),
              a.shrink(e, i)
            );
          },
          reverse: function (e) {
            return t.isArray(e)
              ? (l.deprecated(
                  "use native array method '.reverse()' instead of 'ep.reverse()'",
                  !0
                ),
                e.reverse())
              : (l.deprecated(
                  "'ep.reverse()' is replaced by '.reverse()' in module 'util/string'",
                  !0
                ),
                a.reverse(e));
          },
          stripTags: function (e) {
            return (
              l.deprecated(
                "'ep.stripTags()' is replaced by '.stripTags()' in module 'util/string'",
                !0
              ),
              a.stripTags(e)
            );
          },
          local: {},
        }),
        (l.fn.setDefault = function (e) {
          return (
            this.each(function (a, i) {
              var n = t(i),
                r = i.tagName.toLowerCase();
              "input" === r || "textarea" === r
                ? "radio" === i.type || "checkbox" === i.type
                  ? n.prop("checked", e).prop("defaultChecked", e)
                  : n.val(e).prop("defaultValue", e)
                : "select" === r &&
                  i.selectedIndex >= 0 &&
                  void 0 !== e &&
                  ((i.options[i.selectedIndex].defaultSelected = !1),
                  (i.value = e),
                  (i.options[i.selectedIndex].defaultSelected = !0));
            }),
            this
          );
        }),
        (window.ep = l),
        l
      );
    }
  ),
  define("ep/ajax", ["jquery", "ep", "jquery/cookie"], function (e, t) {
    return (
      e.ajaxSetup({ fileSizeMax: 1024 * (t.config.maxContentLength || 5120) }),
      t.extend({
        ajax: function (a) {
          var i,
            n = "SecToken",
            r = e.cookie();
          if (
            (a.url || (a.url = t.config.baseUrl),
            r[n] && ((a.data = a.data || {}), (a.data[n] = r[n])),
            "json" === a.dataType)
          ) {
            var o = a.beforeSend;
            e.extend(a, {
              beforeSend: function (e, t) {
                e.setRequestHeader("Accept", "application/json"), o && o(e, t);
              },
            });
            var l = a.success,
              s = a.error,
              d = a.complete;
            (a.success = a.error = a.complete = void 0), (i = e.ajax(a));
            var c = a.context || i,
              u = e.Deferred(),
              d = e.Deferred(),
              m = i.done,
              p = i.fail;
            m(function (e, t, a) {
              if (e && e.Errors) {
                var i = e.Errors;
                (a.status = 400),
                  (a.statusText = t = "error"),
                  u.rejectWith(c, [a, t, i]);
              } else u.resolveWith(c, [e, t, a]);
            }),
              p(function (e, t, a) {
                u.rejectWith(c, [e, t, a]);
              }),
              u.always(function () {
                d.resolveWith(c, [i]);
              }),
              (i.done = function () {
                return u.done.apply(u, arguments), i;
              }),
              (i.fail = function () {
                return u.fail.apply(u, arguments), i;
              }),
              (i.always = function () {
                return d.done.apply(d, arguments), i;
              }),
              l && i.done(l),
              s && i.fail(s),
              d && i.always(d);
          } else i = e.ajax(a);
          return i;
        },
      }),
      t
    );
  }),
  define("ep/sslswitch", ["jquery", "ep", "jquery/cookie"], function (e, t) {
    return (
      (t.sslSwitch = {
        handles: [],
        controller: function (a) {
          var i,
            n = e(this),
            r = n.filter("form"),
            o = "SecToken";
          r.length ||
            ((r = e('<form method="post" action="' + n.attr("href") + '"/>')),
            (i = e.cookie()),
            i[o] &&
              0 === r.find("input[name='" + o + "']").length &&
              r.append(
                '<input type="hidden" name="' + o + '" value="' + i[o] + '" />'
              ),
            r.appendTo("body")),
            e.each(t.sslSwitch.handles, function (e, t) {
              t(a, r);
            }),
            a.isDefaultPrevented() ||
              (a.preventDefault(), t.sslSwitch.submit(r, !0));
        },
        addHandle: function (e) {
          t.sslSwitch.handles.push(e);
        },
        submit: function (e) {
          arguments[1] ? e[0].submit() : e.trigger("submit");
        },
      }),
      e(document)
        .on("click", "a.SSLSwitch", t.sslSwitch.controller)
        .on("submit", "form.SSLSwitch", t.sslSwitch.controller),
      t
    );
  }),
  define("ep/color", ["jquery", "ep"], function (e, t) {
    var a = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "00ffff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000000",
        blanchedalmond: "ffebcd",
        blue: "0000ff",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "00ffff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgrey: "a9a9a9",
        darkgreen: "006400",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "ff00ff",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        grey: "808080",
        green: "008000",
        greenyellow: "adff2f",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgrey: "d3d3d3",
        lightgreen: "90ee90",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "778899",
        lightslategrey: "778899",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "00ff00",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "ff00ff",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370d8",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "d87093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        red: "ff0000",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "ffffff",
        whitesmoke: "f5f5f5",
        yellow: "ffff00",
        yellowgreen: "9acd32",
      },
      i = null,
      n = function () {
        i = {};
        for (var e in a) i[a[e]] = e;
      },
      r = function (e) {
        return (e = parseInt(e, 10).toString(16)), e.length < 2 ? "0" + e : e;
      };
    return (
      e.extend((t.color = {}), {
        rgbToHex: function (e) {
          return 0 === e.a ? "transparent" : r(e.r) + r(e.g) + r(e.b);
        },
        rgbToHsb: function (e) {
          var t = Math.min(Math.min(e.r, e.g), e.b),
            a = Math.max(Math.max(e.r, e.g), e.b),
            i = a - t,
            n = 0,
            r = 0,
            o = 0;
          return (
            0 !== a && ((n = 100 * (i / a)), (r = 100 * (a / 255))),
            0 !== i &&
              ((o =
                e.r === a
                  ? (e.g - e.b) / i
                  : e.g === a
                  ? 2 + (e.b - e.r) / i
                  : 4 + (e.r - e.g) / i),
              (o = 60 * o),
              (o = 0 > o ? o + 360 : o)),
            { h: Math.round(o), s: Math.round(n), b: Math.round(r) }
          );
        },
        rgbToName: function (e) {
          var t = this.rgbToHex(e);
          return this.hexToName(t);
        },
        hexToRgb: function (e) {
          e = e.toUpperCase();
          var t;
          return /^(transparent|none)$/.test(e)
            ? { r: 255, g: 255, b: 255, a: 0 }
            : ((e = "#" === e.charAt(0) ? e.substring(1, e.length) : e),
              (t =
                6 === e.length
                  ? {
                      r: parseInt(e.substring(0, 2), 16),
                      g: parseInt(e.substring(2, 4), 16),
                      b: parseInt(e.substring(4, 6), 16),
                      a: 1,
                    }
                  : 3 === e.length
                  ? {
                      r: parseInt(e.substring(0, 1) + e.substring(0, 1), 16),
                      g: parseInt(e.substring(1, 2) + e.substring(1, 2), 16),
                      b: parseInt(e.substring(2, 3) + e.substring(2, 3), 16),
                      a: 1,
                    }
                  : { r: 255, g: 255, b: 255, a: 1 }),
              (t.r = isNaN(t.r) ? 0 : Math.round(t.r)),
              (t.g = isNaN(t.g) ? 0 : Math.round(t.g)),
              (t.b = isNaN(t.b) ? 0 : Math.round(t.b)),
              t);
        },
        hexToHsb: function (e) {
          return this.rgbToHsb(this.hexToRgb(e));
        },
        hexToName: function (e) {
          return (
            (e = "#" === e.charAt(0) ? e.substring(1, e.length) : e),
            i || n(),
            i[e]
          );
        },
        hsbToRgb: function (e) {
          var t = 0,
            a = 0,
            i = 0,
            n = e.h / 60,
            r = e.s / 100,
            o = e.b / 100;
          if (0 === r) t = a = i = o;
          else {
            var l = parseInt(n, 10),
              s = o * (1 - r),
              d = o * (1 - r * (n - l)),
              c = o * (1 - r * (1 - (n - l)));
            switch (l) {
              case 0:
                (t = o), (a = c), (i = s);
                break;
              case 1:
                (t = d), (a = o), (i = s);
                break;
              case 2:
                (t = s), (a = o), (i = c);
                break;
              case 3:
                (t = s), (a = d), (i = o);
                break;
              case 4:
                (t = c), (a = s), (i = o);
                break;
              case 5:
                (t = o), (a = s), (i = d);
                break;
              case 6:
                (t = o), (a = c), (i = s);
            }
          }
          return {
            r: Math.round(255 * t),
            g: Math.round(255 * a),
            b: Math.round(255 * i),
            a: 1,
          };
        },
        hsbToHex: function (e) {
          return this.rgbToHex(this.hsbToRgb(e));
        },
        hsbToName: function (e) {
          return this.hexToName(this.hsbToHex(e));
        },
        nameToHex: function (t) {
          return (
            (t = e.trim(t.toLowerCase())),
            /^(transparent|none)$/.test(t) ? "transparent" : a[t]
          );
        },
        nameToRgb: function (e) {
          var t = this.nameToHex(e);
          return t ? this.hexToRgb(t) : t;
        },
        nameToHsb: function (e) {
          var t = this.nameToRgb(e);
          return t ? this.rgbToHsb(t) : t;
        },
        stringToHex: function (t, a) {
          t = e.trim(t.toLowerCase());
          var i, n;
          return /^(transparent|none)$/.test(t)
            ? "transparent"
            : (n = /^#?([0-9a-f]{6})$/.exec(t))
            ? n[1]
            : (n = /^#?([0-9a-f])([0-9a-f])([0-9a-f])$/.exec(t))
            ? n[1] + n[1] + n[2] + n[2] + n[3] + n[3]
            : (n =
                /^rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)$/.exec(
                  t
                ))
            ? this.rgbToHex({ r: n[1], g: n[2], b: n[3] })
            : (n =
                /^rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-1]{1}(:?\.?[0-9]{1})?)\s*\)$/.exec(
                  t
                ))
            ? this.rgbToHex({ r: n[1], g: n[2], b: n[3], a: n[4] })
            : ((i = this.nameToHex(t)), void 0 !== i || a ? i : "ffffff");
        },
        stringToRgb: function (e) {
          var t = this.stringToHex(e);
          return t ? this.hexToRgb(t) : t;
        },
        stringToHsb: function (e) {
          var t = this.stringToHex(e);
          return t ? this.hexToHsb(t) : t;
        },
        stringToName: function (e) {
          var t = this.stringToHex(e);
          return t ? this.hexToName(t) : t;
        },
      }),
      t
    );
  }),
  define(
    "ep/date",
    ["jquery", "ep", "class", "jquery/i18n"],
    function (e, t, a) {
      var i = /^(UnixTime)/,
        n = /^(Day|UnixTime)$/,
        r = /^UTC/,
        o = {};
      return (
        (o.constructor = function (e, a, i, n, r, o, l) {
          switch (arguments.length) {
            case 1:
              this.date = new Date(
                /^-?\d+$/.test(e)
                  ? parseInt(e, 10)
                  : e instanceof Date || e instanceof t.Date
                  ? e.getTime()
                  : e
              );
              break;
            case 3:
              this.date = new Date(e, a, i);
              break;
            case 6:
              this.date = new Date(e, a, i, n, r, o);
              break;
            case 7:
              this.date = new Date(e, a, i, n, r, o, l);
              break;
            default:
              this.date = new Date();
          }
          return this;
        }),
        e.extend(o, {
          clone: function () {
            return new t.Date(this.getTime());
          },
          getFormat: function (t, a) {
            return e.i18n.formatDate(this.date, t, a);
          },
          setFormat: function (t, a, i) {
            var n = e.i18n.parseDate(t, a, i);
            return n && this.setTime(n.getTime()), this;
          },
          isLeapYear: function () {
            var e = this.getFullYear();
            return !(e % 400 && (e % 4 || !(e % 100)));
          },
          getMonthLength: function () {
            var e = this.getMonth(),
              t = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            return 1 === e && this.isLeapYear() ? 29 : t[e];
          },
          setFirstMonthDay: function () {
            return this.setDate(1), this;
          },
          setLastMonthDay: function () {
            return this.setDate(this.getMonthLength()), this;
          },
          setDay: function (e) {
            return this.setDate(this.getDate() + (e - this.getDay())), this;
          },
          getUnixTime: function () {
            return Math.round(this.getTime() / 1e3);
          },
          setUnixTime: function (e) {
            return this.setTime(1e3 * e), this;
          },
          getUTCUnixTime: function () {
            return this.getUnixTime() - 60 * this.getTimezoneOffset();
          },
          setUTCUnixTime: function (e) {
            return (
              this.setUnixTime(e),
              this.addTime(6e4 * this.getTimezoneOffset()),
              this
            );
          },
        }),
        e.each({ Date: "Hours", Time: "FullYear" }, function (e, t) {
          o["compare" + e] = function (e) {
            e || (e = new Date());
            var a = new Date(this.getTime()),
              i = new Date(e.getTime());
            a["set" + t](0, 0, 0, 0), i["set" + t](0, 0, 0, 0);
            var n = a.getTime(),
              r = i.getTime();
            return n > r ? 1 : r > n ? -1 : 0;
          };
        }),
        e.each(
          ["toGMTString", "toLocaleString", "getTimezoneOffset"],
          function (e, t) {
            o[t] = function () {
              return this.date[t]();
            };
          }
        ),
        e.each(
          {
            FullYear: 31536e6,
            Month: 2592e6,
            Day: 6048e5,
            Date: 864e5,
            Hours: 36e5,
            Minutes: 6e4,
            Seconds: 1e3,
            Milliseconds: 1,
            Time: 1,
            UTCDate: 0,
            UTCFullYear: 0,
            UTCHours: 0,
            UTCMilliseconds: 0,
            UTCMinutes: 0,
            UTCMonth: 0,
            UTCSeconds: 0,
            UnixTime: 1e3,
          },
          function (e, t) {
            i.test(e) ||
              (o["get" + e] = function () {
                return this.date["get" + e]();
              }),
              n.test(e) ||
                (o["set" + e] = function () {
                  return this.date["set" + e].apply(this.date, arguments), this;
                }),
              r.test(e) ||
                ((o["add" + e] = function (t) {
                  return this["set" + e](this["get" + e]() + t), this;
                }),
                (o["diff" + e] = function (e) {
                  return (
                    e || (e = new Date()),
                    Math.round((e.getTime() - this.getTime()) / t)
                  );
                }));
          }
        ),
        a("ep.Date", o),
        t
      );
    }
  ),
  define("ep/i18n", ["jquery", "ep", "jquery/i18n"], function (e, t) {
    return (
      e.extend((t.i18n = {}), {
        formatBytes: function (t, a, i) {
          "number" != typeof a && (i || (i = a), (a = 2));
          var n = "Byte";
          return (
            t >= 1073741824
              ? ((t /= 1073741824), (n = "GB"))
              : t >= 1048576
              ? ((t /= 1048576), (n = "MB"))
              : t >= 1024 && ((t /= 1024), (n = "kB")),
            e.i18n.formatNumber(t, "n" + a, i) + " " + n
          );
        },
      }),
      t
    );
  }),
  define(
    "ep/validate",
    ["jquery", "ep", "util/mime", "ep/color", "ep/i18n"],
    function (e, t, a) {
      var i = "NOT_VALID",
        n = function (e) {
          return !isNaN(e);
        },
        r = function (e, t) {
          return t
            ? new RegExp(
                (/^\^/.test(t) ? "" : "^") + t + (/\$$/.test(t) ? "" : "$"),
                ""
              ).test(e) || i
            : !0;
        },
        o = function (e, t) {
          return !e && t ? "REQUIRED" : !0;
        },
        l = function (t, a, i) {
          (a = 0 > a ? 0 : a), (i = 0 > i ? 0 : i);
          var r = e.trim(t).length;
          return n(a) && a > r
            ? n(i)
              ? "NOT_IN_RANGELENGTH"
              : "LOWER_THAN_MINLENGTH"
            : n(i) && r > i
            ? n(a)
              ? "NOT_IN_RANGELENGTH"
              : "GREATER_THAN_MAXLENGTH"
            : !0;
        },
        s = function (e, t, a) {
          var i = "number" != typeof e ? parseFloat(e, 10) : e;
          return n(t) && t > i
            ? n(a)
              ? "NOT_IN_RANGE"
              : "LOWER_THAN_MIN"
            : n(a) && i > a
            ? n(t)
              ? "NOT_IN_RANGE"
              : "GREATER_THAN_MAX"
            : !0;
        },
        d = {
          date: "d",
          dateLong: "D",
          "dateLong-time": "f",
          "dateLong-timeLong": "F",
          "date-time": "l",
          "date-timeLong": "L",
          time: "t",
          timeLong: "T",
          currency: "c",
          number: "n",
          percent: "p",
        };
      return (
        e.extend(e.scope("ep.validate"), {
          email: function (t, a) {
            t = e.trim(t);
            var i = e.extend({}, a || {}),
              n = o(t, i.required);
            if (
              t &&
              n === !0 &&
              ((n =
                /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(
                  t
                ) || "NO_EMAIL"),
              n === !0)
            ) {
              var r = t.split("@")[0].split(".");
              e.each(r, function (e) {
                return (
                  (n = /^[\x00-\x7F]+$/.test(r[e]) || "NO_EMAIL"),
                  "NO_EMAIL" == n ? !1 : !0
                );
              });
            }
            return n === !0 ? l(t, i.minlength, i.maxlength) : n;
          },
          url: function (t, a) {
            t = e.trim(t);
            var i = e.extend({}, a || {}),
              n = o(t, i.required);
            return (
              t &&
                n === !0 &&
                (n =
                  /^((https?|ftp):\/\/)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
                    t
                  ) || "NO_URL"),
              n === !0 ? s(t, i.minlength, i.maxlength) : n
            );
          },
          mimetype: function (t, i) {
            t = e.trim(t);
            var n = e.extend({ accept: void 0 }, i || {}),
              r = o(t, n.required);
            return (
              t &&
                r === !0 &&
                (r = /^[a-z]+\/[a-z\d\.-]+$/i.test(t) || "NO_MIME"),
              t &&
                n.accept &&
                r === !0 &&
                (r = a.mime(t, n.accept) || "MIME_NOT_ACCEPT"),
              r
            );
          },
          creditcard: function (t, a) {
            t = e.trim(t);
            var i = e.extend({}, a || {}),
              n = o(t, i.required);
            if (t && n === !0) {
              if (/[^0-9-]+/.test(t)) return !1;
              var r,
                l = 0,
                s = 0,
                d = !1;
              t = t.replace(/\D/g, "");
              for (var c = t.length - 1; c >= 0; c--)
                (r = t.charAt(c)),
                  (s = parseInt(r, 10)),
                  d && (s *= 2) > 9 && (s -= 9),
                  (l += s),
                  (d = !d);
              n = 0 === l % 10 || "NO_CREDITCARD_NUMBER";
            }
            return n;
          },
          date: function (t, a) {
            t = e.trim(t);
            var n = e.extend({ format: "d", strict: !1 }, a || {}),
              r = { region: n.region },
              l = o(t, n.required);
            if (((n.format = d[n.format] || n.format), t && l === !0)) {
              switch (!0) {
                case /^(d|D)$/.test(n.format):
                  l = "NO_DATE";
                  break;
                case /^(f|F|l|L)$/.test(n.format):
                  l = "NO_DATETIME";
                  break;
                case /^(t|T)$/.test(n.format):
                  l = "NO_TIME";
                  break;
                default:
                  l = i;
              }
              if (
                ((l =
                  new RegExp(
                    "^" + e.i18n.expStrDate(n.format, n.strict, r) + "$",
                    ""
                  ).test(t) || l),
                l === !0 && t)
              ) {
                var c = e.i18n.parseDate(t, n.format, r);
                l = c instanceof Date ? s(c.getTime(), n.min, n.max) : i;
              }
            }
            return l;
          },
          number: function (t, a) {
            t = e.trim(t);
            var n = e.extend({ format: "n", strict: !1 }, a || {}),
              r = { region: n.region, currency: n.currency },
              l = o(t, n.required);
            if (((n.format = d[n.format] || n.format), t && l === !0)) {
              var c = { n: "NO_NUMBER", c: "NO_CURRENCY", p: "NO_PERCENT" };
              n.format.replace(/^(n|c|p)\d*$/, function (e, t) {
                l = c[t] || i;
              }),
                (l =
                  new RegExp(
                    "^" + e.i18n.expStrNumber(n.format, n.strict, r) + "$",
                    ""
                  ).test(t) || l);
            }
            if (t && l === !0) {
              var u = e.i18n.parseNumber(t, 10, r);
              l = isNaN(u) ? i : s(u, n.min, n.max);
            }
            return l;
          },
          cssColor: function (a) {
            return (
              (a = e.trim(a)),
              void 0 !== t.color.stringToHex(a, !0) || "NO_COLOR_VALUE"
            );
          },
          cssSize: function (t, a) {
            t = e.trim(t);
            var n = e.extend({}, a || {}),
              r = o(t, n.required);
            if ((t || "" === t) && r === !0)
              switch (!0) {
                case /^[0-9]+(px|pt)$/i.test(t) ||
                  /^[0-9]*\.?[0-9]+(pc|%|mm|cm|em|in|ex)$/i.test(t) ||
                  /^[0]+$/.test(t):
                  r = !0;
                  break;
                case /^[0-9]+$/.test(t):
                  r = "NO_UNIT";
                  break;
                case "" === t:
                  r = "NO_UNIT_VALUE";
                  break;
                case /^[^0-9]*\.?[^0-9]/.test(t):
                  r = "NO_CSS_NUMBER";
                  break;
                case /^[0-9]*\.[0-9]+(?:px|pt)$/i.test(t):
                  r = "FLOAT_NOT_ALLOWED";
                  break;
                case /^[0-9]*\.[0-9]$/.test(t):
                  r = "NO_UNIT";
                  break;
                case /^[0-9]*\.?[0-9]+[a-z]+$/.test(t):
                  r = "UNKNOWN_UNIT";
                  break;
                default:
                  r = i;
              }
            if (t && r === !0) {
              var l = parseFloat(t.replace(/\W+$/, ""), 10);
              r = isNaN(l) ? i : s(l, n.min, n.max);
            }
            return r;
          },
          uszip: function (t, a) {
            var i,
              n = e.extend({}, a || {}),
              r = o(t, n.required);
            if (
              (t && r === !0 && (/^[0-9]*$/.test(t) || (r = "NOT_VALID")),
              t && r === !0 && (r = l(t, n.minlength, n.maxlength)),
              t && r === !0 && n.hidden)
            )
              for (i = 0; i < n.hidden.length; i++)
                if ("" === e(n.hidden[i]).val()) {
                  r = "NO_ENTRY_SELECTED";
                  break;
                }
            return r;
          },
          youtube: function (t, a) {
            var i = e.extend({}, a || {}),
              n =
                /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|&v(?:i)?=))([^#&?]+).*/;
            return null !== n.exec(t) || (!i.required && !t.length)
              ? !0
              : "NO_VALID_VIDEO_SOURCE";
          },
          vimeo: function (t, a) {
            var i = e.extend({}, a || {}),
              n =
                /(http|https)?:\/\/(www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|)(\d+)(?:|\/\?)/g;
            return null !== n.exec(t) || (!i.required && !t.length)
              ? !0
              : "NO_VALID_VIDEO_SOURCE";
          },
          video: function (t, a) {
            var i = e.extend({}, a || {}),
              n =
                /(http|https?:\/\/)(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/,
              r = !1;
            return (
              (r = n.test(t)),
              r || (!i.required && !t.length) ? !0 : "NO_VALID_VIDEO_SOURCE"
            );
          },
          videoId: function (t, a) {
            var i,
              n,
              r = e.extend({}, a || {}),
              o = {
                vimeo: {
                  regex:
                    /(http|https)?:\/\/(www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|)(\d+)(?:|\/\?)/g,
                  idIndex: 4,
                },
                youtube: {
                  regex:
                    /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|&v(?:i)?=))([^#&?]+).*/,
                  idIndex: 1,
                },
              },
              l = !1;
            for (n in o)
              if (
                o.hasOwnProperty(n) &&
                ((i = o[n].regex.exec(t)), null !== i && i[o[n].idIndex])
              ) {
                l = !0;
                break;
              }
            return l || (!r.required && !t.length)
              ? !0
              : "NO_VALID_VIDEO_SOURCE";
          },
          pwd_epages: function (a, i) {
            var n = e.extend({}, i || {});
            return a.length >= 1
              ? a.length !== e.trim(a).length
                ? "PasswordWithSpaces"
                : a.length < 5
                ? "PasswordLength"
                : !0
              : t.validate.basic(a, n);
          },
          trim_ws: function (a, i) {
            var n,
              r = e.extend({}, i || {});
            return 0 === a.length
              ? t.validate.basic(a, r)
              : ((n = e.trim(a)), n.length >= 1 ? !0 : "NOT_VALID");
          },
          gtin: function (t, a) {
            if (
              t.length < 8 ||
              t.length > 13 ||
              (8 != t.length && 13 != t.length && 12 != t.length)
            )
              return "NO_VALID_LENGTH";
            var i,
              n,
              r,
              l,
              s = e.extend({}, a || {}),
              d = (o(t, s.required), Number(t.substring(t.length - 1))),
              c = 0;
            if (isNaN(d)) return "NO_VALID_UPC_EAN";
            for (
              i = t
                .substring(0, t.length - 1)
                .split("")
                .reverse(),
                n = 0,
                r = 0,
                l = 0;
              l < i.length;
              l++
            ) {
              if (isNaN(i[l])) return "NO_VALID_UPC_EAN";
              0 === l % 2 ? (n += 3 * Number(i[l])) : (r += Number(i[l]));
            }
            return (
              (c = 10 - ((r + n) % 10)), c === d ? !0 : "NO_VALID_CHECKSUM"
            );
          },
          isbn10: function (t, a) {
            if (((t = t.replace(/-/g, "")), /[^\dX]/gi.test(t)))
              return "INVALID_CHARACTER";
            if (((t = t.replace(/[^\dX]/gi, "")), 10 != t.length))
              return "NO_VALID_LENGTH";
            var i,
              n,
              r = e.extend({}, a || {}),
              l = (o(t, r.required), 0);
            for (
              i = t.split(""),
                "X" === i[t.length - 1].toUpperCase() && (i[t.length - 1] = 10),
                n = 0;
              n < i.length;
              n++
            )
              l += (n + 1) * parseInt(i[n]);
            return 0 === l % 11 ? !0 : "NO_VALID_ISBN";
          },
          isbn13: function (t, a) {
            if (((t = t.replace(/-/g, "")), /[^\d\-]/gi.test(t)))
              return "INVALID_CHARACTER";
            if (((t = t.replace(/[^\d]/gi, "")), 13 != t.length))
              return "NO_VALID_LENGTH";
            var i,
              n,
              r = e.extend({}, a || {}),
              l = (o(t, r.required), 0);
            for (i = t.split(""), n = 0; n < i.length - 1; n++)
              l += (0 === n % 2 ? 1 : 3) * parseInt(i[n]);
            return (10 - (l % 10)) % 10 === parseInt(i[12])
              ? !0
              : "NO_VALID_ISBN";
          },
          basic: function (t, a) {
            var i = e.extend({}, a || {}),
              n = o(t, i.required);
            return (
              t && n === !0 && (n = r(t, i.pattern)),
              t && n === !0 && (n = l(t, i.minlength, i.maxlength)),
              n
            );
          },
        }),
        t
      );
    }
  ),
  define(
    "ep/dict",
    ["jquery", "ep", "$dict!ep/dict", "jquery/dict", "jquery/tmpl"],
    function (e, t) {
      return (
        e.each(["translate", "parse"], function (t, a) {
          e.Dictionary.prototype[a + "Data"] = function (t, i) {
            return e
              .tmpl("<span>" + this[a](t) + "</span>", [i])
              .html()
              .replace(/(^|[^ ])(&nbsp;)([^ ]|$)/g, "$1 $3");
          };
        }),
        t.extend({ dict: e.dict }),
        t
      );
    }
  ),
  define("ep/debug", ["jquery", "ep", "util/scope"], function (e, t, a) {
    try {
      (window.console = window.console || {}),
        (window.console.debug = window.console.debug || function () {}),
        (window.console.log = window.console.log || function () {}),
        (window.console.warn = window.console.warn || function () {});
    } catch (i) {}
    return (
      t.extend(a("ep.debug"), {
        statistic: function (a, i) {
          var n = t.debug.statistic.data;
          if (arguments.length) {
            var r = new Date();
            (t.debug.statistic.isRunning = !0),
              i(),
              (t.debug.statistic.isRunning = !1);
            var o = new Date() - r;
            n[a] || (n[a] = { sum: 0, count: 0, min: 0, max: 0, innersum: 0 });
            var l = n[a];
            t.debug.statistic.isRunning ? (l.innersum += o) : (l.sum += o),
              l.count++,
              o > l.max && (l.max = o),
              o < l.min && (l.min = o);
          } else
            console.log("print statistic"),
              e.each(n, function (e) {
                console.log(
                  "statistic for id:",
                  e,
                  ": sum: ",
                  n[e].sum,
                  ": count: ",
                  n[e].count,
                  ": min: ",
                  n[e].min,
                  ": max: ",
                  n[e].max,
                  ": innersum: ",
                  n[e].innersum
                );
              });
        },
      }),
      t.extend(t.debug.statistic, { data: {}, isRunning: !1 }),
      t
    );
  }),
  define("ep/fn/sprite", ["jquery", "ep", "jquery/fn/class"], function (e, t) {
    var a = {
        ico_image:
          /^(image\/png|image\/jpeg|image\/jpg|image\/gif|image\/bmp|image\/vnd.microsoft.icon|image\/tiff|image\/svg+xml|image\/x-win-bitmap)$/i,
        ico_box:
          /^(application\/octet-stream|text\/x-actionscript|audio\/basic|audio\/x-wav|audio\/mpeg|audio\/x-ms-wma|audio\/ogg|audio\/flac|application\/msword|application\/x-dot|application\/vnd.ms-excel|application\/vnd.ms-powerpoint|text\/plain|text\/css|application\/javascript|application\/json|application\/xml)$/i,
        ico_file_avi: /^(video\/x-msvideo|video\/mpeg|video\/mp4)$/i,
        ico_file_wmv: /^(video\/x-ms-wmv)$/i,
        ico_file_swf: /^(video\/x-flv|application\/x-shockwave-flash)$/i,
        ico_file_mov: /^(video\/quicktime|video\/ogg)$/i,
        ico_file_rm: /^(application\/vnd.rn-realmedia)$/i,
        ico_file_ram: /^(audio\/x-pn-realaudio)$/i,
        ico_file_dcr: /^(application\/x-director)$/i,
        ico_file_pdf: /^(application\/pdf)$/i,
        ico_file_htm: /^(text\/html)$/i,
        ico_folder:
          /^(application\/zip|application\/x-rar-compressed|application\/gzip|application\/x-tar)$/i,
      },
      i = /(ep-sprite[\w\d-]*|[^\s]*ico_[^\s]*)/;
    return (
      t.fn.extend({
        addSprite: function (t, n) {
          if (/\//.test(t)) {
            var r = t;
            e.each(a, function (e, t) {
              return t.test(r) ? ((r = e), !1) : void 0;
            }),
              (t = r === t ? "unknow" : r);
          }
          return (
            (n = n || "m"),
            this.each(function () {
              e(this)
                .removeClass(i)
                .addClass(
                  "ep-sprite ep-sprite-" +
                    n +
                    (/[^\s]*ico_[^\s]*/.test(t) ? " " + t : " ep-sprite-" + t)
                );
            })
          );
        },
        removeSprite: function () {
          return this.removeClass(i);
        },
        hasSprite: function (e) {
          return this.hasClass("ep-sprite" + (e ? "-" + e : ""));
        },
      }),
      t
    );
  }),
  define("ep/fn/busy", ["jquery", "ep"], function (e, t) {
    var a = [];
    return (
      e(window).on("unload", function () {
        e(a).remove(), (a = []);
      }),
      t.fn.extend({
        busy: function (t, i) {
          var n = i && i.type ? i.type : void 0;
          return this.each(function () {
            var i = e(this),
              r = i.find("> .ep-busy");
            if ("hide" === t) {
              var o = e.data(this, "epBusyOldposition");
              "static" === o &&
                (e.removeData(this, "epBusyOldposition"),
                i.css("position", "relative")),
                r.remove();
            } else if (!r.length) {
              var o = i.css("position"),
                l = { "border-radius": i.css("border-radius") };
              if (
                ("static" === o &&
                  (e.data(this, "ep-busy-oldposition", o),
                  i.css("position", "relative")),
                (r = e("<div>")),
                a.push(r.attr("class", "ep-busy").css(l).appendTo(i)[0]),
                "dynamic" === n)
              ) {
                var s,
                  d = function () {
                    var t = i.get(0).getBoundingClientRect(),
                      a =
                        t.x > window.innerWidth || t.x < 0
                          ? "50%"
                          : (Math.min(t.x + t.width, window.innerWidth) +
                              Math.max(t.x, 0)) /
                              2 +
                            "px",
                      n =
                        t.y > window.innerHeight || t.y < 0
                          ? "50%"
                          : (Math.min(t.y + t.height, window.innerHeight) +
                              Math.max(t.y, 0)) /
                              2 +
                            "px";
                    (l = e.extend(l, {
                      "background-attachment": "fixed",
                      "background-position-x": a,
                      "background-position-y": n,
                    })),
                      r.css(l),
                      (s = void 0);
                  };
                d(),
                  e(window).on("scroll resize", function () {
                    s || (s = setTimeout(d, 50));
                  });
              }
            }
          });
        },
      }),
      t
    );
  }),
  define("$tmpl!ep/fn/progressbar", ["jquery/tmpl"], function (e) {
    e.template(
      "ep.fn.progressbar",
      '<div class="ep-progressbar ep-progressbar-root ep-progressbar-hide"><div class="ep-progressbar-percent ep-progressbar-bar"></div></div>'
    );
    var t = e.template(
      "ep/fn/progressbar",
      '<div class="ep-progressbar ep-progressbar-root ep-progressbar-hide"><div class="ep-progressbar-percent ep-progressbar-bar"></div></div>'
    );
    return function (a, i) {
      return e.tmpl(t, a, i);
    };
  }),
  define(
    "ep/fn/progressbar",
    ["jquery", "ep", "$tmpl!ep/fn/progressbar", "jquery/tmpl"],
    function (e, t, a) {
      return (
        (t.fn.progressbar = function (t) {
          var i,
            n,
            i = e(".ep-progressbar-root"),
            r = { start: 1, destroy: 2 },
            o = "ep-progressbar-hide",
            l = 500;
          switch (
            ((t = void 0 === t ? "start" : t),
            0 === i.length && ((i = a()), e("body").append(i)),
            (n = i.find(".ep-progressbar-bar")),
            n.width(0),
            r[t])
          ) {
            case 1:
              n.width("100%"),
                i.removeClass(o),
                window.setTimeout(function () {
                  i.addClass(o), n.width("0%");
                }, l);
              break;
            case 2:
              i.remove();
          }
        }),
        t
      );
    }
  ),
  define("ep/fn/contextorientation", ["jquery", "ep"], function (e, t) {
    "use strict";
    var a = /(left|center|right)/,
      i = /(top|middle|bottom)/;
    return (
      t.fn.extend({
        contextOrientation: function (t, n, r, o) {
          var l, s;
          return (
            (l = this),
            (r = r || [0, 0]),
            (s = function (n, s) {
              var d, c, u, m, p, h, g, f, y;
              switch (
                ((s = s || { top: !1, right: !1, bottom: !1, left: !1 }),
                t instanceof e.Event
                  ? ((d = { left: t.pageX, top: t.pageY }), (c = 0), (u = 0))
                  : ((t = e(t)),
                    (d = t.offset()),
                    (c = t.outerWidth()),
                    (u = t.outerHeight())),
                (m = a.exec(n)),
                (p = i.exec(n)),
                (m = m ? m[1] : ""),
                (p = p ? p[1] : ""),
                (h = e(l)),
                h.css({ top: 0, left: 0, position: "absolute" }),
                (g = h.outerWidth()),
                (f = h.outerHeight()),
                (y = d),
                m)
              ) {
                case "right":
                  y.left += c + r[0];
                  break;
                case "left":
                  y.left -= g + r[0];
                  break;
                case "center":
                  y.left += c / 2 - g / 2 + r[0];
                  break;
                default:
                  y.left += r[0];
              }
              switch (p) {
                case "bottom":
                  y.top += u + r[1];
                  break;
                case "top":
                  y.top -= f + r[1];
                  break;
                case "middle":
                  y.top += u / 2 - f / 2 + r[1];
                  break;
                default:
                  y.top += r[1];
              }
              h.css({ position: "absolute", top: y.top, left: y.left }),
                o && o.autoWidth && h.css("width", "auto");
            }),
            l.each(function () {
              s(n);
            })
          );
        },
      }),
      t
    );
  }),
  define("ep/sprite", ["ep", "ep/fn/sprite"], function (e) {
    return (
      e.extend({
        sprite: function (t, a) {
          return e("<span>").addSprite(t, a);
        },
      }),
      e
    );
  }),
  define(
    "ep/ui/form",
    [
      "jquery",
      "ep",
      "$dict!ep/dict",
      "jquery/ui/widget",
      "jquery/cookie",
      "jquery/fn/form",
      "jquery/fn/scrollto",
      "ep/ajax",
    ],
    function (e, t, a) {
      var i = e(window),
        n = a.translate("LoseChanges"),
        r = function (t) {
          var a = [];
          return (
            e.each(t, function (e, t) {
              a.push({ name: e, value: t });
            }),
            a
          );
        };
      return (
        e.widget("ui.uiForm", {
          options: { showSaveWarn: !1, tokenName: "SecToken" },
          _create: function () {
            var a = this,
              i = a.options,
              n = e.cookie();
            (a.unity =
              void 0 !== t.config.unity && t.config.unity === !0 ? !0 : !1),
              (a.onSubmitFail =
                void 0 === i.onSubmitFail ||
                ("function" != typeof i.onSubmitFail && i.onSubmitFail !== !1)
                  ? a._onSubmitFail
                  : i.onSubmitFail),
              (a.saveButton = {}),
              a.unity
                ? ((a.saveButton.saved = ["ep-button-saved", "Saved"]),
                  (a.saveButton.default = ["ep-button-save", "SaveButton"]))
                : ((a.saveButton.saved = ["Saved"]),
                  (a.saveButton.default = ["SaveButton"])),
              (a.elem = t(a.element)
                .on("change.uiForm", e.proxy(a, "_change"))
                .on("submit.uiForm", e.proxy(a, "_submit"))
                .on("validate.uiForm", e.proxy(a, "_validate"))
                .on("reset.uiForm", e.proxy(a, "_reset"))
                .on("mousedown", ":submit", e.proxy(a, "_submitButtonFix"))),
              n[i.tokenName] &&
                0 === a.elem.find("input[name='" + i.tokenName + "']").length &&
                a.elem.append(
                  '<input type="hidden" name="' +
                    i.tokenName +
                    '" value="' +
                    n[i.tokenName] +
                    '" />'
                ),
              a.unity &&
                a._modifyButtonClasses({
                  btnClass: "ep-button",
                  removeClass: "Button",
                }),
              (a.timeStamp = e.now()),
              (a.saveButtonChangeMap = i.saveButtonChangeMap
                ? i.saveButtonChangeMap
                : t.config.saveButtonChangeMap),
              a.setSaveButtonSaved(),
              (a.hasBeenSubmitted = !1),
              (a.externalProcessesRunning = 0);
          },
          _init: function () {
            var e = this;
            e.element.trigger("initialized.uiForm", { form: e.element });
          },
          _onSubmitFail: function (t) {
            var a,
              i = t,
              n = i.isValid();
            n ||
              ((a = i.elem
                .formInput()
                .filter(function (t, a) {
                  return e(a).hasClass("ui-invalid");
                })
                .eq(0)),
              a.length && e.scrollTo(a, { offset: { top: -60, left: -10 } }));
          },
          _modifyButtonClasses: function (t) {
            var a = this,
              i = (a.element, a.elem.formInput().filter("button"));
            i.each(function () {
              var a = e(this);
              a.hasClass(t.btnClass) || a.addClass(t.btnClass),
                a.removeClass(t.removeClass);
            });
          },
          _validate: function (e) {
            var t = this;
            if (!t.elem.attr("formnovalidate") && e.target === t.elem[0]) {
              var a = t.elem.formInput();
              a
                .trigger("validate")
                .filter(":invalid:first")
                .focus()
                .trigger("validate"),
                t._change();
            }
          },
          isValid: function () {
            return this.elem.attr("formnovalidate")
              ? !0
              : !this.elem[0].formInvalid;
          },
          setValid: function (e) {
            this.elem[0].formInvalid = !e;
          },
          _setValid: function (e) {
            this.setValid(!e.filter(":invalid").length);
          },
          _isChanged: function (e) {
            return !!e.filter(":changed").length;
          },
          _submitButtonFix: function (t) {
            var a = this,
              i = a._submitButtonFix;
            clearTimeout(i.timeout),
              t === !0 && i.input
                ? i.input.remove()
                : t
                ? (i.button = e(t.target))
                : !t &&
                  i.button &&
                  ((i.input = e('<input type="hidden">')
                    .attr({
                      name: i.button.attr("name"),
                      value: i.button.prop("value"),
                    })
                    .appendTo(a.elem)),
                  (i.timeout = setTimeout(function () {
                    a._submitButtonFix(!0);
                  }, 300)));
          },
          _submitCheck: function (a) {
            var n,
              o = this,
              l = o.options,
              s = o.isValid(),
              d = o.elem.attr("action"),
              c = o.options.ajax,
              u = new e.Event({ type: "triggerFormValid" });
            if (
              (((!d && !c) || !s || a.timeStamp - o.timeStamp < 300) &&
                (a.preventDefault(),
                o.onSubmitFail !== !1 && o.onSubmitFail(o)),
              (o.timeStamp = a.timeStamp),
              (n = a.isDefaultPrevented()),
              !n &&
                (l.showSaveWarn &&
                  i.off("beforeunload.uiForm", o._beforeunload),
                c))
            ) {
              a.preventDefault();
              var m = function (a) {
                var i = a.data || [],
                  n = {
                    url: d || "",
                    type: o.elem.attr("method") || "post",
                    data: o.elem.serializeArray() || [],
                  };
                return (
                  a.data && delete a.data,
                  e.isArray(i) || (i = r(i)),
                  e.extend(!0, n, a),
                  e.merge(n.data, i),
                  t
                    .ajax(n)
                    .done(function () {
                      o.elem.trigger("submitDone");
                    })
                    .fail(function () {
                      o.elem.trigger("submitFail");
                    })
                );
              };
              e(document).trigger(u, { widget: o, e: a }),
                e.isFunction(c) ? c(m) : m(c);
            }
            o._submitButtonFix(),
              c ||
                (n || e(document).trigger(u, { widget: o, e: a }),
                o.elem.trigger(n ? "submitFail" : "submitDone")),
              o.elem.off("submit.uiForm", e.proxy(o, "_submitCheck"));
          },
          _submit: function (t) {
            var a = this;
            return (
              a.options,
              a.externalProcessesRunning > 0
                ? ((a.hasBeenSubmitted = !0),
                  t.stopImmediatePropagation(),
                  t.preventDefault(),
                  void 0)
                : (t.uiFormTriggert ||
                    (a.elem.trigger("validate"),
                    a._setValid(a.elem.formInput()),
                    t.stopImmediatePropagation(),
                    t.preventDefault(),
                    window.external &&
                      "function" ==
                        typeof window.external.AutoCompleteSaveForm &&
                      window.external.AutoCompleteSaveForm(a.elem[0]),
                    a.elem
                      .on("submit.uiForm", e.proxy(a, "_submitCheck"))
                      .trigger({ type: "submit", uiFormTriggert: !0 })),
                  void 0)
            );
          },
          _reset: function () {
            this.elem.formInput().each(function () {
              e(this).triggerHandler("reset");
            });
          },
          _change: function () {
            var a = this,
              n = a.elem.formInput().filter(
                a.saveButton.saved
                  .map(function (e) {
                    return "." + e;
                  })
                  .join(",")
              );
            t.config.saved &&
              n.each(function () {
                var t = e(this),
                  i = t.data("originalText");
                new RegExp(a.saveButton.saved.join("|", "g")).test(
                  t[0].className
                ) &&
                  i &&
                  t
                    .addClass(a.saveButton.default[0])
                    .removeClass(a.saveButton.saved.join(" "))
                    .text(i);
              }),
              a.options.showSaveWarn &&
                (a._isChanged(a.elem.formInput())
                  ? i.on("beforeunload.uiForm", e.proxy(a._beforeunload, a))
                  : i.off("beforeunload.uiForm", e.proxy(a._beforeunload, a)));
          },
          _beforeunload: function () {
            return this.options.showSaveWarn ? n : void 0;
          },
          clearShowSaveWarn: function () {
            var t = this;
            t.options.showSaveWarn &&
              i.off("beforeunload.uiForm", e.proxy(t._beforeunload, t));
          },
          setSaveButtonSaved: function () {
            var a = this,
              i = a.elem.formInput().filter(
                a.saveButton.default
                  .map(function (e) {
                    return "." + e;
                  })
                  .join(",")
              );
            t.config.saved &&
              i.each(function () {
                var t = e(this),
                  i = t.text();
                t
                  .addClass(a.saveButton.saved[0])
                  .removeClass(a.saveButton.default.join(" "))
                  .data("originalText", i),
                  a.saveButtonChangeMap &&
                    a.saveButtonChangeMap[i] &&
                    t.text(a.saveButtonChangeMap[i]);
              });
          },
          setExternalProcessState: function (e) {
            var t = this;
            e ? t.externalProcessesRunning++ : t.externalProcessesRunning--,
              t.hasBeenSubmitted &&
                0 === t.externalProcessesRunning &&
                ((t.hasBeenSubmitted = !1),
                (t.externalProcessesRunning = 0),
                t.elem.trigger({ type: "submit" }));
          },
        }),
        t
      );
    }
  ),
  define(
    "ep/ui/tooltip",
    [
      "jquery",
      "ep",
      "jquery/ui/widget",
      "ep/ui/core",
      "ep/fn/sprite",
      "ep/fn/contextorientation",
    ],
    function (e, t) {
      "use strict";
      var a = {
        focus: ["focus.uiTooltip", "blur.uiTooltip"],
        click: ["click.uiTooltip"],
        hover: ["mouseenter.uiTooltip", "mouseleave.uiTooltip"],
      };
      return (
        e.widget("ui.uiTooltip", {
          options: {
            autoWidth: !1,
            event: "hover",
            context: "prev",
            interactive: !1,
            orientation: "bottom",
            offsetAdjust: [0, 0],
            addClass: "",
            showDelay: 200,
            hideDelay: 400,
            closeButton: !1,
            holdFocus: !1,
            focusDelay: void 0,
            iconClass: "ep-info-bubble",
          },
          unity: void 0 !== t.config.unity && t.config.unity === !0 ? !0 : !1,
          _create: function () {
            var a,
              i = this,
              n = i.options,
              r = "",
              o = { bubble: "", tooltip: "" };
            return (
              (r += "javascript"),
              (r += ":void(0)"),
              (i.elem = i.element
                .removeClass("HideElement ToolTip Tooltip")
                .removeAttr("style")),
              (i.context =
                "string" == typeof n.context &&
                "prev" === n.context.toLowerCase()
                  ? i.element.prev()
                  : "string" == typeof n.context &&
                    "next" === n.context.toLowerCase()
                  ? i.element.next()
                  : "string" == typeof n.context &&
                    "parent" === n.context.toLowerCase()
                  ? i.element.parent()
                  : e(n.context)),
              (a = void 0 !== n.additionalClass ? n.additionalClass : ""),
              i.unity &&
                n.orientation.split(" ").forEach(function (e) {
                  (o.bubble += " ep-tooltip-" + e),
                    (o.tooltip += " ep-tooltip-orientation-" + e);
                }),
              void 0 === n.oldhandling && i.unity
                ? ((i.unityBubble = e(
                    '<span class="ep-info-bubble-wrapper' +
                      o.bubble +
                      " " +
                      n.addClass +
                      '"><span class="ep-info ep-info-adapt ' +
                      n.iconClass +
                      '"><span class="ep-blend-layer"></span></span><div class="ep-info-bubble-explanation">' +
                      i.elem.html() +
                      "</div></span>"
                  )),
                  i.context.replaceWith(i.unityBubble),
                  i.elem.remove(),
                  void 0)
                : ((i.wrap = t("<div>")
                    .addClass(a)
                    .addClass(
                      "ep-uiTooltip ui-front" +
                        (n.addClass ? " " + n.addClass : "") +
                        o.tooltip
                    )
                    .attr("style", i.elem.attr("style") || "")
                    .appendTo("body")
                    .append(i.elem)
                    .hide()),
                  n.closeButton &&
                    (i.closeButton = t("<a>")
                      .attr({ href: r, class: "ep-uiTooltip-closeButton" })
                      .text("x")
                      .on("click", {}, e.proxy(i, "_hide"))
                      .appendTo(i.wrap)),
                  void 0)
            );
          },
          _init: function () {
            if (
              void 0 !== this.options.oldhandling ||
              void 0 === t.config.unity ||
              t.config.unity !== !0
            ) {
              this.wrap.off(".uiTooltip"),
                this.context.off(".uiTooltip"),
                this.options.holdFocus ||
                  this.wrap
                    .on("mouseenter.uiTooltip", e.proxy(this, "_enter"))
                    .on("mouseleave.uiTooltip", e.proxy(this, "_leave"));
              var i = a[this.options.event];
              i[0] && this.context.on(i[0], e.proxy(this, "_show")),
                i[1] && this.context.on(i[1], e.proxy(this, "_hide"));
            }
          },
          _moveToTop: t.ui.createMoveToTop("wrap"),
          adjustTooltipByWidth: function (t, a) {
            var i = this.options;
            !i.fixedWidth &&
            "bottom" === i.orientation &&
            void 0 !== a &&
            e(t).outerWidth() > 100
              ? e(a).parent().css("width", e(t).outerWidth())
              : i.fixedWidth && e(a).parent().css("width", i.fixedWidth);
          },
          _enter: function () {
            this.options.interactive &&
              ((this.cursorInside = !0), this.wrap.stop(!0, !0));
          },
          _leave: function () {
            (this.cursorInside = !1), this.hide();
          },
          _show: function (t, a) {
            var i,
              n,
              r,
              o,
              l = this.options;
            if (
              !l.disabled &&
              ((i = this.context),
              (n = l.orientation),
              (r = l.offsetAdjust),
              this._moveToTop({}, !0),
              "cursor" === n && (n = void 0),
              t instanceof e.Event && !n && "focus" !== l.event
                ? (i = t)
                : e.isArray(t) &&
                  (i = new e.Event({ pageX: t[0], pageY: t[1] })),
              this.adjustTooltipByWidth(this.context, this.elem),
              this.wrap.contextOrientation(i, n, r, { autoWidth: l.autoWidth }),
              e(".ep-uiTooltip").stop(!0, !0).hide(),
              this.wrap.delay(l.showDelay).fadeIn("normal", a),
              this.elem.triggerHandler("show"),
              this.context.parents(".ui-front").length)
            )
              if (
                ((o = e.Event({ type: "focus" })),
                o.stopPropagation(),
                "undefined" == typeof l.focusDelay)
              )
                this.context.trigger(o);
              else {
                var s = this;
                window.setTimeout(
                  function () {
                    s.context.trigger(o);
                  },
                  isNaN(l.focusDelay) ? 10 : l.focusDelay
                );
              }
          },
          show: function (e) {
            this._show({}, e);
          },
          _hide: function (e) {
            (!this.cursorInside || e.data) && this.hide();
          },
          hide: function (t) {
            var a = this.options;
            a.disabled ||
              (this.wrap
                .stop(!0, !0)
                .delay(a.interactive ? a.hideDelay + 400 : a.hideDelay)
                .fadeOut("normal", t),
              this.elem.triggerHandler("hide"),
              e("html").off("mouseup", e.proxy(this, "_hide")));
          },
          _setOption: function (t, a) {
            return (
              "context" === t &&
                (this.context.off(".uiTooltip"), (this.context = e(a))),
              this._superApply(arguments)
            );
          },
          destroy: function () {
            this.wrap.off(".uiTooltip"),
              this.elem.unwrap(),
              this.context.off(".uiTooltip"),
              e("html").off("mouseup", e.proxy(this, "_hide")),
              this._superApply(arguments);
          },
        }),
        t
      );
    }
  ),
  define(
    "ep/ui/input",
    [
      "jquery",
      "ep",
      "util/support",
      "$dict!ep/dict",
      "jquery/fn/form",
      "jquery/fn/class",
      "ep/ui/tooltip",
    ],
    function (e, t, a, i) {
      "use strict";
      return (
        e(document).on(
          "click",
          "input + .ep-uiInput-custom:not(label *, input:disabled + *)",
          function (t) {
            e(this.previousSibling).trigger({
              type: "click",
              data: t.data,
              originalTarget: this.previousSibling,
            });
          }
        ),
        e.widget("ui.uiInput", {
          options: { autofocus: !1, big: !1, autoWidth: !1 },
          unity: void 0 !== t.config.unity && t.config.unity === !0 ? !0 : !1,
          _create: function () {
            var t,
              n = this,
              r = n.options,
              o = (n.elem = n.element.data("uiUiInput", n)),
              l = (n.stack = e([])),
              s = (n.type = o[0].tagName.toLowerCase() + ":"),
              d = "";
            (n.type = s =
              "input:" === s || "button:" === s ? s + o[0].type : s),
              (n.dict = i),
              r.placeholder && o.attr("placeholder", r.placeholder),
              o
                .on("changeAttr.uiInput", e.proxy(n, "_changeAttr"))
                .on("reset.uiInput", e.proxy(n, "_change"))
                .on("focusin.uiInput", function () {
                  return n.hideOnError && n.hideOnError === !0
                    ? (n.tooltip && n.tooltip.hide(), void 0)
                    : (n.tooltip &&
                        n.tooltip[n.tooltip.is(":empty") ? "hide" : "show"](),
                      void 0);
                })
                .on("focusout.uiInput", function () {
                  n._leave(), n.tooltip && n.tooltip.hide();
                }),
              n.unity &&
                o.on("input", function () {
                  clearTimeout(t),
                    (t = setTimeout(e.proxy(n, "_validationTrigger"), 200));
                }),
              /file$/i.test(s) &&
                ((d += " ep-uiInput-file"),
                l.push(
                  (n.custom = e(
                    '<span class="ep-uiInput-custom"><span class="ep-uiInput ep-uiInput-button">' +
                      n.dict.translate("SelectFile") +
                      "...</span></span>"
                  ).insertAfter(o))[0]
                ),
                l.push(
                  (n.fileText = e(
                    '<span class="ep-uiInput ep-uiInput-text">' +
                      (o.val() || "&nbsp;") +
                      "</span>"
                  ).prependTo(n.custom))[0]
                )),
              n.options.big && (d += " ep-uiInput-big"),
              /(^(textarea:|select:)|(text|password|email|url|tel|date|datetime|time|number)$)/.test(
                s
              ) && (d += " ep-uiInput"),
              /^select:/.test(s)
                ? (d += " ep-uiInput-select")
                : /(^(button:|a:)|(submit|reset|button|image)$)/.test(s)
                ? ((d += /image$/.test(s)
                    ? " ep-uiInput ep-uiInput-image"
                    : " ep-uiInput ep-uiInput-button"),
                  /reset$/.test(s) &&
                    o.on("click.uiInput", function (t) {
                      t.preventDefault(), e(this.form).formReset();
                    }),
                  /submit$/.test(s) &&
                    this.elem.attr("form") &&
                    (a.inputFormAttr ||
                      this.elem.on("click", function (t) {
                        t.preventDefault
                          ? t.preventDefault()
                          : (t.returnValue = !1),
                          e("form#" + e(this).attr("form")).submit();
                      })))
                : /^textarea:$/.test(s)
                ? (d += " ep-uiInput-textarea2")
                : /(text|password|email|url|tel|date|datetime|time|number)$/i.test(
                    s
                  ) && (d += " ep-uiInput-text"),
              /(^(select:)|(file|checkbox|radio)$)/.test(s) &&
                o.on("change.uiInput", e.proxy(n, "_change")),
              /(^(textarea:)|(text|password|checkbox|radio|email|url|tel|date|datetime|time|number)$)/.test(
                s
              ) && o.on("keyup.uiInput", e.proxy(n, "_change")),
              /text$/.test(s) &&
                o.on("mouseup.uiInput", function () {
                  n.tooltip &&
                    window.setTimeout(function () {
                      o.trigger("focus");
                    }, 0);
                }),
              o.addClass(d),
              (n.lastState = [o[0].value, o[0].checked, o[0].selectedIndex]);
          },
          _init: function () {
            this._tooltipInit(),
              (this.elem.attr("autofocus") || this.options.autofocus) &&
                this.elem[0].focus();
          },
          addClass: function (e) {
            (/(hover|active|focused)/.test(e) &&
              this.elem.is(":disabled,:readonly")) ||
              this.elem.addClass(e);
          },
          removeClass: function (e) {
            this.elem.removeClass(e);
          },
          _validationTrigger: function () {
            var e = this;
            e.elem.trigger("validate.uiValidate");
          },
          _tooltipInit: function (e) {
            var a = this,
              i = a.options,
              n = a.unity ? "bottom" : "right";
            a.tooltip ||
              (!i.info && !e) ||
              ((a.tooltip = t("<div>")
                .addClass("ep-uiInput-info")
                .uiTooltip({
                  interactive: !0,
                  event: i.tooltipEvent ? i.tooltipEvent : "focus",
                  context: a.elem,
                  orientation: void 0 !== i.orientation ? i.orientation : n,
                  oldhandling: a.unity ? !0 : void 0,
                  offsetAdjust: [0, 0],
                  additionalClass: "ep-formfield-tooltip",
                  autoWidth: i.autoWidth,
                })),
              i.info && a.tooltip.html(i.info),
              a.tooltip.uiTooltip("adjustTooltipByWidth", a.elem, a.tooltip),
              a.stack.push(a.tooltip[0]));
          },
          _setOption: function (e, t) {
            return (
              "placeholder" === e && this.elem.attr("placeholder", t),
              this._superApply(arguments)
            );
          },
          _changeAttr: function (e, t) {
            t.hasOwnProperty("value") && this._change({});
          },
          _stateChanged: function () {
            var e = this.lastState,
              t = [
                this.elem[0].value,
                this.elem[0].checked,
                this.elem[0].selectedIndex,
              ],
              a = !(e[0] === t[0] && e[1] === t[1] && e[2] === t[2]);
            return (this.lastState = t), a;
          },
          _change: function (e) {
            9 !== e.keyCode &&
              (/checkbox$/i.test(this.type)
                ? this.elem.trigger("changeAttr", {
                    checked: this.elem.is(":checked"),
                  })
                : /radio$/i.test(this.type)
                ? this.elem
                    .formGroup(":radio")
                    .filter(":checked")
                    .trigger("changeAttr", { checked: !1 })
                    .end()
                    .filter(":not(:checked)")
                    .trigger("changeAttr", { checked: !0 })
                : /file$/i.test(this.type) &&
                  ("" !== this.elem.val()
                    ? this.fileText.text(
                        this.elem.val().replace(/^.*?fakepath[\/\\]?/, "")
                      )
                    : this.fileText.html("&nbsp;"))),
              this._leave();
          },
          _leave: function () {
            var t = this,
              a = t.options;
            this.elem.toggleClass("ui-changed", this.elem.is(":changed")),
              this._stateChanged() &&
                (this.elem.trigger("changeValue"),
                e(this.elem[0].form).trigger("change")),
              "bottom" === this.options.orientation &&
                void 0 !== this.tooltip &&
                e(this.elem).outerWidth() > 0 &&
                !a.autoWidth &&
                e(this.tooltip)
                  .parent()
                  .css("width", e(this.elem).outerWidth());
          },
          destroy: function () {
            return (
              this.elem
                .removeClass("ep-uiInput")
                .removeClass(/(ep-uiInput[\w\d-]*|epWidth-\d+)/g),
              this.stack.remove(),
              this._superApply(arguments)
            );
          },
        }),
        t
      );
    }
  ),
  define(
    "ep/ui/dialog",
    [
      "jquery",
      "ep",
      "$dict!ep/dict",
      "jquery/ui/dialog",
      "ep/ui/form",
      "ep/ui/input",
    ],
    function (e, t, a) {
      "use strict";
      return (
        e.widget("ui.uiDialog", e.ui.dialog, {
          options: { draggable: !1, resizable: "se", preventScroll: !1 },
          _create: function () {
            var e,
              i = this,
              n = i.options,
              r = a.translate("{Close}");
            i._superApply(arguments),
              (i.unity =
                void 0 !== t.config.unity && t.config.unity === !0 ? !0 : !1),
              (e = n.modal ? "ep-modal-dialog" : "ep-nonmodal-dialog"),
              i.element.data("ui-dialog", i),
              n.form && i._createForm(n.form),
              i.uiDialog
                .removeClass("ui-corner-all")
                .addClass("epDialog" + (i.unity ? " " + e : "")),
              i.uiDialogTitlebar.removeClass("ui-corner-all"),
              i._setOption("closeText", r),
              i.uiDialogTitlebar
                .find(".ui-dialog-titlebar-close")
                .insertBefore(i.uiDialogTitlebar.find(".ui-dialog-title")),
              i.uiDialogTitlebarClose.eq(0).html(
                i.uiDialogTitlebarClose
                  .eq(0)
                  .html()
                  .replace(new RegExp(r + "$", "g"), function () {
                    return "<span>" + arguments[0] + "</span>";
                  })
              );
          },
          _createForm: function (e) {
            var a = e.options;
            a && delete e.options,
              (this.uiForm = this.options.form =
                t("<form>")
                  .attr(this.options.form)
                  .attr({ tabIndex: -1, role: "dialog" })
                  .addClass(this.uiDialog.attr("class"))
                  .toggle(this._isOpen)
                  .insertBefore(this.uiDialog)
                  .append(this.uiDialog.children())
                  .uiForm(a || {})),
              this.uiDialog.remove(),
              (this.uiDialog = this.uiForm),
              this._initWrapper();
          },
          _createWrapper: function () {
            (this.uiDialog = e("<div>")
              .hide()
              .attr({ tabIndex: -1, role: "dialog" })
              .appendTo(this._appendTo())),
              this._addClass(
                this.uiDialog,
                "ui-dialog",
                "ui-widget ui-widget-content ui-corner-all ui-front " +
                  this.options.dialogClass
              ),
              this._initWrapper();
          },
          _initWrapper: function () {
            this._on(this.uiDialog, {
              keydown: function (t) {
                if (
                  this.options.closeOnEscape &&
                  !t.isDefaultPrevented() &&
                  t.keyCode &&
                  t.keyCode === e.ui.keyCode.ESCAPE
                )
                  return t.preventDefault(), this.close(t), void 0;
                if (t.keyCode === e.ui.keyCode.TAB) {
                  var a = this.uiDialog.find(":tabbable"),
                    i = a.filter(":first"),
                    n = a.filter(":last");
                  (t.target !== n[0] && t.target !== this.uiDialog[0]) ||
                  t.shiftKey
                    ? (t.target !== i[0] && t.target !== this.uiDialog[0]) ||
                      !t.shiftKey ||
                      (n.focus(1), t.preventDefault())
                    : (i.focus(1), t.preventDefault());
                }
              },
              mousedown: function (e) {
                this._moveToTop(e) &&
                  !this.uiDialog.find("select").length &&
                  this._focusTabbable();
              },
            }),
              this.element.find("[aria-describedby]").length ||
                this.uiDialog.attr({
                  "aria-describedby": this.element.uniqueId().attr("id"),
                });
          },
          _moveToTop: function (e, t) {
            var a = Boolean(
              this.uiDialog
                .nextAll(":visible")
                .not(".ep-cke-full")
                .insertBefore(this.uiDialog).length
            );
            return a && !t && this._trigger("focus", e), a && !t;
          },
          _setOption: function (t, i) {
            var n = this;
            switch (t) {
              case "form":
                n.uiForm ? n.uiForm.uiForm(i) : n._createForm(i);
                break;
              case "title":
                e(".ui-dialog-title", n.uiDialogTitlebar)
                  .empty()
                  .append((n.options.title = i || "&#160;"));
                break;
              case "closeText":
                (i = i === !0 ? a.translate("{Close}") : i || ""),
                  n.uiDialogTitlebar
                    .find(".ui-dialog-titlebar-close")
                    .attr("title", i);
                break;
              default:
                n._superApply(arguments);
            }
          },
          _keepFocus: function () {
            this.options.closeOnClickOut
              ? this.close()
              : this._superApply(arguments);
          },
          _createButtonPane: function () {
            var e = this._superApply(arguments);
            return (
              this.uiDialogButtonPane.addClass("epDialogButtonBar"),
              this.uiButtonSet.addClass("uiDialogButtonPane"),
              e
            );
          },
          _createButtons: function () {
            var t = this,
              a = this.options.buttons;
            return (
              this.uiDialogButtonPane.remove(),
              this.uiButtonSet.empty(),
              e.isEmptyObject(a)
                ? (this.uiDialog.removeClass("ui-dialog-buttons"), void 0)
                : (e.each(a, function (i, n) {
                    var r;
                    e.isFunction(n) && (n = { click: n, text: i }),
                      (n = e.extend({ type: "button", text: i }, n)),
                      (r = n.click || function () {}),
                      (n.click = function () {
                        r.apply(t.element[0], arguments);
                      }),
                      n.cssClass && ((n.class = n.cssClass), delete n.cssClass),
                      delete n.icons,
                      delete n.showText,
                      (a[i] = e("<button></button>", n).appendTo(
                        t.uiButtonSet
                      ));
                  }),
                  this.uiDialog.addClass("ui-dialog-buttons"),
                  this.uiDialogButtonPane.appendTo(this.uiDialog),
                  void 0)
            );
          },
          open: function () {
            return (
              this.options.preventScroll && e("body").css("overflow", "hidden"),
              this._superApply(arguments)
            );
          },
          close: function () {
            return (
              this.options.preventScroll && e("body").css("overflow", "auto"),
              this._superApply(arguments)
            );
          },
        }),
        t
      );
    }
  ),
  define("$tmpl!ep/ui/magnifier", ["jquery/tmpl"], function (e) {
    e.template(
      "ep.ui.magnifier",
      "<div class=\"ep-uiMagnifier\" {{elem 'container'}}><div class=\"ep-uiMagnifier-box\" title=\"${expand}\" {{elem 'box'}}><div {{elem 'boxWrap'}}></div><div class=\"ep-uiMagnifier-boxSelect\" {{elem 'boxMag'}}></div></div><div class=\"ep-uiMagnifier-zoom\" style=\"display:none;\" {{elem(ep) 'zoom'}}><div {{elem 'zoomWrap'}}></div></div></div>"
    );
    var t = e.template(
      "ep/ui/magnifier",
      "<div class=\"ep-uiMagnifier\" {{elem 'container'}}><div class=\"ep-uiMagnifier-box\" title=\"${expand}\" {{elem 'box'}}><div {{elem 'boxWrap'}}></div><div class=\"ep-uiMagnifier-boxSelect\" {{elem 'boxMag'}}></div></div><div class=\"ep-uiMagnifier-zoom\" style=\"display:none;\" {{elem(ep) 'zoom'}}><div {{elem 'zoomWrap'}}></div></div></div>"
    );
    return function (a, i) {
      return e.tmpl(t, a, i);
    };
  }),
  define(
    "ep/ui/magnifier",
    [
      "jquery",
      "ep",
      "$dict!ep/dict",
      "$tmpl!ep/ui/magnifier",
      "jquery/ui/widget",
      "ep/ui/core",
      "ep/fn/contextorientation",
    ],
    function (e, t, a, i) {
      "use strict";
      var n = a.translate("Expand");
      return (
        e.widget("ui.uiMagnifier", {
          options: {
            images: "img",
            orientation: "right",
            width: 250,
            height: 250,
          },
          _create: function () {
            var a = this,
              r = a.options,
              o = (a.images = t.ui
                .imgData(r.images)
                .on("change.uiMagnifier", e.proxy(a, "_change"))
                .on("resizestop.uiMagnifier", e.proxy(a, "_resizeZoom")));
            (a.animating = !1),
              (a.refresh = !1),
              (a.noZoom = !1),
              e.extend(
                a,
                i([{ expand: n }])
                  .appendTo(a.element)
                  .tmplItem("elements")
              ),
              (a.cache = {
                box: { width: a.box.innerWidth(), height: a.box.innerHeight() },
                boxMag: {},
                ratio: 1,
              }),
              a.zoom.appendTo("body"),
              a.container.on("click.uiMagnifier", function () {
                r.action && o.trigger(r.action);
              }),
              a._setOptions(r);
          },
          _init: function () {
            this._change();
          },
          destroy: function () {
            var e = this;
            e.images.off(".uiMagnifier"),
              e.zoom.remove(),
              e.container.remove(),
              e._superApply(arguments);
          },
          _setOption: function (e, t) {
            var a = this;
            return (
              "action" === e
                ? a.container.css("cursor", t ? "pointer" : "")
                : "width" === e
                ? a.zoom.width(t)
                : "height" === e && a.zoom.height(t),
              this._superApply(arguments)
            );
          },
          _change: function () {
            var t,
              a,
              i,
              n = this;
            n.animating
              ? (n.refresh = !0)
              : ((t = n.images.current()),
                (i = t.node && t.node.alt ? t.node.alt : ""),
                (a = t._checkSrcName(t.srcM, t.getSrcFor(n.box))),
                (n.refresh = !1),
                (n.animating = !0),
                n.zoom.hide(),
                n.container.off(
                  "mouseenter.uiMagnifier mousemove.uiMagnifier mouseleave.uiMagnifier"
                ),
                (n.boxImg = e('<img alt="' + i + '" src="' + a + '"/>')
                  .appendTo(n.boxWrap.empty().hide())
                  .on("load", function () {
                    var a;
                    n.boxWrap.show(),
                      n.refresh
                        ? ((n.animating = !1), n._change())
                        : ((t = n.images.current()),
                          (a = t._checkSrcName(t.srcM, t.srcL)),
                          (n.zoomImg = e(
                            '<img alt="' + i + '" src="' + a + '"/>'
                          )
                            .appendTo(n.zoomWrap.empty())
                            .on("load", function () {
                              (n.animating = !1),
                                n.refresh
                                  ? n._change()
                                  : (n._resizeZoom(),
                                    n.container
                                      .on(
                                        "mouseenter.uiMagnifier",
                                        e.proxy(n, "_enterMag")
                                      )
                                      .on(
                                        "mousemove.uiMagnifier",
                                        e.proxy(n, "_moveMag")
                                      )
                                      .on(
                                        "mouseleave.uiMagnifier",
                                        e.proxy(n, "_leaveMag")
                                      ));
                            })));
                  })));
          },
          _resizeZoom: function () {
            var e = this,
              t = e.options,
              a = e.cache;
            e.zoomImg &&
              e.boxImg &&
              ((a.ratio = Math.max(
                e.zoomImg[0].width / e.boxImg[0].width,
                e.zoomImg[0].height / e.boxImg[0].height
              )),
              (e.noZoom = a.ratio <= 1),
              e.noZoom ||
                ((a.box.width = e.box.innerWidth()),
                (a.box.height = e.box.innerHeight()),
                e.boxMag
                  .outerWidth(t.width / a.ratio)
                  .outerHeight(t.height / a.ratio),
                (a.boxMag.width = e.boxMag.outerWidth()),
                (a.boxMag.height = e.boxMag.outerHeight()),
                e.zoom.width(t.width).height(t.height),
                e.zoomWrap
                  .width(a.box.width * a.ratio)
                  .height(a.box.height * a.ratio)));
          },
          _enterMag: function () {
            var e = this;
            e.noZoom ||
              (e.boxMag.show(),
              e.zoom
                .contextOrientation(e.box, e.options.orientation, [10, 0])
                .show());
          },
          _moveMag: function (e) {
            var t = this,
              a = t.cache,
              i = t.box.offset(),
              n = Math.ceil(
                Math.min(
                  Math.max(0, e.pageY - i.top - a.boxMag.height / 2),
                  a.box.height - a.boxMag.height
                )
              ),
              r = Math.ceil(
                Math.min(
                  Math.max(0, e.pageX - i.left - a.boxMag.width / 2),
                  a.box.width - a.boxMag.width
                )
              );
            t.boxMag.css({ top: n + "px", left: r + "px" }),
              t.zoomWrap.css({
                top: -(n * a.ratio) + "px",
                left: -(r * a.ratio) + "px",
              });
          },
          _leaveMag: function () {
            var e = this;
            e.boxMag.hide(), e.zoom.hide();
          },
        }),
        t
      );
    }
  ),
  define("$tmpl!ep/ui/slides", ["jquery/tmpl"], function (e) {
    e.template(
      "ep.ui.slides",
      "<div class=\"ep-uiSlides\" {{elem 'container'}}><div class=\"ep-uiSlides-box\" title=\"${expand}\" {{elem 'box'}}><div {{elem 'boxCurr'}}></div><div style=\"display:none;\" {{elem 'boxNext'}}></div></div><div class=\"ep-uiSlides-desc\" {{elem 'desc'}}><div class=\"ep-uiSlides-caption\" {{elem 'descCaption'}}></div><div class=\"ep-uiSlides-count\" {{elem 'descCount'}}></div></div><div class=\"ep-uiSlides-ctrl ep-uiSlides-ctrlPrev\" {{elem 'ctrlPrev'}}><a href=\"javascript:void(0);\" {{elem 'ctrlPrevHandle'}}>&lt;</a></div><div class=\"ep-uiSlides-ctrl ep-uiSlides-ctrlNext\" {{elem 'ctrlNext'}}><a href=\"javascript:void(0);\" {{elem 'ctrlNextHandle'}}>&gt;</a></div></div>"
    );
    var t = e.template(
      "ep/ui/slides",
      "<div class=\"ep-uiSlides\" {{elem 'container'}}><div class=\"ep-uiSlides-box\" title=\"${expand}\" {{elem 'box'}}><div {{elem 'boxCurr'}}></div><div style=\"display:none;\" {{elem 'boxNext'}}></div></div><div class=\"ep-uiSlides-desc\" {{elem 'desc'}}><div class=\"ep-uiSlides-caption\" {{elem 'descCaption'}}></div><div class=\"ep-uiSlides-count\" {{elem 'descCount'}}></div></div><div class=\"ep-uiSlides-ctrl ep-uiSlides-ctrlPrev\" {{elem 'ctrlPrev'}}><a href=\"javascript:void(0);\" {{elem 'ctrlPrevHandle'}}>&lt;</a></div><div class=\"ep-uiSlides-ctrl ep-uiSlides-ctrlNext\" {{elem 'ctrlNext'}}><a href=\"javascript:void(0);\" {{elem 'ctrlNextHandle'}}>&gt;</a></div></div>"
    );
    return function (a, i) {
      return e.tmpl(t, a, i);
    };
  }),
  define(
    "ep/ui/slides",
    [
      "jquery",
      "ep",
      "$dict!ep/dict",
      "$tmpl!ep/ui/slides",
      "jquery/ui/widget",
      "jquery/fn/class",
      "jquery/event/special/load",
      "jquery/event/special/touch",
      "ep/ui/core",
    ],
    function (e, t, a, i) {
      "use strict";
      var n = a.translate("Expand");
      return (
        e.widget("ui.uiSlides", {
          options: {
            images: "img",
            effect: "standard",
            delay: 3e3,
            autoplay: !1,
            controls: "auto",
            caption: !1,
            count: !1,
            defaultSize: "M",
          },
          _create: function () {
            var a = this,
              r = a.options,
              o = (a.images = t.ui
                .imgData(r.images)
                .on("change.uiSlides", e.proxy(a, "_change")));
            e.extend(
              a,
              i([{ expand: n }])
                .appendTo(a.element)
                .tmplItem("elements")
            ),
              a.ctrlPrevHandle.on("click.uiSlides", function () {
                o.current("prev");
              }),
              a.ctrlNextHandle.on("click.uiSlides", function () {
                o.current("next");
              }),
              a.container
                .on("click.uiSlides", function (t) {
                  !e(t.originalTarget).is(".ep-uiSlides-ctrl a") &&
                    r.action &&
                    (a._external(!0), o.trigger(r.action));
                })
                .on("touchswiperight.uiSlides", function () {
                  o.current("prev");
                })
                .on("touchswipeleft.uiSlides", function () {
                  o.current("next");
                }),
              a._setOptions(r);
          },
          _init: function () {
            var e = this;
            e._internal(!0), e._change();
          },
          destroy: function () {
            var e = this;
            e.images.off(".uiSlides"),
              e.container.remove(),
              e._superApply(arguments);
          },
          _internal: function (e) {
            return arguments.length
              ? (this.eventInernal = e)
              : this.eventInernal;
          },
          _external: function (e) {
            var t = this;
            return (
              e && ((t.eventExternal = !0), t._autoplay()), t.eventExternal
            );
          },
          _autoplay: function () {
            var e = this,
              t = e.options;
            clearInterval(e.playTimeout),
              t.autoplay &&
                !e._external() &&
                (e.playTimeout = setTimeout(function () {
                  e._internal(!0),
                    e.images.current(
                      e.images.currentItem === e.images.length - 1 ? 0 : "next"
                    );
                }, t.delay));
          },
          _setOption: function (e, t) {
            var a = this;
            return (
              "action" === e
                ? a.container.css("cursor", t ? "pointer" : "")
                : "controls" === e &&
                  a.container
                    .removeClass(/ep-uiSlides-ctrl-[\w]+/)
                    .addClass("ep-uiSlides-ctrl-" + t),
              this._superApply(arguments)
            );
          },
          _change: function () {
            var t,
              a,
              i,
              n,
              r,
              o,
              l,
              s,
              d,
              c,
              u = this,
              m = u.options;
            u._external(!u._internal()),
              u._internal(!0),
              (t = u.images),
              (a = t.currentItem + 1),
              (i = t.length),
              (n = t.prev()),
              (r = t.current() || {}),
              (o = t.next()),
              (l = r._checkSrcName(
                r["src" + m.defaultSize],
                r.getSrcFor(u.box)
              )),
              (c = r.node && r.node.alt ? r.node.alt : ""),
              (c = c.replace(/"/g, "&quot;")),
              u.ctrlPrev.addClass("ui-hidden"),
              u.ctrlNext.addClass("ui-hidden"),
              (s = u.boxNext),
              (u.boxNext = u.boxCurr),
              (u.boxCurr = s),
              u.desc.stop(!0, !0).slideUp(),
              (d = e('<img alt="' + c + '" src="' + l + '"/>')
                .on("load", function () {
                  var t = e("#ProductSlideshow"),
                    l = t.height();
                  this.height > l && t.height(this.height),
                    u.boxCurr.show().append(d),
                    u.boxNext.hide().empty(),
                    u.ctrlPrev.toggleClass("ui-hidden", !n),
                    u.ctrlNext.toggleClass("ui-hidden", !o),
                    u.descCount.html(a + "/" + i).toggle(!!m.count),
                    u.descCaption
                      .html(r.desc.replace(/\n/g, "<br />"))
                      .toggle(!(!m.caption || !r.desc)),
                    (m.count || (m.caption && r.desc)) &&
                      u.desc.stop(!0, !0).slideDown(),
                    u._autoplay();
                })
                .appendTo("head"));
          },
        }),
        t
      );
    }
  ),
  define(
    "ep/ui/coverflow",
    [
      "jquery",
      "ep",
      "util/string",
      "util/support",
      "util/version",
      "util/browser",
      "jquery/cookie",
      "jquery/ui/widget",
      "ep/ui/core",
      "ep/ui/slides",
    ],
    function (e, t, a, i, n) {
      var r = Array.prototype.shift,
        o = t.config.javascriptRootRelative + "/ep/ui/coverflow.swf",
        l = 0,
        s = function (i) {
          return (s[i.id] = {
            getData: function () {
              var e = [],
                t = i.options.caption;
              return (
                i.images.each(function (i, n) {
                  e.push([
                    n.srcM,
                    t && n.desc
                      ? a.shrink(n.desc.replace(/\n/g, " "), {
                          length: 40,
                          ratio: 0.5,
                        })
                      : "",
                    "showProduct",
                    "addToBasket",
                    !1,
                    i,
                  ]);
                }),
                e
              );
            },
            change: function (e) {
              i.images.current(e);
            },
            showProduct: function () {
              i.options.action && i.images.trigger(i.options.action);
            },
            addToBasket: function () {
              var a,
                n = i.images.current().node,
                r = "SecToken",
                o = e.cookie();
              n &&
                ((a = e(n).closest("a").data("addToBasket")),
                a &&
                  (o[r] && (a += "&" + r + "=" + o[r]),
                  e.ajax({ type: "POST", url: a, async: !1 }).done(function () {
                    window.location.href =
                      "https:" == location.protocol.toLowerCase()
                        ? t.config.webUrlSsl
                        : t.config.webUrl;
                  })));
            },
          });
        };
      return (
        e.widget("ui.uiCoverflow", {
          options: {
            title: "",
            images: "img",
            caption: !1,
            count: !1,
            autoplay: !0,
            controls: !0,
            delay: 3e3,
          },
          _create: function () {
            var a = this,
              r = a.options,
              o = (a.images = t.ui
                .imgData(r.images)
                .on("change.uiCoverflow", e.proxy(a, "_change")));
            (a.id = "cwf" + e.now() + ++l),
              s(a),
              (r.title = r.title || a.element.attr("title") || ""),
              n.compare(i.flash, "9") >= 0 && o.length > 2
                ? ((a.flash = e()),
                  a._buildFlash(),
                  a.element.addClass("Flashed").removeClass("HideElement"),
                  e(window).on("resize", e.proxy(a, "_buildFlash")))
                : a._buildHTML();
          },
          _change: function () {
            var e = this;
            e.flash &&
              e.flash[0] &&
              e.flash[0].setCurrent &&
              e.flash[0].setCurrent(e.images.currentItem);
          },
          _buildHTML: function () {
            var e = this,
              t = e.options;
            e.element
              .removeClass("HideElement")
              .uiSlides(t)
              .children("a")
              .hide();
          },
          _buildFlash: function () {
            var t = this,
              a =
                e.browser.msie && parseInt(e.browser.version) <= 8
                  ? o + "?" + e.now() + ++l
                  : o;
            (flash =
              '<object name="' +
              t.id +
              '" ' +
              'id="' +
              t.id +
              '" ' +
              'type="application/x-shockwave-flash" ' +
              'data="' +
              a +
              '" ' +
              'data-jsapi="jQuery.ui.uiCoverflow.flash" ' +
              'data-jscallback="getData" ' +
              'data-jschange="change" ' +
              "><param " +
              'name="movie" ' +
              'value="' +
              a +
              '" ' +
              "/><param " +
              'name="allowscriptaccess" ' +
              'value="always"' +
              "/><param " +
              'name="wmode" ' +
              'value="transparent" ' +
              "/><param " +
              'name="swliveconnect" ' +
              'value="true" ' +
              "/></object>"),
              t.flash && t.flash.remove(),
              (t.flash = t.element
                .attr("title", t.options.title)
                .append(flash)
                .find("object"));
          },
          destroy: function () {
            this._superApply(arguments);
          },
        }),
        e.extend(e.ui.uiCoverflow, {
          flash: function () {
            return s[r.call(arguments)][r.call(arguments)].apply(s, arguments);
          },
        }),
        t
      );
    }
  ),
  define("$tmpl!ep/ui/thumbbox", ["jquery/tmpl"], function (e) {
    e.template(
      "ep.ui.thumbbox",
      '<div class="ep-uiThumbbox" {{elem \'container\'}}><ul {{elem \'list\'}}>{{each(i, data) imgData}}<li data-item="${i}"><img src="${data[srcType]}" alt="${data.desc}"/></li>{{/each}}</ul></div>'
    );
    var t = e.template(
      "ep/ui/thumbbox",
      '<div class="ep-uiThumbbox" {{elem \'container\'}}><ul {{elem \'list\'}}>{{each(i, data) imgData}}<li data-item="${i}"><img src="${data[srcType]}" alt="${data.desc}"/></li>{{/each}}</ul></div>'
    );
    return function (a, i) {
      return e.tmpl(t, a, i);
    };
  }),
  define(
    "ep/ui/thumbbox",
    [
      "jquery",
      "ep",
      "$tmpl!ep/ui/thumbbox",
      "jquery/fn/class",
      "jquery/ui/widget",
      "ep/ui/core",
    ],
    function (e, t, a) {
      return (
        e.widget("ui.uiThumbbox", {
          options: {
            event: "click",
            images: "img",
            width: 100,
            height: 100,
            view: "list",
          },
          _create: function () {
            var i = this,
              n = i.options,
              r = (i.images = t.ui.imgData(n.images)),
              o = n.width,
              l = n.height,
              s = "srcXs";
            o > 190 || l > 190
              ? (s = "srcL")
              : o > 140 || l > 140
              ? (s = "srcM")
              : (o > 90 || l > 90) && (s = "srcS"),
              e.extend(
                i,
                a([{ imgData: r.get(), srcType: s }])
                  .appendTo(i.element)
                  .tmplItem("elements")
              ),
              i._setOptions(n),
              i.element.find("li:first").addClass("active"),
              r.on("change", function () {
                var t = r.current()[s],
                  a = e('img[src="' + t + '"]').closest("ul"),
                  n = e('img[src="' + t + '"]').closest("li"),
                  o = e('img[src="' + t + '"]')
                    .closest(".ep-uiThumbbox")
                    .width(),
                  l = a[0].offsetLeft,
                  d = n[0].offsetLeft;
                i.element.find("li.active").removeClass("active"),
                  n.addClass("active"),
                  "slide" === i.options.view &&
                    (0 > l + d
                      ? a.stop(!0, !0).animate({ left: -d + "px" })
                      : l + d > o &&
                        a
                          .stop(!0, !0)
                          .animate({ left: o - d - n.outerWidth() + "px" }));
              });
          },
          _init: function () {},
          setThumbActive: function (e) {
            var t = this;
            t.element.find("li.active").removeClass("active"),
              t.element.find("li").eq(e).addClass("active");
          },
          destroy: function () {
            var e = this;
            e.images.off(".uiThumbbox"),
              e.container.remove(),
              e._superApply(arguments);
          },
          _setOption: function (t, a) {
            var i = this,
              n = i.options,
              r = i.images;
            return (
              "view" === t
                ? (i.container
                    .off("mousemove.uiThumbbox")
                    .css("height", "")
                    .removeClass(/ep-uiThumbbox-[\w]+/)
                    .addClass("ep-uiThumbbox-" + a),
                  "slide" == a &&
                    i.container
                      .on("mousemove.uiThumbbox", e.proxy(i, "_slideMove"))
                      .height(i.list.outerHeight(!0)))
                : "width" === t
                ? i.list.children().width(a)
                : "height" === t
                ? (i.list
                    .children()
                    .height(a)
                    .css("line-height", a + "px"),
                  i._setOption("view", i.options.view))
                : "event" === t &&
                  i.element
                    .off(".uiThumbbox", "img")
                    .on(a + ".uiThumbbox", "li", function () {
                      var t = e(this).data("item");
                      void 0 !== t &&
                        t != r.currentItem &&
                        (r.current(t), n.action && r.trigger(n.action));
                    }),
              this._superApply(arguments)
            );
          },
          _slideMove: function (e) {
            var t = this,
              a = t.container.offset().left,
              i = t.container.width(),
              n = t.list.width(),
              r = e.pageX - a,
              o = t.list.position().left;
            t.list.stop(!0),
              n > i &&
                ((1 * i) / 4 > r
                  ? t.list.animate({ left: "0px" }, Math.abs(2 * o), "linear")
                  : r > (3 * i) / 4 &&
                    t.list.animate(
                      { left: i - n + "px" },
                      Math.abs(2 * (n - i + o)),
                      "linear"
                    ));
          },
        }),
        t
      );
    }
  ),
  define(
    "ep/ui/lightbox",
    [
      "jquery",
      "ep",
      "jquery/ui/dialog",
      "jquery/ui/widget",
      "ep/ui/core",
      "ep/ui/dialog",
      "ep/ui/slides",
      "ep/ui/thumbbox",
    ],
    function (e, t) {
      var a = e(window),
        i = (a.width(), a.height(), e.ui.uiDialog.prototype);
      return (
        e.widget("ui.uiLightbox", {
          options: {
            images: "img",
            effect: "standard",
            controls: "visible",
            caption: !1,
            count: !1,
            thumbs: !1,
            closeOnEscape: !0,
            closeOnClickOut: !0,
            defaultSize: "M",
          },
          _create: function () {
            var a = this,
              i = a.options,
              n = (a.images = t.ui
                .imgData(i.images)
                .on("lightbox.uiLightbox", e.proxy(a, "open"))
                .on("resizestop.uiLightbox", e.proxy(a, "_resizestop")));
            (a.options.modal = !0),
              n.each(function (t, a) {
                a.node &&
                  e(a.node).on("click.uiLightbox", function (e) {
                    e.preventDefault(),
                      (void 0 === i.isAllowed ||
                        (void 0 !== i.isAllowed &&
                          "function" == typeof i.isAllowed &&
                          i.isAllowed({ target: e.target, index: t }))) &&
                        n.current(t).trigger("lightbox");
                  });
              });
          },
          _setOption: function (e, t) {
            var a = this;
            "thumbs" == e &&
              a.uiDialog &&
              a.uiDialog.toggleClass(
                "ep-uiLightbox-showThumbs",
                t && a.images.length > 1
              ),
              a._superApply(arguments);
          },
          destroy: function () {
            var t = this;
            t.images.off(".uiLightbox").each(function (t, a) {
              a.node && e(a.node).off("click.uiLightbox");
            }),
              t.uiDialog && t.uiDialog.remove(),
              t._superApply(arguments);
          },
          _build: function () {
            var i = this,
              n = i.options;
            i.uiDialog ||
              ((i.uiDialog = t('<div class="ep-uiLightbox"/>')
                .outerWidth(a.width() - 100, !0)
                .outerHeight(a.height() - 100, !0)
                .attr({ tabIndex: -1, role: "dialog" })
                .on("keydown", function (t) {
                  i.options.closeOnEscape &&
                    !t.isDefaultPrevented() &&
                    t.keyCode &&
                    t.keyCode === e.ui.keyCode.ESCAPE &&
                    (t.preventDefault(), i.close(t));
                })
                .appendTo("body")
                .addClass("ui-dialog ui-hidden ui-front")),
              i._setOption("thumbs", n.thumbs),
              (i.slidesWrap = t('<div class="ep-uiLightbox-slides"/>')
                .appendTo(i.uiDialog)
                .uiSlides({
                  images: n.images,
                  effect: n.effect,
                  controls: n.controls,
                  caption: n.caption,
                  count: n.count,
                  autoplay: !1,
                  defaultSize: "L",
                })),
              (i.thumbsWrap = t('<div class="ep-uiLightbox-thumbs"/>')
                .appendTo(i.uiDialog)
                .uiThumbbox({ images: n.images, width: 100, height: 100 })),
              (i.ctrlClose = e(
                '<a href="javascript:void(0);" class="ep-uiLightbox-ctrlClose"/>'
              )
                .prependTo(i.uiDialog)
                .on("click.uiLightbox", e.proxy(i, "close"))),
              (i.ctrlCloseHandler = e("<span>x</span>").appendTo(i.ctrlClose)));
          },
          _appendTo: i._appendTo,
          _allowInteraction: i._allowInteraction,
          moveToTop: i.moveToTop,
          _moveToTop: i._moveToTop,
          _keepFocus: i._keepFocus,
          _createOverlay: i._createOverlay,
          _destroyOverlay: i._destroyOverlay,
          _resizestop: function () {
            this.uiDialog &&
              this.uiDialog
                .outerWidth(a.width() - 100, !0)
                .outerHeight(a.height() - 100, !0);
          },
          open: function () {
            this._build();
            var e = this;
            e._createOverlay(),
              e._moveToTop(),
              e.uiDialog.removeClass("ui-hidden").trigger("focus"),
              e._resizestop();
          },
          close: function () {
            var e = this;
            e._destroyOverlay(), e.uiDialog.addClass("ui-hidden");
          },
        }),
        t
      );
    }
  ),
  define(
    "ep/ui/spinner",
    ["jquery", "ep", "ep/i18n", "ep/date", "ep/sprite", "ep/ui/validate"],
    function (e, t) {
      "use strict";
      var a = function (e) {
          return !(0 !== e && (isNaN(e) || !e));
        },
        i = e("html");
      return (
        e.widget("ui.uiSpinner", e.ui.uiValidate, {
          options: {
            type: "number",
            format: "n0",
            step: 1,
            stepType: "hours",
            validateStep: !1,
            layout: "base",
          },
          _create: function () {
            var a = this,
              i = a.options;
            this._superApply(arguments),
              (this.options = e.extend(
                { step: parseInt(this.elem.attr("step"), 10) },
                this.options
              )),
              this.elem
                .addClass("ep-uiSpinner ep-uiSpinner-" + i.layout)
                .on("keydown", function (e) {
                  (38 === e.keyCode || 40 === e.keyCode) &&
                    (e.preventDefault(),
                    a._interval || a._start(38 === e.keyCode ? 1 : -1));
                })
                .on("keyup", function (e) {
                  (38 === e.keyCode || 40 === e.keyCode) &&
                    (e.preventDefault(), a._stop());
                }),
              (this.stepper = e('<span tabindex="0">')
                .addClass(
                  "ep-uiInput ep-uiInput-button ep-uiSpinner-stepper ep-uiSpinner-stepper-" +
                    i.layout
                )
                .insertAfter(this.elem)),
              (a.stepperBefore = a.stepper),
              "spread" === i.layout &&
                (this.stepperBefore = e('<span tabindex="0">')
                  .addClass(
                    "ep-uiInput ep-uiInput-button ep-uiSpinner-stepper ep-uiSpinner-stepper-" +
                      i.layout
                  )
                  .insertBefore(this.elem)),
              (this.stepUp = t(this.dict.parse('<a href="javascript:;">+</a>'))
                .addClass("ep-uiSpinner-stepUp ep-uiSpinner-stepUp-" + i.layout)
                .attr({ tabIndex: -1 })
                .on("mousedown.uiSpinner", function (e) {
                  0 === e.button && a._start(1);
                })
                .appendTo(this.stepper)),
              (this.stepDown = t(
                this.dict.parse('<a href="javascript:;">&ndash;</a>')
              )
                .addClass(
                  "ep-uiSpinner-stepDown ep-uiSpinner-stepDown-" + i.layout
                )
                .attr({ tabIndex: -1 })
                .on("mousedown.uiSpinner", function (e) {
                  0 === e.button && a._start(-1);
                })
                .appendTo(this.stepperBefore)),
              this.stack.push(
                this.stepper[0],
                this.stepperBefore[0],
                this.stepUp[0],
                this.stepDown[0]
              );
          },
          _init: function () {
            var e,
              t,
              a,
              i,
              n,
              r,
              o,
              l,
              s,
              d = this.options;
            this._superApply(arguments),
              this._unitInit(),
              "date" !== d.type &&
                ((e = /(c|n|p)(\d{0,})/.exec(d.format)),
                (t = parseInt(e[2] || 0, 10)),
                (a = d.step.toString().split(".")),
                (i = a[1] ? a[1].length : 0),
                (n = d.min.toString().split(".")),
                (r = n[1] ? n[1].length : 0),
                (o = d.max.toString().split(".")),
                (l = o[1] ? o[1].length : 0),
                (s = Math.max(Math.max(Math.max(t, i), r), l)),
                (this.options.format = e[1] + s));
          },
          _unitInit: function () {
            var t;
            !this.unit &&
              this.options.unit &&
              ((this.unit = e("<span>")
                .addClass("ep-uiSpinner-unit")
                .insertBefore(this.stepper)),
              this.stack.push(this.unit[0])),
              this.unit &&
                (this.unit.text(this.options.unit),
                (t = this.unit.width() + 4 + "px"),
                this.elem.css("padding-right", t),
                this.unit.css("margin-left", "-" + t));
          },
          _tooltipInit: function () {
            this._superApply(arguments),
              this.tooltip &&
                this.tooltip.uiTooltip("option", "offsetAdjust", [30, -1]);
          },
          _changeAttr: function (t, a) {
            var i = this;
            e.each(a, function (e, t) {
              /^(accept|pattern|required)$/i.test(e)
                ? (i.options[e] = t)
                : /^(min|max|minlength|maxlength|step)$/i.test(e) &&
                  (i.options[e] = parseInt(t, 10));
            });
          },
          _parseValue: function () {
            var i = this.options,
              n = { region: i.region },
              r = this.elem.val();
            "date" === i.type
              ? (a(this._val) ||
                  (this._val = a(i.min) ? new t.Date(i.min) : new t.Date()),
                (r = e.i18n.parseDate(r, i.format, n)),
                (this._val = a(r) ? new t.Date(r) : this._val))
              : (a(this._val) || (this._val = a(i.min) ? i.min : 0),
                (n.currency = i.currency),
                (r = e.i18n.parseNumber(r, 10, n)),
                (this._val = a(r) ? r : this._val));
          },
          _start: function (t) {
            this._parseValue(),
              (this._type =
                "_spin" + ("date" === this.options.type ? "Date" : "Number")),
              (this._step = this.options.step * t),
              (this._count = 0),
              this[this._type](),
              this._trigger("start"),
              (this._interval = setInterval(e.proxy(this, "_spin"), 250)),
              i.on("mouseup.uiSpinner", e.proxy(this, "_stop"));
          },
          _spin: function () {
            this._count++,
              /^(10|20|30)$/.test(this._count.toString()) &&
                (clearInterval(this._interval),
                (this._interval = setInterval(
                  e.proxy(this, "_spin"),
                  150 / this._count
                ))),
              this[this._type](),
              this._trigger("spin");
          },
          _spinNumber: function () {
            var t = this.options;
            (this._val += this._step),
              a(t.min) && t.min > this._val
                ? ((this._val = t.min), this._stop())
                : a(t.max) &&
                  t.max < this._val &&
                  ((this._val = t.max), this._stop()),
              this.elem.val(
                e.i18n.formatNumber(this._val, t.format, {
                  region: t.region,
                  currency: t.currency,
                })
              );
          },
          _spinDate: function () {
            var i = this.options;
            this._val[e.camelCase("add-" + i.stepType)](this._step),
              a(i.min) && i.min > this._val.getTime()
                ? ((this._val = new t.Date(i.min)), this._stop())
                : a(i.max) &&
                  i.max < this._val.getTime() &&
                  ((this._val = new t.Date(i.max)), this._stop()),
              this.elem.val(
                e.i18n.formatDate(this._val, i.format, { region: i.region })
              );
          },
          _stop: function () {
            i.off("mouseup.uiSpinner", e.proxy(this, "_stop")),
              (this._interval = clearInterval(this._interval)),
              this.elem.filter(":visible").focus().end().trigger("changeValue"),
              this._trigger("stop");
          },
          _createErrorMsgOptions: function () {
            var e,
              t = this,
              a = t.options,
              i = this._superApply(arguments);
            return (
              "INVALID_STEP" === this.valid &&
                ((e =
                  a.min +
                  ", " +
                  (1e3 * (a.min + a.step)).toFixed() / 1e3 +
                  ", " +
                  (1e3 * (a.min + 2 * a.step)).toFixed() / 1e3),
                (e = { example: e })),
              e || i
            );
          },
          _validate: function (t) {
            var a = this,
              i = a.options,
              n = e.i18n.parseNumber(this.elem.val());
            this._superApply(arguments),
              i.validateStep &&
                this.valid === !0 &&
                Math.round(1e3 * (n - i.min)) % Math.round(1e3 * i.step) &&
                (this._setValidStatus("INVALID_STEP"),
                "changeAttr" !== t.type &&
                  e(this.elem[0].form).trigger("change")),
              this.valid === !0 && a._trigger("stop");
          },
          destroy: function () {
            this.elem
              .off(".uiSpinner")
              .removeClass("epWidth-29")
              .removeClass(/ep-uiSpinner[\w\d\-]*/g),
              this._superApply(arguments);
          },
        }),
        t
      );
    }
  ),
  define("$tmpl!ep/ui/datepicker", ["jquery/tmpl"], function (e) {
    e.template(
      "ep.ui.datepicker",
      '<div class="ep-uiDatepicker-calendar"><div class="ep-uiDatepicker-titleBar"><span class="ep-uiDatepicker-title"><span class="ep-uiDatepicker-month"><span class="label-month">${month}</span>{{if months}}<select class="ep-uiDatepicker-monthSelect">{{each months}}<option value="${$value.value}" {{if $value.currentMonth}}selected="selected"{{/if}} >${$value.name}</option>{{/each}}</select>{{/if}}</span><span class="ep-uiDatepicker-year"><span class="label-year">${year}</span>{{if years}}<select class="ep-uiDatepicker-yearSelect">{{each years}}{{if $value.name <= maxYear && $value.name >= minYear}}<option value="${$value.value}" {{if $value.currentYear}}selected="selected"{{/if}} >${$value.name}</option>{{/if}}{{/each}}</select>{{/if}}</span></span></div><table class="ep-uiDatepicker-content"><thead><tr>{{each weekDays}}<th class="ep-uiDatepicker-day"><span>${$value}</a></th>{{/each}}</tr></thead><tbody>{{each weeks}}<tr>{{each $value.days}}<td class="ep-uiDatepicker-{{if $value.currentMonth}}current{{else}}other{{/if}}Month ep-uiDatepicker-day{{if !$value.visible}} ep-uiDatepicker-dayHidden{{/if}}{{if $value.selected && $value.clickable}} ep-uiDatepicker-daySelected{{/if}}{{if $value.now}} ep-uiDatepicker-dayToday{{/if}}">{{if $value.clickable}}<a href="javascript:;" class="ep-uiDatepicker-dayClick" data-tstamp="${$value.tstamp}">${$value.day}</a>{{else}}<span>${$value.day}</span>{{/if}}</td>{{/each}}</tr>{{/each}}</tbody></table></div>'
    );
    var t = e.template(
      "ep/ui/datepicker",
      '<div class="ep-uiDatepicker-calendar"><div class="ep-uiDatepicker-titleBar"><span class="ep-uiDatepicker-title"><span class="ep-uiDatepicker-month"><span class="label-month">${month}</span>{{if months}}<select class="ep-uiDatepicker-monthSelect">{{each months}}<option value="${$value.value}" {{if $value.currentMonth}}selected="selected"{{/if}} >${$value.name}</option>{{/each}}</select>{{/if}}</span><span class="ep-uiDatepicker-year"><span class="label-year">${year}</span>{{if years}}<select class="ep-uiDatepicker-yearSelect">{{each years}}{{if $value.name <= maxYear && $value.name >= minYear}}<option value="${$value.value}" {{if $value.currentYear}}selected="selected"{{/if}} >${$value.name}</option>{{/if}}{{/each}}</select>{{/if}}</span></span></div><table class="ep-uiDatepicker-content"><thead><tr>{{each weekDays}}<th class="ep-uiDatepicker-day"><span>${$value}</a></th>{{/each}}</tr></thead><tbody>{{each weeks}}<tr>{{each $value.days}}<td class="ep-uiDatepicker-{{if $value.currentMonth}}current{{else}}other{{/if}}Month ep-uiDatepicker-day{{if !$value.visible}} ep-uiDatepicker-dayHidden{{/if}}{{if $value.selected && $value.clickable}} ep-uiDatepicker-daySelected{{/if}}{{if $value.now}} ep-uiDatepicker-dayToday{{/if}}">{{if $value.clickable}}<a href="javascript:;" class="ep-uiDatepicker-dayClick" data-tstamp="${$value.tstamp}">${$value.day}</a>{{else}}<span>${$value.day}</span>{{/if}}</td>{{/each}}</tr>{{/each}}</tbody></table></div>'
    );
    return function (a, i) {
      return e.tmpl(t, a, i);
    };
  }),
  define(
    "ep/ui/datepicker",
    [
      "jquery",
      "ep",
      "$dict!ep/dict",
      "$tmpl!ep/ui/datepicker",
      "ep/date",
      "ep/sprite",
      "ep/fn/busy",
      "ep/ui/spinner",
    ],
    function (e, t, a, i) {
      e.widget("ui.uiDatepicker", e.ui.uiValidate, {
        isEventRegistered: !1,
        options: {
          bubble: !0,
          type: "date",
          format: "l",
          showOn: "button",
          duration: "normal",
          show: "fadeIn",
          hide: "fadeOut",
          weekDaysAvailable: [1, 1, 1, 1, 1, 1, 1],
          numberOfMonths: 1,
          showOtherMonth: !0,
          selectOtherMonth: !1,
          changeMonth: !0,
          changeYear: !0,
          region: e.i18n.settings.region,
          time: !0,
          timeStep: 15,
          min: void 0,
          max: void 0,
          currentDate: void 0,
          showTodayButton: !0,
          showDoneButton: !0,
          years: 10,
          isBirthday: !1,
        },
        _create: function () {
          this._superApply(arguments),
            (this.open = !1),
            (this.unity =
              this.options.unity ||
              (void 0 !== t.config.unity && t.config.unity === !0)
                ? !0
                : !1),
            (this.dict = a);
          var i,
            n = this.options.currentDate;
          this.element.addClass("ep-datepicker-input"),
            (i = n ? new t.Date(n.year, n.month, n.day) : new t.Date()),
            i.setMinutes(30).setSeconds(0).setMilliseconds(0),
            (this._date = i.clone().setHours(0, 0, 0, 0)),
            (this._dateNow = this._date.clone()),
            (this._dateSelected = this._date.clone()),
            (this._timeSelected = i.clone().setFullYear(0, 0, 0)),
            (this.domCache = e("<div>")),
            (this.cal = e.i18n.regions[this.options.region].calendar),
            this.elem.on(
              "changeValue.uiDatepicker",
              e.proxy(this, "_changeElemVal")
            ),
            (this.showButton = e("<span>")
              .attr({
                class:
                  "ep-uiInput ep-uiInput-base ep-uiInput-button ep-uiDatepicker-showButton",
              })
              .html(
                this.unity
                  ? '<span class="fa fa-calendar fa-lg ep-uiInput-buttonSpriteOnly"></span>'
                  : t
                      .sprite("calendar", "s")
                      .addClass("ep-uiInput-buttonSpriteOnly")
              )
              .on("click.uiDatepicker", e.proxy(this, "show"))
              .appendTo(this.domCache)),
            this.stack.push(this.domCache[0], this.showButton[0]),
            this._changeElemVal();
        },
        _init: function () {
          var t = this,
            a = t.options;
          t._superApply(arguments),
            /^(focus|both)$/.test(a.showOn) &&
              t.elem
                .off("focus.uiDatepicker")
                .on("focus.uiDatepicker", e.proxy(t, "show")),
            /^(button|both)$/.test(a.showOn)
              ? a.buttonBefore
                ? ((t.wrapperSpan = e("<span />")),
                  t.wrapperSpan.insertBefore(t.placeholder || t.elem),
                  t.wrapperSpan.append(t.elem),
                  t.showButton.insertBefore(t.wrapperSpan))
                : t.showButton.insertAfter(t.placeholder || t.elem)
              : t.showButton.appendTo(t.domCache),
            t.container &&
              (t._initCalCache(), a.time && !t.timeBar && t._createTimeBar()),
            t._tooltipInit(),
            "inline" === a.showOn && t.show();
        },
        _initCalCache: function () {
          this._calCache = {
            weekDays: n(
              e.merge([], this.cal.days.namesShort),
              this.cal.firstDay
            ),
            months: e.merge([], this.cal.months.names),
          };
        },
        _tooltipInit: function () {
          this._superApply(arguments),
            this.tooltip && /^(button|both)$/.test(this.options.showOn)
              ? this.tooltip.uiTooltip("option", "offsetAdjust", [30, -1])
              : this.tooltip &&
                this.tooltip.uiTooltip("option", "offsetAdjust", [3, -2]);
        },
        _createBase: function () {
          var a = this;
          (a.container = t("<form>")
            .addClass("epDialog ep-uiDatepicker-container ui-dialog ui-front")
            .hide()),
            (a.prevButton = t('<button type="button">')
              .append(
                a.unity
                  ? e('<span class="fa fa-angle-left" />')
                  : t
                      .sprite("arrow-l", "s")
                      .addClass("ep-uiInput-buttonSpriteOnly")
              )
              .addClass("ep-uiDatepicker-prev")
              .on("click.uiDatepicker", function () {
                a._changeMonth(-1);
              })),
            (a.nextButton = t('<button type="button">')
              .append(
                a.unity
                  ? e('<span class="fa fa-angle-right" />')
                  : t
                      .sprite("arrow-r", "s")
                      .addClass("ep-uiInput-buttonSpriteOnly")
              )
              .addClass("ep-uiDatepicker-next")
              .on("click.uiDatepicker", function () {
                a._changeMonth(1);
              })),
            (a.buttonBar = e("<div>")
              .addClass("ep-uiDatepicker-buttonBar")
              .appendTo(a.container)),
            a.unity
              ? (a.container.addClass("ep-uiDatepicker-container-unity"),
                a.buttonBar.addClass("ep-uiDatepicker-buttonBar-unity"),
                a.options.showDoneButton &&
                  (a.doneButton = t('<button type="button">')
                    .html('<span class="fa fa-remove" />')
                    .appendTo(a.buttonBar)
                    .addClass("ep-uiDatepicker-button-close")
                    .on("click.uiDatepicker", e.proxy(a, "hide"))))
              : (a.options.showTodayButton &&
                  (a.todayButton = t('<button type="button">')
                    .text(a.dict.translate("Today"))
                    .appendTo(a.buttonBar)
                    .addClass("ep-uiDatepicker-today")
                    .on("click.uiDatepicker", function () {
                      (a._date = a._dateNow.clone().setHours(0, 0, 0, 0)),
                        a._changeDay(a._date.getTime()),
                        a._createCalendars();
                    })),
                a.options.showDoneButton &&
                  (a.doneButton = t('<button type="button">')
                    .text(a.dict.translate("Done"))
                    .appendTo(a.buttonBar)
                    .addClass("ep-uiDatepicker-done")
                    .on("click.uiDatepicker", e.proxy(a, "hide")))),
            a.container
              .on(
                "click",
                "a.ep-uiDatepicker-dayClick",
                e.proxy(a, "_selectDay")
              )
              .on("click", "select.ep-uiDatepicker-yearSelect", function (e) {
                e.preventDefault(), e.stopPropagation();
              })
              .on("click", "select.ep-uiDatepicker-monthSelect", function (e) {
                e.preventDefault(), e.stopPropagation();
              })
              .on(
                "change",
                "select.ep-uiDatepicker-monthSelect,select.ep-uiDatepicker-yearSelect",
                function () {
                  a._changeMonth(parseInt(this.value, 10));
                }
              ),
            (a.calendars = e()),
            a._init(),
            a.container.appendTo("body"),
            a.stack.push(
              a.container[0],
              a.prevButton[0],
              a.nextButton[0],
              a.buttonBar[0]
            ),
            !a.unity &&
              a.options.showTodayButton &&
              a.stack.push(a.todayButton[0]),
            a.options.showDoneButton && a.stack.push(a.doneButton[0]);
        },
        _createTimeBar: function () {
          (this.timeBar = e("<div>")
            .addClass("ep-uiDatepicker-timeBar")
            .insertBefore(this.buttonBar)),
            this.stack.push(this.timeBar[0]),
            this._createTimeSelect();
        },
        _createTimeSelect: function () {
          (this.timeSelect = t("<input>")
            .attr({ class: "epWidth100", placeholder: "00:00" })
            .appendTo(this.timeBar)
            .uiSpinner({
              type: "date",
              step: 15,
              stepType: "minutes",
              format: "t",
              region: this.options.region,
            })
            .uiInput()),
            this.timeSelect
              .uiInput("addClass", "ep-uiDatepicker-time")
              .on("changeValue.uiDatepicker", e.proxy(this, "_changeTimeVal")),
            this._setTimeVal(),
            this.stack.push(this.timeSelect[0]);
        },
        _createCalendars: function () {
          this.container.busy("show");
          var t,
            a = this,
            n = a.options,
            o = a._calendarData();
          e.each(o, function (e, t) {
            for (; t.days.length >= 7; )
              t.weeks.push({ days: t.days.splice(0, 7) });
          }),
            (t = i(o)),
            t.not(":first,:last").addClass("ep-uiDatepicker-calendarMiddle"),
            t.not(":last").first().addClass("ep-uiDatepicker-calendarFirst"),
            t.not(":first").last().addClass("ep-uiDatepicker-calendarLast"),
            a.prevButton
              .attr(
                "disabled",
                !r(
                  n.min,
                  a._date
                    .clone()
                    .setFirstMonthDay()
                    .setHours(0, 0, 0, -1)
                    .getTime()
                )
              )
              .prependTo(t.filter(":first").find(".ep-uiDatepicker-titleBar")),
            a.nextButton
              .attr(
                "disabled",
                !r(
                  void 0,
                  a._date
                    .clone()
                    .setLastMonthDay()
                    .setHours(0, 0, 0, 0)
                    .addDate(1)
                    .getTime(),
                  n.max
                )
              )
              .appendTo(t.filter(":last").find(".ep-uiDatepicker-titleBar")),
            a.calendars.html("").remove(),
            a.container[a.unity ? "append" : "prepend"](t).busy("hide"),
            a.unity && a.timeBar && a.timeBar.appendTo(a.container),
            (a.calendars = t);
        },
        _calendarData: function () {
          var t,
            a = this.options,
            i = this._date.clone().addMonth(-Math.ceil(a.numberOfMonths / 2)),
            n = this._dateNow.getTime(),
            o = this._dateSelected.getTime(),
            l = { region: this.options.region },
            s = this._date.getMonth(),
            d = null,
            c = null,
            u = [];
          if (
            (a.changeMonth &&
              ((d = []),
              e.each(this._calCache.months, function (e, t) {
                t &&
                  d.push({
                    value: -1 * (s - e),
                    name: t,
                    currentMonth: s === e,
                  });
              })),
            a.changeYear)
          ) {
            var m = this._date.clone();
            for (
              c = [{ value: 0, name: m.getFormat("yyyy", l), currentYear: !0 }],
                t = 1;
              t <= a.years;
              t++
            )
              m.addFullYear(-1),
                c.unshift({
                  value: -12 * t,
                  name: m.getFormat("yyyy", l),
                  currentYear: !1,
                });
            if (a.isBirthday === !0)
              for (
                m = this._date.clone(), t = 1;
                t <= a.years,
                  m.date.getFullYear() < this._dateNow.date.getFullYear();
                t++
              )
                m.addFullYear(1),
                  c.push({
                    value: 12 * t,
                    name: m.getFormat("yyyy", l),
                    currentYear: !1,
                  });
            else
              for (m.addFullYear(a.years), t = 1; t <= a.years; t++)
                m.addFullYear(1),
                  c.push({
                    value: 12 * t,
                    name: m.getFormat("yyyy", l),
                    currentYear: !1,
                  });
          }
          for (t = 0, iLength = a.numberOfMonths; iLength > t; t++) {
            var p = i.addMonth(1),
              h = p.clone().setDate(0),
              g = p.clone().setFirstMonthDay(),
              f = g.getTime(),
              y = p.clone().setLastMonthDay().getTime(),
              b = g.getMonthLength(),
              v = g.getDay() - this.cal.firstDay,
              k = {
                year: g.getFormat("yyyy", l),
                years: c,
                maxYear: a.max
                  ? new Date(a.max).getYear() + 1900
                  : Number.MAX_SAFE_INTEGER,
                minYear: a.min ? new Date(a.min).getYear() + 1900 : 0,
                month: g.getFormat("MMMM", l),
                months: d,
                weekDays: this._calCache.weekDays,
                weeks: [],
                days: [],
              };
            0 > v && (v += 7), h.addDate(-v);
            for (var T = 1, w = 7 * Math.ceil((v + b) / 7); w >= T; T++) {
              var x = h.addDate(1),
                S = x.getTime(),
                C = r(f, S, y),
                M = r(a.min, S, a.max) && a.weekDaysAvailable[x.getDay()];
              k.days.push({
                date: x.clone(),
                tstamp: S,
                day: x.getDate(),
                currentMonth: !!C,
                clickable: (C || a.selectOtherMonth) && M,
                visible: !!(C || a.selectOtherMonth || a.showOtherMonth),
                selected: S === o,
                now: S === n,
              });
            }
            u.push(k);
          }
          return u;
        },
        _setElemVal: function (e) {
          var a,
            i = this,
            n = i.options,
            r = new t.Date(
              i._dateSelected.getFullYear(),
              i._dateSelected.getMonth(),
              i._dateSelected.getDate(),
              isNaN(i._timeSelected.getHours())
                ? 0
                : i._timeSelected.getHours(),
              isNaN(i._timeSelected.getMinutes())
                ? 0
                : i._timeSelected.getMinutes(),
              isNaN(i._timeSelected.getSeconds())
                ? 0
                : i._timeSelected.getSeconds()
            ).getFormat(n.format, { region: n.region });
          n.bubble && i.elem.val(r),
            i.elem.attr("value", r),
            void 0 !== n.onAfterSetValue && n.onAfterSetValue(i.elem),
            (a = e && void 0 !== e.keepOpen ? !1 : !0),
            i.unity && a && i.hide();
        },
        _getElemVal: function () {
          var a = e.i18n.parseDate(this.elem.val(), this.options.format, {
            region: this.options.region,
          });
          return a ? new t.Date(a.getTime()) : null;
        },
        _changeElemVal: function () {
          var e = this.options,
            t = this._getElemVal();
          t &&
            r(e.min, t.clone().setLastMonthDay().getTime()) &&
            r(void 0, t.clone().setFirstMonthDay().getTime(), e.max) &&
            (this.elem.is(":focus") &&
              (this._date = t.clone().setHours(0, 0, 0, 0)),
            (this._dateSelected = t.clone().setHours(0, 0, 0, 0)),
            (this._timeSelected = t.clone().setFullYear(0, 0, 0)),
            this.timeSelect && this._setTimeVal()),
            this.container &&
              0 === this.container.filter(".ep-uiDatepicker-calendar").length &&
              this._createCalendars();
        },
        _setTimeVal: function () {
          this.timeSelect.is(":focus") ||
            this.timeSelect.val(
              this._timeSelected.getFormat("t", { region: this.options.region })
            );
        },
        _getTimeVal: function () {
          var a = e.i18n.parseDate(this.timeSelect.val(), "t", {
            region: this.options.region,
          });
          return a ? new t.Date(a.getTime()) : null;
        },
        _changeTimeVal: function () {
          var e = this._getTimeVal();
          e &&
            ((this._timeSelected = e.setFullYear(0, 0, 0)),
            this._setElemVal({ keepOpen: !0 }));
        },
        _changeMonth: function (e) {
          this._date.addMonth(e), this._createCalendars();
        },
        _changeDay: function (e) {
          (this._dateSelected = new t.Date(e)), this._setElemVal();
        },
        _selectDay: function (t) {
          this._changeDay(parseInt(e(t.target).attr("data-tstamp"), 10));
        },
        _moveToTop: t.ui.createMoveToTop("container"),
        _show: function () {
          var a = this,
            i = a.options,
            n = a.element,
            r = t(".ep-uiDatepicker-calendar").closest("form"),
            o = t(":ui-UiDatepicker");
          r.each(function (t, a) {
            e(a).is(":visible") && e(a).trigger("closeDatePicker");
          }),
            o.each(function (e, t) {
              t !== n[0] &&
                o.eq(e).uiDatepicker("isOpen") &&
                o.eq(e).uiDatepicker("hide");
            }),
            a.isEventRegistered ||
              (e(document).on("click" + a.eventNamespace, function (e) {
                var i = t(".ep-uiDatepicker-calendar").closest("form"),
                  n =
                    e.target === a.showButton[0]
                      ? !0
                      : a.showButton[0].contains(e.target),
                  r = a.container[0].getBoundingClientRect();
                i.each(function () {
                  a._moveToTop({}, !0);
                }),
                  (r.top < e.clientY &&
                    e.clientY < r.bottom &&
                    r.left < e.clientX &&
                    e.clientX < r.right) ||
                    n ||
                    a.hide();
              }),
              (a.isEventRegistered = !0)),
            "inline" !== i.showOn
              ? (this.container
                  .contextOrientation(this.elem, "bottom", [-1, 1])
                  .focus(),
                this.container
                  .stop(!0, !0)
                  [e.fn[i.show] ? i.show : "show"](i.duration),
                e("html").on("keyup", e.proxy(this, "_hide")))
              : (this.buttonBar.hide(),
                this.container
                  .insertAfter(this.elem)
                  .css("position", "relative")
                  .show()),
            (this.open = !0),
            this.elem.blur();
        },
        show: function () {
          this.elem.is(":disabled") ||
            (this.container || this._createBase(),
            this._show(),
            this._changeElemVal(),
            this._setValidStatus(!0));
        },
        _hide: function (e) {
          27 === e.keyCode && (this.hide(), this._validate(e)),
            (this.open = !1);
        },
        hide: function () {
          var t = this,
            a = t.options;
          e(document).off("click" + t.eventNamespace),
            (t.isEventRegistered = !1),
            "inline" !== a.showOn &&
              (t.container
                .stop(!0, !0)
                [e.fn[a.hide] ? a.hide : "hide"](a.duration),
              e("html").off("keyup", e.proxy(t, "_hide")));
        },
        getDate: function () {
          return new t.Date(
            this._dateSelected.getFullYear(),
            this._dateSelected.getMonth(),
            this._dateSelected.getDate(),
            this._timeSelected.getHours(),
            this._timeSelected.getMinutes(),
            this._timeSelected.getSeconds()
          );
        },
        isOpen: function () {
          return this.open;
        },
      });
      var n = function (e, t) {
          var a = e.splice(0, t);
          return e.concat(a);
        },
        r = function (e, a, i) {
          return (
            (e = new t.Date("object" == typeof e && e.getTime ? e.getTime() : e)
              .setHours(0, 0, 0, 0)
              .getTime()),
            (i = new t.Date("object" == typeof i && i.getTime ? i.getTime() : i)
              .setHours(0, 0, 0, 0)
              .getTime()),
            !e || a >= e ? (!i || i >= a ? !0 : !1) : !1
          );
        };
      return t;
    }
  ),
  define(
    "ep/canvas",
    ["jquery", "ep", "util/browser"].concat(
      this.HTMLCanvasElement
        ? []
        : ["jquery/canvas/excanvas", "jquery/canvas/canvastext"]
    ),
    function (e, t) {
      var a = function (e) {
          return (
            e.getContext ||
              void 0 === G_vmlCanvasManager ||
              (e = G_vmlCanvasManager.initElement(e)),
            e.getContext ? ((e.ctx = e.getContext("2d")), e) : null
          );
        },
        i = function (e) {
          return (e * Math.PI) / 180;
        },
        n = function (e, t, a) {
          for (
            var n,
              r,
              o = t.text.split(t.delimiter),
              l = {},
              s = 0,
              d = 0,
              c = o.length;
            c > d;
            d++
          )
            (l[d] = {}),
              (l[d].width = a.measureText(o[d]).width),
              (s = l[d].width > s ? l[d].width : s);
          var u = Math.atan(s / (e * o.length)),
            m = Math.sqrt(s * s + e * o.length * e * o.length),
            p = t.phi,
            h = {};
          return (
            (p > 90 && 180 > p) || (p > 270 && 360 > p)
              ? ((h.x = i(p) - u - i(90)), (h.y = i(180) - i(p) - u))
              : ((h.x = i(90) - i(p) - u), (h.y = u - i(p))),
            (n = Math.abs(Math.cos(h.x) * m)),
            (r = Math.abs(Math.cos(h.y) * m)),
            { w: n, h: r, measureWidth: s, multiLines: o, lineHeight: e }
          );
        },
        r = function () {},
        o = e.extend(r.prototype, {
          length: 0,
          push: Array.prototype.push,
          each: jQuery.fn.each,
          end: function () {
            return this.prevObject || e();
          },
          rescaleDimensions: function (t) {
            var a = e.extend(
              {
                x: 0,
                y: 0,
                style: "fillText",
                fontSize: 12,
                fontFamily: "Arial",
                fontUnit: "pt",
                phi: 0,
                delimiter: "\n",
                align: "left",
                rp: "c",
                correctLineHeight: 0,
                minSize: 10,
                maxWidth: void 0,
                maxHeight: void 0,
                resizeCanvas: !1,
                resizable: !0,
                text: "dummy\ndummy",
              },
              t
            );
            (a.style = a.style.match(/fillText|strokeText/)
              ? a.style
              : "fillText"),
              this[0].ctx.save(),
              (this[0].ctx.font = a.fontSize + a.fontUnit + " " + a.fontFamily);
            var i =
                e.browser.msie && parseInt(e.browser.version, 10) < 9 ? !0 : !1,
              r = e("<div />")
                .html("QjÖ")
                .css({
                  "font-size": a.fontSize + a.fontUnit,
                  "line-height": i ? "150%" : "",
                  "font-family": a.fontFamily,
                  position: "absolute",
                  left: "-9999px",
                  padding: 0,
                });
            e(i ? "body" : "html").append(r);
            var o = r.height() + a.correctLineHeight,
              l = 1,
              s = n(o, a, this[0].ctx),
              d = s.w,
              c = s.h,
              u = s.measureWidth,
              m = s.multiLines,
              p = u,
              h = o * m.length;
            return (
              r.remove(),
              this[0].ctx.restore(),
              {
                lineHeight: o,
                scale: l,
                newDimensions: s,
                newWidth: d,
                newHeight: c,
                measureWidth: u,
                multiLines: m,
                newInnerWidth: p,
                newInnerHeight: h,
                defaults: a,
              }
            );
          },
          calcTextDimensions: function (t) {
            this[0].ctx.save();
            var a = this.rescaleDimensions(t),
              i = a.lineHeight,
              r = a.scale,
              o = a.newDimensions,
              l = o.w,
              s = o.h,
              d = o.measureWidth,
              c = o.multiLines,
              u = d,
              m = i * c.length,
              p = a.defaults,
              h = !1;
            if (p.maxWidth || p.maxHeight) {
              if (p.resizable) {
                var g = p.maxWidth / l,
                  f = p.maxHeight / s,
                  y = 1;
                p.maxWidth && l > p.maxWidth && (y = g),
                  p.maxHeight && s > p.maxHeight && (y = r > f ? f : r),
                  y * s < p.minSize * c.length &&
                    ((h = !0),
                    e.extend(t, {
                      fontSize:
                        (p.fontSize * y * p.minSize * c.length) / (y * s),
                    }),
                    (a = this.rescaleDimensions(t)),
                    (i = a.lineHeight),
                    (r = a.scale),
                    (o = a.newDimensions),
                    (l = o.w),
                    (s = o.h),
                    (d = o.measureWidth),
                    (c = o.multiLines),
                    (u = d),
                    (m = i * c.length),
                    (p = a.defaults));
              }
              if (p.resizable && s > p.minSize * c.length && !h)
                p.maxWidth && l > p.maxWidth && (r = p.maxWidth / l),
                  p.maxHeight &&
                    s > p.maxHeight &&
                    (r = p.maxHeight / s < r ? p.maxHeight / s : r),
                  (p.fontSize *= r);
              else if (p.resizeCanvas) {
                for (; l >= p.maxWidth || s >= p.maxHeight; )
                  (p.text = p.text.substr(0, p.text.length - 1)),
                    (o = n(i, p, this[0].ctx)),
                    (l = o.w),
                    (s = o.h);
                (d = o.measureWidth),
                  (c = o.multiLines),
                  (u = d),
                  (m = i * c.length);
              }
              (s = Math.ceil(r * s)),
                (l = Math.ceil(r * l)),
                (m = Math.ceil(r * m)),
                (u = Math.ceil(r * u));
            }
            return (
              (p.resizeCanvas || 0 !== p.phi) &&
                ((p.x = 0.5 * (l - u)), (p.y = 0.5 * (s - m))),
              this[0].ctx.restore(),
              {
                w: l,
                h: s,
                innerW: u,
                innerH: m,
                measureWidth: d,
                multiLines: c,
                lineHeight: i,
                scale: r,
                text: p.text,
                x: p.x,
                y: p.y,
                fontSize: p.fontSize,
              }
            );
          },
          multiline: function (t) {
            var a = e.extend(
              {
                x: 0,
                y: 0,
                style: "fillText",
                fontSize: 12,
                fontFamily: "Arial",
                fontUnit: "pt",
                phi: 0,
                delimiter: "\n",
                align: "left",
                rp: "c",
                correctLineHeight: 0,
                text: "default",
              },
              t
            );
            return this.each(function () {
              (a.style = a.style.match(/fillText|strokeText/)
                ? a.style
                : "fillText"),
                (this.ctx.font = a.fontSize + a.fontUnit + " " + a.fontFamily);
              var t =
                  e.browser.msie && parseInt(e.browser.version, 10) < 9
                    ? !0
                    : !1,
                i = e("<div />")
                  .html("QjÖ")
                  .css({
                    "font-size": a.fontSize + a.fontUnit,
                    "line-height": t ? "150%" : "",
                    "font-family": a.fontFamily,
                    position: "absolute",
                    left: "-9999px",
                    padding: 0,
                  });
              e(t ? "body" : "html").append(i);
              var r = i.height() + a.correctLineHeight,
                o = n(r, a, this.ctx),
                l = (o.scale, o.w, o.h, o.measureWidth),
                s = o.multiLines,
                d = {};
              i.remove(), this.ctx.save();
              for (var c = 0, u = s.length; u > c; c++)
                (d[c] = {}), (d[c].width = this.ctx.measureText(s[c]).width);
              this.ctx.translate(a.x, a.y),
                (this.ctx.font = a.fontSize + a.fontUnit + " " + a.fontFamily),
                (this.ctx.fontSize = a.fontSize),
                (this.ctx.fontFamily = a.fontFamily),
                (this.ctx.fontUnit = a.fontUnit),
                (this.ctx.textBaseline = "middle");
              var m = { x: 0, y: 0 };
              switch (a.rp) {
                case "nw":
                  (m.x = 0), (m.y = 0);
                  break;
                case "n":
                  (m.x = l / 2), (m.y = 0);
                  break;
                case "ne":
                  (m.x = l), (m.y = 0);
                  break;
                case "w":
                  (m.x = 0), (m.y = (r * s.length) / 2);
                  break;
                case "c":
                  (m.x = l / 2), (m.y = (r * s.length) / 2);
                  break;
                case "e":
                  (m.x = l), (m.y = (r * s.length) / 2);
                  break;
                case "sw":
                  (m.x = 0), (m.y = r * s.length);
                  break;
                case "s":
                  (m.x = l / 2), (m.y = r * s.length);
                  break;
                case "se":
                  (m.x = l), (m.y = r * s.length);
              }
              this.ctx.translate(m.x, m.y),
                this.ctx.rotate((a.phi * Math.PI) / 180);
              for (var p = 0, h = s.length; h > p; p++) {
                var g =
                  "left" === a.align
                    ? 0 - m.x
                    : "right" === a.align
                    ? l - d[p].width - m.x
                    : l / 2 - d[p].width / 2 - m.x;
                this.ctx[a.style](s[p], g, (p + 0.5) * r - m.y);
              }
              this.ctx.restore();
            });
          },
          toDataURL: function (t) {
            var a = e.extend({ type: "image/png", index: 0 }, t);
            return this[a.index] && void 0 !== this[a.index].toDataURL
              ? this[a.index].toDataURL(a.type)
              : void 0;
          },
        });
      return (
        e.each(
          [
            "fillStyle",
            "strokeStyle",
            "lineWidth",
            "lineCap",
            "lineJoin",
            "globalAlpha",
            "globalCompositeOperation",
            "shadowOffsetX",
            "shadowOffsetY",
            "shadowBlur",
            "shadowColor",
            "miterLimit",
            "font",
          ],
          function (e, t) {
            o[t] = function () {
              var e = arguments[0];
              return void 0 === e
                ? this[0].ctx[t]
                : this.each(function () {
                    this.ctx[t] = e;
                  });
            };
          }
        ),
        e.each(
          [
            "fillRect",
            "strokeRect",
            "clearRect",
            "drawImage",
            "fillText",
            "strokeText",
            "measureText",
            "rotate",
            "scale",
            "translate",
            "save",
            "restore",
            "createLinearGradient",
            "createRadialGradient",
            "createPattern",
            "getImageData",
            "putImageData",
            "arc",
            "arcTo",
            "beginPath",
            "bezierCurveTo",
            "clip",
            "closePath",
            "fill",
            "isPointInPath",
            "lineTo",
            "moveTo",
            "quadraticCurveTo",
            "rect",
            "stroke",
          ],
          function (e, t) {
            o[t] = function () {
              var e = arguments;
              return this.each(function () {
                this.ctx[t].apply(this.ctx, e);
              });
            };
          }
        ),
        (e.fn.canvas = function () {
          var e = new r();
          return (
            this.each(function () {
              e.push(a(this));
            }),
            (e.prevObject = this),
            e
          );
        }),
        t
      );
    }
  ),
  define(
    "ep/fn/sendasform",
    ["jquery", "ep", "util/storage", "jquery/cookie"],
    function (e, t, a) {
      "use strict";
      var i = function (t, a) {
        var i,
          n = e(
            '<form method="post" action="' +
              (a.additional.url ? a.additional.url : "?") +
              '" />'
          ),
          r = e.cookie(),
          o = a.formOptions;
        a.additional.target && n.attr("target", a.additional.target);
        for (i in o)
          o.hasOwnProperty(i) &&
            n.append(
              '<input type="hidden" name="' + i + '" value="' + o[i] + '" />'
            );
        r[a.additional.tokenName] &&
          n.append(
            '<input type="hidden" name="' +
              a.additional.tokenName +
              '" value="' +
              r[a.additional.tokenName] +
              '" />'
          ),
          e(a.additional.body).append(n),
          a.additional.send && n.trigger("submit");
      };
      return (
        (t.fn.sendAsForm = function (t) {
          var n = this,
            r = { target: !1, tokenName: "SecToken", body: "body", send: !0 };
          return (
            (t.additional = t.additional || {}),
            e.extend(r, t.additional),
            e.extend(t.additional, r),
            n.on("click", function (e) {
              e.preventDefault(),
                "function" == typeof r.fn && r.fn(),
                t.formOptions.ChangeAction &&
                  "Logout" === t.formOptions.ChangeAction &&
                  a.sessionStorage("Product::ProductComparison", null),
                i(n, t);
            }),
            this
          );
        }),
        t
      );
    }
  ),
  define("de_epages/core", ["de_epages"], function (e) {
    return e;
  }),
  define("de_epages/design/inc/sf-initialize", ["jquery"], function (e) {
    var t = e(window),
      a = /#([\w][\w\d\-]*)$/,
      i = function (i, n) {
        var r = a.exec(n || e(this).attr("href"));
        if (r && !e(this).hasClass("ui-tabs-anchor")) {
          var o = e("#" + r[1] + ', a[name="' + r[1] + '"]');
          o.length && (t.scrollTop(o.offset().top), i.preventDefault());
        }
      };
    if ((e(document).on("click", "a", i), a.test(location.href))) {
      var n,
        r,
        o,
        l = function () {
          clearInterval(n), r.scrollTop(0), i(e.Event(), location.href);
        },
        s = function () {
          d++, (d >= 25 || o.position().top < 0) && l();
        },
        d = 0;
      e.ready(function () {
        (r = e(".Middle").on("scroll", l)),
          (o = r.children(":first")),
          (n = setInterval(s, 100));
      });
    }
    return {};
  }),
  define(
    "de_epages/catalog/ui/productlastviewed",
    ["jquery", "de_epages", "util/storage", "jquery/ui/widget", "jquery/tmpl"],
    function (e, t, a) {
      return (
        e.widget("ui.catalogUiProductLastViewed", {
          options: { maxItems: 5 },
          _create: function () {
            if (
              ((this.listElem = e("<ul>").addClass(
                "de_epages-catalogUiProductLastViewed"
              )),
              (this.products = a.localStorage(
                "Catalog::ProductLastViewed.list"
              )),
              this.products)
            ) {
              var t = [],
                i = [],
                n = [],
                r = this.options.maxItems - 1;
              e.each(this.products, function (e, a) {
                t.push(a.tstamp), (i[a.tstamp] = a);
              }),
                (t = t.sort().reverse()),
                e.each(t, function (e, t) {
                  return n.push(i[t]), e >= r ? !1 : void 0;
                }),
                this.element.append(
                  this.listElem.append(
                    e.tmpl(
                      '<li><a href="?ObjectPath=${objectPath}"><img src="${image}" />${name}</a></li>',
                      n
                    )
                  )
                );
            }
          },
          destroy: function () {
            this.listElem.remove(), this._superApply(arguments);
          },
        }),
        t
      );
    }
  ),
  define(
    "$tmpl!de_epages/externalcontent/dojogadgetfix-rss-box",
    ["jquery/tmpl"],
    function (e) {
      e.template(
        "de_epages.externalcontent.dojogadgetfix-rss-box",
        '<div class="RSSFeed Box"><div class="BoxContainer"><div class="ContextBoxHead"><span><img src="${o.storeRoot}/SF/Gadgets/rss-icon.png" class="AlignMiddle RSSIcon LinkImage RightPaddingSmall" />&nbsp;<a href="${pageLink}" target="_blank">${name}</a></span></div><div class="PostHeadlineColumn">${$item.formatDate(pubDate)}<br />${description} {{if o.showlogo && logo.src}}<img src="${logo.src}" alt=""/>{{/if}}</div>{{each items}}<div class="PostText"><a target="_blank" href="${$value.link}">${$value.title}</a><br />{{if o.onlyheadlines==false}}${$item.formatDate($value.pubDate)}{{html $item.scrunchText($value.text)}}{{/if}}</div>{{/each}}</div></div>'
      );
      var t = e.template(
        "de_epages/externalcontent/dojogadgetfix-rss-box",
        '<div class="RSSFeed Box"><div class="BoxContainer"><div class="ContextBoxHead"><span><img src="${o.storeRoot}/SF/Gadgets/rss-icon.png" class="AlignMiddle RSSIcon LinkImage RightPaddingSmall" />&nbsp;<a href="${pageLink}" target="_blank">${name}</a></span></div><div class="PostHeadlineColumn">${$item.formatDate(pubDate)}<br />${description} {{if o.showlogo && logo.src}}<img src="${logo.src}" alt=""/>{{/if}}</div>{{each items}}<div class="PostText"><a target="_blank" href="${$value.link}">${$value.title}</a><br />{{if o.onlyheadlines==false}}${$item.formatDate($value.pubDate)}{{html $item.scrunchText($value.text)}}{{/if}}</div>{{/each}}</div></div>'
      );
      return function (a, i) {
        return e.tmpl(t, a, i);
      };
    }
  ),
  define(
    "$tmpl!de_epages/externalcontent/dojogadgetfix-rss-classic",
    ["jquery/tmpl"],
    function (e) {
      e.template(
        "de_epages.externalcontent.dojogadgetfix-rss-classic",
        '<div class="RSSFeed Classic"><div class="Head"><div style="float:right;">{{if o.showlogo && logo.src}}<img src="${logo.src}" alt=""/>{{/if}}</div><div class="FeedName"><img src="${o.storeRoot}/SF/Gadgets/rss-icon.png" align="left" class="AlignMiddle RSSIcon LinkImage" /><a href="${pageLink}" target="_blank">${name}</a></div>${$item.formatDate(pubDate)}<br />${description}</div><div style="clear:both;">{{each items}}<div class="PostHeadlineColumn"><a target="_blank" href="${$value.link}">${$value.title}</a><br /></div>{{if o.onlyheadlines==false}}<div class="PostText">${$item.formatDate($value.pubDate)}{{html $item.scrunchText($value.text)}}</div>{{/if}}{{/each}}</div></div>'
      );
      var t = e.template(
        "de_epages/externalcontent/dojogadgetfix-rss-classic",
        '<div class="RSSFeed Classic"><div class="Head"><div style="float:right;">{{if o.showlogo && logo.src}}<img src="${logo.src}" alt=""/>{{/if}}</div><div class="FeedName"><img src="${o.storeRoot}/SF/Gadgets/rss-icon.png" align="left" class="AlignMiddle RSSIcon LinkImage" /><a href="${pageLink}" target="_blank">${name}</a></div>${$item.formatDate(pubDate)}<br />${description}</div><div style="clear:both;">{{each items}}<div class="PostHeadlineColumn"><a target="_blank" href="${$value.link}">${$value.title}</a><br /></div>{{if o.onlyheadlines==false}}<div class="PostText">${$item.formatDate($value.pubDate)}{{html $item.scrunchText($value.text)}}</div>{{/if}}{{/each}}</div></div>'
      );
      return function (a, i) {
        return e.tmpl(t, a, i);
      };
    }
  ),
  define(
    "$tmpl!de_epages/externalcontent/dojogadgetfix-rss-standard",
    ["jquery/tmpl"],
    function (e) {
      e.template(
        "de_epages.externalcontent.dojogadgetfix-rss-standard",
        '<div><div><div style="float:right;">{{if o.showlogo && logo.src}}<img src="${logo.src}" alt=""/>{{/if}}</div><div><img src="${o.storeRoot}/SF/Gadgets/rss-icon.png" class="LinkImage" align="left" /><a href="${pageLink}" target="_blank">${name}</a></div>${$item.formatDate(pubDate)}<br />${description}</div><div style="clear:both;">{{each items}}<div><a target="_blank" href="${$value.link}">${$value.title}</a><br /></div>{{if o.onlyheadlines==false}}<div>${$item.formatDate($value.pubDate)}{{html $item.scrunchText($value.text)}}</div>{{/if}}{{/each}}</div></div>'
      );
      var t = e.template(
        "de_epages/externalcontent/dojogadgetfix-rss-standard",
        '<div><div><div style="float:right;">{{if o.showlogo && logo.src}}<img src="${logo.src}" alt=""/>{{/if}}</div><div><img src="${o.storeRoot}/SF/Gadgets/rss-icon.png" class="LinkImage" align="left" /><a href="${pageLink}" target="_blank">${name}</a></div>${$item.formatDate(pubDate)}<br />${description}</div><div style="clear:both;">{{each items}}<div><a target="_blank" href="${$value.link}">${$value.title}</a><br /></div>{{if o.onlyheadlines==false}}<div>${$item.formatDate($value.pubDate)}{{html $item.scrunchText($value.text)}}</div>{{/if}}{{/each}}</div></div>'
      );
      return function (a, i) {
        return e.tmpl(t, a, i);
      };
    }
  ),
  (function (e, t, a) {
    define("de_epages/externalcontent/dojogadgetfix", [
      "jquery",
      "ep",
      "util/scope",
      "util/json",
      "util/base64",
      "util/string",
    ], a.call(e) ? t : {});
  })(
    this,
    function (e, t, a, i, n, r) {
      var o = (t.local.dojoGadetFix = {}),
        l = {
          "epages.cartridges.de_epages.externalcontent.RSSReader": function (
            a,
            i
          ) {
            (i.length = parseInt(i.length, 10)),
              (i.textlength = parseInt(i.textlength, 10)),
              (i.storeRoot = t.config.storeRoot),
              (i.onlyheadlines = i.onlyheadlines ? !0 : !1),
              (i.showlogo = i.showlogo ? !0 : !1),
              (i.stripimages = i.stripimages ? !0 : !1),
              i.formData &&
                ((i.length = parseInt(i.formData.RSSReaderEntrys, 10)),
                (i.textlength = parseInt(i.formData.RSSReaderLengthEntrys, 10)),
                (i.onlyheadlines =
                  "on" == i.formData.RSSReaderOnlyHeadlines ? !0 : !1),
                (i.style = i.formData.RSSReaderSelectStyle),
                (i.showlogo = "on" == i.formData.RSSReaderShowLogo ? !0 : !1),
                (i.stripimages =
                  "on" == i.formData.RSSReaderStripImages ? !0 : !1),
                !i.url &&
                  i.formData.RSSReaderFeedUrl &&
                  (i.url = unescape(i.formData.RSSReaderFeedUrl))),
              require([
                "de_epages/presentation/rss",
                "$tmpl!de_epages/externalcontent/dojogadgetfix-rss-" + i.style,
                "jquery/i18n",
              ], function (t, n) {
                new t.presentation.Rss(i.url, function (t) {
                  t.items.length > i.length && (t.items.length = i.length),
                    (t.o = i);
                  var o = a.children("[id^=RSSFeed]"),
                    s = n([t], {
                      formatDate: function (t) {
                        return e.i18n.formatDate(t, "F");
                      },
                      scrunchText: function (e) {
                        return i.textlength > 1
                          ? r.shrink(r.stripTags(e), i.textlength)
                          : e;
                      },
                    });
                  s.find("img.LinkImage:first").on("click", function () {
                    l["epages.cartridges.de_epages.externalcontent.RSSReader"](
                      a,
                      i
                    );
                  }),
                    i.stripimages && s.find(".PostText img").remove(),
                    o.html("").append(s);
                });
              });
          },
          "epages.cartridges.de_epages.externalcontent.GoogleMap": function (
            t,
            a
          ) {
            var i,
              n = t.children("[id]:first").html(""),
              r = n.attr("id"),
              l = "googleMap_" + r;
            (o[l] = function () {
              n.css({ width: a.width + "px", height: a.heigth + "px" }),
                (i = new google.maps.Map(n[0], {
                  zoom: parseInt(a.zoom, 10),
                  center: new google.maps.LatLng(a.centerLat, a.centerLng),
                  mapTypeId: a.type || "roadmap",
                  navigationControl: a.controls,
                  mapTypeControl: a.controls,
                  draggable: a.controls,
                  disableDoubleClickZoom: !a.controls,
                  keyboardShortcuts: a.controls,
                  scrollwheel: a.controls,
                })),
                e.each(a.markersPlain || [], function (e, t) {
                  var a = new google.maps.Marker({
                      map: i,
                      title: t.title,
                      draggable: !1,
                      position: new google.maps.LatLng(t.lat, t.lng),
                    }),
                    n = new google.maps.InfoWindow({
                      content: t.infoText,
                      size: new google.maps.Size(50, 50),
                    });
                  google.maps.event.addListener(a, "click", function () {
                    n.open(i, a);
                  });
                });
            }),
              window.google && google.maps && google.maps.Map
                ? o[l]()
                : (window.googleMapsCallback = function () {
                    o[l]();
                  });
          },
          "epages.cartridges.de_epages.externalcontent.GoogleTranslate":
            function (e) {
              var a = e.children("[id^=google_translate_element]"),
                i = a.attr("id").replace(/^google_translate_element/, ""),
                n = "googleTranslate_" + i;
              (o[n] = function () {
                new google.translate.TranslateElement(
                  { pageLanguage: t.config.language },
                  a[0]
                );
              }),
                window.google &&
                google.translate &&
                google.translate.TranslateElement
                  ? o[n]()
                  : (window["cb" + i] = function () {
                      o[n]();
                    });
            },
          "epages.cartridges.de_epages.externalcontent.WikipediaDe": function (
            e
          ) {
            var t = e.children("[id^=div]");
            require(["$dict!de_epages/externalcontent/dictionary"], function (
              e
            ) {
              t.html(e.parse(t.html()));
            });
          },
        },
        s = /ep_info:([^ ]+)/;
      return (
        e(function () {
          e(".epItemContent").each(function () {
            var t = e(this),
              a = s.exec(t.attr("class"));
            a &&
              ((a = a[1]),
              (a = n.decode(a, !0)),
              (a = a.replace(/\r/g, "\\r").replace(/\n/g, "\\n")),
              (a = i.parse(a)),
              l[a.contentClass] && l[a.contentClass](t, a));
          });
        }),
        {}
      );
    },
    function () {
      var e,
        t,
        a = !1,
        i = !1,
        n = function () {},
        r = { prototype: { LOAD: n } };
      try {
        e = top.dojo;
      } catch (o) {}
      this.dojo || e
        ? (a = !0)
        : ((this.dojo = {
            query: function () {
              return [];
            },
          }),
          (dojo.addClass =
            dojo.removeClass =
            dojo.hitch =
            dojo.trim =
            dojo.extend =
            dojo.mixin =
            dojo.create =
            dojo.addOnLoad =
            dojo.require =
            dojo.moduleUrl =
              n),
          "undefined" != typeof jQuery && jQuery.noConflict(),
          (this.$ = dojo.byId = document.getElementById));
      try {
        t = top.epages;
      } catch (o) {}
      return (
        this.epages || t
          ? (i = !0)
          : (this.epages = {
              cartridges: {
                de_epages: {
                  externalcontent: { GoogleMap: r, GoogleTranslate: r },
                },
              },
              io: {
                Translation: function () {
                  return {
                    replaceLanguageTags: function (e) {
                      return e;
                    },
                  };
                },
              },
              vars: { Locale: { language: epConfig.language } },
            }),
        !(a && i)
      );
    }
  ),
  define(
    "de_epages/productcomparison/ui/productcompare",
    [
      "jquery",
      "de_epages",
      "util/storage",
      "jquery/ui/widget",
      "ep/ui/input",
      "ep/ui/tooltip",
    ],
    function (e, t, a) {
      "use strict";
      var i = (window.console && window.console.warn) || function () {};
      return (
        e.widget("ui.productcomparisonUiProductcompare", {
          options: {
            maxItemNo: 8,
            minItemNo: 2,
            productID: void 0,
            tooltipTooManyProducts: void 0,
            tooltipNoProducts: void 0,
          },
          _create: function () {
            var t = this,
              a = t.element,
              i = a.attr("id"),
              n = t.options.productID,
              r = e("#" + i).nextAll("label"),
              o = r.children("a").first();
            t._check(n, o) &&
              ((t.options.label = t.label = r),
              (t.options.checkboxID = i),
              r.on("click", function (e) {
                t._handleClick(e, o, a);
              }),
              a.uiInput(),
              t._tick(n),
              a.on("change", function (e) {
                t._handleChange(e, a);
              }));
          },
          _check: function (e, t) {
            var a = this;
            return void 0 === e || isNaN(parseInt(e, 10)) || 0 === t.length
              ? (i(
                  "ProductComparison: parameter 'productID' and/or 'compare' link missing; product comparison is removed from SF."
                ),
                a.element.remove(),
                a.label.length > 0 && a.label.remove(),
                !1)
              : !0;
          },
          _tick: function (t) {
            var i = a.sessionStorage("Product::ProductComparison") || [],
              n = e.inArray(t, i) > -1 ? !0 : !1;
            this.element.prop("checked", n);
          },
          _handleClick: function (t, i, n) {
            t.preventDefault();
            var r = a.sessionStorage("Product::ProductComparison") || [],
              o = i.attr("href");
            return (
              this._addProductToComparisonList(this.options.productID, r),
              a.sessionStorage("Product::ProductComparison", r),
              r.length < this.options.minItemNo
                ? (n.prop("checked", !0),
                  this._showTooltip(
                    "NoProductsInComparisonList",
                    this.options.tooltipNoProducts,
                    i
                  ),
                  void 0)
                : (e.each(r, function (e, t) {
                    o += "&SelectedObjectID=" + t;
                  }),
                  (window.location = o),
                  void 0)
            );
          },
          _handleChange: function (t, i) {
            var n = a.sessionStorage("Product::ProductComparison") || [],
              r = this.options.productID,
              o = !1;
            if (((i = e("#" + i.attr("id"))), i.is(":checked"))) {
              if (n.length >= this.options.maxItemNo)
                return (
                  i.prop("checked", o),
                  this._showTooltip(
                    "TooManyComparisonProducts",
                    this.options.tooltipTooManyProducts,
                    i
                  ),
                  void 0
                );
              this._addProductToComparisonList(r, n), (o = !0);
            } else
              n = e.grep(n, function (e) {
                return e !== r;
              });
            i.prop("checked", o),
              a.sessionStorage("Product::ProductComparison", n);
          },
          _addProductToComparisonList: function (t, a) {
            var i = e.inArray(t, a);
            for (
              i > -1 && a.splice(i, 1), a.push(t);
              a.length > this.options.maxItemNo;

            )
              a.shift();
          },
          _showTooltip: function (t, a, n) {
            if (void 0 === a)
              return (
                i("ProductComparison: No tooltip message is defined."), void 0
              );
            var r = e(e("#" + t + "Tooltip"));
            r[0] ||
              (r = e(
                '<div id="' +
                  t +
                  'Tooltip" class="Message Medium Notification Wide"><div class="Headline"></div><div class="MessageDetails"><span class="ExtractedContentAreaElement">' +
                  a +
                  "</span></div></div>"
              ).uiTooltip({
                interactive: !0,
                orientation: "bottom center",
                event: "click",
              })),
              r.uiTooltip({ context: n }),
              r.uiTooltip("show");
          },
          destroy: function () {
            return (
              this.element.uiInput("destroy"),
              e("#" + this.options.checkboxID).off("change"),
              this.label.off("click"),
              this._superApply(arguments)
            );
          },
        }),
        t
      );
    }
  ),
  define(
    "de_epages/productcomparison/ui/comparelink",
    ["jquery", "de_epages", "util/storage", "jquery/ui/widget"],
    function (e, t, a) {
      "use strict";
      var i = (window.console && window.console.warn) || function () {};
      return (
        e.widget("ui.productcomparisonUiComparelink", {
          options: { maxItemNo: 8, productID: void 0 },
          _create: function () {
            var e = this,
              t = e.element,
              a = e.options.productID;
            e._check(a, t) &&
              t.on("click", function (a) {
                e._handleClick(a, t);
              });
          },
          _check: function (e) {
            return void 0 === e || isNaN(parseInt(e, 10))
              ? (i(
                  "ProductComparison: parameter 'productID' and/or 'compare' link missing; product comparison is removed from SF."
                ),
                this.element.remove(),
                !1)
              : !0;
          },
          _handleClick: function (t, i) {
            var n = a.sessionStorage("Product::ProductComparison") || [],
              r = i.attr("href");
            t.preventDefault(),
              this._addProductToComparisonList(this.options.productID, n),
              a.sessionStorage("Product::ProductComparison", n),
              e.each(n, function (e, t) {
                r += "&SelectedObjectID=" + t;
              }),
              (window.location = r);
          },
          _addProductToComparisonList: function (t, a) {
            var i = e.inArray(t, a);
            for (
              i > -1 && a.splice(i, 1), a.push(t);
              a.length > this.options.maxItemNo;

            )
              a.shift();
          },
          destroy: function () {
            return this.off("click"), this.Inherited(arguments);
          },
        }),
        t
      );
    }
  );
//@ sourceMappingURL=package-sf.js.map
