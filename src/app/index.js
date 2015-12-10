'use strict';
angular.module('edpanel', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial'])
  .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider, $locationProvider) {
    // use the HTML5 History API
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    var rootUrl = '';
    //Configure the routes!
    $stateProvider
      .state('land', {
        url: rootUrl + '/',
        templateUrl: rootUrl + 'components/routecontrollers/land/land.html',
        controller: 'LandCtrl',
        data: {}
      });

    $urlRouterProvider.otherwise(rootUrl + '/');
  })
  .factory('UAService', function() {
    return {
      isChrome: /chrome/i.test(navigator.userAgent),
      isSafari: /safari/i.test(navigator.userAgent),
      isIE: /MSIE/i.test(navigator.userAgent),
      isAndroid: /Android/i.test(navigator.userAgent)
    };
  });
