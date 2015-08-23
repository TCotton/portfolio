(function(window, document, React) {

  'use strict';

  var app = angular.module('portfolioApp.angularReact');

  /* window.projects && window.Content is used in hte display for work and personal projects */
  window.projects = React.createClass({displayName: "projects",
    render: function() {
      return (
        React.createElement("div", {id: "main-content", className: this.props.className}, 
          Object.keys(this.props).map(function(value, index) {
            if (Object.is(typeof this.props[value], 'object')) {
              console.dir(this.props[value]);
              return React.createElement(window.Content, {key: index, content: this.props[value]});
            }
          }, this)
        )
      );
    }
  });

  window.Content = React.createClass({displayName: "Content",
    render: function() {
      return (
        React.createElement("a", {href: this.props.content.href, className: this.props.content.class}, 
          React.createElement("header", null, React.createElement("h3", {className: "project-header"}, this.props.content.name))
        )
      )
    }
  });

  app.value('projects', window.projects);

})(window, document, React);