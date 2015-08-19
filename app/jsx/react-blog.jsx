/** @jsx React.DOM */
(function(window, document, React) {

  'use strict';

  var app = angular.module('portfolioApp.angularReact');

  window.projects = React.createClass({
    render: function() {
      return (
        <div id="main-content" className={this.props.className}>
          {Object.keys(this.props).map(function(value, index) {
            if (Object.is(typeof this.props[value], 'object')) {
              return <window.Content key={index} content={this.props[value]}/>;
            }
          }, this)}
        </div>
      );
    }
  });

  window.Content = React.createClass({
    render: function() {
      return (
        <a href={this.props.content.href} className={this.props.content.class}>
          <header><h3 className="project-header">{this.props.content.name}</h3></header>
        </a>
      )
    }
  });

  app.value('projects', window.projects);

})(window, document, React);