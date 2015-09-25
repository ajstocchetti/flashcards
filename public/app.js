var app = angular.module('FlashCards', []);

app.factory('FlashCardsFactory', function($http) {
  return {
    getFlashcards: function(cat) {
      var params = {};
      if (cat) {
        params.category = cat;
      }
      return $http.get('/cards', { params: params }).then(function(resp) {
        return resp.data;
      });
    }
  }
});

app.controller('MainController', function($scope, FlashCardsFactory) {
      $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
      ];
      $scope.getCategoryCards = function(category) {
        FlashCardsFactory.getFlashcards(category).then(function(data) {
          $scope.flashCards = data;
        })
      }
        // $scope.getCategoryCards = function(category) {
        //   FlashCardsFactory.getFlashcards().then(function(allCards) {
        //     $scope.flashCards = allCards.filter(function(card) {
        //       if( card.category === category)
        //         return card;
        //       });
        //     });
        //   }


        // $scope.flashCards = FlashCardsFactory.getFlashcards();
        FlashCardsFactory.getFlashcards().then(function(cards) {
          $scope.flashCards = cards;
        });
          // $scope.flashCards = [{
          //   question: 'What is Angular?',
          //   answers: [{
          //     text: 'A front-end framework for great power!',
          //     correct: true
          //   }, {
          //     text: 'Something lame, who cares, whatever.',
          //     correct: false
          //   }, {
          //     text: 'Some kind of fish, right?',
          //     correct: false
          //   }]
          // }, {
          //   question: 'What is a controller?',
          //   answers: [{
          //     text: 'Something that manages my front-end routes',
          //     correct: false
          //   }, {
          //     text: 'A function that allows me to manage a scope',
          //     correct: true
          //   }, {
          //     text: 'An Angular template',
          //     correct: false
          //   }]
          // }, {
          //   question: 'What does {{ }} do?',
          //   answers: [{
          //     text: 'It runs some Javascript',
          //     correct: false
          //   }, {
          //     text: 'It looks for variables in HTML',
          //     correct: false
          //   }, {
          //     text: 'It runs an Angular expression that accesses my $scope',
          //     correct: true
          //   }]
          // }];
      })

    app.controller('FlashCardController', function($scope) {
      $scope.setVals = function(flashCard) {
        $scope.flashCard = flashCard;
      }
      $scope.answered = false;
      $scope.answeredCorrectly = false;
      $scope.answerQuestion = function(isCorrect) {
        console.log("your answer was ", isCorrect);
        $scope.answered = true;
        $scope.answeredCorrectly = isCorrect;
      };
    });
