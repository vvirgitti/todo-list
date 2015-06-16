todoList.controller('ListController', ['$scope',function($scope){
  $scope.lists = [
    {
      task: 'Walk the dog',
      completion: 'Todo'
    },
    {
      task: 'Cook dinner',
      completion: 'Done'
    }
  ];
}]);
