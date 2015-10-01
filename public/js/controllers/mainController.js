app.controller('MainController', function($scope, FlashCardsFactory, CategoryFactory) {
  $scope.activeCat = "";
  $scope.categories = CategoryFactory.getCategories();
  // $scope.categories = [
  //   'MongoDB',
  //   'Express',
  //   'Angular',
  //   'Node'
  // ];
  $scope.getCategoryCards = function(category) {
      $scope.loading = true;
      $scope.activeCat = category;
      FlashCardsFactory.getFlashcards(category).then(function(data) {
        $scope.flashCards = data;
        $scope.loading = false;
      })
    };
  $scope.getCategoryCards();

  // FlashCardsFactory.getFlashcards().then(function(cards) {
  //   $scope.flashCards = cards;
  // });
})
