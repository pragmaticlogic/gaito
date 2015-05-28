angular.module('starter.controllers', ['ionic'])

.controller('MainCtrl', function($scope) {
  $scope.model = {selectValue: 1};
})

.controller('DashCtrl', function($scope, Routes, $ionicTabsDelegate) {
  $scope.items = Routes.all();
  $scope.selectItem = function(item) {
    $scope.model.selectValue = item;
    $ionicTabsDelegate.select(1);
  }
})

.controller('ChatsCtrl', function($scope, $timeout, Routes, Timer) {
  $scope.items = Routes.all();
  $scope.toggleTimer = function() {
    Timer.reset();
    Timer.toggle();
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, $interval, Routes, Timer) {
  $scope.route = Routes.get($stateParams.routeItemId);
  $scope.timer = 0;
  $scope.timerMs = 0;
  $scope.action = "Pause";
  $scope.connected = false;

  var convertToHMSm = function (s) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    if(secs < 10) {
      secs = "0"+secs;
    }
    s = (s - secs) / 60;
    var mins = s % 60;
    if(mins < 10) {
      mins = "0"+mins;
    }
    var hrs = (s - mins) / 60;
    if(hrs < 10) {
      hrs = "0"+hrs;
    }
    return hrs + ':' + mins + ':' + secs;
  };

  var pollTimer = function() {
    var time = Timer.getTime();
    $scope.action = Timer.getAction();
    $scope.connected = Timer.getConnectionStatus();
    $scope.timer = convertToHMSm(time);
    $scope.timerMs = time % 1000;
  };

  var interval = $interval(pollTimer, 50);

  $scope.toggle = function() {
    Timer.toggle();
  };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    advancedData: false,
    autoConnect: true
  };
})

.controller('NavCtrl', function($scope, $ionicHistory, $ionicActionSheet, Timer) {
  $scope.navBackConfirm = function() {
    var hideSheet = $ionicActionSheet.show({
      destructiveText: 'Stop route',
      titleText: 'Je hebt de route nog niet afgemaakt. Stoppen met deze route?',
      cancelText: 'Doorgaan',
      cancel: function() {
         },
      destructiveButtonClicked: function() {
        Timer.reset();
        $ionicHistory.goBack();
        return true;
      }
    });
  };
});
