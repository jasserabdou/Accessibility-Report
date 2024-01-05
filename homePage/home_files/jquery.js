(function ($) {
  $.fn.marquee = function (klass) {
    var newMarquee = [];
    var last = this.length;
    function getReset(newDirection, marqueeElement, marqueeState) {
      if (newDirection == -1)
        return (
          marqueeState.width +
          (marqueeElement[marqueeState.widthAxis] - marqueeState.width * 2)
        );
      else return 0;
    }
    function animateMarquee() {
      var i = newMarquee.length,
        marqueeElement = null,
        $marqueeElement = null,
        marqueeState = {},
        newMarqueeList = [],
        hitEdge = false;
      while (i--) {
        marqueeElement = newMarquee[i];
        $marqueeElement = $(marqueeElement);
        marqueeState = $marqueeElement.data("marqueeState");
        var delta = marqueeState.scrollamount * marqueeState.direction;
        marqueeState.position += delta;
        marqueeElement[marqueeState.axis] = marqueeState.position;
        if (marqueeState.direction == -1)
          hitEdge =
            marqueeState.position <=
            getReset(marqueeState.direction * -1, marqueeElement, marqueeState);
        else
          hitEdge =
            marqueeState.position >=
            getReset(marqueeState.direction * -1, marqueeElement, marqueeState);
        if (hitEdge) {
          marqueeState.last = -1;
          $marqueeElement.trigger("stop");
          newMarqueeList.push(marqueeElement);
          $marqueeElement.trigger("start");
          marqueeState.position = getReset(
            marqueeState.direction,
            marqueeElement,
            marqueeState
          );
        } else newMarqueeList.push(marqueeElement);
        marqueeState.last = marqueeState.position;
        $marqueeElement.data("marqueeState", marqueeState);
      }
      newMarquee = newMarqueeList;
      if (newMarquee.length) setTimeout(animateMarquee, 25);
    }
    this.each(function (i) {
      var $marquee = $(this);
      var width = $marquee.attr("width") || $marquee.width();
      var height = $marquee.attr("height") || $marquee.height();
      var $marqueeElement = $marquee
        .after(
          "<div " +
            (klass ? 'class="' + klass + '" ' : "") +
            'style="display: block-inline; width: ' +
            width +
            "px; height: " +
            height +
            'px; overflow: hidden;"><div style="float: left; white-space: nowrap;">' +
            $marquee.html() +
            "</div></div>"
        )
        .next();
      var marqueeElement = $marqueeElement.get(0);
      var hitEdge = 0;
      var properties = JSON.parse($marquee.attr("data-properties"));
      var direction = properties.direction.toLowerCase();
      if (!direction.length) direction = "left";
      var scrollamount = parseFloat(properties.scrollamount);
      var marqueeState = {
        direction: /down|right/.test(direction) ? -1 : 1,
        axis: /left|right/.test(direction) ? "scrollLeft" : "scrollTop",
        widthAxis: /left|right/.test(direction)
          ? "scrollWidth"
          : "scrollHeight",
        last: -1,
        scrollamount: scrollamount || this.scrollAmount || 2,
        width: /left|right/.test(direction) ? width : height,
        position: 0.0,
      };
      $marquee.remove();
      if (/left|right/.test(direction)) {
        $marqueeElement.find("> div").css("padding", "0 " + width + "px");
      } else {
        $marqueeElement.find("> div").css("padding", height + "px 0");
      }
      $marqueeElement
        .bind("stop", function () {
          $marqueeElement.data("paused", true);
        })
        .bind("start", function () {
          $marqueeElement.data("paused", false);
        })
        .data("marqueeState", marqueeState);
      newMarquee.push(marqueeElement);
      marqueeState.position = getReset(
        marqueeState.direction,
        marqueeElement,
        marqueeState
      );
      $marqueeElement.trigger("start");
      if (i + 1 == last) animateMarquee();
    });
    return $(newMarquee);
  };
})(jQuery);
