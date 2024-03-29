function et_addEvent(a, b, c, d) {
  if (a.addEventListener) return a.addEventListener(b, c, d), 1;
  if (a.attachEvent) return a.attachEvent("on" + b, c);
  a["on" + b] = c;
}
function et_md5(a) {
  function b(a, b) {
    var k = a[0],
      f = a[1],
      l = a[2],
      n = a[3],
      k = d(k, f, l, n, b[0], 7, -680876936),
      n = d(n, k, f, l, b[1], 12, -389564586),
      l = d(l, n, k, f, b[2], 17, 606105819),
      f = d(f, l, n, k, b[3], 22, -1044525330),
      k = d(k, f, l, n, b[4], 7, -176418897),
      n = d(n, k, f, l, b[5], 12, 1200080426),
      l = d(l, n, k, f, b[6], 17, -1473231341),
      f = d(f, l, n, k, b[7], 22, -45705983),
      k = d(k, f, l, n, b[8], 7, 1770035416),
      n = d(n, k, f, l, b[9], 12, -1958414417),
      l = d(l, n, k, f, b[10], 17, -42063),
      f = d(f, l, n, k, b[11], 22, -1990404162),
      k = d(k, f, l, n, b[12], 7, 1804603682),
      n = d(n, k, f, l, b[13], 12, -40341101),
      l = d(l, n, k, f, b[14], 17, -1502002290),
      f = d(f, l, n, k, b[15], 22, 1236535329),
      k = g(k, f, l, n, b[1], 5, -165796510),
      n = g(n, k, f, l, b[6], 9, -1069501632),
      l = g(l, n, k, f, b[11], 14, 643717713),
      f = g(f, l, n, k, b[0], 20, -373897302),
      k = g(k, f, l, n, b[5], 5, -701558691),
      n = g(n, k, f, l, b[10], 9, 38016083),
      l = g(l, n, k, f, b[15], 14, -660478335),
      f = g(f, l, n, k, b[4], 20, -405537848),
      k = g(k, f, l, n, b[9], 5, 568446438),
      n = g(n, k, f, l, b[14], 9, -1019803690),
      l = g(l, n, k, f, b[3], 14, -187363961),
      f = g(f, l, n, k, b[8], 20, 1163531501),
      k = g(k, f, l, n, b[13], 5, -1444681467),
      n = g(n, k, f, l, b[2], 9, -51403784),
      l = g(l, n, k, f, b[7], 14, 1735328473),
      f = g(f, l, n, k, b[12], 20, -1926607734),
      k = c(f ^ l ^ n, k, f, b[5], 4, -378558),
      n = c(k ^ f ^ l, n, k, b[8], 11, -2022574463),
      l = c(n ^ k ^ f, l, n, b[11], 16, 1839030562),
      f = c(l ^ n ^ k, f, l, b[14], 23, -35309556),
      k = c(f ^ l ^ n, k, f, b[1], 4, -1530992060),
      n = c(k ^ f ^ l, n, k, b[4], 11, 1272893353),
      l = c(n ^ k ^ f, l, n, b[7], 16, -155497632),
      f = c(l ^ n ^ k, f, l, b[10], 23, -1094730640),
      k = c(f ^ l ^ n, k, f, b[13], 4, 681279174),
      n = c(k ^ f ^ l, n, k, b[0], 11, -358537222),
      l = c(n ^ k ^ f, l, n, b[3], 16, -722521979),
      f = c(l ^ n ^ k, f, l, b[6], 23, 76029189),
      k = c(f ^ l ^ n, k, f, b[9], 4, -640364487),
      n = c(k ^ f ^ l, n, k, b[12], 11, -421815835),
      l = c(n ^ k ^ f, l, n, b[15], 16, 530742520),
      f = c(l ^ n ^ k, f, l, b[2], 23, -995338651),
      k = e(k, f, l, n, b[0], 6, -198630844),
      n = e(n, k, f, l, b[7], 10, 1126891415),
      l = e(l, n, k, f, b[14], 15, -1416354905),
      f = e(f, l, n, k, b[5], 21, -57434055),
      k = e(k, f, l, n, b[12], 6, 1700485571),
      n = e(n, k, f, l, b[3], 10, -1894986606),
      l = e(l, n, k, f, b[10], 15, -1051523),
      f = e(f, l, n, k, b[1], 21, -2054922799),
      k = e(k, f, l, n, b[8], 6, 1873313359),
      n = e(n, k, f, l, b[15], 10, -30611744),
      l = e(l, n, k, f, b[6], 15, -1560198380),
      f = e(f, l, n, k, b[13], 21, 1309151649),
      k = e(k, f, l, n, b[4], 6, -145523070),
      n = e(n, k, f, l, b[11], 10, -1120210379),
      l = e(l, n, k, f, b[2], 15, 718787259),
      f = e(f, l, n, k, b[9], 21, -343485551);
    a[0] = h(k, a[0]);
    a[1] = h(f, a[1]);
    a[2] = h(l, a[2]);
    a[3] = h(n, a[3]);
  }
  function c(a, b, c, f, e, d) {
    b = h(h(b, a), h(f, d));
    return h((b << e) | (b >>> (32 - e)), c);
  }
  function d(a, b, f, e, h, d, g) {
    return c((b & f) | (~b & e), a, b, h, d, g);
  }
  function g(a, b, f, e, h, d, g) {
    return c((b & e) | (f & ~e), a, b, h, d, g);
  }
  function e(a, b, f, e, h, d, g) {
    return c(f ^ (b | ~e), a, b, h, d, g);
  }
  function m(a) {
    txt = "";
    var c = a.length,
      f = [1732584193, -271733879, -1732584194, 271733878],
      e;
    for (e = 64; e <= a.length; e += 64) {
      for (
        var h = f, d = a.substring(e - 64, e), g = [], p = void 0, p = 0;
        64 > p;
        p += 4
      )
        g[p >> 2] =
          d.charCodeAt(p) +
          (d.charCodeAt(p + 1) << 8) +
          (d.charCodeAt(p + 2) << 16) +
          (d.charCodeAt(p + 3) << 24);
      b(h, g);
    }
    a = a.substring(e - 64);
    h = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (e = 0; e < a.length; e++) h[e >> 2] |= a.charCodeAt(e) << (e % 4 << 3);
    h[e >> 2] |= 128 << (e % 4 << 3);
    if (55 < e) for (b(f, h), e = 0; 16 > e; e++) h[e] = 0;
    h[14] = 8 * c;
    b(f, h);
    return f;
  }
  function f(a) {
    for (var b = 0; b < a.length; b++) {
      for (var c = a, f = b, e = a[b], h = "", d = 0; 4 > d; d++)
        h += p[(e >> (8 * d + 4)) & 15] + p[(e >> (8 * d)) & 15];
      c[f] = h;
    }
    return a.join("");
  }
  function h(a, b) {
    return (a + b) & 4294967295;
  }
  var p = "0123456789abcdef".split("");
  "5d41402abc4b2a76b9719d911017c592" != f(m("hello")) &&
    (h = function (a, b) {
      var c = (a & 65535) + (b & 65535);
      return (((a >> 16) + (b >> 16) + (c >> 16)) << 16) | (c & 65535);
    });
  return f(m(a));
}
var JSON;
JSON || (JSON = {});
(function () {
  function a(a) {
    return 10 > a ? "0" + a : a;
  }
  function b(a) {
    g.lastIndex = 0;
    return g.test(a)
      ? '"' +
          a.replace(g, function (a) {
            var b = f[a];
            return "string" === typeof b
              ? b
              : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
          }) +
          '"'
      : '"' + a + '"';
  }
  function c(a, f) {
    var d,
      k,
      g,
      l,
      n = e,
      r,
      u = f[a];
    u &&
      "object" === typeof u &&
      "function" === typeof u.toJSON &&
      (u = u.toJSON(a));
    "function" === typeof h && (u = h.call(f, a, u));
    switch (typeof u) {
      case "string":
        return b(u);
      case "number":
        return isFinite(u) ? "" + u : "null";
      case "boolean":
      case "null":
        return "" + u;
      case "object":
        if (!u) return "null";
        e += m;
        r = [];
        if ("[object Array]" === Object.prototype.toString.apply(u)) {
          l = u.length;
          for (d = 0; d < l; d += 1) r[d] = c(d, u) || "null";
          g =
            0 === r.length
              ? "[]"
              : e
              ? "[\n" + e + r.join(",\n" + e) + "\n" + n + "]"
              : "[" + r.join(",") + "]";
          e = n;
          return g;
        }
        if (h && "object" === typeof h)
          for (l = h.length, d = 0; d < l; d += 1)
            "string" === typeof h[d] &&
              ((k = h[d]),
              (g = c(k, u)) && r.push(b(k) + (e ? ": " : ":") + g));
        else
          for (k in u)
            Object.prototype.hasOwnProperty.call(u, k) &&
              (g = c(k, u)) &&
              r.push(b(k) + (e ? ": " : ":") + g);
        g =
          0 === r.length
            ? "{}"
            : e
            ? "{\n" + e + r.join(",\n" + e) + "\n" + n + "}"
            : "{" + r.join(",") + "}";
        e = n;
        return g;
    }
  }
  "function" !== typeof Date.prototype.toJSON &&
    ((Date.prototype.toJSON = function () {
      return isFinite(this.valueOf())
        ? this.getUTCFullYear() +
            "-" +
            a(this.getUTCMonth() + 1) +
            "-" +
            a(this.getUTCDate()) +
            "T" +
            a(this.getUTCHours()) +
            ":" +
            a(this.getUTCMinutes()) +
            ":" +
            a(this.getUTCSeconds()) +
            "Z"
        : null;
    }),
    (String.prototype.toJSON =
      Number.prototype.toJSON =
      Boolean.prototype.toJSON =
        function () {
          return this.valueOf();
        }));
  var d =
      /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    g =
      /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    e,
    m,
    f = {
      "\b": "\\b",
      "\t": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      '"': '\\"',
      "\\": "\\\\",
    },
    h;
  "function" !== typeof JSON.stringify &&
    (JSON.stringify = function (a, b, f) {
      var d;
      m = e = "";
      if ("number" === typeof f) for (d = 0; d < f; d += 1) m += " ";
      else "string" === typeof f && (m = f);
      if (
        (h = b) &&
        "function" !== typeof b &&
        ("object" !== typeof b || "number" !== typeof b.length)
      )
        throw Error("JSON.stringify");
      return c("", { "": a });
    });
  "function" !== typeof JSON.parse &&
    (JSON.parse = function (a, b) {
      function c(a, f) {
        var e,
          d,
          h = a[f];
        if (h && "object" === typeof h)
          for (e in h)
            Object.prototype.hasOwnProperty.call(h, e) &&
              ((d = c(h, e)), void 0 !== d ? (h[e] = d) : delete h[e]);
        return b.call(a, f, h);
      }
      var f;
      a = "" + a;
      d.lastIndex = 0;
      d.test(a) &&
        (a = a.replace(d, function (a) {
          return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
        }));
      if (
        /^[\],:{}\s]*$/.test(
          a
            .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
            .replace(
              /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
              "]"
            )
            .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
        )
      )
        return (
          (f = eval("(" + a + ")")),
          "function" === typeof b ? c({ "": f }, "") : f
        );
      throw new SyntaxError("JSON.parse");
    });
})();
function et_escape(a) {
  return encodeURIComponent(a);
}
function et_unescape(a) {
  return decodeURIComponent(a);
}
function et_createScriptTag(a) {
  var b = document.createElement("script");
  b.type = "text/javascript";
  b.src = a;
  document.getElementsByTagName("head")[0].appendChild(b);
}
function et_createStyleTag(a) {
  var b = "et-css-" + et_md5(a);
  if (!document.getElementById(b)) {
    var c = document.createElement("link");
    c.href = a;
    c.rel = "stylesheet";
    c.type = "text/css";
    c.id = b;
    document.getElementsByTagName("head")[0].appendChild(c);
  }
}
function et_getCookieValue(a, b) {
  var c = document.cookie.replace(
    RegExp(
      "(?:(?:^|.*;)\\s*" +
        a.replace(/[\-\.\+\*]/g, "\\$&") +
        "\\s*\\=\\s*([^;]*).*$)|^.*$"
    ),
    "$1"
  );
  b && !c && (c = et_readExpirableLocalStorageEntry(a));
  return c || "";
}
function et_getDefaultCookieDomain() {
  try {
    var a = document.domain;
    return a.replace(/^[^.]+\.(([^.]+\.)+(de|com|at|ch))$/, "$1") || a;
  } catch (b) {}
}
function et_readExpirableLocalStorageEntry(a) {
  try {
    var b = localStorage.getItem(a);
    if (void 0 !== b) {
      var c = b.split("|", 2);
      if ((parseInt(c[1]) || Infinity) >= new Date()) return c[0];
    }
  } catch (d) {}
}
function et_setCookieValue(a, b, c, d, g) {
  if (
    _etracker.areCookiesEnabled() ||
    "et_allow_cookies" === a ||
    "et_oi_v2" === a ||
    "et_oip" === a ||
    0 > c
  ) {
    var e = "",
      m;
    c &&
      ((e = new Date()),
      (m = e.getTime() + 864e5 * c),
      e.setTime(m),
      (e = "; expires=" + e.toUTCString()));
    document.cookie =
      a + "=" + b + e + (d ? "; domain=" + d : "") + "; SameSite=Lax; path=/";
    if (g) {
      c && (b += "|" + m);
      try {
        localStorage.setItem(a, b);
      } catch (f) {}
      window._et_cookie_upgrade_url &&
        (window.requestIdleCallback || window.setTimeout)(function () {
          try {
            var b = new URL(_et_cookie_upgrade_url),
              c = b.searchParams;
            c.set("cookie_name", a);
            c.set("expires", Math.floor(m / 1e3));
            c.set("domain", d);
            var f = new XMLHttpRequest();
            f.open("GET", b);
            f.send();
          } catch (e) {}
        });
    }
  }
}
function et_setCoid(a, b, c) {
  et_setCookieValue("_et_coid", a, b, c, !0);
}
function et_cookiesSupported() {
  if (!1 === navigator.cookieEnabled) return !1;
  if (void 0 !== et_co) return et_co;
  document.cookie = "cookiesAvailable=true;path=/;SameSite=Lax";
  var a = -1 < document.cookie.indexOf("cookiesAvailable=true");
  document.cookie =
    "cookiesAvailable=true;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;SameSite=Lax";
  return (et_co = a);
}
function et_getFpcParams() {
  var a = _etracker.getCoid(),
    b = _etracker.areCookiesEnabled() && et_cookiesSupported() ? 0 : 1,
    c = window.location.hostname,
    d = et_deliveryHash;
  var g = _etracker.getFpc();
  return {
    coid: a,
    et_cblk: b,
    et_cd: c,
    dh: d,
    et_fpc: g ? "_et_coid=" + g : "",
    clt: _etracker.getConfigValue("cookieLifetime"),
  };
}
var et_isEmpty = function (a) {
  for (var b in a) if (a.hasOwnProperty(b)) return !1;
  return !0;
};
function et_urlify_cc(a) {
  var b = [],
    c;
  for (c in a)
    a.hasOwnProperty(c) && a[c] && b.push(c + "=" + encodeURIComponent(a[c]));
  return "&" + b.join("&");
}
function et_getReferrer() {
  var a = et_referrer;
  if ("" == a) {
    a = document.referrer;
    try {
      "object" == typeof top.document && (a = top.document.referrer);
    } catch (b) {}
  }
  return a;
}
function et_getUrl() {
  return document.location.href;
}
function et_getPageName() {
  var a = et_getUrl().split("?"),
    b = a.shift();
  a.forEach(function (a) {
    0 <= window.cc_getParamsWhiteList.indexOf(a.split("=")[0]) &&
      (b += "?" + a);
  });
  a = "url" === window.cc_autoPageNameRegistration ? b : document.title || b;
  return window.cc_pagename || window.et_pagename || a;
}
var et_optInActive = !1,
  et_target = et_target || "",
  et_tval = et_tval || "",
  et_tonr = et_tonr || "",
  et_tsale = et_tsale || 0,
  et_cust = et_cust || 0,
  et_basket = et_basket || "",
  et_lpage = et_lpage || "",
  et_trig = et_trig || "",
  et_se = et_se || "",
  et_areas = et_areas || "",
  et_ilevel = et_ilevel || 1,
  et_url = et_url || "",
  et_tag = et_tag || "",
  et_organisation = et_organisation || "",
  et_demographic = et_demographic || "",
  et_ssid = et_ssid || "",
  et_ip = et_ip || "",
  et_sem = et_sem || "",
  et_pse = et_pse || "",
  et_subid = "",
  et_iw = "",
  et_ih = "",
  et_up = "",
  et_tv = "",
  et_to = "",
  et_ts = "",
  et_tt = "",
  et_first = !0,
  et_referrer = window.et_referrer || "",
  et_sw = screen.width,
  et_sh = screen.height,
  et_sc = screen.pixelDepth || screen.colorDepth || 24,
  et_co = void 0,
  et_la = navigator.language || navigator.userLanguage || "",
  et_sub = et_sub || "",
  et_cdi = et_cdi || "",
  et_seg1 = void 0 != et_seg1 ? et_seg1 + "" : "",
  et_seg2 = void 0 != et_seg2 ? et_seg2 + "" : "",
  et_seg3 = void 0 != et_seg3 ? et_seg3 + "" : "",
  et_seg4 = void 0 != et_seg4 ? et_seg4 + "" : "",
  et_seg5 = void 0 != et_seg5 ? et_seg5 + "" : "";
function _et_vm_ct() {}
function et_vm_init() {}
function et_vm_formSubmit(a) {}
function et_vm_reload() {}
function ETVMRecorder(a, b, c, d) {
  this.receiveMessage = function (a) {};
  this.sendStoryboardPart = function (a) {};
  this.pushMousemove = function () {};
  this.rebindSubmitEventsWithJquery = function () {};
  this.initRecorder = function (a) {};
  this.restartRecorder = function (a) {};
  this.recordFormSubmit = function (a) {};
}
etVM = new ETVMRecorder();
function _etc_vv_raiseInvitation(a, b, c, d) {}
function _etc_vv_get_uuid() {}
function _etc_vv_showInvitation(a, b) {}
function _etc_do_invite() {}
function _etc_get_vv_cookie() {}
function _etc_set_vv_cookie(a, b) {}
function _vv_participate(a, b) {}
function _vv_participateInvite() {}
function _vv_open(a, b) {}
function _vv_vst() {}
function _vv_createCntImage(a, b) {}
function _vv_pcp(a) {}
function _etc_fb_show_button(a) {}
function _etc_fb_cb(a, b, c, d, g, e, m) {}
function _etc_fb_get_sizes() {}
function _etc_fb_sd(a) {}
function _etc_fb_col(a) {}
function _etc_fb_etc() {}
function et_eC(a) {}
function et_createCntImage(a, b) {}
function et_spLink(a) {}
function et_spPage(a) {}
function et_pd() {}
function _etc_ht(a, b, c) {}
function et_addFpcParams() {}
function et_urlify(a) {}
function et_getJavaScriptVersion() {}
function et_pEc() {}
function et_set_pos() {}
function et_changeStarScale(a, b, c) {}
function handleTextareaTextLength(a, b) {}
function et_iO() {}
function et_removeUrlParamLink(a) {}
function et_getPageSize(a) {}
function et_recursiveNode(a) {}
function et_strReplace(a) {}
function et_divHash(a) {}
"undefined" !== typeof Prototype &&
  0 <= Prototype.Version.indexOf("1.6.") &&
  ((window.JSON.parse = function (a) {
    return a.evalJSON();
  }),
  (window.JSON.stringify = function (a) {
    return Object.toJSON(a);
  }));
"undefined" !== typeof MooTools &&
  "string" == typeof MooTools.version &&
  0 <= "1.2dev,1.2.1,1.2.2,1.2.3,1.2.4".indexOf(MooTools.version) &&
  ((window.JSON.stringify = function (a) {
    return window.JSON.encode(a);
  }),
  (window.JSON.parse = function (a) {
    return window.JSON.decode(a);
  }));
function et_eC_Wrapper(a, b, c, d, g, e, m, f, h, p, s, q, k, t, l, n, r) {
  _etracker.addWrapperCall(function () {
    et_eC_Wrapper_set_vars(a, b, c, d, g, e, m, f, h, p, s, q, k, t, l, n, r);
    _etracker._dont_call_cc_wrapper ||
      "function" !== typeof et_cc_wrapper_inner ||
      window.setTimeout(function () {
        _etracker._dont_call_cc_wrapper ||
          et_cc_wrapper_inner(a.length ? a : a.et_et, a);
      }, 0);
  });
}
function et_eC_Wrapper_set_vars(
  a,
  b,
  c,
  d,
  g,
  e,
  m,
  f,
  h,
  p,
  s,
  q,
  k,
  t,
  l,
  n,
  r
) {
  et_up = "";
  if (a.length) {
    "null" == b && (b = "");
    "null" == c && (c = "");
    "null" == d && (d = 0);
    "null" == g && (g = "");
    "null" == e && (e = "");
    "null" == m && (m = "");
    "null" == f && (f = "");
    "null" == h && (h = 0);
    if ("null" == p || "number" != typeof p) p = 0;
    "null" == s && (s = "");
    "null" == q && (q = "");
    "null" == k && (k = "");
    "null" == t && (t = "");
    "null" == l && (l = "");
    "null" == n && (n = "");
    et_pagename = b ? et_escape(b) : window.et_pagename;
    et_areas = c ? et_escape(c) : et_areas;
    et_ilevel = d ? et_escape(d) : 0;
    et_url = g ? et_escape(g) : "";
    et_target = e ? et_escape(e) : "";
    et_tval = m ? et_escape(m) : "";
    et_tonr = f ? et_escape(f) : "";
    et_tsale = h ? et_escape(h) : 0;
    et_cust = p ? p : 0;
    et_basket = s ? et_escape(s) : "";
    et_lpage = q ? et_escape(q) : "";
    et_trig = k ? et_escape(k) : "";
    et_tag = t ? et_escape(t) : "";
    et_sub = l ? et_escape(l) : "";
    et_cdi = r ? et_escape(r) : "";
    et_referrer = n ? et_escape(n) : et_referrer;
  } else
    (et_pagename = a.et_pagename
      ? et_escape(a.et_pagename)
      : window.et_pagename),
      (et_areas = a.et_areas ? et_escape(a.et_areas) : et_areas),
      (et_ilevel = a.et_ilevel ? et_escape(a.et_ilevel) : 0),
      (et_url = a.et_url ? et_escape(a.et_url) : ""),
      (et_target = a.et_target ? et_escape(a.et_target) : ""),
      (et_tval = a.et_tval ? et_escape(a.et_tval) : ""),
      (et_tonr = a.et_tonr ? et_escape(a.et_tonr) : ""),
      (et_tsale = a.et_tsale ? et_escape(a.et_tsale) : 0),
      (et_cust = a.et_cust && "number" == typeof a.et_cust ? a.et_cust : 0),
      (et_basket = a.et_basket ? et_escape(a.et_basket) : ""),
      (et_lpage = a.et_lpage ? et_escape(a.et_lpage) : ""),
      (et_trig = a.et_trigger ? et_escape(a.et_trigger) : ""),
      (et_tag = a.et_tag ? et_escape(a.et_tag) : ""),
      (et_organisation = a.et_organisation ? et_escape(a.et_organisation) : ""),
      (et_demographic = a.et_demographic ? et_escape(a.et_demographic) : ""),
      (et_sub = a.et_sub ? et_escape(a.et_sub) : ""),
      (et_cdi = a.et_cdi ? et_escape(a.et_cdi) : ""),
      (et_referrer = a.et_ref ? et_escape(a.et_ref) : et_referrer);
  et_sub && (et_up = { et_sub: et_sub });
}
function et_cc_wrapper_inner(a, b) {
  var c =
    "cc_pagename cc_url cc_attributes et_seg1 et_seg2 et_seg3 et_seg4 et_seg5".split(
      " "
    );
  _etracker.addEvent(function () {
    if ("object" == typeof b)
      for (var d = 0; d < c.length; d++) {
        var g = c[d];
        b[g] && (window[g] = b[g]);
      }
    "string" == typeof window.et_pagename &&
      "" == window.et_pagename &&
      delete window.et_pagename;
    et_cc(a);
  });
}
function et_cc_wrapper(a, b) {
  _etracker._dont_call_cc_wrapper = !0;
  et_cc_wrapper_inner(a, b);
}
function et_cc_parameter(a, b) {
  window.cc_pagename &&
    !window.cc_pagename.replace(/\s/g, "").length &&
    (window.cc_pagename = null);
  window.et_pagename &&
    !window.et_pagename.replace(/\s/g, "").length &&
    (window.et_pagename = null);
  var c = et_ver,
    d = 10 * new Date().getTime() + cc_deltaTime,
    g = et_getPageName(),
    e = et_ilevel,
    m = et_sw,
    f = et_sh,
    h = et_sc,
    p = et_la,
    s = et_areas,
    q = et_lpage,
    k = et_trig,
    t = et_se,
    l = window.cc_url || window.et_url || document.location.href,
    n;
  n = window.location;
  var r = n.origin;
  n = r ? r + n.pathname + n.search : void 0;
  c = {
    et: a,
    v: c,
    tc: d,
    pagename: g,
    ilevel: e,
    swidth: m,
    sheight: f,
    scolor: h,
    slang: p,
    areas: s,
    et_lpage: q,
    et_trig: k,
    et_se: t,
    cc_url: l,
    et_source_url: n,
    et_ref: et_getReferrer(),
    et_tonr: et_tonr,
    et_profit: et_tval,
    et_cdi: et_cdi,
    cc_ordercurr: "EUR",
    cc_ordertype: et_cc_getOrderType(),
    cc_basket: et_cc_getBasket(),
    cc_baskettype: "basket",
    et_seg1: et_seg1,
    et_seg2: et_seg2,
    et_seg3: et_seg3,
    et_seg4: et_seg4,
    et_seg5: et_seg5,
    plugin_version: window._etracker.getConfigValue("pluginVersion"),
    product_identifier: window._etracker.getConfigValue("productIdentifier"),
    block_cookies: window._etracker.getConfigValue("blockCookies"),
    respect_dnt: window._etracker.getConfigValue("respectDNT"),
    et_bs: "function" === typeof navigator.sendBeacon ? 1 : 0,
  };
  d = "object" === typeof window.cc_attributes ? window.cc_attributes : {};
  d.hasOwnProperty("etcc_cust") || 0 === et_cust || (d.etcc_cust = ["1", !1]);
  et_isEmpty(d) || (c.cc_attrs = JSON.stringify(d));
  if (!et_isEmpty(b)) for (var u in b) b.hasOwnProperty(u) && (c[u] = b[u]);
  u = et_getFpcParams();
  return et_urlify_cc(et_up) + et_urlify_cc(c) + et_urlify_cc(u);
}
function et_cc_getOrderType() {
  var a = !1;
  switch (et_tsale) {
    default:
      a = "lead";
      break;
    case 1:
    case "1":
      a = "sale";
      break;
    case 2:
    case "2":
      a = "storno";
  }
  return a;
}
function et_cc_getBasket() {
  var a = !1;
  if (et_basket) {
    a = et_basket;
    if (0 > et_basket.indexOf(";", 0) && 0 > et_basket.indexOf(",", 0))
      try {
        a = et_unescape(et_basket);
      } catch (b) {
        a = et_basket;
      }
    a = a.replace(/;/g, cc_articleDivider);
    a = a.replace(/,/g, cc_itemDivider);
  }
  return a;
}
function et_cc_orderEvent(a) {
  var b = {
      orderNumber: et_tonr,
      orderPrice: et_tval,
      status: et_cc_getOrderType(),
      currency: "EUR",
    },
    c = et_cc_getBasket();
  if (c && "" != c) {
    b.basket = { id: "0", products: [] };
    var c = c.split(cc_articleDivider),
      d = [],
      g;
    for (g in c)
      c.hasOwnProperty(g) &&
        "string" == typeof c[g] &&
        ((d = c[g].split(cc_itemDivider)),
        "object" === typeof d &&
          5 == d.length &&
          b.basket.products.push({
            product: {
              id: d[0],
              name: d[1],
              category: [d[2]],
              price: d[4],
              currency: b.currency,
              variants: {},
            },
            quantity: d[3],
          }));
  }
  b.orderNumber &&
    "0" != b.orderNumber &&
    b.orderPrice &&
    ((b.differenceData = 0),
    (b.waParameter = "waParameter"),
    etCommerce.setSecureKey(a),
    etCommerce.sendEvent("order", b));
}
function et_cc(a, b) {
  var c = et_server + "/" + cc_cntScript + "?" + et_cc_parameter(a, b),
    c = c.substr(0, et_maxUrlLength);
  et_createScriptTag(c);
  et_cc_orderEvent(a);
}
var etCommerce = function () {
    this.eventDefintions = {
      viewProduct: {
        product: {
          type: "object",
          optional: !1,
          allowEmpty: !1,
          checkFunc: function (a) {
            return etCommerceDebugTools.validateObject("product", a);
          },
        },
        basketid: { type: "string", optional: !0, allowEmpty: !1 },
        pagename: { type: "string", optional: !0, allowEmpty: !1 },
      },
      viewProductList: {
        productList: {
          type: "object",
          optional: !1,
          allowEmpty: !1,
          checkFunc: function (a) {
            return etCommerceDebugTools.validateObject("productList", a);
          },
        },
      },
      insertToBasket: {
        product: {
          type: "object",
          optional: !1,
          allowEmpty: !1,
          checkFunc: function (a) {
            return etCommerceDebugTools.validateObject("product", a);
          },
        },
        quantity: { type: "integer", optional: !1, allowEmpty: !1 },
        basketid: { type: "string", optional: !0, allowEmpty: !0 },
        pagename: { type: "string", optional: !0, allowEmpty: !1 },
        listIndex: { type: "integer", optional: !0, allowEmpty: !0 },
        source: { type: "string", optional: !0, allowEmpty: !0 },
      },
      removeFromBasket: {
        product: {
          type: "object",
          optional: !1,
          allowEmpty: !1,
          checkFunc: function (a) {
            return etCommerceDebugTools.validateObject("product", a);
          },
        },
        quantity: { type: "integer", optional: !1, allowEmpty: !1 },
        basketid: { type: "string", optional: !0, allowEmpty: !1 },
        pagename: { type: "string", optional: !0, allowEmpty: !1 },
      },
      insertToWatchlist: {
        product: {
          type: "object",
          optional: !1,
          allowEmpty: !1,
          checkFunc: function (a) {
            return etCommerceDebugTools.validateObject("product", a);
          },
        },
        quantity: { type: "integer", optional: !1, allowEmpty: !1 },
        basketid: { type: "string", optional: !0, allowEmpty: !0 },
        pagename: { type: "string", optional: !0, allowEmpty: !1 },
        listIndex: { type: "integer", optional: !0, allowEmpty: !0 },
        source: { type: "string", optional: !0, allowEmpty: !0 },
      },
      removeFromWatchlist: {
        product: {
          type: "object",
          optional: !1,
          allowEmpty: !1,
          checkFunc: function (a) {
            return etCommerceDebugTools.validateObject("product", a);
          },
        },
        quantity: { type: "integer", optional: !1, allowEmpty: !1 },
        basketid: { type: "string", optional: !0, allowEmpty: !1 },
        pagename: { type: "string", optional: !0, allowEmpty: !1 },
      },
      order: {
        order: {
          type: "object",
          optional: !1,
          allowEmpty: !1,
          checkFunc: function (a) {
            return etCommerceDebugTools.validateObject("order", a);
          },
        },
        pagename: { type: "string", optional: !0, allowEmpty: !1 },
      },
      orderCancellation: {
        orderNumber: { type: "string", optional: !1, allowEmpty: !1 },
      },
      orderConfirmation: {
        orderNumber: { type: "string", optional: !1, allowEmpty: !1 },
      },
      orderPartialCancellation: {
        orderNumber: { type: "string", optional: !1, allowEmpty: !1 },
        products: {
          type: "array",
          optional: !1,
          allowEmpty: !1,
          checkFunc: function (a) {
            return etCommerceDebugTools.checkArrayOfProductObjects(a);
          },
        },
      },
      engageProduct: {
        product: {
          type: "object",
          optional: !1,
          allowEmpty: !1,
          checkFunc: function (a) {
            return etCommerceDebugTools.validateObject("product", a);
          },
        },
        basketid: { type: "string", optional: !0, allowEmpty: !1 },
        pagename: { type: "string", optional: !0, allowEmpty: !1 },
      },
    };
    var a = this,
      b = (this.debugMode = !1),
      c = [],
      d = [],
      g = 0,
      e = [],
      m = "",
      f = "",
      h = !1,
      p = [],
      s,
      q,
      k = !1;
    this.setUserCallback = function (a) {
      "function" === typeof a && p.push(a);
    };
    this.setSendEventsCallback = function (a) {
      "function" === typeof a && (s = a);
    };
    this.setAttachEventsCallback = function (a) {
      "function" === typeof a && (q = a);
    };
    this.isLoaded = function () {
      return b;
    };
    var t = function (a, b, c) {
        if (document.getElementById(a)) {
          var f = document.getElementById(a);
          f.addEventListener
            ? f.addEventListener(b, c, !1)
            : f.attachEvent &&
              ((f["e" + b + c] = c),
              (f[b + c] = function () {
                f["e" + b + c](window.event);
              }),
              f.attachEvent("on" + b, f[b + c]));
        }
      },
      l = function (b, c) {
        function f(a) {
          if (null == a) return !0;
          switch (typeof a) {
            case "string":
              return "" === a;
            case "number":
              return isNaN(a);
            case "object":
              for (var b in a) return !1;
              return !0;
            default:
              return !1;
          }
        }
        var e = {},
          d = a.eventDefintions[b];
        e.eventName = b;
        for (var h = 1; h < c.length; h++) {
          var k = 0,
            g;
          for (g in d)
            if (d.hasOwnProperty(g)) {
              if (k == h - 1) var l = g;
              k++;
            }
          k = c[h];
          "string" == etCommerce.typeOf(k) && (k = k.replace(/^\s+|\s+$/g, ""));
          (d[l].optional && f(k)) || (e[l] = k);
        }
        return e;
      },
      n = function () {
        for (var a = 0; a < d.length; a++) {
          var b = new Image();
          b.onerror = function () {};
          b.src = d[a];
          e.push(b);
        }
        d = [];
      },
      r = function () {
        h = !0;
        var a = document.body,
          b = document.createElement("script");
        b.setAttribute("type", "text/javascript");
        b.setAttribute("src", et_code_server + "/etCommerceDebug.js");
        b.onload = b.onreadystatechange = function () {
          (this.readyState &&
            "loaded" != this.readyState &&
            "complete" != this.readyState) ||
            ((k = !0), (h = !1));
        };
        a.appendChild(b);
      },
      u = function (a, b, c) {
        if (k) etCommerceDebugTools.validateEvent(a, b, c);
        else {
          h || r();
          var f = 0,
            e = window.setInterval(function () {
              !h &&
                k &&
                (etCommerceDebugTools.validateEvent(a, b, c),
                window.clearInterval(e));
              30 < f &&
                (etCommerce.debug(
                  "etracker et_commerce: error while loading debug tools"
                ),
                window.clearInterval(e));
              f++;
            }, 200);
        }
      },
      x = function (b, c) {
        var e = l(b, c),
          h = JSON.stringify(e);
        if (!a.debugMode || (e.order && e.order.waParameter)) {
          for (var k in p) if (p.hasOwnProperty(k)) p[k](b, h);
          s && s.apply(this, c);
          var e = et_escape,
            h = unescape(encodeURIComponent(h)),
            m =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
                ""
              ),
            r = "",
            t = "",
            q = h.length % 3;
          if (0 < q) for (; 3 > q; q++) (t += "="), (h += "\x00");
          for (q = 0; q < h.length; q += 3)
            var v =
                (h.charCodeAt(q) << 16) +
                (h.charCodeAt(q + 1) << 8) +
                h.charCodeAt(q + 2),
              v = [(v >>> 18) & 63, (v >>> 12) & 63, (v >>> 6) & 63, v & 63],
              r = r + (m[v[0]] + m[v[1]] + m[v[2]] + m[v[3]]);
          h = r.substring(0, r.length - t.length) + t;
          e = e(h);
          h = et_md5(e);
          m = [f];
          r = window._etracker.getConfigValue("slaveCodes");
          for (k in r) r.hasOwnProperty(k) && m.push(r[k]);
          k = g++;
          for (r = 0; r < m.length; ++r) {
            for (
              var t = { ev: a.getVersion(), cv: cc_codecVersion, t: "ec" },
                t =
                  et_server +
                  "/" +
                  cc_cntScript +
                  "?" +
                  et_cc_parameter(m[r]) +
                  et_urlify_cc(t),
                q = [],
                v = et_maxUrlLength - (t.length + 50),
                w = 0;
              w < e.length;
              w += v
            )
              q.push(e.slice(w, w + v));
            for (var x in q)
              q.hasOwnProperty(x) &&
                ((v = "&d=" + q[x]),
                (w = "&ci=" + k + "," + (parseInt(x) + 1) + "," + q.length),
                (v = t + w + v),
                (v += "&cs=" + h),
                (d[d.length] = v));
            _etracker.isTrackingEnabled() && n();
          }
        } else u(h, b, c);
      },
      w = function (a, b) {
        for (var c = [], c = b, f = [], e = 1; e < c.length; e++) f.push(c[e]);
        q && q.apply(this, c);
        var h = function () {
          x(c[1], f);
        };
        _etracker.addOnLoad(function () {
          for (var b in a)
            if (a.hasOwnProperty(b)) {
              var c = a[b],
                f;
              for (f in c) c.hasOwnProperty(f) && t(c[f], b, h);
            }
        });
      };
    this.setSecureKey = function (a) {
      f = a;
    };
    this.getVersion = function () {
      return m;
    };
    this.sendQueuedEvents = function () {
      n();
    };
    var A = function (a, b) {
      for (var c = b.length, f = 0; f < c; f++) a.push(b[f]);
      return a;
    };
    this.sendEvent = function (b) {
      c.push(A(["sendEvent"], arguments));
      a.debug(
        "cannot send Event yet because etCommerce is not loaded. Queueing Event for post-load."
      );
    };
    this.attachEvent = function (b) {
      c.push(A(["attachEvent"], arguments));
      a.debug(
        "cannot attach Event yet because etCommerce is not loaded. Queueing attachment for post-load."
      );
    };
    this.doPreparedEvents = function () {
      a.debug(
        "cannot 'doPreparedEvents()' before etCommerce is loaded. Queueing for post-load."
      );
    };
    this.etCommerceLoad = function (c) {
      b ||
        ((b = !0),
        y(c),
        a.debug("etCommerce loaded"),
        etCommerce.doPreparedEvents());
    };
    this.typeOf = function (a) {
      var b = typeof a;
      "object" === b
        ? a
          ? "number" !== typeof a.length ||
            a.propertyIsEnumerable("length") ||
            "function" !== typeof a.splice ||
            (b = "array")
          : (b = "null")
        : "number" === b && a === +a && a === (a | 0) && (b = "integer");
      return b;
    };
    this.debug = function (b) {
      a.debugMode &&
        "undefined" != typeof console &&
        "unknown" != typeof console &&
        console.log(b + " length:" + b.length);
    };
    var y = function (b) {
      a.debugMode = a.debugMode || window._etracker.getConfigValue("debugMode");
      m = cc_apiVersion;
      f = b;
      a.sendEvent = function (a) {
        x(a, A([], arguments));
      };
      a.attachEvent = function (a) {
        w(a, A([], arguments));
      };
      a.doPreparedEvents = function () {
        var b = [];
        "object" === typeof c && "array" == a.typeOf(c) && (b = b.concat(c));
        "object" === typeof etCommercePrepareEvents &&
          "array" == a.typeOf(etCommercePrepareEvents) &&
          (b = b.concat(etCommercePrepareEvents));
        a.debug("processing " + b.length + " queued actions.");
        for (var f in b)
          if (b.hasOwnProperty(f) && "object" == typeof b[f]) {
            var e = b[f],
              h = e.shift();
            "sendEvent" == h ? x(e[0], e) : "attachEvent" == h && w(e[0], e);
          }
        etCommercePrepareEvents = [];
        c = [];
      };
    };
  },
  etCommerce = new etCommerce();
var et_PostError = function (a) {
    this.getMessage = function () {
      return a;
    };
  },
  et_ClientTime = function () {
    if (!(this instanceof et_ClientTime)) return new et_ClientTime();
    this.getClientTime = function () {
      var a = "undefined" != typeof cc_deltaTime ? cc_deltaTime : 0;
      return 10 * new Date().getTime() + a;
    };
  },
  et_CustomEventTimer = function () {
    var a = {};
    this.start = function (b) {
      a[b] = new Date().getTime();
    };
    this.stop = function (b) {
      var c = null;
      a[b] && ((c = new Date().getTime() - a[b]), (a[b] = null));
      return c;
    };
    this.get = function (b) {
      var c = null;
      a[b] && (c = new Date().getTime() - a[b]);
      return c;
    };
    this.toString = function () {
      return a;
    };
  };
et_customEventTimerObject = new et_CustomEventTimer();
var et_GenericEvent = function (a, b, c) {
  if (!(this instanceof et_GenericEvent)) return new et_GenericEvent(a, b, c);
  this.name = a;
  this.version = b;
  this.eventData = c;
  this.time = void 0;
  this.setName = function (a) {
    this.name = a;
  };
  this.setVersion = function (a) {
    this.version = a;
  };
  this.setEventData = function (a) {
    this.eventData = a;
  };
  this.createClientTM = function () {
    return this.time instanceof et_ClientTime ? this.time.getClientTime() : 0;
  };
  this.createClientInfoObject = function () {
    return {
      screen_width: et_sw,
      screen_height: et_sh,
      screen_color_depth: et_sc,
      system_language: et_la,
    };
  };
};
et_GenericEvent.prototype.setClientTime = function (a) {
  this.time = a;
};
et_GenericEvent.prototype.getEvent = function () {
  var a = {
    eventType: this.name,
    eventVersion: this.version,
    clientTm: this.createClientTM(),
  };
  a[this.name] = this.eventData;
  a[this.name].client_info = this.createClientInfoObject();
  a[this.name].pagename = et_getPageName();
  return [a];
};
var SmartMessageEvent = function (a, b, c, d) {
  if (!(this instanceof SmartMessageEvent))
    return new SmartMessageEvent(a, b, c, d);
  this.setVersion(1);
  this.setEventData({ campaign: a, segment: b, trigger: c, variant: d });
};
SmartMessageEvent.prototype = new et_GenericEvent();
SmartMessageEvent.prototype.constructor = SmartMessageEvent;
var SmartMessageViewEvent = function (a, b, c, d) {
  if (!(this instanceof SmartMessageViewEvent))
    return new SmartMessageViewEvent(a, b, c, d);
  SmartMessageEvent.call(this, a, b, c, d);
  this.setName("smartMessageView");
};
SmartMessageViewEvent.prototype = new SmartMessageEvent();
SmartMessageViewEvent.prototype.constructor = SmartMessageViewEvent;
var SmartMessageClickEvent = function (a, b, c, d) {
  if (!(this instanceof SmartMessageClickEvent))
    return new SmartMessageClickEvent(a, b, c, d);
  SmartMessageEvent.call(this, a, b, c, d);
  this.setName("smartMessageClick");
};
SmartMessageClickEvent.prototype = new SmartMessageEvent();
SmartMessageClickEvent.prototype.constructor = SmartMessageClickEvent;
var TestViewEvent = function (a, b, c, d) {
  if (!(this instanceof TestViewEvent)) return new TestViewEvent(a, b, c, d);
  this.setName("testView");
  this.setVersion(1);
  this.setEventData({ campaign: a, campaignType: b, segment: c, variant: d });
};
TestViewEvent.prototype = new et_GenericEvent();
TestViewEvent.prototype.constructor = TestViewEvent;
var et_BlockedEvent = function () {
  if (!(this instanceof et_BlockedEvent)) return new et_BlockedEvent();
};
et_BlockedEvent.prototype.getEvent = function () {
  return [];
};
var et_UserDefinedEvent = function (a, b, c, d, g) {
  if (!(this instanceof et_UserDefinedEvent))
    return new et_UserDefinedEvent(a, b, c, d, g);
  this.setVersion(1);
  this.setEventData({
    object: a,
    category: b,
    action: c,
    event_sub_type: d,
    value: g,
  });
  this.setName("userDefined");
};
et_UserDefinedEvent.prototype = new et_GenericEvent();
et_UserDefinedEvent.prototype.constructor = et_UserDefinedEvent;
var et_StandardEvent = function (a, b, c) {
  if (!(this instanceof et_StandardEvent)) return new et_StandardEvent(a, b, c);
  this.setVersion(1);
  this.setEventData({ object: a, event_sub_type: b, value: c });
};
et_StandardEvent.prototype = new et_GenericEvent();
et_StandardEvent.prototype.constructor = et_StandardEvent;
var et_PlaytimeEvent = function (a, b, c) {
  if (!(this instanceof et_PlaytimeEvent)) return new et_PlaytimeEvent(a, b, c);
  et_StandardEvent.call(this, a, b, c);
};
et_PlaytimeEvent.prototype = new et_StandardEvent();
et_PlaytimeEvent.prototype.constructor = et_PlaytimeEvent;
var et_DownloadEvent = function (a, b, c) {
  if (!(this instanceof et_DownloadEvent)) return new et_DownloadEvent(a, b, c);
  et_StandardEvent.call(this, a, b, c);
  this.setName("download");
};
et_DownloadEvent.prototype = new et_StandardEvent();
et_DownloadEvent.prototype.constructor = et_DownloadEvent;
var et_ClickEvent = function (a, b, c) {
  if (!(this instanceof et_ClickEvent)) return new et_ClickEvent(a, b, c);
  et_StandardEvent.call(this, a, b, c);
  this.setName("click");
};
et_ClickEvent.prototype = new et_StandardEvent();
et_ClickEvent.prototype.constructor = et_ClickEvent;
var et_LinkEvent = function (a, b, c) {
  if (!(this instanceof et_LinkEvent)) return new et_LinkEvent(a, b, c);
  et_StandardEvent.call(this, a, b, c);
  this.setName("link");
};
et_LinkEvent.prototype = new et_StandardEvent();
et_LinkEvent.prototype.constructor = et_LinkEvent;
var et_AuthenticationSuccessEvent = function (a, b, c) {
  if (!(this instanceof et_AuthenticationSuccessEvent))
    return new et_AuthenticationSuccessEvent(a, b, c);
  et_StandardEvent.call(this, a, b, c);
  this.setName("authenticationSuccess");
};
et_AuthenticationSuccessEvent.prototype = new et_StandardEvent();
et_AuthenticationSuccessEvent.prototype.constructor =
  et_AuthenticationSuccessEvent;
var et_AuthenticationFailureEvent = function (a, b, c) {
  if (!(this instanceof et_AuthenticationFailureEvent))
    return new et_AuthenticationFailureEvent(a, b, c);
  et_StandardEvent.call(this, a, b, c);
  this.setName("authenticationFailure");
};
et_AuthenticationFailureEvent.prototype = new et_StandardEvent();
et_AuthenticationFailureEvent.prototype.constructor =
  et_AuthenticationFailureEvent;
var et_AuthenticationLogoutEvent = function (a, b, c) {
  if (!(this instanceof et_AuthenticationLogoutEvent))
    return new et_AuthenticationLogoutEvent(a, b, c);
  et_StandardEvent.call(this, a, b, c);
  this.setName("authenticationLogout");
};
et_AuthenticationLogoutEvent.prototype = new et_StandardEvent();
et_AuthenticationLogoutEvent.prototype.constructor =
  et_AuthenticationLogoutEvent;
var et_AudioPlaytimeEvent = function (a, b, c) {
  if (!(this instanceof et_AudioPlaytimeEvent))
    return new et_AudioPlaytimeEvent(a, b, c);
  et_PlaytimeEvent.call(this, a, b, c);
  this.setName("audioPlaytime");
};
et_AudioPlaytimeEvent.prototype = new et_PlaytimeEvent();
et_AudioPlaytimeEvent.prototype.constructor = et_AudioPlaytimeEvent;
var et_VideoPlaytimeEvent = function (a, b, c) {
  if (!(this instanceof et_VideoPlaytimeEvent))
    return new et_VideoPlaytimeEvent(a, b, c);
  et_PlaytimeEvent.call(this, a, b, c);
  this.setName("videoPlaytime");
};
et_VideoPlaytimeEvent.prototype = new et_PlaytimeEvent();
et_VideoPlaytimeEvent.prototype.constructor = et_VideoPlaytimeEvent;
var et_VideoFullsizeEvent = function (a, b, c) {
  if (!(this instanceof et_VideoFullsizeEvent))
    return new et_VideoFullsizeEvent(a, b, c);
  et_StandardEvent.call(this, a, b, c);
  this.setName("videoFullsize");
};
et_VideoFullsizeEvent.prototype = new et_StandardEvent();
et_VideoFullsizeEvent.prototype.constructor = et_VideoFullsizeEvent;
var et_VideoRestoreEvent = function (a, b, c) {
  if (!(this instanceof et_VideoRestoreEvent))
    return new et_VideoRestoreEvent(a, b, c);
  et_StandardEvent.call(this, a, b, c);
  this.setName("videoRestore");
};
et_VideoRestoreEvent.prototype = new et_StandardEvent();
et_VideoRestoreEvent.prototype.constructor = et_VideoRestoreEvent;
var et_GalleryViewEvent = function (a, b, c) {
  if (!(this instanceof et_GalleryViewEvent))
    return new et_GalleryViewEvent(a, b, c);
  et_StandardEvent.call(this, a, b, c);
  this.setName("galleryView");
};
et_GalleryViewEvent.prototype = new et_StandardEvent();
et_GalleryViewEvent.prototype.constructor = et_GalleryViewEvent;
var et_GalleryZoomEvent = function (a, b, c) {
  if (!(this instanceof et_GalleryZoomEvent))
    return new et_GalleryZoomEvent(a, b, c);
  et_StandardEvent.call(this, a, b, c);
  this.setName("galleryZoom");
};
et_GalleryZoomEvent.prototype = new et_StandardEvent();
et_GalleryZoomEvent.prototype.constructor = et_GalleryZoomEvent;
var et_GalleryNextEvent = function (a, b, c) {
  if (!(this instanceof et_GalleryNextEvent))
    return new et_GalleryNextEvent(a, b, c);
  et_StandardEvent.call(this, a, b, c);
  this.setName("galleryNext");
};
et_GalleryNextEvent.prototype = new et_StandardEvent();
et_GalleryNextEvent.prototype.constructor = et_GalleryNextEvent;
var et_GalleryPreviousEvent = function (a, b, c) {
  if (!(this instanceof et_GalleryPreviousEvent))
    return new et_GalleryPreviousEvent(a, b, c);
  et_StandardEvent.call(this, a, b, c);
  this.setName("galleryPrevious");
};
et_GalleryPreviousEvent.prototype = new et_StandardEvent();
et_GalleryPreviousEvent.prototype.constructor = et_GalleryPreviousEvent;
var et_PageExitBeaconEvent = function (a, b, c) {
  if (!(this instanceof et_PageExitBeaconEvent))
    return new et_PageExitBeaconEvent(a, b, c);
  et_StandardEvent.call(this, a, b, c);
  this.setName("pageExitBeacon");
};
et_PageExitBeaconEvent.prototype = new et_StandardEvent();
et_PageExitBeaconEvent.prototype.constructor = et_PageExitBeaconEvent;
var et_TimedEvent = function (a, b, c) {
  if (!(this instanceof et_TimedEvent)) return new et_TimedEvent(a, b, c);
  et_StandardEvent.call(this, a, b, c);
  var d = et_customEventTimerObject;
  this.playtimeEvent = void 0;
  this.startTimer = function (a) {
    d.start(a);
  };
  this.stopTimer = function (a, b, c, f) {
    a = d.stop(a);
    if (null != a)
      "undefined" !== typeof b && (this.playtimeEvent = new b(c, f, a));
    else throw new et_PostError("No start event for this object");
  };
  this.getTimer = function (c, e) {
    var m = d.get(c);
    if (null != m)
      "undefined" !== typeof e && (this.playtimeEvent = new e(a, b, m));
    else throw new et_PostError("No start event for this object");
  };
};
et_TimedEvent.prototype = new et_StandardEvent();
et_TimedEvent.prototype.constructor = et_TimedEvent;
et_TimedEvent.prototype.setClientTime = function (a) {
  et_GenericEvent.prototype.setClientTime.call(this, a);
  this.playtimeEvent instanceof et_PlaytimeEvent &&
    this.playtimeEvent.setClientTime(a);
};
et_TimedEvent.prototype.getEvent = function () {
  var a = [],
    b = et_GenericEvent.prototype.getEvent.call(this);
  a[0] = b[0];
  this.playtimeEvent instanceof et_PlaytimeEvent &&
    ((b = this.playtimeEvent.getEvent()), (a[1] = b[0]));
  return a;
};
var et_AudioStartEvent = function (a, b, c) {
  if (!(this instanceof et_AudioStartEvent))
    return new et_AudioStartEvent(a, b, c);
  et_TimedEvent.call(this, a, b, c);
  this.setName("audioStart");
  this.startTimer(a + "audio");
};
et_AudioStartEvent.prototype = new et_TimedEvent();
et_AudioStartEvent.prototype.constructor = et_AudioStartEvent;
var et_VideoStartEvent = function (a, b, c) {
  if (!(this instanceof et_VideoStartEvent))
    return new et_VideoStartEvent(a, b, c);
  et_TimedEvent.call(this, a, b, c);
  this.setName("videoStart");
  this.startTimer(a + "video");
};
et_VideoStartEvent.prototype = new et_TimedEvent();
et_VideoStartEvent.prototype.constructor = et_VideoStartEvent;
var et_AudioStopEvent = function (a, b, c) {
  if (!(this instanceof et_AudioStopEvent))
    return new et_AudioStopEvent(a, b, c);
  et_TimedEvent.call(this, a, b, c);
  this.setName("audioStop");
  this.stopTimer(a + "audio", et_AudioPlaytimeEvent, a, b);
};
et_AudioStopEvent.prototype = new et_TimedEvent();
et_AudioStopEvent.prototype.constructor = et_AudioStopEvent;
var et_VideoStopEvent = function (a, b, c) {
  if (!(this instanceof et_VideoStopEvent))
    return new et_VideoStopEvent(a, b, c);
  et_TimedEvent.call(this, a, b, c);
  this.setName("videoStop");
  this.stopTimer(a + "video", et_VideoPlaytimeEvent, a, b);
};
et_VideoStopEvent.prototype = new et_TimedEvent();
et_VideoStopEvent.prototype.constructor = et_VideoStopEvent;
var et_AudioPauseEvent = function (a, b, c) {
  if (!(this instanceof et_AudioPauseEvent))
    return new et_AudioPauseEvent(a, b, c);
  et_TimedEvent.call(this, a, b, c);
  this.setName("audioPause");
  this.stopTimer(a + "audio", et_AudioPlaytimeEvent, a, b);
};
et_AudioPauseEvent.prototype = new et_TimedEvent();
et_AudioPauseEvent.prototype.constructor = et_AudioPauseEvent;
var et_VideoPauseEvent = function (a, b, c) {
  if (!(this instanceof et_VideoPauseEvent))
    return new et_VideoPauseEvent(a, b, c);
  et_TimedEvent.call(this, a, b, c);
  this.setName("videoPause");
  this.stopTimer(a + "video", et_VideoPlaytimeEvent, a, b);
};
et_VideoPauseEvent.prototype = new et_TimedEvent();
et_VideoPauseEvent.prototype.constructor = et_VideoPauseEvent;
var et_AudioMuteEvent = function (a, b, c) {
  if (!(this instanceof et_AudioMuteEvent))
    return new et_AudioMuteEvent(a, b, c);
  et_TimedEvent.call(this, a, b, c);
  this.setName("audioMute");
  this.getTimer(a + "audio", et_AudioPlaytimeEvent, a, b);
};
et_AudioMuteEvent.prototype = new et_TimedEvent();
et_AudioMuteEvent.prototype.constructor = et_AudioMuteEvent;
var et_AudioSeekEvent = function (a, b, c) {
  if (!(this instanceof et_AudioSeekEvent))
    return new et_AudioSeekEvent(a, b, c);
  et_TimedEvent.call(this, a, b, c);
  this.setName("audioSeek");
  this.getTimer(a + "audio", et_AudioPlaytimeEvent, a, b);
};
et_AudioSeekEvent.prototype = new et_TimedEvent();
et_AudioSeekEvent.prototype.constructor = et_AudioSeekEvent;
var et_AudioNextEvent = function (a, b, c) {
  if (!(this instanceof et_AudioNextEvent))
    return new et_AudioNextEvent(a, b, c);
  et_TimedEvent.call(this, a, b, c);
  this.setName("audioNext");
  this.getTimer(a + "audio", et_AudioPlaytimeEvent, a, b);
};
et_AudioNextEvent.prototype = new et_TimedEvent();
et_AudioNextEvent.prototype.constructor = et_AudioNextEvent;
var et_AudioPreviousEvent = function (a, b, c) {
  if (!(this instanceof et_AudioPreviousEvent))
    return new et_AudioPreviousEvent(a, b, c);
  et_TimedEvent.call(this, a, b, c);
  this.setName("audioPrevious");
  this.getTimer(a + "audio", et_AudioPlaytimeEvent, a, b);
};
et_AudioPreviousEvent.prototype = new et_TimedEvent();
et_AudioPreviousEvent.prototype.constructor = et_AudioPreviousEvent;
var et_VideoMuteEvent = function (a, b, c) {
  if (!(this instanceof et_VideoMuteEvent))
    return new et_VideoMuteEvent(a, b, c);
  et_TimedEvent.call(this, a, b, c);
  this.setName("videoMute");
  this.getTimer(a + "video", et_VideoPlaytimeEvent, a, b);
};
et_VideoMuteEvent.prototype = new et_TimedEvent();
et_VideoMuteEvent.prototype.constructor = et_VideoMuteEvent;
var et_VideoSeekEvent = function (a, b, c) {
  if (!(this instanceof et_VideoSeekEvent))
    return new et_VideoSeekEvent(a, b, c);
  et_TimedEvent.call(this, a, b, c);
  this.setName("videoSeek");
  this.getTimer(a + "video", et_VideoPlaytimeEvent, a, b);
};
et_VideoSeekEvent.prototype = new et_TimedEvent();
et_VideoSeekEvent.prototype.constructor = et_VideoSeekEvent;
var et_VideoNextEvent = function (a, b, c) {
  if (!(this instanceof et_VideoNextEvent))
    return new et_VideoNextEvent(a, b, c);
  et_TimedEvent.call(this, a, b, c);
  this.setName("videoNext");
  this.getTimer(a + "video", et_VideoPlaytimeEvent, a, b);
};
et_VideoNextEvent.prototype = new et_TimedEvent();
et_VideoNextEvent.prototype.constructor = et_VideoNextEvent;
var et_VideoPreviousEvent = function (a, b, c) {
  if (!(this instanceof et_VideoPreviousEvent))
    return new et_VideoPreviousEvent(a, b, c);
  et_TimedEvent.call(this, a, b, c);
  this.setName("videoPrevious");
  this.getTimer(a + "video", et_VideoPlaytimeEvent, a, b);
};
et_VideoPreviousEvent.prototype = new et_TimedEvent();
et_VideoPreviousEvent.prototype.constructor = et_VideoPreviousEvent;
var et_GenericEventHandler = function (a) {
    var b;
    this.customEventMapping = {
      ET_EVENT_DOWNLOAD_ET_EVENT_DOWNLOAD: et_DownloadEvent,
      ET_EVENT_CLICK_ET_EVENT_CLICK: et_ClickEvent,
      ET_EVENT_LINK_ET_EVENT_LINK: et_LinkEvent,
      ET_EVENT_LOGIN_ET_EVENT_LOGIN_SUCCESS: et_AuthenticationSuccessEvent,
      ET_EVENT_LOGIN_ET_EVENT_LOGIN_FAILURE: et_AuthenticationFailureEvent,
      ET_EVENT_LOGIN_ET_EVENT_LOGOUT: et_AuthenticationLogoutEvent,
      ET_EVENT_AUDIO_ET_EVENT_AUDIO_START: et_AudioStartEvent,
      ET_EVENT_AUDIO_ET_EVENT_AUDIO_STOP: et_AudioStopEvent,
      ET_EVENT_AUDIO_ET_EVENT_AUDIO_PAUSE: et_AudioPauseEvent,
      ET_EVENT_AUDIO_ET_EVENT_AUDIO_MUTE: et_AudioMuteEvent,
      ET_EVENT_AUDIO_ET_EVENT_AUDIO_SEEK: et_AudioSeekEvent,
      ET_EVENT_AUDIO_ET_EVENT_AUDIO_NEXT: et_AudioNextEvent,
      ET_EVENT_AUDIO_ET_EVENT_AUDIO_PREVIOUS: et_AudioPreviousEvent,
      ET_EVENT_VIDEO_ET_EVENT_VIDEO_START: et_VideoStartEvent,
      ET_EVENT_VIDEO_ET_EVENT_VIDEO_STOP: et_VideoStopEvent,
      ET_EVENT_VIDEO_ET_EVENT_VIDEO_PAUSE: et_VideoPauseEvent,
      ET_EVENT_VIDEO_ET_EVENT_VIDEO_MUTE: et_VideoMuteEvent,
      ET_EVENT_VIDEO_ET_EVENT_VIDEO_SEEK: et_VideoSeekEvent,
      ET_EVENT_VIDEO_ET_EVENT_VIDEO_NEXT: et_VideoNextEvent,
      ET_EVENT_VIDEO_ET_EVENT_VIDEO_PREVIOUS: et_VideoPreviousEvent,
      ET_EVENT_VIDEO_ET_EVENT_VIDEO_FULLSIZE: et_VideoFullsizeEvent,
      ET_EVENT_VIDEO_ET_EVENT_VIDEO_RESTORE: et_VideoRestoreEvent,
      ET_EVENT_GALLERY_ET_EVENT_GALLERY_VIEW: et_GalleryViewEvent,
      ET_EVENT_GALLERY_ET_EVENT_GALLERY_ZOOM: et_GalleryZoomEvent,
      ET_EVENT_GALLERY_ET_EVENT_GALLERY_NEXT: et_GalleryNextEvent,
      ET_EVENT_GALLERY_ET_EVENT_GALLERY_PREVIOUS: et_GalleryPreviousEvent,
      ET_EVENT_AUDIO_ET_EVENT_AUDIO_PLAYTIME: et_BlockedEvent,
      ET_EVENT_VIDEO_ET_EVENT_VIDEO_PLAYTIME: et_BlockedEvent,
    };
    var c = function (b) {
        return b instanceof et_GenericEvent
          ? (b.setClientTime(a), b.getEvent())
          : [];
      },
      d = function (a, b) {
        try {
          var c = new XMLHttpRequest();
          if ("withCredentials" in c)
            (c.withCredentials = !0), c.open("POST", a, !0);
          else if ("undefined" != typeof XDomainRequest)
            (c = new XDomainRequest()), c.open("POST", a);
          else throw new et_PostError();
          c.onload = function () {
            if (200 <= c.status && 226 >= c.status && c.responseText) {
              var a = JSON.parse(c.responseText);
              "number" === typeof a.days &&
                et_setCoid(a._et_coid, a.days, a.domain);
            }
          };
          c.onerror = function () {
            if (_etracker.getConfigValue("debug")) throw new et_PostError();
          };
          c.setRequestHeader(
            "Content-Type",
            "multipart/form-data; boundary=#####etrackerBoundary#####"
          );
          var h = "",
            d;
          for (d in b)
            b.hasOwnProperty(d) &&
              ((h += "--#####etrackerBoundary#####\n"),
              (h += 'Content-Disposition: form-data; name="' + d + '"\n\n'),
              (h += b[d] + "\n"));
          c.send(h + "--#####etrackerBoundary#####--");
          return !0;
        } catch (s) {
          return g(et_server + cc_genericEventPath, b);
        }
      },
      g = function (a, b) {
        var c = "",
          h;
        for (h in b)
          b.hasOwnProperty(h) &&
            (c += "&" + h + "=" + encodeURIComponent(b[h]));
        c = a + "?" + c.substr(1);
        return c.length <= et_maxUrlLength ? (et_createScriptTag(c), !0) : !1;
      };
    this.newEvent = function (a, g) {
      var f = {
        et: a,
        user_id: _etracker.getCoid(),
        userData: JSON.stringify({
          screen: { width: et_sw, height: et_sh, color: et_sc },
          language: et_la,
          productIdentifier: _etracker.getConfigValue("productIdentifier"),
          cookie: {
            blocked: !_etracker.areCookiesEnabled() || !et_cookiesSupported(),
            firstParty: _etracker.getFpc(),
            domain: window.location.hostname,
            cookieLifetime: _etracker.getConfigValue("cookieLifetime"),
          },
        }),
        events: JSON.stringify(c(g)),
      };
      d(et_server + cc_genericEventPath, f) && "function" === typeof b && b(f);
    };
    this.addCallback = function (a) {
      b = a;
    };
    this.sendCCEvent = function (a, b) {
      var c = this.customEventMapping[a.category + "_" + a.action];
      c
        ? c.prototype instanceof et_StandardEvent &&
          this.newEvent(
            b,
            new c(a.item ? a.item : "", "", a.value ? a.value : null)
          )
        : this.newEvent(
            b,
            new et_UserDefinedEvent(
              a.item ? a.item : "",
              a.category ? a.category : "",
              a.action ? a.action : "",
              "",
              a.value ? a.value : null
            )
          );
    };
  },
  et_genericEvents = new et_GenericEventHandler(new et_ClientTime()),
  et_prepareAnchorsForEvents = function (a) {
    for (
      var b = function (b) {
          et_addEvent(b, "mousedown", function () {
            for (
              var c = b.href.split("#")[0], c = c.split("?")[0], d = 0;
              d < a.length;
              d++
            )
              if (-1 !== c.search(RegExp(a[d].pattern, "i")))
                switch (a[d].type) {
                  case "externalLink":
                    c && _etracker.sendEvent(et_LinkEvent(c, a[d].name));
                    break;
                  case "mailToLink":
                    var f = c.replace("mailto:", "");
                    _etracker.sendEvent(et_LinkEvent(f, a[d].name));
                    break;
                  case "socialMediaLink":
                    _etracker.sendEvent(
                      et_LinkEvent(a[d].name, "Social Media")
                    );
                    break;
                  case "download":
                    (f = c.split("/").pop()),
                      _etracker.sendEvent(et_DownloadEvent(f, "Download"));
                }
          });
        },
        c = document.getElementsByTagName("a"),
        d = 0;
      d < c.length;
      d++
    )
      b(c[d]);
  },
  et_setupPageExitBeacon = function (a) {
    if ("function" === typeof navigator.sendBeacon) {
      a = [a || window._etracker.getConfigValue("secureCode")];
      var b = window._etracker.getConfigValue("slaveCodes");
      b && Array.prototype.push.apply(a, b);
      for (
        var b = _etracker.getCoid(),
          c = JSON.stringify({
            screen: { width: et_sw, height: et_sh, color: et_sc },
            language: et_la,
            productIdentifier: _etracker.getConfigValue("productIdentifier"),
            cookie: {
              blocked: !_etracker.areCookiesEnabled() || !et_cookiesSupported(),
              noResponse: !0,
              firstParty: _etracker.getFpc(),
              domain: window.location.hostname,
              cookieLifetime: _etracker.getConfigValue("cookieLifetime"),
            },
          }),
          d = JSON.stringify(new et_PageExitBeaconEvent().getEvent()),
          g = [],
          e = 0;
        e < a.length;
        ++e
      )
        (beacon = new FormData()),
          beacon.append("et", a[e]),
          beacon.append("user_id", b),
          beacon.append("userData", c),
          beacon.append("events", d),
          g.push(beacon);
      a =
        /iPad|iPhone|iPod/.test(navigator.platform) ||
        ("MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints)
          ? "pagehide"
          : "beforeunload";
      var m = et_server + "/api/v6/tracking/webEvents";
      window.addEventListener(a, function () {
        for (var a = 0; a < g.length; ++a) navigator.sendBeacon(m, g[a]);
      });
    }
  };
var et_showOptIn = function () {
    et_optInActive = !0;
    et_createStyleTag(et_server + "/et_opt_in_styles.php");
    et_createScriptTag(et_server + "/optin_overlay.php?et=" + et_secureId);
  },
  et_switchLang = function (a) {
    document.getElementById("et-askprivacy-overlay").className =
      "et-" + a.value;
  },
  et_getLanguage = function (a) {
    var b = {};
    if ("de" === a || "en" === a) b.value = a;
    else {
      a = "en";
      if (window.navigator && window.navigator.languages) {
        var c = window.navigator.languages;
        c && c.length && (a = c[0].substr(0, 2));
      }
      switch (a) {
        case "de":
          b.value = a;
          break;
        default:
          b.value = "en";
      }
    }
    return b;
  },
  et_startOptinOverlay = function (a) {
    a = et_getLanguage(a);
    et_switchLang(a);
    document.getElementById("et-lang-select").value = a.value;
    document.getElementById("et-askprivacy-bg").style.display = "block";
    document.getElementById("et-askprivacy-bg").style.height =
      document.body.scrollHeight;
    document.getElementById("et-askprivacy-overlay").style.display = "block";
    a = 0;
    window.scrollY
      ? (a = window.scrollY)
      : window.pageYOffset
      ? (a = window.pageYOffset)
      : document.documentElement.scrollTop &&
        (a = document.documentElement.scrollTop);
    document.getElementById("et-askprivacy-overlay").style.top = a;
  },
  et_disableTrackingTemporary = function (a) {
    try {
      "undefined" !== typeof sessionStorage &&
        (a
          ? sessionStorage.removeItem("et_tmp_oi_v2")
          : sessionStorage.setItem("et_tmp_oi_v2", "no"));
    } catch (b) {}
  },
  et_sendOptIn = function (a) {
    et_createScriptTag(
      et_server +
        cc_optInPath +
        "?et=" +
        et_escape(et_secureId) +
        "&user_id=" +
        et_escape(_etracker.getCoid()) +
        "&opt_in=" +
        et_escape(a) +
        "&domain=" +
        et_escape(window.location.hostname)
    );
  },
  et_setCntCookie = function (a) {
    et_createScriptTag(
      et_server +
        cc_cntCookie +
        "?action=" +
        et_escape(a) +
        "&et=" +
        et_escape(et_secureId)
    );
  },
  et_checkOptInCookie = function () {
    var a = et_getOptInCookie();
    return void 0 !== a
      ? a
      : et_OptInType & 1
      ? (1 == et_OptInType && et_showOptIn(), !1)
      : "no" !== et_getCookieValue("et_oi");
  };
function et_getOptInCookie() {
  var a;
  try {
    a = sessionStorage.getItem("et_tmp_oi_v2");
  } catch (b) {}
  a || (a = et_getCookieValue("et_oi_v2", !0));
  switch (a) {
    case "yes":
      return !0;
    case "no":
      return !1;
  }
}
function et_setOptInCookie(a, b) {
  var c, d;
  a ? ((d = 480), (c = "yes")) : ((d = 18250), (c = "no"));
  et_setCookieValue("et_oi_v2", c, d, b, !0);
  et_setCookieValue("et_oi", c, -1, b, !1);
}
function etEvent(a) {
  var b = a,
    c = {},
    d = [],
    g = 0;
  this.setSecureKey = function (a) {
    b = a;
    c = [];
  };
  var e = function (a) {
      _etracker.addOnLoad(function () {
        _etracker.isCodeBricksLoaded() &&
          ((d[g++] = { object: a }), _etracker.isTrackingEnabled() && m());
      });
    },
    m = function () {
      if (_etracker.isTrackingEnabled()) {
        for (var a = 0; a < d.length; a++)
          "undefined" !== typeof et_genericEvents &&
            et_genericEvents.sendCCEvent(d[a].object, b);
        d = [];
        g = 0;
      }
    };
  this.sendStoredEvents = function () {
    m();
  };
  this.eventStart = function (a, b, d, g, m) {
    c[a + b] = {};
    c[a + b].start = new Date().getTime();
    c[a + b].tags = g;
    e({ category: a, item: b, action: d, tags: g, value: m });
  };
  this.eventStop = function (a, b, c, d) {
    this.__eventStop(a, b, c, d, null, !0);
  };
  this.__eventStop = function (a, b, d, g, m, k) {
    var t = c[a + b] ? c[a + b].start : !1;
    if (t) {
      var t = new Date().getTime() - t,
        l = c[a + b].tags;
      k && (c[a + b] = null);
      m && e({ category: a, item: b, action: m, tags: l, value: t });
      e({ category: a, item: b, action: d, tags: l, value: g });
    }
  };
  this.download = function (a, b, c) {
    e({
      category: "ET_EVENT_DOWNLOAD",
      item: a,
      action: "ET_EVENT_DOWNLOAD",
      tags: b,
      value: c,
    });
  };
  this.click = function (a, b, c) {
    e({
      category: "ET_EVENT_CLICK",
      item: a,
      action: "ET_EVENT_CLICK",
      tags: b,
      value: c,
    });
  };
  this.link = function (a, b, c) {
    e({
      category: "ET_EVENT_LINK",
      item: a,
      action: "ET_EVENT_LINK",
      tags: b,
      value: c,
    });
  };
  this.loginSuccess = function (a, b, c) {
    e({
      category: "ET_EVENT_LOGIN",
      item: a,
      action: "ET_EVENT_LOGIN_SUCCESS",
      tags: b,
      value: c,
    });
  };
  this.loginFailure = function (a, b, c) {
    e({
      category: "ET_EVENT_LOGIN",
      item: a,
      action: "ET_EVENT_LOGIN_FAILURE",
      tags: b,
      value: c,
    });
  };
  this.logout = function (a, b, c) {
    e({
      category: "ET_EVENT_LOGIN",
      item: a,
      action: "ET_EVENT_LOGOUT",
      tags: b,
      value: c,
    });
  };
  this.audioStart = function (a, b, c) {
    this.eventStart("ET_EVENT_AUDIO", a, "ET_EVENT_AUDIO_START", b, c);
  };
  this.audioStop = function (a, b) {
    this.__eventStop(
      "ET_EVENT_AUDIO",
      a,
      "ET_EVENT_AUDIO_STOP",
      b,
      "ET_EVENT_AUDIO_PLAYTIME",
      !0
    );
  };
  this.audioPause = function (a, b) {
    this.__eventStop(
      "ET_EVENT_AUDIO",
      a,
      "ET_EVENT_AUDIO_PAUSE",
      b,
      "ET_EVENT_AUDIO_PLAYTIME",
      !0
    );
  };
  this.audioMute = function (a, b) {
    this.__eventStop(
      "ET_EVENT_AUDIO",
      a,
      "ET_EVENT_AUDIO_MUTE",
      b,
      "ET_EVENT_AUDIO_PLAYTIME",
      !1
    );
  };
  this.audioSeek = function (a, b) {
    this.__eventStop(
      "ET_EVENT_AUDIO",
      a,
      "ET_EVENT_AUDIO_SEEK",
      b,
      "ET_EVENT_AUDIO_PLAYTIME",
      !1
    );
  };
  this.audioNext = function (a, b) {
    this.__eventStop(
      "ET_EVENT_AUDIO",
      a,
      "ET_EVENT_AUDIO_NEXT",
      b,
      "ET_EVENT_AUDIO_PLAYTIME",
      !1
    );
  };
  this.audioPrevious = function (a, b) {
    this.__eventStop(
      "ET_EVENT_AUDIO",
      a,
      "ET_EVENT_AUDIO_PREVIOUS",
      b,
      "ET_EVENT_AUDIO_PLAYTIME",
      !1
    );
  };
  this.audioPlaytime = function (a, b, c) {
    e({
      category: "ET_EVENT_AUDIO",
      item: a,
      action: "ET_EVENT_AUDIO_PLAYTIME",
      tags: b,
      value: c,
    });
  };
  this.videoStart = function (a, b, c) {
    this.eventStart("ET_EVENT_VIDEO", a, "ET_EVENT_VIDEO_START", b, c);
  };
  this.videoStop = function (a, b) {
    this.__eventStop(
      "ET_EVENT_VIDEO",
      a,
      "ET_EVENT_VIDEO_STOP",
      b,
      "ET_EVENT_VIDEO_PLAYTIME",
      !0
    );
  };
  this.videoPause = function (a, b) {
    this.__eventStop(
      "ET_EVENT_VIDEO",
      a,
      "ET_EVENT_VIDEO_PAUSE",
      b,
      "ET_EVENT_VIDEO_PLAYTIME",
      !0
    );
  };
  this.videoMute = function (a, b) {
    this.__eventStop(
      "ET_EVENT_VIDEO",
      a,
      "ET_EVENT_VIDEO_MUTE",
      b,
      "ET_EVENT_VIDEO_PLAYTIME",
      !1
    );
  };
  this.videoSeek = function (a, b) {
    this.__eventStop(
      "ET_EVENT_VIDEO",
      a,
      "ET_EVENT_VIDEO_SEEK",
      b,
      "ET_EVENT_VIDEO_PLAYTIME",
      !1
    );
  };
  this.videoNext = function (a, b) {
    this.__eventStop(
      "ET_EVENT_VIDEO",
      a,
      "ET_EVENT_VIDEO_NEXT",
      b,
      "ET_EVENT_VIDEO_PLAYTIME",
      !1
    );
  };
  this.videoPrevious = function (a, b) {
    this.__eventStop(
      "ET_EVENT_VIDEO",
      a,
      "ET_EVENT_VIDEO_PREVIOUS",
      b,
      "ET_EVENT_VIDEO_PLAYTIME",
      !1
    );
  };
  this.videoPlaytime = function (a, b, c) {
    e({
      category: "ET_EVENT_VIDEO",
      item: a,
      action: "ET_EVENT_VIDEO_PLAYTIME",
      tags: b,
      value: c,
    });
  };
  this.videoFullsize = function (a, b, c) {
    e({
      category: "ET_EVENT_VIDEO",
      item: a,
      action: "ET_EVENT_VIDEO_FULLSIZE",
      tags: b,
      value: c,
    });
  };
  this.videoRestore = function (a, b, c) {
    e({
      category: "ET_EVENT_VIDEO",
      item: a,
      action: "ET_EVENT_VIDEO_RESTORE",
      tags: b,
      value: c,
    });
  };
  this.galleryView = function (a, b, c) {
    e({
      category: "ET_EVENT_GALLERY",
      item: a,
      action: "ET_EVENT_GALLERY_VIEW",
      tags: b,
      value: c,
    });
  };
  this.galleryZoom = function (a, b, c) {
    e({
      category: "ET_EVENT_GALLERY",
      item: a,
      action: "ET_EVENT_GALLERY_ZOOM",
      tags: b,
      value: c,
    });
  };
  this.galleryNext = function (a, b, c) {
    e({
      category: "ET_EVENT_GALLERY",
      item: a,
      action: "ET_EVENT_GALLERY_NEXT",
      tags: b,
      value: c,
    });
  };
  this.galleryPrevious = function (a, b, c) {
    e({
      category: "ET_EVENT_GALLERY",
      item: a,
      action: "ET_EVENT_GALLERY_PREVIOUS",
      tags: b,
      value: c,
    });
  };
}
etForm = {
  sendEvent: function (a, b, c) {
    c = { formEventType: a, formName: b, formEventData: c };
    _etracker.sendEvent(et_FormEvent(c));
  },
};
var et_FormEvent = function (a) {
  if (!(this instanceof et_FormEvent)) return new et_FormEvent(a);
  this.name = "formEvent";
  this.version = 1;
  this.eventData = a;
};
et_FormEvent.prototype = new et_GenericEvent();
et_FormEvent.prototype.constructor = et_FormEvent;
function _classCallCheck(a, b) {
  if (!(a instanceof b))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(a, b) {
  for (var c, d = 0; d < b.length; d++)
    (c = b[d]),
      (c.enumerable = c.enumerable || !1),
      (c.configurable = !0),
      "value" in c && (c.writable = !0),
      Object.defineProperty(a, c.key, c);
}
function _createClass(a, b, c) {
  return (
    b && _defineProperties(a.prototype, b), c && _defineProperties(a, c), a
  );
}
if ("defineProperties" in Object)
  var NotiParrotFrame = (function () {
    function a(b, c, d) {
      var g = this;
      _classCallCheck(this, a);
      this.accountId = parseInt(b);
      this.userId = c;
      this.iframeHost = d;
      this.iframeId = "63b6e216-a08f-11e8-98d0-529269fb1459";
      this.popupWindow = void 0;
      this.popupWidth = 500;
      this.popupHeight = 338;
      window.addEventListener("message", function (a) {
        return g.handleMessage(a);
      });
      this.messageCallback = void 0;
    }
    return (
      _createClass(a, null, [
        {
          key: "isSupported",
          value: function () {
            return (
              "serviceWorker" in navigator &&
              "PushManager" in window &&
              "Notification" in window
            );
          },
        },
      ]),
      _createClass(a, [
        {
          key: "generateUrl",
          value: function () {
            var a = encodeURIComponent(this.userId);
            return ""
              .concat(this.iframeHost, "?accountId=")
              .concat(this.accountId, "&userId=")
              .concat(a, "&origin=")
              .concat(location.origin);
          },
        },
        {
          key: "getIframeStatus",
          value: function () {
            return new Promise(
              function (a, c) {
                var d, g, e, m;
                return (
                  (d = this.waitForMessage("status")),
                  (g = document.createElement("iframe")),
                  g.setAttribute("id", this.iframeId),
                  g.setAttribute("width", 0),
                  g.setAttribute("height", 0),
                  g.setAttribute("hidden", "hidden"),
                  g.setAttribute("src", this.generateUrl()),
                  document.body.appendChild(g),
                  Promise.resolve(d).then(
                    function (d) {
                      try {
                        return (
                          (e = d),
                          (m = document.getElementById(this.iframeId)),
                          m.parentNode.removeChild(m),
                          a(e)
                        );
                      } catch (g) {
                        return c(g);
                      }
                    }.bind(this),
                    c
                  )
                );
              }.bind(this)
            );
          },
        },
        {
          key: "enable",
          value: function () {
            var a = arguments;
            return new Promise(
              function (c, d) {
                var g, e, m, f, h, p, s, q;
                return ((g = this),
                (e = 0 < a.length && void 0 !== a[0] ? a[0] : void 0),
                this.popupWindow)
                  ? c("opened")
                  : ((m = screen.availLeft || 0),
                    (f = m + (screen.width - this.popupWidth) / 2),
                    (h = (screen.height - this.popupHeight) / 2 - 32),
                    (p = this.waitForMessage("status")),
                    (this.popupWindow = window.open(
                      this.generateUrl(),
                      "PushPopup",
                      "width="
                        .concat(this.popupWidth, ", height=")
                        .concat(this.popupHeight, ", top=")
                        .concat(h, ", left=")
                        .concat(f)
                    )),
                    Promise.resolve(p).then(
                      function () {
                        try {
                          return (
                            (s = setInterval(function () {
                              g.popupWindow.closed &&
                                g.messageCallback &&
                                (g.messageCallback({
                                  type: "enable",
                                  data: "closed",
                                }),
                                (g.popupWindow = void 0));
                            }, 1e3)),
                            Promise.resolve(
                              this.sendMessage(this.popupWindow, "enable", e)
                            ).then(
                              function (a) {
                                try {
                                  return (
                                    (q = a),
                                    clearInterval(s),
                                    this.clearMessageCallback(),
                                    c(q)
                                  );
                                } catch (b) {
                                  return d(b);
                                }
                              }.bind(this),
                              d
                            )
                          );
                        } catch (a) {
                          return d(a);
                        }
                      }.bind(this),
                      d
                    ));
              }.bind(this)
            );
          },
        },
        {
          key: "closePopup",
          value: function () {
            this.popupWindow &&
              "function" == typeof this.popupWindow.close &&
              this.popupWindow.close();
            this.popupWindow = void 0;
          },
        },
        {
          key: "getStatus",
          value: function () {
            return new Promise(
              function (a, c) {
                var d, g;
                return (
                  (d = window.Notification.permission),
                  Promise.resolve(this.getIframeStatus()).then(function (e) {
                    try {
                      return (
                        (g = e),
                        "denied" == d
                          ? a(g)
                          : a("granted" == g ? "granted" : "default")
                      );
                    } catch (m) {
                      return c(m);
                    }
                  }, c)
                );
              }.bind(this)
            );
          },
        },
        {
          key: "sendMessage",
          value: function (a, c) {
            var d = arguments;
            return new Promise(
              function (g) {
                var e = 2 < d.length && void 0 !== d[2] ? d[2] : void 0;
                if (!a) return g(!1);
                var m = this.waitForMessage(c);
                return (
                  a.postMessage({ type: c, data: e }, this.iframeHost), g(m)
                );
              }.bind(this)
            );
          },
        },
        {
          key: "handleMessage",
          value: function (a) {
            a.origin !== this.iframeHost ||
              ("function" == typeof this.messageCallback &&
                this.messageCallback(a.data) &&
                this.clearMessageCallback());
          },
        },
        {
          key: "waitForMessage",
          value: function (a) {
            var c = this;
            return "function" == typeof this.messageCallback
              ? void 0
              : new Promise(function (d) {
                  c.messageCallback = function (c) {
                    if (c.type === a) return d(c.data), !0;
                  };
                });
          },
        },
        {
          key: "clearMessageCallback",
          value: function () {
            this.messageCallback = void 0;
          },
        },
      ]),
      a
    );
  })();
function _typeof(a) {
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (a) {
            return typeof a;
          }
        : function (a) {
            return a &&
              "function" == typeof Symbol &&
              a.constructor === Symbol &&
              a !== Symbol.prototype
              ? "symbol"
              : typeof a;
          }),
    _typeof(a)
  );
}
function _classCallCheck(a, b) {
  if (!(a instanceof b))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(a, b) {
  for (var c, d = 0; d < b.length; d++)
    (c = b[d]),
      (c.enumerable = c.enumerable || !1),
      (c.configurable = !0),
      "value" in c && (c.writable = !0),
      Object.defineProperty(a, c.key, c);
}
function _createClass(a, b, c) {
  return (
    b && _defineProperties(a.prototype, b), c && _defineProperties(a, c), a
  );
}
if ("defineProperties" in Object)
  var NotiParrot = (function () {
    function a() {
      _classCallCheck(this, a);
    }
    return (
      _createClass(a, null, [
        {
          key: "urlB64ToUint8Array",
          value: function (a) {
            var c = "=".repeat((4 - (a.length % 4)) % 4);
            a = (a + c).replace(/\-/g, "+").replace(/_/g, "/");
            a = window.atob(a);
            for (var c = new Uint8Array(a.length), d = 0; d < a.length; ++d)
              c[d] = a.charCodeAt(d);
            return c;
          },
        },
        {
          key: "isSupported",
          value: function () {
            return (
              !!a.isSupportedSafari() ||
              ("serviceWorker" in navigator &&
                "PushManager" in window &&
                !(!navigator.serviceWorker || !window.PushManager))
            );
          },
        },
        {
          key: "isSupportedSafari",
          value: function () {
            return (
              "safari" in window &&
              "object" == _typeof(window.safari) &&
              "pushNotification" in window.safari
            );
          },
        },
        {
          key: "hasServiceWorker",
          value: function () {
            return new Promise(function (b, c) {
              return a.isSupportedSafari()
                ? b(!0)
                : Promise.resolve(
                    new Promise(function (b, c) {
                      var e;
                      return (e = a.isSupported())
                        ? Promise.resolve(
                            navigator.serviceWorker.getRegistration()
                          ).then(
                            function (a) {
                              try {
                                return (e = null != a), b(e);
                              } catch (f) {
                                return c(f);
                              }
                            }.bind(this),
                            c
                          )
                        : b(e);
                    })
                  ).then(b, c);
            });
          },
        },
        {
          key: "getStatus",
          value: function () {
            return new Promise(function (a, c) {
              return Promise.resolve(Notification.permission).then(a, c);
            });
          },
        },
        {
          key: "getNotificationStatus",
          value: function () {
            return Notification.permission;
          },
        },
        {
          key: "getActiveSubscription",
          value: function () {
            var b = arguments;
            return new Promise(function (c, d) {
              var g, e, m;
              return (
                (g = 0 < b.length && void 0 !== b[0] ? b[0] : void 0),
                Promise.resolve(
                  new Promise(function (b, c) {
                    var d;
                    return (d = a.isSupported())
                      ? Promise.resolve(a.getStatus()).then(
                          function (a) {
                            try {
                              return (d = "granted" === a), b(d);
                            } catch (e) {
                              return c(e);
                            }
                          }.bind(this),
                          c
                        )
                      : b(d);
                  })
                ).then(
                  function (b) {
                    try {
                      if (b) {
                        var h = function () {
                            try {
                              return c(void 0);
                            } catch (a) {
                              return d(a);
                            }
                          }.bind(this),
                          p = function (a) {
                            try {
                              return (
                                console.warn(
                                  "Error fetching the active subscription: ",
                                  a
                                ),
                                h()
                              );
                            } catch (b) {
                              return d(b);
                            }
                          };
                        try {
                          return Promise.resolve(
                            navigator.serviceWorker.getRegistration()
                          ).then(
                            function (b) {
                              try {
                                var d = function () {
                                  return Promise.resolve(
                                    e.pushManager.getSubscription()
                                  ).then(
                                    function (b) {
                                      try {
                                        return (
                                          (m = b),
                                          !m && g
                                            ? Promise.resolve(
                                                a.subscribeUser(
                                                  e,
                                                  g,
                                                  "https://api.signalize.com"
                                                )
                                              ).then(
                                                function () {
                                                  try {
                                                    return Promise.resolve(
                                                      e.pushManager.getSubscription()
                                                    ).then(
                                                      function (a) {
                                                        try {
                                                          return (m = a), c(m);
                                                        } catch (b) {
                                                          return p(b);
                                                        }
                                                      }.bind(this),
                                                      p
                                                    );
                                                  } catch (a) {
                                                    return p(a);
                                                  }
                                                }.bind(this),
                                                p
                                              )
                                            : c(m)
                                        );
                                      } catch (d) {
                                        return p(d);
                                      }
                                    }.bind(this),
                                    p
                                  );
                                };
                                return (
                                  (e = b),
                                  e
                                    ? d.call(this)
                                    : Promise.resolve(
                                        a.registerServiceWorker("/sw.js")
                                      ).then(
                                        function (a) {
                                          try {
                                            return (
                                              (e = a),
                                              e ? d.call(this) : c(void 0)
                                            );
                                          } catch (b) {
                                            return p(b);
                                          }
                                        }.bind(this),
                                        p
                                      )
                                );
                              } catch (f) {
                                return p(f);
                              }
                            }.bind(this),
                            p
                          );
                        } catch (s) {
                          p(s);
                        }
                      }
                      return c(void 0);
                    } catch (q) {
                      return d(q);
                    }
                  }.bind(this),
                  d
                )
              );
            });
          },
        },
        {
          key: "registerServiceWorker",
          value: function () {
            var b = arguments;
            return new Promise(function (c, d) {
              var g, e;
              if (
                ((g = 0 < b.length && void 0 !== b[0] ? b[0] : "sw.ejs"),
                a.isSupported())
              ) {
                var m = function () {
                    try {
                      return c(void 0);
                    } catch (a) {
                      return d(a);
                    }
                  }.bind(this),
                  f = function () {
                    try {
                      return console.warn("registerServiceWorker failed!"), m();
                    } catch (a) {
                      return d(a);
                    }
                  };
                try {
                  return Promise.resolve(
                    navigator.serviceWorker.register(g)
                  ).then(function (a) {
                    try {
                      return (
                        (e = a),
                        Promise.resolve(navigator.serviceWorker.ready).then(
                          function (a) {
                            try {
                              return Promise.resolve(a).then(function () {
                                try {
                                  return c(e);
                                } catch (a) {
                                  return f(a);
                                }
                              }, f);
                            } catch (b) {
                              return f(b);
                            }
                          },
                          f
                        )
                      );
                    } catch (b) {
                      return f(b);
                    }
                  }, f);
                } catch (h) {
                  f(h);
                }
              }
              return c(void 0);
            });
          },
        },
        {
          key: "subscribeUser",
          value: function (b, c, d) {
            return new Promise(function (g, e) {
              var m;
              return Promise.resolve(a.getPublicKeyArray(c, d)).then(function (
                a
              ) {
                try {
                  m = a;
                  a = function (a) {
                    try {
                      console.warn("subscribeUser failed: ", a);
                      var b;
                      try {
                        b = g(!1);
                      } catch (c) {
                        b = e(c);
                      }
                      return b;
                    } catch (d) {
                      return e(d);
                    }
                  };
                  try {
                    return Promise.resolve(
                      b.pushManager.subscribe({
                        userVisibleOnly: !0,
                        applicationServerKey: m,
                      })
                    ).then(g, a);
                  } catch (c) {
                    a(c);
                  }
                } catch (d) {
                  return e(d);
                }
              },
              e);
            });
          },
        },
        {
          key: "subscribeUserV2",
          value: function (b, c) {
            return new Promise(function (d, g) {
              var e = function (a) {
                try {
                  console.warn("subscribeUser failed: ", a);
                  var b;
                  try {
                    b = d(!1);
                  } catch (c) {
                    b = g(c);
                  }
                  return b;
                } catch (e) {
                  return g(e);
                }
              };
              try {
                return a.isSupportedSafari()
                  ? d(
                      new Promise(function (a) {
                        window.safari.pushNotification.requestPermission(
                          "https://safari.signalize.com/safari-api",
                          b.pushId,
                          {
                            clientId: b.userId,
                            websiteUrl:
                              window.location.protocol +
                              "//" +
                              window.location.host,
                          },
                          function (b) {
                            console.log("Safari-Result:");
                            console.log(b);
                            a(!0);
                          }
                        );
                      })
                    )
                  : Promise.resolve(
                      b.pushManager.subscribe({
                        userVisibleOnly: !0,
                        applicationServerKey: c,
                      })
                    ).then(d, e);
              } catch (m) {
                e(m);
              }
            });
          },
        },
        {
          key: "unsubscribeUser",
          value: function (a) {
            return new Promise(function (c, d) {
              var g,
                e = function () {
                  try {
                    return c();
                  } catch (a) {
                    return d(a);
                  }
                },
                m = function (a) {
                  try {
                    return console.error("Error while unsubscribing: ", a), e();
                  } catch (b) {
                    return d(b);
                  }
                };
              try {
                return Promise.resolve(a.pushManager.getSubscription()).then(
                  function (a) {
                    try {
                      return (
                        (g = a),
                        g
                          ? Promise.resolve(g.unsubscribe()).then(
                              function () {
                                try {
                                  return e();
                                } catch (a) {
                                  return m(a);
                                }
                              }.bind(this),
                              m
                            )
                          : e()
                      );
                    } catch (b) {
                      return m(b);
                    }
                  }.bind(this),
                  m
                );
              } catch (f) {
                m(f);
              }
            });
          },
        },
        {
          key: "sendSubscriptionToServer",
          value: function (b, c, d) {
            return new Promise(function (g, e) {
              var m, f, h, p, s, q, k;
              if (a.isSupportedSafari()) return g(!0);
              if (window.localStorage) {
                if (
                  ((m = parseInt(
                    window.localStorage.getItem("notiParrotLastSent")
                  )),
                  (f = +new Date()),
                  f - m < parseInt(""))
                )
                  return g(!1);
                window.localStorage.setItem("notiParrotLastSent", f);
              }
              return Promise.resolve(a.getActiveSubscription(c)).then(
                function (a) {
                  try {
                    return (
                      (h = a),
                      h
                        ? ((p = JSON.parse(JSON.stringify(h))),
                          (s = {
                            accountId: c,
                            clientId: d,
                            endpoint: p.endpoint,
                            key: p.keys.p256dh,
                            auth: p.keys.auth,
                            language: navigator.language,
                          }),
                          (q = {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(s),
                          }),
                          Promise.resolve(
                            fetch(b + "/v2/subscriptions", q)
                          ).then(function (a) {
                            try {
                              return (k = a), g(200 === k.status);
                            } catch (b) {
                              return e(b);
                            }
                          }, e))
                        : g(!1)
                    );
                  } catch (f) {
                    return e(f);
                  }
                }.bind(this),
                e
              );
            });
          },
        },
        {
          key: "enable",
          value: function (b, c, d) {
            var g = arguments;
            return new Promise(function (e, m) {
              var f, h, p;
              return (
                (f =
                  3 < g.length && void 0 !== g[3]
                    ? g[3]
                    : "https://api.signalize.com"),
                a.isSupported()
                  ? (console.warn(
                      "NotiParrot.enable is deprecated, use enableV2 instead!"
                    ),
                    (h = a.getNotificationStatus()),
                    "denied" == h
                      ? (console.warn("Client doesn't want push!"), e(!1))
                      : Promise.resolve(
                          new Promise(function (b, c) {
                            var d;
                            return (d = "granted" == h)
                              ? Promise.resolve(a.hasServiceWorker()).then(
                                  function (a) {
                                    try {
                                      return (d = a), b(d);
                                    } catch (e) {
                                      return c(e);
                                    }
                                  }.bind(this),
                                  c
                                )
                              : b(d);
                          })
                        ).then(
                          function (g) {
                            try {
                              if (g)
                                return (
                                  console.warn("Push already registered!"),
                                  e(!1)
                                );
                              if ("granted" == h || "default" == h) {
                                var q = function () {
                                    try {
                                      return e(!1);
                                    } catch (a) {
                                      return m(a);
                                    }
                                  }.bind(this),
                                  k = function (a) {
                                    try {
                                      return (
                                        console.error(
                                          "Service Worker Error",
                                          a
                                        ),
                                        q()
                                      );
                                    } catch (b) {
                                      return m(b);
                                    }
                                  };
                                try {
                                  return Promise.resolve(
                                    a.registerServiceWorker(b)
                                  ).then(
                                    function (b) {
                                      try {
                                        return (
                                          (p = b),
                                          p
                                            ? Promise.resolve(
                                                a.subscribeUser(p, c, f)
                                              ).then(function () {
                                                try {
                                                  return (
                                                    "default" === h &&
                                                      window.localStorage &&
                                                      window.localStorage.removeItem(
                                                        "notiParrotLastSent"
                                                      ),
                                                    Promise.resolve(
                                                      a.sendSubscriptionToServer(
                                                        f,
                                                        c,
                                                        d
                                                      )
                                                    ).then(e, k)
                                                  );
                                                } catch (b) {
                                                  return k(b);
                                                }
                                              }, k)
                                            : q()
                                        );
                                      } catch (g) {
                                        return k(g);
                                      }
                                    }.bind(this),
                                    k
                                  );
                                } catch (t) {
                                  k(t);
                                }
                              }
                              return e(!1);
                            } catch (l) {
                              return m(l);
                            }
                          }.bind(this),
                          m
                        ))
                  : e(!1)
              );
            });
          },
        },
        {
          key: "enableV2",
          value: function (b, c, d) {
            var g = arguments;
            return new Promise(function (e, m) {
              var f, h, p, s, q;
              return (
                (f =
                  3 < g.length && void 0 !== g[3]
                    ? g[3]
                    : "https://api.signalize.com"),
                a.isSupported()
                  ? Promise.resolve(a.getStatus(c)).then(
                      function (k) {
                        try {
                          return (
                            (h = k),
                            "denied" == h
                              ? (console.warn("Client doesn't want push!"),
                                e(void 0))
                              : Promise.resolve(
                                  new Promise(function (b, c) {
                                    var d;
                                    return (d = "granted" == h)
                                      ? Promise.resolve(
                                          a.hasServiceWorker()
                                        ).then(
                                          function (a) {
                                            try {
                                              return (d = a), b(d);
                                            } catch (e) {
                                              return c(e);
                                            }
                                          }.bind(this),
                                          c
                                        )
                                      : b(d);
                                  })
                                ).then(
                                  function (k) {
                                    try {
                                      if (k)
                                        return (
                                          console.warn(
                                            "Push already registered!"
                                          ),
                                          e(void 0)
                                        );
                                      if ("granted" == h || "default" == h) {
                                        var g = function () {
                                            try {
                                              return e(void 0);
                                            } catch (a) {
                                              return m(a);
                                            }
                                          }.bind(this),
                                          r = function (a) {
                                            try {
                                              return (
                                                console.error(
                                                  "Service Worker Error",
                                                  a
                                                ),
                                                g()
                                              );
                                            } catch (b) {
                                              return m(b);
                                            }
                                          };
                                        try {
                                          return a.isSupportedSafari()
                                            ? Promise.resolve(
                                                a.getSafariPushId(f, c)
                                              ).then(function (a) {
                                                try {
                                                  return (
                                                    (p = a),
                                                    p
                                                      ? e({
                                                          serviceWorker: {
                                                            pushId: p,
                                                            userId: d,
                                                          },
                                                          serverKey: "0",
                                                        })
                                                      : e(void 0)
                                                  );
                                                } catch (b) {
                                                  return r(b);
                                                }
                                              }, r)
                                            : Promise.resolve(
                                                a.registerServiceWorker(b)
                                              ).then(
                                                function (b) {
                                                  try {
                                                    return (
                                                      (s = b),
                                                      s
                                                        ? Promise.resolve(
                                                            a.getPublicKeyArray(
                                                              c,
                                                              f
                                                            )
                                                          ).then(function (a) {
                                                            try {
                                                              return (
                                                                (q = a),
                                                                e({
                                                                  serviceWorker:
                                                                    s,
                                                                  serverKey: q,
                                                                })
                                                              );
                                                            } catch (b) {
                                                              return r(b);
                                                            }
                                                          }, r)
                                                        : g()
                                                    );
                                                  } catch (d) {
                                                    return r(d);
                                                  }
                                                }.bind(this),
                                                r
                                              );
                                        } catch (t) {
                                          r(t);
                                        }
                                      }
                                      return e(void 0);
                                    } catch (x) {
                                      return m(x);
                                    }
                                  }.bind(this),
                                  m
                                )
                          );
                        } catch (g) {
                          return m(g);
                        }
                      }.bind(this),
                      m
                    )
                  : e(void 0)
              );
            });
          },
        },
        {
          key: "disable",
          value: function () {
            return new Promise(function (b, c) {
              var d;
              return a.isSupportedSafari()
                ? (console.warn("NotiParrot.disable not supported on safari!"),
                  b())
                : Promise.resolve(
                    navigator.serviceWorker.getRegistrations()
                  ).then(function (g) {
                    try {
                      return (
                        (d = g),
                        Promise.resolve(
                          Promise.all(
                            d.map(function (b) {
                              var c = a.unsubscribeUser(b);
                              return b.unregister(), c;
                            })
                          )
                        ).then(function () {
                          try {
                            return b();
                          } catch (a) {
                            return c(a);
                          }
                        }, c)
                      );
                    } catch (e) {
                      return c(e);
                    }
                  }, c);
            });
          },
        },
        {
          key: "getPublicKeyArray",
          value: function (b, c) {
            return new Promise(function (d, g) {
              var e;
              return Promise.resolve(
                fetch(c + "/api/v1/push/key/get-current/" + b).then(function (
                  a
                ) {
                  return a.text();
                })
              ).then(function (b) {
                try {
                  return (e = b), d(a.urlB64ToUint8Array(e));
                } catch (c) {
                  return g(c);
                }
              }, g);
            });
          },
        },
        {
          key: "getSafariPushId",
          value: function (b, c) {
            return new Promise(function (d, g) {
              var e;
              return a.safariPushId
                ? d(a.safariPushId)
                : Promise.resolve(
                    fetch("".concat(b, "/api/v1/safari/push-ids/").concat(c))
                  ).then(
                    function (b) {
                      try {
                        return (
                          (e = b),
                          200 == e.status
                            ? Promise.resolve(e.text()).then(
                                function (b) {
                                  try {
                                    return (
                                      (a.safariPushId = b), d(a.safariPushId)
                                    );
                                  } catch (c) {
                                    return g(c);
                                  }
                                }.bind(this),
                                g
                              )
                            : d(a.safariPushId)
                        );
                      } catch (c) {
                        return g(c);
                      }
                    }.bind(this),
                    g
                  );
            });
          },
        },
      ]),
      a
    );
  })();
var et_notiParrot,
  et_subscription = { serviceWorker: void 0, serverKey: void 0 },
  et_isSubscribed = function (a, b) {
    if ("no" !== et_getCookieValue("et_oip", !0) && "PushManager" in window) {
      var c = _etracker.getCoid();
      if ("undefined" !== typeof NotiParrotFrame && c)
        return new NotiParrotFrame(a, c, b).getStatus();
    }
  },
  et_isNativeSubscribed = function () {
    if ("no" !== et_getCookieValue("et_oip", !0)) {
      var a = _etracker.getCoid();
      if ("undefined" !== typeof NotiParrot && a) return NotiParrot.getStatus();
    }
  },
  et_sendSubscription = function (a, b) {
    var c = _etracker.getCoid();
    c && NotiParrot.sendSubscriptionToServer(b, a, c);
  },
  et_showNativeOptInV2 = function (a, b, c) {
    var d = _etracker.getCoid();
    "undefined" !== typeof NotiParrot &&
      d &&
      NotiParrot.enableV2("/sw.js", b, d, "https://" + a).then(function (d) {
        "undefined" !== typeof d &&
          ((et_subscription = d), et_showBanner(a, b, c, !0));
      });
  },
  et_showBanner = function (a, b, c, d) {
    d = d ? "&oneStep=" + d : "";
    et_createScriptTag(
      "https://" +
        a +
        "/banners/accounts/" +
        b +
        "?url=" +
        encodeURIComponent(
          window.cc_url || window.et_url || document.location.href
        ) +
        "&lang=" +
        c +
        d
    );
  },
  et_openNativeOptIn = function (a, b, c) {
    var d = _etracker.getCoid(),
      g = "Banner";
    "undefined" !== typeof c && (g = c);
    NotiParrot.subscribeUserV2(
      et_subscription.serviceWorker,
      et_subscription.serverKey
    ).then(function (c) {
      NotiParrot.sendSubscriptionToServer(b, a, d);
      et_stopOptInPushOverlay();
      "object" === typeof c && (c = !0);
      _etracker.sendEvent(
        et_SignalizeOptInEvent(
          "Native Opt-In - " + g,
          "Web Push",
          "web push status set to " + c
        )
      );
      c && _etracker.enableCookies();
      c &&
        document.getElementById("et-promote-interests-active") &&
        _etracker.sendEvent(
          et_SignalizeInterestEvent(
            et_getInterests(),
            "Web Push",
            "web push interests chosen"
          )
        );
    });
  },
  et_openNativeOptInForMobile = function (a, b, c) {
    _etracker.getCoid();
    var d = "Banner";
    "undefined" !== typeof c && (d = c);
    NotiParrot.subscribeUserV2(
      et_subscription.serviceWorker,
      et_subscription.serverKey
    ).then(function (a) {
      "object" === typeof a && (a = !0);
      _etracker.sendEvent(
        et_SignalizeOptInEvent(
          "Native Opt-In - " + d,
          "Web Push",
          "web push status set to " + a
        )
      );
      a ? _etracker.enableCookies() : et_stopOptInPushOverlay();
    });
  },
  et_sendInterests = function (a) {
    a &&
      document.getElementById("et-promote-interests-active") &&
      _etracker.sendEvent(
        et_SignalizeInterestEvent(
          et_getInterests(),
          "Web Push",
          "web push interests chosen"
        )
      );
  },
  et_showOptInPushV2 = function (a, b, c, d) {
    if ("no" !== et_getCookieValue("et_oip", !0)) {
      var g = _etracker.getCoid();
      "undefined" !== typeof NotiParrotFrame &&
        g &&
        ((et_notiParrot = new NotiParrotFrame(b, g, c)),
        et_notiParrot.getStatus().then(function (c) {
          "default" === c && et_showBanner(a, b, d, !1);
        }));
    }
  },
  et_setOptInPushCookie = function (a, b) {
    var c = et_getDefaultCookieDomain();
    et_setCookieValue("et_oip", a, b, c, 1 < b);
  },
  et_blockOptInPush = function (a, b) {
    var c = "user blocks opt-in dialog for a month";
    a || (a = 30);
    if ("boolean" === typeof a || 1 === a)
      (a = 1), (c = "user blocks opt-in dialog for session");
    b || (b = "Box");
    et_setOptInPushCookie("no", a);
    _etracker.sendEvent(et_SignalizeOptInEvent("Opt-In - " + b, "Web Push", c));
  },
  et_enablePush = function (a) {
    var b = "Box";
    "undefined" !== typeof a && (b = a);
    _etracker.sendEvent(
      et_SignalizePopUpEvent("Pop-Up - " + b, "Web Push", "popup opens")
    );
    if (et_notiParrot)
      et_notiParrot
        .enable(et_getPopUpTexts())
        .then(function (a) {
          "object" === typeof a && (a = !0);
          _etracker.sendEvent(
            et_SignalizePopUpEvent(
              "Pop-Up - " + b,
              "Web Push",
              "web push status set to " + a
            )
          );
          "granted" === a
            ? (_etracker.sendEvent(
                et_SignalizePopUpEvent(
                  "Pop-Up - " + b,
                  "Web Push",
                  "subscribed"
                )
              ),
              _etracker.enableCookies(),
              document.getElementById("et-promote-interests-active") &&
                _etracker.sendEvent(
                  et_SignalizeInterestEvent(
                    et_getInterests(),
                    "Web Push",
                    "web push interests chosen"
                  )
                ))
            : "denied" === a && et_blockOptInPushWithBanner(30, b);
          "undefined" !== typeof et_stopOptInPushOverlay &&
            et_stopOptInPushOverlay();
          et_notiParrot.closePopup();
        })
        ["catch"](function (a) {
          "undefined" !== typeof et_stopOptInPushOverlay &&
            et_stopOptInPushOverlay();
          et_notiParrot.closePopup();
        });
  },
  et_getInterests = function () {
    var a = "",
      b;
    for (b in document.forms["et-promote-interests"].elements
      .SIGNALIZE_INTEREST)
      document.forms["et-promote-interests"].elements.SIGNALIZE_INTEREST[b]
        .checked &&
        (a +=
          document.forms["et-promote-interests"].elements.SIGNALIZE_INTEREST[b]
            .value + ", ");
    return a.length
      ? a.substr(0, a.length - 2)
      : "STR_CC_ATTR_VALUE_NO_ALLOCATION";
  };
var et_SignalizeOptInEvent = function (a, b, c) {
  if (!(this instanceof et_SignalizeOptInEvent))
    return new et_SignalizeOptInEvent(a, b, c);
  this.setVersion(1);
  this.setEventData({ object: a, category: b, action: c });
  this.setName("signalizeOptIn");
};
et_SignalizeOptInEvent.prototype = new et_GenericEvent();
et_SignalizeOptInEvent.prototype.constructor = et_SignalizeOptInEvent;
var et_SignalizePopUpEvent = function (a, b, c) {
  if (!(this instanceof et_SignalizePopUpEvent))
    return new et_SignalizePopUpEvent(a, b, c);
  this.setVersion(1);
  this.setEventData({ object: a, category: b, action: c });
  this.setName("signalizePopUp");
};
et_SignalizePopUpEvent.prototype = new et_GenericEvent();
et_SignalizePopUpEvent.prototype.constructor = et_SignalizePopUpEvent;
var et_SignalizeInterestEvent = function (a, b, c) {
  if (!(this instanceof et_SignalizeInterestEvent))
    return new et_SignalizeInterestEvent(a, b, c);
  this.setVersion(1);
  this.setEventData({ object: a, category: b, action: c });
  this.setName("signalizeInterest");
};
et_SignalizeInterestEvent.prototype = new et_GenericEvent();
et_SignalizeInterestEvent.prototype.constructor = et_SignalizeInterestEvent;
(function (a, b, c) {
  if (
    !a.isDataECommerceGrabberDefined &&
    ((a.isDataECommerceGrabberDefined = !0),
    (b = b.getElementById("_etLoader")),
    "true" === (b && b.getAttribute("data-ecommerce-grabber")) ||
      ("undefined" !== typeof a.dataECommerceGrabber && a.dataECommerceGrabber))
  ) {
    var d = {},
      g = function () {
        var a = console;
        a && a.log.apply(a, arguments);
      },
      e = function () {
        var b = [].slice.call(arguments);
        a.etCommerce && a.etCommerce.sendEvent
          ? (g("sending event", b),
            a.etCommerce.sendEvent.apply(a.etCommerce, arguments))
          : (g("queueing event", b),
            b.unshift("sendEvent"),
            (a.etCommercePrepareEvents = a.etCommercePrepareEvents || []),
            a.etCommercePrepareEvents.push(b));
      },
      m = function (a) {
        try {
          if (a.length && "string" === typeof a[0]) {
            var b = a[0].split(".", 2),
              c = b.pop(),
              f = b[0] || "",
              h;
            d[f] = d[f] || {};
            h = d[f];
            g(
              "plugin & method",
              c,
              f,
              [].slice.call(a).join(),
              [].slice.call(a)
            );
            switch (c) {
              case "ec:addImpression":
                var m = a[1].list;
                h.viewedProducts = h.viewedProducts || {};
                var p = (h.viewedProducts[m] = h.viewedProducts[m] || []),
                  q = {
                    id: a[1].id,
                    name: a[1].name,
                    category: (a[1].category || "").split("/"),
                    price: a[1].price.toFixed(2),
                    currency: "EUR",
                  };
                a[1].variant && (q.variants = { productVariant: a[1].variant });
                p.push(q);
                g("list", m, "got", q);
                break;
              case "ec:addProduct":
                h.products = h.products || [];
                h.productsQuantities = h.productsQuantities || [];
                q = {
                  id: a[1].id,
                  name: a[1].name,
                  category: (a[1].category || "").split("/"),
                  price: a[1].price.toFixed(2),
                  currency: "EUR",
                };
                a[1].variant && (q.variants = { productVariant: a[1].variant });
                var s = { product: q, quantity: a[1].quantity };
                h.products.push(q);
                h.productsQuantities.push(s);
                break;
              case "ec:setAction":
                h.action = a[1];
                h.actionData = a[2];
                break;
              case "send":
                g("gotta send fast", h);
                if (h.viewedProducts)
                  for (var y in h.viewedProducts)
                    (p = { listType: y, products: h.viewedProducts[y] }),
                      e("viewProductList", p);
                switch (h.action) {
                  case "detail":
                    if (h.products)
                      for (y in h.products) e("viewProduct", h.products[y]);
                    break;
                  case "add":
                    if (h.productsQuantities)
                      for (y in h.productsQuantities) {
                        var B = h.productsQuantities[y];
                        e("insertToBasket", B.product, B.quantity);
                      }
                    break;
                  case "remove":
                    if (h.productsQuantities)
                      for (y in h.productsQuantities)
                        (B = h.productsQuantities[y]),
                          e("removeFromBasket", B.product, B.quantity);
                    break;
                  case "purchase":
                    var D = {
                      orderNumber: h.actionData.id,
                      status: "lead",
                      orderPrice: h.actionData.revenue.toFixed(2),
                      currency: "EUR",
                      basket: {
                        id: h.actionData.id,
                        products: h.productsQuantities,
                      },
                      shipCosts: h.actionData.shipping.toFixed(2),
                    };
                    e("order", D);
                    break;
                  case "refund":
                    g(
                      "och n\u00f6, partial cancellation gehampel ist voll unklar wie dat l\u00e4uft"
                    );
                }
                delete d[f];
            }
          }
        } catch (E) {
          g("grande catastrophe"), g(E);
        }
      },
      f = function () {
        (f.q = f.q || []).push(arguments);
        m(arguments);
      };
    f.l = 1 * new Date();
    var h = function () {
      m(arguments);
      if (h.target) return h.target.apply(a, arguments);
      g(
        "ez proxy with no target defined, lost calls are bad, mmmkay?",
        arguments
      );
    };
    h.l = 1 * new Date();
    var p = function () {
      var b = a.GoogleAnalyticsObject || "ga",
        c = a[b];
      if (c === f || c === h) return !1;
      if (c)
        if (c.q) {
          g("existing target with queue", c.q);
          for (var d = 0; d < c.q.length; ++d) m(c.q[d]);
          f.q = c.q;
          g("init queueing proxy with old queue", a[b]);
          a[b] = f;
          f(p);
        } else
          g("existing target without queue", c),
            g("init proxy with target", c),
            (h.target = c),
            (a[b] = h);
      else g("no target, initializing queue"), (a[b] = f), f(p);
      return !0;
    };
    p();
    var s = 100,
      q = function () {
        s = p() ? 100 : Math.min(1.5 * s, 1e3);
        a.setTimeout(q, s);
      };
    q();
  }
})(window, document);
(function (a, b, c) {
  function d() {
    var b = et_getCookieValue("_et_coid", !0);
    if (!b) {
      var b = "",
        c = a.crypto || a.msCrypto;
      if (c) {
        var d = new Uint8Array(16);
        c.getRandomValues(d);
        for (c = 0; c < d.length; c++)
          b += (16 > d[c] ? "0" : "") + d[c].toString(16);
      } else
        for (c = 0; 32 > c; c++)
          (d = Math.floor(16 * Math.random())),
            (b += "0123456789abcdef".charAt(d));
    }
    return b;
  }
  function g(a) {
    var b = {},
      c = et_getCookieValue("_etc_dbg");
    c && (b = JSON.parse(c));
    for (var d in k)
      k.hasOwnProperty(d) &&
        (b.hasOwnProperty(d)
          ? ((c = b[d]),
            (k[d] = c),
            e("config[" + d + "] using value from _etc_dbg: " + c))
          : a.hasOwnProperty(d) &&
            ((c = a[d]),
            (k[d] = c),
            e("config[" + d + "] using value from _etr object: " + c)));
    l.isEnabled() || e("Optout cookie is set, tracking is disabled");
    k.etCodeHost = t.cleanUrlBeginning(k.etCodeHost);
    k.btCntHost = t.cleanUrlBeginning(k.btCntHost);
  }
  function e(a) {
    k.debug && console.log(new Date().getTime() - p + "ms " + a);
  }
  function m(a) {
    var c = b.createElement("style");
    c.type = "text/css";
    try {
      c.innerHTML = a;
    } catch (d) {
      c.styleSheet.cssText = a;
    }
    b.getElementsByTagName("head")[0].appendChild(c);
  }
  function f() {
    return (
      "1" ===
      (et_getCookieValue("et_allow_cookies", !0) ||
        et_getCookieValue("_et_allow_cookies"))
    );
  }
  function h() {
    a.console ||
      (a.console = {
        assert: function () {},
        clear: function () {},
        dir: function () {},
        error: function () {},
        info: function () {},
        log: function () {},
        profile: function () {},
        profileEnd: function () {},
        warn: function () {},
      });
    g(a._etr || {});
    !1 !== et_getOptInCookie() && n.init();
    this.addOnLoad(x);
  }
  if (!a._etracker) {
    var p = new Date().getTime(),
      s = d(),
      q = et_getCookieValue("_et_coid", !0),
      k = {
        debug: !1,
        debugMode: !1,
        etCodeHost: a.et_proxy_redirect || "//code.etracker.com",
        btCntHost: a.et_proxy_redirect || "//www.etracker.de/dc",
        protocol: "//",
        blockDC: !1,
        blockETC: !1,
        precondition: { func: !1, timeout: 0 },
        optInPushTopLevelDomain: "",
      },
      t = (function () {
        function a() {}
        a.prototype.isEmpty = function (a) {
          if (a) {
            if (a.length && 0 === a.length) return !0;
            for (var b in a) if (a.hasOwnProperty(b)) return !1;
          }
          return !0;
        };
        a.prototype.cleanUrlBeginning = function (a) {
          return a === c || "" === a
            ? ""
            : k.protocol + a.replace(/^(http(s)?:)?\/+/, "");
        };
        a.prototype.mapLanguageId = function (a, b) {
          switch (a) {
            case 1:
            case "1":
            case "de":
              return 1;
            case 2:
            case "2":
            case "en":
              return 2;
            case 3:
            case "3":
            case "fr":
              return 3;
            case 5:
            case "5":
            case "mx":
            case "es":
              return 5;
            default:
              return b || 1;
          }
        };
        return new a();
      })(),
      l = (function () {
        function c() {
          var a = {},
            b;
          for (b in z)
            e("checking " + b),
              z.hasOwnProperty(b) &&
                !z[b].fn() &&
                z[b].timeout > q &&
                (e(
                  "have to wait for " +
                    b +
                    " to come true. condition timeout is " +
                    z[b].timeout
                ),
                (a[b] = { fn: z[b].fn, timeout: z[b].timeout - s }));
          z = a;
          v = t.isEmpty(z);
        }
        function d(b) {
          e("waitForExecuteTimeout " + C);
          C >= q
            ? v
              ? b()
              : (c(),
                (C -= s),
                a.setTimeout(function () {
                  d(b);
                }, s))
            : e("do not execute tracking. waiting for execute ready timed out");
        }
        function h(a) {
          a = a && "yourdomain.com" !== a ? a : "";
          var c = b.domain ? b.domain : "";
          return c.indexOf(a) === c.length - a.length ? a : "";
        }
        function g() {
          this.BT_TIMEOUT = 1e3;
          this.PRECOND_TIMEOUT = 500;
          this.loaderInit = !0;
        }
        var m = !1,
          p = !1,
          q = 0,
          s = 50,
          C = 1e4,
          v = !1,
          z = {},
          w = [];
        g.prototype.executeAll = function () {
          var c = b.location.href || b.URL || "",
            c =
              (a && "btEditorIframe" === a.name) ||
              -1 !== c.indexOf("btcache-");
          if (k.blockETC || c)
            e("do not execute tracking, blockETC or blockInVE parameter set.");
          else
            for (
              e("execute tracking (" + k.secureCode + ")"), _etc(), c = 0;
              c < k.slaveCodes.length;
              ++c
            )
              e("execute slave tracking (" + k.slaveCodes[c] + ")"),
                et_cc(k.slaveCodes[c]);
        };
        g.prototype.execute = function (b) {
          "function" !== typeof b && (b = this.executeAll);
          l.addWaitCondition("etracker is loaded", function () {
            return m;
          });
          a.setTimeout(function () {
            d(b);
          }, s);
        };
        g.prototype.addWaitCondition = function (a, b, c) {
          z[a] = { fn: b, timeout: c || C };
        };
        g.prototype.setReady = function () {
          m = !0;
        };
        g.prototype.isReady = function () {
          return m;
        };
        g.prototype.setFirstPixelSent = function () {
          p = !0;
        };
        g.prototype.addWrapperCall = function (a) {
          "function" === typeof a && (p || !et_first ? a() : w.push(a));
        };
        g.prototype.doWrapperCalls = function () {
          for (; 0 < w.length; ) w.shift()();
        };
        g.prototype.isEnabled = function () {
          if (n.isDNTActive() || "no" === et_getCookieValue("et_oi")) return !1;
          var a = "undefined" !== typeof et_OptInType && et_OptInType & 1,
            b = et_getOptInCookie();
          return a ? !0 === b : !1 !== b;
        };
        g.prototype.disable = function (a) {
          if (m) {
            var b = et_getOptInCookie();
            !1 !== b && (et_setOptInCookie(!1, h(a)), et_setCntCookie("set"));
            b && et_sendOptIn(0);
          } else et_setOptInCookie(!1, a);
          r();
          u();
        };
        g.prototype.enable = function (a) {
          m
            ? (et_getOptInCookie() ||
                (et_setOptInCookie(!0, h(a)),
                _etracker.startTracking(),
                "undefined" !== typeof ET_Event &&
                  "unknown" !== typeof ET_Event &&
                  ET_Event.sendStoredEvents(),
                "undefined" !== typeof etCommerce &&
                  "unknown" !== typeof etCommerce &&
                  etCommerce.sendQueuedEvents(),
                et_sendOptIn(1),
                et_setCntCookie("del")),
              et_disableTrackingTemporary(!0),
              r(),
              u())
            : this.loaderInit &&
              ((this.loaderInit = !1),
              n.init(function () {
                l.executeAll();
                m && l.enable(a);
              }));
        };
        g.prototype.areCookiesEnabled = function () {
          return !_etracker.getConfigValue("blockCookies") || f();
        };
        g.prototype.disableCookies = function (a) {
          et_setCookieValue("et_allow_cookies", "0", 18250, h(a), !0);
        };
        g.prototype.enableCookies = function (a) {
          et_setCookieValue("et_allow_cookies", "1", 480, h(a), !0);
        };
        return new g();
      })(),
      n = (function () {
        function d(a) {
          return a
            ? (a = a.match(/^[0-9a-zA-Z]{3,12}$/))
              ? a[0]
              : null
            : (e("no secure code given!"), null);
        }
        function g() {
          a._etc = function () {
            l.execute(function () {
              e("register preliminary  _etc(); call");
              _etc();
            });
          };
        }
        function h(a, c) {
          var d = b.createElement("script");
          d.async = "async";
          d.type = "text/javascript";
          d.charset = "UTF-8";
          d.id = c || "";
          d.src = a;
          b.getElementsByTagName("head").item(0).appendChild(d);
        }
        function n(a) {
          return "true" === a;
        }
        function m() {}
        var p = b.getElementById("_etLoader");
        m.prototype.isDNTActive = function () {
          var b;
          b =
            "true" != (p && p.getAttribute("data-respect-dnt"))
              ? !1
              : "1" == navigator.doNotTrack ||
                "yes" === navigator.doNotTrack ||
                "1" == navigator.msDoNotTrack ||
                "1" == a.doNotTrack;
          return b;
        };
        m.prototype.init = function (b) {
          if ("function" !== typeof _etc && a.etc_fb_preview === c && p)
            if (this.isDNTActive()) e("Loader init aborted by DNT flag");
            else if (
              (g(),
              (k.respectDNT = p.getAttribute("data-respect-dnt")),
              (k.secureCode = d(p.getAttribute("data-secure-code"))),
              (k.slaveCodes = (function () {
                for (
                  var a = p.getAttribute("data-slave-codes"),
                    a = a ? a.split(",") : [],
                    b = [],
                    c = 0;
                  c < a.length;
                  ++c
                ) {
                  var e = d(a[c]);
                  e && b.push(e);
                }
                return b;
              })()),
              (k.cookieLifetime = (function () {
                var a = p.getAttribute("data-cookie-lifetime"),
                  a = parseInt(a);
                return isNaN(a) ? 24 : 0 === a ? 1 : a;
              })()),
              (k.blockCookies = n(p.getAttribute("data-block-cookies"))),
              (k.pluginVersion = p.getAttribute("data-plugin-version")),
              (k.productIdentifier = p.getAttribute("data-product-identifier")),
              k.secureCode)
            ) {
              a._et_cookie_upgrade_url = p.getAttribute(
                "data-cookie-upgrade-url"
              );
              "hasSignalizeOnly" === k.productIdentifier ||
                "signalize" === k.productIdentifier ||
                "function" !== typeof _dcLaunch ||
                k.blockDC ||
                "function" === typeof b ||
                ((a._btCc = k.secureCode),
                (a._btHost = k.btCntHost),
                (a._btSslHost = k.btCntHost),
                (a._btCLT = 30 * k.cookieLifetime),
                (a._btNoWs = k.blockCookies && !f()),
                _dcLaunch(),
                l.addWaitCondition(
                  "Dynamic Content",
                  function () {
                    return a._bt !== c && "done" === _bt.state();
                  },
                  l.BT_TIMEOUT
                ));
              if ("function" === typeof k.precondition.func) {
                var m = parseInt(k.precondition.timeout, 10);
                l.addWaitCondition(
                  "Custom Precondition",
                  k.precondition.func,
                  k.precondition.timeout === m ? m : l.PRECOND_TIMEOUT
                );
              }
              e("loading master tag");
              h(k.etCodeHost + "/t.js?v=local0&et=" + k.secureCode, "_etCode");
              l.execute(b);
            }
        };
        return new m();
      })(),
      r = function () {},
      u = function () {},
      x = function () {
        w("et-opt-out", "et-toggle-opt-out");
        w("signalize-opt-out", "signalize-toggle-opt-out");
      },
      w = function (a, c) {
        var d = "signalize-toggle-opt-out" === c ? "signalize" : "et",
          e = b.getElementById(a);
        if (e) {
          A(e, d);
          var f = b.getElementById(c),
            e = (
              "signalize" === d
                ? {
                    1: [
                      "Ihre Besuchsdaten werden nicht mehr f\u00fcr den Push-Benachrichtigungsdienst erfasst.",
                      "Ihre Besuchsdaten werden f\u00fcr den Push-Benachrichtigungsdienst erfasst.",
                    ],
                    2: [
                      "Your session data will no longer be collected for the push notification service.",
                      "Your session data will be collected for the push notification service.",
                    ],
                  }
                : {
                    1: [
                      "Ihre Besuchsdaten flie\u00dfen nicht mehr in die Web-Analyse ein. Zum Aktivieren klicken.",
                      "Ihre Besuchsdaten flie\u00dfen in die Web-Analyse ein. Zum Widersprechen klicken.",
                    ],
                    2: [
                      "Your session data will no longer be used for web analytics. Click to activate.",
                      "Your session data will be used for web analytics. Click to object.",
                    ],
                  }
            )[t.mapLanguageId(f.getAttribute("data-language"))],
            g = f.getAttribute("data-tld");
          f.checked = l.isEnabled();
          "signalize" === d
            ? (u = function () {
                f.checked = l.isEnabled();
              })
            : (r = function () {
                f.checked = l.isEnabled();
              });
          m(y(d, e));
          f.onclick = function () {
            l.isEnabled() ? l.disable(g) : l.enable(g);
            "signalize" === d ? u() : r();
          };
        }
      },
      A = function (a, c) {
        var d = a.getAttribute("data-tld"),
          e = a.getAttribute("data-language"),
          f = b.createElement("label");
        f.className = c + "-switch";
        a.parentNode.replaceChild(f, a);
        var g = b.createElement("input");
        g.type = "checkbox";
        g.setAttribute("data-tld", d);
        g.setAttribute("data-language", e);
        g.setAttribute("id", c + "-toggle-opt-out");
        f.appendChild(g);
        d = b.createElement("span");
        d.className = c + "-slider";
        f.appendChild(d);
      },
      y = function (a, b) {
        var c = "signalize" === a;
        return (
          " ." +
          a +
          "-switch { \tposition: relative; \tdisplay: inline-block; \tline-height: 1; \twidth: " +
          (c ? "35px; " : "40px; ") +
          "\theight: " +
          (c ? "14px; " : "20px; ") +
          "} ." +
          a +
          "-switch input { \tdisplay:none; } ." +
          a +
          "-slider { \tposition: absolute; \tcursor: pointer; \ttop: 0; \tleft: 0; \tright: 0; \tbottom: 0; \tbackground-color: " +
          (c ? "#9a9a9a; " : "#666666; ") +
          "\t-webkit-transition: .4s; \ttransition: .4s; \tborder-radius: 34px; } ." +
          a +
          '-slider::before { \tposition: absolute; \tcontent: ""; \theight: ' +
          (c ? "20px; " : "15px; ") +
          "\twidth: " +
          (c ? "20px; " : "15px; ") +
          "\tleft: " +
          (c ? "-4px; " : "2px; ") +
          "\tbottom: " +
          (c ? "-3px; " : "3px; ") +
          "\tbackground-color: " +
          (c ? "#F1F1F1; " : "white; ") +
          "\ttransition: .4s; \tborder-radius: 50%; } input#" +
          a +
          "-toggle-opt-out:checked + ." +
          a +
          "-slider { \tbackground-image: " +
          (c ? "none; " : "linear-gradient(180deg, #ff9021, #ff4a5a); ") +
          "\tbackground-color: " +
          (c ? "#8894d8; " : "#ff9021; ") +
          "} input#" +
          a +
          "-toggle-opt-out:checked + ." +
          a +
          "-slider::before { \t-webkit-transform: translateX(20px); \t-ms-transform: translateX(20px); \ttransform: translateX(20px); \tleft: " +
          (c ? "-2px; " : "2px; ") +
          "\tbackground-color: " +
          (c ? "#2230b7; " : "white; ") +
          "} input#" +
          a +
          '-toggle-opt-out + span::after { \tcontent: "' +
          b[0] +
          '"; \tposition: absolute; \tleft: ' +
          (c ? "45px; " : "50px; ") +
          "\twidth: auto; \twhite-space: nowrap; \ttop: 50%; \t-ms-transform: translateY(-50%); \ttransform: translateY(-50%); } input#" +
          a +
          '-toggle-opt-out:checked + span::after { \tcontent: "' +
          b[1] +
          '"; } @media only screen and (max-width: 800px) { \tinput#' +
          a +
          "-toggle-opt-out + span::after {  \t\twhite-space: normal;  \t\twidth: calc(100vw - 150px);  \t} } "
        );
      };
    h.prototype.addCSS = m;
    h.prototype.getCoid = function () {
      return s;
    };
    h.prototype.getFpc = function () {
      return q;
    };
    h.prototype.getConfigValue = function (a) {
      return k[a];
    };
    h.prototype.setReady = function () {
      if (k.secureCode || et_secureId)
        ET_Event.setSecureKey(k.secureCode || et_secureId), l.setReady();
    };
    h.prototype.setFirstPixelSent = function () {
      l.setFirstPixelSent();
    };
    h.prototype.addWrapperCall = function (a) {
      l.addWrapperCall(a);
    };
    h.prototype.doWrapperCalls = function () {
      k.secureCode &&
        a.setTimeout(function () {
          l.doWrapperCalls();
        }, 20);
    };
    h.prototype.startTracking = function () {
      l.executeAll();
    };
    h.prototype.addEvent = function (a) {
      ("undefined" !== typeof b.readyState &&
        "complete" !== b.readyState &&
        "loaded" !== b.readyState) ||
      !l.isReady()
        ? l.execute(a)
        : a();
    };
    h.prototype.addOnLoad = function (c) {
      "undefined" === typeof b.readyState ||
      "complete" === b.readyState ||
      "loaded" === b.readyState
        ? c()
        : et_addEvent(a, "load", c);
    };
    h.prototype.openFeedback = function (a) {
      _etracker.addOnLoad(function () {
        e("Page Feedback is not available.");
      });
    };
    h.prototype.openSurvey = function (a) {
      _etracker.addOnLoad(function () {
        e("Visitor Voice is not available.");
      });
    };
    h.prototype.sendEvent = function (a, b) {
      _etracker.addEvent(function () {
        "object" === typeof et_genericEvents
          ? _etracker.isTrackingEnabled() &&
            et_genericEvents.newEvent(b || k.secureCode, a)
          : e("Generic event handler is not available.");
      });
    };
    h.prototype.isCodeBricksLoaded = function () {
      return l.isReady();
    };
    h.prototype.generateCookieId = d;
    h.prototype.resetBlockCookies = function () {
      delete k.blockCookies;
    };
    h.prototype.isTrackingEnabled = function () {
      return l.isEnabled();
    };
    h.prototype.disableTracking = function (a) {
      l.disable(a);
    };
    h.prototype.enableTracking = function (a) {
      l.enable(a);
    };
    h.prototype.areCookiesEnabled = function () {
      return l.areCookiesEnabled();
    };
    h.prototype.disableCookies = function (a) {
      l.disableCookies(a);
    };
    h.prototype.enableCookies = function (a) {
      l.enableCookies(a);
    };
    h.prototype.isOptInDialogExpected = function () {
      return et_getOptInCookie() === c;
    };
    h.prototype.disableTrackingForSession = function () {
      et_disableTrackingTemporary(!1);
    };
    h.prototype.initOptOutButtons = function () {
      x();
    };
    h.prototype.log = function (a) {
      e(a);
    };
    h.prototype.tools = t;
    a._etracker = new h();
    a.ET_Event = new etEvent(a._etracker.getConfigValue("secureCode"));
    e("needed " + (new Date().getTime() - p) + " ms to load");
  }
})(window, document);
var et_checkOptInCookie = function () {
  return true;
};
function _etc_start() {
  var c = "";

  c =
    '<a href="http://www.etracker.de" target="_blank"><img style="border:0px;" alt="" src="' +
    window.location.protocol +
    '//www.etracker.de/cnt.php?et=rm" /></a>';
  if (c != "") {
    var x = document.createElement("div");
    x.innerHTML = c;
    var et_bodyInterval = window.setInterval(function () {
      if (document.body) {
        window.clearInterval(et_bodyInterval);
        document.body.appendChild(x);
      }
    }, 1);
  }
}

var et_OptInType = 0;
var _etc = function () {
  if (et_checkOptInCookie()) {
    _etc_start();
  }
};

if (typeof et_params == "undefined") {
  et_params = function () {};
}
et_params();
_etc();
_etracker.setReady();
