app.directive('borderOnHover', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attribute) {
      element.on('mouseenter', function() {
        element.addClass("specialHoverBorder");
      });
      element.on('mouseleave', function() {
        element.removeClass("specialHoverBorder");
      })
    }
  }
})
