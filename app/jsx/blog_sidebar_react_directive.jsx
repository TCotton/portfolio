'use strict';

var app = angular.module('portfolioApp.angularReact');

app.directive('blogSidebarReactDirective', ['$timeout', '$filter', 'React', function($timeout, $filter, React) {

  var menuItems = 10;

  /**
   * Loop through the 10 most recent blog posts
   */
  var SidebarRecentPostsForEach = React.createClass({
    render: function() {
      return (
        <ul itemScope itemType="http://schema.org/SiteNavigationElement">
          {Object.keys(this.props.cats).map(function(value, index) {
            return <SidebarRecentPostsMarkup key={index} content={this.props.cats[value]}/>;
          }, this)}
        </ul>
      );
    }
  });

  /**
   * Component for markup required in the SidebarRecentPostsForEach map
   */
  var SidebarRecentPostsMarkup = React.createClass({
    displayLink: function() {
      return '/blog/' + this.props.content.uniqueId + '/' + this.props.content.url;
    },
    render: function() {
      return (
        <a href={this.displayLink()}>
          <li>{this.props.content.title}</li>
        </a>
      );
    }
  });

  /**
   * Loop through the 10 most popular categories
   */
  var SidebarPopularCategoriesForEach = React.createClass({
    render: function() {
      return (
        <ul>
          {Object.keys(this.props.tags).map(function(value, index) {
            return <SidebarPopularCategoriesMarkUp key={index} content={this.props.tags[value]}/>;
          }, this)}
        </ul>
      );
    }
  });

  /**
   * Component for markup required in the SidebarPopularCategoriesForEach map
   */
  var SidebarPopularCategoriesMarkUp = React.createClass({
    displayLink: function() {
      return '/category/' + this.props.content.toLowerCase();
    },
    render: function() {
      return (
        <a href={this.displayLink()}>
          <li>{this.props.content}</li>
        </a>
      );
    }
  });

  return {
    restrict: 'E',
    replace: true,
    link: function(scope, iElement) {

      var Sidebar = React.createClass({
        render: function() {
          return (
            <div>
              <h4 className="content-title">Recent posts</h4>
              <SidebarRecentPostsForEach cats={this.props.cats}/>
              <h4 className="content-title">Popular categories</h4>
              <SidebarPopularCategoriesForEach tags={this.props.tags}/>
            </div>
          );
        }
      });

      scope.$watch('blogData', function(newValue, oldValue) {

        if (!Object.is(newValue, oldValue) || (Array.isArray(oldValue) && oldValue.length > 0)) {

          var tags = $filter('limitTo')(scope.blogTags, menuItems);
          var cats = $filter('orderBy')(scope.blogData, '-publishedDate');
          cats = $filter('limitTo')(cats, menuItems);

          $timeout(function() {
            React.render(
              <Sidebar cats={cats} tags={tags}/>,
              iElement['0']
            );
          });

        }

      }.bind(this));

    }

  };

}]);