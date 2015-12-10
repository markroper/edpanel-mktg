'use strict';

angular.module('edpanel')
  .directive('edpanelEnterKeypress', function() {
    return function(scope, element, attrs) {

        element.bind('keydown keypress', function(event) {
            var keyCode = event.which || event.keyCode;

            // If enter key is pressed
            if (keyCode === 13) {
                scope.$apply(function() {
                        // Evaluate the expression
                    scope.$eval(attrs.edpanelEnterKeypress);
                });
                event.preventDefault();
            }
        });
    };
  })
  .controller('LandCtrl', ['$scope', 'api', '$state', '$window', '$location','$mdDialog', '$mdMedia',
    function ($scope, api, $state, $window, $location, $mdDialog, $mdMedia) {
      $scope.$on('$viewContentLoaded', function() {
        $window.ga('send', 'pageview', { page: $location.url() });
      });
      $scope.goToHome = function() {

      }
      $scope.showContactForm = function(ev) {
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'components/routecontrollers/land/contactus.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          openFrom: ev.el,
          closeTo: ev.el,
          clickOutsideToClose:true,
          fullscreen: $mdMedia('sm') && $scope.customFullscreen
        })
          .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
            $scope.status = 'You cancelled the dialog.';
          });
        $scope.$watch(function() {
          return $mdMedia('sm');
        }, function(sm) {
          $scope.customFullscreen = (sm === true);
        });
      };
      $scope.goToHome = function() {
        $state.go('land', {schoolId: statebag.school.id});
      }
  }]);

function DialogController($scope, $mdDialog) {
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.submit = function(answer) {
    $mdDialog.hide(answer);
  };
  $scope.types = ['Potential Customer', 'Potential Partner', 'Potential Team Member', 'Potential Investor'];
  $scope.message = {};
}
