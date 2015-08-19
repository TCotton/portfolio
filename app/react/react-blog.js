/** @jsx React.DOM */
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

  /* This takes the blog data and loops over it through a map function */
  window.blogList = React.createClass({displayName: "blogList",
    render: function() {
      return (
        React.createElement("div", null, 
          Object.keys(this.props).map(function(value, index) {
            return React.createElement(window.BlogListContent, {key: index, blogContent: this.props[value]});
          }, this)
        )
      )
    }
  });

  /* This is the HTML of the individual blog section
   Inbetween the article tags are three sections:
   1. Header
   2. Main Section
   3. Footer
   */
  window.BlogListContent = React.createClass({displayName: "BlogListContent",
    // creates link to blog article
    displayLink: function() {
      return '/#!/blog/' + this.props.blogContent.uniqueId + '/' + this.props.blogContent.url;
    },
    render: function() {
      return (
        React.createElement("article", null, 
          React.createElement(window.BlogListHeader, {content: this.props.blogContent, link: this.displayLink()}), 
          React.createElement(window.BlogListSection, {content: this.props.blogContent}), 
          React.createElement(window.BlogListFooter, {content: this.props.blogContent, link: this.displayLink()})
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
  window.BlogListHeader = React.createClass({displayName: "BlogListHeader",

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
  window.BlogListSection = React.createClass({displayName: "BlogListSection",
    render: function() {
      return (
        React.createElement("section", null, 
          React.createElement("h3", {className: "blog-title"}, this.props.content.title), 
          React.createElement("p", {className: "date"}, this.props.content.publishedDate), 
          React.createElement("p", null, this.props.content.contentSnippet)
        )
      )
    }
  });

  /* The footer contains the read more link */
  window.BlogListFooter = React.createClass({displayName: "BlogListFooter",
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

  app.value('projects', window.projects);
  app.value('blogList', window.blogList);

})(window, document, React);