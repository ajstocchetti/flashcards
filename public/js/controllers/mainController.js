app.controller('MainController', function($scope, FlashCardsFactory) {
  $scope.activeCat = "";
  $scope.categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
  ];
  $scope.getCategoryCards = function(category) {
      $scope.activeCat = category;
      FlashCardsFactory.getFlashcards(category).then(function(data) {
        $scope.flashCards = data;
      })
    }

  FlashCardsFactory.getFlashcards().then(function(cards) {
    $scope.flashCards = cards;
  });
})
