/**
 * Created by awalpole on 19/04/2014.
 */

/** TODO: parse and use RSS feed here rather than calling it from a CDN
 *  and doing the heavy work in the browser
 * **/

/*
var FeedParser = require('feedparser')
  , request = require('request');

var req = request('rss.xml')
  , feedparser = new FeedParser([options]);

req.on('error', function (error) {
  // handle any request errors
  console.log(error);
});
req.on('response', function (res) {
  var stream = this;

  if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));

  stream.pipe(feedparser);
});


feedparser.on('error', function (error) {
  // always handle errors
});
feedparser.on('readable', function () {
  // This is where the action is!
  var stream = this
    , meta = this.meta // **NOTE** the "meta" is always available in the context of the feedparser instance
    , item;

  while (item = stream.read()) {
    console.log(item);
  }
});
*/
