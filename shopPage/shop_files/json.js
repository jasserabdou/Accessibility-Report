"object" != typeof JSON && (JSON = {}),
  (function () {
    "use strict";
    function f(e) {
      return 10 > e ? "0" + e : e;
    }
    function quote(e) {
      return (
        (escapable.lastIndex = 0),
        escapable.test(e)
          ? '"' +
            e.replace(escapable, function (e) {
              var t = meta[e];
              return "string" == typeof t
                ? t
                : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
            }) +
            '"'
          : '"' + e + '"'
      );
    }
    function str(e, t) {
      var i,
        a,
        n,
        r,
        o,
        s = gap,
        l = t[e];
      switch (
        (l &&
          "object" == typeof l &&
          "function" == typeof l.toJSON &&
          (l = l.toJSON(e)),
        "function" == typeof rep && (l = rep.call(t, e, l)),
        typeof l)
      ) {
        case "string":
          return quote(l);
        case "number":
          return isFinite(l) ? String(l) : "null";
        case "boolean":
        case "null":
          return String(l);
        case "object":
          if (!l) return "null";
          if (
            ((gap += indent),
            (o = []),
            "[object Array]" === Object.prototype.toString.apply(l))
          ) {
            for (r = l.length, i = 0; r > i; i += 1) o[i] = str(i, l) || "null";
            return (
              (n =
                0 === o.length
                  ? "[]"
                  : gap
                  ? "[\n" + gap + o.join(",\n" + gap) + "\n" + s + "]"
                  : "[" + o.join(",") + "]"),
              (gap = s),
              n
            );
          }
          if (rep && "object" == typeof rep)
            for (r = rep.length, i = 0; r > i; i += 1)
              "string" == typeof rep[i] &&
                ((a = rep[i]),
                (n = str(a, l)),
                n && o.push(quote(a) + (gap ? ": " : ":") + n));
          else
            for (a in l)
              Object.prototype.hasOwnProperty.call(l, a) &&
                ((n = str(a, l)),
                n && o.push(quote(a) + (gap ? ": " : ":") + n));
          return (
            (n =
              0 === o.length
                ? "{}"
                : gap
                ? "{\n" + gap + o.join(",\n" + gap) + "\n" + s + "}"
                : "{" + o.join(",") + "}"),
            (gap = s),
            n
          );
      }
    }
    "function" != typeof Date.prototype.toJSON &&
      ((Date.prototype.toJSON = function () {
        return isFinite(this.valueOf())
          ? this.getUTCFullYear() +
              "-" +
              f(this.getUTCMonth() + 1) +
              "-" +
              f(this.getUTCDate()) +
              "T" +
              f(this.getUTCHours()) +
              ":" +
              f(this.getUTCMinutes()) +
              ":" +
              f(this.getUTCSeconds()) +
              "Z"
          : null;
      }),
      (String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON =
          function () {
            return this.valueOf();
          }));
    var cx =
        /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      escapable =
        /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      gap,
      indent,
      meta = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\",
      },
      rep;
    "function" != typeof JSON.stringify &&
      (JSON.stringify = function (e, t, i) {
        var a;
        if (((gap = ""), (indent = ""), "number" == typeof i))
          for (a = 0; i > a; a += 1) indent += " ";
        else "string" == typeof i && (indent = i);
        if (
          ((rep = t),
          t &&
            "function" != typeof t &&
            ("object" != typeof t || "number" != typeof t.length))
        )
          throw new Error("JSON.stringify");
        return str("", { "": e });
      }),
      "function" != typeof JSON.parse &&
        (JSON.parse = function (text, reviver) {
          function walk(e, t) {
            var i,
              a,
              n = e[t];
            if (n && "object" == typeof n)
              for (i in n)
                Object.prototype.hasOwnProperty.call(n, i) &&
                  ((a = walk(n, i)), void 0 !== a ? (n[i] = a) : delete n[i]);
            return reviver.call(e, t, n);
          }
          var j;
          if (
            ((text = String(text)),
            (cx.lastIndex = 0),
            cx.test(text) &&
              (text = text.replace(cx, function (e) {
                return (
                  "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                );
              })),
            /^[\],:{}\s]*$/.test(
              text
                .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
                .replace(
                  /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                  "]"
                )
                .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
            ))
          )
            return (
              (j = eval("(" + text + ")")),
              "function" == typeof reviver ? walk({ "": j }, "") : j
            );
          throw new SyntaxError("JSON.parse");
        });
  })(),
  define("util/json", [], function () {
    return {
      stringify: JSON.stringify,
      parse: JSON.parse,
      encode: JSON.stringify,
      decode: JSON.parse,
    };
  });
//@ sourceMappingURL=json.js.map
