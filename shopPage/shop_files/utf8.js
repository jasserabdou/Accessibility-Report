define("util/utf8", [], function () {
  return {
    encode: function (e) {
      e = e.replace(/\r\n/g, "\n");
      for (var t = "", i = 0; i < e.length; i++) {
        var a = e.charCodeAt(i);
        128 > a
          ? (t += String.fromCharCode(a))
          : a > 127 && 2048 > a
          ? ((t += String.fromCharCode(192 | (a >> 6))),
            (t += String.fromCharCode(128 | (63 & a))))
          : ((t += String.fromCharCode(224 | (a >> 12))),
            (t += String.fromCharCode(128 | (63 & (a >> 6)))),
            (t += String.fromCharCode(128 | (63 & a))));
      }
      return t;
    },
    decode: function (e) {
      for (var t = "", i = 0, a = 0, n = 0, r = 0; i < e.length; )
        (a = e.charCodeAt(i)),
          128 > a
            ? ((t += String.fromCharCode(a)), i++)
            : a > 191 && 224 > a
            ? ((n = e.charCodeAt(i + 1)),
              (t += String.fromCharCode(((31 & a) << 6) | (63 & n))),
              (i += 2))
            : ((n = e.charCodeAt(i + 1)),
              (r = e.charCodeAt(i + 2)),
              (t += String.fromCharCode(
                ((15 & a) << 12) | ((63 & n) << 6) | (63 & r)
              )),
              (i += 3));
      return t;
    },
  };
});
//@ sourceMappingURL=utf8.js.map
