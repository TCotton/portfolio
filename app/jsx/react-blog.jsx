/** @jsx React.DOM */
(function(window, document, React) {

  'use strict';

  var app = angular.module('portfolioApp.sideProjectsReact');

  window.sideProjects = React.createClass({
    render: function() {
      return (
        <div id="main-content" className="clearfix side-projects">
          {Object.keys(this.props).map(function(value, index) {
            return <window.Content key={index} content={this.props[value]}/>;
          }.bind(this))}
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

  app.value('sideProjects', window.sideProjects);

})(window, document, React);