define(
  "$tmpl!de_epages/design/ui/cookiemessage",
  ["jquery/tmpl"],
  function (e) {
    e.template(
      "de_epages.design.ui.cookiemessage",
      '<div {{elem \'cookiebanner\'}} class="message-bar message-cookies"><div class="message-bar-inner"><p class="MarginBottom">{{html message}}</p><p><button {{elem \'close\'}} class="message-bar-button">${ok}</button></p></div></div>'
    );
    var t = e.template(
      "de_epages/design/ui/cookiemessage",
      '<div {{elem \'cookiebanner\'}} class="message-bar message-cookies"><div class="message-bar-inner"><p class="MarginBottom">{{html message}}</p><p><button {{elem \'close\'}} class="message-bar-button">${ok}</button></p></div></div>'
    );
    return function (n, i) {
      return e.tmpl(t, n, i);
    };
  }
),
  define(
    "de_epages/design/ui/cookiemessage",
    [
      "jquery/ui/widget",
      "de_epages",
      "$tmpl!./cookiemessage",
      "$dict!ep/dict",
      "ep/ui/simpledialog",
      "jquery/cookie",
    ],
    function (e, t, n, i) {
      "use strict";
      var o = "epagescookielawcookie",
        a = "1",
        r = function (t) {
          return e("<div/>").html(t).text();
        },
        s = { ok: i.translate("Ok") };
      return (
        e.widget("ui.designUiCookiemessage", {
          options: { parentClass: "message-bar-parent" },
          _create: function () {
            var e = this;
            e.options.preAccepted && e.accept(), e.isAccepted() || e.render();
          },
          isAccepted: function () {
            return e.cookie(o) === a;
          },
          accept: function () {
            e.cookie(o, a, { expires: 730 });
          },
          render: function () {
            var t = this,
              i = t.options;
            (i.message = r(i.message)),
              e.extend(t, n(e.extend({}, i, s)).tmplItem("elements")),
              t.element.append(t.cookiebanner),
              t.element.addClass(i.parentClass),
              t.close.one("click.uiCookiemessage", function () {
                t.accept(),
                  t.cookiebanner.hide(),
                  t.element.removeClass(i.parentClass);
              });
          },
          destroy: function () {
            var e = this;
            return (
              e.close && e.close.off("click.uiCookiemessage"),
              e.cookiebanner && e.cookiebanner.remove(),
              e._superApply(arguments)
            );
          },
        }),
        t
      );
    }
  );
//@ sourceMappingURL=cookiemessage.js.map
