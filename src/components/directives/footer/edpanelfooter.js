'use strict';
angular.module('edpanel')
  .directive('edpanelfooter', [ '$window', 'api', '$state', function($window, api, $state) {
    return {
      scope: {
        attendanceDataPromise: '=',
        slideClosed: '='
      },
      restrict: 'E',
      templateUrl: api.basePrefix + '/components/directives/footer/edpanelfooter.html',
      replace: true,
      controllerAs: 'ctrl',
      link: function($scope){
        $scope.goToHome = function() {
          $state.go('root.land');
        };
        $scope.goToPrivacy = function() {
          $state.go('root.privacy');
        };
        $scope.goToAbout = function() {
          $state.go('root.about');
        };
      }
    };
  }]);
