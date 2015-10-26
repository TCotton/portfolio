'use strict';

var app = angular.module('portfolioApp.angularReact');

app.directive('blogSidebarReactDirective', ['$timeout', '$filter', 'React', function($timeout, $filter, React) {

  var menuItems = 10;

  /**
   * Loop through the 10 most recent blog posts
   */
  var SidebarRecentPostsForEach = React.createClass({displayName: "SidebarRecentPostsForEach",
    render: function() {
      return (
        React.createElement("ul", {itemScope: true, itemType: "http://schema.org/SiteNavigationElement"}, 
          Object.keys(this.props.cats).map(function(value, index) {
            return React.createElement(SidebarRecentPostsMarkup, {key: index, content: this.props.cats[value]});
          }, this)
        )
      );
    }
  });

  /**
   * Component for markup required in the SidebarRecentPostsForEach map
   */
  var SidebarRecentPostsMarkup = React.createClass({displayName: "SidebarRecentPostsMarkup",
    displayLink: function() {
      return '/#!/blog/' + this.props.content.uniqueId + '/' + this.props.content.url;
    },
    render: function() {
      return (
        React.createElement("a", {href: this.displayLink()}, 
          React.createElement("li", null, this.props.content.title)
        )
      );
    }
  });

  /**
   * Loop through the 10 most popular categories
   */
  var SidebarPopularCategoriesForEach = React.createClass({displayName: "SidebarPopularCategoriesForEach",
    render: function() {
      return (
        React.createElement("ul", null, 
          Object.keys(this.props.tags).map(function(value, index) {
            return React.createElement(SidebarPopularCategoriesMarkUp, {key: index, content: this.props.tags[value]});
          }, this)
        )
      );
    }
  });

  /**
   * Component for markup required in the SidebarPopularCategoriesForEach map
   */
  var SidebarPopularCategoriesMarkUp = React.createClass({displayName: "SidebarPopularCategoriesMarkUp",
    displayLink: function() {
      return '/#!/category/' + this.props.content.toLowerCase();
    },
    render: function() {
      return (
        React.createElement("a", {href: this.displayLink()}, 
          React.createElement("li", null, this.props.content)
        )
      );
    }
  });

  return {
    restrict: 'E',
    replace: true,
    link: function(scope, iElement) {

      var Sidebar = React.createClass({displayName: "Sidebar",
        render: function() {
          return (
            React.createElement("div", null, 
              React.createElement("h4", {className: "content-title"}, "Recent posts"), 
              React.createElement(SidebarRecentPostsForEach, {cats: this.props.cats}), 
              React.createElement("h4", {className: "content-title"}, "Popular categories"), 
              React.createElement(SidebarPopularCategoriesForEach, {tags: this.props.tags})
            )
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
              React.createElement(Sidebar, {cats: cats, tags: tags}),
              iElement['0']
            );
          });

        }

      }.bind(this));

    }

  };

}]);