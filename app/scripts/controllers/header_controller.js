'use strict';

angular.module('portfolioApp').controller('HeaderCtrl', ['$scope','LINKS', function ($scope, LINKS) {

  $scope.navigation = {
    items: [
      {
        label: 'My Work',
        href: LINKS.MY_WORK
      },
      {
        label: 'Side Projects',
        href: LINKS.MY_WORK
      },
      {
        label: 'About Me',
        href: LINKS.SIDE_PROJECTS
      },
      {
        label: 'Contact Me',
        href: LINKS.CONTACT_ME
      },
      {
        label: 'Blog',
        href: LINKS.BLOG
      }
    ]
  };

}]);
