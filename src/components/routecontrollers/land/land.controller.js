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
  .controller('LandCtrl', ['$scope', 'api', '$state', '$window', '$location','$mdDialog','$mdMedia',
    function ($scope, api, $state, $window, $location, $mdDialog, $mdMedia) {
        $scope.showDemo = function(ev) {
            var sc = $scope.$new();
            sc.api = api;
            $mdDialog.show({
                scope: sc,
                controller: DialogController,
                templateUrl: api.basePrefix + '/components/routecontrollers/root/showdemo.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                openFrom: ev.el,
                closeTo: ev.el,
                clickOutsideToClose:true,
                fullscreen: $mdMedia('sm') && $scope.customFullscreen
            })
        };
        $scope.image = [{
            src: "../../../assets/images/CaseOne.jpg"
        }];
        $(document).ready(function(){
            $('.slider').slider({full_width: true});
        });
      $scope.$on('$viewContentLoaded', function() {
        $window.ga('send', 'pageview', { page: $location.url() });

      });
  }]);