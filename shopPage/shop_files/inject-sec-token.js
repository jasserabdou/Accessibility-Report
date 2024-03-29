define("ep/inject-sec-token", [
  "jquery",
  "ep",
  "jquery/cookie",
  "$ready!",
], function (e, t) {
  "use strict";
  return (
    (t.injectSecToken = function (t) {
      var a = {
          tokenName: "SecToken",
          selector: 'form[method="post"]',
          link: "a",
        },
        i = e.cookie(),
        n = function (e) {
          l.call(e) ||
            (i[a.tokenName] &&
              0 === e.find("input[name='" + a.tokenName + "']").length &&
              e.append(
                '<input type="hidden" name="' +
                  a.tokenName +
                  '" value="' +
                  i[a.tokenName] +
                  '" />'
              ));
        },
        o = function (e) {
          if (!l.call(e)) {
            var t = e.attr("href");
            t &&
              t.search(/ChangeAction/i) > -1 &&
              i[a.tokenName] &&
              -1 === t.search(new RegExp(a.tokenName)) &&
              ((t +=
                (-1 === t.search(/\?/) ? "?" : "&") +
                a.tokenName +
                "=" +
                i[a.tokenName]),
              e.attr("href", t));
          }
        },
        l = function () {
          return e(this).data("nosectoken");
        };
      e.extend(a, t),
        e(a.selector).each(function () {
          n(e(this));
        }),
        e(a.link).each(function () {
          o(e(this));
        }),
        e(document).on("submit", a.selector, function () {
          n(e(this));
        }),
        e(document).on("click", a.link, function () {
          o(e(this));
        });
    }),
    t
  );
});
//@ sourceMappingURL=inject-sec-token.js.map
