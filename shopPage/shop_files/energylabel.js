define(
  "$tmpl!de_epages/product/inc/energylabel",
  ["jquery/tmpl"],
  function (e) {
    e.template(
      "de_epages.product.inc.energylabel",
      '<div class="ep-lightbox-backdrop"><div class="ep-lightbox" ><div class="ep-lightbox-close"><span class="ep-lightbox-close-button fa fa-close" /></div><div class="ep-lightbox-body"><img class="energy-label-image" src=${energylabelsource} alt="${energylabel}" /></div></div></div>'
    );
    var t = e.template(
      "de_epages/product/inc/energylabel",
      '<div class="ep-lightbox-backdrop"><div class="ep-lightbox" ><div class="ep-lightbox-close"><span class="ep-lightbox-close-button fa fa-close" /></div><div class="ep-lightbox-body"><img class="energy-label-image" src=${energylabelsource} alt="${energylabel}" /></div></div></div>'
    );
    return function (n, i) {
      return e.tmpl(t, n, i);
    };
  }
),
  define(
    "$tmpl!de_epages/product/inc/energylabelsettingsscale-unity",
    ["jquery/tmpl"],
    function (e) {
      e.template(
        "de_epages.product.inc.energylabelsettingsscale-unity",
        '<div class="energylabel-scale-wrapper"><ul class="energylabel-scale-lines">{{each(key, value) labels}}<li style="width: ${width-1}px;"></li>{{/each}}</ul><ul class="energylabel-scale-text" style="left: -${half}px;">{{each(key, value) labels}}<li style="width: ${width-1}px;">{{if key == 0 || value == "B" || key == labels.length-1}}${value}{{/if}}</li>{{/each}}</ul></div>'
      );
      var t = e.template(
        "de_epages/product/inc/energylabelsettingsscale-unity",
        '<div class="energylabel-scale-wrapper"><ul class="energylabel-scale-lines">{{each(key, value) labels}}<li style="width: ${width-1}px;"></li>{{/each}}</ul><ul class="energylabel-scale-text" style="left: -${half}px;">{{each(key, value) labels}}<li style="width: ${width-1}px;">{{if key == 0 || value == "B" || key == labels.length-1}}${value}{{/if}}</li>{{/each}}</ul></div>'
      );
      return function (n, i) {
        return e.tmpl(t, n, i);
      };
    }
  ),
  define(
    "$tmpl!de_epages/product/inc/energylabelsettingsscale",
    ["jquery/tmpl"],
    function (e) {
      e.template(
        "de_epages.product.inc.energylabelsettingsscale",
        '<br /><ul class="energylabel-scale-lines">{{each(key, value) labels}}<li style="width: ${width-1}px;"></li>{{/each}}</ul><ul class="energylabel-scale-text" style="left: -${half}px;">{{each(key, value) labels}}<li style="width: ${width}px;">{{if key == 0 || value == "B" || key == labels.length-1}}${value}{{/if}}</li>{{/each}}</ul>'
      );
      var t = e.template(
        "de_epages/product/inc/energylabelsettingsscale",
        '<br /><ul class="energylabel-scale-lines">{{each(key, value) labels}}<li style="width: ${width-1}px;"></li>{{/each}}</ul><ul class="energylabel-scale-text" style="left: -${half}px;">{{each(key, value) labels}}<li style="width: ${width}px;">{{if key == 0 || value == "B" || key == labels.length-1}}${value}{{/if}}</li>{{/each}}</ul>'
      );
      return function (n, i) {
        return e.tmpl(t, n, i);
      };
    }
  ),
  define(
    "de_epages/product/inc/energylabel",
    ["jquery", "$tmpl!./energylabel", "ep/ui/lightbox"],
    function (e, t) {
      "use strict";
      var n;
      return {
        init: function (i) {
          var o = e.extend(
              { selector: "energylabel-imagelist", items: [], body: e("body") },
              i
            ),
            a = this,
            r = function () {
              var i = !1;
              a.unity
                ? o.items.on("click", function () {
                    var n = e(this).closest(".energylabel-arrow");
                    a.popup ||
                      ((a.popup = e("<span></span>").appendTo(o.body)),
                      a.popup.on("click", function (t) {
                        e(t.target).is("img") || a.popup.html("");
                      })),
                      a.popup.html(
                        t({
                          energylabelsource: n.data("energylabel-source"),
                          energylabel: n.text(),
                        })
                      );
                  })
                : (o.items.each(function (t, o) {
                    var a = e(o),
                      r = a.data("energylabel-source"),
                      s = e('<img alt src="' + r + '"/>'),
                      l = "pdf" === r.substring(r.lastIndexOf(".") + 1);
                    l
                      ? a.on("click", function () {
                          window.open(r, "_blank");
                        })
                      : ((i = !0),
                        n.append(e("<li>").append(s)),
                        a.on("click", function () {
                          s.trigger("click");
                        }));
                  }),
                  i &&
                    a._buildLightbox({
                      images: "#" + o.selector + " img",
                      controls: "hidden",
                    }));
            };
          return (
            (a.unity =
              void 0 !== ep.config.unity && ep.config.unity === !0 ? !0 : !1),
            a.unity ||
              (n = e(
                '<ul style="display:none;" id="' + o.selector + '" />'
              ).appendTo(o.body)),
            r(),
            e
          );
        },
        _buildLightbox: function (e) {
          n.uiLightbox(e);
        },
      };
    }
  );
//@ sourceMappingURL=energylabel.js.map
