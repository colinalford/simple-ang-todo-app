angular.module('app', [])
	.controller('ToDoController', function($scope, $http) {
		$scope.formData = {};
	
		$http.get('/todos')
			.success(function(data) {
				$scope.todos = data;
				console.log(data.toSource());
			})
			.error(function(data) {
				console.log('Error: '+data);
			});
		
		$scope.createTodo = function() {
			$http.post('/todos', $scope.formData)
				.success(function(data) {
					$scope.formData = {}; //clears form
					$scope.todos = data;
				})
				.error(function(data) {
					console.log('Error: '+data);
				});
		};
		
		$scope.deleteTodo = function(id) {
			$http.delete('/todos/'+id)
				.success(function(data) {
					$scope.todos = data;
					console.log($scope.todos);
				})
				.error(function(data) {
					console.log('Error: '+data);
				});
		};
	});
