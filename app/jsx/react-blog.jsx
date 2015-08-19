/** @jsx React.DOM */
(function(window, document, React) {

  'use strict';

  var app = angular.module('portfolioApp.angularReact');

  /* window.projects && window.Content is used in hte display for work and personal projects */
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

  /* This takes the blog data and loops over it through a map function */
  window.blogList = React.createClass({
    render: function() {
      return (
        <div>
          {Object.keys(this.props).map(function(value, index) {
            return <window.BlogListContent key={index} blogContent={this.props[value]}/>;
          }, this)}
        </div>
      )
    }
  });

  /* This is the HTML of the individual blog section
   Inbetween the article tags are three sections:
   1. Header
   2. Main Section
   3. Footer
   */
  window.BlogListContent = React.createClass({
    // creates link to blog article
    displayLink: function() {
      return '/#!/blog/' + this.props.blogContent.uniqueId + '/' + this.props.blogContent.url;
    },
    render: function() {
      return (
        <article>
          <window.BlogListHeader content={this.props.blogContent} link={this.displayLink()} />
          <window.BlogListSection content={this.props.blogContent} />
          <window.BlogListFooter content={this.props.blogContent} link={this.displayLink()} />
        </article>
      )
    }
  });

  /* The blog section header is the image. There are three different types of images
   1. type="image/webp" -> small
   2. type="image/jpeg" -> small
   3. type="image/webp" -> large
   Plus a default for those browsers which don't support the latest HTML5 responsive image markup
   */
  window.BlogListHeader = React.createClass({

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
        <header>
          <a href={this.props.link}>
            <picture>
              <source type="image/webp" media="(max-width: 480px)" srcSet={this.srcsetImage('webpSmall')} />
              <source type="image/jpeg" media="(max-width: 480px)" srcSet={this.srcsetImage('jpeg')} />
              <source type="image/webp" media="(min-width: 481px)" srcSet={this.srcsetImage('webpLarge')} />
              <img src={this.props.content.displayImage} alt=""/>
            </picture>
          </a>
        </header>
      )
    }
  });

  /* The section contains the blog article title, publication date and snippet */
  window.BlogListSection = React.createClass({
    render: function() {
      return (
        <section>
          <h3 className="blog-title">{this.props.content.title}</h3>
          <p className="date">{this.props.content.publishedDate}</p>
          <p>{this.props.content.contentSnippet}</p>
        </section>
      )
    }
  });

  /* The footer contains the read more link */
  window.BlogListFooter = React.createClass({
    render: function() {
      return (
        <footer>
          <p className="read-more">
            <a href={this.props.link} className="underline">Read more...</a>
          </p>
        </footer>
      )
    }
  });

  app.value('projects', window.projects);
  app.value('blogList', window.blogList);

})(window, document, React);