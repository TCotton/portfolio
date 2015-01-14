'use strict';

var functionsObject = {

  isEquivalent: function isEquivalent(data) {

    var objectParams = Array.prototype.slice.call(arguments);
    var a = objectParams[0];
    var b = objectParams[1];


    // Create arrays of property names
    var propName;
    var i;
    var l;
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different, objects are not equivalent
    if (aProps.length !== bProps.length) {
      return false;
    }

    for (i = 0, l = aProps.length; i !== l; i += 1) {
      propName = aProps[i];

      // If values of same property are not equal, objects are not equivalent
      if (a[propName] !== b[propName]) {
        postMessage(false);
      }
    }

    // If we made it this far, objects are considered equivalent
    postMessage(true);
  }

};

onmessage = function onmessage(oEvent) {

  if (oEvent.data instanceof Object &&
    oEvent.data.hasOwnProperty('functionName') &&
    oEvent.data.hasOwnProperty('functionArgs')) {

    functionsObject[oEvent.data.functionName].apply(self, oEvent.data.functionArgs);

  }

};
