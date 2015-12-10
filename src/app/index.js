'use strict';
angular.module('edpanel', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial'])
  .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider, $locationProvider) {
    // use the HTML5 History API
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    var rootUrl = '';
    var roles = constsProvider.$get().roles;
    //Configure the routes!
    $stateProvider
      .state('login', {
        url: rootUrl + '/login',
        templateUrl: rootUrl + '/components/routecontrollers/login/login.html',
        controller: 'LoginController',
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
