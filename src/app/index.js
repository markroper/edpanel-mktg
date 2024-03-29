'use strict';
angular.module('edpanel', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial'])
  .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider, $locationProvider) {
    // use the HTML5 History API
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    var rootUrl = '/home';
    //Configure the routes!
    $stateProvider
      .state('root', {
        url: rootUrl + '',
        templateUrl: rootUrl + '/components/routecontrollers/root/root.html',
        controller: 'RootCtrl',
        data: {}
      })
      .state('root.land', {
        url: '/',
        templateUrl: rootUrl + '/components/routecontrollers/land/land.html',
        controller: 'LandCtrl',
        data: {}
      })
      .state('root.privacy', {
        url: '/privacy',
        templateUrl: rootUrl + '/components/routecontrollers/privacy/privacy.html',
        controller: 'PrivacyCtrl',
        data: {}
      })
      .state('root.about', {
        url: '/about',
        templateUrl: rootUrl + '/components/routecontrollers/about/about.html',
        controller: 'AboutCtrl',
        data: {}
      });
    $mdThemingProvider.theme('default')
      .primaryPalette('light-green', {
        'default': '300', // by default use shade 400 from the pink palette for primary intentions
        'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
        'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
        'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
      })
      .accentPalette('orange');
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
