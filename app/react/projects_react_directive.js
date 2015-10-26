'use strict';

var app = angular.module('portfolioApp.angularReact');

app.directive('projectsReactDirective', ['$timeout', '$filter', 'React', function($timeout, $filter, React) {

  return {
    restrict: 'E',
    replace: true,
    scope: {
      data: '=data'
    },
    link: function(scope, iElement) {

      var Projects = React.createClass({displayName: "Projects",
        render: function() {
          return (
            React.createElement("div", {id: "main-content", className: this.props.data.className}, 
              Object.keys(this.props.data).map(function(value, index) {
                if (Object.is(typeof this.props.data[value], 'object')) {
                  return React.createElement(Content, {key: index, content: this.props.data[value]});
                }
              }, this)
            )
          );
        }
      });

      var Content = React.createClass({displayName: "Content",
        render: function() {
          return (
            React.createElement("a", {href: this.props.content.href, className: this.props.content.class}, 
              React.createElement("header", null, React.createElement("h3", {className: "project-header"}, this.props.content.name))
            )
          )
        }
      });

      $timeout(function() {
        React.render(
          React.createElement(Projects, {data: scope.data}),
          iElement['0']
        );
      });

    }
  }

}]);