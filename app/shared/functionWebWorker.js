/*global onmessage:true */

'use strict';


var functionsObject = {

  addSEOFriendlyURL: function addSEOFriendlyURL(data) {

    var stopwords = ['a', 'about', 'above', 'across', 'after', 'afterwards', 'again', 'against', 'all', 'almost', 'alone', 'along', 'already', 'also', 'although', 'always', 'am', 'among', 'amongst', 'amoungst', 'amount', 'an', 'and', 'another', 'any', 'anyhow', 'anyone', 'anything', 'anyway', 'anywhere', 'are', 'around', 'as', 'at', 'back', 'be', 'became', 'because', 'become', 'becomes', 'becoming', 'been', 'before', 'beforehand', 'behind', 'being', 'below', 'beside', 'besides', 'between', 'beyond', 'bill', 'both', 'bottom', 'but', 'by', 'call', 'can', 'cannot', 'cant', 'co', 'con', 'could', 'couldnt', 'cry', 'de', 'describe', 'detail', 'do', 'done', 'down', 'due', 'during', 'each', 'eg', 'eight', 'either', 'eleven', 'else', 'elsewhere', 'empty', 'enough', 'etc', 'even', 'ever', 'every', 'everyone', 'everything', 'everywhere', 'except', 'few', 'fifteen', 'fify', 'fill', 'find', 'fire', 'first', 'five', 'for', 'former', 'formerly', 'forty', 'found', 'four', 'from', 'front', 'full', 'further', 'get', 'give', 'go', 'had', 'has', 'hasnt', 'have', 'he', 'hence', 'her', 'here', 'hereafter', 'hereby', 'herein', 'hereupon', 'hers', 'herself', 'him', 'himself', 'his', 'how', 'however', 'hundred', 'ie', 'if', 'in', 'inc', 'indeed', 'interest', 'into', 'is', 'it', 'its', 'itself', 'keep', 'last', 'latter', 'latterly', 'least', 'less', 'ltd', 'made', 'many', 'may', 'me', 'meanwhile', 'might', 'mill', 'mine', 'more', 'moreover', 'most', 'mostly', 'move', 'much', 'must', 'my', 'myself', 'name', 'namely', 'neither', 'never', 'nevertheless', 'next', 'nine', 'no', 'nobody', 'none', 'noone', 'nor', 'not', 'nothing', 'now', 'nowhere', 'of', 'off', 'often', 'on', 'once', 'one', 'only', 'onto', 'or', 'other', 'others', 'otherwise', 'our', 'ours', 'ourselves', 'out', 'over', 'own', 'part', 'per', 'perhaps', 'please', 'put', 'rather', 're', 'same', 'see', 'seem', 'seemed', 'seeming', 'seems', 'serious', 'several', 'she', 'should', 'show', 'side', 'since', 'sincere', 'six', 'sixty', 'so', 'some', 'somehow', 'someone', 'something', 'sometime', 'sometimes', 'somewhere', 'still', 'such', 'system', 'take', 'ten', 'than', 'that', 'the', 'their', 'them', 'themselves', 'then', 'thence', 'there', 'thereafter', 'thereby', 'therefore', 'therein', 'thereupon', 'these', 'they', 'thickv', 'thin', 'third', 'this', 'those', 'though', 'three', 'through', 'throughout', 'thru', 'thus', 'to', 'together', 'too', 'top', 'toward', 'towards', 'twelve', 'twenty', 'two', 'un', 'under', 'until', 'up', 'upon', 'us', 'very', 'via', 'was', 'we', 'well', 'were', 'what', 'whatever', 'when', 'whence', 'whenever', 'where', 'whereafter', 'whereas', 'whereby', 'wherein', 'whereupon', 'wherever', 'whether', 'which', 'while', 'whither', 'who', 'whoever', 'whole', 'whom', 'whose', 'why', 'will', 'with', 'within', 'without', 'would', 'yet', 'you', 'your', 'yours', 'yourself', 'yourselves', 'the'];

    var regexNonAlphaNum = /[^\-a-z0-9]/g;
    var regexWhiteSpace = /\s/gi;
    var twoDashes = /[\-]{2}/g;
    var x;
    var l;
    var newTitle;

    // initially remove hyphens and the white space to their right
    newTitle = data.replace(/\–\s/g, '').toLowerCase();

    x = 0;
    l = stopwords.length;

    // loop through the SEO watch words and replace with white space hyphen
    do {

      var regEx = new RegExp('\\b\\s' + stopwords[x] + '\\s\\b', 'g');
      var regExTwo = new RegExp('^' + stopwords[x] + '\\s\\b');
      var regExThree = new RegExp('\\s\\b' + stopwords[x] + '$');

      newTitle = newTitle.replace(regEx, '-').trim().replace(regExTwo, '').replace(regExThree, '');

      x += 1;

    } while (x < l);

    // remove white space and replace with hyphens
    newTitle = newTitle.replace(regexWhiteSpace, '-');
    // remove all non-alpha numeric characters
    newTitle = newTitle.replace(regexNonAlphaNum, '');

    newTitle = newTitle.replace(twoDashes, '-');

    postMessage(newTitle);

  },

  createContentSnippetBlog: function createContentSnippetBlog(data) {

    // to create a codeSnippet cut down the content to around 130 characters without cutting a whole word in half
    var snippet, maxLength, trimmedString;

    snippet = data.toString();

    // maximum number of characters to extract
    maxLength = 130;

    //trim the string to the maximum length
    // make sure not include opening paragraph tag if any
    // hence, cut string at the third characters
    trimmedString = snippet.substr(3, maxLength);

    //re-trim if we are in the middle of a word
    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))) + ' ...';

    //strip any HTML tags
    postMessage(trimmedString.replace(/(<([^>]+)>)/ig, ''));

  },

  createContentSnippetFooter: function createContentSnippetFooter(title) {

    // to create a codeSnippet cut down the content to around 130 characters without cutting a whole word in half
    var snippet, maxLength, trimmedString;

    //strip any HTML tags
    snippet = title.replace(/(<([^>]+)>)/ig, '').trim();

    // maximum number of characters to extract
    maxLength = 260;

    //trim the string to the maximum length
    trimmedString = snippet.substr(0, maxLength);

    //re-trim if we are in the middle of a word
    postMessage('"' + trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))) + ' ...' + ' "');

  }

};



onmessage = function onmessage(oEvent) {

  if (oEvent.data instanceof Object &&
    oEvent.data.hasOwnProperty('functionName') &&
    oEvent.data.hasOwnProperty('functionArgs')) {

    functionsObject[oEvent.data.functionName].apply(self, oEvent.data.functionArgs);

  }

};

