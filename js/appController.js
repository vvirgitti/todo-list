todoList.controller('ListController', ['$scope',function($scope) {
  $scope.lists = [];

  $scope.addTask = function() {
    $scope.lists.push({'taskName':$scope.newTask, 'isDone':false});
      $scope.newTask = "";
  };

  console.log($scope.lists);
  console.log("########");
  // console.log($scope.addTask(task:"Read the manual", completion:false));y

}]);
