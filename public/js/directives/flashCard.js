app.directive('flashCard', function() {
  return {
    scope: {
      flashCard: '='
    },
    restrict: 'E',
    templateUrl: '/js/directives/flashCard.html'
  }
})
