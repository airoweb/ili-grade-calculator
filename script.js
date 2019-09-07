angular.module('ILIGCapp', ['ngMaterial', 'ngMessages'])

  .controller('gradeController', ['$scope', '$mdToast', function ($scope, $mdToast) {
    $scope.calc = function () {
      $scope.sparray = (new Function("return [" + $scope.sp+ "];")());
      $scope.spsum = $scope.sparray.reduce((a, b) => a + b, 0);
      $scope.speaking = Number($scope.spsum / $scope.sparray.length) * 4;

      $scope.rdarray = (new Function("return [" + $scope.rd+ "];")());
      $scope.rdsum = $scope.rdarray.reduce((a, b) => a + b, 0);
      $scope.reading = Number($scope.rdsum / $scope.rdarray.length) * 3;

      $scope.wrarray = (new Function("return [" + $scope.wr+ "];")());
      $scope.wrsum = $scope.wrarray.reduce((a, b) => a + b, 0);
      $scope.writing = Number($scope.wrsum / $scope.wrarray.length) * 1;

      $scope.allaverage = $scope.speaking + $scope.reading + $scope.writing;
      $scope.finalgrade = Number($scope.allaverage / 8).toFixed(2);
      // $mdToast.show(
      //   $mdToast.simple()
      //     .textContent('Class Grade: ' + $scope.finalgrade)
      //     .position("top right")
      //     .theme('success-toast')
      //     .hideDelay(7000)
      // );
    }

    $scope.reset = function () {
      $scope.sp = '';
      $scope.rd = '';
      $scope.wr = '';
    }

  }])
