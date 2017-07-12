(function(module){
  const homeController = {};

  homeController.init = function(){
    $('#team').hide();
    $('#home').fadeIn('slow');
  };

  module.homeController = homeController;
})(window);
