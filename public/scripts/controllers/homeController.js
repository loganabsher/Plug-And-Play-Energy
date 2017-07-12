(function(module){
  const homeController = {};

  homeController.init = function(){
    $('#products').hide();
    $('#projects').hide();
    $('#live-data').hide();
    $('#team').hide();
    $('#home').fadeIn('slow');
  };

  module.homeController = homeController;
})(window);
