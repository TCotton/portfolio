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

      var Projects = React.createClass({
        render: function() {
          return (
            <div id="main-content" className={this.props.data.className}>
              {Object.keys(this.props.data).map(function(value, index) {
                if (Object.is(typeof this.props.data[value], 'object')) {
                  return <Content key={index} content={this.props.data[value]}/>;
                }
              }, this)}
            </div>
          );
        }
      });

      var Content = React.createClass({
        render: function() {
          return (
            <a href={this.props.content.href} className={this.props.content.class}>
              <header><h3 className="project-header">{this.props.content.name}</h3></header>
            </a>
          )
        }
      });

      $timeout(function() {
        React.render(
          <Projects data={scope.data}/>,
          iElement['0']
        );
      });

    }
  }

}]);