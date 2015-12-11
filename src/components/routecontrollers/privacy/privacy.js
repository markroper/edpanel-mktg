'use strict';
angular.module('edpanel')
  .controller('PrivacyCtrl', ['$scope', 'api', '$state', '$window', '$location',
    function ($scope, api, $state, $window, $location) {
      $scope.$on('$viewContentLoaded', function() {
        $window.ga('send', 'pageview', { page: $location.url() });
      });
    }]);