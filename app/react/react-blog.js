/** @jsx React.DOM */
(function(window, document, React) {

  'use strict';

  var app = angular.module('portfolioApp.sideProjectsReact');

  window.sideProjects = React.createClass({displayName: "sideProjects",
    render: function() {
      return (
        React.createElement("div", {id: "main-content", className: "clearfix side-projects"}, 
          Object.keys(this.props).map(function(value, index) {
            return React.createElement(window.Content, {key: index, content: this.props[value]});
          }.bind(this))
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

  app.value('sideProjects', window.sideProjects);

})(window, document, React);