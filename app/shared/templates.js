angular.module('appTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('homepage/homepage_stats.html',
    '<span data-ng-repeat="statsBlock in stats track by $index"><header class="front-page-bottom-header" data-ng-bind-html="statsBlock.header"></header><section class="front-page-bottom-text" data-ng-bind-html="statsBlock.section"></section></span>'
  );


  $templateCache.put('homepage/main.html',
    '<div data-slider-directive data-slider="slider"></div><div id="homepage-stats" class="clearfix" data-homepage-stats-directive></div>'
  );


  $templateCache.put('side-projects/projects_page.html',
    '<div id="banner"><section><h2 class="page-top-title" data-ng-bind="title"></h2><p class="page-top-text-banner" data-ng-bind="summary"></section></div><!-- end banner --><div id="main-content" class="clearfix my-work content-text" ng-init="ProjPageCtrl.findData()"><div id="left-small"><article><div data-ng-bind-html="details"></div><p class="minor-title">Code used:<p data-ng-bind="code"></article><div class="pagination visible-desktop"><a data-ng-href="{{prevPage}}" class="paglast"></a> <a href="/work-projects/" class="pagHome"></a> <a data-ng-href="{{nextPage}}" class="pagnext"></a></div><!-- end pagination --></div><!-- end left small --><div id="right-large"><a ng-href="{{::externalUrl}}"><picture class="ng-cloak"><source type="image/webp" ng-srcset="{{::workImageWebP}}"><source type="image/jpeg" ng-srcset="{{::workImage}}"><img ng-src="{{::workImage}}" alt="{{::title}}"></picture></a><div class="pagination clearfix hidden-desktop"><a data-ng-href="{{prevPage}}" class="paglast"></a> <a href="/side-projects" class="pagHome"></a> <a data-ng-href="{{nextPage}}" class="pagnext"></a></div><!-- end pagination --></div><!-- end right large --></div><!-- end main-content -->'
  );


  $templateCache.put('side-projects/side_projects.html',
    '<div id="banner"><section><h2 class="page-top-title">Side projects</h2></section></div><!-- end banner --><data-projects-react-directive data="ProjPageCtrl.SIDE_PROJECTS"></data-projects-react-directive>'
  );


  $templateCache.put('work-projects/my_work.html',
    '<div id="banner"><section><h2 class="page-top-title">Work projects</h2></section></div><!-- end banner --><data-projects-react-directive data="WorkProjPageCtrl.WORK_PROJECTS"></data-projects-react-directive>'
  );


  $templateCache.put('work-projects/work_page.html',
    '<div id="banner"><section><h2 class="page-top-title" data-ng-bind-html="title"></h2><p class="page-top-text-banner" data-ng-bind="summary"></section></div><!-- end banner --><div id="main-content" class="clearfix my-work content-text" ng-init="WorkProjPageCtrl.findData();"><div id="left-small"><article><div data-ng-bind-html="details"></div><p class="minor-title">Code used:<p data-ng-bind="code"><p class="minor-title">Company:<p data-ng-bind="company"></article><div class="pagination visible-desktop"><a data-ng-href="{{prevPage}}" rel="prev" class="paglast"></a> <a href="/work-projects/" class="pagHome"></a> <a data-ng-href="{{nextPage}}" rel="next" class="pagnext"></a></div><!-- end pagination --></div><!-- end left small --><div id="right-large"><picture class="ng-cloak"><source type="image/webp" ng-srcset="{{::workImageWebP}}"><img ng-src="{{::workImage}}" alt="{{::title}}"></picture><div class="pagination clearfix hidden-desktop"><a data-ng-href="{{prevPage}}" rel="prev" class="paglast"></a> <a href="/work-projects/" class="pagHome"></a> <a data-ng-href="{{nextPage}}" rel="next" class="pagnext"></a></div><!-- end pagination --></div><!-- end right large --></div><!-- end main-content -->'
  );


  $templateCache.put('blog-comments/comment.html',
    '<div class="form" data-ng-controller="CommentCtrl as BlogCommentCtrl"><h5 class="content-title" data-ng-if="!commentsOpen">Blog comments are not open for this article</h5><span itemscope itemtype="http://www.schema.org/UserComments"><h5 class="content-title" data-ng-if="commentsOpen" data-ng-init="BlogCommentCtrl.retreiveComment()">Comments below</h5><div class="visuallyhidden">for the article <span itemprop="discusses">{{pageTitle}}</span></div><div data-ng-repeat="comment in publishComments | orderBy: \'publishedDate\' track by $index"><div data-comment-directive data-comment="comment"></div></div></span><p data-ng-if="formSuccess" class="comment-form-success" data-ng-bind="formSuccess" tabindex="0"><div class="comment-form-entry" data-ng-bind="commentFormData.message"></div><p data-ng-if="formFailure" class="comment-form-failure" data-ng-bind="formFailure" tabindex="0"><form novalidate name="commentForm" data-ng-if="commentsOpen" data-ng-submit="BlogCommentCtrl.submitComment(commentForm.$valid)"><span class="form__division-blocks"><label for="name" class="visuallyhidden">Your name</label><span data-ng-if="commentForm.name.$invalid && commentBlogFormSubmit" class="form__error-message" aria-labelledby="name" role="alert" tabindex="0">Error: Please provide a name.</span> <input type="text" name="name" id="name" value="" placeholder="Name" required aria-required="true" data-ng-model="commentFormData.name" data-ng-required="true" class="form__input" maxlength="120"> </span><span class="form__division-blocks"><label for="email" class="visuallyhidden">Your email address</label><span data-ng-if="commentForm.email.$invalid && commentBlogFormSubmit" class="form__error-message" aria-labelledby="email" role="alert" tabindex="0">Error: Please provide an email address.</span> <input type="email" name="email" id="email" value="" placeholder="Email (will be kept private)" required data-ng-model="commentFormData.email" data-ng-required="true" aria-required="true" class="form__input" maxlength="200" autocorrect="off" autocapitalize="off"> </span><span class="form__division-blocks"><label for="url" class="visuallyhidden">Your website address</label><input type="url" id="url" name="url" value="" placeholder="Website" class="form__input" data-ng-model="commentFormData.url" maxlength="200" autocorrect="off" autocapitalize="off"> </span><span class="form__division-blocks"><label for="message" class="visuallyhidden">Your comments</label><span data-ng-if="commentForm.message.$invalid && commentBlogFormSubmit" class="form__error-message" aria-labelledby="message" role="alert" tabindex="0">Error: Please provide a comment.</span><textarea id="message" cols="10" rows="10" placeholder="Your message" data-ng-required="true" aria-required="true" data-ng-model="commentFormData.message" name="message" required class="form__textarea" maxlength="2000"></textarea></span><span class="hide"><label for="zipcode" class="hide">Your zipcode</label><input type="text" id="zipcode" value="" data-ng-pattern="zipRegex" data-ng-model="commentFormData.zipcode" class="hide"> </span><input type="hidden" value="" data-ng-model="commentFormData.blogId"> <input type="submit" value="Post message" class="button-contact" data-ng-disabled="formSuccess"></form></div><!-- end comments -->'
  );


  $templateCache.put('blog-pages/blog.html',
    '<div id="banner"><section><h2 class="page-top-title">blog unblock</h2></section></div><!-- end banner --><div id="main-content" class="clearfix blog content-text"><div id="left-large"><!-- repeat old blog posts here --><data-blog-react-directive></data-blog-react-directive>&nbsp;</div><!-- end left large --><div data-ng-include src="\'../blog-sidebar/sidebar.html\'"></div><!-- end right small --></div><!-- end main content -->'
  );


  $templateCache.put('blog-pages/blog_category.html',
    '<div id="banner"><section><a href="/blog/"><h2 class="page-top-title">blog unblock / {{::cats.title}}</h2></a></section></div><!-- end banner --><div id="main-content" class="clearfix blog content-text"><div id="left-large"><!-- repeat old blog posts here --><data-blog-react-directive></data-blog-react-directive>&nbsp;</div><!-- end left large --><div data-ng-include src="\'../blog-sidebar/sidebar.html\'"></div><!-- end right small --></div><!-- end main content -->'
  );


  $templateCache.put('blog-pages/blog_page.html',
    '<div id="banner"><section><a href="/blog/"><h2 class="page-top-title">blog unblock</h2></a></section></div><!-- end banner --><div id="main-content" class="clearfix blog blog-single content-text"><div id="left-large"><article itemscope itemtype="http://schema.org/BlogPosting"><header><picture class="ng-cloak"><source type="image/jpeg" media="(max-width: 480px)" data-ng-srcset="{{::displaySrcsetImage}}"><source type="image/webp" media="(max-width: 480px)" data-ng-srcset="{{::displaySrcsetImage +  \'.webp\'}}"><source type="image/jpeg" media="(min-width: 480px)" data-ng-srcset="{{::displayImage}}"><source type="image/webp" media="(min-width: 480px)" data-ng-srcset="{{::displayImage + \'.webp\'}}"><img data-ng-src="{{::displayImage}}" alt="Background image for {{title}}"></picture></header><section data-codepen-directive data-twitter-directive data-vine-directive><h3 class="blog-title" data-ng-bind="title" itemprop="headline"></h3><p class="date"><span data-ng-bind="author" itemprop="author"></span> / Category: <a data-ng-href="/category/{{category.toLowerCase()}}" rel="tag" data-ng-bind="category" itemprop="keywords"></a> / <span data-ng-bind="publishedDate | date" itemprop="datePublished"></span> / <span data-ng-bind="wordCount" itemprop="wordCount"></span> words<aside data-ng-bind-html="aside"></aside><div data-compile="content" itemprop="articleBody"></div></section><footer><p><a href="#" class="scroll-top" data-scroll-to-top>Scroll to top</a></p><a target="_blank" data-ng-href="https://twitter.com/intent/tweet?text={{title}}&url={{URLencoded}}"><img src="data:image/png;base64,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" alt="Tweet this article"></a></footer></article><div data-ng-include src="\'../blog-comments/comment.html\'"></div></div><!-- end left large --><div data-ng-include src="\'../blog-sidebar/sidebar.html\'"></div><!-- end right small --></div><!-- end main content -->'
  );


  $templateCache.put('blog-sidebar/sidebar.html',
    '<div id="right-small" data-ng-controller="SidebarCtrl"><data-blog-sidebar-react-directive></data-blog-sidebar-react-directive>&nbsp;</div>'
  );


  $templateCache.put('about-me/about_me.html',
    '<div id="banner"><section><h2 class="page-top-title">About me</h2></section></div><!-- end banner --><div id="main-content" class="clearfix aboutme content-text" itemscope itemtype="http://schema.org/ProfilePage"><div id="left-large"><h3 class="content-title">A little bit about myself</h3><p>I built my first website with Microsoft Frontpage in 2002, committing myself full-time to web development from 2008 onwards.<p>During this time I have worked with a wide variety of companies and individuals that range from sole traders to multinational corporations.<p>I particularly enjoy working in a team and take great pride in my craftsmanship so as to produce the highest quality code.<h4 class="content-title">My core skill sets and strengths</h4><section class="clearfix"><div class="button-skills-aboutme section per_90"><span>HTML5</span></div><div class="button-skills-aboutme section per_90"><span>CSS3</span></div><div class="button-skills-aboutme section per_80"><span>JavaScript</span></div><div class="button-skills-aboutme section per_80"><span>AngularJS</span></div><div class="button-skills-aboutme section per_70"><span>SASS</span></div><div class="button-skills-aboutme section per_70"><span>npm</span></div><div class="button-skills-aboutme section per_70"><span>Accessibility</span></div><div class="button-skills-aboutme section per_70"><span>Git</span></div><div class="button-skills-aboutme section per_70"><span>Wordpress</span></div><div class="button-skills-aboutme section per_60"><span>ReactJS</span></div><div class="button-skills-aboutme section per_50"><span>MongoDB</span></div><div class="button-skills-aboutme section per_50"><span>node.js</span></div><div class="button-skills-aboutme section per_50"><span>PhotoShop</span></div><div class="button-skills-aboutme section per_50"><span>Usability</span></div><div class="button-skills-aboutme section per_30"><span>backbone.js</span></div><div class="button-skills-aboutme section per_100"><span>Willingness to learn more</span></div></section><!-- end skills set --></div><!-- end left large --><div id="right-small"><h5 class="content-title">My CV and online profiles</h5><p>Please read my Stack Overflow Careers 2.0 page:<br><a href="https://careers.stackoverflow.com/andyw" rel="external" class="underline">https://careers.stackoverflow.com/andyw</a></p><a href="https://twitter.com/andywalpole"><p><img src="/images/svg/twitter.svg" alt="Twitter account of Andy Walpole"></p></a><p><img ng-src="/images/andyw.jpg" alt="yours truly, the author of this portfolio and blog"></div><!-- end right small --></div><!-- end main content -->'
  );


  $templateCache.put('contact/contact_me.html',
    '<div id="banner"><section><h2 class="page-top-title">Contact me</h2></section></div><!-- end banner --><div id="main-content" class="clearfix form content-text" itemscope itemtype="http://schema.org/ContactPage"><div class="contact__left-large"><div class="hidden-desktop"><h4 class="content-title">Get in touch left</h4><p>Andy Walpole<br>Web Developer<p>07858756827<br><a href="mailto:me@andywalpole.me?Subject=Contact%20from%20portfolio" class="underline">me@andywalpole.me</a></div><!-- end hidden-desktop --><h3 class="content-title">Send a message</h3><p data-ng-if="contact.successMessage" data-ng-bind="contact.successMessage"><p data-ng-if="formFailure" class="comment-form-failure" data-ng-bind="formFailure" tabindex="0"><form novalidate name="contactForm" data-ng-submit="AdminFormCtrl.submitContactForm(contactForm.$valid)"><span class="form__division-blocks"><label for="name" class="visuallyhidden">Your full name</label><span data-ng-if="contactForm.name.$invalid && submitted" class="form__error-message" tabindex="0" aria-labelledby="name" role="alert">Please supply your name.</span> <input type="text" id="name" name="name" value="" placeholder="Your full name" required class="form__input" data-ng-required="true" data-ng-model="contact.name" maxlength="64"> </span><span class="form__division-blocks"><label for="email" class="visuallyhidden">Your email address</label><span data-ng-if="contactForm.email.$invalid && submitted" class="form__error-message" tabindex="0" aria-labelledby="email" role="alert">Please supply a valid email address.</span> <input type="email" id="email" name="email" value="" placeholder="Your email address" required class="form__input" data-ng-required="true" data-ng-model="contact.email" maxlength="64" autocorrect="off" autocapitalize="off"> </span><span class="form__division-blocks"><label for="message" class="visuallyhidden">Please write a message</label><span data-ng-if="contactForm.message.$invalid && submitted" class="form__error-message" tabindex="0" aria-labelledby="message" role="alert">Don\'t forget to write a message!</span><textarea id="message" cols="10" rows="10" name="message" placeholder="Your message" required class="form__textarea" data-ng-required="true" data-ng-model="contact.message" maxlength="1000"></textarea></span><span class="hide"><label for="zipcode" class="hide">Your zipcode</label><input type="text" id="zipcode" name="zipcode" value="" data-ng-pattern="zipRegex" data-ng-model="contact.zipcode" class="hide"> </span><input type="submit" value="Send message" class="button-contact" data-ng-disabled="contact.successMessageDisable"></form></div><!-- end left-large --><div class="contact__right-small"><h4 class="content-title">Get in touch</h4><p>Andy Walpole<br>Web Developer<p>07858756827<br><a href="mailto:me@andywalpole.me?Subject=Contact%20from%20portfolio" class="underline">me@andywalpole.me</a></div><!-- end right-small --></div><!-- end main-content -->'
  );

}]);
