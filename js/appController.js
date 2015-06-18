todoList.controller('ListController', ['$scope',function($scope) {
  $scope.lists = [
    {
      task: 'Walk the dog',
      completion: false
    },
    {
      task: 'Cook dinner',
      completion: true
    }
  ];

  $scope.addTask = function() {
    $scope.lists.push({task:$scope.newTask, done:false});
      $scope.newTask = "";
  };

  console.log($scope.lists);

}]);
