app.directive('flashCard', function() {
  return {
    scope: {
      flashCard: '='
    },
    restrict: 'E',
    templateUrl: '/js/directives/flashCard.html',
    link: function(scope, element, attribute) {
      console.log(scope.flashCard)
    }
  }
})
