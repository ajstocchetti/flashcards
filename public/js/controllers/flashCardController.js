app.controller('FlashCardController', function($scope, ScoreFactory) {
  $scope.setVals = function(flashCard) {
    $scope.flashCard = flashCard;
  }
  $scope.answered = false;
  $scope.answeredCorrectly = false;
  $scope.answerQuestion = function(isCorrect) {
    $scope.answered = true;
    $scope.answeredCorrectly = isCorrect;
    if(isCorrect) {
      ScoreFactory.correct += 1;
    } else {
      ScoreFactory.incorrect += 1;
    }
  };
});
