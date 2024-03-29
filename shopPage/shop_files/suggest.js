define(
  "$tmpl!de_epages/remotesearch/ui/suggest",
  ["jquery/tmpl"],
  function (e) {
    e.template(
      "de_epages.remotesearch.ui.suggest",
      '<ul>{{if list.length}}{{each(i,obj) list}}{{if i<o.suggestMax}}{{if $item.separator(obj.type)}}<li class="Separator">${dict[obj.type]}:</li>{{/if}}{{if obj.type == \'products\'}}<li class="${obj.type}" data-index="${i}">{{if o.showImages && obj.image}}<img src="${obj.image}"/>{{/if}}{{html $item.highlight(obj.name)}}</li>{{else}}<li class="${obj.type}" data-index="${i}">{{html $item.highlight(obj.name)}}{{if obj.matches}} <span class="suggestMatches">(${obj.matches})</span>{{/if}}</li>{{/if}}{{/if}}{{/each}}{{else}}<li class="searchfor" data-index="0">${dict.searchfor}: ${query}</li>{{/if}}</ul>'
    );
    var t = e.template(
      "de_epages/remotesearch/ui/suggest",
      '<ul>{{if list.length}}{{each(i,obj) list}}{{if i<o.suggestMax}}{{if $item.separator(obj.type)}}<li class="Separator">${dict[obj.type]}:</li>{{/if}}{{if obj.type == \'products\'}}<li class="${obj.type}" data-index="${i}">{{if o.showImages && obj.image}}<img src="${obj.image}"/>{{/if}}{{html $item.highlight(obj.name)}}</li>{{else}}<li class="${obj.type}" data-index="${i}">{{html $item.highlight(obj.name)}}{{if obj.matches}} <span class="suggestMatches">(${obj.matches})</span>{{/if}}</li>{{/if}}{{/if}}{{/each}}{{else}}<li class="searchfor" data-index="0">${dict.searchfor}: ${query}</li>{{/if}}</ul>'
    );
    return function (a, i) {
      return e.tmpl(t, a, i);
    };
  }
),
  define(
    "de_epages/remotesearch/ui/suggest",
    [
      "jquery",
      "ep",
      "de_epages",
      "util/string",
      "$dict!../dictionary",
      "$tmpl!./suggest",
      "jquery/ui/widget",
      "ep/fn/contextorientation",
      "ep/ui/validate",
    ],
    function (e, t, a, i, n, o) {
      var l = {
        products: n.translate("Products"),
        categories: n.translate("Categories"),
        manufacturers: n.translate("Manufacturers"),
        searchfor: n.translate("SearchFor"),
      };
      return (
        e.widget("ui.remotesearchUiSuggest", e.ui.uiValidate, {
          options: { suggestChars: 1, suggestMax: 10, showImages: !0 },
          _create: function () {
            this._superApply(arguments);
            var t = this,
              a = t.options;
            (t.filter = a.filter
              ? e(a.searchFilter)
              : e('<input type="hidden"/>').insertAfter(t.elem)),
              t.elem
                .attr("autocomplete", "off")
                .on("keydown", e.proxy(t, "_keydown"))
                .on("keyup", e.proxy(t, "_keyup"))
                .on("focus", e.proxy(t, "_show"))
                .on("blur", e.proxy(t, "_hide")),
              (t.list = e('<div class="de_epages-remotesearchUiSuggest-box"/>')
                .on("mouseenter", "li", function () {
                  e(this).addClass("ui-hover");
                })
                .on("mouseleave", "li", function () {
                  e(this).removeClass("ui-hover");
                })
                .on("mousedown", "li:not(.Separator)", function (a) {
                  t._select(e(this).data("index")),
                    t._action(a),
                    setTimeout(function () {
                      t.elem.trigger("focus");
                    }, 1);
                })),
              (t.cache = {}),
              (t.dataModels = {}),
              (t.selectedIndex = -1),
              (t.xhr = { abort: e.noop }),
              (t.xhrSettings = { type: "get", dataType: "jsonp", data: {} }),
              a.suggestUrl && (t.xhrSettings.url = a.suggestUrl);
          },
          _keydown: function (e) {
            var t = e.keyCode || e.which;
            38 == t || 40 == t
              ? e.preventDefault()
              : 13 == t && this._action(e);
          },
          _keyup: function (t) {
            var a = this,
              i = t.keyCode || t.which,
              n = a.elem.val();
            if ((a.options, 9 != i && 13 != i && 37 != i && 39 != i && 32 != i))
              if (38 == i) a._select("prev");
              else if (40 == i) a._select("next");
              else if (n.length < a.options.suggestChars) a._clear();
              else if (a.cache[n]) a._build();
              else {
                if (a.lastAjaxFail) {
                  if (new Date().getTime() - a.lastAjaxFail < 6e4) return;
                  a.lastAjaxFail = null;
                }
                e.ajax(e.extend(!0, { data: { q: n } }, a.xhrSettings))
                  .done(function (t) {
                    e.extend(a.cache[n] || (a.cache[n] = {}), t), a._build();
                  })
                  .fail(function () {
                    a.lastAjaxFail = new Date().getTime();
                  });
              }
          },
          _hide: function () {
            this.list.hide();
          },
          _show: function () {
            this.list.find("li").length && this.list.show();
          },
          _clear: function () {
            this.list.empty(), this._hide();
          },
          _dataModel: function (t) {
            var a,
              i = this,
              n = i.dataModels[t];
            return (
              n ||
                ((a = i.cache[t]),
                (n = { query: t, list: [], dict: l }),
                a &&
                  (e.each(
                    ["products", "manufacturers", "categories"],
                    function (t, i) {
                      (a[i] = e.each(a[i] || [], function () {
                        this.type = i;
                      })),
                        (n.list = n.list.concat(a[i]));
                    }
                  ),
                  (i.dataModels[t] = n))),
              (n.o = i.options),
              n
            );
          },
          _build: function () {
            var t = this,
              a = t.elem.val(),
              n = (t.dataModel = t._dataModel(a)),
              l = new RegExp("(" + i.escExpStr(a) + ")", "ig");
            t._clear(),
              t.list
                .appendTo("body")
                .contextOrientation(t.elem, "bottom")
                .append(
                  o([n], {
                    highlight: function (e) {
                      return e.replace(l, "<strong>$1</strong>");
                    },
                    separatorLast: "",
                    separator: function (e) {
                      return this.separatorLast == e
                        ? !1
                        : !!(this.separatorLast = e);
                    },
                  })
                );
            var r = t.list.width(),
              s = t.elem.parent().innerWidth();
            s > r && t.list.width(s),
              t.options.navbar && t.list.addClass(t.options.navbar),
              t._select(-1),
              t._show(),
              e(document).trigger("suggestsearch:build", {
                list: t.list,
                elem: t.elem,
              });
          },
          _select: function (t) {
            var a = this,
              i = a.selectedIndex,
              n = a.list.find("li:not(.Separator)");
            (a.filterData = {}),
              "next" == t ? i++ : "prev" == t ? i-- : (i = t),
              i >= n.length ? (i = -1) : -1 > i && (i = n.length - 1),
              n.removeClass("ui-select ui-active"),
              -1 != i &&
                (n.eq(i).addClass("ui-select ui-active"),
                (a.filterData = (a.dataModel.list[i] || {}).filter || {})),
              "object" === e.type(a.filterData) &&
                a.filter
                  .attr("name", a.filterData.fieldName || "")
                  .val(a.filterData.attributeValue || ""),
              (a.selectedIndex = i);
          },
          _action: function (a) {
            var i = this;
            a.preventDefault(),
              "number" === e.type(i.filterData)
                ? (location.href =
                    t.config.baseUrl + "?ObjectID=" + i.filterData)
                : i.elem.closest("form").trigger("submit");
          },
        }),
        a
      );
    }
  );
//@ sourceMappingURL=suggest.js.map
