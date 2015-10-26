'use strict';

var app = angular.module('portfolioApp.angularReact');

app.directive('blogReactDirective', ['$timeout', '$filter', 'React', function($timeout, $filter, React) {

  var BlogList;
  var displayPosts = 5;

  /* This is the HTML of the individual blog section
   Inbetween the article tags are three sections:
   1. Header
   2. Main Section
   3. Footer
   */
  var BlogListContent = React.createClass({displayName: "BlogListContent",
    shouldComponentUpdate: function(nextProps) {
      return this.props.value !== nextProps.value;
    },
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
    render: function() {
      return (
        React.createElement("div", {id: "more-posts", className: "clearfix", onClick: this.props.onClick}, 
          React.createElement("div", null, React.createElement("h6", null, "More posts")), 
          React.createElement("div", null, React.createElement("span", {className: "down-arrow"}))
        )
      )
    }
  });

  return {
    restrict: 'E',
    replace: true,
    link: function(scope, iElement) {

      BlogList = React.createClass({displayName: "BlogList",

        getInitialState: function() {
          return {showMore: true};
        },

        componentDidMount: function() {
          if (Object.keys(scope.totalBlogPosts).length <= 10) {
            this.setState({showMore: false});
          }
        },

        onChildClick: function() {
          displayPosts = (displayPosts + 5);
          var totalPosts = $filter('orderBy')(scope.totalBlogPosts, '-publishedDate');
          var posts = $filter('limitTo')(totalPosts, displayPosts);
          if (posts >= totalPosts) {
            this.setState({showMore: false});
          }
          renderBloglist(posts);
        },

        render: function() {
          return (
            React.createElement("div", null, 
              Object.keys(this.props.content).map(function(value, index) {
                return React.createElement(BlogListContent, {key: index, blogContent: this.props.content[value]});
              }, this), 
               this.state.showMore ? React.createElement(BlogListMore, {onClick:  this.onChildClick}) : null
            )
          )
        }
      });

      /**
       * Renders DOM
       * Wrapped in $timeout function as a way of triggering the $apply() method
       * @param posts
       */
      var renderBloglist = function renderBloglist(posts) {

        $timeout(function() {
          React.render(
            React.createElement(BlogList, {content: posts}),
            iElement['0']
          );
        });

      };

      // use $watch to make sure that blog posts are sent from the service
      // before the HTML is rendered

      scope.$watch('totalBlogPosts', function(newValue, oldValue) {

        if (!Object.is(newValue, oldValue) || (Array.isArray(oldValue) && oldValue.length > 0)) {

          // uses $filter put them in date descending order
          var posts = $filter('orderBy')(scope.totalBlogPosts, '-publishedDate');
          // initial # posts displayed is five
          posts = $filter('limitTo')(posts, displayPosts);

          renderBloglist(posts);
        }

      }.bind(this));
    }
  };
}

]);