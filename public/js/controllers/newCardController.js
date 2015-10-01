app.controller('NewCardController', function($scope, $http, CategoryFactory) {

$scope.categories = CategoryFactory.getCategories();
$scope.newCard = {
    question: null,
    category: null,
    answers: [
        { text: null, correct: false },
        { text: null, correct: false },
        { text: null, correct: false }
    ]
};
$scope.sendNew = function() {
  var data = { card: $scope.newCard }
  $http.post('/cards', data).then(function(response) {
    console.log(response)});
};
});
