app.factory('CategoryFactory', function() {
  return {
    getCategories: function() {
      return   [
          'MongoDB',
          'Express',
          'Angular',
          'Node'
        ];
    }
  };
});
