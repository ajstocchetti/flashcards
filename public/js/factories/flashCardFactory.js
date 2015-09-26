app.factory('FlashCardsFactory', function($http) {
  return {
    getFlashcards: function(cat) {
      var params = {};
      if (cat) {
        params.category = cat;
      }
      return $http.get('/cards', {
        params: params
      }).then(function(resp) {
        return resp.data;
      });
    }
  }
});
