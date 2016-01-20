'use strict';
angular.module('edpanel').controller('RootCtrl', ['$scope', '$state', 'api', 'UAService','$mdDialog', '$mdMedia',
  function($scope, $state, api, UAService, $mdDialog, $mdMedia) {
    $scope.UAService = UAService;
    $scope.api = api;
    if($state.current.name === 'root') {
      $state.go('root.land');
    }
    $scope.dialogController = function($scope, $mdDialog) {
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.submit = function(answer) {
        $mdDialog.hide(answer);
        if($scope.message) {
          api.contactUs.save({}, $scope.message);
        }
      };
      $scope.types = ['Teacher', 'Administrator', 'Student', 'Potential Partner', 'Potential Team Member', 'Potential Investor'];
      $scope.message = {};
    };
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
    $scope.showContactForm = function(ev) {
      var sc = $scope.$new();
      sc.api = api;
      $mdDialog.show({
        scope: sc,
        controller: DialogController,
        templateUrl: api.basePrefix + '/components/routecontrollers/root/contactus.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        openFrom: ev.el,
        closeTo: ev.el,
        clickOutsideToClose:true,
        fullscreen: $mdMedia('sm') && $scope.customFullscreen
      }).then(function(answer) {
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
      $state.go('root.land', {});
    };
  }]);
var VideoDialogController = function($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
    if($scope.message) {
      $scope.api.contactUs.save({}, $scope.message);
    }
  };
  $scope.types = ['Teacher', 'Administrator', 'Student', 'Potential Partner', 'Potential Team Member', 'Potential Investor'];
  $scope.message = {};
};

var DialogController = function($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
    if($scope.message) {
      $scope.api.contactUs.save({}, $scope.message);
    }
  };
  $scope.types = ['Teacher', 'Administrator', 'Student', 'Potential Partner', 'Potential Team Member', 'Potential Investor'];
  $scope.message = {};
};