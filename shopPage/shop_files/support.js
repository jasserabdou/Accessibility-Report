define("util/support", [], function () {
  var e,
    t,
    i,
    a,
    n = document,
    r = n.getElementsByTagName("head")[0],
    o = n.createElement("div"),
    s = n.createElement("form"),
    l = n.createElement("button"),
    d = n.createElement("input"),
    c = n.createElement("input"),
    u = "",
    p = "Shockwave Flash",
    m = navigator.plugins,
    h = m.length;
  c.setAttribute("type", "file"), s.setAttribute("id", "support-form-attr");
  try {
    l.setAttribute("form", "support-form-attr");
  } catch (g) {}
  if ((o.appendChild(s), o.appendChild(l), r.appendChild(o), h)) {
    if ((e = m[p])) (u = e.version), (t = e.description);
    else
      for (i = 0; h > i; i++)
        if ((e = m[i].name === p)) {
          (u = e.version), (t = e.description);
          break;
        }
    if (!u && t) {
      var f = t.match(/([0-9\.]+)/g);
      u = f ? f[0] : u;
    }
  } else
    for (i = 15; i > 3; i--)
      try {
        new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + i), (u = i + "");
        break;
      } catch (g) {}
  return (
    (a = {
      flash: u || "",
      touchEvent: void 0 !== window.ontouchstart,
      ajaxUpload: "undefined" != typeof XMLHttpRequestUpload,
      inputFileMultipleAttr: !!c.files,
      inputPlaceholderAttr: "placeholder" in d,
      inputFormAttr: l.form === s,
    }),
    r.removeChild(o),
    a
  );
});
//@ sourceMappingURL=support.js.map
