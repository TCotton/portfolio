(function(window, document, React) {

  'use strict';

  var app = angular.module('portfolioApp.angularReact');

  app.directive('blogDirective', ['$timeout', '$filter', function($timeout, $filter) {

    var BlogList;
    var displayPosts = 5;

    /* This is the HTML of the individual blog section
     Inbetween the article tags are three sections:
     1. Header
     2. Main Section
     3. Footer
     */
    var BlogListContent = React.createClass({
      shouldComponentUpdate: function(nextProps) {
        return this.props.value !== nextProps.value;
      },
      // creates link to blog article
      displayLink: function() {
        return '/#!/blog/' + this.props.blogContent.uniqueId + '/' + this.props.blogContent.url;
      },
      render: function() {
        return (
          <article>
            <BlogListHeader content={this.props.blogContent} link={this.displayLink()}/>
            <BlogListSection content={this.props.blogContent}/>
            <BlogListFooter content={this.props.blogContent} link={this.displayLink()}/>
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
    var BlogListHeader = React.createClass({

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
                <source type="image/webp" media="(max-width: 480px)" srcSet={this.srcsetImage('webpSmall')}/>
                <source type="image/jpeg" media="(max-width: 480px)" srcSet={this.srcsetImage('jpeg')}/>
                <source type="image/webp" media="(min-width: 481px)" srcSet={this.srcsetImage('webpLarge')}/>
                <img src={this.props.content.displayImage} alt=""/>
              </picture>
            </a>
          </header>
        )
      }
    });

    /* The section contains the blog article title, publication date and snippet */
    var BlogListSection = React.createClass({
      render: function() {
        return (
          <section>
            <h3 className="blog-title">{this.props.content.title}</h3>
            <p className="date">{$filter('date')(this.props.content.publishedDate)}</p>
            <p>{this.props.content.contentSnippet}</p>
          </section>
        )
      }
    });

    /* The footer contains the read more link */
    var BlogListFooter = React.createClass({
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

    /* Adds the more posts link at the bottom of hte exposed articles */
    var BlogListMore = React.createClass({
      shouldComponentUpdate: function(nextProps) {
        return this.props.value !== nextProps.value;
      },
      render: function() {
        return (
          <div id="more-posts" className="clearfix" onClick={this.props.onClick}>
            <div><h6>More posts</h6></div>
            <div><span className="down-arrow"></span></div>
          </div>
        )
      }
    });

    return {
      restrict: 'E',
      replace: true,
      link: function(scope, iElement) {

        BlogList = React.createClass({

          onChildClick: function() {
            displayPosts = (displayPosts + 5);
            var posts = $filter('orderBy')(scope.totalBlogPosts, '-publishedDate');
            posts = $filter('limitTo')(posts, displayPosts);
            renderBloglist(posts);
          },

          render: function() {
            return (
              <div>
                {Object.keys(this.props.content).map(function(value, index) {
                  return <BlogListContent key={index} blogContent={this.props.content[value]}/>;
                }, this)}
                <BlogListMore onClick={ this.onChildClick }/>
              </div>
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
              <BlogList content={posts}/>,
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

})(window, document, React);