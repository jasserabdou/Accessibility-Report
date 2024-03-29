define("util/mime", ["module", "jquery"], function (e, t) {
  var i = /([a-z]+\/\*)/gi,
    a = /([a-z]+\/\*)/i,
    n = /\//,
    r = function (e, t) {
      return l.config.groups[t] || t;
    },
    o = function (e) {
      return e.replace(i, r);
    },
    s = function (e) {
      var i = l.config.unknow;
      return (
        t.each(l.config.mimeRegxMap, function (t, a) {
          return a.test(e) ? ((i = t), !1) : void 0;
        }),
        i
      );
    },
    l = {
      config: t.extend(
        !0,
        {
          mimeRegxMap: {
            "image/png": /^(png)$/i,
            "image/jpeg": /^(jpe|jpeg|jpg)$/i,
            "image/gif": /^(gif)$/i,
            "image/bmp": /^(bmp)$/i,
            "image/vnd.microsoft.icon": /^(ico)$/i,
            "image/tiff": /^(tif|tif)$/i,
            "image/svg+xml": /^(svg|svgz)$/i,
            "image/x-win-bitmap": /^(cur)$/i,
            "audio/basic": /^(au)$/i,
            "audio/mpeg": /^(mp3)$/i,
            "audio/mp4a-latm": /^(m4p|m4b|m4a)$/i,
            "audio/x-wav": /^(wav)$/i,
            "audio/ogg": /^(ogg|oga|spx)$/i,
            "audio/flac": /^(flac)$/i,
            "audio/x-ms-wma": /^(wma)$/i,
            "audio/x-pn-realaudio": /^(ra|ram)$/i,
            "application/vnd.rn-realmedia": /^(rm)$/i,
            "video/avi": /^(avi)$/i,
            "video/ogg": /^(ogv)$/i,
            "video/mp4": /^(mp4)$/i,
            "video/mpeg": /^(mpe|mpg|mpeg|mpga)$/i,
            "video/quicktime": /^(qt|mov)$/i,
            "video/x-msvideo": /^(avi)$/i,
            "video/xmpg2": /^(avi)$/i,
            "video/xmsvideo": /^(avi)$/i,
            "video/x-flv": /^(flv)$/i,
            "video/x-ms-wmv": /^(wmv)$/i,
            "text/plain": /^(txt)$/i,
            "text/html": /^(htm|html|shtml|php|php4)$/i,
            "text/css": /^(css)$/i,
            "text/x-actionscript": /^(as)$/i,
            "application/javascript": /^(js)$/i,
            "application/json": /^(json)$/i,
            "application/xml": /^(xml|plist)$/i,
            "application/x-shockwave-flash": /^(swf)$/i,
            "application/zip": /^(zip)$/i,
            "application/gzip": /^(gz)$/i,
            "application/x-tar": /^(tar)$/i,
            "application/x-rar-compressed": /^(rar)$/i,
            "application/x-msdownload": /^(exe|msi)$/i,
            "application/vnd.ms-cab-compressed": /^(cab)$/i,
            "application/pdf": /^(pdf)$/i,
            "image/vnd.adobe.photoshop": /^(psd)$/i,
            "application/postscript": /^(ai|eps|ps)$/i,
            "application/msword": /^(doc)$/i,
            "application/x-dot": /^(dot)$/i,
            "application/rtf": /^(rtf)$/i,
            "application/vnd.ms-excel": /^(xls|xla)$/i,
            "application/vnd.ms-powerpoint": /^(ppt)$/i,
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
              /^(docx)$/i,
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
              /^(xlsx)$/i,
            "application/x-director": /^(cdr)$/i,
          },
          groups: {
            "previewable/*":
              "image/png,image/jpeg,image/jpg,image/gif,image/vnd.microsoft.icon",
          },
          unknow: "application/octet-stream",
        },
        e.config()
      ),
      mime: function (e, i) {
        if (a.test(e)) return o(e);
        if ((n.test(e) || (e = s(e)), n.test(i))) {
          i = o(i).split(",");
          var r = !1;
          t.each(i, function (i, n) {
            return (
              (n = t.trim(n)),
              (a.test(n) && e.split("/")[0] === n.split("/")[0]) ||
              e === n ||
              "*/*" === n
                ? ((r = !0), !1)
                : void 0
            );
          }),
            (e = r);
        }
        return e;
      },
    };
  return l;
});
//@ sourceMappingURL=mime.js.map
