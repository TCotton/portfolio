'use strict';
// Code here will be linted with JSHint.
/* jshint ignore:start */

var functionsObject = {

  createContentSnippet: function createContentSnippet(data) {

    // to create a codeSnippet cut down the content to around 130 characters without cutting a whole word in half
    var snippet, maxLength, trimmedString, finalSnippet;

    snippet = data.toString();

    // maximum number of characters to extract
    maxLength = 130;

    //trim the string to the maximum length
    // make sure not include opening paragraph tag if any
    // hence, cut string at the third characters
    trimmedString = snippet.substr(3, maxLength);

    //re-trim if we are in the middle of a word
    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))) + ' ...';

    //strip and HTML tags
    finalSnippet = trimmedString.replace(/(<([^>]+)>)/ig, '').trim();

    postMessage(finalSnippet);

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

