/**
 * Created by awalpole on 11/09/2014.
 */
var WebFont;

(function () {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();


window.webfontMatchMedia = window.webfontMatchMedia || {};
/*
window.webfontMatchMedia = (function (document, window, undefined) {

  return {

    attachAynchronously: function () {

      var wf = document.createElement('script');
      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);

    },

    attachSynchronously: function () {

      var req = new XMLHttpRequest();
      req.open('GET', ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js', false); // 'false': synchronous.
      req.send(null);

      var headElement = document.getElementsByTagName('head')[0];
      var newScriptElement = document.createElement('script');
      newScriptElement.type = 'text/javascript';
      newScriptElement.text = req.responseText;
      headElement.appendChild(newScriptElement);

    }


  };

}(document, window));*/

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

        this.handleMediaMatch();

      }

      if (this.stopTimer) {
        clearInterval(this.stopTimer);
      }

    },

    init: function () {

      if (!WebFont) {

        this.stopTimer = setInterval(function () {

          if (WebFont) {

            console.log('webfont loaded one');
            console.dir(WebFont);

            webfontMatchMedia.loadMatchMedia();

          }

        }, 20);

      } else {

        webfontMatchMedia.loadMatchMedia();

      }

    }

  };

}(document, window));

window.webfontMatchMedia.init();

if (WebFont) {
  window.webfontMatchMedia.loadMatchMedia();
}


