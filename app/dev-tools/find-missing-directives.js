(function registerFindMissingDirectives(root) {
  'use strict';

  function isEmpty(node) { return !node.innerHTML.trim(); }

  var htmlNodes = [
    'h1', 'script', 'p', 'br', 'a', 'b', 'div', 'i', 'li', 'abbr', 'textarea', 'td',
    'rect', 'line', 'path', 'input', 'text', 'circle', 'polygon', 'source', 'mask', 'section',
    'g', 'link', 'span', 'img', 'th', 'thread', 'tbody', 'gr', 'em', 'strong',
    'hr', 'ul', 'tspan', 'label', 'option', 'pre', 'code'
  ];

  function name(node) {
    return node.nodeName.toLowerCase();
  }

  function isCustomTag(node) {
    var tag = name(node);
    if (!tag) {
      return false;
    }
    return htmlNodes.indexOf(tag) === -1;
  }

  var filter = Array.prototype.filter;
  var map = Array.prototype.map;
  var forEach = Array.prototype.forEach;

  var allTags = [];
  function walkNode(node) {
    allTags.push(node);
    forEach.call(node.children, walkNode);
  }

  function findMissing() {
    var tags = document.querySelectorAll('body > *');
    forEach.call(tags, walkNode);

    var empty = filter.call(allTags, isEmpty);
    var missing = filter.call(empty, isCustomTag);
    return map.call(missing, name);
  }

  root.findMissingDirectives = findMissing;

}(this));