ctApp.controller('DashboardController', ['$scope', 'User',
                function($scope, User) {

  $scope.things = ['Angular', 'Rails 4.1', 'Working', 'Together!!'];

  $scope.fillUsers = function(){
    User.query().then(function(result){
      $scope.users = result;
    });
  }
  $scope.fillUsers();

}]);
