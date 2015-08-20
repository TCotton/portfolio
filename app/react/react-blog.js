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

  app.directive('blogDirective', ['$timeout', '$filter', function($timeout, $filter) {

    var BlogList;
    var displayPosts = 5;

    /* This is the HTML of the individual blog section
     Inbetween the article tags are three sections:
     1. Header
     2. Main Section
     3. Footer
     */
    var BlogListContent = React.createClass({displayName: "BlogListContent",
      // creates link to blog article
      displayLink: function() {
        return '/#!/blog/' + this.props.blogContent.uniqueId + '/' + this.props.blogContent.url;
      },
      render: function() {
        return (
          React.createElement("article", null, 
            React.createElement(BlogListHeader, {content: this.props.blogContent, link: this.displayLink()}), 
            React.createElement(BlogListSection, {content: this.props.blogContent}), 
            React.createElement(BlogListFooter, {content: this.props.blogContent, link: this.displayLink()})
          )
        )
      }
    });

    /* The blog section header is the image. There are three different types of images
     1. type="image/webp" -> small
     2. type="image/jpeg" -> small
     3. type="image/webp" -> large
     Plus a default for those browsers which don't support the latest HTML5 responsive image markup
     */
    var BlogListHeader = React.createClass({displayName: "BlogListHeader",

      getImage: function(imageType) {

        var image = this.props.content.displayImage;
        var dot = image.lastIndexOf('.');

        var newImage = {
          'webpSmall': function() {
            return '/' + image.slice(0, dot) + '-small' + image.slice(dot) + '.webp';
          },
          'webpLarge': function() {
            return '/' + image.slice(0, dot) + image.slice(dot) + '.webp';
          },
          'jpeg': function() {
            return '/' + image.slice(0, dot) + image.slice(dot);
          }
        };

        return newImage[imageType]();
      },

      srcsetImage: function(imageType) {

        var newImage;
        var image = this.props.content.displayImage;

        if (!Object.is(image.indexOf('stock-photo'), -1)) {
          newImage = this.getImage(imageType);
        }
        else {
          newImage = '/' + image;
        }

        return newImage;
      },
      // uses picture markup for
      render: function() {
        return (
          React.createElement("header", null, 
            React.createElement("a", {href: this.props.link}, 
              React.createElement("picture", null, 
                React.createElement("source", {type: "image/webp", media: "(max-width: 480px)", srcSet: this.srcsetImage('webpSmall')}), 
                React.createElement("source", {type: "image/jpeg", media: "(max-width: 480px)", srcSet: this.srcsetImage('jpeg')}), 
                React.createElement("source", {type: "image/webp", media: "(min-width: 481px)", srcSet: this.srcsetImage('webpLarge')}), 
                React.createElement("img", {src: this.props.content.displayImage, alt: ""})
              )
            )
          )
        )
      }
    });

    /* The section contains the blog article title, publication date and snippet */
    var BlogListSection = React.createClass({displayName: "BlogListSection",
      render: function() {
        return (
          React.createElement("section", null, 
            React.createElement("h3", {className: "blog-title"}, this.props.content.title), 
            React.createElement("p", {className: "date"}, $filter('date')(this.props.content.publishedDate)), 
            React.createElement("p", null, this.props.content.contentSnippet)
          )
        )
      }
    });

    /* The footer contains the read more link */
    var BlogListFooter = React.createClass({displayName: "BlogListFooter",
      render: function() {
        return (
          React.createElement("footer", null, 
            React.createElement("p", {className: "read-more"}, 
              React.createElement("a", {href: this.props.link, className: "underline"}, "Read more...")
            )
          )
        )
      }
    });

    /* Adds the more posts link at the bottom of hte exposed articles */
    var BlogListMore = React.createClass({displayName: "BlogListMore",
      updateDisplayPosts: function() {
        displayPosts = displayPosts + 10;
      },
      render: function() {
        return (
          React.createElement("div", {id: "more-posts", className: "clearfix", onClick: this.updateDisplayPosts()}, 
            React.createElement("div", null, React.createElement("h6", null, "More posts")), 
            React.createElement("div", null, React.createElement("span", {className: "down-arrow"}))
          )
        )
      }
    });

    return {
      restrict: 'AE',

      link: function(scope, iElement) {

        BlogList = React.createClass({displayName: "BlogList",

          componentWillMount: function() {
          },

          shouldComponentUpdate: function() {
          },

          render: function() {
            return (
              React.createElement("div", null, 
                Object.keys(this.props.content).map(function(value, index) {
                  return React.createElement(BlogListContent, {key: index, blogContent: this.props.content[value]});
                }, this), 
                React.createElement(BlogListMore, null)
              )
            )
          }

        });

        scope.$watch('totalBlogPosts', function(newValue, oldValue) {

          if (!Object.is(newValue, oldValue) || (Array.isArray(oldValue) && oldValue.length > 0)) {

            var posts = $filter('orderBy')(scope.totalBlogPosts, '-publishedDate');
            posts = $filter('limitTo')(posts, scope.displayPosts);

            $timeout(function() {
              React.render(
                React.createElement(BlogList, {content: posts}),
                iElement['0']
              );
            });

          }

        }.bind(this));

      }
    };
  }

  ]);

})(window, document, React);