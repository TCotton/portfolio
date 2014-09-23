/**
 * Created by awalpole on 11/09/2014.
 */
var WebFont;

window.webfontMatchMedia = window.webfontMatchMedia || {};

window.webfontMatchMedia = (function (document, window, undefined) {

  return {

    stopTimer: null,

    loadFullFonts: function () {

      return WebFont.load({
        google: {
          families: ['Open Sans:400,300,300italic,400italic,600,600italic,700,700italic', 'Yellowtail']
        }
      });

    },

    loadPartialFonts: function () {

      return WebFont.load({
        google: {
          families: ['Open Sans:400,300,600,700', 'Yellowtail']
        }
      });

    },

    handleMediaMatch: function (mql) {

      if (!mql.matches) {

        webfontMatchMedia.loadFullFonts();
        mql.removeListener(webfontMatchMedia.handleMediaMatch);

      } else {

        webfontMatchMedia.loadPartialFonts();

      }

    },

    loadMatchMedia: function () {

      if (window.matchMedia) {

        var mql = window.matchMedia('screen and (max-width: 767px)');
        mql.addListener(this.handleMediaMatch);
        this.handleMediaMatch(mql);

      } else {

        webfontMatchMedia.loadFullFonts();

      }

      if (this.stopTimer) {
        clearInterval(this.stopTimer);
      }

    },

    init: function () {

      if (!WebFont) {

        this.stopTimer = setInterval(function () {

          if (WebFont) {

            webfontMatchMedia.loadMatchMedia();

          }

        }, 20);

      } else {

        webfontMatchMedia.loadMatchMedia();

      }

    }

  };

}(document, window));

if (WebFont) {
  window.webfontMatchMedia.loadMatchMedia();
} else {
  window.webfontMatchMedia.init();
}


