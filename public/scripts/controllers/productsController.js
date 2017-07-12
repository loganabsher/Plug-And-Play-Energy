(function(module){
  const productsController = {};

  productsController.init = function(){
    $('#home').hide();
    $('#projects').hide();
    $('#live-data').hide();
    $('#team').hide();
    $('#products').fadeIn('slow');
  };

  module.productsController = productsController;
})(window);
